<template>
  <div class="slide-debate-questions animate-fade-in">
    <!-- Header -->
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 05</span>
        <span class="category-tag">Mesa Redonda & Reflexión Clínica</span>
      </div>
      <h2 class="slide-title font-display">
        Preguntas de <span class="text-rose">Debate y Reflexión</span>
      </h2>
      <p class="slide-subtitle">
        Cuatro interrogantes nucleares para abrir el diálogo con el auditorio y contrastar la clínica freudiana
      </p>
    </div>

    <!-- 4 Interactive Debate Cards Grid -->
    <div class="questions-grid">
      <!-- Question 1 -->
      <div 
        class="question-card glass-panel" 
        :class="{ expanded: activeQuestion === 1 }"
        @click="toggleQuestion(1)"
      >
        <div class="question-top">
          <div class="question-marker font-mono">01</div>
          <span class="question-tag font-mono">ÁMBITO COTIDIANO VS. CLÍNICO</span>
          <span class="expand-icon">{{ activeQuestion === 1 ? '−' : '+' }}</span>
        </div>

        <h4 class="question-text font-serif">
          ¿La transferencia ocurre únicamente durante una terapia psicológica o también puede aparecer en relaciones cotidianas como las que tenemos con profesores, jefes o parejas?
        </h4>

        <div v-if="activeQuestion === 1" class="question-clue animate-fade-in">
          <div class="clue-header font-mono">✦ PISTAS FREUDIANAS PARA EL DEBATE:</div>
          <p class="clue-body">
            Freud afirma categóricamente que <strong>la transferencia es un fenómeno humano universal</strong>. Se reedita de forma espontánea con autoridades, maestros y vínculos de pareja. La diferencia radical es que <strong>solo en el dispositivo analítico se aísla, se interpreta y no se actúa</strong>, poniéndola al servicio de la cura en vez de la repetición ciega.
          </p>
        </div>
        <div v-else class="click-hint font-mono">
          <span>Haga clic para ver claves de debate ➔</span>
        </div>
      </div>

      <!-- Question 2 -->
      <div 
        class="question-card glass-panel" 
        :class="{ expanded: activeQuestion === 2 }"
        @click="toggleQuestion(2)"
      >
        <div class="question-top">
          <div class="question-marker font-mono">02</div>
          <span class="question-tag font-mono">CRITERIO DIAGNÓSTICO</span>
          <span class="expand-icon">{{ activeQuestion === 2 ? '−' : '+' }}</span>
        </div>

        <h4 class="question-text font-serif">
          ¿Cómo podría distinguirse entre un sentimiento genuino hacia el terapeuta y uno influido por la transferencia?
        </h4>

        <div v-if="activeQuestion === 2" class="question-clue animate-fade-in">
          <div class="clue-header font-mono">✦ PISTAS FREUDIANAS PARA EL DEBATE:</div>
          <p class="clue-body">
            Los signos reveladores son <strong>la desmesura, la ceguera ante la realidad objetiva y la inadecuación temporal</strong>: el afecto surge con excesiva rapidez e intensidad, con independencia de las cualidades reales del analista, reproduciendo fielmente los libretos de demanda o desconfianza de la temprana infancia.
          </p>
        </div>
        <div v-else class="click-hint font-mono">
          <span>Haga clic para ver claves de debate ➔</span>
        </div>
      </div>

      <!-- Question 3 -->
      <div 
        class="question-card glass-panel" 
        :class="{ expanded: activeQuestion === 3 }"
        @click="toggleQuestion(3)"
      >
        <div class="question-top">
          <div class="question-marker font-mono">03</div>
          <span class="question-tag font-mono">EFICACIA TERAPÉUTICA</span>
          <span class="expand-icon">{{ activeQuestion === 3 ? '−' : '+' }}</span>
        </div>

        <h4 class="question-text font-serif">
          ¿Hasta qué punto la relación afectiva entre terapeuta y paciente influye en la eficacia de una intervención psicológica?
        </h4>

        <div v-if="activeQuestion === 3" class="question-clue animate-fade-in">
          <div class="clue-header font-mono">✦ PISTAS FREUDIANAS PARA EL DEBATE:</div>
          <p class="clue-body">
            Es la condición de posibilidad de todo el tratamiento. En la <strong>transferencia positiva tierna</strong>, el respeto y la confianza otorgan a la palabra del terapeuta el peso necesario para ser escuchada. Sin ese soporte transferencial inicial, las interpretaciones más acertadas resultan estériles.
          </p>
        </div>
        <div v-else class="click-hint font-mono">
          <span>Haga clic para ver claves de debate ➔</span>
        </div>
      </div>

      <!-- Question 4 -->
      <div 
        class="question-card glass-panel" 
        :class="{ expanded: activeQuestion === 4 }"
        @click="toggleQuestion(4)"
      >
        <div class="question-top">
          <div class="question-marker font-mono">04</div>
          <span class="question-tag font-mono">DEONTOLOGÍA & ÉTICA</span>
          <span class="expand-icon">{{ activeQuestion === 4 ? '−' : '+' }}</span>
        </div>

        <h4 class="question-text font-serif">
          ¿Qué riesgos éticos podrían aparecer si un terapeuta responde afectivamente a las demandas transferenciales de un paciente?
        </h4>

        <div v-if="activeQuestion === 4" class="question-clue animate-fade-in">
          <div class="clue-header font-mono">✦ PISTAS FREUDIANAS PARA EL DEBATE:</div>
          <p class="clue-body">
            Supone la <strong>destrucción total del encuadre analítico</strong>: degrada la terapia a abuso de poder o seducción narcisista. Responder al amor o al ataque confina al paciente a la misma trampa infantil de la que buscaba salir. La <strong>abstinencia y la neutralidad</strong> son el único escudo ético que garantiza la libertad del sujeto.
          </p>
        </div>
        <div v-else class="click-hint font-mono">
          <span>Haga clic para ver claves de debate ➔</span>
        </div>
      </div>
    </div>

    <!-- Moderator Footer Hint -->
    <div class="debate-footer glass-panel">
      <span class="moderator-icon">🎙️</span>
      <span class="moderator-text font-serif">
        <strong>Guía para las expositoras:</strong> Seleccionen una pregunta para dirigirla al grupo o al docente, o permitan que los oyentes elijan cuál desean discutir primero.
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeQuestion = ref(1);

