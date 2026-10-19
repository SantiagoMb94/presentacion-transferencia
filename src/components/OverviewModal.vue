<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="overview-backdrop no-print" @click.self="$emit('close')">
      <div class="overview-modal glass-panel">
        <div class="modal-header">
          <div>
            <div class="modal-tag font-mono">ÍNDICE DE LA PRESENTACIÓN</div>
            <h2 class="modal-title font-display">
              Estructura Temática: <span class="text-rose">La Transferencia</span>
            </h2>
          </div>
          <button class="modal-close-btn" @click="$emit('close')">✕</button>
        </div>

        <div class="slides-grid-scroll">
          <div 
            v-for="(slide, idx) in slides" 
            :key="slide.id"
            class="slide-grid-item glass-panel"
            :class="{ current: currentIdx === idx }"
            @click="handleSelect(idx)"
          >
            <div class="item-top">
              <span class="item-num font-mono">{{ String(idx + 1).padStart(2, '0') }}</span>
              <span class="item-pages font-mono">{{ slide.pages }}</span>
            </div>

            <h4 class="item-title font-serif">{{ slide.title }}</h4>
            <p class="item-tag font-sans">{{ slide.tag }}</p>

            <div class="item-indicator">
              <span v-if="currentIdx === idx" class="current-badge">✦ Diapositiva Actual</span>
              <span v-else class="jump-hint font-mono">Saltar aquí ➔</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <span>Seleccione cualquier diapositiva para saltar directamente · Presione <kbd>Esc</kbd> u <kbd>O</kbd> para cerrar</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  isOpen: { type: Boolean, required: true },
  slides: { type: Array, required: true },
  currentIdx: { type: Number, required: true }
});

const emit = defineEmits(['close', 'jump']);

function handleSelect(idx) {
  emit('jump', idx);
  emit('close');
}
</script>

<style scoped>
.overview-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(45, 20, 32, 0.45);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.overview-modal {
  width: 100%;
  max-width: 1050px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  padding: 1.6rem 2rem;
  background: rgba(255, 255, 255, 0.97);
  border: 1px solid var(--border-rose);
  border-radius: var(--radius-xl);
  box-shadow: 0 25px 60px rgba(184, 58, 100, 0.16);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid rgba(184, 58, 100, 0.12);
  padding-bottom: 0.8rem;
}

.modal-tag {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--rose-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.modal-title {
  font-size: 1.6rem;
  color: var(--wine-deep);
  font-weight: 800;
}

.modal-close-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.4rem;
  cursor: pointer;
  padding: 0.3rem;
  transition: color 0.2s;
}

.modal-close-btn:hover {
  color: var(--rose-primary);
}

.slides-grid-scroll {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1.1rem;
  overflow-y: auto;
  padding: 0.4rem 0.2rem;
  flex-grow: 1;
}

.slide-grid-item {
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--border-rose);
  background: rgba(255, 250, 252, 0.85);
  border-radius: var(--radius-md);
}

.slide-grid-item:hover {
  transform: translateY(-3px);
  border-color: var(--rose-primary);
  background: #FFFFFF;
  box-shadow: var(--shadow-card);
}

.slide-grid-item.current {
  border-color: var(--rose-primary);
  background: var(--rose-light);
  box-shadow: 0 0 15px rgba(184, 58, 100, 0.25);
}

.item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.item-num {
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--rose-primary);
}

.item-pages {
  font-size: 0.7rem;
  color: var(--text-dim);
}

.item-title {
  font-size: 1.1rem;
  color: var(--wine-deep);
  margin-bottom: 0.35rem;
  line-height: 1.25;
  font-weight: 700;
}

.item-tag {
  font-size: 0.76rem;
  color: var(--rose-dark);
  margin-bottom: 0.8rem;
  flex-grow: 1;
  font-weight: 500;
}

.item-indicator {
  border-top: 1px solid rgba(184, 58, 100, 0.1);
  padding-top: 0.45rem;
  font-size: 0.72rem;
}

.current-badge {
  color: var(--rose-primary);
  font-weight: 800;
}

.jump-hint {
  color: var(--text-dim);
}

.modal-footer {
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(184, 58, 100, 0.12);
  font-size: 0.8rem;
  color: var(--text-dim);
  text-align: center;
}

.modal-footer kbd {
  background: var(--rose-light);
  border: 1px solid var(--border-rose);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  color: var(--rose-dark);
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
