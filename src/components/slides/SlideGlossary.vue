<template>
  <div class="slide-glossary animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 13</span>
        <span class="category-tag">Glosario Metapsicológico</span>
        <span class="page-pill font-mono">Conferencia 27 · págs. 392–407</span>
      </div>
      <h2 class="slide-title font-display">
        Léxico Fundamental y <span class="text-gold">Articulación Conceptual</span>
      </h2>
      <p class="slide-subtitle">
        Los seis conceptos cardinales de la técnica freudiana descritos con su contexto teórico y manifestación clínica:
      </p>
    </div>

    <!-- 6 Rigorous Concept Cards -->
    <div class="terms-grid">
      <div class="term-card glass-panel" v-for="t in simpleTerms" :key="t.name">
        <div class="term-header">
          <div class="term-badge font-mono">{{ t.roman }}</div>
          <div class="term-title-box">
            <h4 class="term-name font-serif">{{ t.name }}</h4>
            <span class="term-de font-mono">{{ t.german }}</span>
          </div>
        </div>
        
        <div class="term-section">
          <span class="section-label font-mono">DEFINICIÓN Y CONTEXTO TEÓRICO</span>
          <p class="term-definition font-serif">{{ t.definition }}</p>
        </div>

        <div class="term-example">
          <span class="example-label font-mono">MANIFESTACIÓN EN CONSULTA</span>
          <p class="example-text font-serif">{{ t.example }}</p>
        </div>
      </div>
    </div>

    <!-- Epistemological Takeaway Banner -->
    <div class="glossary-tip glass-panel">
      <div class="tip-marker font-serif">§</div>
      <div class="tip-content font-serif">
        <strong>Síntesis Epistemológica de Freud (pág. 402):</strong> La transferencia no fue un artificio inventado por el psicoanálisis; es una regularidad biológica y afectiva intrínseca a todo ser humano. El mérito de Freud no consistió en crearla, sino en <strong>rehusar dejarse engañar por ella y transformarla en el instrumento soberano de la curación</strong>.
      </div>
    </div>
  </div>
</template>

<script setup>
const simpleTerms = [
  {
    roman: "I",
    name: "Transferencia",
    german: "Übertragung",
    definition: "Reactivación y desplazamiento sobre la persona del médico de mociones pulsionales e imagos infantiles reprimidas en el pasado arcaico.",
    example: "El paciente no relata su historia con palabras neutras: la actúa reviviendo con el analista los mismos amores, reproches o terrores que experimentó hacia sus progenitores."
  },
  {
    roman: "II",
    name: "Resistencia",
    german: "Widerstand",
    definition: "Conjunto de fuerzas defensivas del Yo (contrainvestidura) que se oponen activamente al levantamiento de la represión y a la asimilación consciente de la verdad.",
    example: "Se manifiesta clínicamente como mutismo repentino («nada más se me ocurre»), evasivas intelectuales, tardanzas sistemáticas o cuestionamientos escépticos a la regla analítica."
  },
  {
    roman: "III",
    name: "Neurosis Artificial",
    german: "Übertragungsneurose",
    definition: "Reorganización integral del cuadro patológico en el consultorio, donde los antiguos síntomas se concentran en una nueva versión vinculada exclusivamente a la relación con el médico.",
    example: "El sujeto ya no sufre por sus viejas fobias biográficas dispersas; todo su dolor actual gira en torno a si el analista lo acepta, lo valora o lo rechaza en la sesión presente."
  },
  {
    roman: "IV",
    name: "Ambivalencia Afectiva",
    german: "Ambivalenz",
    definition: "Coexistencia simultánea y de similar intensidad de mociones de amor tierno y de encono hostil dirigidas hacia un mismo objeto anímico desde la temprana infancia.",
    example: "Explica el pasaje intempestivo de la fascinación idílica al reproche vehemente: el desacato y la rebeldía manifiestan la misma dependencia psíquica que la sumisión previa."
  },
  {
    roman: "V",
    name: "Repetición vs. Recuerdo",
    german: "Wiederholen vs. Erinnern",
    definition: "Principio técnico cardinal: lo que no puede ser recordado en el registro simbólico del lenguaje es descargado y actuado como vivencia presente inmediata en el cuerpo o la conducta.",
    example: "En lugar de recordar el desamparo infantil, el paciente exige al terapeuta pruebas de cariño incondicional. La tarea analítica consiste en mudar esa repetición ciega en memoria elaborada."
  },
  {
    roman: "VI",
    name: "Economía de la Libido",
    german: "Ich-Libido vs. Objekt-Libido",
    definition: "Criterio nosológico freudiano que delimita la accesibilidad a la cura según el destino de la energía afectiva (investidura de objeto exterior vs. repliegue narcisista en el Yo).",
    example: "En las neurosis clásicas la libido busca un objeto humano exterior (el analista), posibilitando el vínculo transferencial. En las psicosis, la libido replegada al Yo crea una barrera glacial inmune al análisis."
  }
];
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
  align-items: center;
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

.page-pill {
  font-size: 0.75rem;
  color: var(--text-dim);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
}

.slide-title {
  font-size: clamp(1.8rem, 2.5vw, 2.4rem);
  font-weight: 800;
  color: #FFFFFF;
}

.slide-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
}

.terms-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.term-card {
  padding: 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  background: rgba(14, 20, 32, 0.7);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.term-card:hover {
  transform: translateY(-3px);
  border-color: var(--gold-primary);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.term-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.term-badge {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--border-gold);
  background: rgba(212, 175, 55, 0.12);
  color: var(--gold-primary);
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.term-title-box {
  display: flex;
  flex-direction: column;
}

.term-name {
  font-size: 1.1rem;
  color: #FFFFFF;
  line-height: 1.2;
}

.term-de {
  font-size: 0.7rem;
  color: var(--gold-primary);
  letter-spacing: 0.05em;
}

.term-section {
  margin-bottom: 0.6rem;
  flex-grow: 1;
}

.section-label {
  display: block;
  font-size: 0.62rem;
  font-weight: 800;
  color: var(--gold-light);
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
}

.term-definition {
  font-size: 0.84rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.term-example {
  padding: 0.55rem 0.75rem;
  background: rgba(255, 255, 255, 0.025);
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--gold-primary);
}

.example-label {
  display: block;
  font-size: 0.62rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.05em;
  margin-bottom: 0.2rem;
}

.example-text {
  font-size: 0.8rem;
  color: #94A3B8;
  line-height: 1.35;
  margin: 0;
}

.glossary-tip {
  display: flex;
  align-items: flex-start;
  gap: 0.9rem;
  padding: 0.8rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  border-radius: var(--radius-sm);
  margin-top: auto;
}

.tip-marker {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--gold-primary);
  line-height: 1;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.tip-content {
  font-size: 0.9rem;
  color: #F8FAFC;
  line-height: 1.45;
}

.tip-content strong {
  color: var(--gold-light);
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
