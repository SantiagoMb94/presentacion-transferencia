<template>
  <div class="slide-suggestion animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · págs. 405–406</span>
        <span class="category-tag">Polémica Epistemológica</span>
      </div>
      <h2 class="slide-title font-display">
        Transferencia, Sugestión e <span class="text-gold">Hipnosis</span>
      </h2>
      <p class="slide-subtitle">
        La réplica de Freud a la objeción incisiva del auditorio médico
      </p>
    </div>

    <!-- The Great Audience Objection Dialog Box -->
    <div class="objection-card glass-panel">
      <div class="objection-header">
        <span class="objection-badge">⚠️ LA OBJECIÓN PROVOCADORA DEL AUDITORIO (pág. 406)</span>
      </div>
      <p class="objection-quote font-serif">
        «¿Conque ha admitido finalmente que trabaja con el poder auxiliar de la sugestión como los hipnotizadores? Hace ya tiempo que lo sospechábamos. Pero entonces, ¿para qué todo el rodeo por los recuerdos del pasado, el inconsciente y las interpretaciones si lo único eficaz sigue siendo la sugestión? ¿Por qué no aplica la sugestión directa contra los síntomas, como los hipnotizadores honestos?»
      </p>
    </div>

    <!-- Comparative Matrix: Hypnosis vs Psychoanalysis -->
    <div class="comparison-matrix">
      <!-- Hypnosis Column -->
      <div class="matrix-col hypnosis-col glass-panel">
        <div class="matrix-header">
          <span class="col-icon">🌀</span>
          <div>
            <h3 class="col-title font-display">Hipnosis Tradicional</h3>
            <span class="col-sub">Bernheim · Sugestión Directa</span>
          </div>
        </div>

        <ul class="matrix-points">
          <li>
            <strong>Fundamento Teórico:</strong> Da por sentado un hecho bruto e inexplicable: la «sugestionabilidad humana». Ignora su origen libidinal.
          </li>
          <li>
            <strong>Manejo del Síntoma:</strong> Prohíbe al síntoma manifestarse mediante el mandato autoritario del médico («¡Usted ya no tiene dolor!»).
          </li>
          <li>
            <strong>Destino de la Represión:</strong> Deja las represiones intactas bajo tierra. El síntoma migra o reaparece al desvanecerse el influjo del médico.
          </li>
          <li>
            <strong>Relación de Poder:</strong> Mantiene al paciente en sumisión y dependencia infantil permanente.
          </li>
        </ul>
      </div>

      <!-- Psychoanalysis Column -->
      <div class="matrix-col analysis-col glass-panel">
        <div class="matrix-header">
          <span class="col-icon">🛋️</span>
          <div>
            <h3 class="col-title font-display">Terapia Psicoanalítica</h3>
            <span class="col-sub">Freud · Disolución de la Transferencia</span>
          </div>
        </div>

        <ul class="matrix-points">
          <li>
            <strong>Fundamento Teórico:</strong> Descubre que la sugestión proviene de la <em>actividad de la libido y la investidura de objeto</em>.
          </li>
          <li>
            <strong>Manejo del Síntoma:</strong> No prohíbe el síntoma; remonta sus raíces causales a través del recuerdo y la asociación libre.
          </li>
          <li>
            <strong>Destino de la Represión:</strong> Cancela la contrainvestidura; eleva la moción reprimida a la conciencia para resolver el conflicto.
          </li>
          <li>
            <strong>Relación de Poder:</strong> Disuelve la transferencia al final de la cura: el médico se retira y el paciente adquiere plena autonomía.
          </li>
        </ul>
      </div>
    </div>

    <!-- Freud's Famous Paradoxical Summary -->
    <div class="epilogue-quote glass-panel">
      <span class="quote-symbol font-serif">“</span>
      <p class="quote-text font-serif">
        «Hemos abandonado la hipnosis en nuestra técnica sólo para redescubrir la sugestión bajo la forma de la trasferencia... pero la usamos para obligar al Yo a librar una batalla normal que lo libere definitivamente.» (pág. 406)
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-suggestion {
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

.objection-card {
  padding: 0.9rem 1.4rem;
  background: rgba(239, 68, 68, 0.05);
  border-left: 3px solid #EF4444;
  margin-bottom: 0.8rem;
}

.objection-header {
  margin-bottom: 0.3rem;
}

.objection-badge {
  font-size: 0.72rem;
  font-weight: 800;
  color: #F87171;
  letter-spacing: 0.06em;
}

.objection-quote {
  font-size: 0.98rem;
  font-style: italic;
  color: #FEE2E2;
  line-height: 1.45;
}

.comparison-matrix {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 1.2rem;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.matrix-col {
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
}

.hypnosis-col {
  border-top: 3px solid #64748B;
  background: rgba(15, 23, 42, 0.5);
}

.analysis-col {
  border-top: 3px solid var(--gold-primary);
  background: rgba(212, 175, 55, 0.05);
}

.matrix-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.col-icon {
  font-size: 1.8rem;
}

.col-title {
  font-size: 1.15rem;
  color: #FFFFFF;
  line-height: 1.2;
}

.col-sub {
  font-size: 0.75rem;
  color: var(--gold-light);
}

.matrix-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.matrix-points strong {
  color: #F1F5F9;
  display: block;
  margin-bottom: 0.1rem;
}

.epilogue-quote {
  position: relative;
  padding: 0.8rem 1.4rem;
  background: rgba(212, 175, 55, 0.06);
  border-left: 2px solid var(--gold-primary);
  margin-top: auto;
}

.quote-symbol {
  position: absolute;
  top: -6px;
  left: 10px;
  font-size: 2.5rem;
  color: rgba(212, 175, 55, 0.2);
}

.quote-text {
  font-size: 1rem;
  font-style: italic;
  color: var(--gold-light);
  line-height: 1.4;
  padding-left: 1rem;
}

@media (max-width: 1024px) {
  .comparison-matrix {
    grid-template-columns: 1fr;
  }
  .slide-suggestion {
    padding: 1.5rem;
  }
}
</style>
