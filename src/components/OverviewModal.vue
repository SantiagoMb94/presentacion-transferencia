<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="overview-backdrop no-print" @click.self="$emit('close')">
      <div class="overview-modal glass-panel">
        <div class="modal-header">
          <div>
            <div class="modal-tag font-mono">ÍNDICE DE LA PRESENTACIÓN</div>
            <h2 class="modal-title font-display">
              Las 14 Diapositivas: <span class="text-gold">La Transferencia</span>
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
              <span class="item-num font-mono">0{{ idx + 1 }}</span>
              <span class="item-pages">{{ slide.pages }}</span>
            </div>

            <h4 class="item-title font-serif">{{ slide.title }}</h4>
            <p class="item-tag">{{ slide.tag }}</p>

            <div class="item-indicator">
              <span v-if="currentIdx === idx" class="current-badge">Diapositiva Actual</span>
              <span v-else class="jump-hint">Saltar aquí ➔</span>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <span>Seleccione cualquier diapositiva para saltar directamente · Presione <kbd>Esc</kbd> o <kbd>O</kbd> para cerrar</span>
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
  background: rgba(4, 7, 13, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.overview-modal {
  width: 100%;
  max-width: 1100px;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  border: 1px solid var(--border-gold);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(212, 175, 55, 0.15);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 0.8rem;
}

.modal-tag {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
}

.modal-title {
  font-size: 1.6rem;
  color: #FFFFFF;
}

.modal-close-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.4rem;
  cursor: pointer;
  padding: 0.3rem;
}

.modal-close-btn:hover {
  color: #FFFFFF;
}

.slides-grid-scroll {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  overflow-y: auto;
  padding: 0.4rem 0.2rem;
  flex-grow: 1;
}

.slide-grid-item {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--border-subtle);
  background: rgba(15, 23, 42, 0.6);
}

.slide-grid-item:hover {
  transform: translateY(-3px);
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.08);
}

.slide-grid-item.current {
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.15);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}

.item-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.item-num {
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--gold-primary);
}

.item-pages {
  font-size: 0.7rem;
  color: var(--text-dim);
}

.item-title {
  font-size: 1.05rem;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
  line-height: 1.25;
}

.item-tag {
  font-size: 0.75rem;
  color: var(--gold-light);
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.item-indicator {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 0.4rem;
  font-size: 0.72rem;
}

.current-badge {
  color: #34D399;
  font-weight: 700;
}

.jump-hint {
  color: var(--text-dim);
}

.modal-footer {
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.78rem;
  color: var(--text-dim);
  text-align: center;
}

.modal-footer kbd {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  color: var(--gold-light);
  font-family: var(--font-mono);
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
