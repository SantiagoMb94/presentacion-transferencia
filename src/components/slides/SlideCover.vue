<template>
  <div class="hero-slide animate-fade-in">
    <div class="hero-grid">
      <!-- Left Column: Title & Key Message -->
      <div class="hero-content">
        <div class="badge-row">
          <span class="glass-pill">
            <span class="pulse-dot"></span>
            Sigmund Freud · 27ª Conferencia
          </span>
          <span class="glass-pill tag-pill">
            Psicoanálisis Clínico
          </span>
        </div>

        <h1 class="hero-title font-display">
          La <span class="text-gold-gradient">Transferencia</span>
          <span class="subtitle-block font-serif">De mayor obstáculo al motor de la curación</span>
        </h1>

        <!-- The Big Idea in Plain Spanish -->
        <div class="big-idea-card glass-panel">
          <div class="idea-header font-display">
            <span class="idea-sparkle">💡</span> LA IDEA CENTRAL EN 1 FRASE:
          </div>
          <p class="idea-text font-serif">
            El paciente no recuerda su pasado doloroso: <strong>lo revive y actúa en vivo con el terapeuta</strong> (enamorándose, enojándose o callando). La genialidad de Freud fue usar esa repetición para curarlo.
          </p>
        </div>

        <!-- 3 Quick Takeaways -->
        <div class="quick-pills-row">
          <div class="quick-pill">
            <span class="pill-emoji">🎯</span>
            <span><strong>Qué es:</strong> Repetir en el presente afectos del pasado</span>
          </div>
          <div class="quick-pill">
            <span class="pill-emoji">⚡</span>
            <span><strong>El peligro:</strong> Puede frenar o sabotear la terapia</span>
          </div>
          <div class="quick-pill">
            <span class="pill-emoji">🔑</span>
            <span><strong>La cura:</strong> Convertir la repetición en recuerdo</span>
          </div>
        </div>

        <!-- Action Bar -->
        <div class="hero-actions">
          <button class="primary-btn" @click="$emit('next')">
            <span>Comenzar Exposición</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <button class="secondary-btn" @click="$emit('open-overview')">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span>Ver Índice Rápido</span>
          </button>
        </div>

        <div class="quick-shortcuts-hint">
          <span>Usa <kbd>→</kbd> para avanzar · <kbd>F</kbd> Pantalla completa · <kbd>N</kbd> Notas para quien expone</span>
        </div>
      </div>

      <!-- Right Column: Freud Artwork in Vienna Study -->
      <div class="hero-visual">
        <div class="portrait-container glass-panel">
          <img 
            src="/assets/freud_study.jpg" 
            alt="Sigmund Freud en su gabinete de Viena" 
            class="freud-image"
          />
          <div class="portrait-overlay"></div>
          <div class="portrait-caption">
            <div class="caption-title font-display">Sigmund Freud</div>
            <div class="caption-sub">«En la terapia reside toda la posibilidad del psicoanálisis»</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['next', 'open-overview']);
</script>

<style scoped>
.hero-slide {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  max-width: 1350px;
  width: 100%;
  align-items: center;
}

.badge-row {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.pulse-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold-primary);
  display: inline-block;
  box-shadow: 0 0 8px var(--gold-primary);
  animation: pulseGold 2s infinite;
}

.hero-title {
  font-size: clamp(2.4rem, 4vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
  color: #FFFFFF;
  margin-bottom: 1.2rem;
}

.text-gold-gradient {
  background: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA820A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle-block {
  display: block;
  font-size: clamp(1.2rem, 1.8vw, 1.6rem);
  font-weight: 400;
  color: var(--gold-light);
  margin-top: 0.4rem;
  font-style: italic;
}

.big-idea-card {
  padding: 1.1rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-bottom: 1.2rem;
}

.idea-header {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.idea-text {
  font-size: 1.1rem;
  line-height: 1.45;
  color: #F8FAFC;
}

.idea-text strong {
  color: var(--gold-light);
}

.quick-pills-row {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.quick-pill {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.92rem;
  color: #CBD5E1;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.45rem 0.8rem;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.quick-pill strong {
  color: #FFFFFF;
}

.pill-emoji {
  font-size: 1rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.85rem 1.8rem;
  background: linear-gradient(135deg, #D4AF37 0%, #B89220 100%);
  color: #080C14;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.35);
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
  background: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 100%);
}

.secondary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-gold);
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.92rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.25s ease;
}

.secondary-btn:hover {
  background: rgba(212, 175, 55, 0.12);
  border-color: var(--gold-primary);
  color: var(--gold-light);
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.quick-shortcuts-hint {
  font-size: 0.78rem;
  color: var(--text-dim);
}

.quick-shortcuts-hint kbd {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--gold-light);
  font-family: var(--font-mono);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait-container {
  position: relative;
  width: 100%;
  max-width: 460px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border-gold);
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.15);
}

.freud-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.portrait-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 50%, rgba(8, 12, 20, 0.95) 100%);
}

.portrait-caption {
  position: absolute;
  bottom: 1.2rem;
  left: 1.5rem;
  right: 1.5rem;
}

.caption-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gold-light);
}

.caption-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-style: italic;
}

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .hero-slide {
    padding: 1.5rem;
    overflow-y: auto;
  }
  .hero-visual {
    order: -1;
    max-width: 340px;
    margin: 0 auto;
  }
}
</style>
