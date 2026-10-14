<template>
  <div class="slide-two-phases animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">03 · El Método de Freud</span>
        <span class="category-tag">Conferencia 27 · págs. 395–397</span>
      </div>
      <h2 class="slide-title font-display">
        «Saber» no es Curar: <span class="text-gold">El Método en 2 Pasos</span>
      </h2>
      <p class="slide-subtitle">
        ¿Por qué no basta con explicarle al paciente cuál es su trauma psicológico?
      </p>
    </div>

    <!-- The Big Mistake in Plain Words -->
    <div class="mistake-card glass-panel">
      <div class="mistake-badge font-display">⚠️ EL ERROR TÉCNICO INICIAL DE FREUD («Estrechez de miras»)</div>
      <p class="mistake-desc font-serif">
        «Al principio creíamos que era muy fácil: bastaba con adivinar el trauma inconsciente del paciente y decírselo. <strong>Pero eso no cura a nadie</strong>. El paciente guarda esa explicación intelectual en un bolsillo mental, pero su inconsciente y sus síntomas siguen exactamente iguales.» (pág. 397)
      </p>
    </div>

    <!-- The 2 Real Phases -->
    <div class="phases-row">
      <div class="phase-box glass-panel">
        <div class="phase-badge font-mono">PASO 1</div>
        <div class="phase-icon">🔍</div>
        <h3 class="phase-title font-serif">Rastrear el Recuerdo</h3>
        <p class="phase-text">
          Buscar pacientemente en la memoria dónde se reprimió el dolor o el deseo prohibido original.
        </p>
        <span class="phase-tag">Encontrar la escena olvidada</span>
      </div>

      <div class="phase-separator font-serif">➔</div>

      <div class="phase-box glass-panel highlight-box">
        <div class="phase-badge badge-gold font-mono">PASO 2 · EL DECISIVO</div>
        <div class="phase-icon">🛡️</div>
        <h3 class="phase-title font-serif">Vencer la Resistencia</h3>
        <p class="phase-text">
          El paciente tiene terror de revivir ese dolor. Hay que ayudarle a perder el miedo y derribar la barrera defensiva de su Yo.
        </p>
        <span class="phase-tag tag-gold">Superar la resistencia</span>
      </div>
    </div>

    <!-- Bottom Punchline -->
    <div class="bottom-formula glass-panel">
      <span class="formula-icon">💡</span>
      <span class="formula-text font-serif">
        <strong>La clave de Freud:</strong> La cura no es una clase de psicología. Para que el síntoma desaparezca, el paciente debe <em>volver a sentir</em> el conflicto en un espacio seguro y elaborarlo, no solo saberlo en teoría.
      </span>
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

.mistake-card {
  padding: 1rem 1.4rem;
  background: rgba(239, 68, 68, 0.06);
  border-left: 3px solid #EF4444;
  margin-bottom: 1.2rem;
}

.mistake-badge {
  font-size: 0.72rem;
  font-weight: 800;
  color: #F87171;
  letter-spacing: 0.06em;
  margin-bottom: 0.3rem;
}

.mistake-desc {
  font-size: 1.05rem;
  color: #FEE2E2;
  line-height: 1.45;
}

.mistake-desc strong {
  color: #FFFFFF;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.phases-row {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
  flex-grow: 1;
}

.phase-box {
  flex: 1;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  text-align: center;
  align-items: center;
}

.phase-badge {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.06);
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  margin-bottom: 0.6rem;
}

.badge-gold {
  color: #080C14;
  background: var(--gold-primary);
}

.phase-icon {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.phase-title {
  font-size: 1.35rem;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
}

.phase-text {
  font-size: 0.92rem;
  color: #CBD5E1;
  line-height: 1.45;
  margin-bottom: 1rem;
  max-width: 380px;
}

.phase-tag {
  font-size: 0.75rem;
  color: var(--text-dim);
  font-weight: 600;
}

.tag-gold {
  color: var(--gold-light);
  font-weight: 700;
}

.highlight-box {
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.08);
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.15);
}

.phase-separator {
  font-size: 1.8rem;
  color: var(--gold-primary);
}

.bottom-formula {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.formula-icon {
  font-size: 1.3rem;
}

.formula-text {
  font-size: 0.98rem;
  color: #F8FAFC;
  line-height: 1.4;
}

.formula-text strong {
  color: var(--gold-light);
}

@media (max-width: 1024px) {
  .phases-row {
    flex-direction: column;
  }
  .phase-separator {
    transform: rotate(90deg);
  }
  .slide-two-phases {
    padding: 1.5rem;
  }
}
</style>
