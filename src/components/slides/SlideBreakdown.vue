<template>
  <div class="slide-breakdown animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · págs. 399–401</span>
        <span class="category-tag">Giro Clínico</span>
      </div>
      <h2 class="slide-title font-display">
        El Asombro Clínico: <span class="text-gold">El Giro Imprevisto</span>
      </h2>
      <p class="slide-subtitle">
        «Creíamos haber racionalizado la situación como un problema aritmético; y hete aquí que se filtró algo inesperado...»
      </p>
    </div>

    <!-- The Shift Comparison Cards -->
    <div class="shift-grid">
      <!-- Card 1: La Primavera del Análisis -->
      <div 
        class="shift-card glass-panel phase-spring" 
        :class="{ focused: activePhase === 1 }"
        @click="activePhase = 1"
      >
        <div class="phase-badge spring-badge">
          <span class="dot-spring"></span>
          ETAPA 1 · LA COLABORACIÓN IDÍLICA
        </div>
        <h3 class="phase-title font-serif">«La Primavera del Análisis»</h3>
        <p class="phase-quote font-serif">
          «El paciente desarrolla un interés particular hacia la persona del médico... es particularmente obsequioso, agradecido y exhibe rasgos meritorios...»
        </p>

        <ul class="phase-symptoms">
          <li>
            <span class="icon-sym">✨</span>
            <span><strong>Progreso fulgurante:</strong> Asimila interpretaciones con pasmosa agilidad y acierto.</span>
          </li>
          <li>
            <span class="icon-sym">🗣️</span>
            <span><strong>El coro familiar:</strong> «En casa no habla de otra cosa, tiene el nombre de usted en la boca todo el día».</span>
          </li>
          <li>
            <span class="icon-sym">🌿</span>
            <span><strong>Alivio objetivo:</strong> Desaparecen síntomas con rapidez; médico y paciente celebran el éxito.</span>
          </li>
        </ul>
        <div class="click-hint">Click para enfocar análisis</div>
      </div>

      <!-- Card 2: El Colapso / Resistencia -->
      <div 
        class="shift-card glass-panel phase-winter" 
        :class="{ focused: activePhase === 2 }"
        @click="activePhase = 2"
      >
        <div class="phase-badge winter-badge">
          <span class="dot-winter"></span>
          ETAPA 2 · LA CRISIS REPENTINA
        </div>
        <h3 class="phase-title font-serif">«Un buen día se estropea...»</h3>
        <p class="phase-quote font-serif">
          «Aparecen dificultades: el paciente asevera que <em>nada más se le ocurre</em>. Se comporta como si nunca hubiera hecho el pacto con el médico...»
        </p>

        <ul class="phase-symptoms">
          <li>
            <span class="icon-sym">🛑</span>
            <span><strong>Mutismo y parálisis:</strong> Suspensión radical de la regla fundamental de la asociación libre.</span>
          </li>
          <li>
            <span class="icon-sym">🔒</span>
            <span><strong>Reserva pertinaz:</strong> Es evidente que algo le preocupa intensamente, pero se niega a revelarlo.</span>
          </li>
          <li>
            <span class="icon-sym">💥</span>
            <span><strong>Violenta resistencia:</strong> El interés por curarse se esfuma; solo importa la relación con el médico.</span>
          </li>
        </ul>
        <div class="click-hint">Click para enfocar análisis</div>
      </div>
    </div>

    <!-- Epistemological Diagnostic Banner -->
    <div class="diagnostic-banner glass-panel">
      <div class="diag-icon font-display">DIAGNÓSTICO FREUDIANO</div>
      <p class="diag-text font-serif">
        «El paciente ha transferido sobre el médico intensos sentimientos de ternura que ni la conducta de este ni la relación médica justifican. Toda esa proclividad del afecto venía de otra parte, estaba ya preparada en el sujeto, y con motivo del análisis se transfirió sobre el médico.» (pág. 400)
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activePhase = ref(1);
</script>

<style scoped>
.slide-breakdown {
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
  font-style: italic;
}

.shift-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.shift-card {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid var(--border-subtle);
}

.shift-card:hover {
  transform: translateY(-4px);
}

.shift-card.focused {
  border-color: var(--gold-primary);
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.25);
}

.phase-spring.focused {
  background: rgba(16, 185, 129, 0.06);
  border-color: #34D399;
}

.phase-winter.focused {
  background: rgba(239, 68, 68, 0.06);
  border-color: #F87171;
}

.phase-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.65rem;
  border-radius: 9999px;
  margin-bottom: 0.8rem;
  width: fit-content;
}

.spring-badge {
  background: rgba(16, 185, 129, 0.15);
  color: #34D399;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.winter-badge {
  background: rgba(239, 68, 68, 0.15);
  color: #F87171;
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.dot-spring {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #34D399;
}

.dot-winter {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #F87171;
}

.phase-title {
  font-size: 1.45rem;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
}

.phase-quote {
  font-size: 0.98rem;
  font-style: italic;
  color: #CBD5E1;
  line-height: 1.45;
  margin-bottom: 1rem;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  padding-left: 0.8rem;
}

.phase-symptoms {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex-grow: 1;
}

.phase-symptoms li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: #E2E8F0;
  line-height: 1.4;
}

.icon-sym {
  font-size: 1rem;
  margin-top: -0.1rem;
}

.click-hint {
  font-size: 0.75rem;
  color: var(--text-dim);
  text-align: right;
  margin-top: 0.6rem;
}

.diagnostic-banner {
  padding: 0.9rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.diag-icon {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--gold-primary);
}

.diag-text {
  font-size: 1.02rem;
  font-style: italic;
  color: #FDF4DC;
  line-height: 1.45;
}

@media (max-width: 1024px) {
  .shift-grid {
    grid-template-columns: 1fr;
  }
  .slide-breakdown {
    padding: 1.5rem;
  }
}
</style>
