<template>
  <div class="slide-tree animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · págs. 403–404</span>
        <span class="category-tag">Modelo Botánico & Estructural</span>
      </div>
      <h2 class="slide-title font-display">
        La Metáfora del Árbol y la <span class="text-gold">Neurosis Artificial</span>
      </h2>
      <p class="slide-subtitle">
        «La enfermedad no es algo terminado ni congelado, sino que sigue creciendo como un ser viviente...»
      </p>
    </div>

    <!-- The Botanical Analogy Card -->
    <div class="cambium-banner glass-panel">
      <div class="cambium-icon">🌳</div>
      <div class="cambium-body">
        <div class="cambium-label font-display">La Capa del Cámbium Vegetal (pág. 404)</div>
        <p class="cambium-text font-serif">
          «La trasferencia es comparable a la capa de crecimiento celular situada entre la corteza y la pulpa de un árbol, de la que surgen la nueva formación de tejidos y el espesamiento del tronco.»
        </p>
      </div>
    </div>

    <!-- The 4-Stage Metamorphosis Flow -->
    <div class="stages-flow">
      <div 
        v-for="(stage, i) in stages" 
        :key="i"
        class="stage-card glass-panel"
        :class="{ active: currentStage === i }"
        @click="currentStage = i"
      >
        <div class="stage-top">
          <span class="stage-step font-mono">0{{ i + 1 }}</span>
          <span class="stage-tag">{{ stage.badge }}</span>
        </div>

        <h3 class="stage-title font-serif">{{ stage.title }}</h3>
        <p class="stage-desc">{{ stage.short }}</p>

        <div class="stage-arrow" v-if="i < 3">➔</div>
      </div>
    </div>

    <!-- Active Stage Deep Inspection -->
    <div class="inspection-panel glass-panel">
      <div class="inspect-header">
        <div class="inspect-title font-serif">
          Fase {{ currentStage + 1 }}: {{ stages[currentStage].title }}
        </div>
        <span class="inspect-subtitle font-mono">{{ stages[currentStage].code }}</span>
      </div>

      <div class="inspect-grid">
        <div class="inspect-col">
          <div class="sub-label">Dinámica en el Paciente:</div>
          <p class="sub-text">{{ stages[currentStage].patientState }}</p>
        </div>
        <div class="inspect-col">
          <div class="sub-label">Posición del Analista:</div>
          <p class="sub-text">{{ stages[currentStage].analystPosition }}</p>
        </div>
        <div class="inspect-col result-col">
          <div class="sub-label">Efecto Terapéutico:</div>
          <p class="sub-result font-serif">{{ stages[currentStage].clinicalOutcome }}</p>
        </div>
      </div>
    </div>

    <!-- Final Freedom Statement -->
    <div class="freedom-footer glass-panel">
      <span class="gold-sparkle">✦</span>
      <p class="freedom-quote font-serif">
        «El hombre que en la relación con el médico ha pasado a ser normal y libre del efecto de unas mociones reprimidas, <strong>sigue siéndolo también en su vida propia cuando el médico se ha hecho a un lado</strong>.» (Freud, pág. 404)
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentStage = ref(1);

