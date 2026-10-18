<template>
  <div class="slide-transfer-types animate-fade-in">
    <!-- Header -->
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 02</span>
        <span class="category-tag">Conferencia 27 · págs. 399–403</span>
      </div>
      <h2 class="slide-title font-display">
        Tipos de Transferencia y su <span class="text-rose">Superación</span>
      </h2>
      <p class="slide-subtitle">
        La diferenciación clínica de las investiduras afectivas y la regla de abstinencia analítica
      </p>
    </div>

    <!-- Comparative Table of Types (From Word Document & Images) -->
    <div class="table-container glass-panel">
      <table class="transference-table">
        <thead>
          <tr>
            <th class="col-type">Tipo de Transferencia</th>
            <th class="col-manifestation">Manifestación en Sesión</th>
            <th class="col-impact">Impacto en la Cura</th>
          </tr>
        </thead>
        <tbody>
          <!-- Row 1: Positiva Tierna -->
          <tr class="row-tender">
            <td class="col-type">
              <div class="type-cell">
                <span class="type-badge badge-sage font-mono">ALIADA INICIAL</span>
                <span class="type-name font-serif">Positiva Tierna</span>
                <span class="type-sub">(Sublimada)</span>
              </div>
            </td>
            <td class="col-manifestation">
              <p class="cell-text">
                Sentimientos de aprecio, confianza ciega y sobrestimación del médico.
              </p>
            </td>
            <td class="col-impact">
              <p class="cell-text">
                Funciona inicialmente como el <strong>motor impulsor más poderoso</strong> del trabajo analítico, prestando autoridad a la palabra del terapeuta.
              </p>
            </td>
          </tr>

          <!-- Row 2: Positiva Erótica -->
          <tr class="row-erotic">
            <td class="col-type">
              <div class="type-cell">
                <span class="type-badge badge-rose font-mono">RESISTENCIA</span>
                <span class="type-name font-serif">Positiva Erótica</span>
                <span class="type-sub">(Cruda)</span>
              </div>
            </td>
            <td class="col-manifestation">
              <p class="cell-text">
                Reclamos amorosos directos, celos o demandas de índole sexual sobre el terapeuta.
              </p>
            </td>
            <td class="col-impact">
              <p class="cell-text">
                Se transforma en una <strong>resistencia interna severa</strong> debido a la intensidad del deseo, sustituyendo el afán de curarse por el reclamo pasional.
              </p>
            </td>
          </tr>

          <!-- Row 3: Negativa Hostil -->
          <tr class="row-hostile">
            <td class="col-type">
              <div class="type-cell">
                <span class="type-badge badge-amber font-mono">AMBIVALENCIA</span>
                <span class="type-name font-serif">Negativa</span>
                <span class="type-sub">(Hostil)</span>
              </div>
            </td>
            <td class="col-manifestation">
              <p class="cell-text">
                Sentimientos de enojo, desconfianza, desacato o celos hacia el médico.
              </p>
            </td>
            <td class="col-impact">
              <p class="cell-text">
                Se manifiesta como <strong>abierta resistencia</strong>. Refleja la ambivalencia afectiva del paciente y reedita el encono con las figuras primarias.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Superación de la Transferencia (Golden Technique Rule) -->
    <div class="overcoming-box glass-panel">
      <div class="overcoming-header">
        <div class="overcoming-badge font-mono">✦ REGLA TÉCNICA FUNDAMENTAL</div>
        <h3 class="overcoming-title font-display">Superación de la Transferencia</h3>
      </div>
      
      <div class="overcoming-grid">
        <div class="rule-card rule-dont">
          <div class="rule-icon">✕</div>
          <div class="rule-body">
            <div class="rule-tag font-mono">LO QUE NO SE DEBE HACER</div>
            <p class="rule-text font-serif">
              <strong>No se debe ceder</strong> a las demandas del paciente ni <strong>rechazarlas con indignación</strong> moral o rechazo personal.
            </p>
          </div>
        </div>

        <div class="rule-card rule-do">
          <div class="rule-icon">✓</div>
          <div class="rule-body">
            <div class="rule-tag font-mono">EN QUÉ CONSISTE LA SUPERACIÓN</div>
            <p class="rule-text font-serif">
              Consiste en <strong>demostrarle que esos sentimientos no pertenecen a la relación actual ni al terapeuta</strong>, sino que son repeticiones de vivencias anteriores.
            </p>
          </div>
        </div>

        <div class="rule-card rule-result">
          <div class="rule-icon">⚡</div>
          <div class="rule-body">
            <div class="rule-tag font-mono">EFECTO TERAPÉUTICO FINAL</div>
            <p class="rule-text font-serif">
              De este modo, <strong>se fuerza al paciente a mudar la repetición en recuerdo</strong>, logrando que el Yo gane consciencia y soberanía sobre su historia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-transfer-types {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  overflow-y: auto;
  gap: 1rem;
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

/* Transference Table */
.table-container {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-rose);
}

.transference-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.transference-table thead {
  background: var(--rose-light);
  border-bottom: 2px solid var(--border-rose);
}

.transference-table th {
  padding: 0.85rem 1.4rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--rose-dark);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.transference-table td {
  padding: 1.1rem 1.4rem;
  border-bottom: 1px solid rgba(184, 58, 100, 0.08);
  vertical-align: top;
}

.transference-table tr:last-child td {
  border-bottom: none;
}

.col-type {
  width: 26%;
}

.col-manifestation {
  width: 37%;
}

.col-impact {
  width: 37%;
}

.type-cell {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.type-badge {
  display: inline-block;
  align-self: flex-start;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
  margin-bottom: 0.25rem;
  letter-spacing: 0.04em;
}

.badge-sage {
  background: var(--accent-sage-bg);
  color: var(--accent-sage);
}

.badge-rose {
  background: var(--accent-crimson-bg);
  color: var(--accent-crimson);
}

.badge-amber {
  background: var(--accent-amber-bg);
  color: var(--accent-amber);
}

.type-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--wine-deep);
}

.type-sub {
  font-size: 0.8rem;
  color: var(--text-dim);
}

.cell-text {
  font-size: 0.94rem;
  line-height: 1.5;
  color: var(--text-main);
}

/* Overcoming Box */
.overcoming-box {
  padding: 1.2rem 1.6rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(253, 241, 245, 0.65) 100%);
  border-left: 4px solid var(--rose-primary);
  border-radius: var(--radius-lg);
}

.overcoming-header {
  margin-bottom: 0.8rem;
}

.overcoming-badge {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--rose-primary);
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.overcoming-title {
  font-size: 1.25rem;
  color: var(--wine-deep);
  font-weight: 800;
}

.overcoming-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.rule-card {
  display: flex;
  gap: 0.8rem;
  padding: 0.9rem 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: var(--radius-md);
  border: 1px solid rgba(184, 58, 100, 0.12);
  align-items: flex-start;
}

.rule-icon {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  font-weight: 800;
  flex-shrink: 0;
}

.rule-dont .rule-icon {
  background: var(--accent-crimson-bg);
  color: var(--accent-crimson);
}

.rule-do .rule-icon {
  background: var(--accent-sage-bg);
  color: var(--accent-sage);
}

.rule-result .rule-icon {
  background: var(--rose-light);
  color: var(--rose-primary);
}

.rule-tag {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  color: var(--text-dim);
  margin-bottom: 0.2rem;
}

.rule-text {
  font-size: 0.92rem;
  line-height: 1.45;
  color: var(--text-main);
}
</style>
