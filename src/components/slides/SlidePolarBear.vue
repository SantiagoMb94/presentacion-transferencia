<template>
  <div class="slide-polar-bear animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · págs. 394–395</span>
        <span class="category-tag">Metáfora Tópica</span>
      </div>
      <h2 class="slide-title font-display">
        El Conflicto Neurótico: <span class="text-gold">El Oso Polar y la Ballena</span>
      </h2>
      <p class="slide-subtitle">
        ¿Por qué el neurótico no puede resolver su conflicto interior sin el trabajo analítico?
      </p>
    </div>

    <div class="polar-grid">
      <!-- Left: Visual Illustration -->
      <div class="visual-panel glass-panel">
        <div class="artwork-frame">
          <img 
            src="/assets/bear_whale.jpg" 
            alt="El Oso Polar y la Ballena en el umbral del inconsciente"
            class="artwork-img"
          />
          <div class="artwork-overlay"></div>
          <div class="waterline-marker">
            <span class="marker-line"></span>
            <span class="marker-label">Umbral de la Represión (Censura Psíquica)</span>
            <span class="marker-line"></span>
          </div>
        </div>
        <div class="artwork-legend font-serif">
          «Una disputa entre poderes de los cuales uno alcanzó el estadio de lo preconciente y conciente, mientras que el otro fue contenido en lo inconciente... Son tan incapaces de acuerdo como el oso polar y la ballena.»
        </div>
      </div>

      <!-- Right: Interactive Dynamic Breakdown -->
      <div class="breakdown-panel">
        <!-- Interactive Mode Selector Tabs -->
        <div class="tabs-row">
          <button 
            class="tab-btn" 
            :class="{ active: currentTab === 'bear' }"
            @click="currentTab = 'bear'"
          >
            🐻 El Oso Polar (Consciente)
          </button>
          <button 
            class="tab-btn" 
            :class="{ active: currentTab === 'whale' }"
            @click="currentTab = 'whale'"
          >
            🐋 La Ballena (Inconsciente)
          </button>
          <button 
            class="tab-btn highlight-tab" 
            :class="{ active: currentTab === 'bridge' }"
            @click="currentTab = 'bridge'"
          >
            ⚡ El Encuentro Terapéutico
          </button>
        </div>

        <!-- Dynamic Card Display -->
        <div class="card-display glass-panel">
          <transition name="fade-fast" mode="out-in">
            <div :key="currentTab" class="tab-detail">
              <div class="detail-header">
                <span class="system-tag font-mono">{{ activeData.system }}</span>
                <span class="realm-pill">{{ activeData.realm }}</span>
              </div>

              <h3 class="detail-title font-serif">{{ activeData.title }}</h3>
              <p class="detail-description">{{ activeData.desc }}</p>

              <div class="detail-traits">
                <div class="traits-title font-display">Dinámica Psíquica:</div>
                <ul>
                  <li v-for="(trait, i) in activeData.traits" :key="i">
                    <span class="bullet-gold">◆</span>
                    <span>{{ trait }}</span>
                  </li>
                </ul>
              </div>

              <div class="clinical-takeaway glass-panel">
                <div class="takeaway-label">Consecuencia Técnica:</div>
                <p class="takeaway-text font-serif">{{ activeData.clinicalInsight }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentTab = ref('bear');

const tabsData = {
  bear: {
    system: "SISTEMA Ccs / Prcc",
    realm: "Tierra Firme & Luz Diurna",
    title: "El Yo Adaptativo y las Exigencias Éticas",
    desc: "Representa las mociones anímicas que han alcanzado la conciencia: ideales sociales, deber moral, raciocinio secundario y lenguaje verbal estructurado.",
    traits: [
      "Opera bajo el principio de realidad y la lógica formal.",
      "Erigió una contrainvestidura (resistencia) para mantener a raya el impulso perturbador.",
      "Sufre el síntoma sin comprender de dónde brota su energía."
    ],
    clinicalInsight: "Querer curar al paciente apelando únicamente a su voluntad consciente o a sus convicciones morales es tan fútil como pedirle al oso polar que nade hasta el fondo del océano."
  },
  whale: {
    system: "SISTEMA Ics",
    realm: "Profundidades Abisales Inconscientes",
    title: "La Moción Libidinal Reprimida",
    desc: "Habita en las aguas oscuras de la represión primaria: pulsiones infantiles sofocadas, fijaciones edípicas y vivencias tempranas no tramitadas simbólicamente.",
    traits: [
      "Se rige por el proceso primario (atemporalidad, condensación y desplazamiento).",
      "No conoce la contradicción ni la negación lógica.",
      "Busca desesperadamente satisfacción sustitutiva a través de los síntomas patológicos."
    ],
    clinicalInsight: "El síntoma es el compromiso neurótico: la ballena asoma a la superficie vestida de angustia, fobia o ritual obsesivo para no ser reconocida por el oso."
  },
  bridge: {
    system: "DISPOSITIVO DE LA CURA",
    realm: "El Mismo Terreno Psicológico",
    title: "La Única Tarea de la Terapia Analítica",
    desc: "«Una decisión efectiva sólo puede producirse si los dos se encuentran en el mismo terreno. Pienso que la única tarea de la terapia consiste en posibilitar esto» (Freud, pág. 394).",
    traits: [
      "Elevar la moción inconsciente reprimida hasta el estrato preconsciente/consciente.",
      "Renovar el conflicto infantil: confrontar la pulsión en pie de igualdad, ahora con un Yo maduro.",
      "Hacer posible un pacto o una renuncia libre, en lugar de una represión ciega que engendre síntomas."
    ],
    clinicalInsight: "La transferencia será precisamente el escenario vivo donde la ballena y el oso polar abandonan sus hábitats separados para librar el combate decisivo ante el analista."
  }
};

const activeData = computed(() => tabsData[currentTab.value]);
</script>

<style scoped>
.slide-polar-bear {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  overflow-y: auto;
}

.slide-header {
  margin-bottom: 1.2rem;
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

.polar-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 2rem;
  flex-grow: 1;
  align-items: stretch;
}

.visual-panel {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.artwork-frame {
  position: relative;
  width: 100%;
  height: 320px;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
}

.artwork-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.artwork-frame:hover .artwork-img {
  transform: scale(1.03);
}

.artwork-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(8, 12, 20, 0.1) 0%, rgba(8, 12, 20, 0.4) 100%);
}

