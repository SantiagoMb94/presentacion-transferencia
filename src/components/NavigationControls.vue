<template>
  <header class="top-nav-bar no-print">
    <div class="nav-left">
      <div class="freud-brand">
        <span class="brand-crest font-serif">Ψ</span>
        <div class="brand-text">
          <span class="brand-title font-display">Sigmund Freud</span>
          <span class="brand-sub font-serif">27ª Conferencia · La Transferencia</span>
        </div>
      </div>
      <div class="current-slide-tag font-mono">
        {{ currentSlide.tag }} · {{ currentSlide.pages }}
      </div>
    </div>

    <div class="nav-right">
      <!-- Laser Pointer Toggle -->
      <button 
        class="nav-icon-btn" 
        :class="{ active: isLaserActive }"
        title="Modo Puntero Láser (P)"
        @click="$emit('toggle-laser')"
      >
        <span class="btn-laser-dot"></span>
        <span class="btn-label">Láser</span>
      </button>

      <!-- Audio Toggle -->
      <button 
        class="nav-icon-btn" 
        :class="{ active: !isMuted }"
        :title="isMuted ? 'Activar Sonidos (M)' : 'Silenciar Sonidos (M)'"
        @click="$emit('toggle-audio')"
      >
        <span class="icon-sym">{{ isMuted ? '🔇' : '🔔' }}</span>
        <span class="btn-label">{{ isMuted ? 'Mudo' : 'Sonido' }}</span>
      </button>

      <!-- Presenter Notes Toggle -->
      <button 
        class="nav-icon-btn highlight-btn" 
        :class="{ active: isNotesOpen }"
        title="Notas de Orador / Ponente (N)"
        @click="$emit('toggle-notes')"
      >
        <span class="icon-sym">🎙️</span>
        <span class="btn-label">Orador</span>
      </button>

      <!-- Overview Grid Toggle -->
      <button 
        class="nav-icon-btn" 
        title="Índice de Diapositivas (O)"
        @click="$emit('open-overview')"
      >
        <span class="icon-sym">▦</span>
        <span class="btn-label">Índice</span>
      </button>

      <!-- Fullscreen Toggle -->
      <button 
        class="nav-icon-btn" 
        title="Pantalla Completa (F)"
        @click="$emit('toggle-fullscreen')"
      >
        <span class="icon-sym">{{ isFullscreen ? '⤢' : '⛶' }}</span>
      </button>

      <!-- Shortcuts Guide -->
      <button 
        class="nav-icon-btn help-btn" 
        title="Atajos de Teclado (?)"
        @click="$emit('open-shortcuts')"
      >
        <span class="icon-sym font-mono">?</span>
      </button>
    </div>
  </header>

  <!-- Bottom Navigation Bar -->
  <footer class="bottom-nav-bar no-print">
    <div class="bottom-left">
      <button 
        class="nav-arrow-btn" 
        :disabled="currentIndex === 0"
        title="Diapositiva Anterior (←)"
        @click="$emit('prev')"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div class="slide-counter font-mono">
        <span class="current-num">{{ String(currentIndex + 1).padStart(2, '0') }}</span>
        <span class="divider">/</span>
        <span class="total-num">{{ String(totalSlides).padStart(2, '0') }}</span>
      </div>

      <button 
        class="nav-arrow-btn" 
        :disabled="currentIndex === totalSlides - 1"
        title="Siguiente Diapositiva (→ o Espacio)"
        @click="$emit('next')"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>

    <!-- Center Progress Bar -->
    <div class="progress-container" @click="handleProgressClick">
      <div class="progress-bar-track">
        <div 
          class="progress-bar-fill" 
          :style="{ width: ((currentIndex + 1) / totalSlides * 100) + '%' }"
        ></div>
      </div>
      <div class="progress-label font-mono">
        {{ Math.round(((currentIndex + 1) / totalSlides) * 100) }}% completado
      </div>
    </div>

    <!-- Bottom Right Quick Title -->
    <div class="bottom-right font-serif">
      <span class="slide-quick-title">{{ currentSlide.title }}</span>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  currentIndex: { type: Number, required: true },
  totalSlides: { type: Number, required: true },
  currentSlide: { type: Object, required: true },
  isLaserActive: { type: Boolean, default: false },
  isMuted: { type: Boolean, default: false },
  isNotesOpen: { type: Boolean, default: false },
  isFullscreen: { type: Boolean, default: false }
});

const emit = defineEmits([
  'prev', 'next', 'toggle-laser', 'toggle-audio', 
  'toggle-notes', 'open-overview', 'toggle-fullscreen', 
  'open-shortcuts', 'jump'
]);

function handleProgressClick(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const ratio = clickX / rect.width;
  const targetIndex = Math.min(props.totalSlides - 1, Math.max(0, Math.floor(ratio * props.totalSlides)));
  emit('jump', targetIndex);
}
</script>

<style scoped>
.top-nav-bar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: rgba(8, 12, 20, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(212, 175, 55, 0.18);
  z-index: 100;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.freud-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.brand-crest {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--gold-primary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(212, 175, 55, 0.08);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 0.85rem;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: 0.04em;
}

.brand-sub {
  font-size: 0.72rem;
  color: var(--gold-light);
  font-style: italic;
}

.current-slide-tag {
  font-size: 0.75rem;
  color: var(--text-dim);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-icon-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  color: #CBD5E1;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-icon-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
}

.nav-icon-btn.active {
  background: rgba(212, 175, 55, 0.15);
  border-color: var(--gold-primary);
  color: var(--gold-light);
}

.highlight-btn.active {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(16, 185, 129, 0.25));
  border-color: #34D399;
}

.btn-laser-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #FF3B30;
  box-shadow: 0 0 6px #FF3B30;
}

.help-btn {
  padding: 0.4rem 0.6rem;
}

/* Bottom Bar */
.bottom-nav-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: rgba(8, 12, 20, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top: 1px solid rgba(212, 175, 55, 0.15);
  z-index: 100;
}

.bottom-left {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.nav-arrow-btn {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-arrow-btn:hover:not(:disabled) {
  background: var(--gold-primary);
  color: #080C14;
  border-color: var(--gold-primary);
}

.nav-arrow-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.nav-arrow-btn svg {
  width: 16px;
  height: 16px;
}

.slide-counter {
  font-size: 0.85rem;
  color: var(--text-dim);
}

.current-num {
  color: var(--gold-light);
  font-weight: 700;
}

.divider {
  margin: 0 0.2rem;
}

.progress-container {
  flex-grow: 1;
  max-width: 480px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.progress-bar-track {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #D4AF37, #F4E4BA);
  transition: width 0.3s ease;
}

.progress-label {
  font-size: 0.68rem;
  color: var(--text-dim);
  text-align: center;
}

.bottom-right {
  font-size: 0.95rem;
  color: var(--gold-light);
  max-width: 350px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 1024px) {
  .btn-label, .bottom-right, .current-slide-tag {
    display: none;
  }
  .top-nav-bar, .bottom-nav-bar {
    padding: 0 1rem;
  }
}
</style>
