<template>
  <div class="slide-breakdown animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">05 · El Giro Inesperado</span>
        <span class="category-tag">Conferencia 27 · págs. 399–401</span>
      </div>
      <h2 class="slide-title font-display">
        La Crisis Clínica: <span class="text-gold">Del Amor al Silencio</span>
      </h2>
      <p class="slide-subtitle">
        El imprevisto que desconcertó a Freud: cuando todo parecía ir perfecto...
      </p>
    </div>

    <!-- The 2 Contrasting Stages -->
    <div class="stages-grid">
      <!-- Stage 1: The Honeymoon -->
      <div class="stage-card glass-panel honeymoon-card">
        <div class="stage-badge badge-green">FASE 1 · «LA LUNA DE MIEL»</div>
        <h3 class="stage-title font-serif">Todo Parece Maravilloso</h3>
        <ul class="stage-bullets">
          <li>
            <span class="bullet-icon">🌸</span>
            <span><strong>El paciente es devoto:</strong> Es amable, puntual, agradecido y halaga al médico sin parar.</span>
          </li>
          <li>
            <span class="bullet-icon">🗣️</span>
            <span><strong>En casa lo confirman:</strong> «En casa no habla de otra cosa, dice que usted es un genio».</span>
          </li>
          <li>
            <span class="bullet-icon">📈</span>
            <span><strong>Mejoría rápida:</strong> Los síntomas parecen desaparecer como por arte de magia.</span>
          </li>
        </ul>
        <div class="stage-footer">Parece que el caso ya está ganado... pero es una trampa.</div>
      </div>

      <!-- Stage 2: The Crash -->
      <div class="stage-card glass-panel crash-card">
        <div class="stage-badge badge-red">FASE 2 · EL FRENO DE MANO</div>
        <h3 class="stage-title font-serif">«Un buen día se estropea...»</h3>
        <ul class="stage-bullets">
          <li>
            <span class="bullet-icon">🛑</span>
            <span><strong>Mutismo repentino:</strong> El paciente se calla y jura que <em>«no se le ocurre nada»</em>.</span>
          </li>
          <li>
            <span class="bullet-icon">👀</span>
            <span><strong>Olvida la terapia:</strong> Ya no le interesan sus síntomas; solo le obsesiona la persona del médico.</span>
          </li>
          <li>
            <span class="bullet-icon">🔥</span>
            <span><strong>Feroz resistencia:</strong> O se declara enamorado/a locamente, o entra en desconfianza total.</span>
          </li>
        </ul>
        <div class="stage-footer">El tratamiento queda completamente paralizado.</div>
      </div>
    </div>

    <!-- The Revelation in 1 Sentence -->
    <div class="revelation-box glass-panel">
      <div class="revelation-title font-display">💡 ¿QUÉ HA OCURRIDO AQUÍ REALMENTE?</div>
      <p class="revelation-text font-serif">
        El paciente ha volcado sobre el médico <strong>sentimientos intensísimos (de amor o de rabia) que no son para el médico</strong>. Vienen de su pasado infantil y estaban latentes. Eso es la <strong>TRANSFERENCIA</strong>.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-breakdown {
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

.stages-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.stage-card {
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.honeymoon-card {
  background: rgba(16, 185, 129, 0.05);
  border-top: 3px solid #10B981;
}

.crash-card {
  background: rgba(239, 68, 68, 0.05);
  border-top: 3px solid #EF4444;
}

.stage-badge {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  width: fit-content;
  margin-bottom: 0.6rem;
}

.badge-green { background: rgba(16, 185, 129, 0.2); color: #34D399; }
.badge-red { background: rgba(239, 68, 68, 0.2); color: #F87171; }

.stage-title {
  font-size: 1.35rem;
  color: #FFFFFF;
  margin-bottom: 0.8rem;
}

.stage-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  flex-grow: 1;
}

.stage-bullets li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.bullet-icon {
  font-size: 1rem;
  margin-top: 0.1rem;
  flex-shrink: 0;
}

.stage-bullets strong {
  color: #FFFFFF;
}

.stage-footer {
  font-size: 0.8rem;
  color: var(--text-dim);
  font-style: italic;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 0.5rem;
  margin-top: 0.6rem;
}

.revelation-box {
  padding: 1rem 1.6rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.revelation-title {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.revelation-text {
  font-size: 1.05rem;
  color: #F8FAFC;
  line-height: 1.45;
}

.revelation-text strong {
  color: var(--gold-light);
}

@media (max-width: 1024px) {
  .stages-grid {
    grid-template-columns: 1fr;
  }
  .slide-breakdown {
    padding: 1.5rem;
  }
}
</style>