const stages = [
  {
    title: "La Enfermedad Histórica",
    badge: "Punto de Partida",
    short: "Síntomas dispersos, inhibiciones y angustia enraizados en la infancia.",
    code: "NEUROSIS PRIMARIA // SÍNTOMAS DISPERSOS",
    patientState: "El paciente padece formaciones sintomáticas sustitutivas que intentan tramitar sin éxito fijaciones reprimidas previas.",
    analystPosition: "Oyente neutral; investiga recuerdos y lagunas amnésicas.",
    clinicalOutcome: "El trabajo con recuerdos históricos aislados resulta insuficiente y abstracto."
  },
  {
    title: "Concentración Transferencial",
    badge: "Foco Único",
    short: "Toda la nueva producción mórbida se concentra en el vínculo con el médico.",
    code: "CONDENSACIÓN EN EL OBJETO MÉDICO",
    patientState: "El paciente abandona el significado originario de sus síntomas y los reorienta en reclamos de amor, celos, desaires o rebeldía hacia el médico.",
    analystPosition: "Se sitúa en una posición sumamente ventajosa: es el centro mismo de la afección viva.",
    clinicalOutcome: "La enfermedad deja de ser un recuerdo lejano y se convierte en una experiencia de presente inmediato."
  },
  {
    title: "Neurosis Artificial Creada",
    badge: "Campo de Batalla",
    short: "Una nueva versión que sustituye por completo a la afección antigua.",
    code: "ÜBERTRAGUNGSNEUROSE // NEUROSIS ARTIFICIAL",
    patientState: "El sujeto no vive ya su antigua neurosis, sino una afección artificialmente cultivada en el laboratorio del consultorio.",
    analystPosition: "Opera como soporte del síntoma y superficie de interpretación en tiempo real.",
    clinicalOutcome: "Al vencer la resistencia en este nuevo escenario palpable, se desarticula el núcleo patógeno original."
  },
  {
    title: "Domeñamiento y Emancipación",
    badge: "Disolución & Libertad",
    short: "Finiquitación de la cura y retirada del médico.",
    code: "CURACIÓN Y SALIDA DEL DISPOSITIVO",
    patientState: "El sujeto queda libre del yugo pulsional inconsciente y recupera su capacidad autónoma de amar y producir.",
    analystPosition: "Se hace a un lado; no se adueña de la devoción del paciente ni mantiene tutela moral alguna.",
    clinicalOutcome: "La libertad conquistada con el analista se traslada permanentemente a su vida familiar y social."
  }
];
</script>

<style scoped>
.slide-tree {
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

.cambium-banner {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.8rem 1.4rem;
  border-left: 3px solid var(--gold-primary);
  background: rgba(212, 175, 55, 0.05);
  margin-bottom: 1rem;
}

.cambium-icon {
  font-size: 2.2rem;
}

.cambium-label {
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--gold-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.cambium-text {
  font-size: 1.02rem;
  font-style: italic;
  color: #E2E8F0;
  line-height: 1.4;
}

.stages-flow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
}

.stage-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  border: 1px solid var(--border-subtle);
}

.stage-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold-primary);
}

.stage-card.active {
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.1);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.25);
}

.stage-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.stage-step {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--gold-primary);
}

.stage-tag {
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
}

.stage-title {
  font-size: 1.1rem;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
  line-height: 1.2;
}

.stage-desc {
  font-size: 0.82rem;
  color: #CBD5E1;
  line-height: 1.35;
}

.stage-arrow {
  position: absolute;
  right: -14px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gold-primary);
  font-size: 1.1rem;
  z-index: 10;
  pointer-events: none;
}

.inspection-panel {
  padding: 1.2rem 1.4rem;
  background: rgba(15, 23, 42, 0.7);
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.inspect-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 0.4rem;
}

.inspect-title {
  font-size: 1.25rem;
  color: var(--gold-light);
  font-weight: 700;
}

.inspect-subtitle {
  font-size: 0.72rem;
  color: var(--gold-primary);
}

.inspect-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 1.4rem;
}

.sub-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 0.3rem;
}

.sub-text {
  font-size: 0.88rem;
  color: #E2E8F0;
  line-height: 1.4;
}

.result-col {
  border-left: 2px solid var(--border-gold);
  padding-left: 1rem;
}

.sub-result {
  font-size: 0.98rem;
  color: #FDF4DC;
  font-style: italic;
  line-height: 1.4;
}

.freedom-footer {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 1.2rem;
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.25);
  margin-top: auto;
}

.gold-sparkle {
  color: var(--gold-primary);
  font-size: 1.2rem;
}

.freedom-quote {
  font-size: 0.92rem;
  color: #D1FAE5;
  line-height: 1.35;
}

.freedom-quote strong {
  color: #FFFFFF;
}

@media (max-width: 1024px) {
  .stages-flow {
    grid-template-columns: 1fr 1fr;
  }
  .stage-arrow {
    display: none;
  }
  .inspect-grid {
    grid-template-columns: 1fr;
  }
  .slide-tree {
    padding: 1.5rem;
  }
}
</style>
