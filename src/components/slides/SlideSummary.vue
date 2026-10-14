<template>
  <div class="slide-summary animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">14 · Resumen Final</span>
        <span class="category-tag">Conclusión Magistral</span>
      </div>
      <h2 class="slide-title font-display">
        Lo que Debes Recordar: <span class="text-gold">3 Lecciones de Oro</span>
      </h2>
      <p class="slide-subtitle">
        Las 3 ideas que debes llevarte de la 27ª Conferencia de Sigmund Freud:
      </p>
    </div>

    <!-- 3 Big Clear Cards -->
    <div class="theses-grid">
      <div class="thesis-card glass-panel">
        <div class="thesis-num font-mono">LECCIÓN 1</div>
        <h4 class="thesis-heading font-serif">1. La Transferencia es Inevitable</h4>
        <p class="thesis-body">
          No es un error del médico ni un capricho del paciente: <strong>es la enfermedad misma saliendo a la superficie</strong>. Lo que no podemos recordar, lo actuamos.
        </p>
      </div>

      <div class="thesis-card glass-panel">
        <div class="thesis-num font-mono">LECCIÓN 2</div>
        <h4 class="thesis-heading font-serif">2. Ni Romance ni Regaño</h4>
        <p class="thesis-body">
          El analista renuncia a dos tentaciones: <strong>no cede al amor</strong> y <strong>no se ofende con el odio</strong>. Su trabajo es mostrarle al paciente que está repitiendo su niñez.
        </p>
      </div>

      <div class="thesis-card glass-panel">
        <div class="thesis-num font-mono">LECCIÓN 3</div>
        <h4 class="thesis-heading font-serif">3. La Meta es la Libertad</h4>
        <p class="thesis-body">
          Al resolver el conflicto con el médico, el paciente se libera de sus viejos traumas. <strong>El médico se hace a un lado</strong> y la persona vive con autonomía propia.
        </p>
      </div>
    </div>

    <!-- The Climax Freud Quote -->
    <div class="concluding-quote glass-panel">
      <p class="quote-text font-serif">
        «El hombre que en la relación con el médico ha pasado a ser libre del efecto de sus mociones reprimidas, <strong>sigue siéndolo también en su vida propia cuando el médico se ha hecho a un lado</strong>.»
      </p>
      <div class="quote-ref font-mono">— Sigmund Freud · Conferencia 27, pág. 404</div>
    </div>

    <!-- Presentation Action Buttons -->
    <div class="summary-actions">
      <button class="action-btn print-btn" @click="handlePrint">
        <svg class="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 6 2 18 2 18 9"></polyline>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
          <rect x="6" y="14" width="12" height="8"></rect>
        </svg>
        <span>Imprimir / Guardar en PDF</span>
      </button>

      <button class="action-btn notes-btn" @click="$emit('open-notes')">
        <svg class="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
        </svg>
        <span>Abrir Notas de Orador (🎙️)</span>
      </button>

      <button class="action-btn restart-btn" @click="$emit('go-first')">
        <svg class="act-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
          <path d="M3 3v5h5"></path>
        </svg>
        <span>Volver a la Portada</span>
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
  border-radius: var(--radius-md);
}

.thesis-num {
  font-size: 0.7rem;
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
  font-size: 0.9rem;
  color: #CBD5E1;
  line-height: 1.45;
}

.thesis-body strong {
  color: var(--gold-light);
}

.concluding-quote {
  padding: 1rem 1.6rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-bottom: 1rem;
}

.quote-text {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--gold-light);
  line-height: 1.45;
  margin-bottom: 0.3rem;
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
  margin-top: auto;
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

@media (max-width: 1024px) {
  .theses-grid {
    grid-template-columns: 1fr;
  }
  .slide-summary {
    padding: 1.5rem;
  }
}
</style>
