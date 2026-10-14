<template>
  <div class="slide-clinical-lab animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 12</span>
        <span class="category-tag">Casos Clínicos · págs. 400–404</span>
      </div>
      <h2 class="slide-title font-display">
        Laboratorio Clínico: <span class="text-gold">Tres Dilemas Técnicos</span>
      </h2>
      <p class="slide-subtitle">
        Ponga a prueba su criterio técnico analítico ante estas tres viñetas clínicas de Freud:
      </p>
    </div>

    <!-- Case Selector Tabs -->
    <div class="cases-nav">
      <button 
        v-for="(c, idx) in cases" 
        :key="c.id"
        class="case-tab-btn"
        :class="{ active: currentCaseIndex === idx, solved: caseStates[idx].solved }"
        @click="selectCase(idx)"
      >
        <span class="tab-badge font-mono">0{{ idx + 1 }}</span>
        <span>{{ c.shortName }}</span>
        <span v-if="caseStates[idx].solved" class="tab-check font-mono">RESUELTO</span>
      </button>
    </div>

    <!-- Active Case Vignette Card -->
    <div class="vignette-card glass-panel">
      <div class="vignette-header">
        <h3 class="vignette-title font-serif">{{ activeCase.title }}</h3>
        <span class="vignette-tag font-mono">SITUACIÓN EN DIVÁN</span>
      </div>
      <p class="vignette-text font-serif">
        «{{ activeCase.vignette }}»
      </p>

      <div class="question-prompt">
        <span class="prompt-badge font-mono">DECISIÓN CLÍNICA</span>
        <span class="prompt-text">¿Cuál debe ser la intervención del analista según la técnica de la Conferencia 27?</span>
      </div>

      <!-- Multiple Choice Options -->
      <div class="options-list">
        <button 
          v-for="(opt, optIdx) in activeCase.options" 
          :key="optIdx"
          class="option-btn glass-panel"
          :class="getOptionClass(optIdx)"
          @click="chooseOption(optIdx)"
        >
          <span class="opt-letter font-mono">{{ ['A', 'B', 'C'][optIdx] }}</span>
          <span class="opt-text">{{ opt.text }}</span>
        </button>
      </div>

      <!-- Feedback Banner -->
      <transition name="fade">
        <div v-if="selectedOpt !== null" class="feedback-card" :class="activeOpt.isCorrect ? 'correct' : 'incorrect'">
          <div class="feedback-header">
            <span class="feedback-verdict font-display">{{ activeOpt.verdict }}</span>
          </div>
          <p class="feedback-body font-serif">{{ activeOpt.feedback }}</p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import confetti from 'canvas-confetti';
import { playSuccessChime, playErrorBuzz } from '../../utils/sound.js';

const currentCaseIndex = ref(0);

