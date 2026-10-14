<template>
  <div class="slide-polar-bear animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">02 · La Metáfora de Freud</span>
        <span class="category-tag">Conferencia 27 · págs. 394–395</span>
      </div>
      <h2 class="slide-title font-display">
        La Mente Dividida: <span class="text-gold">El Oso y la Ballena</span>
      </h2>
      <p class="slide-subtitle">
        ¿Por qué el neurótico no puede resolver su conflicto interior por su propia cuenta?
      </p>
    </div>

    <div class="polar-grid">
      <!-- Left: Visual Illustration -->
      <div class="visual-panel glass-panel">
        <div class="artwork-frame">
          <img 
            src="/assets/bear_whale.jpg" 
            alt="El Oso Polar y la Ballena"
            class="artwork-img"
          />
          <div class="label-bear font-display">🐻 LO CONSCIENTE (El Oso)</div>
          <div class="label-barrier font-mono">──── BARRERA DE LA REPRESIÓN ────</div>
          <div class="label-whale font-display">🐋 LO INCONSCIENTE (La Ballena)</div>
        </div>
      </div>

      <!-- Right: Clear 3-Step Explanation -->
      <div class="explanation-panel">
        <div class="story-card glass-panel">
          <div class="card-step-num font-mono">01</div>
          <div class="card-body">
            <h4 class="card-heading font-serif">🐻 El Oso Polar (Lo Consciente)</h4>
            <p>Es tu mente despierta, tu moral, tus buenas intenciones y lo que crees que eres. Camina sobre el hielo firme.</p>
          </div>
        </div>

        <div class="story-card glass-panel">
          <div class="card-step-num font-mono">02</div>
          <div class="card-body">
            <h4 class="card-heading font-serif">🐋 La Ballena (Lo Inconsciente)</h4>
            <p>Son los deseos infantiles reprimidos, la rabia o la culpa que enterraste en el fondo del mar para no sufrirlos.</p>
          </div>
        </div>

        <div class="story-card glass-panel highlight-story">
          <div class="card-step-num font-mono">03</div>
          <div class="card-body">
            <h4 class="card-heading font-serif">⚡ El Problema y la Solución</h4>
            <p class="quote-text font-serif">
              «Son incapaces de acuerdo como el oso y la ballena: viven en mundos distintos. <strong>La única tarea de la terapia es llevarlos al mismo terreno</strong> para que puedan resolverse.»
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Takeaway -->
    <div class="bear-footer glass-panel">
      <span class="footer-icon">💡</span>
      <span class="footer-text font-serif">
        <strong>En palabras sencillas:</strong> No puedes curar una angustia o fobia pensando lógicamente (el oso), porque la raíz está oculta bajo el agua (la ballena). El analista debe ayudar a que la ballena salga a la luz.
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

.polar-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 1.8rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.visual-panel {
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-lg);
}

.artwork-frame {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 280px;
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
  top: 15px;
  left: 15px;
  background: rgba(8, 12, 20, 0.85);
  color: #F8FAFC;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 800;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.label-barrier {
  position: absolute;
  top: 48%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--gold-primary);
  background: rgba(8, 12, 20, 0.9);
  padding: 0.2rem 0;
  letter-spacing: 0.05em;
}

.label-whale {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba(8, 12, 20, 0.85);
  color: #93C5FD;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 800;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.explanation-panel {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
}

.story-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.9rem 1.2rem;
  border: 1px solid var(--border-subtle);
}

.card-step-num {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--gold-primary);
  opacity: 0.8;
}

.card-body h4 {
  font-size: 1.15rem;
  color: #FFFFFF;
  margin-bottom: 0.2rem;
}

.card-body p {
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.highlight-story {
  border-color: var(--gold-primary);
  background: rgba(212, 175, 55, 0.07);
}

.highlight-story .quote-text {
  font-size: 0.98rem;
  font-style: italic;
  color: var(--gold-light);
  line-height: 1.45;
}

.quote-text strong {
  color: #FFFFFF;
}

.bear-footer {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.75rem 1.2rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.footer-icon {
  font-size: 1.2rem;
}

.footer-text {
  font-size: 0.95rem;
  color: #F8FAFC;
  line-height: 1.4;
}

.footer-text strong {
  color: var(--gold-light);
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
