<template>
  <div class="slide-alliance animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">04 · Las Herramientas</span>
        <span class="category-tag">Conferencia 27 · págs. 397–398</span>
      </div>
      <h2 class="slide-title font-display">
        Las 2 Fuerzas y las <span class="text-gold">Analogías de Freud</span>
      </h2>
      <p class="slide-subtitle">
        ¿Cómo logra el terapeuta que el paciente descubra lo que tiene reprimido?
      </p>
    </div>

    <!-- The 2 Forces -->
    <div class="forces-row">
      <div class="force-card glass-panel">
        <div class="force-icon">❤️</div>
        <div class="force-info">
          <div class="force-label">Fuerza 1</div>
          <h4 class="force-name font-serif">Las Ganas de Sanar</h4>
          <p class="force-desc">El sufrimiento real del paciente es su mayor motor: quiere dejar de sufrir.</p>
        </div>
      </div>

      <div class="force-card glass-panel">
        <div class="force-icon">💡</div>
        <div class="force-info">
          <div class="force-label">Fuerza 2</div>
          <h4 class="force-name font-serif">La Inteligencia Guiada</h4>
          <p class="force-desc">El analista no da órdenes: le presta un mapa mental para saber dónde buscar.</p>
        </div>
      </div>
    </div>

    <!-- The 2 Simple Analogies -->
    <div class="analogies-grid">
      <div class="analogy-card glass-panel">
        <div class="analogy-top">
          <span class="analogy-emoji">🎈</span>
          <span class="analogy-tag font-display">Analogía 1 · El Globo en el Cielo</span>
        </div>
        <p class="analogy-quote font-serif">
          «Si yo les digo: <em>'Miren al cielo, allá va un aeróstato'</em>, ustedes lo verán enseguida. Pero si solo les digo que miren a ver qué encuentran, no verán nada.»
        </p>
        <div class="analogy-lesson">
          <strong>En cristiano:</strong> El analista te dice qué buscar entre tus recuerdos para que no te pierdas en el caos.
        </div>
      </div>

      <div class="analogy-card glass-panel">
        <div class="analogy-top">
          <span class="analogy-emoji">🔬</span>
          <span class="analogy-tag font-display">Analogía 2 · El Microscopio</span>
        </div>
        <p class="analogy-quote font-serif">
          «El estudiante que mira al microscopio por primera vez no ve nada si el profesor no le dice qué célula observar, aunque esté justo delante de sus ojos.»
        </p>
        <div class="analogy-lesson">
          <strong>En cristiano:</strong> Tus traumas están ahí visibles, pero necesitas una guía experta para distinguirlos.
        </div>
      </div>
    </div>

    <!-- Contrast Box: Child vs Adult -->
    <div class="contrast-box glass-panel">
      <span class="contrast-icon">🛡️</span>
      <p class="contrast-text font-serif">
        <strong>La gran ventaja del presente:</strong> Cuando eras niño y reprimiste ese trauma, estabas solo, indefenso y asustado. <strong>Hoy eres un adulto maduro y tienes al terapeuta a tu lado como aliado</strong> para mirar ese miedo a la cara.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-alliance {
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

.forces-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 1rem;
}

.force-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border: 1px solid var(--border-gold);
}

.force-icon {
  font-size: 2rem;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: rgba(212, 175, 55, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.force-label {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--gold-primary);
  letter-spacing: 0.05em;
}

.force-name {
  font-size: 1.2rem;
  color: #FFFFFF;
}

.force-desc {
  font-size: 0.85rem;
  color: #CBD5E1;
}

.analogies-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.analogy-card {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
}

.analogy-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.analogy-emoji {
  font-size: 1.3rem;
}

.analogy-tag {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--gold-light);
  letter-spacing: 0.04em;
}

.analogy-quote {
  font-size: 0.98rem;
  font-style: italic;
  color: #E2E8F0;
  line-height: 1.45;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.analogy-lesson {
  padding: 0.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 2px solid var(--gold-primary);
  font-size: 0.85rem;
  color: #CBD5E1;
  border-radius: var(--radius-sm);
}

.analogy-lesson strong {
  color: var(--gold-light);
}

.contrast-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1.4rem;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
  margin-top: auto;
}

.contrast-icon {
  font-size: 1.6rem;
  flex-shrink: 0;
}

.contrast-text {
  font-size: 0.95rem;
  color: #D1FAE5;
  line-height: 1.4;
}

.contrast-text strong {
  color: #FFFFFF;
}

@media (max-width: 1024px) {
  .forces-row, .analogies-grid {
    grid-template-columns: 1fr;
  }
  .slide-alliance {
    padding: 1.5rem;
  }
}
</style>
