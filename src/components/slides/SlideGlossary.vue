<template>
  <div class="slide-glossary animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · Léxico Técnico</span>
        <span class="category-tag">Vocabulario Fundamental</span>
      </div>
      <h2 class="slide-title font-display">
        Glosario Conceptual: <span class="text-gold">La 27ª Conferencia</span>
      </h2>
      <p class="slide-subtitle">
        Términos metapsicológicos indispensables para la comprensión del texto freudiano
      </p>
    </div>

    <!-- Search & Filter Controls -->
    <div class="glossary-controls">
      <input 
        v-model="searchTerm" 
        type="text" 
        placeholder="Buscar término (ej. contrainvestidura, libido, repetición...)"
        class="glossary-search glass-panel"
      />
      <div class="term-count font-mono">{{ filteredTerms.length }} conceptos</div>
    </div>

    <!-- Terms Grid -->
    <div class="terms-grid">
      <div 
        v-for="t in filteredTerms" 
        :key="t.german"
        class="term-card glass-panel"
        :class="{ active: selectedTerm?.german === t.german }"
        @click="selectedTerm = t"
      >
        <div class="term-top">
          <span class="term-es font-serif">{{ t.es }}</span>
          <span class="term-de font-mono">{{ t.german }}</span>
        </div>
        <p class="term-short">{{ t.definition }}</p>
        <div class="term-footer">
          <span class="term-ref">{{ t.pageRef }}</span>
          <span class="view-tag">Ver detalle</span>
        </div>
      </div>
    </div>

    <!-- Modal/Drawer for Selected Term Deep Inspection -->
    <transition name="fade">
      <div v-if="selectedTerm" class="term-inspector glass-panel">
        <div class="inspector-header">
          <div>
            <h3 class="inspect-title font-serif">{{ selectedTerm.es }}</h3>
            <span class="inspect-de font-mono">{{ selectedTerm.german }} · {{ selectedTerm.pageRef }}</span>
          </div>
          <button class="close-btn" @click="selectedTerm = null">✕</button>
        </div>
        <p class="inspect-def">{{ selectedTerm.fullExplanation }}</p>
        <div class="inspect-quote font-serif">
          «{{ selectedTerm.freudQuote }}»
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const searchTerm = ref('');
const selectedTerm = ref(null);

const terms = [
  {
    es: "Trasferencia",
    german: "Übertragung",
    pageRef: "págs. 401–403",
    definition: "Proceso inconsciente por el cual el paciente adjudica a la persona del analista afectos, deseos e impulsos reprimidos dirigidos originariamente a las figuras primarias de la infancia.",
    fullExplanation: "No es un mero capricho del paciente ni un error de la cura: es la manifestación directa de la naturaleza de la neurosis. Se despliega como la mayor resistencia pero, interpretada, se erige en el instrumento terapéutico insustituible.",
    freudQuote: "Toda esa proclividad del afecto venía de otra parte, estaba ya preparada en el sujeto, y con motivo del tratamiento analítico se transfirió sobre la persona del médico."
  },
  {
    es: "Contrainvestidura",
    german: "Gegenbesetzung",
    pageRef: "pág. 397",
    definition: "Gasto de energía anímica erigido por el Yo preconsciente para mantener reprimida una moción pulsional que resultaría intolerable para la conciencia.",
    fullExplanation: "En el tratamiento clínico, la contrainvestidura se percibe directamente bajo la forma de 'resistencia'. No pertenece al inconsciente sino al Yo, por lo que este debe ser convencido mediante interpretación de resignarla.",
    freudQuote: "La contrainvestidura, o resistencia, no pertenece al inconciente, sino al yo, que es nuestro colaborador, y esto es así por más que aquella no esté destinada a ser conciente."
  },
  {
    es: "Neurosis Artificial de Transferencia",
    german: "Künstliche Übertragungsneurose",
    pageRef: "pág. 404",
    definition: "Nueva formación patológica generada en el tratamiento analítico que reemplaza a la enfermedad originaria traída a la consulta.",
    fullExplanation: "Todos los síntomas antiguos abandonan su formulación previa y se reorganizan en torno a la relación con el médico. Al disolver esta neurosis artificial en el vínculo analítico, se cura la neurosis histórica del sujeto.",
    freudQuote: "No es entonces incorrecto decir que ya no se está tratando con la enfermedad anterior del paciente, sino con una neurosis recién creada y recreada que sustituye a la primera."
  },
  {
    es: "Ambivalencia de Sentimientos",
    german: "Gefühlsambivalenz",
    pageRef: "pág. 403",
    definition: "Coexistencia simultánea y originaria de impulsos de amor y de odio dirigidos hacia el mismo objeto psíquico.",
    fullExplanation: "Explica por qué la transferencia tierna muta súbitamente en hostilidad o por qué el paciente alterna entre la devoción ciega y el desacato rebelde. Ambas son expresiones de un idéntico lazo libidinal.",
    freudQuote: "Los sentimientos hostiles importan un vínculo afectivo a igual título que los tiernos, así como el desacato implica la misma dependencia que el acatamiento, aunque de signo contrario."
  },
  {
    es: "Mudar Repetición en Recuerdo",
    german: "Wiederholung in Erinnerung umwandeln",
    pageRef: "pág. 403",
    definition: "Operación técnica central del psicoanálisis mediante la cual la actuación en presente del paciente es reintegrada a su condición de memoria histórica reprimida.",
    fullExplanation: "El paciente tiende a actuar en vez de recordar. El analista frustra la satisfacción en acto y conduce al paciente a reconocer la raíz infantil de lo que está sintiendo en la sesión.",
    freudQuote: "Forzamos al enfermo a mudar su repetición en recuerdo. Y entonces la trasferencia se convierte en el mejor instrumento de la cura."
  },
  {
    es: "Investidura de Objeto",
    german: "Objektbesetzung",
    pageRef: "págs. 405–407",
    definition: "Dirección de la energía libidinal hacia personas, representaciones o seres del mundo exterior.",
    fullExplanation: "Es la condición de posibilidad de la transferencia y de la curación analítica. En las neurosis narcisistas (psicosis), la libido ha sido replegada sobre el propio Yo (libido yoica), imposibilitando el influjo terapéutico.",
    freudQuote: "Un ser humano es accesible también desde su costado intelectual únicamente en la medida en que es capaz de investir libidinosamente objetos."
  }
];

