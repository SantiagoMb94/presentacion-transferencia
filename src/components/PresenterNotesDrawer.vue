<template>
  <transition name="drawer">
    <aside v-if="isOpen" class="presenter-drawer glass-panel no-print">
      <div class="drawer-header">
        <div class="header-info">
          <div class="drawer-tag font-mono">MODO ORADORA / PONENTE</div>
          <h3 class="drawer-title font-serif">{{ currentSlide.title }}</h3>
          <span class="drawer-pages font-mono">{{ currentSlide.pages }}</span>
        </div>
        <button class="close-btn" @click="$emit('close')">✕</button>
      </div>

      <div class="drawer-body">
        <!-- Time Badge -->
        <div class="time-box">
          <svg class="time-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span class="time-text">Tiempo estimado de exposición: <strong>{{ currentSlide.speakerNotes?.timeEstimate || '3-4 min' }}</strong></span>
        </div>

        <!-- Opening Hook -->
        <div class="note-section">
          <div class="section-title font-display">Apertura y Encuadre:</div>
          <p class="section-desc font-serif">
            {{ currentSlide.speakerNotes?.opening }}
          </p>
        </div>

        <!-- Key Bullet Points -->
        <div class="note-section">
          <div class="section-title font-display">Puntos Clave a Desarrollar:</div>
          <ul class="key-points-list">
            <li v-for="(point, idx) in currentSlide.speakerNotes?.keyPoints" :key="idx">
              <span class="bullet">✦</span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>

        <!-- Discussion Prompt -->
        <div class="note-section debate-section">
          <div class="section-title font-display">Pregunta para Debatir con el Auditorio:</div>
          <div class="debate-bubble font-serif">
            «{{ currentSlide.speakerNotes?.discussionPrompt }}»
          </div>
        </div>

        <!-- Technical Tips -->
        <div class="tip-box">
          <span class="tip-label font-mono">CONSEJO PARA LA DEFENSA:</span>
          <p class="tip-text">
            Si el docente o algún compañero pregunta si la transferencia ocurre fuera del psicoanálisis, aclare con seguridad que Freud responde afirmativamente: es un fenómeno universal humano en relaciones cotidianas, pero solo en el análisis se aísla técnicamente mediante la abstinencia para que no degenere en sugestión ni repetición destructiva.
          </p>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, required: true },
  currentSlide: { type: Object, required: true }
});

defineEmits(['close']);
</script>

<style scoped>
.presenter-drawer {
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 52px;
  width: 430px;
  max-width: 90vw;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-left: 1px solid var(--border-rose);
  z-index: 200;
  display: flex;
  flex-direction: column;
  box-shadow: -15px 0 35px rgba(184, 58, 100, 0.12);
}

.drawer-header {
  padding: 1.2rem 1.4rem;
  border-bottom: 1px solid rgba(184, 58, 100, 0.12);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--rose-light);
}

.drawer-tag {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--rose-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.drawer-title {
  font-size: 1.25rem;
  color: var(--wine-deep);
  line-height: 1.25;
  font-weight: 700;
}

.drawer-pages {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.2rem;
  line-height: 1;
  transition: color 0.2s;
}

.close-btn:hover {
  color: var(--rose-primary);
}

.drawer-body {
  padding: 1.2rem 1.4rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex-grow: 1;
}

.time-box {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 0.85rem;
  background: var(--rose-light);
  border-radius: var(--radius-sm);
  font-size: 0.84rem;
  color: var(--rose-dark);
  border: 1px solid var(--border-rose);
}

.time-svg-icon {
  width: 16px;
  height: 16px;
  stroke: var(--rose-primary);
  flex-shrink: 0;
}

.note-section {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.section-title {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--rose-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.section-desc {
  font-size: 0.98rem;
  line-height: 1.5;
  color: var(--text-main);
  background: rgba(250, 240, 244, 0.4);
  padding: 0.65rem 0.85rem;
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--border-rose-glow);
}

.key-points-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.key-points-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: var(--text-main);
  line-height: 1.45;
}

.bullet {
  color: var(--rose-primary);
  font-size: 0.8rem;
  margin-top: 0.15rem;
}

.debate-section {
  background: var(--accent-lavender-bg);
  padding: 0.9rem 1.1rem;
  border-radius: var(--radius-md);
  border: 1px solid rgba(118, 74, 140, 0.2);
}

.debate-bubble {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--accent-lavender);
  font-weight: 600;
  line-height: 1.45;
  margin-top: 0.2rem;
}

.tip-box {
  padding: 0.85rem 1rem;
  background: var(--bg-primary);
  border-left: 3px solid var(--rose-primary);
  border-radius: var(--radius-sm);
}

.tip-label {
  font-size: 0.68rem;
  font-weight: 800;
  color: var(--rose-primary);
  display: block;
  margin-bottom: 0.25rem;
}

.tip-text {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.42;
}

/* Slide Transition */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
