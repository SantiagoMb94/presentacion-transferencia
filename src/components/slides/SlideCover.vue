<template>
  <div class="hero-slide animate-fade-in">
    <div class="hero-grid">
      <!-- Left Column: Title & Context -->
      <div class="hero-content">
        <div class="badge-row">
          <span class="glass-pill">
            <span class="pulse-dot"></span>
            Obras Completas · Amorrortu Vol. XVI
          </span>
          <span class="glass-pill tag-pill">
            Conferencia 27 · págs. 392–407
          </span>
        </div>

        <h1 class="hero-title font-display">
          La <span class="text-gold-gradient">Transferencia</span>
          <span class="subtitle-block font-serif">en la Teoría y Técnica del Psicoanálisis</span>
        </h1>

        <p class="hero-description">
          Un recorrido riguroso y dinámico por la <strong>27ª Conferencia de Introducción al Psicoanálisis</strong> (1916–1917) de <strong>Sigmund Freud</strong>. De la resistencia más temible al instrumento soberano de la curación.
        </p>

        <div class="freud-quote-card glass-panel">
          <div class="quote-mark font-serif">“</div>
          <p class="quote-text font-serif">
            «En la terapia, sin duda, reside toda la posibilidad de cultivar el psicoanálisis... un hecho nuevo sin cuya comprensión los procesos patológicos quedarían sensiblemente incompletos.»
          </p>
          <div class="quote-author">
            <span class="author-name">Sigmund Freud</span>
            <span class="author-meta">Viena, 1916 · pág. 392</span>
          </div>
        </div>

        <!-- Action Bar -->
        <div class="hero-actions">
          <button class="primary-btn" @click="$emit('next')">
            <span>Iniciar Exposición</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <button class="secondary-btn" @click="$emit('open-overview')">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span>Ver Índice (14 Diapositivas)</span>
          </button>
        </div>

        <div class="quick-shortcuts-hint">
          <span>Usa <kbd>→</kbd> o <kbd>Espacio</kbd> para avanzar · <kbd>F</kbd> Pantalla completa · <kbd>N</kbd> Notas de orador</span>
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
            <div class="caption-title font-display">Sigmund Freud (1856–1939)</div>
            <div class="caption-sub">Berggasse 19, Viena · Las Conferencias de Introducción</div>
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
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3.5rem;
  max-width: 1400px;
  width: 100%;
  align-items: center;
}

.badge-row {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 1.2rem;
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
  font-size: clamp(2.4rem, 4vw, 3.8rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
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
  font-size: clamp(1.3rem, 2vw, 1.9rem);
  font-weight: 400;
  color: var(--text-muted);
  margin-top: 0.5rem;
  font-style: italic;
}

.hero-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #CBD5E1;
  margin-bottom: 1.8rem;
  max-width: 620px;
}

.freud-quote-card {
  position: relative;
  padding: 1.2rem 1.6rem;
  background: rgba(212, 175, 55, 0.05);
  border-left: 3px solid var(--gold-primary);
  margin-bottom: 2rem;
  max-width: 640px;
}

.quote-mark {
  position: absolute;
  top: -10px;
  left: 12px;
  font-size: 3.5rem;
  line-height: 1;
  color: rgba(212, 175, 55, 0.2);
}

.quote-text {
  font-size: 1.15rem;
  font-style: italic;
  line-height: 1.5;
  color: var(--gold-light);
  margin-bottom: 0.5rem;
}

.quote-author {
  display: flex;
  justify-content: flex-end;
  gap: 0.8rem;
  font-size: 0.85rem;
}

.author-name {
  color: var(--gold-primary);
  font-weight: 600;
}

.author-meta {
  color: var(--text-dim);
}

.hero-actions {
  display: flex;
  gap: 1.2rem;
  align-items: center;
  margin-bottom: 1.2rem;
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
  padding: 0.85rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-gold);
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.95rem;
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
  font-size: 0.8rem;
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

/* Right Column Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.portrait-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--border-gold);
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.15);
  transition: transform 0.4s ease;
}

.portrait-container:hover {
  transform: translateY(-4px) scale(1.01);
  border-color: var(--gold-primary);
}

.freud-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  filter: contrast(1.05) brightness(0.96);
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
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--gold-light);
}

.caption-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
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
    max-width: 380px;
    margin: 0 auto;
  }
}
</style>