const cases = [
  {
    id: "caso1",
    shortName: "Caso I: Amor Intempestivo",
    title: "Caso I: La Declaración Intempestiva de Amor",
    vignette: "Una paciente interrumpe la asociación libre, se incorpora en el diván y le confiesa: 'Doctor, me he dado cuenta de que usted es el único hombre que puede hacerme feliz. Solo su correspondencia amorosa me curará; nada de lo que hablemos tiene sentido si usted no me ama'.",
    options: [
      {
        text: "Aceptar discretamente un lazo romántico fuera del consultorio para no frustrar la mejoría de la paciente.",
        verdict: "Error Deontológico Inadmisible",
        feedback: "Queda terminantemente excluido ceder a las demandas amorosas de la transferencia. Ceder consuma una satisfacción patológica sustitutiva que destruye el análisis y reedita el incesto infantil reprimido.",
        isCorrect: false
      },
      {
        text: "Indignarse con reproche moral y expulsar a la paciente por faltar al respeto del contrato médico.",
        verdict: "Error Técnico Moralista",
        feedback: "Freud señala: «Sería absurdo rechazarlas inamistosamente o con indignación». El rechazo moralista del analista confirma de modo traumático la condena y el castigo que el sujeto sufrió en su infancia.",
        isCorrect: false
      },
      {
        text: "Interpretar que su amor no nace de la persona del médico, sino que es una repetición histórica que debe ser recordada.",
        verdict: "Intervención Psicoanalítica Correcta",
        feedback: "¡Exacto! Regla técnica maestra: se demuestra al paciente que sus afectos reviven figuras primarias de su pasado para «mudar la repetición en recuerdo», transformando la resistencia en palanca curativa.",
        isCorrect: true
      }
    ]
  },
  {
    id: "caso2",
    shortName: "Caso II: Silencio Repentino",
    title: "Caso II: La Parálisis Asociativa («Nada más se me ocurre»)",
    vignette: "Un paciente que venía asociando con brillante fluidez y mejoría sintomática enmudece durante varios minutos. Al preguntarle, responde con frialdad que su mente está en blanco y que el análisis ya no le interesa en lo absoluto.",
    options: [
      {
        text: "Interpretar que la transferencia tierna se ha convertido en resistencia o que una moción erótica/hostil hacia el médico está siendo reprimida.",
        verdict: "Intervención Analítica Certera",
        feedback: "¡Brillante! Freud enseña en la página 400: cuando un paciente suspende la regla fundamental diciendo que no tiene ocurrencias, es signo inequívoco de que algo relativo a la figura del médico lo perturba y le exige abordaje inmediato.",
        isCorrect: true
      },
      {
        text: "Dar por terminada la sesión y sugerirle que regrese la próxima semana cuando tenga pensamientos más interesantes.",
        verdict: "Abandono Técnico Inadecuado",
        feedback: "El silencio no es falta de contenido mental, sino el punto de mayor tensión de la resistencia transferencial. Abandonar la sesión confirma la censura del Yo.",
        isCorrect: false
      },
      {
        text: "Sugerirle lecturas intelectuales o temas de autoayuda para reactivar la conversación.",
        verdict: "Desvío Pedagógico Fútil",
        feedback: "El analista no es un profesor ni un animador social. Intervenir de esa manera elude el conflicto transferencial vivo en el consultorio.",
        isCorrect: false
      }
    ]
  },
  {
    id: "caso3",
    shortName: "Caso III: Paranoia Indiferente",
    title: "Caso III: El Paciente Paranoide Indiferente",
    vignette: "Un paciente con delirios persecutorios complejos y altísima sagacidad lógica asiste a consulta, pero escucha todas las intervenciones con absoluto desapego y frialdad, sin dirigir interés ni afecto hacia la persona del analista.",
    options: [
      {
        text: "Multiplicar los argumentos lógicos para convencerlo dialécticamente de que sus sospechas son infundadas.",
        verdict: "Inutilidad Discursiva",
        feedback: "Freud advierte que los argumentos racionales no operan sin investidura afectiva previa; la agudeza dialéctica del paranoico desbarata cualquier intento de persuasión lógica.",
        isCorrect: false
      },
      {
        text: "Diagnosticar una neurosis narcisista: la libido de objeto retirada al Yo bloquea la transferencia e impide la acción analítica.",
        verdict: "Diagnóstico Estructural Preciso",
        feedback: "¡Correcto! Freud postula que en las neurosis narcisistas falta la capacidad transferencial necesaria; la indiferencia glacial anula la palanca que posibilita la curación psicoanalítica clásica.",
        isCorrect: true
      },
      {
        text: "Utilizar hipnosis directa profunda para forzar su sumisión afectiva.",
        verdict: "Inviable",
        feedback: "La hipnosis se basa en la misma sugestionabilidad libidinal que en el narcisismo psicótico se encuentra anulada.",
        isCorrect: false
      }
    ]
  }
];

const caseStates = ref([
  { selected: null, solved: false },
  { selected: null, solved: false },
  { selected: null, solved: false }
]);

