<template>
  <div class="authors-slide animate-fade-in">
    <div class="authors-grid">
      <!-- Left Column: Institutional Info & Presenters -->
      <div class="authors-content">
        <!-- Institution & Academic Badges -->
        <div class="badge-row">
          <span class="glass-pill institution-pill">
            <svg class="pill-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2L2 7h20L12 2z"/>
            </svg>
            IUE · Institución Universitaria de Envigado
          </span>
          <span class="glass-pill subject-pill">
            <span class="psy-symbol">Ψ</span>
            Materia: Psicoanálisis
          </span>
          <span class="glass-pill topic-pill">
            Conferencia 27 · Sigmund Freud
          </span>
        </div>

        <!-- Main Title -->
        <h1 class="authors-main-title font-display">
          La <span class="text-rose-gradient">Transferencia</span>
          <span class="subtitle-block font-serif">
            27ª Conferencia de Introducción al Psicoanálisis · Exposición Teórico-Clínica
          </span>
        </h1>

        <!-- Presenters Cards (Juliana & Leidy) -->
        <div class="presenters-container">
          <div class="presenters-header">
            <span class="section-label font-mono">INTEGRANTES / EXPOSITORAS</span>
          </div>

          <div class="presenters-grid">
            <!-- Presenter 1: Juliana Henao Gutiérrez -->
            <div class="presenter-card glass-panel">
              <div class="presenter-avatar avatar-juliana">
                <span>JH</span>
              </div>
              <div class="presenter-info">
                <div class="presenter-role font-mono">EXPOSITORA</div>
                <h3 class="presenter-name font-display">Juliana Henao Gutiérrez</h3>
                <p class="presenter-affil font-serif">Facultad de Psicología · IUE</p>
              </div>
            </div>

            <!-- Presenter 2: Leidy Johanna Rendón Jaramillo -->
            <div class="presenter-card glass-panel">
              <div class="presenter-avatar avatar-leidy">
                <span>LR</span>
              </div>
              <div class="presenter-info">
                <div class="presenter-role font-mono">EXPOSITORA</div>
                <h3 class="presenter-name font-display">Leidy Johanna Rendón Jaramillo</h3>
                <p class="presenter-affil font-serif">Facultad de Psicología · IUE</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Conceptual Metaphor Card: Iceberg & Mirror -->
        <div class="metaphor-card glass-panel">
          <div class="metaphor-header font-display">
            <span class="metaphor-icon">✦</span>
            <span>LA METÁFORA DEL ICEBERG Y EL ESPEJO EN PSICOANÁLISIS</span>
          </div>
          <p class="metaphor-text font-serif">
            La pequeña punta visible que asoma sobre el agua representa la <strong>conciencia</strong>. Bajo la superficie silenciosa yace la inmensa masa del <strong>inconsciente reprimido</strong>. Al mirarse en las aguas o en el analista como un espejo, el sujeto no solo ve el presente: <em>revive y transfiere en vivo sus afectos y conflictos primordiales</em>.
          </p>
        </div>

        <!-- Navigation Buttons -->
        <div class="authors-actions">
          <button class="primary-btn" @click="$emit('next')">
            <span>Iniciar Exposición</span>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <button class="secondary-btn" @click="$emit('open-overview')">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span>Ver Índice Completo</span>
          </button>
        </div>

        <div class="quick-shortcuts-hint">
          <span>Avanzar: <kbd>→</kbd> o <kbd>Espacio</kbd> · Pantalla completa: <kbd>F</kbd> · Notas de orador: <kbd>N</kbd></span>
        </div>
      </div>

      <!-- Right Column: Visual Artwork (Iceberg & Mirror) -->
      <div class="authors-visual">
        <div class="artwork-container glass-panel">
          <img 
            src="/assets/iceberg_psychoanalysis.jpg" 
            alt="Metáfora psicoanalítica del iceberg y el espejo del inconsciente" 
            class="artwork-image"
          />
          <div class="artwork-overlay"></div>
          <div class="artwork-caption">
            <div class="caption-badge font-mono">TÓPICA FREUDIANA & TRANSFERENCIA</div>
            <div class="caption-title font-display">El Inconsciente y el Vínculo Analítico</div>
            <div class="caption-sub font-serif">
              «La punta visible es el síntoma consciente; la inmensa profundidad sumergida es lo reprimido que busca en la transferencia un escenario para repetirse.»
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['next', 'open-overview']);
</script>

<style scoped>
.authors-slide {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 3.5rem;
  box-sizing: border-box;
}

.authors-grid {
  display: grid;
  grid-template-columns: 1.18fr 0.82fr;
  gap: 2.8rem;
  max-width: 1400px;
  width: 100%;
  height: 100%;
  max-height: 850px;
  align-items: center;
}

.authors-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

/* Badge Row */
.badge-row {
  display: flex;
  gap: 0.65rem;
  flex-wrap: wrap;
  align-items: center;
}

