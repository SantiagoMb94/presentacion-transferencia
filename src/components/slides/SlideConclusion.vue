<template>
  <div class="slide-conclusion animate-fade-in">
    <!-- Header -->
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 06</span>
        <span class="category-tag">Cierre Magistral · Síntesis Clínica</span>
      </div>
      <h2 class="slide-title font-display">
        Conclusiones y <span class="text-rose">Mensaje Final</span>
      </h2>
      <p class="slide-subtitle">
        El legado imperecedero de la 27ª Conferencia de Freud para la práctica y la ética terapéutica
      </p>
    </div>

    <!-- 4 Core Pillars Grid -->
    <div class="pillars-grid">
      <div class="pillar-box glass-panel">
        <div class="pillar-top font-mono">
          <span class="pillar-num">01</span>
          <span class="pillar-badge badge-rose">PARADOJA CLÍNICA</span>
        </div>
        <h4 class="pillar-heading font-serif">De la Resistencia al Motor</h4>
        <p class="pillar-desc">
          La transferencia surge inicialmente como la mayor resistencia al tratamiento, pero cuando se interpreta con rigor, se convierte en el <strong>instrumento soberano de la curación</strong>.
        </p>
      </div>

      <div class="pillar-box glass-panel">
        <div class="pillar-top font-mono">
          <span class="pillar-num">02</span>
          <span class="pillar-badge badge-sage">LA FÓRMULA DE LA CURA</span>
        </div>
        <h4 class="pillar-heading font-serif">Mudar Repetición en Recuerdo</h4>
        <p class="pillar-desc">
          El ser humano tiende a repetir en acto aquello que su Yo reprimió. La labor analítica consiste en <strong>poner palabras donde antes solo había actuación muda</strong> y síntoma.
        </p>
      </div>

      <div class="pillar-box glass-panel">
        <div class="pillar-top font-mono">
          <span class="pillar-num">03</span>
          <span class="pillar-badge badge-amber">HONESTIDAD CIENTÍFICA</span>
        </div>
        <h4 class="pillar-heading font-serif">Reconocimiento de Límites</h4>
        <p class="pillar-desc">
          El análisis no promete milagros: respeta la herencia constitucional, el pasado consumado y la realidad material, concentrándose en <strong>la conquista de la verdad psíquica</strong>.
        </p>
      </div>

      <div class="pillar-box glass-panel">
        <div class="pillar-top font-mono">
          <span class="pillar-num">04</span>
          <span class="pillar-badge badge-lavender">ÉTICA INNEGOCIABLE</span>
        </div>
        <h4 class="pillar-heading font-serif">La Regla de Abstinencia</h4>
        <p class="pillar-desc">
          No ceder a las demandas amorosas ni censurar el enojo transferencial. La neutralidad benevolente del terapeuta es la <strong>única garantía de emancipación del sujeto</strong>.
        </p>
      </div>
    </div>

    <!-- Thank You & Final Call to Action -->
    <div class="final-banner glass-panel">
      <div class="banner-content">
        <div class="banner-crest font-serif">Ψ</div>
        <div>
          <h3 class="banner-title font-display">¡Muchas gracias por su atención!</h3>
          <p class="banner-sub font-serif">
            «Donde Ello era, el Yo debe advenir» — Sigmund Freud
          </p>
        </div>
      </div>

      <div class="banner-actions">
        <button class="nav-btn primary" @click="$emit('go-first')">
          <span>Volver al Inicio</span>
          <svg class="btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="1 4 1 10 7 10"></polyline>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
          </svg>
        </button>
        <button class="nav-btn secondary" @click="$emit('open-overview')">
          <span>Ver Índice Completo</span>
          <svg class="btn-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['go-first', 'open-overview']);
</script>

<style scoped>
.slide-conclusion {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  overflow-y: auto;
  gap: 1.1rem;
  box-sizing: border-box;
}

.slide-header {
  margin-bottom: 0.1rem;
}

.header-badge-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.35rem;
}

.category-tag {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--text-dim);
}

.slide-title {
  font-size: 2.15rem;
  color: var(--wine-deep);
  font-weight: 800;
  line-height: 1.15;
}

.slide-subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  font-family: var(--font-serif);
  font-style: italic;
  margin-top: 0.2rem;
}

/* Pillars Grid */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  flex: 1;
}

.pillar-box {
  padding: 1.15rem 1.25rem;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.92);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(184, 58, 100, 0.14);
  transition: all 0.25s ease;
}

.pillar-box:hover {
  transform: translateY(-2px);
  border-color: var(--border-rose-glow);
  box-shadow: var(--shadow-card);
}

.pillar-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.6rem;
}

.pillar-num {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--rose-primary);
}

.pillar-badge {
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
}

.badge-rose {
  background: var(--rose-light);
  color: var(--rose-primary);
}

.badge-sage {
  background: var(--accent-sage-bg);
  color: var(--accent-sage);
}

.badge-amber {
  background: var(--accent-amber-bg);
  color: var(--accent-amber);
}

.badge-lavender {
  background: var(--accent-lavender-bg);
  color: var(--accent-lavender);
}

.pillar-heading {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--wine-deep);
  margin-bottom: 0.45rem;
  line-height: 1.25;
}

.pillar-desc {
  font-size: 0.86rem;
  line-height: 1.48;
  color: var(--text-main);
  flex: 1;
}

/* Final Banner */
.final-banner {
  padding: 1.2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(253, 238, 243, 0.85) 100%);
  border-left: 4px solid var(--rose-primary);
  border-radius: var(--radius-lg);
}

.banner-content {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.banner-crest {
  font-size: 2.2rem;
  color: var(--rose-primary);
  line-height: 1;
}

.banner-title {
  font-size: 1.4rem;
  color: var(--wine-deep);
  font-weight: 800;
}

.banner-sub {
  font-size: 0.98rem;
  color: var(--text-muted);
  font-style: italic;
  margin-top: 0.15rem;
}

.banner-actions {
  display: flex;
  gap: 0.85rem;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.4rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
  font-family: var(--font-sans);
  cursor: pointer;
  transition: all 0.25s ease;
}

.nav-btn.primary {
  background: var(--rose-primary);
  color: #FFFFFF;
  border: none;
  box-shadow: 0 6px 18px -4px rgba(184, 58, 100, 0.4);
}

.nav-btn.primary:hover {
  background: var(--rose-dark);
  transform: translateY(-2px);
}

.nav-btn.secondary {
  background: rgba(255, 255, 255, 0.9);
  color: var(--rose-dark);
  border: 1px solid var(--border-rose);
}

.nav-btn.secondary:hover {
  background: #FFFFFF;
  border-color: var(--rose-primary);
  transform: translateY(-2px);
}

.btn-svg {
  width: 16px;
  height: 16px;
}
</style>