const filteredTerms = computed(() => {
  if (!searchTerm.value.trim()) return terms;
  const q = searchTerm.value.toLowerCase();
  return terms.filter(t => 
    t.es.toLowerCase().includes(q) || 
    t.german.toLowerCase().includes(q) || 
    t.definition.toLowerCase().includes(q)
  );
});
</script>

<style scoped>
.slide-glossary {
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

.glossary-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
}

.glossary-search {
  flex-grow: 1;
  max-width: 500px;
  padding: 0.55rem 1rem;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border-gold);
  border-radius: var(--radius-sm);
  color: #FFFFFF;
  font-size: 0.85rem;
}

.glossary-search:focus {
  outline: none;
  box-shadow: 0 0 15px rgba(212, 175, 55, 0.3);
}

.term-count {
  font-size: 0.75rem;
  color: var(--gold-light);
}

.terms-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.term-card {
  padding: 0.9rem 1.1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid var(--border-subtle);
}

.term-card:hover {
  transform: translateY(-3px);
  border-color: var(--gold-primary);
}

.term-card.active {
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.1);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.25);
}

.term-top {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.4rem;
}

.term-es {
  font-size: 1.15rem;
  color: #FFFFFF;
  font-weight: 700;
  line-height: 1.2;
}

.term-de {
  font-size: 0.72rem;
  color: var(--gold-primary);
}

.term-short {
  font-size: 0.8rem;
  color: #CBD5E1;
  line-height: 1.35;
  margin-bottom: 0.6rem;
  flex-grow: 1;
}

.term-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.72rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 0.4rem;
}

.term-ref {
  color: var(--text-dim);
}

.view-tag {
  color: var(--gold-light);
}

.term-inspector {
  padding: 1rem 1.4rem;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid var(--gold-primary);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.7);
  margin-top: auto;
}

.inspector-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.4rem;
}

.inspect-title {
  font-size: 1.35rem;
  color: var(--gold-light);
}

.inspect-de {
  font-size: 0.75rem;
  color: var(--text-muted);
}

.close-btn {
  background: none;
  border: none;
  color: var(--text-dim);
  font-size: 1.1rem;
  cursor: pointer;
}

.close-btn:hover {
  color: #FFFFFF;
}

.inspect-def {
  font-size: 0.9rem;
  color: #E2E8F0;
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.inspect-quote {
  font-size: 0.95rem;
  font-style: italic;
  color: #FDF4DC;
  line-height: 1.4;
  border-left: 2px solid var(--gold-primary);
  padding-left: 0.8rem;
}

@media (max-width: 1024px) {
  .terms-grid {
    grid-template-columns: 1fr;
  }
  .slide-glossary {
    padding: 1.5rem;
  }
}
</style>
