<template>
  <div class="slide-summary animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · Clausura</span>
        <span class="category-tag">Síntesis Teórico-Clínica</span>
      </div>
      <h2 class="slide-title font-display">
        Síntesis Magistral y <span class="text-gold">Clausura</span>
      </h2>
      <p class="slide-subtitle">
        El legado imperecedero de la 27ª Conferencia en la clínica y el pensamiento moderno
      </p>
    </div>

    <!-- The 3 Synthetic Theses -->
    <div class="theses-grid">
      <div class="thesis-card glass-panel">
        <div class="thesis-num font-mono">THESIS I</div>
        <h4 class="thesis-heading font-serif">Inmanencia de la Transferencia</h4>
        <p class="thesis-body">
          La transferencia no es un obstáculo contingente ni un error imputable al método: es la exteriorización necesaria y palpitante de la naturaleza de la enfermedad misma.
        </p>
      </div>

      <div class="thesis-card glass-panel">
        <div class="thesis-num font-mono">THESIS II</div>
        <h4 class="thesis-heading font-serif">La Ética de la Abstinencia</h4>
        <p class="thesis-body">
          El analista renuncia a la satisfacción en acto y a la indignación moral: opera transformando la compulsión de repetición en memoria consciente y autonomía subjetiva.
        </p>
      </div>

      <div class="thesis-card glass-panel">
        <div class="thesis-num font-mono">THESIS III</div>
        <h4 class="thesis-heading font-serif">La Emancipación del Sujeto</h4>
        <p class="thesis-body">
          Disuelta la neurosis artificial en el vínculo analítico, cesa el influjo del médico. El analista se hace a un lado y el individuo conquista su propia vida.
        </p>
      </div>
    </div>

    <!-- The Grand Freud Conclusion Quote Box -->
    <div class="concluding-quote glass-panel">
      <div class="quote-symbol font-serif">“</div>
      <p class="quote-text font-serif">
        «Todos los síntomas del enfermo han abandonado su significado originario y se han incorporado a un sentido nuevo en la relación con el médico... El hombre que en la relación con el médico ha pasado a ser normal y libre del efecto de unas mociones pulsionales reprimidas, <strong>sigue siéndolo también en su vida propia cuando el médico se ha hecho a un lado</strong>.»
      </p>
      <div class="quote-ref font-mono">Sigmund Freud · 27ª Conferencia, pág. 404</div>
    </div>

    <!-- Interactive Tools & Actions -->
    <div class="summary-actions">
      <button class="action-btn print-btn" @click="handlePrint">
        <svg class="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        <span>Imprimir / Exportar a PDF (14 Diapositivas)</span>
      </button>

      <button class="action-btn notes-btn" @click="$emit('open-notes')">
        <svg class="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        <span>Abrir Notas de Ponente / Coloquio</span>
      </button>

      <button class="action-btn restart-btn" @click="$emit('go-first')">
        <svg class="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
        </svg>
        <span>Volver al Inicio</span>
      </button>
    </div>

    <!-- Academic Metadata Footer -->
    <div class="academic-credits">
      <span>Fuente: <em>Conferencias de introducción al psicoanálisis</em> (Parte III), Obras Completas, Vol. XVI, Amorrortu Editores.</span>
      <span>Aplicación interactiva optimizada para despliegue web en Vercel.</span>
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
  font-size: clamp(1.8rem, 2.5vw, 2.3rem);
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
  padding: 1.2rem;
  border-top: 3px solid var(--gold-primary);
  display: flex;
  flex-direction: column;
}

.thesis-num {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.4rem;
}

.thesis-heading {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
}

.thesis-body {
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.45;
}

.concluding-quote {
  position: relative;
  padding: 1rem 1.6rem;
  background: rgba(212, 175, 55, 0.06);
  border-left: 3px solid var(--gold-primary);
  margin-bottom: 1rem;
}

.quote-symbol {
  position: absolute;
  top: -8px;
  left: 12px;
  font-size: 3rem;
  color: rgba(212, 175, 55, 0.2);
}

.quote-text {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--gold-light);
  line-height: 1.45;
  margin-bottom: 0.4rem;
  padding-left: 1rem;
}

.quote-text strong {
  color: #FFFFFF;
}

.quote-ref {
  text-align: right;
  font-size: 0.75rem;
  color: var(--text-dim);
}

.summary-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.8rem;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1.2rem;
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

.academic-credits {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-dim);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 0.6rem;
  margin-top: auto;
}

@media (max-width: 1024px) {
  .theses-grid {
    grid-template-columns: 1fr;
  }
  .summary-actions, .academic-credits {
    flex-direction: column;
    align-items: flex-start;
  }
  .slide-summary {
    padding: 1.5rem;
  }
}
</style>
