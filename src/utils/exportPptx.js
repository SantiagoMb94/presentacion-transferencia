import pptxgen from 'pptxgenjs';
import { slides } from '../data/slides.js';

export async function exportPresentationToPptx() {
  const pres = new pptxgen();

  pres.layout = 'LAYOUT_16x9';
  pres.author = 'Sigmund Freud / Exposición Universitaria';
  pres.company = 'Facultad de Psicología · Psicoanálisis';
  pres.title = 'La Transferencia - 27ª Conferencia (Sigmund Freud)';
  pres.subject = 'Teoría y Técnica Psicoanalítica · Obras Completas Tomo XVI';

  // Palette constants
  const C_BG = 'FAF5F7';
  const C_WHITE = 'FFFFFF';
  const C_ROSE = 'B83A64';
  const C_ROSE_DARK = '872346';
  const C_WINE = '4A122A';
  const C_ROSE_LIGHT = 'FDEEF3';
  const C_BORDER = 'E8CCD6';
  const C_TEXT = '25131E';
  const C_TEXT_MUTED = '624B57';
  const C_SAGE = '2A7955';
  const C_SAGE_BG = 'EDF7F2';
  const C_AMBER = 'BD5B14';
  const C_AMBER_BG = 'FEF3EB';
  const C_LAVENDER = '764A8C';
  const C_LAVENDER_BG = 'F7EFFC';

  // Helper for Slide Notes
  function formatNotes(notesObj) {
    if (!notesObj) return '';
    let text = `TIEMPO ESTIMADO: ${notesObj.timeEstimate || '3-4 min'}\n\n`;
    text += `APERTURA:\n${notesObj.opening || ''}\n\n`;
    text += `PUNTOS CLAVE:\n`;
    if (notesObj.keyPoints) {
      notesObj.keyPoints.forEach((pt) => {
        text += `• ${pt}\n`;
      });
    }
    if (notesObj.discussionPrompt) {
      text += `\nPREGUNTA DEBATE:\n«${notesObj.discussionPrompt}»\n`;
    }
    return text;
  }

  // ==========================================
  // SLIDE 1: PORTADA
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C_BG };

    // Decorative top-right accent
    slide.addShape(pres.ShapeType.roundRect, {
      x: 8.8, y: -0.5, w: 5.5, h: 2.2,
      fill: { color: C_ROSE_LIGHT },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.4
    });

    // Tag Badge
    slide.addText('PSICOANÁLISIS · 27ª CONFERENCIA · SIGMUND FREUD', {
      x: 0.8, y: 0.7, w: 6.5, h: 0.35,
      fontSize: 10, bold: true, color: C_ROSE, fontFace: 'Georgia'
    });

    // Main Title
    slide.addText('La Transferencia', {
      x: 0.8, y: 1.1, w: 8.5, h: 1.0,
      fontSize: 40, bold: true, color: C_WINE, fontFace: 'Georgia'
    });

    // Subtitle
    slide.addText('De la resistencia más temible al instrumento soberano de la curación', {
      x: 0.8, y: 2.1, w: 8.5, h: 0.5,
      fontSize: 16, italic: true, color: C_TEXT_MUTED, fontFace: 'Georgia'
    });

    // Context Card
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 2.8, w: 8.4, h: 1.3,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: 2.8, w: 0.12, h: 1.3,
      fill: { color: C_ROSE },
      line: { color: C_ROSE }
    });
    slide.addText('SÍNTESIS DE LA EXPOSICIÓN (Viena, 1916–1917)', {
      x: 1.1, y: 2.9, w: 7.8, h: 0.25,
      fontSize: 9, bold: true, color: C_ROSE, fontFace: 'Arial'
    });
    slide.addText(
      'Freud devela el corazón de la terapia analítica: el paciente no recuerda sus traumas de la infancia en palabras neutras, sino que los revive y actúa en vivo sobre la persona del analista. Comprender esta fuerza permite transformar la repetición inconsciente en recuerdo consciente.',
      {
        x: 1.1, y: 3.2, w: 7.8, h: 0.8,
        fontSize: 11, color: C_TEXT, fontFace: 'Georgia', lineSpacingMultiple: 1.15
      }
    );

    // 4 Foundation Cards
    const cards = [
      { num: '01', title: 'Fenómeno Clínico', desc: 'Los afectos del pasado reprimido reviven en la relación con el médico.' },
      { num: '02', title: 'Tipos y Superación', desc: 'Tierna, erótica y hostil: la regla de abstinencia para transformar la pulsión.' },
      { num: '03', title: 'Límites Terapéuticos', desc: 'Neurosis transferenciales vs. narcisistas y los cuatro condicionantes.' },
      { num: '04', title: 'Resistencia y Debate', desc: 'El trabajo dinámico contra la represión y preguntas para el coloquio grupal.' }
    ];

    cards.forEach((c, idx) => {
      const cardX = 0.8 + idx * 2.15;
      slide.addShape(pres.ShapeType.roundRect, {
        x: cardX, y: 4.4, w: 2.05, h: 1.6,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.12
      });
      slide.addText(c.num, {
        x: cardX + 0.15, y: 4.5, w: 0.5, h: 0.3,
        fontSize: 11, bold: true, color: C_ROSE, fontFace: 'Arial'
      });
      slide.addText(c.title, {
        x: cardX + 0.15, y: 4.8, w: 1.75, h: 0.35,
        fontSize: 11, bold: true, color: C_WINE, fontFace: 'Georgia'
      });
      slide.addText(c.desc, {
        x: cardX + 0.15, y: 5.15, w: 1.75, h: 0.75,
        fontSize: 9, color: C_TEXT_MUTED, fontFace: 'Arial'
      });
    });

    // Right Decorative Panel
    slide.addShape(pres.ShapeType.roundRect, {
      x: 9.6, y: 1.1, w: 2.9, h: 4.9,
      fill: { color: C_ROSE_LIGHT },
      line: { color: C_BORDER, width: 1.5 },
      rectRadius: 0.2
    });
    slide.addText('Ψ', {
      x: 9.6, y: 2.0, w: 2.9, h: 0.8,
      fontSize: 48, align: 'center', color: C_ROSE, fontFace: 'Georgia'
    });
    slide.addText('Sigmund Freud\n(1856–1939)', {
      x: 9.8, y: 2.9, w: 2.5, h: 0.6,
      fontSize: 14, bold: true, align: 'center', color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText('«En la terapia reside toda la posibilidad de cultivar el psicoanálisis»\n(pág. 392)', {
      x: 9.8, y: 3.6, w: 2.5, h: 1.2,
      fontSize: 10, italic: true, align: 'center', color: C_ROSE_DARK, fontFace: 'Georgia'
    });

    slide.addNotes(formatNotes(slides[0]?.speakerNotes));
  }

  // ==========================================
  // SLIDE 2: LA TRANSFERENCIA Y SU PAPEL
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C_BG };

    slide.addText('DIAPOSITIVA 01 · CONFERENCIA 27 (PÁGS. 392–395)', {
      x: 0.8, y: 0.5, w: 8.0, h: 0.3,
      fontSize: 10, bold: true, color: C_ROSE, fontFace: 'Georgia'
    });
    slide.addText('La Transferencia y su Papel en la Terapia', {
      x: 0.8, y: 0.8, w: 10.0, h: 0.6,
      fontSize: 26, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText('El motor de la cura y la reproducción viva del pasado reprimido', {
      x: 0.8, y: 1.35, w: 10.0, h: 0.35,
      fontSize: 13, italic: true, color: C_TEXT_MUTED, fontFace: 'Georgia'
    });

    // Core definition banner
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.85, w: 11.7, h: 1.1,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: 1.85, w: 0.1, h: 1.1,
      fill: { color: C_ROSE },
      line: { color: C_ROSE }
    });
    slide.addText('DEFINICIÓN FUNDAMENTAL', {
      x: 1.1, y: 1.95, w: 5.0, h: 0.25,
      fontSize: 9, bold: true, color: C_ROSE, fontFace: 'Arial'
    });
    slide.addText(
      '«La transferencia ocurre cuando el paciente dirige hacia el médico sentimientos vinculados con experiencias y relaciones anteriores que hacen parte de su pasado reprimido.»',
      {
        x: 1.1, y: 2.25, w: 11.2, h: 0.6,
        fontSize: 13, bold: true, color: C_WINE, fontFace: 'Georgia'
      }
    );

    // 3 Pillars
    const pillars = [
      {
        icon: '⚖', tag: 'NATURALEZA DUAL', title: 'Motor o Resistencia',
        body: 'La transferencia puede favorecer el tratamiento prestando autoridad al terapeuta, o convertirse en una resistencia tenaz dependiendo de cómo se manifieste en la relación.'
      },
      {
        icon: '🎭', tag: 'ESCENARIO VIVO', title: 'Reproducción de Conflictos',
        body: 'A través de la transferencia, los conflictos inconscientes se reproducen en la relación terapéutica. El consultorio se convierte en el campo vivo donde pueden ser analizados.'
      },
      {
        icon: '✨', tag: 'META CLÍNICA', title: 'Repetición en Recuerdo',
        body: 'El objetivo es transformar la repetición inconsciente en recuerdo consciente. Así, el paciente puede comprender, elaborar sus conflictos y ganar autonomía psíquica.'
      }
    ];

    pillars.forEach((p, idx) => {
      const pX = 0.8 + idx * 4.0;
      slide.addShape(pres.ShapeType.roundRect, {
        x: pX, y: 3.15, w: 3.7, h: 2.3,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.15
      });
      slide.addText(`${p.icon}  ${p.tag}`, {
        x: pX + 0.2, y: 3.3, w: 3.3, h: 0.25,
        fontSize: 9, bold: true, color: C_ROSE, fontFace: 'Arial'
      });
      slide.addText(p.title, {
        x: pX + 0.2, y: 3.6, w: 3.3, h: 0.4,
        fontSize: 14, bold: true, color: C_WINE, fontFace: 'Georgia'
      });
      slide.addText(p.body, {
        x: pX + 0.2, y: 4.05, w: 3.3, h: 1.25,
        fontSize: 10, color: C_TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.15
      });
    });

    // Bottom formula strip
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 5.65, w: 11.7, h: 0.75,
      fill: { color: C_ROSE_LIGHT },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.1
    });
    slide.addText(
      'FÓRMULA TERAPÉUTICA:  Pasado Reprimido   ➔   Repetición en Acto (Transferencia)   ➔   Recuerdo Consciente y Elaboración',
      {
        x: 0.8, y: 5.85, w: 11.7, h: 0.35,
        fontSize: 11, bold: true, align: 'center', color: C_ROSE_DARK, fontFace: 'Georgia'
      }
    );

    slide.addNotes(formatNotes(slides[1]?.speakerNotes));
  }

  // ==========================================
  // SLIDE 3: TIPOS Y SUPERACIÓN
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C_BG };

    slide.addText('DIAPOSITIVA 02 · CONFERENCIA 27 (PÁGS. 399–403)', {
      x: 0.8, y: 0.5, w: 8.0, h: 0.3,
      fontSize: 10, bold: true, color: C_ROSE, fontFace: 'Georgia'
    });
    slide.addText('Tipos de Transferencia y su Superación', {
      x: 0.8, y: 0.8, w: 10.0, h: 0.6,
      fontSize: 26, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText('Manifestaciones de la investidura afectiva y la regla de abstinencia', {
      x: 0.8, y: 1.35, w: 10.0, h: 0.35,
      fontSize: 13, italic: true, color: C_TEXT_MUTED, fontFace: 'Georgia'
    });

    // Comparison Table
    const tableRows = [
      [
        { text: 'Tipo de Transferencia', options: { fill: { color: C_ROSE_LIGHT }, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia', fontSize: 11 } },
        { text: 'Manifestación en Sesión', options: { fill: { color: C_ROSE_LIGHT }, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia', fontSize: 11 } },
        { text: 'Impacto en la Cura', options: { fill: { color: C_ROSE_LIGHT }, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia', fontSize: 11 } }
      ],
      [
        { text: 'Positiva Tierna\n(Sublimada)', options: { bold: true, color: C_WINE, fontFace: 'Georgia', fontSize: 11 } },
        { text: 'Sentimientos de aprecio, confianza ciega y sobrestimación del médico.', options: { fontFace: 'Arial', fontSize: 10 } },
        { text: 'Funciona inicialmente como el motor impulsor más poderoso del trabajo analítico.', options: { fontFace: 'Arial', fontSize: 10, bold: true, color: C_SAGE } }
      ],
      [
        { text: 'Positiva Erótica\n(Cruda)', options: { bold: true, color: C_WINE, fontFace: 'Georgia', fontSize: 11 } },
        { text: 'Reclamos amorosos directos o de índole sexual dirigidos al terapeuta.', options: { fontFace: 'Arial', fontSize: 10 } },
        { text: 'Se transforma en una resistencia interna debido a la intensidad del deseo.', options: { fontFace: 'Arial', fontSize: 10, bold: true, color: C_ROSE } }
      ],
      [
        { text: 'Negativa\n(Hostil)', options: { bold: true, color: C_WINE, fontFace: 'Georgia', fontSize: 11 } },
        { text: 'Sentimientos de enojo, desconfianza, desacato o celos hacia el médico.', options: { fontFace: 'Arial', fontSize: 10 } },
        { text: 'Se manifiesta como resistencia. Refleja la ambivalencia afectiva del paciente.', options: { fontFace: 'Arial', fontSize: 10, bold: true, color: C_AMBER } }
      ]
    ];

    slide.addTable(tableRows, {
      x: 0.8, y: 1.85, w: 11.7, h: 2.3,
      colW: [2.8, 4.4, 4.5],
      border: { pt: 0.5, color: C_BORDER },
      fill: { color: C_WHITE },
      align: 'left',
      valign: 'middle'
    });

    // Superación de la Transferencia Box
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.35, w: 11.7, h: 2.15,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: 4.35, w: 0.1, h: 2.15,
      fill: { color: C_ROSE },
      line: { color: C_ROSE }
    });
    slide.addText('✦ SUPERACIÓN DE LA TRANSFERENCIA: LA REGLA DE ORO DE FREUD', {
      x: 1.1, y: 4.45, w: 8.0, h: 0.25,
      fontSize: 9, bold: true, color: C_ROSE, fontFace: 'Arial'
    });

    const rules = [
      { tag: 'LO QUE NO SE DEBE HACER', desc: 'No se debe ceder a las demandas del paciente ni rechazarlas con indignación moral o molestia personal.' },
      { tag: 'EN QUÉ CONSISTE LA SUPERACIÓN', desc: 'Demostrarle que esos sentimientos no pertenecen a la relación actual ni al terapeuta, sino que son repeticiones de vivencias anteriores.' },
      { tag: 'EFECTO TERAPÉUTICO', desc: 'De este modo, se fuerza al paciente a mudar la repetición en recuerdo, conquistando soberanía y autoconocimiento.' }
    ];

    rules.forEach((r, idx) => {
      const rX = 1.1 + idx * 3.8;
      slide.addText(r.tag, {
        x: rX, y: 4.8, w: 3.5, h: 0.25,
        fontSize: 8.5, bold: true, color: C_ROSE_DARK, fontFace: 'Arial'
      });
      slide.addText(r.desc, {
        x: rX, y: 5.1, w: 3.5, h: 1.25,
        fontSize: 10, color: C_TEXT, fontFace: 'Georgia', lineSpacingMultiple: 1.15
      });
    });

    slide.addNotes(formatNotes(slides[2]?.speakerNotes));
  }

  // ==========================================
  // SLIDE 4: FACTORES Y LÍMITES
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C_BG };

    slide.addText('DIAPOSITIVA 03 · CONFERENCIA 27 (PÁGS. 392–395, 404–406)', {
      x: 0.8, y: 0.5, w: 8.0, h: 0.3,
      fontSize: 10, bold: true, color: C_ROSE, fontFace: 'Georgia'
    });
    slide.addText('Factores Determinantes y Límites de la Terapia', {
      x: 0.8, y: 0.8, w: 10.0, h: 0.6,
      fontSize: 26, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText('Dónde hay espacio legítimo para intervenir según la distribución de la libido', {
      x: 0.8, y: 1.35, w: 10.0, h: 0.35,
      fontSize: 13, italic: true, color: C_TEXT_MUTED, fontFace: 'Georgia'
    });

    // 2 Nosological Cards
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.85, w: 5.7, h: 1.8,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addText('🗝️  TERRENO OPERABLE · HISTERIA, ANGUSTIA, OBSESIVA', {
      x: 1.0, y: 1.95, w: 5.3, h: 0.25,
      fontSize: 8.5, bold: true, color: C_SAGE, fontFace: 'Arial'
    });
    slide.addText('Neurosis de Transferencia', {
      x: 1.0, y: 2.2, w: 5.3, h: 0.35,
      fontSize: 14, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText(
      'Permiten el trabajo transferencial y la nueva configuración de los conflictos que aparecen dentro del tratamiento. La libido está orientada al exterior hacia objetos sustitutivos.',
      {
        x: 1.0, y: 2.6, w: 5.3, h: 0.9,
        fontSize: 9.5, color: C_TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.15
      }
    );

    slide.addShape(pres.ShapeType.roundRect, {
      x: 6.8, y: 1.85, w: 5.7, h: 1.8,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addText('🪞  LÍMITE CLÍNICO · PARANOIA, MELANCOLÍA, DEMENCIA PRECOZ', {
      x: 7.0, y: 1.95, w: 5.3, h: 0.25,
      fontSize: 8.5, bold: true, color: C_AMBER, fontFace: 'Arial'
    });
    slide.addText('Neurosis Narcisistas', {
      x: 7.0, y: 2.2, w: 5.3, h: 0.35,
      fontSize: 14, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText(
      'Afecciones en las que predomina la libido dirigida hacia el propio Yo. Al no proyectar investiduras afectivas sobre el médico, se dificulta o imposibilita el establecimiento de la transferencia.',
      {
        x: 7.0, y: 2.6, w: 5.3, h: 0.9,
        fontSize: 9.5, color: C_TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.15
      }
    );

    // Transition Banner
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: 3.8, w: 11.7, h: 0.45,
      fill: { color: C_ROSE_LIGHT },
      line: { color: C_BORDER, width: 0.5 }
    });
    slide.addText(
      'El psicoanálisis determina claramente en cuáles factores del origen de la neurosis se puede intervenir y en cuáles no:',
      {
        x: 0.8, y: 3.9, w: 11.7, h: 0.25,
        fontSize: 9.5, bold: true, align: 'center', color: C_WINE, fontFace: 'Georgia'
      }
    );

    // 4 Limits Cards
    const limits = [
      {
        num: 'I', tag: 'FACTOR CONSTITUCIONAL', title: 'Disposición Hereditaria',
        body: 'Es el límite biológico e innato del sujeto. Freud constata con realismo que ninguna intervención psicológica puede alterar la carga hereditaria.'
      },
      {
        num: 'II', tag: 'DETERMINISMO HISTÓRICO', title: 'Vivencias Infantiles',
        body: 'Las huellas mnémicas tempranas son los cimientos del síntoma. Pertenecen al pasado consumado: ningún tratamiento puede retroceder en el tiempo.'
      },
      {
        num: 'III', tag: 'REALIDAD EXTERNA', title: 'Frustración Social y Pobreza',
        body: 'Desamparo material y miseria. Los médicos no son el emperador José II repartiendo favores; el psicoanálisis no es beneficencia social.'
      },
      {
        num: 'IV', tag: 'PREJUICIO DESMENTIDO', title: 'La Moral y el «Goce»',
        body: 'Freud refuta el reproche de incitar al libertinaje. En el neurótico se libra una batalla entre pulsión y represión; el desenfreno no cura el conflicto.'
      }
    ];

    limits.forEach((l, idx) => {
      const lX = 0.8 + idx * 3.0;
      slide.addShape(pres.ShapeType.roundRect, {
        x: lX, y: 4.4, w: 2.75, h: 2.1,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.12
      });
      slide.addText(`${l.num} · ${l.tag}`, {
        x: lX + 0.15, y: 4.5, w: 2.45, h: 0.25,
        fontSize: 7.5, bold: true, color: C_ROSE, fontFace: 'Arial'
      });
      slide.addText(l.title, {
        x: lX + 0.15, y: 4.75, w: 2.45, h: 0.45,
        fontSize: 11, bold: true, color: C_WINE, fontFace: 'Georgia'
      });
      slide.addText(l.body, {
        x: lX + 0.15, y: 5.25, w: 2.45, h: 1.15,
        fontSize: 8.5, color: C_TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.15
      });
    });

    slide.addNotes(formatNotes(slides[3]?.speakerNotes));
  }

  // ==========================================
  // SLIDE 5: RESISTENCIA Y REPRESIÓN
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C_BG };

    slide.addText('DIAPOSITIVA 04 · CONFERENCIA 27 (PÁGS. 395–398)', {
      x: 0.8, y: 0.5, w: 8.0, h: 0.3,
      fontSize: 10, bold: true, color: C_ROSE, fontFace: 'Georgia'
    });
    slide.addText('El Rol de la Resistencia y la Represión', {
      x: 0.8, y: 0.8, w: 10.0, h: 0.6,
      fontSize: 26, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText('Las fuerzas que custodian el síntoma y la insuficiencia de la sola comprensión intelectual', {
      x: 0.8, y: 1.35, w: 10.0, h: 0.35,
      fontSize: 13, italic: true, color: C_TEXT_MUTED, fontFace: 'Georgia'
    });

    // 2 Main Blocks
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.85, w: 5.7, h: 2.3,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: 1.85, w: 0.1, h: 2.3,
      fill: { color: C_ROSE },
      line: { color: C_ROSE }
    });
    slide.addText('🛡️  EN EL PRESENTE TERAPÉUTICO', {
      x: 1.1, y: 1.95, w: 5.2, h: 0.25,
      fontSize: 8.5, bold: true, color: C_ROSE, fontFace: 'Arial'
    });
    slide.addText('La Resistencia', {
      x: 1.1, y: 2.2, w: 5.2, h: 0.35,
      fontSize: 15, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText(
      '«Es la fuerza que se opone activamente a que los contenidos reprimidos lleguen a hacerse conscientes durante la terapia.»',
      {
        x: 1.1, y: 2.55, w: 5.2, h: 0.55,
        fontSize: 10, italic: true, bold: true, color: C_ROSE_DARK, fontFace: 'Georgia'
      }
    );
    slide.addText(
      '• Obstáculo directo: dificulta que deseos y recuerdos reprimidos alcancen la conciencia.\n• Aliada del Yo defensivo: prefiere el sufrimiento conocido al cambio psíquico.\n• Manifestación: bloqueos asociativos, silencios o desacato transferencial.',
      {
        x: 1.1, y: 3.15, w: 5.2, h: 0.9,
        fontSize: 9, color: C_TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.15
      }
    );

    slide.addShape(pres.ShapeType.roundRect, {
      x: 6.8, y: 1.85, w: 5.7, h: 2.3,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 6.8, y: 1.85, w: 0.1, h: 2.3,
      fill: { color: C_LAVENDER },
      line: { color: C_LAVENDER }
    });
    slide.addText('🔒  EL MECANISMO ORIGINARIO', {
      x: 7.1, y: 1.95, w: 5.2, h: 0.25,
      fontSize: 8.5, bold: true, color: C_LAVENDER, fontFace: 'Arial'
    });
    slide.addText('La Represión', {
      x: 7.1, y: 2.2, w: 5.2, h: 0.35,
      fontSize: 15, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText(
      '«Mantiene fuera de la conciencia determinados deseos o representaciones que generan conflicto inasumible.»',
      {
        x: 7.1, y: 2.55, w: 5.2, h: 0.55,
        fontSize: 10, italic: true, bold: true, color: C_LAVENDER, fontFace: 'Georgia'
      }
    );
    slide.addText(
      '• Génesis: expulsó en la temprana infancia mociones intolerables para el Yo.\n• Lo reprimido pulsa en lo inconsciente y busca satisfacción sustitutiva en síntomas.\n• La represión fundó el síntoma; la resistencia vela por mantenerlo oculto.',
      {
        x: 7.1, y: 3.15, w: 5.2, h: 0.9,
        fontSize: 9, color: C_TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.15
      }
    );

    // Intellectual Insufficiency Callout
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.35, w: 11.7, h: 2.2,
      fill: { color: C_WHITE },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.15
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.8, y: 4.35, w: 0.1, h: 2.2,
      fill: { color: C_ROSE },
      line: { color: C_ROSE }
    });
    slide.addText('💡  PRINCIPIO TÉCNICO DECISIVO: LA INSUFICIENCIA DEL SABER INTELECTUAL', {
      x: 1.1, y: 4.45, w: 8.0, h: 0.25,
      fontSize: 9, bold: true, color: C_ROSE, fontFace: 'Arial'
    });
    slide.addText(
      '«Comprender intelectualmente un conflicto no es suficiente: es necesario trabajar las resistencias que lo mantienen.»',
      {
        x: 1.1, y: 4.75, w: 11.2, h: 0.45,
        fontSize: 13, bold: true, color: C_WINE, fontFace: 'Georgia'
      }
    );
    slide.addText(
      'Freud advierte que comunicar al paciente la interpretación teórica de su trauma no disuelve el síntoma. El sujeto acumula la explicación en su intelecto mientras la represión y la angustia continúan intactas. Solo al vivenciar y desarticular la resistencia dentro de la transferencia acontece la cura.',
      {
        x: 1.1, y: 5.25, w: 11.2, h: 1.1,
        fontSize: 10, color: C_TEXT, fontFace: 'Georgia', lineSpacingMultiple: 1.2
      }
    );

    slide.addNotes(formatNotes(slides[4]?.speakerNotes));
  }

  // ==========================================
  // SLIDE 6: PREGUNTAS DE DEBATE
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C_BG };

    slide.addText('DIAPOSITIVA 05 · MESA REDONDA & COLOQUIO ABIERTO', {
      x: 0.8, y: 0.5, w: 8.0, h: 0.3,
      fontSize: 10, bold: true, color: C_ROSE, fontFace: 'Georgia'
    });
    slide.addText('Preguntas de Debate y Reflexión Clínica', {
      x: 0.8, y: 0.8, w: 10.0, h: 0.6,
      fontSize: 26, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText('Cuatro dilemas freudianos para el diálogo con el auditorio y el docente', {
      x: 0.8, y: 1.35, w: 10.0, h: 0.35,
      fontSize: 13, italic: true, color: C_TEXT_MUTED, fontFace: 'Georgia'
    });

    const questions = [
      {
        num: '01', tag: 'ÁMBITO COTIDIANO VS. CLÍNICO',
        q: '¿La transferencia ocurre únicamente durante una terapia o también puede aparecer en relaciones cotidianas con profesores, jefes o parejas?',
        clue: 'Pistas: Freud afirma que es un fenómeno humano universal. Solo en análisis se aísla, se interpreta y no se actúa, poniéndola al servicio de la cura.'
      },
      {
        num: '02', tag: 'CRITERIO DIAGNÓSTICO',
        q: '¿Cómo podría distinguirse entre un sentimiento genuino hacia el terapeuta y uno influido por la transferencia?',
        clue: 'Pistas: La desmesura, la ceguera a la realidad objetiva y la inadecuación temporal evidencian que se trata de un libreto infantil proyectado.'
      },
      {
        num: '03', tag: 'EFICACIA TERAPÉUTICA',
        q: '¿Hasta qué punto la relación afectiva entre terapeuta y paciente influye en la eficacia de una intervención psicológica?',
        clue: 'Pistas: La transferencia tierna sublimada otorga la autoridad para que las interpretaciones sean asimiladas; sin alianza afectiva no hay escucha.'
      },
      {
        num: '04', tag: 'DEONTOLOGÍA Y ÉTICA',
        q: '¿Qué riesgos éticos podrían aparecer si un terapeuta responde afectivamente a las demandas transferenciales de un paciente?',
        clue: 'Pistas: Supone el abuso de poder y la destrucción del encuadre. La abstinencia es el único escudo ético que garantiza la libertad del sujeto.'
      }
    ];

    questions.forEach((item, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const qX = 0.8 + col * 6.0;
      const qY = 1.85 + row * 2.35;

      slide.addShape(pres.ShapeType.roundRect, {
        x: qX, y: qY, w: 5.7, h: 2.2,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.15
      });
      slide.addText(`${item.num}  ${item.tag}`, {
        x: qX + 0.2, y: qY + 0.15, w: 5.3, h: 0.25,
        fontSize: 8, bold: true, color: C_ROSE, fontFace: 'Arial'
      });
      slide.addText(item.q, {
        x: qX + 0.2, y: qY + 0.45, w: 5.3, h: 0.85,
        fontSize: 11.5, bold: true, color: C_WINE, fontFace: 'Georgia', lineSpacingMultiple: 1.15
      });
      slide.addShape(pres.ShapeType.rect, {
        x: qX + 0.2, y: qY + 1.35, w: 5.3, h: 0.05,
        fill: { color: C_ROSE_LIGHT },
        line: { color: C_ROSE_LIGHT }
      });
      slide.addText(item.clue, {
        x: qX + 0.2, y: qY + 1.45, w: 5.3, h: 0.65,
        fontSize: 8.5, color: C_TEXT_MUTED, fontFace: 'Arial', lineSpacingMultiple: 1.1
      });
    });

    slide.addNotes(formatNotes(slides[5]?.speakerNotes));
  }

  // ==========================================
  // SLIDE 7: CONCLUSIÓN Y CIERRE
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C_BG };

    slide.addText('DIAPOSITIVA 06 · SÍNTESIS MAGISTRAL', {
      x: 0.8, y: 0.5, w: 8.0, h: 0.3,
      fontSize: 10, bold: true, color: C_ROSE, fontFace: 'Georgia'
    });
    slide.addText('Conclusiones y Mensaje Final', {
      x: 0.8, y: 0.8, w: 10.0, h: 0.6,
      fontSize: 26, bold: true, color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText('Los cuatro pilares de la 27ª Conferencia y el legado contemporáneo del psicoanálisis', {
      x: 0.8, y: 1.35, w: 10.0, h: 0.35,
      fontSize: 13, italic: true, color: C_TEXT_MUTED, fontFace: 'Georgia'
    });

    const pillars = [
      { num: '01', title: 'Paradoja Clínica', desc: 'La transferencia surge como la mayor resistencia pero deviene en el instrumento soberano de curación.' },
      { num: '02', title: 'Repetición en Recuerdo', desc: 'El sujeto actúa lo que reprimió. La labor analítica pone palabras donde antes solo había actuación y síntoma.' },
      { num: '03', title: 'Honestidad Científica', desc: 'Reconoce los límites constitucionales y materiales, concentrándose en la conquista de la verdad subjetiva.' },
      { num: '04', title: 'Ética de la Abstinencia', desc: 'No satisfacer la demanda amorosa ni la hostilidad para garantizar la autonomía y emancipación del Yo.' }
    ];

    pillars.forEach((p, idx) => {
      const pX = 0.8 + idx * 3.0;
      slide.addShape(pres.ShapeType.roundRect, {
        x: pX, y: 1.85, w: 2.75, h: 2.3,
        fill: { color: C_WHITE },
        line: { color: C_BORDER, width: 1 },
        rectRadius: 0.15
      });
      slide.addText(p.num, {
        x: pX + 0.2, y: 2.0, w: 2.35, h: 0.3,
        fontSize: 14, bold: true, color: C_ROSE, fontFace: 'Arial'
      });
      slide.addText(p.title, {
        x: pX + 0.2, y: 2.35, w: 2.35, h: 0.45,
        fontSize: 13, bold: true, color: C_WINE, fontFace: 'Georgia'
      });
      slide.addText(p.desc, {
        x: pX + 0.2, y: 2.85, w: 2.35, h: 1.15,
        fontSize: 9.5, color: C_TEXT, fontFace: 'Arial', lineSpacingMultiple: 1.15
      });
    });

    // Thank You Banner
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 4.4, w: 11.7, h: 2.1,
      fill: { color: C_ROSE_LIGHT },
      line: { color: C_BORDER, width: 1 },
      rectRadius: 0.2
    });
    slide.addText('¡Muchas gracias por su atención!', {
      x: 0.8, y: 4.8, w: 11.7, h: 0.6,
      fontSize: 28, bold: true, align: 'center', color: C_WINE, fontFace: 'Georgia'
    });
    slide.addText('«Donde Ello era, el Yo debe advenir» — Sigmund Freud', {
      x: 0.8, y: 5.4, w: 11.7, h: 0.4,
      fontSize: 14, italic: true, align: 'center', color: C_ROSE_DARK, fontFace: 'Georgia'
    });
    slide.addText('Espacio abierto para preguntas, reflexiones y comentarios de la clase', {
      x: 0.8, y: 5.8, w: 11.7, h: 0.35,
      fontSize: 11, align: 'center', color: C_TEXT_MUTED, fontFace: 'Arial'
    });

    slide.addNotes(formatNotes(slides[6]?.speakerNotes));
  }

  // Trigger browser download
  await pres.writeFile({ fileName: 'La_Transferencia_Freud_Conferencia_27.pptx' });
}
