<template>
  <div class="slide-clinical-lab animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · Casos Prácticos</span>
        <span class="category-tag">Laboratorio Clínico</span>
      </div>
      <h2 class="slide-title font-display">
        Laboratorio Clínico: <span class="text-gold">Dilemas Técnicos</span>
      </h2>
      <p class="slide-subtitle">
        Aplique los principios freudianos de la Conferencia 27 para resolver estas viñetas analíticas:
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
        <span>{{ c.title.split(':')[0] }}</span>
        <span v-if="caseStates[idx].solved" class="tab-check">✓</span>
      </button>
    </div>

    <!-- Active Case Vignette Card -->
    <div class="vignette-card glass-panel">
      <div class="vignette-header">
        <h3 class="vignette-title font-serif">{{ activeCase.title }}</h3>
        <span class="vignette-tag">Situación de Consultorio</span>
      </div>
      <p class="vignette-text font-serif">
        «{{ activeCase.vignette }}»
      </p>

      <div class="question-prompt">
        <span class="prompt-icon">⚖️</span>
        <span class="prompt-text">¿Cuál debe ser la intervención del analista según la técnica freudiana?</span>
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
            <span class="feedback-icon">{{ activeOpt.isCorrect ? '✓' : '✕' }}</span>
            <span class="feedback-verdict font-display">{{ activeOpt.verdict }}</span>
          </div>
          <p class="feedback-body">{{ activeOpt.feedback }}</p>
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
    title: "Caso A: La Declaración Intempestiva de Amor",
    vignette: "Una paciente interrumpe la asociación libre, se incorpora en el diván y le confiesa: 'Doctor, me he dado cuenta de que usted es el único hombre que puede hacerme feliz. Solo su correspondencia amorosa me curará; nada de lo que hablemos tiene sentido si usted no me ama'.",
    options: [
      {
        text: "Aceptar discretamente un lazo romántico fuera del consultorio para no frustrar la mejoría de la paciente.",
        verdict: "Error Deontológico Fatal",
        feedback: "Freud señala: Queda tajantemente excluido ceder a las demandas amorosas. Ceder consumaría una satisfacción neurótica incestuosa que destruye la cura.",
        isCorrect: false
      },
      {
        text: "Indignarse con reproche moral y expulsar a la paciente por faltar a la seriedad del contrato terapéutico.",
        verdict: "Error Técnico Moralista",
        feedback: "«Sería absurdo rechazarlas inamistosamente o con indignación». El rechazo moralista repite traumáticamente la condena represiva infantil.",
        isCorrect: false
      },
      {
        text: "Interpretar que su amor no nace de la persona del médico, sino que es una reedición de afectos infantiles reprimidos.",
        verdict: "Conducta Psicoanalítica Correcta",
        feedback: "¡Exacto! Regla de oro freudiana: se demuestra al paciente que sus sentimientos son una repetición histórica para «mudar la repetición en recuerdo».",
        isCorrect: true
      }
    ]
  },
  {
    id: "caso2",
    title: "Caso B: El Silencio Repentino («Nada más se me ocurre»)",
    vignette: "Un paciente que venía asociando con brillante fluidez se queda callado durante diez minutos. Al ser interrogado, responde con indiferencia que su mente está completamente en blanco y que el análisis ya no le despierta interés.",
    options: [
      {
        text: "Interpretar que la transferencia tierna se ha convertido en resistencia o que una moción erótica/hostil hacia el médico está siendo censurada.",
        verdict: "Intervención Analítica Certera",
        feedback: "¡Brillante! Freud advierte en la pág. 400: cuando el paciente transgrede la regla de decir todo aseverando que 'nada se le ocurre', es signo inequívoco de una resistencia transferencial hacia el médico.",
        isCorrect: true
      },
      {
        text: "Dar por terminada la sesión y sugerirle que regrese la próxima semana cuando tenga pensamientos más interesantes.",
        verdict: "Abandono Técnico Inadecuado",
        feedback: "El silencio no es vacío de pensamiento, sino el punto álgido de la resistencia que exige abordaje inmediato.",
        isCorrect: false
      },
      {
        text: "Sugerirle libros de psicología o temas intelectuales de conversación para romper el hielo.",
        verdict: "Desvío Pedagógico Fútil",
        feedback: "El analista rehúsa actuar como profesor o animador de charlas; intervenir así es eludir la resistencia.",
        isCorrect: false
      }
    ]
  },
  {
    id: "caso3",
    title: "Caso C: El Paciente Paranoide Indiferente",
    vignette: "Un paciente con delirios persecutorios complejos y altísima inteligencia asiste al tratamiento, pero escucha todas las interpretaciones con absoluto desapego y frialdad, sin manifestar afecto, interés ni devoción hacia el terapeuta.",
    options: [
      {
        text: "Multiplicar los argumentos lógicos para convencerlo intelectualmente de que sus sospechas son infundadas.",
        verdict: "Inutilidad Discursiva",
        feedback: "Freud advierte que los argumentos racionales no operan sin investidura libidinal previa; la sagacidad dialéctica del paranoico es invulnerable a la lógica.",
        isCorrect: false
      },
      {
        text: "Diagnosticar una neurosis narcisista: la libido de objeto retirada al Yo bloquea la transferencia e impide la acción terapéutica.",
        verdict: "Diagnóstico Estructural Preciso",
        feedback: "¡Correcto! Freud concluye que en las neurosis narcisistas falta la capacidad transferencial necesaria; la indiferencia congela el mecanismo de curación.",
        isCorrect: true
      },
      {
        text: "Utilizar hipnosis directa profunda para quebrar su orgullo intelectual.",
        verdict: "Inviable",
        feedback: "La hipnosis requiere la misma sugestionabilidad libidinal que en el narcisismo psicótico se encuentra anulada.",
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

.cases-nav {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
}

.case-tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.6rem 1rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: 0.85rem;
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
  color: #34D399;
  font-weight: 800;
}

.tab-badge {
  color: var(--gold-primary);
  font-size: 0.8rem;
}

.vignette-card {
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.vignette-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.4rem;
}

.vignette-title {
  font-size: 1.35rem;
  color: var(--gold-light);
}

.vignette-tag {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-dim);
}

.vignette-text {
  font-size: 1.05rem;
  font-style: italic;
  color: #F1F5F9;
  line-height: 1.45;
  margin-bottom: 0.8rem;
  padding: 0.6rem 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--gold-primary);
  border-radius: var(--radius-sm);
}

.question-prompt {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--gold-primary);
  margin-bottom: 0.8rem;
}

.options-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.75rem 1.1rem;
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
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--gold-light);
  flex-shrink: 0;
}

.opt-text {
  font-size: 0.88rem;
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
  padding: 0.8rem 1.2rem;
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
}

.feedback-icon {
  font-weight: 800;
  font-size: 1rem;
}

.feedback-verdict {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
}

.correct .feedback-verdict, .correct .feedback-icon { color: #34D399; }
.incorrect .feedback-verdict, .incorrect .feedback-icon { color: #F87171; }

.feedback-body {
  font-size: 0.85rem;
  color: #F1F5F9;
  line-height: 1.35;
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
