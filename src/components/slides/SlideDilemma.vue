<template>
  <div class="slide-dilemma animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 02</span>
        <span class="category-tag">Conferencia 27 · págs. 392–394</span>
      </div>
      <h2 class="slide-title font-display">
        El Dilema Terapéutico y los <span class="text-gold">Cuatro Límites</span>
      </h2>
      <p class="slide-subtitle">
        ¿Dónde hay espacio legítimo para una intervención terapéutica en la contracción de la neurosis?
      </p>
    </div>

    <!-- Clinical Context Banner -->
    <div class="context-banner glass-panel">
      <div class="context-tag font-display">EL PLANTEAMIENTO DE FREUD</div>
      <p class="context-desc font-serif">
        Al cierre de sus coloquios sobre la formación de síntomas, Freud anticipa la expectativa de sus oyentes: esperan un método curativo todopoderoso. Sin embargo, para evitar ilusiones falsas, somete a examen cuatro factores causales y delimita qué está fuera del alcance de la medicina anímica:
      </p>
    </div>

    <!-- 4 Refined Analytical Cards -->
    <div class="limits-grid">
      <div class="limit-card glass-panel">
        <div class="limit-top">
          <span class="limit-roman font-mono">I</span>
          <span class="limit-badge badge-gray">Factor Constitucional</span>
        </div>
        <h4 class="limit-heading font-serif">Disposición Hereditaria</h4>
        <p class="limit-text">
          Es el límite biológico e innato del sujeto. Freud reconoce sentir su enorme poder en cada paciente, pero constata con realismo que ninguna intervención psicológica puede alterar la carga hereditaria.
        </p>
      </div>

      <div class="limit-card glass-panel">
        <div class="limit-top">
          <span class="limit-roman font-mono">II</span>
          <span class="limit-badge badge-blue">Determinismo Histórico</span>
        </div>
        <h4 class="limit-heading font-serif">Vivencias Infantiles</h4>
        <p class="limit-text">
          Las huellas mnémicas tempranas son los cimientos del síntoma. Sin embargo, pertenecen al pasado consumado: ningún tratamiento puede retroceder en el tiempo para impedir que hayan acontecido.
        </p>
      </div>

      <div class="limit-card glass-panel">
        <div class="limit-top">
          <span class="limit-roman font-mono">III</span>
          <span class="limit-badge badge-purple">Realidad Externa</span>
        </div>
        <h4 class="limit-heading font-serif">Frustración Social y Pobreza</h4>
        <p class="limit-text">
          Desamparo material, infortunios matrimoniales y miseria. Freud ironiza: los médicos no son el emperador José II repartiendo favores milagrosos; el psicoanálisis no es beneficencia social.
        </p>
      </div>

      <div class="limit-card glass-panel">
        <div class="limit-top">
          <span class="limit-roman font-mono">IV</span>
          <span class="limit-badge badge-rose">Prejuicio Desmentido</span>
        </div>
        <h4 class="limit-heading font-serif">La Moral y el «Goce Sexual»</h4>
        <p class="limit-text">
          Freud refuta el falso reproche de que el análisis incita al libertinaje. En el neurótico se libra una batalla entre pulsión y represión; empujarlo al desenfreno no cura el conflicto interior.
        </p>
      </div>
    </div>

    <!-- The Technical Consequence -->
    <div class="consequence-box glass-panel">
      <div class="consequence-label font-display">LA VERDADERA TAREA DEL ANALISTA (pág. 395)</div>
      <p class="consequence-text font-serif">
        Rehusando convertirse en mentor moral, el analista opera sobre un único terreno: <strong>hacer consciente lo reprimido</strong> para que el paciente aprenda a <strong>autoconfesarse la verdad</strong> y adquiera la autonomía necesaria para resolver su conflicto vital.
      </p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-dilemma {
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

.context-banner {
  padding: 0.8rem 1.3rem;
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid var(--border-gold);
  margin-bottom: 1rem;
}

.context-tag {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.context-desc {
  font-size: 0.95rem;
  color: #CBD5E1;
  line-height: 1.45;
}

.limits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.1rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.limit-card {
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.limit-card:hover {
  transform: translateY(-3px);
  border-color: var(--gold-primary);
}

.limit-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.limit-roman {
  font-size: 1rem;
  font-weight: 800;
  color: var(--gold-primary);
}

.limit-badge {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  letter-spacing: 0.04em;
}

.badge-gray { background: rgba(148, 163, 184, 0.15); color: #CBD5E1; }
.badge-blue { background: rgba(59, 130, 246, 0.15); color: #93C5FD; }
.badge-purple { background: rgba(168, 85, 247, 0.15); color: #D8B4FE; }
.badge-rose { background: rgba(244, 63, 94, 0.15); color: #FDA4AF; }

.limit-heading {
  font-size: 1.15rem;
  color: #FFFFFF;
  margin-bottom: 0.4rem;
  line-height: 1.25;
}

.limit-text {
  font-size: 0.85rem;
  line-height: 1.45;
  color: #CBD5E1;
}

.consequence-box {
  padding: 0.9rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.consequence-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.2rem;
}

.consequence-text {
  font-size: 1rem;
  color: #F8FAFC;
  line-height: 1.4;
}

.consequence-text strong {
  color: var(--gold-light);
}

@media (max-width: 1024px) {
  .limits-grid {
    grid-template-columns: 1fr 1fr;
  }
  .slide-dilemma {
    padding: 1.5rem;
  }
}
</style>
