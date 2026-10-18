<template>
  <div class="slide-resistance-repression animate-fade-in">
    <!-- Header -->
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 04</span>
        <span class="category-tag">Conferencia 27 · págs. 395–398</span>
      </div>
      <h2 class="slide-title font-display">
        El Rol de la <span class="text-rose">Resistencia y la Represión</span>
      </h2>
      <p class="slide-subtitle">
        Las fuerzas inconscientes que custodian el síntoma y los límites del mero saber intelectual
      </p>
    </div>

    <!-- Core Dynamic Forces Comparison -->
    <div class="forces-grid">
      <!-- Force 1: Resistencia -->
      <div class="force-card glass-panel card-resistance">
        <div class="force-header">
          <div class="force-icon-circle icon-shield">🛡️</div>
          <div>
            <span class="force-tag font-mono">EN EL PRESENTE TERAPÉUTICO</span>
            <h3 class="force-title font-serif">La Resistencia</h3>
          </div>
        </div>

        <div class="force-definition font-serif">
          «Es la fuerza que se opone activamente a que los contenidos reprimidos lleguen a hacerse conscientes durante la terapia.»
        </div>

        <ul class="force-bullets">
          <li>
            <strong>Obstáculo directo:</strong> Dificulta que los deseos, recuerdos y conflictos reprimidos alcancen el umbral de la conciencia.
          </li>
          <li>
            <strong>Aliada del Yo defensivo:</strong> Protege el equilibrio neurótico previo, prefiriendo el sufrimiento conocido al cambio psíquico.
          </li>
          <li>
            <strong>Manifestación en sesión:</strong> Bloqueos asociativos, silencios, desacatos o erotización transferencial como pantalla.
          </li>
        </ul>
      </div>

      <!-- Force 2: Represión -->
      <div class="force-card glass-panel card-repression">
        <div class="force-header">
          <div class="force-icon-circle icon-lock">🔒</div>
          <div>
            <span class="force-tag font-mono">EL MECANISMO ORIGINARIO</span>
            <h3 class="force-title font-serif">La Represión</h3>
          </div>
        </div>

        <div class="force-definition font-serif">
          «Mantiene fuera de la conciencia determinados deseos, representaciones o mociones pulsionales que generan conflicto.»
        </div>

        <ul class="force-bullets">
          <li>
            <strong>Génesis del síntoma:</strong> Expulsó en la infancia aquello que el Yo inmaduro no pudo tramitar éticamente.
          </li>
          <li>
            <strong>Satisfacción sustitutiva:</strong> Lo reprimido no desaparece: pulsa en lo inconsciente y emerge disfrazado como síntoma.
          </li>
          <li>
            <strong>Relación de fuerzas:</strong> La represión creó el olvido; la resistencia es la contrainvestidura que vela porque siga olvidado.
          </li>
        </ul>
      </div>
    </div>

    <!-- Central Revelation: La Insuficiencia del Saber Intelectual -->
    <div class="intellect-box glass-panel">
      <div class="intellect-top">
        <span class="alert-icon">💡</span>
        <div class="intellect-headings">
          <span class="intellect-badge font-mono">PRINCIPIO TÉCNICO DECISIVO</span>
          <h4 class="intellect-title font-display">La Insuficiencia de la Comprensión Intelectual</h4>
        </div>
      </div>
      <p class="intellect-quote font-serif">
        «Comprender intelectualmente un conflicto no es suficiente: es estrictamente necesario trabajar y vencer las resistencias que lo mantienen.»
      </p>
      <p class="intellect-explanation">
        Freud advierte que comunicar al paciente el significado oculto de su síntoma no produce la cura. El sujeto simplemente almacena la información teórica en su intelecto mientras la represión y el sufrimiento continúan intactos. Solo al vivenciar y desarticular la resistencia dentro de la transferencia acontece la verdadera emancipación.
      </p>
    </div>

    <!-- Interactive Flow Diagram -->
    <div class="workflow-strip glass-panel">
      <div class="flow-item">
        <span class="flow-idx font-mono">1</span>
        <span class="flow-text font-serif">Conflicto Reprimido</span>
      </div>
      <div class="flow-separator">➔</div>
      <div class="flow-item active-flow">
        <span class="flow-idx font-mono">2</span>
        <span class="flow-text font-serif">Resistencia en Sesión</span>
      </div>
      <div class="flow-separator">➔</div>
      <div class="flow-item">
        <span class="flow-idx font-mono">3</span>
        <span class="flow-text font-serif">Trabajo de Elaboración</span>
      </div>
      <div class="flow-separator">➔</div>
      <div class="flow-item success-flow">
        <span class="flow-idx font-mono">4</span>
        <span class="flow-text font-serif">Hacer Consciente lo Reprimido</span>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-resistance-repression {
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

/* Forces Grid */
.forces-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}

.force-card {
  padding: 1.25rem 1.5rem;
  background: rgba(255, 255, 255, 0.92);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.card-resistance {
  border-left: 4px solid var(--rose-primary);
}

.card-repression {
  border-left: 4px solid var(--accent-lavender);
}

.force-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.force-icon-circle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.icon-shield {
  background: var(--rose-light);
  color: var(--rose-primary);
}

.icon-lock {
  background: var(--accent-lavender-bg);
  color: var(--accent-lavender);
}

.force-tag {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: var(--text-dim);
}

.force-title {
  font-size: 1.35rem;
  color: var(--wine-deep);
  font-weight: 700;
}

.force-definition {
  font-size: 1.08rem;
  line-height: 1.45;
  color: var(--wine-deep);
  font-style: italic;
  font-weight: 600;
  background: rgba(250, 240, 244, 0.5);
  padding: 0.65rem 0.95rem;
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--border-rose-glow);
}

.force-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  font-size: 0.88rem;
  line-height: 1.45;
  color: var(--text-main);
}

.force-bullets li {
  position: relative;
  padding-left: 1.1rem;
}

.force-bullets li::before {
  content: '✦';
  position: absolute;
  left: 0;
  color: var(--rose-primary);
  font-size: 0.8rem;
}

/* Intellect Box */
.intellect-box {
  padding: 1.15rem 1.6rem;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(254, 243, 247, 0.8) 100%);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-rose);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.intellect-top {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.alert-icon {
  font-size: 1.35rem;
}

.intellect-badge {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: var(--rose-primary);
}

.intellect-title {
  font-size: 1.22rem;
  color: var(--wine-deep);
  font-weight: 800;
}

.intellect-quote {
  font-size: 1.18rem;
  font-weight: 700;
  color: var(--rose-dark);
  line-height: 1.35;
}

.intellect-explanation {
  font-size: 0.88rem;
  line-height: 1.48;
  color: var(--text-main);
}

/* Workflow Strip */
.workflow-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.6rem;
  background: rgba(255, 255, 255, 0.9);
}

.flow-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.flow-idx {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-dim);
}

.active-flow .flow-idx {
  background: var(--rose-primary);
  color: #FFFFFF;
  border-color: var(--rose-primary);
}

.success-flow .flow-idx {
  background: var(--accent-sage);
  color: #FFFFFF;
  border-color: var(--accent-sage);
}

.flow-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--wine-deep);
}

.flow-separator {
  color: var(--rose-primary);
  font-size: 1.1rem;
  font-weight: 700;
}
</style>
