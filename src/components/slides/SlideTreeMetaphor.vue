<template>
  <div class="slide-tree animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 09</span>
        <span class="category-tag">Conferencia 27 · págs. 403–404</span>
      </div>
      <h2 class="slide-title font-display">
        La Metáfora Botánica y la <span class="text-gold">Neurosis Artificial</span>
      </h2>
      <p class="slide-subtitle">
        «La enfermedad no es algo terminado, congelado, sino que sigue creciendo como un ser viviente...»
      </p>
    </div>

    <!-- Metapsychological Context -->
    <div class="context-banner glass-panel">
      <div class="context-tag font-display">EL MODELO BIOLÓGICO DE LA ENFERMEDAD EN EVOLUCIÓN</div>
      <p class="context-desc font-serif">
        Freud descarta que la neurosis sea un cuadro rígido e inmutable. El tratamiento no pone fin a ese desarrollo vivo; en cambio, <strong>reorienta toda la producción mórbida hacia un único punto de concentración: la relación viva con el médico</strong>.
      </p>
    </div>

    <!-- The Cambium Metaphor Card -->
    <div class="cambium-banner glass-panel">
      <div class="cambium-marker font-mono">ANALOGÍA BIOLÓGICA</div>
      <div class="cambium-body">
        <h4 class="cambium-title font-serif">El Cámbium Vegetal (Capa Celular de Crecimiento)</h4>
        <p class="cambium-quote font-serif">
          «La trasferencia es comparable a la capa de crecimiento celular situada entre la corteza y la pulpa de un árbol, de la que surgen la nueva formación de tejidos y el espesamiento del tronco.» (pág. 404)
        </p>
        <div class="cambium-explanation font-serif">
          <strong>Contexto clínico:</strong> Así como el cámbium no destruye el árbol sino que canaliza toda su savia hacia una zona de renovación celular activa, el análisis no paraliza la neurosis en abstracto: concentra toda la producción mórbida en el vínculo directo con el analista para poder tratarla en tiempo real.
        </div>
      </div>
    </div>

    <!-- 3 Stages of Metamorphosis -->
    <div class="transformation-steps">
      <div class="step-card glass-panel">
        <div class="step-num font-mono">01</div>
        <h4 class="step-title font-serif">La Enfermedad Originaria</h4>
        <p class="step-desc">
          Fobias, obsesiones y angustia dispersas en la biografía del paciente. El trabajo con recuerdos remotos resulta abstracto y poco eficaz.
        </p>
      </div>

      <div class="step-arrow font-serif">➔</div>

      <div class="step-card glass-panel highlight-step">
        <div class="step-num font-mono">02</div>
        <h4 class="step-title font-serif">La Neurosis Artificial</h4>
        <p class="step-desc">
          Toda la afección se remodela en una <strong>«Neurosis de Transferencia»</strong>. Los síntomas antiguos se transforman en reclamos, temores o devoción hacia el analista.
        </p>
      </div>

      <div class="step-arrow font-serif">➔</div>

      <div class="step-card glass-panel">
        <div class="step-num font-mono">03</div>
        <h4 class="step-title font-serif">Domeñamiento y Libertad</h4>
        <p class="step-desc">
          Al resolver la neurosis artificial directamente en el consultorio, se liquida la enfermedad original. El analista se retira y el sujeto queda libre.
        </p>
      </div>
    </div>

    <!-- The Emancipation Climax -->
    <div class="climax-banner glass-panel">
      <span class="climax-label font-display">LA META DE LA EMANCIPACIÓN ANALÍTICA:</span>
      <p class="climax-text font-serif">
        «El hombre que en la relación con el médico ha pasado a ser normal y libre del efecto de unas mociones reprimidas, <strong>sigue siéndolo también en su vida propia cuando el médico se ha hecho a un lado</strong>.» (Freud, pág. 404)
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-tree {
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
  padding: 0.75rem 1.2rem;
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

.cambium-banner {
  padding: 0.9rem 1.3rem;
  border-left: 3px solid var(--gold-primary);
  background: rgba(212, 175, 55, 0.06);
  margin-bottom: 0.8rem;
}

.cambium-marker {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.cambium-title {
  font-size: 1.15rem;
  color: #FFFFFF;
  margin-bottom: 0.2rem;
}

.cambium-quote {
  font-size: 0.95rem;
  color: #E2E8F0;
  line-height: 1.45;
  margin-bottom: 0.35rem;
}

.cambium-explanation {
  font-size: 0.88rem;
  color: var(--gold-light);
  line-height: 1.4;
  padding-top: 0.3rem;
  border-top: 1px dashed rgba(212, 175, 55, 0.2);
}

.cambium-explanation strong {
  color: var(--gold-primary);
}

.transformation-steps {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.step-card {
  flex: 1;
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  text-align: center;
  align-items: center;
}

.step-num {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--gold-primary);
  margin-bottom: 0.5rem;
}

.step-title {
  font-size: 1.15rem;
  color: #FFFFFF;
  margin-bottom: 0.35rem;
}

.step-desc {
  font-size: 0.82rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.highlight-step {
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.08);
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
}

.highlight-step .step-num {
  background: var(--gold-primary);
  color: #080C14;
}

.highlight-step .step-desc strong {
  color: var(--gold-light);
}

.step-arrow {
  font-size: 1.5rem;
  color: var(--gold-primary);
  flex-shrink: 0;
}

.climax-banner {
  padding: 0.85rem 1.4rem;
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.25);
  margin-top: auto;
}

.climax-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: #34D399;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 0.2rem;
}

.climax-text {
  font-size: 0.95rem;
  color: #D1FAE5;
  line-height: 1.4;
}

.climax-text strong {
  color: #FFFFFF;
}

@media (max-width: 1024px) {
  .transformation-steps {
    flex-direction: column;
  }
  .step-arrow {
    transform: rotate(90deg);
  }
  .slide-tree {
    padding: 1.5rem;
  }
}
</style>
