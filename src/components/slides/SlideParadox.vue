<template>
  <div class="slide-paradox animate-fade-in">
    <div class="slide-header">
      <div class="header-badge-row">
        <span class="glass-pill">Conferencia 27 · pág. 403</span>
        <span class="category-tag">Regla Técnica de Oro</span>
      </div>
      <h2 class="slide-title font-display">
        La Gran Paradoja y el <span class="text-gold">Manejo Técnico</span>
      </h2>
      <p class="slide-subtitle">
        ¿Cómo se transforma la más poderosa amenaza para la cura en su instrumento insuperable?
      </p>
    </div>

    <!-- The Two False Exits -->
    <div class="false-exits-row">
      <div class="exit-card glass-panel error-exit">
        <div class="exit-header">
          <span class="cross-icon">✕</span>
          <span class="exit-label">Error Técnico 1 · El Abandono Ético</span>
        </div>
        <h4 class="exit-title font-serif">Ceder a las Demandas</h4>
        <p class="exit-desc">
          «Queda excluido ceder a las demandas del paciente derivadas de su trasferencia...» Ceder consumaría una satisfacción sustitutiva incestuosa o acting out que liquidaría la cura analítica.
        </p>
      </div>

      <div class="exit-card glass-panel error-exit">
        <div class="exit-header">
          <span class="cross-icon">✕</span>
          <span class="exit-label">Error Técnico 2 · La Reacción Moral</span>
        </div>
        <h4 class="exit-title font-serif">Rechazo con Indignación</h4>
        <p class="exit-desc">
          «...y sería absurdo rechazarlas inamistosamente o con indignación.» El rechazo moralista repite traumáticamente la censura y la frialdad de las figuras parentales represoras.
        </p>
      </div>
    </div>

    <!-- The Core Analytic Operation: Mudar la repetición en recuerdo -->
    <div class="solution-hero glass-panel">
      <div class="solution-content">
        <div class="solution-badge font-display">EL GIRO TÉCNICO MAGISTRAL</div>
        <h3 class="solution-title font-serif">
          «Mudar la Repetición en Recuerdo»
        </h3>
        <p class="solution-explanation font-serif">
          Superamos la transferencia cuando demostramos pacientemente al enfermo que sus intensos sentimientos <strong>no provienen de la situación presente y no valen para la persona del médico</strong>, sino que repiten ciegamente vivencias, frustraciones y deseos de su infancia remota.
        </p>

        <div class="interactive-transformation">
          <div class="trans-box threat-box" :class="{ muted: transformed }">
            <span class="trans-state">EN APARIENCIA</span>
            <div class="trans-title">La Mayor Amenaza</div>
            <p>Resistencia violenta, rebelión erótica u hostilidad que paraliza el análisis.</p>
          </div>

          <button class="transform-btn" @click="transformed = !transformed">
            <span>{{ transformed ? '↺ Reiniciar Enigma' : '⚡ Operar Interpretación' }}</span>
          </button>

          <div class="trans-box tool-box" :class="{ active: transformed }">
            <span class="trans-state">EN LA CLÍNICA</span>
            <div class="trans-title">El Mejor Instrumento</div>
            <p>Hacer visible en vivo la pulsión reprimida para desarticular el síntoma.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- The Grand Freud Quote -->
    <div class="climax-quote glass-panel">
      <p class="quote-italic font-serif">
        «Y entonces la trasferencia, que en cualquier caso parecía significar la más poderosa amenaza para la cura, se convierte en el <strong>mejor instrumento de ella</strong>, con cuya ayuda pueden desplegarse los más cerrados abanicos de la vida anímica.» (Freud, pág. 403)
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { playSuccessChime } from '../../utils/sound.js';

const transformed = ref(false);

function triggerTransform() {
  transformed.value = !transformed.value;
  if (transformed.value) {
    playSuccessChime();
  }
}
</script>

<style scoped>
.slide-paradox {
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
  font-size: clamp(1.8rem, 2.5vw, 2.3rem);
  font-weight: 800;
  color: #FFFFFF;
}

.slide-subtitle {
  font-size: 1rem;
  color: var(--text-muted);
}

.false-exits-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  margin-bottom: 1rem;
}

.error-exit {
  padding: 1rem 1.2rem;
  border-left: 3px solid var(--accent-crimson);
  background: rgba(239, 68, 68, 0.04);
}

.exit-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.3rem;
}

.cross-icon {
  color: #F87171;
  font-weight: 800;
  font-size: 1rem;
}

.exit-label {
  font-size: 0.72rem;
  font-weight: 800;
  color: #F87171;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.exit-title {
  font-size: 1.2rem;
  color: #FFFFFF;
  margin-bottom: 0.3rem;
}

.exit-desc {
  font-size: 0.85rem;
  color: #CBD5E1;
  line-height: 1.4;
}

.solution-hero {
  padding: 1.3rem 1.6rem;
  border: 1px solid var(--border-gold);
  background: linear-gradient(180deg, rgba(212, 175, 55, 0.07) 0%, rgba(15, 23, 42, 0.6) 100%);
  margin-bottom: 0.8rem;
}

.solution-badge {
  font-size: 0.78rem;
  font-weight: 800;
  color: var(--gold-primary);
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.solution-title {
  font-size: 1.6rem;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
}

.solution-explanation {
  font-size: 1.05rem;
  color: #E2E8F0;
  line-height: 1.45;
  margin-bottom: 1rem;
  max-width: 950px;
}

.interactive-transformation {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}

.trans-box {
  flex: 1;
  padding: 0.8rem 1rem;
  border-radius: var(--radius-sm);
  transition: all 0.3s ease;
}

.threat-box {
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.3);
}

.threat-box.muted {
  opacity: 0.45;
  filter: grayscale(0.6);
}

.tool-box {
  background: rgba(212, 175, 55, 0.1);
  border: 1px solid rgba(212, 175, 55, 0.25);
  opacity: 0.5;
  transition: all 0.3s ease;
}

.tool-box.active {
  opacity: 1;
  background: rgba(16, 185, 129, 0.15);
  border-color: #34D399;
  box-shadow: 0 0 25px rgba(52, 211, 153, 0.25);
}

.trans-state {
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  display: block;
}

.trans-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 0.2rem;
}

.trans-box p {
  font-size: 0.8rem;
  color: #CBD5E1;
  line-height: 1.35;
}

.transform-btn {
  padding: 0.7rem 1.2rem;
  background: linear-gradient(135deg, #D4AF37 0%, #B89220 100%);
  color: #080C14;
  font-weight: 700;
  font-size: 0.85rem;
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
  transition: all 0.2s ease;
}

.transform-btn:hover {
  transform: scale(1.04);
}

.climax-quote {
  padding: 0.8rem 1.4rem;
  border-left: 3px solid var(--gold-primary);
  background: rgba(212, 175, 55, 0.04);
  margin-top: auto;
}

.quote-italic {
  font-size: 1.05rem;
  font-style: italic;
  color: var(--gold-light);
  line-height: 1.45;
}

.quote-italic strong {
  color: #FFFFFF;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 1024px) {
  .false-exits-row {
    grid-template-columns: 1fr;
  }
  .interactive-transformation {
    flex-direction: column;
  }
  .slide-paradox {
    padding: 1.5rem;
  }
}
</style>
