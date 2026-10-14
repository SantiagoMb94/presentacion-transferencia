<template>
  <div class="slide-two-phases animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · págs. 395–397</span>
        <span class="category-tag">Técnica Psicoanalítica</span>
      </div>
      <h2 class="slide-title font-display">
        La Meta de la Cura y el <span class="text-gold">Método en Dos Fases</span>
      </h2>
      <p class="slide-subtitle">
        ¿Por qué el simple saber intelectual del analista no disuelve los síntomas neuróticos?
      </p>
    </div>

    <!-- The 3 Classic Formulas -->
    <div class="formulas-bar">
      <div class="formula-pill glass-panel">
        <span class="formula-num font-mono">I</span>
        <span class="formula-text font-serif">Hacer conciente lo inconciente</span>
      </div>
      <div class="formula-pill glass-panel">
        <span class="formula-num font-mono">II</span>
        <span class="formula-text font-serif">Cancelación de las represiones</span>
      </div>
      <div class="formula-pill glass-panel">
        <span class="formula-num font-mono">III</span>
        <span class="formula-text font-serif">Llenado de las lagunas amnésicas</span>
      </div>
    </div>

    <!-- The Error of Narrow-Mindedness vs The Two Phases -->
    <div class="main-two-columns">
      <!-- Left Column: The Historical Technical Error -->
      <div class="error-box glass-panel">
        <div class="error-header">
          <span class="error-tag">El Antiguo Error Técnico</span>
          <span class="error-name font-display">«La Estrechez de Miras»</span>
        </div>
        <p class="error-desc font-serif">
          «Antaño creíamos que era muy simple: bastaba con colegir lo inconciente y enunciárselo al paciente...»
        </p>

        <div class="error-verdict glass-panel">
          <div class="verdict-icon">⚠️</div>
          <div class="verdict-text">
            <strong>Fracaso del Saber Intelectual:</strong>
            <p>Nuestro saber sobre lo inconsciente no equivale al saber de él. Cuando se lo comunicamos, el paciente lo almacena <em>junto a</em> su inconsciente, no en lugar de él. La represión sigue intacta.</p>
          </div>
        </div>

        <div class="causal-therapy-badge">
          <span class="badge-title font-display">¿Es el Psicoanálisis una Terapia Causal?</span>
          <p class="badge-body">
            Sí, en cuanto no ataca superficialmente el síntoma, sino que persigue el encadenamiento causal hasta las represiones y disposiciones pulsionales.
          </p>
        </div>
      </div>

      <!-- Right Column: The 2-Phase Interactive Workflow -->
      <div class="phases-box glass-panel">
        <div class="phases-header">
          <span class="phases-tag font-display">El Auténtico Dispositivo Analítico</span>
          <span class="phases-sub">Seleccione una fase para inspeccionar su operatoria:</span>
        </div>

        <div class="stepper-row">
          <div 
            class="step-card" 
            :class="{ active: activeStep === 1 }"
            @click="activeStep = 1"
          >
            <div class="step-badge font-mono">FASE 1</div>
            <div class="step-title font-serif">Rebusca de la Represión</div>
            <div class="step-sub">Localización Tópica</div>
          </div>

          <div class="step-arrow font-serif">➔</div>

          <div 
            class="step-card" 
            :class="{ active: activeStep === 2 }"
            @click="activeStep = 2"
          >
            <div class="step-badge font-mono">FASE 2</div>
            <div class="step-title font-serif">Eliminación de la Resistencia</div>
            <div class="step-sub">Vencer la Contrainvestidura</div>
          </div>
        </div>

        <!-- Step Details Card -->
        <div class="step-detail-card glass-panel">
          <div class="step-meta">
            <span class="meta-badge">{{ activeStep === 1 ? 'Objetivo Tópico' : 'Objetivo Dinámico' }}</span>
            <span class="meta-pages">Conferencia 27, pág. 397</span>
          </div>

          <h3 class="step-detail-heading font-serif">
            {{ activeStep === 1 ? '1. Pesquisar en el recuerdo el lugar de la represión' : '2. Confrontar y remover la resistencia del Yo' }}
          </h3>

          <p class="step-detail-text">
            {{ activeStep === 1 
              ? 'Debemos representarnos a eso inconciente tópicamente; rebuscar en su memoria el punto exacto en que la moción pulsional fue sofocada y expulsada de la conciencia. Pero hallar la represión no basta si una fuerza la custodia.' 
              : 'La resistencia brota de la contrainvestidura (Gegenbesetzung) que el Yo erigió para reprimir la moción chocante. Esta contrainvestidura no pertenece al inconsciente sino al Yo, nuestro colaborador. La resistencia debe resignarse tan pronto el Yo tome conocimiento de ella mediante la interpretación.' 
            }}
          </p>

          <div class="step-formula font-serif">
            <span class="formula-icon">★</span>
            <span>
              {{ activeStep === 1 
                ? 'Regla: «Primero la rebusca de la represión, después la eliminación de la resistencia que la mantiene en pie».' 
                : 'Mecanismo: «El Yo resigna la contrainvestidura cuando la interpretación le revela el costo neurótico del síntoma».' 
              }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeStep = ref(1);
</script>

<style scoped>
.slide-two-phases {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  overflow-y: auto;
}

.slide-header {
  margin-bottom: 1rem;
}

.header-badge-row {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.4rem;
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

.formulas-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.2rem;
}

.formula-pill {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--border-gold);
}

