<template>
  <div class="hero-slide animate-fade-in">
    <div class="hero-grid">
      <!-- Left Column: Title & Key Context -->
      <div class="hero-content">
        <div class="badge-row">
          <span class="glass-pill">
            <span class="crest-symbol">Ψ</span>
            Psicoanálisis · Conferencia 27
          </span>
          <span class="glass-pill tag-pill">
            Sigmund Freud · 1916–1917
          </span>
        </div>

        <h1 class="hero-title font-display">
          La <span class="text-rose-gradient">Transferencia</span>
          <span class="subtitle-block font-serif">De la resistencia más temible al instrumento soberano de la curación</span>
        </h1>

        <!-- Context & Clinical Significance -->
        <div class="context-card glass-panel">
          <div class="context-header font-display">
            <span class="header-indicator">SÍNTESIS EJECUTIVA DE LA EXPOSICIÓN</span>
          </div>
          <p class="context-text font-serif">
            En sus célebres lecciones universitarias en Viena, Freud devela el corazón de la terapia psicoanalítica: el paciente no recuerda sus traumas de la infancia en palabras neutras, sino que <strong>los revive y actúa en vivo sobre la persona del analista</strong>. Comprender esta fuerza permite convertir la repetición ciega en recuerdo consciente.
          </p>
        </div>

        <!-- 4 Core Foundations -->
        <div class="foundations-grid">
          <div class="foundation-item">
            <div class="item-marker font-mono">01</div>
            <div class="item-body">
              <div class="item-title">El Fenómeno Clínico</div>
              <p class="item-desc">Los sentimientos del pasado reprimido reviven en la relación con el terapeuta.</p>
            </div>
          </div>

          <div class="foundation-item">
            <div class="item-marker font-mono">02</div>
            <div class="item-body">
              <div class="item-title">Tipos & Superación</div>
              <p class="item-desc">Tierna, erótica y hostil: la regla de abstinencia para mudar repetición en recuerdo.</p>
            </div>
          </div>

          <div class="foundation-item">
            <div class="item-marker font-mono">03</div>
            <div class="item-body">
              <div class="item-title">Límites Terapéuticos</div>
              <p class="item-desc">Neurosis de transferencia vs. narcisistas y los cuatro factores condicionantes.</p>
            </div>
          </div>

          <div class="foundation-item">
            <div class="item-marker font-mono">04</div>
            <div class="item-body">
              <div class="item-title">Resistencia & Debate</div>
              <p class="item-desc">El trabajo dinámico contra la represión y preguntas reflexivas para el grupo.</p>
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
            <span>Ver Índice Temático</span>
          </button>
        </div>

        <div class="quick-shortcuts-hint">
          <span>Avanzar: <kbd>→</kbd> o <kbd>Espacio</kbd> · Pantalla completa: <kbd>F</kbd> · Notas de orador: <kbd>N</kbd></span>
        </div>
      </div>

      <!-- Right Column: Visual Artwork -->
      <div class="hero-visual">
        <div class="portrait-container glass-panel">
          <img 
            src="/assets/feminine_psychoanalysis_art.jpg" 
            alt="Ilustración editorial de psicoanálisis y transferencia" 
            class="cover-art-image"
          />
          <div class="portrait-overlay"></div>
          <div class="portrait-caption">
            <div class="caption-title font-display">Sigmund Freud (1856–1939)</div>
            <div class="caption-sub font-serif">«El paciente no recuerda; lo actúa en la transferencia» (pág. 392)</div>
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
  padding: 1.5rem 3.5rem;
  box-sizing: border-box;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 3rem;
  max-width: 1380px;
  width: 100%;
  height: 100%;
  max-height: 840px;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.1rem;
}

.badge-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.crest-symbol {
  font-size: 1.1rem;
  color: var(--rose-primary);
  font-weight: 700;
}

.tag-pill {
  background: var(--bg-card);
  color: var(--text-muted);
  border-color: var(--border-subtle);
}

.hero-title {
  font-size: 2.75rem;
  line-height: 1.08;
  color: var(--wine-deep);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.text-rose-gradient {
  background: linear-gradient(135deg, #B83A64 0%, #D47963 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.subtitle-block {
  display: block;
  font-size: 1.22rem;
  font-weight: 400;
  color: var(--text-muted);
  margin-top: 0.45rem;
  line-height: 1.35;
  font-style: italic;
}

.context-card {
  padding: 1.1rem 1.4rem;
  background: rgba(255, 255, 255, 0.92);
  border-left: 4px solid var(--rose-primary);
}

.context-header {
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: var(--rose-primary);
  margin-bottom: 0.4rem;
  font-weight: 700;
}

.context-text {
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--text-main);
}

.foundations-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.foundation-item {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.75rem 0.95rem;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(184, 58, 100, 0.12);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
}

.foundation-item:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: var(--border-rose-glow);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.item-marker {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--rose-primary);
  background: var(--rose-light);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  line-height: 1;
}

.item-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--wine-deep);
  margin-bottom: 0.15rem;
}

.item-desc {
  font-size: 0.82rem;
  color: var(--text-muted);
  line-height: 1.35;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.4rem;
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.8rem;
  background: linear-gradient(135deg, #B83A64 0%, #A22E54 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 9999px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: var(--font-sans);
  cursor: pointer;
  box-shadow: 0 8px 24px -6px rgba(184, 58, 100, 0.45);
  transition: all 0.25s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -4px rgba(184, 58, 100, 0.6);
  background: linear-gradient(135deg, #C74470 0%, #B83A64 100%);
}

.secondary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.4rem;
  background: rgba(255, 255, 255, 0.85);
  color: var(--rose-dark);
  border: 1px solid var(--border-rose);
  border-radius: 9999px;
  font-size: 0.92rem;
  font-weight: 600;
  font-family: var(--font-sans);
  cursor: pointer;
  transition: all 0.25s ease;
}

.secondary-btn:hover {
  background: #FFFFFF;
  border-color: var(--rose-primary);
  transform: translateY(-2px);
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
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(184, 58, 100, 0.2);
  border-radius: 4px;
  padding: 0.15rem 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--rose-dark);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* Right Column Artwork */
.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.portrait-container {
  position: relative;
  width: 100%;
  max-width: 470px;
  aspect-ratio: 1 / 1;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-elevated);
  border: 2px solid rgba(255, 255, 255, 0.95);
}

.cover-art-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.portrait-container:hover .cover-art-image {
  transform: scale(1.03);
}

.portrait-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(74, 18, 42, 0.65) 0%, rgba(74, 18, 42, 0.05) 50%, transparent 100%);
}

.portrait-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.4rem;
  color: #FFFFFF;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
}

.caption-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  color: #FFF2F6;
}

.caption-sub {
  font-size: 0.9rem;
  color: #F8DFE7;
  font-style: italic;
  line-height: 1.35;
}

@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
  .hero-visual {
    display: none;
  }
}
</style>
