<template>
  <div class="slide-neurosis-limits animate-fade-in">
    <!-- Header -->
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Diapositiva 03</span>
        <span class="category-tag">Conferencia 27 · págs. 392–395, 404–406</span>
      </div>
      <h2 class="slide-title font-display">
        Factores Determinantes de la Neurosis y <span class="text-rose">Límites de la Terapia</span>
      </h2>
      <p class="slide-subtitle">
        Dónde hay espacio legítimo para la intervención terapéutica según la distribución de la libido
      </p>
    </div>

    <!-- Nosological Distinction: Transferencia vs Narcisistas -->
    <div class="neurosis-comparison-grid">
      <!-- Neurosis de Transferencia -->
      <div class="neurosis-card card-transfer glass-panel">
        <div class="card-top-tag">
          <span class="badge-tag badge-sage font-mono">TERRENO OPERABLE</span>
          <span class="card-icon">🗝️</span>
        </div>
        <h3 class="card-title font-serif">Neurosis de Transferencia</h3>
        <div class="clinical-examples font-mono">Histeria · Neurosis de Angustia · Neurosis Obsesiva</div>
        <p class="card-description">
          Permiten el <strong>trabajo transferencial</strong> y la <strong>nueva configuración de los conflictos</strong> que aparecen dentro del tratamiento, ya que la libido conserva su capacidad de proyectarse hacia objetos exteriores (el médico).
        </p>
      </div>

      <!-- Neurosis Narcisistas -->
      <div class="neurosis-card card-narcissistic glass-panel">
        <div class="card-top-tag">
          <span class="badge-tag badge-amber font-mono">LÍMITE CLÍNICO</span>
          <span class="card-icon">🪞</span>
        </div>
        <h3 class="card-title font-serif">Neurosis Narcisistas</h3>
        <div class="clinical-examples font-mono">Paranoia · Melancolía · Demencia Precoz</div>
        <p class="card-description">
          Afecciones en las que se considera que <strong>predomina la libido dirigida hacia el propio Yo</strong>. Al no investir al médico ni proyectar afectos sobre él, se <strong>dificulta o imposibilita</strong> el establecimiento de la transferencia.
        </p>
      </div>
    </div>

    <!-- Transition Callout -->
    <div class="transition-callout glass-panel">
      <span class="callout-symbol font-serif">«</span>
      <p class="callout-text font-serif">
        El psicoanálisis reconoce diferentes factores en el origen de la enfermedad, determinando claramente <strong>en cuáles se puede intervenir y en cuáles no</strong>:
      </p>
    </div>

    <!-- The 4 Analytical Limits Cards (Card I, II, III, IV) -->
    <div class="limits-four-grid">
      <!-- Card I -->
      <div class="limit-box glass-panel">
        <div class="limit-header">
          <span class="limit-num font-mono">I</span>
          <span class="limit-chip badge-rose font-mono">FACTOR CONSTITUCIONAL</span>
        </div>
        <h4 class="limit-name font-serif">Disposición Hereditaria</h4>
        <p class="limit-body">
          Es el <strong>límite biológico e innato</strong> del sujeto. Freud reconoce sentir su enorme poder en cada paciente, pero constata con realismo que <strong>ninguna intervención psicológica puede alterar la carga hereditaria</strong>.
        </p>
      </div>

      <!-- Card II -->
      <div class="limit-box glass-panel">
        <div class="limit-header">
          <span class="limit-num font-mono">II</span>
          <span class="limit-chip badge-lavender font-mono">DETERMINISMO HISTÓRICO</span>
        </div>
        <h4 class="limit-name font-serif">Vivencias Infantiles</h4>
        <p class="limit-body">
          Las <strong>huellas mnémicas tempranas</strong> son los cimientos del síntoma. Sin embargo, pertenecen al pasado consumado: <strong>ningún tratamiento puede retroceder en el tiempo</strong> para impedir que hayan acontecido.
        </p>
      </div>

      <!-- Card III -->
      <div class="limit-box glass-panel">
        <div class="limit-header">
          <span class="limit-num font-mono">III</span>
          <span class="limit-chip badge-amber font-mono">REALIDAD EXTERNA</span>
        </div>
        <h4 class="limit-name font-serif">Frustración Social y Pobreza</h4>
        <p class="limit-body">
          Desamparo material, infortunios matrimoniales y miseria. Freud ironiza: los médicos <strong>no son el emperador José II</strong> repartiendo favores milagrosos; <strong>el psicoanálisis no es beneficencia social</strong>.
        </p>
      </div>

      <!-- Card IV -->
      <div class="limit-box glass-panel">
        <div class="limit-header">
          <span class="limit-num font-mono">IV</span>
          <span class="limit-chip badge-sage font-mono">PREJUICIO DESMENTIDO</span>
        </div>
        <h4 class="limit-name font-serif">La Moral y el «Goce Sexual»</h4>
        <p class="limit-body">
          Freud refuta el falso reproche de que el análisis incita al libertinaje. En el neurótico se libra una <strong>batalla entre pulsión y represión</strong>; empujarlo al desenfreno no cura el conflicto interior.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.slide-neurosis-limits {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3.5rem;
  overflow-y: auto;
  gap: 0.9rem;
  box-sizing: border-box;
}

