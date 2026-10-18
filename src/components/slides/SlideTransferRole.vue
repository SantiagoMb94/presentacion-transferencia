<template>
  <div class="slide-transfer-role animate-fade-in">
    <!-- Header -->
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 01</span>
        <span class="category-tag">Conferencia 27 · págs. 392–395</span>
      </div>
      <h2 class="slide-title font-display">
        La Transferencia y su <span class="text-rose">Papel en la Terapia</span>
      </h2>
      <p class="slide-subtitle">
        Cómo el pasado reprimido cobra vida en la relación analítica y se transforma en el motor de la cura
      </p>
    </div>

    <!-- Core Definition Hero Card -->
    <div class="definition-card glass-panel">
      <div class="def-crest">
        <span class="crest-icon">✦</span>
        <span class="def-label font-mono">DEFINICIÓN FUNDAMENTAL</span>
      </div>
      <p class="def-quote font-serif">
        «La transferencia ocurre cuando el paciente dirige hacia el médico sentimientos vinculados con experiencias y relaciones anteriores que hacen parte de su pasado reprimido.»
      </p>
      <div class="def-source font-mono">Sigmund Freud · 27ª Conferencia: La Transferencia</div>
    </div>

    <!-- 3 Core Analytical Pillars -->
    <div class="pillars-grid">
      <!-- Card 1: La Doble Naturaleza -->
      <div class="pillar-card glass-panel">
        <div class="pillar-header">
          <div class="icon-circle icon-dual">⚖</div>
          <span class="pillar-tag font-mono">NATURALEZA DUAL</span>
        </div>
        <h4 class="pillar-title font-serif">Motor o Resistencia</h4>
        <p class="pillar-text">
          La transferencia tiene un carácter bifacético: <strong>puede favorecer el tratamiento</strong> otorgando autoridad a la palabra del terapeuta, <strong>o convertirse en una resistencia tenaz</strong> que amenaza con paralizar todo el proceso.
        </p>
        <div class="pillar-badge badge-neutral">
          <span>Depende de su forma de manifestarse</span>
        </div>
      </div>

      <!-- Card 2: Reproducción en la Escena -->
      <div class="pillar-card glass-panel">
        <div class="pillar-header">
          <div class="icon-circle icon-stage">🎭</div>
          <span class="pillar-tag font-mono">EL ESCENARIO VIVO</span>
        </div>
        <h4 class="pillar-title font-serif">Reproducción de Conflictos</h4>
        <p class="pillar-text">
          A través de la transferencia, <strong>los conflictos inconscientes se reproducen en vivo</strong> dentro del vínculo terapéutico. El consultorio deviene en el campo de batalla donde lo reprimido cobra actualidad para ser analizado y trabajado.
        </p>
        <div class="pillar-badge badge-rose">
          <span>Actualización en tiempo real</span>
        </div>
      </div>

      <!-- Card 3: El Objetivo Terapéutico -->
      <div class="pillar-card glass-panel">
        <div class="pillar-header">
          <div class="icon-circle icon-target">✨</div>
          <span class="pillar-tag font-mono">LA META CLÍNICA</span>
        </div>
        <h4 class="pillar-title font-serif">Repetición en Recuerdo</h4>
        <p class="pillar-text">
          El objetivo del análisis es <strong>transformar la repetición inconsciente en recuerdo</strong>. Al no ceder al reclamo ni juzgarlo, el analista permite que el paciente comprenda, elabore y resuelva sus conflictos originales.
        </p>
        <div class="pillar-badge badge-sage">
          <span>Emancipación y elaboración del Yo</span>
        </div>
      </div>
    </div>

    <!-- Bottom Synthesis Formula -->
    <div class="synthesis-strip glass-panel">
      <div class="formula-box">
        <div class="formula-step">
          <span class="step-label font-mono">PUNTO DE PARTIDA</span>
          <span class="step-title font-serif">Pasado Reprimido</span>
          <span class="step-desc">Fijaciones inconscientes olvidadas</span>
        </div>
        <div class="formula-arrow">➔</div>
        <div class="formula-step">
          <span class="step-label font-mono">TRANSFERENCIA</span>
          <span class="step-title font-serif">Repetición en Acto</span>
          <span class="step-desc">Actuación viva sobre el analista</span>
        </div>
        <div class="formula-arrow">➔</div>
        <div class="formula-step highlighted">
          <span class="step-label font-mono">OBJETIVO ANALÍTICO</span>
          <span class="step-title font-serif">Recuerdo Consciente</span>
          <span class="step-desc">Elaboración, cura y autonomía</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-transfer-role {
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
  margin-bottom: 0.4rem;
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

/* Core Definition Card */
.definition-card {
  padding: 1.3rem 1.8rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(253, 238, 243, 0.6) 100%);
  border-left: 4px solid var(--rose-primary);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.def-crest {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.crest-icon {
  color: var(--rose-primary);
  font-size: 1rem;
}

.def-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--rose-primary);
}

.def-quote {
  font-size: 1.35rem;
  line-height: 1.45;
  color: var(--wine-deep);
  font-weight: 600;
}

.def-source {
  font-size: 0.78rem;
  color: var(--text-dim);
}

/* Pillars Grid */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  flex: 1;
}

.pillar-card {
  padding: 1.35rem 1.4rem;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-rose);
}

.pillar-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.8rem;
}

.icon-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
}

.icon-dual {
  background: var(--accent-amber-bg);
  color: var(--accent-amber);
}

.icon-stage {
  background: var(--rose-light);
  color: var(--rose-primary);
}

.icon-target {
  background: var(--accent-sage-bg);
  color: var(--accent-sage);
}

.pillar-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-dim);
}

.pillar-title {
  font-size: 1.3rem;
  color: var(--wine-deep);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.pillar-text {
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-main);
  flex: 1;
}

.pillar-badge {
  margin-top: 1rem;
  padding: 0.4rem 0.8rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 600;
  text-align: center;
}

.badge-neutral {
  background: rgba(142, 117, 130, 0.08);
  color: var(--text-muted);
}

.badge-rose {
  background: var(--rose-light);
  color: var(--rose-dark);
}

.badge-sage {
  background: var(--accent-sage-bg);
  color: var(--accent-sage);
}

/* Synthesis Strip */
.synthesis-strip {
  padding: 0.9rem 1.6rem;
  background: rgba(255, 255, 255, 0.92);
}

.formula-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.formula-step {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.formula-step.highlighted .step-title {
  color: var(--rose-primary);
}

.step-label {
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  font-weight: 700;
}

.step-title {
  font-size: 1.1rem;
  color: var(--wine-deep);
  font-weight: 700;
}

.step-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.formula-arrow {
  font-size: 1.4rem;
  color: var(--rose-primary);
  font-weight: 700;
}
</style>
