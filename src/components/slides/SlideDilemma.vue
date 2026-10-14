<template>
  <div class="slide-dilemma animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · págs. 392–394</span>
        <span class="category-tag">Fundamentación Clínica</span>
      </div>
      <h2 class="slide-title font-display">
        El Dilema Terapéutico y los <span class="text-gold">Límites Iniciales</span>
      </h2>
      <p class="slide-subtitle">
        ¿Dónde hay espacio para una intervención terapéutica en la contracción de la neurosis?
      </p>
    </div>

    <div class="factors-grid">
      <div 
        v-for="(factor, index) in factors" 
        :key="factor.num"
        class="factor-card glass-panel"
        :class="{ active: selectedFactor === index }"
        @click="selectedFactor = index"
      >
        <div class="factor-header">
          <span class="factor-num font-mono">{{ factor.num }}</span>
          <span class="status-badge" :class="'badge-' + factor.color">{{ factor.status }}</span>
        </div>

        <h3 class="factor-name font-serif">{{ factor.name }}</h3>
        <p class="factor-desc">{{ factor.desc }}</p>

        <div class="factor-footer">
          <span class="pill-category">{{ factor.badge }}</span>
          <span class="explore-hint">Click para reflexionar</span>
        </div>
      </div>
    </div>

    <!-- Active Factor Deep Dive Banner -->
    <div class="deep-dive-box glass-panel">
      <div class="deep-dive-icon font-serif">§</div>
      <div class="deep-dive-content">
        <div class="deep-dive-title font-display">
          Conclusión de Freud sobre {{ factors[selectedFactor].name }}:
        </div>
        <p class="deep-dive-text font-serif">
          {{ factorDetails[selectedFactor] }}
        </p>
      </div>
    </div>

    <!-- Refutation of Misconception Quote -->
    <div class="refutation-banner glass-panel">
      <div class="banner-badge">Desmitificación de Freud</div>
      <p class="banner-quote font-serif">
        «¿Quién les ha informado tan falsamente? Ni por asomo el consejo de gozar de la vida sexualmente cumple un papel en la terapia analítica... No somos reformadores, sino meramente observadores que educan para autoconfesarse la verdad.» (págs. 393–395)
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedFactor = ref(0);

const factors = [
  {
    num: "01",
    name: "Disposición Hereditaria",
    status: "Límite Biológico",
    desc: "No solemos hablar mucho sobre ella, pues es enérgicamente destacada por otros. En calidad de terapeutas sentimos su poder con claridad, pero nada podemos cambiar en ella.",
    badge: "Constitución Innata",
    color: "amber"
  },
  {
    num: "02",
    name: "Vivencias Infantiles Tempranas",
    status: "Pasado Inmutable",
    desc: "Están en primer plano en el análisis. Pertenecen al pasado consumado; ninguna terapia puede hacer que no hayan acontecido.",
    badge: "Fijación Histórica",
    color: "blue"
  },
  {
    num: "03",
    name: "Frustración Real / Desventura",
    status: "No Beneficencia Social",
    desc: "Pobreza, desamor, querellas de familia, rigores éticos. Freud ironiza: no somos el emperador José II cuya voluntad milagrosa hacía desaparecer las dificultades sociales.",
    badge: "Condición Externa",
    color: "purple"
  },
  {
    num: "04",
    name: "Restricción Moral Social",
    status: "Falsa Creencia Refutada",
    desc: "Falso rumor de que el análisis receta 'libertinaje sexual'. En el neurótico se libra un conflicto obstinado entre sensualidad y represión: tomar partido no cura.",
    badge: "Ética de la Cura",
    color: "rose"
  }
];

const factorDetails = [
  "La herencia genética y constitucional traza el terreno biológico. El analista la respeta como frontera absoluta, pero su campo no es la eugenesia ni la biología: es el conflicto psíquico.",
  "Las huellas mnémicas de la niñez son indelebles en cuanto a su ocurrencia. Sin embargo, lo que SÍ puede modificarse es la resignificación y el destino que el Yo adulto les otorga en el presente.",
  "El analista no puede proveer empleo, dinero ni un matrimonio feliz al paciente. No practica beneficencia filantrópica; su tarea es liberar la capacidad del sujeto para afrontar la realidad.",
  "El tratamiento analítico no aconseja ni prohíbe. Se abstiene de dar prescripciones sobre matrimonio o divorcio durante el análisis. El único imperativo es la sinceridad subjetiva ante sí mismo."
];
</script>

<style scoped>
.slide-dilemma {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  overflow-y: auto;
}

.slide-header {
  margin-bottom: 1.5rem;
}

.header-badge-row {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.5rem;
}

.category-tag {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.1);
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
}

.slide-title {
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  font-weight: 800;
  color: #FFFFFF;
  margin-bottom: 0.3rem;
}

.slide-subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
}

.factors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-bottom: 1.2rem;
}

.factor-card {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  border: 1px solid var(--border-subtle);
}

.factor-card:hover {
  transform: translateY(-4px);
  border-color: var(--gold-primary);
}

.factor-card.active {
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.08);
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.2);
}

.factor-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.factor-num {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gold-primary);
}

.status-badge {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  font-weight: 600;
}

.badge-amber { background: rgba(245, 158, 11, 0.2); color: #FBBF24; border: 1px solid rgba(245, 158, 11, 0.4); }
.badge-blue { background: rgba(59, 130, 246, 0.2); color: #60A5FA; border: 1px solid rgba(59, 130, 246, 0.4); }
.badge-purple { background: rgba(168, 85, 247, 0.2); color: #C084FC; border: 1px solid rgba(168, 85, 247, 0.4); }
.badge-rose { background: rgba(244, 63, 94, 0.2); color: #FB7185; border: 1px solid rgba(244, 63, 94, 0.4); }

.factor-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.6rem;
  line-height: 1.2;
}

.factor-desc {
  font-size: 0.88rem;
  line-height: 1.5;
  color: #CBD5E1;
  flex-grow: 1;
  margin-bottom: 1rem;
}

.factor-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 0.6rem;
}

.pill-category {
  color: var(--gold-light);
  font-weight: 600;
}

.explore-hint {
  color: var(--text-dim);
}

.deep-dive-box {
  display: flex;
  gap: 1.2rem;
  padding: 1rem 1.4rem;
  background: rgba(212, 175, 55, 0.05);
  border-left: 3px solid var(--gold-primary);
  margin-bottom: 1rem;
  align-items: center;
}

.deep-dive-icon {
  font-size: 2rem;
  color: var(--gold-primary);
  line-height: 1;
}

.deep-dive-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--gold-light);
  margin-bottom: 0.2rem;
}

.deep-dive-text {
  font-size: 1.05rem;
  font-style: italic;
  color: #E2E8F0;
  line-height: 1.4;
}

.refutation-banner {
  padding: 0.9rem 1.4rem;
  background: rgba(239, 68, 68, 0.05);
  border: 1px solid rgba(239, 68, 68, 0.25);
  border-radius: var(--radius-md);
}

.banner-badge {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #F87171;
  letter-spacing: 0.06em;
  margin-bottom: 0.3rem;
}

.banner-quote {
  font-size: 0.98rem;
  font-style: italic;
  color: #FEE2E2;
  line-height: 1.45;
}

@media (max-width: 1024px) {
  .factors-grid {
    grid-template-columns: 1fr 1fr;
  }
  .slide-dilemma {
    padding: 1.5rem;
  }
}
</style>
