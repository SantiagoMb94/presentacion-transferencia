<template>
  <div class="presentation-wrapper" :class="{ 'fullscreen-mode': isFullscreen }">
    <!-- Virtual Laser Pointer -->
    <LaserPointer :is-active="isLaserActive" />

    <!-- Top & Bottom Presentation Navigation -->
    <NavigationControls
      :current-index="currentIndex"
      :total-slides="slides.length"
      :current-slide="currentSlide"
      :is-laser-active="isLaserActive"
      :is-muted="isMuted"
      :is-notes-open="isNotesOpen"
      :is-fullscreen="isFullscreen"
      @prev="prevSlide"
      @next="nextSlide"
      @toggle-laser="toggleLaser"
      @toggle-audio="handleToggleAudio"
      @toggle-notes="toggleNotes"
      @open-overview="isOverviewOpen = true"
      @toggle-fullscreen="toggleFullscreen"
      @open-shortcuts="isShortcutsOpen = true"
      @jump="jumpToSlide"
    />

    <!-- Main Screen Presentation Canvas (Interactive View) -->
    <main class="slide-viewport no-print" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
      <transition :name="transitionDirection" mode="out-in">
        <component
          :is="currentSlideComponent"
          :key="currentIndex"
          @next="nextSlide"
          @open-overview="isOverviewOpen = true"
          @open-notes="isNotesOpen = true"
          @go-first="jumpToSlide(0)"
        />
      </transition>
    </main>

    <!-- Presenter Notes Drawer -->
    <PresenterNotesDrawer
      :is-open="isNotesOpen"
      :current-slide="currentSlide"
      @close="isNotesOpen = false"
    />

    <!-- Overview Grid Modal -->
    <OverviewModal
      :is-open="isOverviewOpen"
      :slides="slides"
      :current-idx="currentIndex"
      @close="isOverviewOpen = false"
      @jump="jumpToSlide"
    />

    <!-- Shortcuts Guide Modal -->
    <ShortcutsModal
      :is-open="isShortcutsOpen"
      @close="isShortcutsOpen = false"
    />

    <!-- Printable Container (Rendered ONLY when printing to PDF / Ctrl+P) -->
    <div class="print-deck-container">
      <div v-for="(slideItem, sIdx) in slides" :key="slideItem.id" class="slide-container-print">
        <component :is="getSlideComponentById(sIdx)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { slides } from './data/slides.js';
import { playSlideTransitionSound, toggleMute, getMuteState } from './utils/sound.js';

// Slide Components
import SlideCover from './components/slides/SlideCover.vue';
import SlideDilemma from './components/slides/SlideDilemma.vue';
import SlidePolarBear from './components/slides/SlidePolarBear.vue';
import SlideTwoPhases from './components/slides/SlideTwoPhases.vue';
import SlideAlliance from './components/slides/SlideAlliance.vue';
import SlideBreakdown from './components/slides/SlideBreakdown.vue';
import SlideTypology from './components/slides/SlideTypology.vue';
import SlideParadox from './components/slides/SlideParadox.vue';
import SlideTreeMetaphor from './components/slides/SlideTreeMetaphor.vue';
import SlideComparison from './components/slides/SlideComparison.vue';
import SlideSuggestion from './components/slides/SlideSuggestion.vue';
import SlideClinicalLab from './components/slides/SlideClinicalLab.vue';
import SlideGlossary from './components/slides/SlideGlossary.vue';
import SlideSummary from './components/slides/SlideSummary.vue';

// Presentation UI Chrome
import NavigationControls from './components/NavigationControls.vue';
import PresenterNotesDrawer from './components/PresenterNotesDrawer.vue';
import OverviewModal from './components/OverviewModal.vue';
import ShortcutsModal from './components/ShortcutsModal.vue';
import LaserPointer from './components/LaserPointer.vue';

const slideComponentsMap = [
  SlideCover,
  SlideDilemma,
  SlidePolarBear,
  SlideTwoPhases,
  SlideAlliance,
  SlideBreakdown,
  SlideTypology,
  SlideParadox,
  SlideTreeMetaphor,
  SlideComparison,
  SlideSuggestion,
  SlideClinicalLab,
  SlideGlossary,
  SlideSummary
];