.institution-pill {
  background: rgba(184, 58, 100, 0.08);
  color: var(--rose-dark);
  font-weight: 700;
  border-color: rgba(184, 58, 100, 0.28);
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.pill-icon {
  width: 15px;
  height: 15px;
  color: var(--rose-primary);
}

.subject-pill {
  background: var(--bg-card);
  color: var(--wine-deep);
  font-weight: 700;
  border-color: var(--border-rose);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.psy-symbol {
  font-size: 1.1rem;
  color: var(--rose-primary);
  font-weight: 800;
}

.topic-pill {
  background: rgba(255, 255, 255, 0.7);
  color: var(--text-muted);
  border-color: var(--border-subtle);
  font-size: 0.82rem;
}

/* Titles */
.authors-main-title {
  font-size: 2.65rem;
  line-height: 1.08;
  color: var(--wine-deep);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.text-rose-gradient {
  background: linear-gradient(135deg, #B83A64 0%, #D47963 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.subtitle-block {
  display: block;
  font-size: 1.15rem;
  font-weight: 400;
  color: var(--text-muted);
  margin-top: 0.4rem;
  line-height: 1.35;
  font-style: italic;
}

/* Presenters Section */
.presenters-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.presenters-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.section-label {
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--rose-primary);
}

.presenters-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}

.presenter-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.85rem 1.1rem;
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(184, 58, 100, 0.18);
  border-radius: var(--radius-md);
  box-shadow: 0 4px 16px -4px rgba(74, 18, 42, 0.06);
  transition: all 0.25s ease;
}

.presenter-card:hover {
  transform: translateY(-2px);
  border-color: var(--rose-primary);
  box-shadow: 0 8px 24px -6px rgba(184, 58, 100, 0.18);
  background: #FFFFFF;
}

.presenter-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 800;
  color: #FFFFFF;
  flex-shrink: 0;
  box-shadow: 0 4px 12px -2px rgba(184, 58, 100, 0.35);
}

.avatar-juliana {
  background: linear-gradient(135deg, #B83A64 0%, #D47963 100%);
}

.avatar-leidy {
  background: linear-gradient(135deg, #872346 0%, #B83A64 100%);
}

.presenter-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.presenter-role {
  font-size: 0.68rem;
  font-weight: 700;
  color: var(--rose-primary);
  letter-spacing: 0.06em;
  margin-bottom: 0.1rem;
}

.presenter-name {
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--wine-deep);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
}

.presenter-affil {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-style: italic;
  margin-top: 0.15rem;
}

/* Metaphor Card */
.metaphor-card {
  padding: 0.95rem 1.25rem;
  background: rgba(255, 255, 255, 0.9);
  border-left: 4px solid var(--rose-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
}

.metaphor-header {
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  color: var(--rose-primary);
  margin-bottom: 0.35rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.metaphor-icon {
  font-size: 0.85rem;
}

.metaphor-text {
  font-size: 0.98rem;
  line-height: 1.48;
  color: var(--text-main);
}

.metaphor-text strong {
  color: var(--wine-deep);
}

.metaphor-text em {
  color: var(--rose-dark);
}

/* Actions */
.authors-actions {
  display: flex;
  gap: 1rem;
  margin-top: 0.2rem;
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.8rem;
  background: linear-gradient(135deg, #B83A64 0%, #A22E54 100%);
  color: #FFFFFF;
  border: none;
  border-radius: 9999px;
  font-size: 0.95rem;
  font-weight: 700;
  font-family: var(--font-sans);
  cursor: pointer;
  box-shadow: 0 8px 24px -6px rgba(184, 58, 100, 0.45);
  transition: all 0.25s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 28px -4px rgba(184, 58, 100, 0.6);
  background: linear-gradient(135deg, #C74470 0%, #B83A64 100%);
}

.secondary-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.4rem;
  background: rgba(255, 255, 255, 0.85);
  color: var(--rose-dark);
  border: 1px solid var(--border-rose);
  border-radius: 9999px;
  font-size: 0.92rem;
  font-weight: 600;
  font-family: var(--font-sans);
  cursor: pointer;
  transition: all 0.25s ease;
}

.secondary-btn:hover {
  background: #FFFFFF;
  border-color: var(--rose-primary);
  transform: translateY(-2px);
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.quick-shortcuts-hint {
  font-size: 0.78rem;
  color: var(--text-dim);
}

.quick-shortcuts-hint kbd {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(184, 58, 100, 0.2);
  border-radius: 4px;
  padding: 0.15rem 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--rose-dark);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

/* Artwork Column */
.authors-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.artwork-container {
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 4 / 3.9;
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-elevated);
  border: 2px solid rgba(255, 255, 255, 0.95);
  background: #FFFFFF;
}

.artwork-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.artwork-container:hover .artwork-image {
  transform: scale(1.03);
}

.artwork-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top, 
    rgba(42, 12, 26, 0.88) 0%, 
    rgba(74, 18, 42, 0.35) 45%, 
    transparent 100%
  );
}

.artwork-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.4rem;
  color: #FFFFFF;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
}

.caption-badge {
  font-size: 0.68rem;
  color: #F8B4C8;
  letter-spacing: 0.08em;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.caption-title {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #FFF2F6;
}

.caption-sub {
  font-size: 0.88rem;
  color: #F8DFE7;
  font-style: italic;
  line-height: 1.35;
}

@media (max-width: 1024px) {
  .authors-grid {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
  .authors-visual {
    display: none;
  }
}
</style>
