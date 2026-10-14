<template>
  <div class="slide-comparison animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">09 · El Límite de la Terapia</span>
        <span class="category-tag">Conferencia 27 · págs. 405–407</span>
      </div>
      <h2 class="slide-title font-display">
        ¿Por qué no Funciona con Todos? <span class="text-gold">Neurosis vs. Psicosis</span>
      </h2>
      <p class="slide-subtitle">
        Freud descubrió que el psicoanálisis cura ciertas enfermedades, pero fracasa totalmente en otras:
      </p>
    </div>

    <!-- The 2 Groups Side by Side -->
    <div class="groups-grid">
      <!-- Group 1: Neurosis de Transferencia (Sí se cura) -->
      <div class="group-card glass-panel group-yes">
        <div class="group-badge badge-green font-mono">✅ SÍ SE CURAN CON PSICOANÁLISIS</div>
        <h3 class="group-title font-serif">Neurosis Comunes</h3>
        <div class="group-sub">Histeria · Fobias · Neurosis Obsesiva</div>

        <ul class="group-points">
          <li><strong>Capacidad de amar/odiar:</strong> Su afecto está orientado hacia afuera (hacia otras personas).</li>
          <li><strong>Reacción ante el médico:</strong> Desarrollan transferencia viva (amor, rabia o respeto).</li>
          <li><strong>Resultado:</strong> El terapeuta tiene una palanca emocional para desarmar el síntoma.</li>
        </ul>
      </div>

      <!-- Group 2: Neurosis Narcisistas / Psicosis (No se cura con análisis clásico) -->
      <div class="group-card glass-panel group-no">
        <div class="group-badge badge-red font-mono">❌ NO FUNCIONA EL PSICOANÁLISIS</div>
        <h3 class="group-title font-serif">Neurosis Narcisistas (Psicosis)</h3>
        <div class="group-sub">Paranoia · Melancolía profunda · Esquizofrenia</div>

        <ul class="group-points">
          <li><strong>Afecto encerrado en sí mismos:</strong> Retiraron todo su interés del mundo exterior hacia su propio Yo.</li>
          <li><strong>Reacción ante el médico:</strong> Total indiferencia y frialdad; las palabras los dejan helados.</li>
          <li><strong>Resultado:</strong> Sin transferencia, no hay puente posible para curar.</li>
        </ul>
      </div>
    </div>

    <!-- Clarification of Freud's Epiphany -->
    <div class="freud-insight glass-panel">
      <div class="insight-badge font-display">💡 LA AGUDA OBSERVACIÓN DE FREUD:</div>
      <p class="insight-text font-serif">
        «¿Por qué no podemos curar al paranoico? <strong>No es por falta de inteligencia</strong>: los paranoicos son brillantes y sumamente sagaces. Y los melancólicos sufren horriblemente. Fracasamos porque <strong>un ser humano solo es accesible a la palabra si es capaz de amar o interesarse por alguien</strong>. Si su afecto está congelado en sí mismo, ninguna terapia puede entrar.» (pág. 405)
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

.groups-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.group-card {
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
}

.group-yes {
  border-top: 3px solid #10B981;
  background: rgba(16, 185, 129, 0.04);
}

.group-no {
  border-top: 3px solid #EF4444;
  background: rgba(239, 68, 68, 0.04);
}

.group-badge {
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  width: fit-content;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.badge-green { background: rgba(16, 185, 129, 0.2); color: #34D399; }
.badge-red { background: rgba(239, 68, 68, 0.2); color: #F87171; }

.group-title {
  font-size: 1.35rem;
  color: #FFFFFF;
  margin-bottom: 0.2rem;
}

.group-sub {
  font-size: 0.85rem;
  color: var(--gold-light);
  margin-bottom: 0.8rem;
  font-style: italic;
}

.group-points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.group-points strong {
  color: #FFFFFF;
}

.freud-insight {
  padding: 1rem 1.6rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.insight-badge {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.insight-text {
  font-size: 1.05rem;
  color: #F8FAFC;
  line-height: 1.45;
}

.insight-text strong {
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
