<template>
  <div class="slide-dilemma animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">01 · Punto de Partida</span>
        <span class="category-tag">Conferencia 27 · págs. 392–394</span>
      </div>
      <h2 class="slide-title font-display">
        ¿Por qué la Terapia no es <span class="text-gold">Magia?</span>
      </h2>
      <p class="slide-subtitle">
        Freud se pregunta: ¿Dónde puede intervenir realmente un tratamiento psicológico?
      </p>
    </div>

    <!-- 4 Clear Cards with Icons -->
    <div class="limits-grid">
      <div class="limit-card glass-panel">
        <div class="limit-header">
          <span class="limit-icon">🧬</span>
          <span class="limit-badge badge-gray">Inmodificable</span>
        </div>
        <h3 class="limit-title font-serif">1. La Genética y Herencia</h3>
        <p class="limit-desc">
          Viene de nacimiento. Es el límite biológico del cuerpo; ninguna palabra o terapia puede cambiar los genes.
        </p>
      </div>

      <div class="limit-card glass-panel">
        <div class="limit-header">
          <span class="limit-icon">👶</span>
          <span class="limit-badge badge-blue">Hecho Consumado</span>
        </div>
        <h3 class="limit-title font-serif">2. La Infancia Pasada</h3>
        <p class="limit-desc">
          Las vivencias traumáticas tempranas ya ocurrieron. No podemos viajar al pasado para hacer que no existieran.
        </p>
      </div>

      <div class="limit-card glass-panel">
        <div class="limit-header">
          <span class="limit-icon">🏚️</span>
          <span class="limit-badge badge-purple">Realidad Externa</span>
        </div>
        <h3 class="limit-title font-serif">3. La Pobreza o Mala Suerte</h3>
        <p class="limit-desc">
          El terapeuta no es un rey mago: no regala dinero, trabajo ni soluciona mágicamente los problemas económicos.
        </p>
      </div>

      <div class="limit-card glass-panel">
        <div class="limit-header">
          <span class="limit-icon">⚖️</span>
          <span class="limit-badge badge-rose">Falso Mito</span>
        </div>
        <h3 class="limit-title font-serif">4. El Mito del Sexo Libre</h3>
        <p class="limit-desc">
          El psicoanálisis <strong>NO</strong> receta libertinaje sexual ni actúa como guía moral. No le dice al paciente qué hacer con su vida.
        </p>
      </div>
    </div>

    <!-- The Punchy Conclusion in Plain Spanish -->
    <div class="conclusion-box glass-panel">
      <div class="conclusion-badge font-display">💡 ENTONCES, ¿EN QUÉ CONSISTE LA TERAPIA?</div>
      <p class="conclusion-text font-serif">
        La terapia no cambia el mundo exterior ni borra el pasado. Su único objetivo es <strong>hacer consciente lo reprimido</strong> para que el paciente aprenda a <strong>confesarse la verdad a sí mismo</strong> y tome decisiones libres y autónomas.
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
  margin-bottom: 1.2rem;
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

.limits-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin-bottom: 1.4rem;
}

.limit-card {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.limit-card:hover {
  transform: translateY(-3px);
  border-color: var(--gold-primary);
}

.limit-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
}

.limit-icon {
  font-size: 1.8rem;
}

.limit-badge {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
}

.badge-gray { background: rgba(148, 163, 184, 0.15); color: #CBD5E1; }
.badge-blue { background: rgba(59, 130, 246, 0.15); color: #93C5FD; }
.badge-purple { background: rgba(168, 85, 247, 0.15); color: #D8B4FE; }
.badge-rose { background: rgba(244, 63, 94, 0.15); color: #FDA4AF; }

.limit-title {
  font-size: 1.15rem;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  line-height: 1.25;
}

.limit-desc {
  font-size: 0.88rem;
  line-height: 1.45;
  color: #CBD5E1;
}

.limit-desc strong {
  color: var(--gold-light);
}

.conclusion-box {
  padding: 1.1rem 1.6rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.conclusion-badge {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.conclusion-text {
  font-size: 1.1rem;
  color: #F8FAFC;
  line-height: 1.45;
}

.conclusion-text strong {
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
