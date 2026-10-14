<template>
  <div class="slide-comparison animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · págs. 405–407</span>
        <span class="category-tag">Diagnóstico y Límites</span>
      </div>
      <h2 class="slide-title font-display">
        Neurosis de Transferencia vs. <span class="text-gold">Neurosis Narcisistas</span>
      </h2>
      <p class="slide-subtitle">
        El criterio económico de curabilidad y la barrera infranqueable del narcisismo
      </p>
    </div>

    <!-- The Two Diagnostic Blocks -->
    <div class="comparison-grid">
      <!-- Left: Neurosis de Transferencia -->
      <div class="group-box glass-panel accessible-group">
        <div class="group-header">
          <div class="group-status accessible font-mono">ACCESIBLES AL PSICOANÁLISIS</div>
          <h3 class="group-title font-serif">Neurosis de Transferencia</h3>
          <div class="group-entities font-sans">
            Histeria de Conversión · Fobias (Histeria de Angustia) · Neurosis Obsesiva
          </div>
        </div>

        <div class="group-metrics">
          <div class="metric-item">
            <span class="metric-label">Economía Libidinal:</span>
            <span class="metric-val text-emerald">Libido de Objeto Activa</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Vínculo con el Analista:</span>
            <span class="metric-val">Investidura tierna/hostil viva; presta creencia a la palabra</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Pronóstico Analítico:</span>
            <span class="metric-val text-emerald font-semibold">Curables mediante el dispositivo</span>
          </div>
        </div>

        <div class="clinical-quote-mini font-serif">
          «En las histerias y neurosis obsesivas, el éxito nos da la razón: logramos cancelar represiones y mudar lo inconciente en conciente.»
        </div>
      </div>

      <!-- Right: Neurosis Narcisistas -->
      <div class="group-box glass-panel inaccessible-group">
        <div class="group-header">
          <div class="group-status inaccessible font-mono">INACCESIBLES AL PSICOANÁLISIS CLÁSICO</div>
          <h3 class="group-title font-serif">Neurosis Narcisistas</h3>
          <div class="group-entities font-sans">
            Paranoia · Melancolía · Dementia Praecox (Esquizofrenia)
          </div>
        </div>

        <div class="group-metrics">
          <div class="metric-item">
            <span class="metric-label">Economía Libidinal:</span>
            <span class="metric-val text-rose">Libido Yoica (Retraída al Yo)</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Vínculo con el Analista:</span>
            <span class="metric-val">Indiferencia helada; no establecen transferencia</span>
          </div>
          <div class="metric-item">
            <span class="metric-label">Pronóstico Analítico:</span>
            <span class="metric-val text-rose font-semibold">Inmunes al método analítico</span>
          </div>
        </div>

        <div class="clinical-quote-mini font-serif">
          «Rechazan al médico, no con hostilidad, sino con indiferencia. Lo que dice los deja fríos; no podemos curarlos.»
        </div>
      </div>
    </div>

    <!-- The Epistemological Insight Box -->
    <div class="freud-epiphany glass-panel">
      <div class="epiphany-header">
        <span class="epiphany-badge font-display">¿Por qué falla el análisis en las Neurosis Narcisistas?</span>
      </div>
      <div class="epiphany-content">
        <div class="reason-pill">
          <span class="pill-cross">✕ No es falta de inteligencia</span>
          <p>Los paranoicos son sumamente sagaces, hiperlógicos y combinatorios (pág. 399).</p>
        </div>
        <div class="reason-pill">
          <span class="pill-cross">✕ No es falta de conciencia de dolor</span>
          <p>Los melancólicos tienen dolorosa conciencia de estar enfermos y sufren intensamente.</p>
        </div>
        <div class="reason-pill highlight-reason">
          <span class="pill-check">✓ Es la falta de investidura de objeto</span>
          <p>Sin transferencia, la inteligencia del paciente no presta creencia a la interpretación.</p>
        </div>
      </div>
      <p class="epiphany-footer font-serif">
        «Un ser humano es accesible también desde su costado intelectual únicamente en la medida en que es capaz de investir libidinosamente objetos; y tememos en la magnitud de su narcisismo una barrera contra la posibilidad de influirlo.» (pág. 405)
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-comparison {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  overflow-y: auto;
}

.slide-header {
  margin-bottom: 0.8rem;
}

.header-badge-row {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.3rem;
}

.category-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.1);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.slide-title {
  font-size: clamp(1.8rem, 2.5vw, 2.3rem);
  font-weight: 800;
  color: #FFFFFF;
}

.slide-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
  margin-bottom: 0.8rem;
}

.group-box {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

.accessible-group {
  border-top: 3px solid #10B981;
}

.inaccessible-group {
  border-top: 3px solid #EF4444;
}

.group-header {
  margin-bottom: 0.8rem;
}

.group-status {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.group-status.accessible { color: #34D399; }
.group-status.inaccessible { color: #F87171; }

.group-title {
  font-size: 1.35rem;
  color: #FFFFFF;
  margin-bottom: 0.2rem;
}

.group-entities {
  font-size: 0.82rem;
  color: var(--gold-light);
}

.group-metrics {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 0.8rem;
  border-radius: var(--radius-sm);
}

.metric-item {
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  gap: 0.5rem;
}

.metric-label {
  color: var(--text-dim);
  font-weight: 600;
}

.metric-val {
  color: #E2E8F0;
  text-align: right;
}

.text-emerald { color: #34D399; }
.text-rose { color: #F87171; }

.clinical-quote-mini {
  font-size: 0.88rem;
  font-style: italic;
  color: #CBD5E1;
  line-height: 1.35;
  border-left: 2px solid rgba(255, 255, 255, 0.15);
  padding-left: 0.6rem;
  margin-top: auto;
}

.freud-epiphany {
  padding: 1rem 1.4rem;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--border-gold);
  margin-top: auto;
}

.epiphany-badge {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--gold-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.6rem;
}

.epiphany-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.reason-pill {
  padding: 0.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-sm);
}

.reason-pill p {
  font-size: 0.8rem;
  color: #CBD5E1;
  line-height: 1.3;
  margin-top: 0.2rem;
}

.pill-cross {
  font-size: 0.75rem;
  font-weight: 700;
  color: #F87171;
}

.highlight-reason {
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid var(--border-gold);
}

.pill-check {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--gold-light);
}

.epiphany-footer {
  font-size: 0.95rem;
  font-style: italic;
  color: #FDF4DC;
  line-height: 1.4;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 0.6rem;
}

@media (max-width: 1024px) {
  .comparison-grid, .epiphany-content {
    grid-template-columns: 1fr;
  }
  .slide-comparison {
    padding: 1.5rem;
  }
}
</style>
