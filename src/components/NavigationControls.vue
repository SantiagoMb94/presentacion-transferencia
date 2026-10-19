<template>
  <header class="top-nav-bar no-print">
    <div class="nav-left">
      <div class="freud-brand">
        <span class="brand-crest font-serif">Ψ</span>
        <div class="brand-text">
          <span class="brand-title font-display">IUE · Psicoanálisis</span>
          <span class="brand-sub font-serif">Juliana Henao · Leidy Rendón · Freud Conf. 27</span>
        </div>
      </div>
      <div class="current-slide-tag font-mono">
        {{ currentSlide.tag }} · {{ currentSlide.pages }}
      </div>
    </div>

    <div class="nav-right">
      <!-- Download PowerPoint Button -->
      <button 
        class="nav-icon-btn download-pptx-btn" 
        :class="{ loading: isDownloading }"
        :disabled="isDownloading"
        title="Descargar presentación completa en PowerPoint (.pptx)"
        @click="$emit('download-pptx')"
      >
        <svg v-if="!isDownloading" class="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span v-else class="spinner-dot"></span>
        <span class="btn-label">{{ isDownloading ? 'Creando PPT...' : 'Descargar PPT' }}</span>
      </button>

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
        <svg v-if="!isMuted" class="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <svg v-else class="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
        <span class="btn-label">{{ isMuted ? 'Silencio' : 'Audio' }}</span>
      </button>

      <!-- Presenter Notes Toggle -->
      <button 
        class="nav-icon-btn highlight-btn" 
        :class="{ active: isNotesOpen }"
        title="Notas de Orador / Ponente (N)"
        @click="$emit('toggle-notes')"
      >
        <svg class="nav-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
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
  isFullscreen: { type: Boolean, default: false },
  isDownloading: { type: Boolean, default: false }
});

const emit = defineEmits([
  'prev', 'next', 'toggle-laser', 'toggle-audio', 
  'toggle-notes', 'open-overview', 'toggle-fullscreen', 
  'open-shortcuts', 'jump', 'download-pptx'
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(184, 58, 100, 0.16);
  z-index: 100;
  box-shadow: 0 2px 10px rgba(184, 58, 100, 0.04);
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.freud-brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.brand-crest {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--rose-primary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--border-rose);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--rose-light);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-size: 0.88rem;
  font-weight: 800;
  color: var(--wine-deep);
  letter-spacing: 0.04em;
}

.brand-sub {
  font-size: 0.72rem;
  color: var(--rose-dark);
  font-style: italic;
}

.current-slide-tag {
  font-size: 0.75rem;
  color: var(--text-dim);
  background: rgba(184, 58, 100, 0.06);
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  border: 1px solid rgba(184, 58, 100, 0.12);
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
  padding: 0.4rem 0.8rem;
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid rgba(184, 58, 100, 0.18);
  border-radius: 9999px;
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-icon-btn:hover {
  background: #FFFFFF;
  border-color: var(--rose-primary);
  color: var(--rose-dark);
  transform: translateY(-1px);
}

.nav-icon-btn.active {
  background: var(--rose-light);
  border-color: var(--rose-primary);
  color: var(--rose-dark);
}

/* Download PPTX Button */
.download-pptx-btn {
  background: linear-gradient(135deg, #B83A64 0%, #D47963 100%);
  color: #FFFFFF !important;
  border: none;
  font-weight: 700;
  box-shadow: 0 4px 14px -3px rgba(184, 58, 100, 0.45);
  padding: 0.42rem 0.95rem;
}

.download-pptx-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #C74470 0%, #B83A64 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px -2px rgba(184, 58, 100, 0.55);
  color: #FFFFFF !important;
}

.download-pptx-btn:disabled {
  opacity: 0.75;
  cursor: wait;
}

.download-pptx-btn .nav-svg-icon {
  stroke: #FFFFFF;
}

.spinner-dot {
  width: 12px;
  height: 12px;
  border: 2px solid rgba(255, 255, 255, 0.35);
  border-top-color: #FFFFFF;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.highlight-btn.active {
  background: linear-gradient(135deg, var(--rose-light), #FFFFFF);
  border-color: var(--rose-primary);
  box-shadow: 0 2px 8px rgba(184, 58, 100, 0.2);
}

.nav-svg-icon {
  width: 14px;
  height: 14px;
  stroke-width: 2;
  flex-shrink: 0;
}

.btn-laser-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #E91E63;
  box-shadow: 0 0 6px #E91E63;
}

.help-btn {
  padding: 0.4rem 0.65rem;
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
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-top: 1px solid rgba(184, 58, 100, 0.16);
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(184, 58, 100, 0.04);
}

.bottom-left {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.nav-arrow-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid var(--border-rose);
  color: var(--wine-deep);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-arrow-btn:hover:not(:disabled) {
  background: var(--rose-primary);
  color: #FFFFFF;
  border-color: var(--rose-primary);
  transform: translateY(-1px);
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
  color: var(--rose-primary);
  font-weight: 800;
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
  height: 5px;
  background: rgba(184, 58, 100, 0.1);
  border-radius: 9999px;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #B83A64, #D47963);
  transition: width 0.3s ease;
}

.progress-label {
  font-size: 0.68rem;
  color: var(--text-dim);
  text-align: center;
}

.bottom-right {
  font-size: 0.95rem;
  color: var(--wine-deep);
  font-weight: 600;
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
