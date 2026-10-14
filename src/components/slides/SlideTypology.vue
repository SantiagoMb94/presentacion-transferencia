<template>
  <div class="slide-typology animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 07</span>
        <span class="category-tag">Conferencia 27 · págs. 401–403</span>
      </div>
      <h2 class="slide-title font-display">
        Las Tres Modalidades de la <span class="text-gold">Transferencia</span>
      </h2>
      <p class="slide-subtitle">
        La investidura afectiva proyectada sobre el analista se manifiesta bajo tres formas clínicas:
      </p>
    </div>

    <!-- Context Banner -->
    <div class="context-banner glass-panel">
      <div class="context-label font-display">LA DIFERENCIACIÓN CLÍNICA DE FREUD</div>
      <p class="context-text font-serif">
        Freud advierte que la transferencia no es un fenómeno uniforme. Los componentes de la libido infantil pueden arribar a la sesión bajo ropajes sublimes de amistad, pasiones amorosas desbordadas o rebeliones hostiles:
      </p>
    </div>

    <!-- 3 Refined Analytical Cards -->
    <div class="types-grid">
      <!-- Type 1: Tierna / Sublimada -->
      <div class="type-card glass-panel type-tender">
        <div class="type-header">
          <span class="type-roman font-mono">I</span>
          <span class="type-badge badge-green font-mono">MOTOR DE LA CURA</span>
        </div>
        <h4 class="type-title font-serif">Positiva Tierna (Sublimada)</h4>
        <div class="type-sub">Componentes libidinales atenuados</div>
        <ul class="type-points">
          <li><strong>Manifestación:</strong> Sentimientos de estima, respeto intelectual, confianza y amistad idealizada.</li>
          <li><strong>Efecto clínico:</strong> Presta al analista la autoridad necesaria para que sus interpretaciones sean asimiladas.</li>
          <li><strong>Rol en la cura:</strong> Es la gran aliada del tratamiento mientras no degenere en pasión ciega.</li>
        </ul>
      </div>

      <!-- Type 2: Erótica / Pasional -->
      <div class="type-card glass-panel type-erotic">
        <div class="type-header">
          <span class="type-roman font-mono">II</span>
          <span class="type-badge badge-red font-mono">RESISTENCIA SEVERA</span>
        </div>
        <h4 class="type-title font-serif">Positiva Erótica (Pasional)</h4>
        <div class="type-sub">Demanda amorosa no desexualizada</div>
        <ul class="type-points">
          <li><strong>Manifestación:</strong> Reclamos vehementes de correspondencia amorosa, celos y exigencia de exclusividad.</li>
          <li><strong>Efecto clínico:</strong> El paciente renuncia al interés por sus síntomas y pretende convertir la cura en romance.</li>
          <li><strong>Rol en la cura:</strong> Una de las mayores amenazas; sustituye el trabajo de recordar por el reclamo en acto.</li>
        </ul>
      </div>

      <!-- Type 3: Negativa / Hostil -->
      <div class="type-card glass-panel type-hostile">
        <div class="type-header">
          <span class="type-roman font-mono">III</span>
          <span class="type-badge badge-amber font-mono">AMBIVALENCIA AFECTIVA</span>
        </div>
        <h4 class="type-title font-serif">Negativa (Hostil)</h4>
        <div class="type-sub">Sentimientos de desacato y desconfianza</div>
        <ul class="type-points">
          <li><strong>Manifestación:</strong> Suspicacia, encono, reproches constantes y rebelión contra las reglas del encuadre.</li>
          <li><strong>Efecto clínico:</strong> El desacato manifiesta la misma dependencia psíquica que la sumisión, pero de signo invertido.</li>
          <li><strong>Rol en la cura:</strong> Refleja la ambivalencia primordial: el odio y el amor coexisten hacia el mismo objeto.</li>
        </ul>
      </div>
    </div>

    <!-- Takeaway in Context -->
    <div class="typology-footer glass-panel">
      <span class="footer-label font-display">UNIVERSALIDAD DEL FENÓMENO (pág. 402):</span>
      <span class="footer-desc font-serif">
        La transferencia no depende del atractivo físico ni de la edad del médico: se repite idéntica con ancianos, jóvenes, hombres y mujeres. Esto demuestra con rigor científico que su fuerza proviene de las fijaciones arcaicas del propio paciente.
      </span>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-typology {
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

.context-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.15rem;
}

.context-text {
  font-size: 0.95rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.types-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-bottom: 0.8rem;
  flex-grow: 1;
}

.type-card {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  transition: transform 0.2s ease;
}

.type-card:hover {
  transform: translateY(-3px);
}

.type-tender { border-top: 3px solid #10B981; background: rgba(16, 185, 129, 0.04); }
.type-erotic { border-top: 3px solid #EF4444; background: rgba(239, 68, 68, 0.04); }
.type-hostile { border-top: 3px solid #F59E0B; background: rgba(245, 158, 11, 0.04); }

.type-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.type-roman {
  font-size: 1rem;
  font-weight: 800;
  color: var(--gold-primary);
}

.type-badge {
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  letter-spacing: 0.05em;
}

.badge-green { background: rgba(16, 185, 129, 0.2); color: #34D399; }
.badge-red { background: rgba(239, 68, 68, 0.2); color: #F87171; }
.badge-amber { background: rgba(245, 158, 11, 0.2); color: #FBBF24; }

.type-title {
  font-size: 1.2rem;
  color: #FFFFFF;
  margin-bottom: 0.15rem;
}

.type-sub {
  font-size: 0.8rem;
  color: var(--gold-light);
  font-style: italic;
  margin-bottom: 0.7rem;
}

.type-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.type-points strong {
  color: #FFFFFF;
}

.typology-footer {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.footer-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  flex-shrink: 0;
}

.footer-desc {
  font-size: 0.92rem;
  color: #F8FAFC;
  line-height: 1.4;
}

@media (max-width: 1024px) {
  .types-grid {
    grid-template-columns: 1fr;
  }
  .slide-typology {
    padding: 1.5rem;
  }
}
</style>
