<template>
  <div class="slide-polar-bear animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 03</span>
        <span class="category-tag">Conferencia 27 · págs. 394–395</span>
      </div>
      <h2 class="slide-title font-display">
        La Tópica del Conflicto: <span class="text-gold">El Oso Polar y la Ballena</span>
      </h2>
      <p class="slide-subtitle">
        ¿Por qué el neurótico no puede resolver su conflicto interior mediante la simple fuerza de voluntad?
      </p>
    </div>

    <!-- Metapsychological Context Banner -->
    <div class="context-banner glass-panel">
      <div class="context-tag font-display">EL APÓLOGO FREUDIANO Y LA ESCISIÓN PSÍQUICA</div>
      <p class="context-desc font-serif">
        Freud advierte que el conflicto neurótico <strong>no es una disputa ordinaria</strong> entre dos ideas conscientes situadas en un mismo nivel mental. Es una contienda entre dos fuerzas que habitan sistemas psíquicos incomunicados debido a la barrera de la represión:
      </p>
    </div>

    <div class="polar-grid">
      <!-- Left: Visual Illustration with Classical Labels -->
      <div class="visual-panel glass-panel">
        <div class="artwork-frame">
          <img 
            src="/assets/bear_whale.jpg" 
            alt="El Oso Polar y la Ballena en el umbral del inconsciente"
            class="artwork-img"
          />
          <div class="label-bear font-display">SISTEMA CONSCIENTE / PRECONSCIENTE (Tierra Firme)</div>
          <div class="label-barrier font-mono">──── FRONTERA DE LA REPRESIÓN PSÍQUICA ────</div>
          <div class="label-whale font-display">SISTEMA INCONSCIENTE REPRIMIDO (Profundidades)</div>
        </div>
      </div>

      <!-- Right: Detailed Theoretical Cards -->
      <div class="explanation-panel">
        <div class="concept-card glass-panel">
          <div class="card-header">
            <span class="card-symbol font-mono">A</span>
            <h4 class="card-title font-serif">El Oso Polar (Lo Consciente / Preconsciente)</h4>
          </div>
          <p class="card-text">
            Representa las mociones anímicas que han alcanzado la luz: los ideales éticos, el pensamiento verbal estructurado y la exigencia de adaptación al principio de realidad. Camina sobre el hielo firme de la vigilia.
          </p>
        </div>

        <div class="concept-card glass-panel">
          <div class="card-header">
            <span class="card-symbol font-mono">B</span>
            <h4 class="card-title font-serif">La Ballena (Lo Inconsciente Reprimido)</h4>
          </div>
          <p class="card-text">
            Representa las aspiraciones pulsionales infantiles sofocadas. Al estar excluida del lenguaje consciente, busca desesperadamente satisfacción a través de los síntomas patológicos en el abismo somático.
          </p>
        </div>

        <div class="concept-card glass-panel highlight-card">
          <div class="card-header">
            <span class="card-symbol font-mono">C</span>
            <h4 class="card-title font-serif">El Encuentro Terapéutico (La Tarea Analítica)</h4>
          </div>
          <p class="card-text font-serif">
            «Son tan incapaces de acuerdo como el oso polar y la ballena en el apólogo. <strong>Una decisión efectiva sólo puede producirse si ambos se encuentran en el mismo terreno</strong>. Pienso que la única tarea de la terapia consiste en posibilitar esto.» (pág. 394)
          </p>
        </div>
      </div>
    </div>

    <!-- Takeaway Summary -->
    <div class="takeaway-footer glass-panel">
      <span class="footer-tag font-display">CLAVE TÉCNICA:</span>
      <span class="footer-text font-serif">
        La transferencia será precisamente el puente viviente donde la pulsión reprimida y el Yo consciente abandonan sus hábitats separados para confrontarse en presencia del analista.
      </span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-polar-bear {
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

.context-banner {
  padding: 0.7rem 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--border-gold);
  margin-bottom: 0.8rem;
}

.context-tag {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.15rem;
}

.context-desc {
  font-size: 0.95rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.polar-grid {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 1.5rem;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.visual-panel {
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
}

.artwork-frame {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 270px;
  border-radius: var(--radius-md);
  overflow: hidden;
}

.artwork-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.label-bear {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(8, 12, 20, 0.9);
  color: #F8FAFC;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.label-barrier {
  position: absolute;
  top: 48%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--gold-primary);
  background: rgba(8, 12, 20, 0.92);
  padding: 0.2rem 0;
  letter-spacing: 0.06em;
}

.label-whale {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(8, 12, 20, 0.9);
  color: #93C5FD;
  padding: 0.3rem 0.7rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.explanation-panel {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  justify-content: center;
}

.concept-card {
  padding: 0.85rem 1.1rem;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-sm);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.25rem;
}

.card-symbol {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--gold-primary);
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--border-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(212, 175, 55, 0.1);
  flex-shrink: 0;
}

.card-title {
  font-size: 1.1rem;
  color: #FFFFFF;
}

.card-text {
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.highlight-card {
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.07);
}

.highlight-card .card-text {
  font-size: 0.95rem;
  color: #F8FAFC;
}

.highlight-card strong {
  color: var(--gold-light);
}

.takeaway-footer {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 1.2rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.footer-tag {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  flex-shrink: 0;
}

.footer-text {
  font-size: 0.92rem;
  color: #F8FAFC;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .polar-grid {
    grid-template-columns: 1fr;
  }
  .slide-polar-bear {
    padding: 1.5rem;
  }
}
</style>