.slide-header {
  margin-bottom: 0.1rem;
}

.header-badge-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.35rem;
}

.category-tag {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--text-dim);
}

.slide-title {
  font-size: 2.15rem;
  color: var(--wine-deep);
  font-weight: 800;
  line-height: 1.15;
}

.slide-subtitle {
  font-size: 1.05rem;
  color: var(--text-muted);
  font-family: var(--font-serif);
  font-style: italic;
  margin-top: 0.2rem;
}

/* Comparison Grid */
.neurosis-comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}

.neurosis-card {
  padding: 1.1rem 1.4rem;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  background: rgba(255, 255, 255, 0.92);
}

.card-transfer {
  border-left: 4px solid var(--accent-sage);
}

.card-narcissistic {
  border-left: 4px solid var(--accent-amber);
}

.card-top-tag {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.badge-tag {
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
}

.badge-sage {
  background: var(--accent-sage-bg);
  color: var(--accent-sage);
}

.badge-amber {
  background: var(--accent-amber-bg);
  color: var(--accent-amber);
}

.badge-rose {
  background: var(--rose-light);
  color: var(--rose-primary);
}

.badge-lavender {
  background: var(--accent-lavender-bg);
  color: var(--accent-lavender);
}

.card-icon {
  font-size: 1.1rem;
}

.card-title {
  font-size: 1.3rem;
  color: var(--wine-deep);
  font-weight: 700;
}

.clinical-examples {
  font-size: 0.76rem;
  color: var(--text-dim);
  letter-spacing: 0.02em;
}

.card-description {
  font-size: 0.92rem;
  line-height: 1.45;
  color: var(--text-main);
  margin-top: 0.15rem;
}

/* Transition Callout */
.transition-callout {
  padding: 0.65rem 1.2rem;
  background: linear-gradient(135deg, rgba(253, 238, 243, 0.7) 0%, rgba(255, 255, 255, 0.9) 100%);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border: 1px solid var(--border-rose);
}

.callout-symbol {
  font-size: 1.8rem;
  color: var(--rose-primary);
  line-height: 1;
}

.callout-text {
  font-size: 1rem;
  color: var(--wine-deep);
  line-height: 1.35;
}

/* 4 Limits Cards Grid */
.limits-four-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.95rem;
  flex: 1;
}

.limit-box {
  padding: 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: var(--radius-md);
  border: 1px solid rgba(184, 58, 100, 0.14);
  transition: all 0.25s ease;
}

.limit-box:hover {
  transform: translateY(-2px);
  border-color: var(--border-rose-glow);
  box-shadow: var(--shadow-card);
}

.limit-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.limit-num {
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--rose-primary);
}

.limit-chip {
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
}

.limit-name {
  font-size: 1.08rem;
  font-weight: 700;
  color: var(--wine-deep);
  margin-bottom: 0.45rem;
  line-height: 1.25;
}

.limit-body {
  font-size: 0.84rem;
  line-height: 1.45;
  color: var(--text-main);
  flex: 1;
}
</style>
