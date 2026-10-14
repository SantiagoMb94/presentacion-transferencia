<template>
  <div class="slide-suggestion animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">10 · El Gran Debate</span>
        <span class="category-tag">Conferencia 27 · págs. 405–406</span>
      </div>
      <h2 class="slide-title font-display">
        ¿Es el Psicoanálisis una simple <span class="text-gold">Sugestión?</span>
      </h2>
      <p class="slide-subtitle">
        La dura pregunta que los médicos de la época le hicieron a Sigmund Freud:
      </p>
    </div>

    <!-- The Provocative Question -->
    <div class="question-banner glass-panel">
      <div class="q-badge font-display">❓ LA CRÍTICA DEL AUDITORIO (pág. 406):</div>
      <p class="q-text font-serif">
        «Doctor Freud: si el paciente solo se cura porque confía ciegamente en usted y lo admira... ¿no es eso exactamente lo mismo que la hipnosis? <strong>¿Para qué perder meses buscando traumas del pasado si al final lo único que funciona es la sugestión?</strong>»
      </p>
    </div>

    <!-- The 2 Opposite Approaches -->
    <div class="methods-grid">
      <!-- Method 1: Hypnosis -->
      <div class="method-card glass-panel method-hypnosis">
        <div class="method-header">
          <span class="m-icon">🌀</span>
          <div>
            <h4 class="m-title font-serif">La Hipnosis Clásica</h4>
            <span class="m-sub">El camino autoritario</span>
          </div>
        </div>
        <ul class="m-points">
          <li><strong>Cómo opera:</strong> Le ordena al paciente: <em>«¡Te ordeno que no sientas más angustia!»</em>.</li>
          <li><strong>El problema:</strong> Tapa el síntoma con la autoridad del médico, pero no quita la causa.</li>
          <li><strong>Consecuencia:</strong> El paciente queda dependiente del hipnotizador y el síntoma vuelve a brotar.</li>
        </ul>
      </div>

      <!-- Method 2: Psychoanalysis -->
      <div class="method-card glass-panel method-analysis">
        <div class="method-header">
          <span class="m-icon">🛋️</span>
          <div>
            <h4 class="m-title font-serif">El Psicoanálisis</h4>
            <span class="m-sub">El camino de la autonomía</span>
          </div>
        </div>
        <ul class="m-points">
          <li><strong>Cómo opera:</strong> Usa la confianza transferencial para que el paciente <em>pierda el miedo a recordar</em>.</li>
          <li><strong>La solución:</strong> Desentierra el trauma, lo hace consciente y disuelve el conflicto desde la raíz.</li>
          <li><strong>Consecuencia:</strong> Al final, el analista se retira y el paciente queda 100% libre e independiente.</li>
        </ul>
      </div>
    </div>

    <!-- Takeaway in 1 Line -->
    <div class="suggestion-footer glass-panel">
      <span class="s-icon">💡</span>
      <p class="s-text font-serif">
        <strong>En una frase:</strong> El hipnotizador usa su poder para imponer su voluntad al paciente; el psicoanalista usa el lazo afectivo para devolverle al paciente el control de su propia vida.
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
  margin-bottom: 1rem;
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

.question-banner {
  padding: 1rem 1.4rem;
  background: rgba(239, 68, 68, 0.05);
  border-left: 3px solid #EF4444;
  margin-bottom: 1.2rem;
}

.q-badge {
  font-size: 0.72rem;
  font-weight: 800;
  color: #F87171;
  letter-spacing: 0.06em;
  margin-bottom: 0.3rem;
}

.q-text {
  font-size: 1.05rem;
  font-style: italic;
  color: #FEE2E2;
  line-height: 1.45;
}

.q-text strong {
  color: #FFFFFF;
}

.methods-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 1.4rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.method-card {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.method-hypnosis {
  border-top: 3px solid #64748B;
  background: rgba(15, 23, 42, 0.5);
}

.method-analysis {
  border-top: 3px solid var(--gold-primary);
  background: rgba(212, 175, 55, 0.05);
}

.method-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.m-icon {
  font-size: 1.8rem;
}

.m-title {
  font-size: 1.25rem;
  color: #FFFFFF;
}

.m-sub {
  font-size: 0.75rem;
  color: var(--gold-light);
}

.m-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.m-points strong {
  color: #FFFFFF;
}

.suggestion-footer {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.s-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.s-text {
  font-size: 0.98rem;
  color: #F8FAFC;
  line-height: 1.4;
}

.s-text strong {
  color: var(--gold-light);
}

@media (max-width: 1024px) {
  .methods-grid {
    grid-template-columns: 1fr;
  }
  .slide-suggestion {
    padding: 1.5rem;
  }
}
</style>
