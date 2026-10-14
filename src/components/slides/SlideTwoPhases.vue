<template>
  <div class="slide-two-phases animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 04</span>
        <span class="category-tag">Conferencia 27 · págs. 395–397</span>
      </div>
      <h2 class="slide-title font-display">
        El Método en Dos Fases y el <span class="text-gold">Saber Intelectual</span>
      </h2>
      <p class="slide-subtitle">
        ¿Por qué no basta con comunicarle al paciente el significado de sus síntomas inconscientes?
      </p>
    </div>

    <!-- The Technical Error Context -->
    <div class="error-banner glass-panel">
      <div class="error-label font-display">LA AUTOCRÍTICA HISTÓRICA DE FREUD («Estrechez de miras», pág. 397)</div>
      <p class="error-text font-serif">
        En los albores del método analítico, se suponía una tarea sencilla: bastaba con que el médico coligiera lo inconsciente y se lo enunciara al paciente. La clínica demostró el fracaso de esa postura: <strong>el saber del médico no equivale al saber del paciente</strong>. El enfermo almacena la explicación teórica <em>junto a</em> su inconsciente, no en lugar de él; la represión y los síntomas permanecen inalterados.
      </p>
    </div>

    <!-- The Two Distinct Phases -->
    <div class="phases-container">
      <div class="phase-card glass-panel">
        <div class="phase-header">
          <span class="phase-number font-mono">FASE 1</span>
          <span class="phase-badge badge-blue">Dimensión Tópica</span>
        </div>
        <h4 class="phase-heading font-serif">Rebusca de la Represión</h4>
        <p class="phase-description">
          Pesquisar en la memoria y en las asociaciones libres el punto histórico exacto en que la moción pulsional fue sofocada y expulsada de la conciencia. Es la reconstrucción del mapa de la neurosis.
        </p>
        <div class="phase-footer-tag">Localización en el recuerdo</div>
      </div>

      <div class="phase-divider font-serif">➔</div>

      <div class="phase-card glass-panel highlight-phase">
        <div class="phase-header">
          <span class="phase-number font-mono">FASE 2</span>
          <span class="phase-badge badge-gold">Dimensión Dinámica</span>
        </div>
        <h4 class="phase-heading font-serif">Eliminación de la Resistencia</h4>
        <p class="phase-description">
          Desmontar la <strong>contrainvestidura (Gegenbesetzung)</strong> que el Yo erige para mantener sepultado el recuerdo. El Yo colabora resignando su defensa cuando la interpretación le demuestra el costo neurótico de sostenerla.
        </p>
        <div class="phase-footer-tag tag-active">Desactivación de la defensa del Yo</div>
      </div>
    </div>

    <!-- Epistemological Takeaway -->
    <div class="formula-footer glass-panel">
      <span class="footer-label font-display">AXIOMA Y FUNDAMENTO TÉCNICO (págs. 396–397):</span>
      <p class="footer-quote font-serif">
        «Primero la rebusca de la represión, después la eliminación de la resistencia que la mantiene en pie.» <strong>¿Por qué este orden?</strong> Si se intenta vencer la resistencia sin haber localizado el recuerdo reprimido, el análisis vaga a ciegas; pero si solo se enuncia el recuerdo sin desmontar la resistencia del Yo, el paciente acumula la teoría como simple erudición intelectual mientras su síntoma continúa incólume.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-two-phases {
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

.error-banner {
  padding: 0.9rem 1.4rem;
  background: rgba(239, 68, 68, 0.05);
  border-left: 3px solid #EF4444;
  margin-bottom: 1.1rem;
}

.error-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: #F87171;
  letter-spacing: 0.06em;
  margin-bottom: 0.25rem;
}

.error-text {
  font-size: 0.98rem;
  color: #FEE2E2;
  line-height: 1.45;
}

.error-text strong {
  color: #FFFFFF;
}

.phases-container {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.phase-card {
  flex: 1;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.phase-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.phase-number {
  font-size: 0.82rem;
  font-weight: 800;
  color: var(--text-muted);
}

.phase-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  letter-spacing: 0.04em;
}

.badge-blue { background: rgba(59, 130, 246, 0.15); color: #93C5FD; }
.badge-gold { background: var(--gold-primary); color: #080C14; font-weight: 800; }

.phase-heading {
  font-size: 1.3rem;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.phase-description {
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.45;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.phase-description strong {
  color: var(--gold-light);
}

.phase-footer-tag {
  font-size: 0.75rem;
  color: var(--text-dim);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 0.5rem;
}

.tag-active {
  color: var(--gold-light);
  font-weight: 600;
}

.highlight-phase {
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.07);
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.15);
}

.phase-divider {
  font-size: 1.8rem;
  color: var(--gold-primary);
  flex-shrink: 0;
}

.formula-footer {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.footer-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  flex-shrink: 0;
}

.footer-quote {
  font-size: 0.95rem;
  color: #F8FAFC;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .phases-container {
    flex-direction: column;
  }
  .phase-divider {
    transform: rotate(90deg);
  }
  .slide-two-phases {
    padding: 1.5rem;
  }
}
</style>
