<template>
  <div class="slide-comparison animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 10</span>
        <span class="category-tag">Conferencia 27 · págs. 405–407</span>
      </div>
      <h2 class="slide-title font-display">
        El Límite Económico: <span class="text-gold">Neurosis de Transferencia vs. Narcisistas</span>
      </h2>
      <p class="slide-subtitle">
        El criterio de Freud para delimitar la accesibilidad y los límites del tratamiento psicoanalítico
      </p>
    </div>

    <!-- Nosological Context Banner -->
    <div class="context-banner glass-panel">
      <div class="context-tag font-display">EL CRITERIO ECONÓMICO DE CURABILIDAD</div>
      <p class="context-desc font-serif">
        Con rigor y honestidad científica, Freud delimita ante su auditorio las fronteras de la clínica analítica en 1916. La curabilidad de un cuadro no depende de los síntomas superficiales, sino del destino que el sujeto otorga a su energía afectiva (la libido):
      </p>
    </div>

    <!-- The 2 Nosological Groups -->
    <div class="groups-grid">
      <!-- Group 1: Accessible -->
      <div class="group-card glass-panel group-accessible">
        <div class="group-badge badge-green font-mono">ACCESIBLES AL MÉTODO ANALÍTICO</div>
        <h4 class="group-title font-serif">Neurosis de Transferencia</h4>
        <div class="entities-box">
          <span class="entities-label font-mono">CUADROS CLÍNICOS:</span>
          <span class="group-entities">Histeria de Conversión · Fobia (Histeria de Angustia) · Neurosis Obsesiva</span>
        </div>

        <ul class="group-bullets">
          <li>
            <strong>Economía Libidinal:</strong> Conservan la <em>libido de objeto</em>: son capaces de dirigir su afecto hacia personas del mundo exterior.
          </li>
          <li>
            <strong>Vínculo con el médico:</strong> Desarrollan una transferencia viva (positiva o negativa) y prestan creencia a la palabra analítica.
          </li>
          <li>
            <strong>Pronóstico:</strong> Plenamente curables mediante el desmontaje de resistencias.
          </li>
        </ul>
      </div>

      <!-- Group 2: Inaccessible -->
      <div class="group-card glass-panel group-inaccessible">
        <div class="group-badge badge-red font-mono">INACCESIBLES AL ANÁLISIS CLÁSICO</div>
        <h4 class="group-title font-serif">Neurosis Narcisistas (Psicosis)</h4>
        <div class="entities-box">
          <span class="entities-label font-mono">CUADROS CLÍNICOS:</span>
          <span class="group-entities">Paranoia · Melancolía Profunda · Demencia Precoz (Esquizofrenia)</span>
        </div>

        <ul class="group-bullets">
          <li>
            <strong>Economía Libidinal:</strong> La libido de objeto ha sido retirada y replegada sobre el propio Yo (<em>libido yoica / narcisismo</em>).
          </li>
          <li>
            <strong>Vínculo con el médico:</strong> Acogen las interpretaciones con indiferencia y desapego glacial; no establecen transferencia alguna.
          </li>
          <li>
            <strong>Pronóstico:</strong> Inmunes al método analítico por falta de asidero transferencial.
          </li>
        </ul>
      </div>
    </div>

    <!-- The Epistemological Epiphany -->
    <div class="epiphany-footer glass-panel">
      <div class="epiphany-tag font-display">LA AGUDA OBSERVACIÓN DE FREUD (págs. 405–406)</div>
      <p class="epiphany-text font-serif">
        «¿A qué se debe este fracaso? <strong>No a falta de inteligencia</strong>: los paranoicos son hombres sagaces y combinatorios. Y los melancólicos sufren con plena conciencia de su dolor. Fracasamos porque <strong>un ser humano sólo es accesible desde su costado intelectual en la medida en que es capaz de investir libidinosamente objetos</strong>; y tememos en la magnitud de su narcisismo una barrera contra la posibilidad de influirlo.»
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-comparison {
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

.groups-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.3rem;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.group-card {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.group-accessible {
  border-top: 3px solid #10B981;
  background: rgba(16, 185, 129, 0.04);
}

.group-inaccessible {
  border-top: 3px solid #EF4444;
  background: rgba(239, 68, 68, 0.04);
}

.group-badge {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  width: fit-content;
  letter-spacing: 0.05em;
  margin-bottom: 0.4rem;
}

.badge-green { background: rgba(16, 185, 129, 0.2); color: #34D399; }
.badge-red { background: rgba(239, 68, 68, 0.2); color: #F87171; }

.group-title {
  font-size: 1.3rem;
  color: #FFFFFF;
  margin-bottom: 0.2rem;
}

.entities-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  padding: 0.3rem 0.6rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-sm);
  border-left: 2px solid var(--gold-primary);
}

.entities-label {
  font-size: 0.65rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.06em;
  flex-shrink: 0;
}

.group-entities {
  font-size: 0.82rem;
  color: #E2E8F0;
  font-style: italic;
}

.group-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.group-bullets strong {
  color: #FFFFFF;
}

.epiphany-footer {
  padding: 0.85rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.epiphany-tag {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.epiphany-text {
  font-size: 0.98rem;
  color: #F8FAFC;
  line-height: 1.45;
}

.epiphany-text strong {
  color: var(--gold-light);
}

@media (max-width: 1024px) {
  .groups-grid {
    grid-template-columns: 1fr;
  }
  .slide-comparison {
    padding: 1.5rem;
  }
}
</style>
