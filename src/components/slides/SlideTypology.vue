<template>
  <div class="slide-typology animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">06 · Clasificación Clínica</span>
        <span class="category-tag">Conferencia 27 · págs. 401–403</span>
      </div>
      <h2 class="slide-title font-display">
        Las 3 Caras de la <span class="text-gold">Transferencia</span>
      </h2>
      <p class="slide-subtitle">
        El afecto del paciente hacia el terapeuta adopta tres formas muy distintas:
      </p>
    </div>

    <!-- 3 Simple Type Cards -->
    <div class="types-grid">
      <!-- Type 1: Tierna / Sublimada -->
      <div class="type-card glass-panel type-tender">
        <div class="type-header">
          <span class="type-icon">🤝</span>
          <span class="type-badge badge-green">EL MOTOR DE LA CURA</span>
        </div>
        <h3 class="type-title font-serif">1. Afecto de Confianza</h3>
        <p class="type-desc font-serif">«Transferencia Positiva Tierna»</p>
        <ul class="type-traits">
          <li><strong>Qué siente:</strong> Cariño sincero, respeto, admiración intelectual y simpatía.</li>
          <li><strong>Efecto en la sesión:</strong> El paciente confía, escucha las interpretaciones y avanza con ganas.</li>
          <li><strong>Veredicto:</strong> Es la mejor aliada del tratamiento.</li>
        </ul>
      </div>

      <!-- Type 2: Erótica / Pasional -->
      <div class="type-card glass-panel type-erotic">
        <div class="type-header">
          <span class="type-icon">🔥</span>
          <span class="type-badge badge-red">PELIGRO / RESISTENCIA</span>
        </div>
        <h3 class="type-title font-serif">2. Enamoramiento Ciego</h3>
        <p class="type-desc font-serif">«Transferencia Positiva Erótica»</p>
        <ul class="type-traits">
          <li><strong>Qué siente:</strong> Pasión desbordada, reclamos de amor carnal, celos y exigencia de exclusividad.</li>
          <li><strong>Efecto en la sesión:</strong> Ya no le interesa curarse; solo busca ser amado/a por el médico.</li>
          <li><strong>Veredicto:</strong> Se convierte en la peor resistencia.</li>
        </ul>
      </div>

      <!-- Type 3: Negativa / Hostil -->
      <div class="type-card glass-panel type-hostile">
        <div class="type-header">
          <span class="type-icon">⚡</span>
          <span class="type-badge badge-amber">REBELDÍA / SUSPICACIA</span>
        </div>
        <h3 class="type-title font-serif">3. Hostilidad y Desacato</h3>
        <p class="type-desc font-serif">«Transferencia Negativa»</p>
        <ul class="type-traits">
          <li><strong>Qué siente:</strong> Encono, reproches, desconfianza continua y ganas de desobedecer las reglas.</li>
          <li><strong>Efecto en la sesión:</strong> Pone en duda todo lo que dice el terapeuta.</li>
          <li><strong>Veredicto:</strong> Refleja la ambivalencia (el odio es amor reprimido).</li>
        </ul>
      </div>
    </div>

    <!-- Takeaway in 1 Line -->
    <div class="gender-note glass-panel">
      <span class="note-icon">💡</span>
      <span class="note-text font-serif">
        <strong>Regla de Freud:</strong> El paciente no se enamora ni se enfurece por cómo es el terapeuta en la vida real. Está repitiendo en el diván el mismo patrón de amor u odio con el que se vinculó con sus padres en la niñez.
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

.types-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
  margin-bottom: 1rem;
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
  margin-bottom: 0.6rem;
}

.type-icon {
  font-size: 1.8rem;
}

.type-badge {
  font-size: 0.68rem;
  font-weight: 800;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  letter-spacing: 0.06em;
}

.badge-green { background: rgba(16, 185, 129, 0.2); color: #34D399; }
.badge-red { background: rgba(239, 68, 68, 0.2); color: #F87171; }
.badge-amber { background: rgba(245, 158, 11, 0.2); color: #FBBF24; }

.type-title {
  font-size: 1.25rem;
  color: #FFFFFF;
  margin-bottom: 0.2rem;
}

.type-desc {
  font-size: 0.85rem;
  color: var(--gold-light);
  font-style: italic;
  margin-bottom: 0.8rem;
}

.type-traits {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.type-traits strong {
  color: #FFFFFF;
}

.gender-note {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1.4rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 3px solid var(--gold-primary);
  margin-top: auto;
}

.note-icon {
  font-size: 1.2rem;
  flex-shrink: 0;
}

.note-text {
  font-size: 0.95rem;
  color: #F8FAFC;
  line-height: 1.4;
}

.note-text strong {
  color: var(--gold-light);
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