const activeCase = computed(() => cases[currentCaseIndex.value]);
const selectedOpt = computed(() => caseStates.value[currentCaseIndex.value].selected);
const activeOpt = computed(() => selectedOpt.value !== null ? activeCase.value.options[selectedOpt.value] : null);

function selectCase(idx) {
  currentCaseIndex.value = idx;
}

function chooseOption(optIdx) {
  caseStates.value[currentCaseIndex.value].selected = optIdx;
  const isCorrect = activeCase.value.options[optIdx].isCorrect;

  if (isCorrect) {
    caseStates.value[currentCaseIndex.value].solved = true;
    playSuccessChime();
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#D4AF37', '#F4E4BA', '#10B981', '#FFFFFF']
    });
  } else {
    playErrorBuzz();
  }
}

function getOptionClass(optIdx) {
  if (selectedOpt.value === null) return '';
  if (selectedOpt.value === optIdx) {
    return activeCase.value.options[optIdx].isCorrect ? 'opt-correct' : 'opt-incorrect';
  }
  return 'opt-faded';
}
</script>

<style scoped>
.slide-clinical-lab {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  overflow-y: auto;
}

.slide-header {
  margin-bottom: 0.6rem;
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

.cases-nav {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
}

.case-tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.55rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.case-tab-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
}

.case-tab-btn.active {
  background: rgba(212, 175, 55, 0.12);
  border-color: var(--gold-primary);
  color: var(--gold-light);
}

.case-tab-btn.solved .tab-check {
  font-size: 0.65rem;
  font-weight: 800;
  color: #34D399;
  background: rgba(16, 185, 129, 0.15);
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
}

.tab-badge {
  color: var(--gold-primary);
  font-size: 0.8rem;
}

.vignette-card {
  padding: 1.1rem 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.vignette-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.35rem;
}

.vignette-title {
  font-size: 1.25rem;
  color: var(--gold-light);
}

.vignette-tag {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: var(--text-dim);
}

.vignette-text {
  font-size: 1rem;
  font-style: italic;
  color: #F1F5F9;
  line-height: 1.4;
  margin-bottom: 0.7rem;
  padding: 0.6rem 0.9rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--gold-primary);
  border-radius: var(--radius-sm);
}

.question-prompt {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.7rem;
}

.prompt-badge {
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.12);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.prompt-text {
  font-size: 0.85rem;
  font-weight: 700;
  color: #FFFFFF;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.7rem;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 1rem;
  text-align: left;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: #E2E8F0;
  cursor: pointer;
  transition: all 0.2s ease;
  background: rgba(15, 23, 42, 0.6);
}

.option-btn:hover {
  background: rgba(30, 41, 59, 0.8);
  border-color: rgba(255, 255, 255, 0.2);
}

.opt-letter {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--gold-light);
  flex-shrink: 0;
}

.opt-text {
  font-size: 0.85rem;
  line-height: 1.35;
}

.opt-correct {
  border-color: #34D399 !important;
  background: rgba(16, 185, 129, 0.15) !important;
  box-shadow: 0 0 15px rgba(52, 211, 153, 0.2);
}

.opt-incorrect {
  border-color: #F87171 !important;
  background: rgba(239, 68, 68, 0.15) !important;
}

.opt-faded {
  opacity: 0.45;
}

.feedback-card {
  padding: 0.75rem 1.1rem;
  border-radius: var(--radius-sm);
  margin-top: auto;
}

.feedback-card.correct {
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid #34D399;
}

.feedback-card.incorrect {
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid #F87171;
}

.feedback-header {
  margin-bottom: 0.25rem;
}

.feedback-verdict {
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.correct .feedback-verdict { color: #34D399; }
.incorrect .feedback-verdict { color: #F87171; }

.feedback-body {
  font-size: 0.88rem;
  color: #F1F5F9;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .cases-nav {
    flex-direction: column;
  }
  .slide-clinical-lab {
    padding: 1.5rem;
  }
}
</style>
