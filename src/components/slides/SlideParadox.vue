<template>
  <div class="slide-paradox animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 08</span>
        <span class="category-tag">Conferencia 27 · pág. 403</span>
      </div>
      <h2 class="slide-title font-display">
        La Regla Técnica de Oro: <span class="text-gold">Mudar la Repetición en Recuerdo</span>
      </h2>
      <p class="slide-subtitle">
        ¿Cómo debe actuar el analista ante las demandas amorosas u hostiles del paciente?
      </p>
    </div>

    <!-- Historical and Clinical Context -->
    <div class="context-banner glass-panel">
      <div class="context-tag font-display">EL ANTECEDENTE HISTÓRICO Y LA ÉTICA ANALÍTICA</div>
      <p class="context-desc font-serif">
        En los albores de la técnica, el enamoramiento transferencial aterrorizó a los primeros médicos (como a Josef Breuer en el caso de «Anna O.»). Freud comprendió que el afecto no debe eludirse con pánico ni aprovecharse con liviandad; exige una posición técnica rigurosa:
      </p>
    </div>

    <!-- The 2 Antithetical Errors -->
    <div class="traps-grid">
      <div class="trap-card glass-panel">
        <div class="trap-marker font-mono">ERROR A · LA ENTREGA</div>
        <h4 class="trap-title font-serif">Ceder a las Demandas Amorosas</h4>
        <p class="trap-text">
          Consumar un vínculo amoroso o erótico con el paciente es una transgresión ética inadmisible. Clínicamente, constituiría una satisfacción sustitutiva que clausura el análisis y confirma la neurosis.
        </p>
      </div>

      <div class="trap-card glass-panel">
        <div class="trap-marker font-mono">ERROR B · LA CONDENA</div>
        <h4 class="trap-title font-serif">Rechazar con Indignación Moral</h4>
        <p class="trap-text">
          «Sería absurdo rechazarlas inamistosamente o con indignación» (pág. 403). La ofensa moralista del médico reeditaría de forma traumática el rechazo y la censura de las figuras parentales reprimidas.
        </p>
      </div>
    </div>

    <!-- The Master Analytic Solution -->
    <div class="solution-card glass-panel">
      <div class="solution-label font-display">LA OPERACIÓN INTERPRETATIVA FUNDAMENTAL</div>
      <h3 class="solution-heading font-serif">«Mudar la Repetición en Recuerdo»</h3>
      <p class="solution-text font-serif">
        El analista demuestra al enfermo que sus intensos sentimientos <strong>no provienen de la situación presente y no valen para la persona del médico</strong>, sino que repiten afectos olvidados de su infancia temprana:
        <span class="solution-formula">
          «Superamos la trasferencia demostrando que el paciente actúa en el presente lo que no ha podido recordar en palabras.»
        </span>
      </p>
    </div>

    <!-- The Climax Paradox -->
    <div class="paradox-footer glass-panel">
      <span class="paradox-tag font-display">LA GRAN PARADOJA FREUDIANA (pág. 403):</span>
      <p class="paradox-quote font-serif">
        «Y entonces la trasferencia, que en cualquier caso parecía significar la más poderosa amenaza para la cura, se convierte en el <strong>mejor instrumento de ella</strong>, con cuya ayuda pueden desplegarse los más cerrados abanicos de la vida anímica.»
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

.traps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 0.8rem;
}

.trap-card {
  padding: 1rem 1.3rem;
  border-left: 3px solid #EF4444;
  background: rgba(239, 68, 68, 0.04);
}

.trap-marker {
  font-size: 0.7rem;
  font-weight: 800;
  color: #F87171;
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
}

.trap-title {
  font-size: 1.2rem;
  color: #FFFFFF;
  margin-bottom: 0.3rem;
}

.trap-text {
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.solution-card {
  padding: 1.1rem 1.6rem;
  border: 1px solid var(--border-gold);
  background: rgba(212, 175, 55, 0.07);
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.solution-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: #34D399;
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.solution-heading {
  font-size: 1.5rem;
  color: var(--gold-light);
  margin-bottom: 0.4rem;
}

.solution-text {
  font-size: 1rem;
  color: #E2E8F0;
  line-height: 1.45;
}

.solution-formula {
  display: block;
  font-style: italic;
  color: #FFFFFF;
  background: rgba(0, 0, 0, 0.35);
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--gold-primary);
  margin-top: 0.4rem;
}

.paradox-footer {
  padding: 0.8rem 1.4rem;
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.25);
  margin-top: auto;
}

.paradox-tag {
  font-size: 0.72rem;
  font-weight: 800;
  color: #34D399;
  letter-spacing: 0.08em;
  display: block;
  margin-bottom: 0.2rem;
}

.paradox-quote {
  font-size: 0.95rem;
  color: #D1FAE5;
  line-height: 1.4;
}

.paradox-quote strong {
  color: #FFFFFF;
  text-decoration: underline;
  text-underline-offset: 3px;
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