function toggleQuestion(num) {
  activeQuestion.value = activeQuestion.value === num ? null : num;
}
</script>

<style scoped>
.slide-debate-questions {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  overflow-y: auto;
  gap: 1rem;
  box-sizing: border-box;
}

.slide-header {
  margin-bottom: 0.1rem;
}

.header-badge-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.35rem;
}

.category-tag {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--text-dim);
}

.slide-title {
  font-size: 2.15rem;
  color: var(--wine-deep);
  font-weight: 800;
  line-height: 1.15;
}

.slide-subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  font-family: var(--font-serif);
  font-style: italic;
  margin-top: 0.2rem;
}

/* Questions Grid */
.questions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.15rem;
  flex: 1;
}

.question-card {
  padding: 1.25rem 1.4rem;
  background: rgba(255, 255, 255, 0.92);
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border: 1px solid rgba(184, 58, 100, 0.14);
  transition: all 0.25s ease;
}

.question-card:hover {
  transform: translateY(-2px);
  border-color: var(--border-rose-glow);
  box-shadow: var(--shadow-card);
}

.question-card.expanded {
  border-left: 4px solid var(--rose-primary);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(253, 243, 247, 0.7) 100%);
  box-shadow: var(--shadow-elevated);
}

.question-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.question-marker {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--rose-primary);
  background: var(--rose-light);
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-sm);
}

.question-tag {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--text-dim);
}

.expand-icon {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--rose-primary);
}

.question-text {
  font-size: 1.15rem;
  line-height: 1.42;
  color: var(--wine-deep);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.question-clue {
  margin-top: 0.6rem;
  padding: 0.85rem 1rem;
  background: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-rose);
}

.clue-header {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: var(--rose-primary);
  margin-bottom: 0.35rem;
}

.clue-body {
  font-size: 0.86rem;
  line-height: 1.5;
  color: var(--text-main);
}

.click-hint {
  margin-top: auto;
  font-size: 0.74rem;
  color: var(--rose-dark);
  font-weight: 600;
  opacity: 0.85;
}

/* Footer Hint */
.debate-footer {
  padding: 0.8rem 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.9);
}

.moderator-icon {
  font-size: 1.2rem;
}

.moderator-text {
  font-size: 0.92rem;
  color: var(--text-muted);
}
</style>
