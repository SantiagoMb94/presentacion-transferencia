<template>
  <transition name="drawer">
    <aside v-if="isOpen" class="presenter-drawer glass-panel no-print">
      <div class="drawer-header">
        <div class="header-info">
          <div class="drawer-tag font-mono">MODO ORADOR / PONENTE</div>
          <h3 class="drawer-title font-serif">{{ currentSlide.title }}</h3>
          <span class="drawer-pages font-mono">{{ currentSlide.pages }}</span>
        </div>
        <button class="close-btn" @click="$emit('close')">✕</button>
      </div>

      <div class="drawer-body">
        <!-- Time Badge -->
        <div class="time-box">
          <span class="time-icon">⏱️</span>
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
            Si algún oyente pregunta si la transferencia ocurre fuera del psicoanálisis, aclare que Freud responde afirmativamente: es una propiedad universal humana, pero solo en psicoanálisis se aísla, analiza e interpreta para no convertirse en sugestión ciega.
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
  width: 420px;
  max-width: 90vw;
  background: rgba(10, 15, 26, 0.94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-left: 1px solid var(--border-gold);
  z-index: 200;
  display: flex;
  flex-direction: column;
  box-shadow: -15px 0 40px rgba(0, 0, 0, 0.7);
}

.drawer-header {
  padding: 1.2rem 1.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.drawer-tag {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.drawer-title {
  font-size: 1.2rem;
  color: #FFFFFF;
  line-height: 1.25;
}

.drawer-pages {
  font-size: 0.72rem;
  color: var(--text-dim);
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.2rem;
}

.close-btn:hover {
  color: #FFFFFF;
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
  padding: 0.6rem 0.8rem;
  background: rgba(212, 175, 55, 0.08);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  color: var(--gold-light);
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.note-section {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.section-title {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--gold-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.section-desc {
  font-size: 0.95rem;
  line-height: 1.45;
  color: #CBD5E1;
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
  color: #E2E8F0;
  line-height: 1.4;
}

.bullet {
  color: var(--gold-primary);
  font-size: 0.8rem;
  margin-top: 0.15rem;
}

.debate-section {
  background: rgba(168, 85, 247, 0.06);
  padding: 0.8rem 1rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(168, 85, 247, 0.2);
}

.debate-bubble {
  font-size: 1rem;
  font-style: italic;
  color: #E9D5FF;
  line-height: 1.4;
}

.tip-box {
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 2px solid var(--border-gold);
  border-radius: var(--radius-sm);
}

.tip-label {
  font-size: 0.68rem;
  font-weight: 800;
  color: var(--text-dim);
  display: block;
  margin-bottom: 0.2rem;
}

.tip-text {
  font-size: 0.8rem;
  color: #94A3B8;
  line-height: 1.35;
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
