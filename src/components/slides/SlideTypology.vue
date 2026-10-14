<template>
  <div class="slide-typology animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · págs. 401–403</span>
        <span class="category-tag">Fenomenología Clínica</span>
      </div>
      <h2 class="slide-title font-display">
        Tipología y Formas de la <span class="text-gold">Transferencia</span>
      </h2>
      <p class="slide-subtitle">
        ¿Cómo se exterioriza la investidura afectiva transferencial en el dispositivo clínico?
      </p>
    </div>

    <!-- The 3 Interactive Type Cards -->
    <div class="types-grid">
      <div 
        v-for="(type, idx) in types" 
        :key="idx"
        class="type-card glass-panel"
        :class="[type.theme, { active: activeType === idx }]"
        @click="activeType = idx"
      >
        <div class="type-top">
          <span class="type-icon">{{ type.icon }}</span>
          <span class="role-pill" :class="'role-' + type.theme">{{ type.role }}</span>
        </div>

        <h3 class="type-name font-serif">{{ type.name }}</h3>
        <p class="type-essence font-serif">{{ type.essence }}</p>

        <div class="type-manifestations">
          <div class="section-label">Manifestación Típica:</div>
          <p class="manifest-text">{{ type.manifestation }}</p>
        </div>

        <div class="type-bottom">
          <span class="status-indicator">
            <span class="status-dot"></span>
            {{ type.status }}
          </span>
          <span class="select-hint">Click para ver dinámica</span>
        </div>
      </div>
    </div>

    <!-- Deep Analytical Dynamic Inspector -->
    <div class="type-inspector glass-panel">
      <div class="inspector-badge font-mono">{{ types[activeType].systemCode }}</div>
      <div class="inspector-grid">
        <div class="inspector-col">
          <div class="col-title font-display">Mecanismo Metapsicológico:</div>
          <p class="col-desc">{{ types[activeType].metapsychology }}</p>
        </div>
        <div class="inspector-col">
          <div class="col-title font-display">El Desafío para el Analista:</div>
          <p class="col-desc">{{ types[activeType].technicalChallenge }}</p>
        </div>
        <div class="inspector-col quote-col">
          <div class="col-title font-display">Palabras de Freud:</div>
          <p class="col-quote font-serif">«{{ types[activeType].freudQuote }}»</p>
        </div>
      </div>
    </div>

    <!-- Gender Note Banner -->
    <div class="gender-note glass-panel">
      <div class="gender-icon">👥</div>
      <div class="gender-text">
        <strong>Universalidad y Diferencia de Sexos (pág. 402):</strong> La transferencia no ocurre únicamente entre sexos opuestos. En pacientes masculinos Freud advierte que las formas sublimadas son frecuentes, así como la emergencia patente de la <em>transferencia hostil o negativa</em> nacida de la ambivalencia afectiva.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeType = ref(0);

