<template>
  <div class="slide-summary animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 14</span>
        <span class="category-tag">Conclusión y Clausura</span>
        <span class="page-pill font-mono">Conferencia 27 · págs. 392–407</span>
      </div>
      <h2 class="slide-title font-display">
        Síntesis Magistral y <span class="text-gold">Tres Tesis de Clausura</span>
      </h2>
      <p class="slide-subtitle">
        Los postulados definitivos de Sigmund Freud para la técnica psicoanalítica y la ética del tratamiento:
      </p>
    </div>

    <!-- 3 Big Rigorous Analytical Cards -->
    <div class="theses-grid">
      <div class="thesis-card glass-panel">
        <div class="thesis-num font-mono">TESIS I · EL FENÓMENO CLÍNICO</div>
        <h4 class="thesis-heading font-serif">La Inevitabilidad de la Transferencia</h4>
        <p class="thesis-body font-serif">
          No es un obstáculo fortuito ni una indiscreción del paciente: <strong>es la neurosis misma desplegándose en acto</strong>. Lo que no puede evocarse en el recuerdo consciente se descarga forzosamente sobre el médico, convirtiéndose en el único terreno donde el síntoma puede ser transformado.
        </p>
      </div>

      <div class="thesis-card glass-panel">
        <div class="thesis-num font-mono">TESIS II · LA POSICIÓN ÉTICA</div>
        <h4 class="thesis-heading font-serif">Ni Consumación ni Juicio Moral</h4>
        <p class="thesis-body font-serif">
          El analista rehúsa los dos extremos simétricos: <strong>no cede a las demandas amorosas</strong> (lo que arruinaría la cura con una satisfacción sustitutiva) y <strong>no se ofende moralmente ante el odio</strong>. Su función soberana es interpretar para «mudar la repetición en recuerdo».
        </p>
      </div>

      <div class="thesis-card glass-panel">
        <div class="thesis-num font-mono">TESIS III · EL FIN DEL TRATAMIENTO</div>
        <h4 class="thesis-heading font-serif">La Emancipación y la Retirada</h4>
        <p class="thesis-body font-serif">
          Al tramitar y disolver la neurosis artificial transferencial, el sujeto queda liberado de sus fijaciones infantiles reprimidas. El psicoanálisis no busca la servidumbre: <strong>el analista se hace a un lado</strong> y el paciente conquista su propia autonomía vital.
        </p>
      </div>
    </div>

    <!-- The Climax Freud Quote -->
    <div class="concluding-quote glass-panel">
      <p class="quote-text font-serif">
        «El hombre que en la relación con el médico ha pasado a ser normal y libre del efecto de unas mociones reprimidas, <strong>sigue siéndolo también en su vida propia cuando el médico se ha hecho a un lado</strong>.»
      </p>
      <div class="quote-ref font-mono">— Sigmund Freud · Conferencia 27, pág. 404 (Amorrortu Editores)</div>
    </div>

    <!-- Presentation Action Buttons -->
    <div class="summary-actions no-print">
      <button class="action-btn print-btn" @click="handlePrint">
        <svg class="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        <span>Guardar en PDF / Imprimir</span>
      </button>

      <button class="action-btn notes-btn" @click="$emit('open-notes')">
        <svg class="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
        <span>Modo Orador / Ponente</span>
      </button>

      <button class="action-btn restart-btn" @click="$emit('go-first')">
        <svg class="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
        </svg>
        <span>Volver al Inicio (Portada)</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['open-notes', 'go-first']);

function handlePrint() {
  window.print();
}
</script>

<style scoped>
.slide-summary {
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
  align-items: center;
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

.page-pill {
  font-size: 0.75rem;
  color: var(--text-dim);
  background: rgba(255, 255, 255, 0.04);
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

.theses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-bottom: 1rem;
}

.thesis-card {
  padding: 1.3rem;
  border-top: 3px solid var(--gold-primary);
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-md);
  background: rgba(14, 20, 32, 0.7);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.thesis-card:hover {
  transform: translateY(-2px);
  border-color: var(--gold-light);
}

.thesis-num {
  font-size: 0.7rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.4rem;
}

.thesis-heading {
  font-size: 1.2rem;
  color: #FFFFFF;
  margin-bottom: 0.6rem;
  line-height: 1.25;
}

.thesis-body {
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.5;
  margin: 0;
}

.thesis-body strong {
  color: var(--gold-light);
}

.concluding-quote {
  padding: 1.1rem 1.8rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  border-radius: var(--radius-sm);
  margin-bottom: 1rem;
}

.quote-text {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--gold-light);
  line-height: 1.45;
  margin-bottom: 0.4rem;
}

.quote-text strong {
  color: #FFFFFF;
}

.quote-ref {
  text-align: right;
  font-size: 0.78rem;
  color: var(--text-dim);
}

.summary-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-top: auto;
  padding-top: 0.5rem;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1.3rem;
  border-radius: var(--radius-sm);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.act-icon {
  width: 16px;
  height: 16px;
}

.print-btn {
  background: linear-gradient(135deg, #D4AF37 0%, #B89220 100%);
  color: #080C14;
  border: none;
  font-weight: 700;
}

.print-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.4);
}

.notes-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-gold);
  color: var(--gold-light);
}

.notes-btn:hover {
  background: rgba(212, 175, 55, 0.12);
  color: #FFFFFF;
}

.restart-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #CBD5E1;
}

.restart-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #FFFFFF;
}

@media (max-width: 1024px) {
  .theses-grid {
    grid-template-columns: 1fr;
  }
  .slide-summary {
    padding: 1.5rem;
  }
}
</style>