.formula-num {
  font-weight: 700;
  color: var(--gold-primary);
  font-size: 1rem;
}

.formula-text {
  font-size: 1.05rem;
  color: var(--gold-light);
  font-style: italic;
}

.main-two-columns {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 1.5rem;
  flex-grow: 1;
}

.error-box {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  border-left: 3px solid var(--accent-crimson);
}

.error-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
}

.error-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #F87171;
  letter-spacing: 0.05em;
}

.error-name {
  font-size: 1.3rem;
  color: #FFFFFF;
}

.error-desc {
  font-size: 1.05rem;
  font-style: italic;
  color: #CBD5E1;
  margin-bottom: 1rem;
}

.error-verdict {
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  background: rgba(239, 68, 68, 0.08);
  border: 1px solid rgba(239, 68, 68, 0.25);
  margin-bottom: 1rem;
}

.verdict-icon {
  font-size: 1.4rem;
}

.verdict-text {
  font-size: 0.88rem;
  line-height: 1.45;
  color: #FEE2E2;
}

.verdict-text strong {
  display: block;
  color: #FCA5A5;
  margin-bottom: 0.2rem;
}

.causal-therapy-badge {
  margin-top: auto;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-sm);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.badge-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--gold-primary);
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.2rem;
}

.badge-body {
  font-size: 0.85rem;
  color: #94A3B8;
  line-height: 1.4;
}

.phases-box {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

.phases-header {
  margin-bottom: 0.8rem;
}

.phases-tag {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--gold-light);
  display: block;
}

.phases-sub {
  font-size: 0.85rem;
  color: var(--text-dim);
}

.stepper-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.step-card {
  flex: 1;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.step-card:hover {
  background: rgba(255, 255, 255, 0.08);
}

.step-card.active {
  background: rgba(212, 175, 55, 0.12);
  border-color: var(--gold-primary);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
}

.step-badge {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--gold-primary);
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}

.step-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: #FFFFFF;
}

.step-sub {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.step-arrow {
  color: var(--gold-primary);
  font-size: 1.2rem;
}

.step-detail-card {
  flex-grow: 1;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  background: rgba(15, 23, 42, 0.6);
}

.step-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  font-size: 0.75rem;
}

.meta-badge {
  color: var(--gold-primary);
  font-weight: 700;
  text-transform: uppercase;
}

.meta-pages {
  color: var(--text-dim);
}

.step-detail-heading {
  font-size: 1.3rem;
  color: #FFFFFF;
  margin-bottom: 0.6rem;
}

.step-detail-text {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #CBD5E1;
  margin-bottom: 1rem;
}

.step-formula {
  margin-top: auto;
  padding: 0.8rem;
  background: rgba(212, 175, 55, 0.06);
  border-left: 2px solid var(--gold-primary);
  font-size: 0.95rem;
  font-style: italic;
  color: var(--gold-light);
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.formula-icon {
  color: var(--gold-primary);
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .formulas-bar {
    grid-template-columns: 1fr;
  }
  .main-two-columns {
    grid-template-columns: 1fr;
  }
  .slide-two-phases {
    padding: 1.5rem;
  }
}
</style>
