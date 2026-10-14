<template>
  <div class="slide-alliance animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · págs. 397–398</span>
        <span class="category-tag">Dinámica de Fuerzas</span>
      </div>
      <h2 class="slide-title font-display">
        Las Fuerzas en Juego y las <span class="text-gold">Analogías Didácticas</span>
      </h2>
      <p class="slide-subtitle">
        ¿Con qué recursos cuenta el análisis para incitar al Yo a resignar su contrainvestidura?
      </p>
    </div>

    <!-- The 2 Patient Driving Forces -->
    <div class="forces-row">
      <div class="force-card glass-panel">
        <div class="force-icon-box">❤️</div>
        <div class="force-body">
          <div class="force-label">Fuerza Impulsora I</div>
          <h3 class="force-title font-serif">El Afán de Curación</h3>
          <p class="force-desc">
            El dolor y el padecimiento subjetivo del enfermo que lo movieron a pedir auxilio y avenirse al pacto de trabajo analítico.
          </p>
        </div>
      </div>

      <div class="force-card glass-panel">
        <div class="force-icon-box">💡</div>
        <div class="force-body">
          <div class="force-label">Fuerza Impulsora II</div>
          <h3 class="force-title font-serif">La Inteligencia Reforzada</h3>
          <p class="force-desc">
            La capacidad intelectual del paciente, armada y guiada mediante las <em>representaciones-expectativa</em> provistas por la interpretación analítica.
          </p>
        </div>
      </div>
    </div>

    <!-- The Two Analogies Grid -->
    <div class="analogies-grid">
      <div class="analogy-card glass-panel">
        <div class="analogy-badge">
          <span class="badge-icon">🎈</span>
          <span>Analogía 1 · El Firmamento</span>
        </div>
        <h4 class="analogy-title font-serif">El Aeróstato en el Cielo</h4>
        <p class="analogy-quote font-serif">
          «Si yo les digo: <em>'Miren al cielo, se ve un aeróstato'</em>, ustedes lo descubrirán mucho más fácilmente que si me limito a exhortarlos a que busquen con la mirada a ver si hallan alguna cosa.»
        </p>
        <div class="analogy-lesson">
          <strong>Función técnica:</strong> Suministrar una representación-expectativa anticipatoria para que la atención se oriente con precisión en el material caótico del recuerdo.
        </div>
      </div>

      <div class="analogy-card glass-panel">
        <div class="analogy-badge">
          <span class="badge-icon">🔬</span>
          <span>Analogía 2 · El Laboratorio</span>
        </div>
        <h4 class="analogy-title font-serif">El Estudiante ante el Microscopio</h4>
        <p class="analogy-quote font-serif">
          «También el estudiante que mira por primera vez con el microscopio es instruido por el profesor acerca de lo que debe ver; de lo contrario no ve nada, aunque eso esté plenamente visible ahí.»
        </p>
        <div class="analogy-lesson">
          <strong>Función técnica:</strong> El ojo inexperto mira sin ver; el saber teórico del analista presta la lente que hace discernible lo reprimido frente a la censura.
        </div>
      </div>
    </div>

    <!-- The Temporal Difference: Child Ego vs Adult Ego -->
    <div class="temporal-card glass-panel">
      <div class="temporal-header">
        <span class="temporal-tag font-display">La Ventaja Temporal del Análisis (pág. 398)</span>
      </div>
      <div class="temporal-columns">
        <div class="ego-col past">
          <div class="ego-title">El Yo Infantil del Pasado</div>
          <ul>
            <li>Débil, inmaduro e inexperto.</li>
            <li>Percibió la exigencia pulsional como un peligro mortal catastrófico.</li>
            <li>No tuvo otro recurso que la <strong>represión ciega</strong> y la huida neurótica.</li>
          </ul>
        </div>
        <div class="temporal-vs font-serif">VS</div>
        <div class="ego-col present">
          <div class="ego-title">El Yo Adulto del Presente</div>
          <ul>
            <li>Fuerte, maduro, consolidado y experimentado.</li>
            <li>Capaz de tolerar y tramitar la tensión pulsional.</li>
            <li><strong>Cuenta con un aliado poderoso:</strong> el médico analista.</li>
          </ul>
        </div>
      </div>
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
  margin-bottom: 0.4rem;
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

.forces-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
}

.force-card {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1rem 1.4rem;
  border: 1px solid var(--border-gold);
}

.force-icon-box {
  font-size: 2.2rem;
  width: 54px;
  height: 54px;
  border-radius: var(--radius-md);
  background: rgba(212, 175, 55, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.force-body {
  flex-grow: 1;
}

.force-label {
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--gold-primary);
  letter-spacing: 0.06em;
}

.force-title {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 0.2rem;
}

.force-desc {
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.analogies-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
}

.analogy-card {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

.analogy-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 0.5rem;
}

.analogy-title {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.analogy-quote {
  font-size: 1.02rem;
  font-style: italic;
  color: #E2E8F0;
  line-height: 1.45;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.analogy-lesson {
  padding: 0.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  color: #94A3B8;
  line-height: 1.4;
  border-left: 2px solid var(--gold-primary);
}

.temporal-card {
  padding: 1rem 1.4rem;
  margin-top: auto;
}

.temporal-header {
  margin-bottom: 0.6rem;
}

.temporal-tag {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--gold-primary);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.temporal-columns {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.ego-col {
  flex: 1;
}

.ego-title {
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.ego-col.past .ego-title { color: #F87171; }
.ego-col.present .ego-title { color: #34D399; }

.ego-col ul {
  list-style: none;
  font-size: 0.82rem;
  color: #CBD5E1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.ego-col li::before {
  content: "• ";
  color: var(--gold-primary);
}

.temporal-vs {
  font-size: 1.4rem;
  font-style: italic;
  color: var(--text-dim);
}

@media (max-width: 1024px) {
  .forces-row, .analogies-grid, .temporal-columns {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
  .slide-alliance {
    padding: 1.5rem;
  }
}
</style>
