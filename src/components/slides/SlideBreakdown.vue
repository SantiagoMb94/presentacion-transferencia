<template>
  <div class="slide-breakdown animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 06</span>
        <span class="category-tag">Conferencia 27 · págs. 399–401</span>
      </div>
      <h2 class="slide-title font-display">
        El Asombro Clínico: <span class="text-gold">La Irrupción de la Transferencia</span>
      </h2>
      <p class="slide-subtitle">
        «Creíamos haber racionalizado la situación como un problema aritmético; y hete aquí que se filtró algo imprevisto...»
      </p>
    </div>

    <!-- Epistemological Break Context -->
    <div class="break-context glass-panel">
      <div class="context-label font-display">LA FRACTURA DEL CÁLCULO RACIONAL (pág. 399)</div>
      <p class="context-body font-serif">
        Freud relata el desconcierto que vivieron los primeros psicoanalistas. Parecía que la técnica operaba con exactitud matemática: se buscaban recuerdos, se interpretaban resistencias y los síntomas cedían. De pronto, en todos los pacientes histéricos y obsesivos sin excepción, sobrevino un comportamiento anómalo que amenazaba con liquidar la terapia:
      </p>
    </div>

    <!-- The 2 Contrasting Stages -->
    <div class="stages-grid">
      <!-- Stage 1: The Honeymoon -->
      <div class="stage-card glass-panel honeymoon-card">
        <div class="stage-badge badge-green font-mono">ETAPA 1 · LA COLABORACIÓN IDÍLICA</div>
        <h3 class="stage-title font-serif">«La Primavera del Análisis»</h3>
        <ul class="stage-bullets">
          <li>
            <strong>Devoción personal:</strong> El paciente se muestra extraordinariamente obsequioso, dócil y agradecido hacia la persona del analista.
          </li>
          <li>
            <strong>Progreso asociativo:</strong> Asimila interpretaciones complejas con asombrosa lucidez y los síntomas remiten con rapidez visible.
          </li>
          <li>
            <strong>El eco familiar:</strong> Los parientes informan complacidos: <em>«Está entusiasmado con usted, todo lo que dice es para él como una revelación... no habla de otra cosa»</em>.
          </li>
        </ul>
        <div class="stage-footer">Parece un éxito rotundo, pero es el preludio de la tormenta clínica.</div>
      </div>

      <!-- Stage 2: The Crash -->
      <div class="stage-card glass-panel crash-card">
        <div class="stage-badge badge-red font-mono">ETAPA 2 · LA CRISIS REPENTINA</div>
        <h3 class="stage-title font-serif">«Un buen día se estropea...»</h3>
        <ul class="stage-bullets">
          <li>
            <strong>Parálisis y mutismo:</strong> El paciente asevera tajante que <em>«nada más se le ocurre»</em>, transgrediendo la regla fundamental de la asociación libre.
          </li>
          <li>
            <strong>Olvido de la enfermedad:</strong> Sus propios conflictos patológicos dejan de importarle; toda su atención se concentra en la persona y vida privada del médico.
          </li>
          <li>
            <strong>Violenta resistencia:</strong> Emerge una demanda amorosa vehemente, celos o una hostilidad suspicaz que detiene el trabajo.
          </li>
        </ul>
        <div class="stage-footer">El tratamiento se detiene frente a una barrera infranqueable.</div>
      </div>
    </div>

    <!-- The Freud Diagnostic Revelation -->
    <div class="revelation-box glass-panel">
      <div class="revelation-title font-display">EL DIAGNÓSTICO DE FREUD (pág. 400)</div>
      <p class="revelation-text font-serif">
        «El paciente ha transferido sobre el médico intensos sentimientos que ni la conducta de este ni la relación nacida de la cura justifican. Toda esa proclividad del afecto venía de otra parte, <strong>estaba ya preparada en el sujeto y con ocasión del análisis se transfirió sobre el médico</strong>.»
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
  font-style: italic;
}

.break-context {
  padding: 0.75rem 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--border-gold);
  margin-bottom: 0.8rem;
}

.context-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.15rem;
}

.context-body {
  font-size: 0.95rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.stages-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.stage-card {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.honeymoon-card {
  background: rgba(16, 185, 129, 0.04);
  border-top: 3px solid #10B981;
}

.crash-card {
  background: rgba(239, 68, 68, 0.04);
  border-top: 3px solid #EF4444;
}

.stage-badge {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  width: fit-content;
  margin-bottom: 0.5rem;
}

.badge-green { background: rgba(16, 185, 129, 0.2); color: #34D399; }
.badge-red { background: rgba(239, 68, 68, 0.2); color: #F87171; }

.stage-title {
  font-size: 1.3rem;
  color: #FFFFFF;
  margin-bottom: 0.6rem;
}

.stage-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex-grow: 1;
}

.stage-bullets li {
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.stage-bullets strong {
  color: #FFFFFF;
  display: block;
  margin-bottom: 0.1rem;
}

.stage-footer {
  font-size: 0.78rem;
  color: var(--text-dim);
  font-style: italic;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding-top: 0.4rem;
  margin-top: 0.6rem;
}

.revelation-box {
  padding: 0.85rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.revelation-title {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.revelation-text {
  font-size: 1rem;
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