const types = [
  {
    name: "Transferencia Positiva Sublimada",
    icon: "🤝",
    theme: "sublimated",
    role: "Motor de la Cura",
    status: "Aliada Fundamental",
    essence: "Ternura moderada, estima amistosa, respeto intelectual y confianza plena en el analista.",
    manifestation: "Deseo de ser escuchada o guiada como hija predilecta, pacto de amistad espiritual, docilidad asociativa.",
    systemCode: "T-POS-SUB // INVESTIDURA DE RESPETO",
    metapsychology: "Componentes tiernos de la libido que han sufrido desexualización o sublimación cultural. Presta al analista la autoridad necesaria para que el paciente asimile interpretaciones sin desmoronarse.",
    technicalChallenge: "Aprovecharla para hacer avanzar el trabajo mnémico sin dejarla fijarse en un complaciente vínculo de devoción mutua.",
    freudQuote: "Durante un tiempo constituye el más poderoso resorte impulsor del trabajo. Nada se registra de ella, ni hace falta tomarla en cuenta, mientras opera en favor del análisis."
  },
  {
    name: "Transferencia Positiva Erótica",
    icon: "🔥",
    theme: "erotic",
    role: "Resistencia Severa",
    status: "Riesgo Supremo",
    essence: "Reclamo tempestuoso de amor carnal, apasionamiento incondicional o exigencia de reciprocidad amorosa.",
    manifestation: "Declaraciones de enamoramiento súbito, celos intensos de la vida privada del analista, renuncia al interés en los síntomas.",
    systemCode: "T-POS-ERO // ACTING OUT LIBIDINAL",
    metapsychology: "La necesidad pulsional inconsciente busca una satisfacción sustitutiva inmediata en la figura del analista para evitar el doloroso trabajo de recordar el pasado traumático.",
    technicalChallenge: "Abstinencia innegociable. No ceder a la demanda afectiva ni rechazarla con enojo moral; interpretarla como repetición.",
    freudQuote: "Oye uno con asombro manifestaciones de mujeres que siempre habrían sabido que sólo por el amor podían sanar... y creído tan fácilmente todo lo que de otro modo es tan difícil de creer."
  },
  {
    name: "Transferencia Negativa / Hostil",
    icon: "⚡",
    theme: "hostile",
    role: "Resistencia Abierta",
    status: "Ambivalencia Afectiva",
    essence: "Sentimientos de encono, suspicacia, resentimiento, desobediencia y desprecio hacia el terapeuta.",
    manifestation: "Desacato de las reglas del encuadre, ataques a la validez del psicoanálisis, acusaciones de incomprensión.",
    systemCode: "T-NEG // POLARIDAD ODIO-DESACATO",
    metapsychology: "Refleja la ambivalencia primordial del ser humano. Freud resalta que el desacato implica exactamente la misma dependencia afectiva que el acatamiento ciego, pero con signo invertido.",
    technicalChallenge: "Tolerar el ataque sin tomar represalias personales; revelar al paciente las figuras primordiales contra las que verdaderamente va dirigida esa hostilidad.",
    freudQuote: "Los sentimientos hostiles importan un vínculo afectivo a igual título que los tiernos, así como el desacato implica la misma dependencia que el acatamiento."
  }
];
</script>

<style scoped>
.slide-typology {
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

.types-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-bottom: 1rem;
}

.type-card {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.25s ease;
  position: relative;
  border: 1px solid var(--border-subtle);
}

.type-card:hover {
  transform: translateY(-4px);
}

.type-card.active {
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.25);
}

.type-card.sublimated.active { border-color: #34D399; background: rgba(16, 185, 129, 0.08); }
.type-card.erotic.active { border-color: #F87171; background: rgba(239, 68, 68, 0.08); }
.type-card.hostile.active { border-color: #FBBF24; background: rgba(245, 158, 11, 0.08); }

.type-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.type-icon {
  font-size: 1.8rem;
}

.role-pill {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  letter-spacing: 0.05em;
}

.role-sublimated { background: rgba(16, 185, 129, 0.2); color: #34D399; }
.role-erotic { background: rgba(239, 68, 68, 0.2); color: #F87171; }
.role-hostile { background: rgba(245, 158, 11, 0.2); color: #FBBF24; }

.type-name {
  font-size: 1.2rem;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
  line-height: 1.2;
}

.type-essence {
  font-size: 0.95rem;
  font-style: italic;
  color: var(--gold-light);
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.type-manifestations {
  background: rgba(255, 255, 255, 0.03);
  padding: 0.6rem 0.8rem;
  border-radius: var(--radius-sm);
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.section-label {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--text-dim);
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}

.manifest-text {
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.35;
}

.type-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 0.6rem;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #94A3B8;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
}

.select-hint {
  font-size: 0.7rem;
  color: var(--text-dim);
}

.type-inspector {
  padding: 1.2rem 1.4rem;
  background: rgba(15, 23, 42, 0.7);
  margin-bottom: 0.8rem;
}

.inspector-badge {
  font-size: 0.72rem;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.6rem;
}

.inspector-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1.2fr;
  gap: 1.5rem;
}

.col-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--gold-light);
  margin-bottom: 0.3rem;
  text-transform: uppercase;
}

.col-desc {
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.quote-col {
  border-left: 2px solid var(--border-gold);
  padding-left: 1rem;
}

.col-quote {
  font-size: 0.95rem;
  color: #FDF4DC;
  line-height: 1.45;
  font-style: italic;
}

.gender-note {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.2rem;
  background: rgba(255, 255, 255, 0.02);
  margin-top: auto;
}

.gender-icon {
  font-size: 1.6rem;
}

.gender-text {
  font-size: 0.85rem;
  color: #94A3B8;
  line-height: 1.4;
}

.gender-text strong {
  color: #E2E8F0;
}

@media (max-width: 1024px) {
  .types-grid {
    grid-template-columns: 1fr;
  }
  .inspector-grid {
    grid-template-columns: 1fr;
  }
  .slide-typology {
    padding: 1.5rem;
  }
}
</style>
