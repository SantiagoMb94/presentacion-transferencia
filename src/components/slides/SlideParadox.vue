<template>
  <div class="slide-paradox animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">07 · La Regla de Oro</span>
        <span class="category-tag">Conferencia 27 · pág. 403</span>
      </div>
      <h2 class="slide-title font-display">
        La Regla de Oro: <span class="text-gold">¿Qué debe hacer el Analista?</span>
      </h2>
      <p class="slide-subtitle">
        Cuando el paciente te declara amor apasionado o rabia profunda: ¿Cómo reaccionar?
      </p>
    </div>

    <!-- The 2 Big Traps to Avoid -->
    <div class="traps-grid">
      <div class="trap-card glass-panel">
        <div class="trap-badge font-display">❌ GRAVE ERROR 1</div>
        <h4 class="trap-title font-serif">Ceder a la Demanda Amorosa</h4>
        <p class="trap-text">
          Tener un romance o corresponder al paciente. Es una falta ética total que destruye el tratamiento y solo alimenta la enfermedad.
        </p>
      </div>

      <div class="trap-card glass-panel">
        <div class="trap-badge font-display">❌ GRAVE ERROR 2</div>
        <h4 class="trap-title font-serif">Rechazar con Indignación Moral</h4>
        <p class="trap-text">
          Ofenderse, regañar al paciente o expulsarlo. Eso repite el mismo rechazo y castigo que el paciente sufrió en su infancia.
        </p>
      </div>
    </div>

    <!-- The Analytic Solution: The Magic Formula -->
    <div class="solution-hero glass-panel">
      <div class="solution-badge font-display">✅ LA FÓRMULA MAGISTRAL DE FREUD:</div>
      <h3 class="solution-heading font-serif">
        «Mudar la Repetición en Recuerdo»
      </h3>
      <p class="solution-explanation font-serif">
        El analista le demuestra pacientemente al paciente:  
        <span class="quote-callout">
          «Lo que sientes hoy <strong>no es por mí</strong> ni nace de esta habitación. Estás <strong>repitiendo</strong> sin darte cuenta el amor o la rabia que sentiste en tu infancia. Vamos a recordar quién era esa persona original.»
        </span>
      </p>
    </div>

    <!-- The Grand Paradox Result -->
    <div class="paradox-result glass-panel">
      <span class="paradox-icon">🏆</span>
      <p class="paradox-text font-serif">
        <strong>La Gran Paradoja:</strong> La transferencia, que parecía el peligro más mortal para destruir la cura, se convierte en <strong>el mejor instrumento de ella</strong>: porque permite ver el trauma en vivo, en la sesión, para disolverlo para siempre.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-paradox {
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

.traps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 1rem;
}

.trap-card {
  padding: 1rem 1.3rem;
  border-left: 3px solid #EF4444;
  background: rgba(239, 68, 68, 0.05);
}

.trap-badge {
  font-size: 0.72rem;
  font-weight: 800;
  color: #F87171;
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
}

.trap-title {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 0.3rem;
}

.trap-text {
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.solution-hero {
  padding: 1.2rem 1.6rem;
  border: 1px solid var(--border-gold);
  background: rgba(212, 175, 55, 0.08);
  margin-bottom: 1rem;
}

.solution-badge {
  font-size: 0.78rem;
  font-weight: 800;
  color: #34D399;
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.solution-heading {
  font-size: 1.6rem;
  color: var(--gold-light);
  margin-bottom: 0.5rem;
}

.solution-explanation {
  font-size: 1.05rem;
  color: #E2E8F0;
  line-height: 1.45;
}

.quote-callout {
  display: block;
  font-style: italic;
  color: #FFFFFF;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.6rem 1rem;
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--gold-primary);
  margin-top: 0.5rem;
}

.quote-callout strong {
  color: var(--gold-light);
}

.paradox-result {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.4rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.3);
  margin-top: auto;
}

.paradox-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
}

.paradox-text {
  font-size: 0.98rem;
  color: #D1FAE5;
  line-height: 1.4;
}

.paradox-text strong {
  color: #FFFFFF;
}

@media (max-width: 1024px) {
  .traps-grid {
    grid-template-columns: 1fr;
  }
  .slide-paradox {
    padding: 1.5rem;
  }
}
</style>
