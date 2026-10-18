<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="shortcuts-backdrop no-print" @click.self="$emit('close')">
      <div class="shortcuts-modal glass-panel">
        <div class="modal-header">
          <div>
            <div class="modal-tag font-mono">GUÍA DE NAVEGACIÓN</div>
            <h3 class="modal-title font-display">Atajos de Teclado</h3>
          </div>
          <button class="modal-close-btn" @click="$emit('close')">✕</button>
        </div>

        <div class="shortcuts-list">
          <div v-for="sc in shortcuts" :key="sc.action" class="shortcut-row">
            <div class="keys-col">
              <kbd v-for="k in sc.keys" :key="k">{{ k }}</kbd>
            </div>
            <div class="action-desc">{{ sc.action }}</div>
          </div>
        </div>

        <div class="shortcuts-footer">
          <span>También puede usar los controles interactivos en los márgenes superior e inferior</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, required: true }
});

defineEmits(['close']);

const shortcuts = [
  { keys: ['→', 'Espacio', 'AvPág'], action: 'Avanzar a la siguiente diapositiva' },
  { keys: ['←', 'Retroceso', 'RePág'], action: 'Retroceder a la diapositiva anterior' },
  { keys: ['F'], action: 'Alternar modo Pantalla Completa (Presentación)' },
  { keys: ['N'], action: 'Abrir / Cerrar Notas de Oradora (Modo Ponente)' },
  { keys: ['O'], action: 'Abrir / Cerrar Índice de Diapositivas (Vista global)' },
  { keys: ['P'], action: 'Activar / Desactivar Puntero Láser virtual' },
  { keys: ['M'], action: 'Silenciar / Activar efectos de sonido sintetizados' },
  { keys: ['D'], action: 'Descargar presentación en PowerPoint (.pptx)' },
  { keys: ['Esc'], action: 'Cerrar cualquier ventana emergente o cajón' },
  { keys: ['?'], action: 'Abrir esta ventana de ayuda' }
];
</script>

<style scoped>
.shortcuts-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(45, 20, 32, 0.45);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  z-index: 350;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.shortcuts-modal {
  width: 100%;
  max-width: 580px;
  padding: 1.5rem 1.8rem;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid var(--border-rose);
  border-radius: var(--radius-xl);
  box-shadow: 0 20px 50px rgba(184, 58, 100, 0.16);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(184, 58, 100, 0.12);
  padding-bottom: 0.6rem;
}

.modal-tag {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--rose-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.modal-title {
  font-size: 1.4rem;
  color: var(--wine-deep);
  font-weight: 800;
}

.modal-close-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.3rem;
  cursor: pointer;
  transition: color 0.2s;
}

.modal-close-btn:hover {
  color: var(--rose-primary);
}

.shortcuts-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.shortcut-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.45rem 0.75rem;
  background: rgba(250, 245, 247, 0.85);
  border-radius: var(--radius-sm);
  border: 1px solid rgba(184, 58, 100, 0.08);
}

.keys-col {
  display: flex;
  gap: 0.4rem;
}

.keys-col kbd {
  background: var(--rose-light);
  border: 1px solid var(--border-rose);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  color: var(--rose-dark);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 700;
}

.action-desc {
  font-size: 0.86rem;
  color: var(--text-main);
}

.shortcuts-footer {
  font-size: 0.78rem;
  color: var(--text-dim);
  text-align: center;
  border-top: 1px solid rgba(184, 58, 100, 0.12);
  padding-top: 0.6rem;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
