<template>
  <div class="slide-alliance animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 05</span>
        <span class="category-tag">Conferencia 27 · págs. 397–398</span>
      </div>
      <h2 class="slide-title font-display">
        Las Fuerzas en Juego y las <span class="text-gold">Analogías de la Interpretación</span>
      </h2>
      <p class="slide-subtitle">
        ¿Con qué recursos cuenta el análisis para incitar al Yo a vencer sus propias resistencias?
      </p>
    </div>

    <!-- The 2 Subjective Driving Forces -->
    <div class="forces-row">
      <div class="force-card glass-panel">
        <div class="force-marker font-mono">01</div>
        <div class="force-info">
          <div class="force-tag font-display">PRIMER RESORTE PULSIONAL</div>
          <h4 class="force-title font-serif">El Afán del Paciente por Sanar</h4>
          <p class="force-desc">
            El sufrimiento neurótico y el dolor psíquico real son el motor inicial: movilizan al sujeto a buscar ayuda y a comprometerse con el pacto analítico.
          </p>
        </div>
      </div>

      <div class="force-card glass-panel">
        <div class="force-marker font-mono">02</div>
        <div class="force-info">
          <div class="force-tag font-display">SEGUNDO RESORTE INTELECTUAL</div>
          <h4 class="force-title font-serif">La Inteligencia Reforzada</h4>
          <p class="force-desc">
            La capacidad reflexiva del sujeto armada por el analista mediante <strong>representaciones-expectativa</strong>, que le enseñan a reconocer sus defensas.
          </p>
        </div>
      </div>
    </div>

    <!-- The Two Famous Pedagogical Analogies -->
    <div class="analogies-grid">
      <div class="analogy-card glass-panel">
        <div class="analogy-header">
          <span class="analogy-roman font-mono">A</span>
          <span class="analogy-title font-display">El Aeróstato en el Firmamento</span>
        </div>
        <p class="analogy-quote font-serif">
          «Si yo les digo: <em>'Miren al cielo, se ve un aeróstato'</em>, ustedes lo descubrirán mucho más fácilmente que si me limito a exhortarlos a que busquen con la mirada para ver si hallan alguna cosa.» (pág. 398)
        </p>
        <div class="analogy-footer">
          <strong>Función técnica:</strong> La interpretación proporciona una guía anticipatoria para que la atención del paciente no se disperse en el vacío.
        </div>
      </div>

      <div class="analogy-card glass-panel">
        <div class="analogy-header">
          <span class="analogy-roman font-mono">B</span>
          <span class="analogy-title font-display">El Estudiante ante el Microscopio</span>
        </div>
        <p class="analogy-quote font-serif">
          «El estudiante que mira por primera vez con el microscopio es instruido por el profesor acerca de lo que debe ver; de lo contrario no ve nada, aunque eso esté plenamente visible ahí.» (pág. 398)
        </p>
        <div class="analogy-footer">
          <strong>Función técnica:</strong> El saber teórico del analista presta la lente que hace reconocible la formación de síntomas frente a la censura.
        </div>
      </div>
    </div>

    <!-- The Decisive Temporal Asymmetry -->
    <div class="temporal-asymmetry glass-panel">
      <div class="asymmetry-label font-display">LA VENTAJA HISTÓRICA DEL ANÁLISIS (pág. 398)</div>
      <p class="asymmetry-text font-serif">
        En la infancia, el Yo del sujeto era <strong>débil, inmaduro y temeroso</strong>, y no tuvo más salida que reprimir la pulsión. En el presente, el Yo ha devenido <strong>adulto y experimentado</strong>, y cuenta con un factor inédito: <strong>el médico como auxiliar y protector</strong> para tramitar el viejo conflicto sin enfermar.
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

.forces-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 1rem;
}

.force-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.3rem;
  border: 1px solid var(--border-gold);
}

.force-marker {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--gold-primary);
  opacity: 0.8;
  margin-top: 0.1rem;
}

.force-tag {
  font-size: 0.68rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
}

.force-title {
  font-size: 1.2rem;
  color: #FFFFFF;
  margin-bottom: 0.25rem;
}

.force-desc {
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.force-desc strong {
  color: var(--gold-light);
}

.analogies-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.analogy-card {
  padding: 1.1rem 1.3rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.analogy-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}

.analogy-roman {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(212, 175, 55, 0.12);
  border: 1px solid var(--border-gold);
  color: var(--gold-primary);
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.analogy-title {
  font-size: 0.85rem;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: 0.04em;
}

.analogy-quote {
  font-size: 0.95rem;
  font-style: italic;
  color: #E2E8F0;
  line-height: 1.45;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.analogy-footer {
  padding: 0.6rem 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 2px solid var(--gold-primary);
  font-size: 0.82rem;
  color: #CBD5E1;
  line-height: 1.35;
  border-radius: var(--radius-sm);
}

.analogy-footer strong {
  color: var(--gold-light);
}

.temporal-asymmetry {
  padding: 0.85rem 1.4rem;
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.25);
  margin-top: auto;
}

.asymmetry-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: #34D399;
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.asymmetry-text {
  font-size: 0.95rem;
  color: #D1FAE5;
  line-height: 1.4;
}

.asymmetry-text strong {
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
