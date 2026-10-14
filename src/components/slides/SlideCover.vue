<template>
  <div class="hero-slide animate-fade-in">
    <div class="hero-grid">
      <!-- Left Column: Title & Key Context -->
      <div class="hero-content">
        <div class="badge-row">
          <span class="glass-pill">
            <span class="crest-symbol">§</span>
            Sigmund Freud · Conferencia 27
          </span>
          <span class="glass-pill tag-pill">
            Obras Completas · Tomo XVI (Amorrortu)
          </span>
        </div>

        <h1 class="hero-title font-display">
          La <span class="text-gold-gradient">Transferencia</span>
          <span class="subtitle-block font-serif">De la resistencia más temible al instrumento soberano de la curación</span>
        </h1>

        <!-- Context & Clinical Significance -->
        <div class="context-card glass-panel">
          <div class="context-header font-display">
            <span class="header-indicator">CONTEXTO HISTÓRICO Y CLÍNICO</span>
          </div>
          <p class="context-text font-serif">
            Hacia el final de sus conferencias universitarias en Viena (1916–1917), Freud aborda por primera vez ante el público médico la <strong>terapia psicoanalítica</strong>. En ella revela el hallazgo que transformó el tratamiento: el paciente no recuerda sus traumas infantiles con palabras, sino que <strong>los revive y actúa en tiempo real sobre la persona del analista</strong>.
          </p>
        </div>

        <!-- 3 Core Foundations -->
        <div class="foundations-grid">
          <div class="foundation-item">
            <div class="item-marker font-mono">01</div>
            <div class="item-body">
              <div class="item-title">El Fenómeno Ineludible</div>
              <p class="item-desc">El paciente no rememora su pasado reprimido: lo actúa y transfiere sobre la persona del médico.</p>
            </div>
          </div>

          <div class="foundation-item">
            <div class="item-marker font-mono">02</div>
            <div class="item-body">
              <div class="item-title">La Mayor Resistencia</div>
              <p class="item-desc">Al irrumpir, amenaza con paralizar la cura: surge como reclamo amoroso ciego o abierta hostilidad.</p>
            </div>
          </div>

          <div class="foundation-item">
            <div class="item-marker font-mono">03</div>
            <div class="item-body">
              <div class="item-title">El Instrumento Soberano</div>
              <p class="item-desc">Al interpretar el afecto, la repetición se muda en recuerdo consciente y emancipa al sujeto.</p>
            </div>
          </div>
        </div>

        <!-- Action Bar -->
        <div class="hero-actions">
          <button class="primary-btn" @click="$emit('next')">
            <span>Iniciar Exposición</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <button class="secondary-btn" @click="$emit('open-overview')">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span>Ver Índice Temático (14 Diapositivas)</span>
          </button>
        </div>

        <div class="quick-shortcuts-hint">
          <span>Avanzar: <kbd>→</kbd> o <kbd>Espacio</kbd> · Pantalla completa: <kbd>F</kbd> · Notas de exposición: <kbd>N</kbd></span>
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
            <div class="caption-sub font-serif">«En la terapia reside toda la posibilidad de cultivar el psicoanálisis» (pág. 392)</div>
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
  grid-template-columns: 1.25fr 0.75fr;
  gap: 3rem;
  max-width: 1350px;
  width: 100%;
  align-items: center;
}

.badge-row {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.crest-symbol {
  color: var(--gold-primary);
  font-weight: 700;
  font-size: 0.95rem;
}

.hero-title {
  font-size: clamp(2.3rem, 3.8vw, 3.4rem);
  font-weight: 800;
  line-height: 1.12;
  color: #FFFFFF;
  margin-bottom: 1.1rem;
}

.text-gold-gradient {
  background: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA820A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle-block {
  display: block;
  font-size: clamp(1.15rem, 1.6vw, 1.5rem);
  font-weight: 400;
  color: var(--gold-light);
  margin-top: 0.35rem;
  font-style: italic;
}

.context-card {
  padding: 1rem 1.4rem;
  background: rgba(212, 175, 55, 0.06);
  border-left: 3px solid var(--gold-primary);
  margin-bottom: 1.1rem;
}

.context-header {
  margin-bottom: 0.3rem;
}

.header-indicator {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--gold-primary);
}

.context-text {
  font-size: 1.05rem;
  line-height: 1.45;
  color: #E2E8F0;
}

.context-text strong {
  color: #FFFFFF;
}

.foundations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  margin-bottom: 1.3rem;
}

.foundation-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  padding: 0.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-sm);
}

.item-marker {
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--gold-primary);
  opacity: 0.8;
  margin-top: 0.1rem;
}

.item-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.15rem;
}

.item-desc {
  font-size: 0.78rem;
  color: #94A3B8;
  line-height: 1.35;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 1.8rem;
  background: linear-gradient(135deg, #D4AF37 0%, #B89220 100%);
  color: #080C14;
  font-weight: 700;
  font-size: 0.95rem;
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
  padding: 0.8rem 1.4rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-gold);
  color: var(--text-main);
  font-weight: 600;
  font-size: 0.9rem;
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
  width: 17px;
  height: 17px;
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
  max-width: 440px;
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
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--gold-light);
}

.caption-sub {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-style: italic;
  margin-top: 0.2rem;
}

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .foundations-grid {
    grid-template-columns: 1fr;
  }
  .hero-slide {
    padding: 1.5rem;
    overflow-y: auto;
  }
  .hero-visual {
    order: -1;
    max-width: 320px;
    margin: 0 auto;
  }
}
</style>