const currentIndex = ref(0);
const transitionDirection = ref('slide-right');
const isLaserActive = ref(false);
const isMuted = ref(getMuteState());
const isNotesOpen = ref(false);
const isOverviewOpen = ref(false);
const isShortcutsOpen = ref(false);
const isFullscreen = ref(false);

const currentSlide = computed(() => slides[currentIndex.value] || slides[0]);
const currentSlideComponent = computed(() => slideComponentsMap[currentIndex.value] || SlideCover);

function getSlideComponentById(idx) {
  return slideComponentsMap[idx] || SlideCover;
}

function nextSlide() {
  if (currentIndex.value < slides.length - 1) {
    transitionDirection.value = 'slide-next';
    currentIndex.value++;
    playSlideTransitionSound();
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    transitionDirection.value = 'slide-prev';
    currentIndex.value--;
    playSlideTransitionSound();
  }
}

function jumpToSlide(index) {
  if (index >= 0 && index < slides.length) {
    transitionDirection.value = index > currentIndex.value ? 'slide-next' : 'slide-prev';
    currentIndex.value = index;
    playSlideTransitionSound();
  }
}

function toggleLaser() {
  isLaserActive.value = !isLaserActive.value;
}

function handleToggleAudio() {
  isMuted.value = toggleMute();
}

function toggleNotes() {
  isNotesOpen.value = !isNotesOpen.value;
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
    isFullscreen.value = true;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
      isFullscreen.value = false;
    }
  }
}

// Keyboard Navigation Handler
function handleKeyDown(e) {
  // If an input is focused (e.g. glossary search), don't trigger global shortcuts
  if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
    if (e.key === 'Escape') {
      e.target.blur();
    }
    return;
  }

  switch (e.key) {
    case 'ArrowRight':
    case ' ':
    case 'PageDown':
      e.preventDefault();
      nextSlide();
      break;
    case 'ArrowLeft':
    case 'Backspace':
    case 'PageUp':
      e.preventDefault();
      prevSlide();
      break;
    case 'f':
    case 'F':
      e.preventDefault();
      toggleFullscreen();
      break;
    case 'n':
    case 'N':
      e.preventDefault();
      toggleNotes();
      break;
    case 'o':
    case 'O':
      e.preventDefault();
      isOverviewOpen.value = !isOverviewOpen.value;
      break;
    case 'p':
    case 'P':
      e.preventDefault();
      toggleLaser();
      break;
    case 'm':
    case 'M':
      e.preventDefault();
      handleToggleAudio();
      break;
    case '?':
      e.preventDefault();
      isShortcutsOpen.value = !isShortcutsOpen.value;
      break;
    case 'Escape':
      isNotesOpen.value = false;
      isOverviewOpen.value = false;
      isShortcutsOpen.value = false;
      break;
  }
}

// Touch Gestures for Tablets / Mobile Devices
let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(e) {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
}

function handleTouchEnd(e) {
  const touchEndX = e.changedTouches[0].clientX;
  const touchEndY = e.changedTouches[0].clientY;
  const diffX = touchEndX - touchStartX;
  const diffY = touchEndY - touchStartY;

  // Horizontal swipe detected
  if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX < 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
}

function handleFullscreenChange() {
  isFullscreen.value = !!document.fullscreenElement;
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  document.addEventListener('fullscreenchange', handleFullscreenChange);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('fullscreenchange', handleFullscreenChange);
});
</script>

<style scoped>
.presentation-wrapper {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.slide-viewport {
  position: absolute;
  top: 60px;
  bottom: 52px;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Slide Transition Animations */
.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-next-enter-from {
  opacity: 0;
  transform: translateX(40px) scale(0.98);
}

.slide-next-leave-to {
  opacity: 0;
  transform: translateX(-40px) scale(0.98);
}

.slide-prev-enter-from {
  opacity: 0;
  transform: translateX(-40px) scale(0.98);
}

.slide-prev-leave-to {
  opacity: 0;
  transform: translateX(40px) scale(0.98);
}

/* Print Deck Container (hidden on screen, visible during window.print()) */
.print-deck-container {
  display: none;
}

@media print {
  .slide-viewport, .no-print {
    display: none !important;
  }
  .print-deck-container {
    display: block !important;
  }
  .slide-container-print {
    page-break-after: always;
    break-after: page;
    min-height: 100vh;
    padding: 2.5rem;
    box-sizing: border-box;
  }
}
</style>
