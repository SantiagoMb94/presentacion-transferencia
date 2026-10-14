<template>
  <div class="slide-glossary animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">12 · Diccionario Rápido</span>
        <span class="category-tag">Términos Clave de Freud</span>
      </div>
      <h2 class="slide-title font-display">
        Glosario en <span class="text-gold">1 Frase Sencilla</span>
      </h2>
      <p class="slide-subtitle">
        Los conceptos que necesitas dominar para tu examen o exposición, sin rodeos:
      </p>
    </div>

    <!-- 6 Simple Concept Cards -->
    <div class="terms-grid">
      <div class="term-card glass-panel" v-for="t in simpleTerms" :key="t.name">
        <div class="term-header">
          <span class="term-icon">{{ t.icon }}</span>
          <div>
            <h4 class="term-name font-serif">{{ t.name }}</h4>
            <span class="term-de font-mono">{{ t.german }}</span>
          </div>
        </div>
        <p class="term-definition font-serif">{{ t.definition }}</p>
        <div class="term-example">
          <strong>Ejemplo fácil:</strong> {{ t.example }}
        </div>
      </div>
    </div>

    <!-- Bottom Tip -->
    <div class="glossary-tip glass-panel">
      <span class="tip-sparkle">💡</span>
      <span class="tip-content font-serif">
        <strong>Para recordar en clase:</strong> La transferencia no es algo que inventó Freud; ocurre en toda relación humana (te enamoras o desconfías de alguien nuevo por tu pasado). Lo revolucionario de Freud fue <em>analizarla</em> en vez de dejarse engañar por ella.
      </span>
    </div>
  </div>
</template>

<script setup>
const simpleTerms = [
  {
    icon: "🔄",
    name: "Transferencia",
    german: "Übertragung",
    definition: "Revivir en el presente con el terapeuta los mismos amores, odios o miedos que sentías hacia tus padres en la infancia.",
    example: "Si tu padre te criticaba mucho, sientes que el analista te está juzgando en secreto."
  },
  {
    icon: "🛡️",
    name: "Resistencia",
    german: "Widerstand",
    definition: "La fuerza de defensa del paciente que se niega a recordar o sentir el dolor reprimido.",
    example: "Quedarse mudo en la sesión, llegar tarde o decir 'no se me ocurre nada'."
  },
  {
    icon: "🎭",
    name: "Neurosis Artificial",
    german: "Übertragungsneurose",
    definition: "La nueva versión de la enfermedad que se recrea en la consulta entre el paciente y el médico.",
    example: "El paciente ya no sufre por su pasado lejano: sufre por si el analista lo quiere o lo rechaza hoy."
  },
  {
    icon: "☯️",
    name: "Ambivalencia",
    german: "Ambivalenz",
    definition: "Sentir al mismo tiempo amor y odio intensos hacia la misma persona.",
    example: "Admirar apasionadamente al terapeuta un día y rebelarse furioso contra él a la semana siguiente."
  },
  {
    icon: "🎞️",
    name: "Repetición vs. Recuerdo",
    german: "Wiederholen vs. Erinnern",
    definition: "La regla de oro: lo que no puedes recordar con palabras, tu cuerpo y tus emociones lo actúan en la vida real.",
    example: "En vez de recordar que sufrías abandono, le exiges al médico que te prometa que nunca te dejará."
  },
  {
    icon: "🪞",
    name: "Libido Narcisista",
    german: "Ich-Libido",
    definition: "Tener la energía afectiva totalmente replegada sobre uno mismo, sin poder interesarse por nadie más.",
    example: "La razón por la que en la psicosis no funciona el análisis: el paciente es indiferente al médico."
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
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.term-card:hover {
  transform: translateY(-3px);
  border-color: var(--gold-primary);
}

.term-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.term-icon {
  font-size: 1.5rem;
}

.term-name {
  font-size: 1.15rem;
  color: #FFFFFF;
  line-height: 1.2;
}

.term-de {
  font-size: 0.7rem;
  color: var(--gold-primary);
}

.term-definition {
  font-size: 0.88rem;
  color: var(--gold-light);
  line-height: 1.35;
  margin-bottom: 0.6rem;
  flex-grow: 1;
}

.term-example {
  padding: 0.5rem 0.7rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-sm);
  font-size: 0.78rem;
  color: #CBD5E1;
  line-height: 1.35;
  border-left: 2px solid var(--gold-primary);
}

.term-example strong {
  color: #FFFFFF;
}

.glossary-tip {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.75rem 1.2rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.tip-sparkle {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.tip-content {
  font-size: 0.92rem;
  color: #F8FAFC;
  line-height: 1.4;
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
