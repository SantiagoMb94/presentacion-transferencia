<template>
  <div class="slide-suggestion animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 11</span>
        <span class="category-tag">Conferencia 27 · págs. 405–406</span>
      </div>
      <h2 class="slide-title font-display">
        La Polémica Epistemológica: <span class="text-gold">Psicoanálisis vs. Sugestión</span>
      </h2>
      <p class="slide-subtitle">
        La réplica de Sigmund Freud a la objeción incisiva de la comunidad médica
      </p>
    </div>

    <!-- The Provocative Medical Objection -->
    <div class="objection-card glass-panel">
      <div class="objection-label font-display">LA ACUSACIÓN DEL AUDITORIO (pág. 406)</div>
      <p class="objection-quote font-serif">
        «¿Conque ha admitido finalmente que trabaja con el poder auxiliar de la sugestión como los hipnotizadores? Hace tiempo que lo sospechábamos. Pero entonces, <strong>¿para qué todo el rodeo por los recuerdos del pasado, el inconsciente y las interpretaciones si lo único eficaz sigue siendo la sugestión?</strong> ¿Por qué no aplica sugestión directa contra los síntomas como los hipnotizadores honestos?»
      </p>
    </div>

    <!-- Rigorous Comparative Matrix -->
    <div class="methods-grid">
      <!-- Method 1: Hypnosis -->
      <div class="method-card glass-panel method-hypnosis">
        <div class="method-header">
          <span class="method-roman font-mono">A</span>
          <div>
            <h4 class="method-title font-serif">Hipnosis Tradicional (Bernheim)</h4>
            <span class="method-sub">La sugestión autoritaria directa</span>
          </div>
        </div>
        <ul class="method-points">
          <li>
            <strong>Mecanismo de acción:</strong> Ordena al síntoma desaparecer mediante el mandato vertical del médico (<em>«¡Usted ya no tiene dolor!»</em>).
          </li>
          <li>
            <strong>Destino de la represión:</strong> Deja la causa inconsciente intacta; el síntoma migra o reaparece al desvanecerse el influjo del hipnotizador.
          </li>
          <li>
            <strong>Vínculo subjetivo:</strong> Mantiene al paciente en una sumisión infantil y dependencia perpetua del médico.
          </li>
        </ul>
      </div>

      <!-- Method 2: Psychoanalysis -->
      <div class="method-card glass-panel method-analysis">
        <div class="method-header">
          <span class="method-roman font-mono">B</span>
          <div>
            <h4 class="method-title font-serif">Terapia Psicoanalítica (Freud)</h4>
            <span class="method-sub">La sugestión transferencial como palanca de autonomía</span>
          </div>
        </div>
        <ul class="method-points">
          <li>
            <strong>Mecanismo de acción:</strong> Descubre que la sugestión proviene de la <em>libido de objeto</em>; no prohíbe el síntoma, sino que busca su raíz histórica.
          </li>
          <li>
            <strong>Destino de la represión:</strong> Vence la resistencia del Yo, eleva lo reprimido a la conciencia y resuelve el conflicto en su origen.
          </li>
          <li>
            <strong>Vínculo subjetivo:</strong> Disuelve la transferencia al término de la cura: el médico se retira y el sujeto adquiere plena libertad.
          </li>
        </ul>
      </div>
    </div>

    <!-- Epistemological Synthesis -->
    <div class="epilogue-box glass-panel">
      <span class="epilogue-label font-display">LA RESPUESTA CULMINANTE DE FREUD (pág. 406):</span>
      <p class="epilogue-text font-serif">
        «Hemos abandonado la hipnosis en nuestra técnica sólo para <strong>redescubrir la sugestión bajo la forma de la trasferencia</strong>... pero con una diferencia decisiva: no la usamos para imponer nuestra voluntad al enfermo, sino para obligar al Yo a librar la batalla decisiva que cancele sus represiones.»
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-suggestion {
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

.objection-card {
  padding: 0.85rem 1.3rem;
  background: rgba(239, 68, 68, 0.05);
  border-left: 3px solid #EF4444;
  margin-bottom: 0.8rem;
}

.objection-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: #F87171;
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
}

.objection-quote {
  font-size: 0.98rem;
  font-style: italic;
  color: #FEE2E2;
  line-height: 1.45;
}

.objection-quote strong {
  color: #FFFFFF;
}

.methods-grid {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 1.3rem;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.method-card {
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.method-hypnosis {
  border-top: 3px solid #64748B;
  background: rgba(15, 23, 42, 0.5);
}

.method-analysis {
  border-top: 3px solid var(--gold-primary);
  background: rgba(212, 175, 55, 0.05);
}

.method-header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.6rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.method-roman {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: var(--gold-light);
  font-size: 0.8rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.method-title {
  font-size: 1.2rem;
  color: #FFFFFF;
}

.method-sub {
  font-size: 0.75rem;
  color: var(--gold-light);
}

.method-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.method-points strong {
  color: #FFFFFF;
}

.epilogue-box {
  padding: 0.85rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.epilogue-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.epilogue-text {
  font-size: 0.98rem;
  color: #F8FAFC;
  line-height: 1.4;
}

.epilogue-text strong {
  color: var(--gold-light);
}

@media (max-width: 1024px) {
  .methods-grid {
    grid-template-columns: 1fr;
  }
  .slide-suggestion {
    padding: 1.5rem;
  }
}
</style>