.waterline-marker {
  position: absolute;
  top: 48%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  z-index: 5;
}

.marker-line {
  flex-grow: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold-primary), transparent);
}

.marker-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--gold-light);
  background: rgba(8, 12, 20, 0.85);
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  border: 1px solid var(--border-gold);
  letter-spacing: 0.05em;
}

.artwork-legend {
  padding: 0.8rem 0.4rem 0.2rem;
  font-size: 0.95rem;
  line-height: 1.45;
  color: #CBD5E1;
  font-style: italic;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 0.6rem;
}

.breakdown-panel {
  display: flex;
  flex-direction: column;
}

.tabs-row {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
}

.tab-btn {
  flex: 1;
  padding: 0.65rem 0.8rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.tab-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
}

.tab-btn.active {
  background: rgba(212, 175, 55, 0.12);
  border-color: var(--gold-primary);
  color: var(--gold-light);
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.2);
}

.tab-btn.highlight-tab.active {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(168, 85, 247, 0.25));
  border-color: #F4E4BA;
}

.card-display {
  flex-grow: 1;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
}

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.system-tag {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
}

.realm-pill {
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 9999px;
  color: var(--text-muted);
}

.detail-title {
  font-size: 1.45rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.detail-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: #CBD5E1;
  margin-bottom: 1rem;
}

.detail-traits {
  margin-bottom: 1rem;
}

.traits-title {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 0.4rem;
  letter-spacing: 0.05em;
}

.detail-traits ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.detail-traits li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #E2E8F0;
  line-height: 1.4;
}

.bullet-gold {
  color: var(--gold-primary);
  font-size: 0.7rem;
  margin-top: 0.2rem;
}

.clinical-takeaway {
  padding: 0.8rem 1rem;
  background: rgba(212, 175, 55, 0.07);
  border-left: 2px solid var(--gold-primary);
  border-radius: var(--radius-sm);
  margin-top: auto;
}

.takeaway-label {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: var(--gold-primary);
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
}

.takeaway-text {
  font-size: 0.92rem;
  color: #F8FAFC;
  line-height: 1.4;
}

.fade-fast-enter-active,
.fade-fast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-fast-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.fade-fast-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 1024px) {
  .polar-grid {
    grid-template-columns: 1fr;
  }
  .slide-polar-bear {
    padding: 1.5rem;
  }
}
</style>
