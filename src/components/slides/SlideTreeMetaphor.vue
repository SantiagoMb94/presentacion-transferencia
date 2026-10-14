<template>
  <div class="slide-tree animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">08 · El Modelo del Árbol</span>
        <span class="category-tag">Conferencia 27 · págs. 403–404</span>
      </div>
      <h2 class="slide-title font-display">
        La Metáfora del Árbol: <span class="text-gold">La Neurosis Artificial</span>
      </h2>
      <p class="slide-subtitle">
        ¿Cómo logra el psicoanálisis curar toda una vida de traumas en unas cuantas sesiones?
      </p>
    </div>

    <!-- Tree Metaphor Card -->
    <div class="tree-banner glass-panel">
      <div class="tree-icon">🌳</div>
      <div class="tree-body">
        <div class="tree-title font-display">La Enfermedad no está Muerta ni Congelada: Es un Árbol Vivo</div>
        <p class="tree-quote font-serif">
          «La transferencia es como la capa celular de crecimiento de un árbol: de ella surgen los nuevos tejidos. Todos los síntomas viejos del paciente se mudan a un único lugar: <strong>la relación con el médico</strong>.» (pág. 404)
        </p>
      </div>
    </div>

    <!-- 3 Simple Transformation Steps -->
    <div class="transformation-steps">
      <div class="step-card glass-panel">
        <div class="step-num font-mono">1</div>
        <h4 class="step-title font-serif">La Vieja Enfermedad</h4>
        <p class="step-desc">El paciente llega con fobias, miedos, angustia y culpas dispersas en su pasado.</p>
      </div>

      <div class="step-arrow font-serif">➔</div>

      <div class="step-card glass-panel highlight-step">
        <div class="step-num font-mono">2</div>
        <h4 class="step-title font-serif">La Neurosis Artificial</h4>
        <p class="step-desc">Todos esos traumas se concentran en una nueva relación viva: <strong>su relación con el analista</strong>.</p>
      </div>

      <div class="step-arrow font-serif">➔</div>

      <div class="step-card glass-panel">
        <div class="step-num font-mono">3</div>
        <h4 class="step-title font-serif">La Emancipación</h4>
        <p class="step-desc">Al sanar este vínculo en el consultorio, la vieja enfermedad desaparece y el sujeto queda libre.</p>
      </div>
    </div>

    <!-- The Climax Quote in Plain Words -->
    <div class="climax-banner glass-panel">
      <span class="climax-icon">✨</span>
      <p class="climax-text font-serif">
        <strong>La gran conclusión de Freud:</strong> «El hombre que en la relación con el médico ha aprendido a ser libre de sus represiones, <strong>sigue siéndolo también en su vida propia cuando el médico se hace a un lado</strong>.» (pág. 404)
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

.tree-banner {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1rem 1.4rem;
  border-left: 3px solid var(--gold-primary);
  background: rgba(212, 175, 55, 0.06);
  margin-bottom: 1.2rem;
}

.tree-icon {
  font-size: 2.2rem;
  flex-shrink: 0;
}

.tree-title {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--gold-primary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.3rem;
}

.tree-quote {
  font-size: 1.05rem;
  color: #E2E8F0;
  line-height: 1.45;
}

.tree-quote strong {
  color: var(--gold-light);
}

.transformation-steps {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  flex-grow: 1;
}

.step-card {
  flex: 1;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  text-align: center;
  align-items: center;
}

.step-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 800;
  color: var(--gold-primary);
  margin-bottom: 0.6rem;
}

.step-title {
  font-size: 1.2rem;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
}

.step-desc {
  font-size: 0.88rem;
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

.step-arrow {
  font-size: 1.6rem;
  color: var(--gold-primary);
  flex-shrink: 0;
}

.climax-banner {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.4rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.3);
  margin-top: auto;
}

.climax-icon {
  font-size: 1.5rem;
  color: var(--gold-primary);
  flex-shrink: 0;
}

.climax-text {
  font-size: 0.98rem;
  color: #D1FAE5;
  line-height: 1.45;
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
