export const presentationMeta = {
  title: "La Transferencia en el Psicoanálisis",
  subtitle: "27ª Conferencia de Introducción al Psicoanálisis (1916–1917)",
  author: "Sigmund Freud",
  work: "Obras Completas, Vol. XVI (Amorrortu Editores, págs. 392–407)",
  edition: "Traducción de José L. Etcheverry",
  category: "Teoría y Técnica Psicoanalítica",
  totalSlides: 14
};

export const slides = [
  {
    id: 1,
    slug: "portada",
    title: "La Transferencia en el Psicoanálisis",
    subtitle: "27ª Conferencia de Introducción al Psicoanálisis · Sigmund Freud (1916–1917)",
    tag: "Apertura & Fundamentos",
    pages: "págs. 392–393",
    speakerNotes: {
      timeEstimate: "3 min",
      opening: "Comiencen dando la bienvenida al auditorio recordando que la Conferencia 27 es la antesala final de las Conferencias de Introducción de Freud. Aquí Freud pasa de la teoría de los síntomas al terreno vivo de la clínica: el tratamiento.",
      keyPoints: [
        "Freud advierte a sus oyentes que no pueden quedarse solo en el campo de la patología sin conocer la terapia.",
        "La transferencia no fue una hipótesis previa de Freud en el escritorio, sino un descubrimiento empírico ineludible que al principio desconcertó a los primeros analistas.",
        "Resaltar la frase: 'En la terapia reside toda la posibilidad de cultivar el psicoanálisis'."
      ],
      discussionPrompt: "¿Por qué para Freud la transferencia es a la vez el mayor obstáculo y la mayor herramienta de la cura?"
    }
  },
  {
    id: 2,
    slug: "dilema-terapeutico",
    title: "El Dilema Terapéutico y los Límites Iniciales",
    subtitle: "¿Dónde hay espacio para una intervención terapéutica? (pág. 392–394)",
    tag: "Los Cuatro Factores",
    pages: "págs. 392–394",
    factors: [
      {
        num: "01",
        name: "Disposición Hereditaria",
        status: "Inmutable",
        desc: "Límite constitucional y biológico dado. No solemos hablar mucho sobre ella porque nada podemos alterar en ella; marca el marco irreductible del sujeto.",
        badge: "Factor Biológico",
        color: "amber"
      },
      {
        num: "02",
        name: "Vivencias Infantiles Tempranas",
        status: "Pertenecen al Pasado",
        desc: "Las huellas de la infancia que están en primer plano en el análisis son hechos ya consumados; no podemos hacer que no hayan ocurrido.",
        badge: "Determinismo Histórico",
        color: "blue"
      },
      {
        num: "03",
        name: "Frustración Real / Desventura Social",
        status: "No Terapia de Beneficencia",
        desc: "Falta de amor, pobreza, desdicha conyugal, rigurosos reclamos éticos. Freud ironiza: no somos el 'Emperador José II' repartiendo favores milagrosos.",
        badge: "Realidad Material",
        color: "purple"
      },
      {
        num: "04",
        name: "Restricción Moral de la Sociedad",
        status: "Falso Prejuicio Desmentido",
        desc: "Falsa creencia de que el psicoanálisis receta 'gozar de la vida sexualmente'. Freud lo refuta enérgicamente: no somos consejeros libertinos ni reformadores sociales.",
        badge: "Ética Analítica",
        color: "rose"
      }
    ],
    freudQuote: "Quien consigue educarse para autoconfesarse la verdad queda duraderamente protegido del peligro de la inmoralidad, por más que su patrón de moral se desvíe del usual en la sociedad.",
    speakerNotes: {
      timeEstimate: "4 min",
      opening: "Explicar cómo Freud examina metódicamente dónde puede operar un tratamiento psíquico. Descarta la herencia (no modificable), la historia acontecida (no borrable) y el asistencialismo social.",
      keyPoints: [
        "Desarmar el mito burgués: el psicoanálisis NO receta desenfreno sexual.",
        "El analista no es mentor ni confesor religioso: rehúsa dar consejos vitales sobre matrimonio, profesión o divorcio durante la cura.",
        "El objetivo es la autonomía del paciente frente a su propio conflicto psíquico."
      ],
      discussionPrompt: "¿Qué diferencia la neutralidad analítica de la indiferencia moral?"
    }
  },
  {
    id: 3,
    slug: "oso-polar-ballena",
    title: "El Apólogo del Oso Polar y la Ballena",
    subtitle: "La naturaleza tópica del conflicto neurótico (págs. 394–395)",
    tag: "Metáfora Magistral",
    pages: "págs. 394–395",
    metaphor: {
      terrains: [
        {
          symbol: "🐻 El Oso Polar",
          realm: "Tierra Firme / Atmósfera",
          psychicSystem: "Lo Consciente y Preconsciente",
          attributes: "Pensamiento secundario, exigencias éticas, aspiraciones adaptativas, lenguaje formal."
        },
        {
          symbol: "🐋 La Ballena",
          realm: "Profundidades Abisales",
          psychicSystem: "Lo Inconsciente Reprimido",
          attributes: "Mociones libidinales sofocadas, fijaciones infantiles, satisfacción sustitutiva primaria."
        }
      ],
      coreConflict: "Una decisión efectiva sólo puede producirse si ambos se encuentran en el mismo terreno.",
      therapeuticTask: "Hacer coincidir ambos poderes en un terreno psíquico común: elevar lo inconsciente para que el Yo pueda entablar una batalla normal y resolver el conflicto."
    },
    speakerNotes: {
      timeEstimate: "3 min",
      opening: "Usar la bella imagen del apólogo de la fábula para captar la atención de la audiencia.",
      keyPoints: [
        "El síntoma neurótico no surge de una disputa entre dos ideas conscientes (como decidir qué carrera estudiar).",
        "Es un desencuentro estructural entre dos sistemas psíquicos separados por la censura de la represión.",
        "Como el oso polar en el hielo y la ballena en el fondo del mar, no pueden parlamentar ni llegar a un pacto porque habitan medios distintos.",
        "La tarea del analista es tender el puente que permita ese encuentro."
      ],
      discussionPrompt: "¿Cómo se traslada una fuerza del sistema inconsciente al sistema consciente en la clínica?"
    }
  },
  {
    id: 4,
    slug: "meta-dos-fases",
    title: "La Meta de la Cura y el Método en Dos Fases",
    subtitle: "Las fórmulas analíticas y la superación del error técnico (págs. 395–397)",
    tag: "Técnica Psicoanalítica",
    pages: "págs. 395–397",
    formulas: [
      { id: "A", title: "Hacer consciente lo inconsciente", detail: "Translación de los contenidos tópicos reprimidos hacia el sistema consciente." },
      { id: "B", title: "Cancelación de las represiones", detail: "Desactivación de las barreras defensivas erigidas en la infancia." },
      { id: "C", title: "Llenado de las lagunas amnésicas", detail: "Reconstrucción de la continuidad histórica de la biografía pulsional del sujeto." }
    ],
    technicalMistake: {
      title: "El error inicial por 'estrechez de miras'",
      description: "Creer que bastaba con colegir lo inconsciente y simplemente comunicárselo verbalmente al paciente. Freud confiesa: 'Nuestro saber sobre lo inconsciente no equivale al saber de él; cuando se lo comunicamos, él no lo tiene en lugar de su inconsciente, sino junto a él, y es muy poco lo que ha cambiado'."
    },
    twoPhases: [
      {
        step: "Fase 1",
        title: "Rebusca de la Represión",
        desc: "Localizar tópicamente en el recuerdo la escena originaria donde la moción pulsional fue sofocada."
      },
      {
        step: "Fase 2",
        title: "Eliminación de la Resistencia",
        desc: "Desmontar la contrainvestidura sostenida por el Yo que impide el acceso a la conciencia."
      }
    ],
    speakerNotes: {
      timeEstimate: "4 min",
      opening: "Hacer énfasis en la autocrítica de Freud: advertir que el psicoanálisis no es una clase intelectual ni una transmisión teórica de diagnósticos.",
      keyPoints: [
        "Explicar por qué 'informar' al paciente de sus complejos no lo cura: el saber intelectual se aloja junto a la represión, no la sustituye.",
        "La verdadera cura requiere conmover la contrainvestidura (Gegenbesetzung) que sostiene el Yo.",
        "El Yo es nuestro colaborador, aunque su resistencia sea en parte inconsciente."
      ],
      discussionPrompt: "¿Qué ocurre cuando un terapeuta se precipita e interpreta antes de que la resistencia esté trabajada?"
    }
  },
  {
    id: 5,
    slug: "alianza-analogias",
    title: "Las Fuerzas en Juego y las Analogías de Freud",
    subtitle: "¿Con qué recursos cuenta el análisis para vencer la resistencia? (págs. 397–398)",
    tag: "Dinámica de Fuerzas",
    pages: "págs. 397–398",
    drivingForces: [
      {
        title: "1. El Afán de Curación",
        desc: "La pulsión de alivio nacida del propio sufrimiento subjetivo que movió al paciente a pedir auxilio.",
        icon: "heart-pulse"
      },
      {
        title: "2. La Inteligencia del Paciente",
        desc: "Reforzada y orientada mediante las interpretaciones y representaciones-expectativa suministradas por el analista.",
        icon: "brain"
      }
    ],
    analogies: [
      {
        title: "El Aeróstato en el Firmamento",
        text: "«Si yo les digo: 'Miren al cielo, se ve un aeróstato', ustedes lo descubrirán mucho más fácilmente que si me limito a exhortarlos a que busquen con la mirada a ver si hallan algo»."
      },
      {
        title: "El Estudiante ante el Microscopio",
        text: "«El estudiante que mira por primera vez con el microscopio es instruido por el profesor acerca de lo que debe ver; de lo contrario no ve nada, aunque eso esté plenamente visible ahí»."
      }
    ],
    theHistoricalAdvantage: "El Yo infantil reprimió porque era débil, inmaduro y percibió la pulsión como un peligro mortal. El Yo adulto de hoy es fuerte, experimentado, y cuenta con el médico como auxiliar.",
    speakerNotes: {
      timeEstimate: "3 min",
      opening: "Explicar el papel pedagógico y de encuadre en esta fase: dar 'representaciones-expectativa' funciona como un mapa o un lente.",
      keyPoints: [
        "El paciente no puede ver su inconsciente solo, igual que el novato no distingue una célula en el microscopio sin la orientación del docente.",
        "La alianza se forja entre el Yo adulto del paciente y el médico frente a las fijaciones arcaicas.",
        "Sin embargo, todo este esquema puramente racional se verá sacudido por el fenómeno imprevisto de la diapositiva siguiente."
      ],
      discussionPrompt: "¿Es suficiente la inteligencia y la voluntad de sanar para desmontar una neurosis?"
    }
  },
  {
    id: 6,
    slug: "asombro-clinico",
    title: "El Asombro Clínico: Emergencia de la Transferencia",
    subtitle: "El imprevisto que fractura el cálculo aritmético (págs. 399–401)",
    tag: "El Giro Fenomenológico",
    pages: "págs. 399–401",
    phases: [
      {
        title: "1. La 'Primavera' del Análisis",
        subtitle: "La Colaboración Idílica",
        points: [
          "El paciente muestra un interés devoto hacia la persona del analista.",
          "Es sumamente obsequioso, agradecido, dócil y lleno de finuras.",
          "Asimila las interpretaciones con asombrosa rapidez y los síntomas ceden visiblemente.",
          "Los familiares relatan: 'Está entusiasmado con usted, todo lo que usted dice es para él como una revelación... no habla de otra cosa'."
        ],
        tone: "success"
      },
      {
        title: "2. El Colapso Repentino",
        subtitle: "«Un buen día se estropea...»",
        points: [
          "El paciente enmudece: asevera tajante que «nada más se le ocurre».",
          "Pasa por alto la regla fundamental de la asociación libre.",
          "Se distrae de su enfermedad; solo le importa lo relativo a la persona del médico.",
          "Se resiste ferozmente a continuar el trabajo asociativo y busca un pacto afectivo privado."
        ],
        tone: "warning"
      }
    ],
    freudInsight: "El paciente ha transferido sobre el médico intensos sentimientos de ternura que ni la conducta de este ni la relación médica justifican. Esta proclividad afectiva venía de otra parte, ya estaba preparada en el sujeto.",
    speakerNotes: {
      timeEstimate: "4 min",
      opening: "Dramatizar la escena clínica descrita por Freud con vivacidad: el paso de la docilidad extrema a la súbita parálisis asociativa.",
      keyPoints: [
        "Citar el asombro de Freud: creían haber racionalizado la cura como un problema aritmético, y de repente se filtra un elemento no computado.",
        "La advertencia a los analistas jóvenes: no engreírse por los halagos del paciente; no son para la persona real del terapeuta.",
        "La transferencia aparece en ancianos, jóvenes, hombres y mujeres; demuestra que no depende del atractivo físico del médico, sino de la estructura de la afección."
      ],
      discussionPrompt: "¿Qué siente un terapeuta novato cuando un paciente le declara amor apasionado o devoción ciega?"
    }
  },
  {
    id: 7,
    slug: "tipologia-transferencia",
    title: "Tipología y Fenomenología de la Transferencia",
    subtitle: "Manifestaciones tiernas, eróticas y hostiles (págs. 401–403)",
    tag: "Clasificación Clínica",
    pages: "págs. 401–403",
    types: [
      {
        category: "Transferencia Positiva Sublimada",
        desc: "Sentimientos de ternura, confianza, estima amistosa o idealizada (como de padre a hija predilecta).",
        role: "El Motor Impulsor Principal",
        effect: "Mantiene la alianza terapéutica; posibilita la aceptación de interpretaciones complejas.",
        status: "Aliada de la cura"
      },
      {
        category: "Transferencia Positiva Erótica / Pasional",
        desc: "Demanda vehemente de amor carnal, apasionamiento incondicional o reclamo de exclusividad amorosa.",
        role: "Resistencia Feroz",
        effect: "Sustituye el deseo de curarse por el deseo de ser amado; paraliza la asociación libre.",
        status: "Peligro supremo"
      },
      {
        category: "Transferencia Negativa / Hostil",
        desc: "Sentimientos de encono, suspicacia, desacato, celos mortificantes y reproches constantes hacia el analista.",
        role: "Resistencia Abierta & Ambivalencia",
        effect: "Refleja la ambivalencia afectiva constitutiva del ser humano. El desacato implica dependencia inversa.",
        status: "Resistencia activa"
      }
    ],
    genderNote: "En pacientes masculinos, Freud observa mayor frecuencia de formas sublimadas, así como la emergencia patente de la transferencia hostil o negativa como resistencia.",
    speakerNotes: {
      timeEstimate: "4 min",
      opening: "Distinguir nítidamente entre las tres formas de transferencia que Freud delimita en las páginas 401-403.",
      keyPoints: [
        "Aclarar que la hostilidad no contradice la teoría de la libido: proviene de la ambivalencia afectiva (odio y amor entretejidos).",
        "Tanto la demanda erótica desbordada como la hostilidad son intentos del Yo de huir del recuerdo penoso mediante la actuación.",
        "El amor de transferencia no es una excepción romántica: es síntoma y repetición."
      ],
      discussionPrompt: "¿Por qué el desacato o la rebeldía del paciente expresa la misma dependencia afectiva que el acatamiento ciego?"
    }
  },
  {
    id: 8,
    slug: "gran-paradoja-tecnica",
    title: "La Gran Paradoja y el Manejo Técnico",
    subtitle: "«Mudar la repetición en recuerdo» (pág. 403)",
    tag: "Regla Técnica de Oro",
    pages: "pág. 403",
    forbiddenActions: [
      {
        action: "❌ Ceder a la Demanda",
        why: "Sería éticamente inadmisible y terapéuticamente estéril; consumaría la satisfacción neurótica en vez de disolverla."
      },
      {
        action: "❌ Rechazo con Indignación",
        why: "Sería un error grotesco y moralista que reeditaría el rechazo represivo infantil del paciente."
      }
    ],
    theAnalyticSolution: {
      coreMotto: "Mudar la Repetición en Recuerdo",
      mechanism: "Demostrar al paciente con paciencia analítica que sus sentimientos de amor u odio NO provienen de la situación presente ni corresponden a la persona del médico, sino que están repitiendo inconscientemente vivencias y reclamos arcaicos olvidados.",
      outcome: "«Y entonces la trasferencia, que parecía significar la más poderosa amenaza para la cura, se convierte en el mejor instrumento de ella, con cuya ayuda pueden desplegarse los más cerrados abanicos de la vida anímica»."
    },
    speakerNotes: {
      timeEstimate: "4 min",
      opening: "Esta es la diapositiva central de la conferencia. Aquí reside la genialidad técnica de Sigmund Freud.",
      keyPoints: [
        "El analista no responde como objeto real al amor ni a la ira del paciente; opera como superficie de proyección interpretativa.",
        "El paciente no recuerda que odiaba o amaba así a sus padres; lo actúa en presente con el terapeuta.",
        "Hacer ver que 'repites hoy lo que sentiste ayer' transforma la resistencia en material vivo de análisis."
      ],
      discussionPrompt: "¿Qué habilidades clínicas y éticas exige a un profesional sostener la transferencia sin ceder ni rechazar?"
    }
  },
  {
    id: 9,
    slug: "metafora-arbol-neurosis-artificial",
    title: "La Metáfora del Árbol y la Neurosis Artificial",
    subtitle: "La enfermedad como organismo viviente en desarrollo (págs. 403–404)",
    tag: "Modelo Teórico Dinámico",
    pages: "págs. 403–404",
    botanicAnalogy: {
      title: "El Cámbium Vegetal (Capa de Crecimiento)",
      description: "La neurosis no es una piedra tallada o un producto congelado: es un proceso viviente que continúa creciendo. La transferencia opera como la capa celular entre la corteza y la pulpa de un árbol, de la cual surgen los nuevos tejidos y el engrosamiento del tronco."
    },
    transformationFlow: [
      {
        stage: "1. Enfermedad Antigua",
        desc: "Síntomas dispersos, inhibiciones, angustia, obsesiones enraizadas en la historia infantil previa a la consulta."
      },
      {
        stage: "2. Concentración Transferencial",
        desc: "Toda la nueva producción mórbida se concentra en un punto focal único: el vínculo con el médico."
      },
      {
        stage: "3. Neurosis Artificial de Transferencia",
        desc: "Se crea una nueva edición de la afección. El analista está en su centro en calidad de objeto."
      },
      {
        stage: "4. Resolución y Emancipación",
        desc: "Al domeñar esta neurosis artificial, se disuelve la enfermedad original. El analista se hace a un lado y el sujeto queda libre."
      }
    ],
    speakerNotes: {
      timeEstimate: "4 min",
      opening: "Explicar el concepto de 'Neurosis Artificial de Transferencia' (Übertragungsneurose), una de las nociones cumbre del psicoanálisis.",
      keyPoints: [
        "La cura no se realiza en abstracto ni en recuerdos lejanos: se realiza en caliente en la relación terapéutica.",
        "Los síntomas cambian de ropaje: ahora el paciente sufre por si el analista lo estima, si lo despidió a tiempo, etc.",
        "Curar la neurosis de transferencia en el consultorio cura la neurosis histórica del sujeto en su vida exterior."
      ],
      discussionPrompt: "¿Por qué es ventajoso para el analista encontrarse en el centro mismo de la neurosis artificial?"
    }
  },
  {
    id: 10,
    slug: "neurosis-transferencia-vs-narcisistas",
    title: "Neurosis de Transferencia vs. Neurosis Narcisistas",
    subtitle: "El criterio económico de curabilidad y la barrera del narcisismo (págs. 405–407)",
    tag: "Diagnóstico Estructural",
    pages: "págs. 405–407",
    comparison: [
      {
        group: "Neurosis de Transferencia",
        entities: "Histeria de conversión, Histeria de angustia (Fobias), Neurosis Obsesiva",
        economy: "Libido de Objeto conservada",
        transferenceCapacity: "Intensa, viva y operable",
        analyticSuccess: "Accesibles y curables mediante el dispositivo analítico",
        reaction: "Invierten libidinosamente la persona del médico; prestan creencia a la palabra analítica."
      },
      {
        group: "Neurosis Narcisistas",
        entities: "Paranoia (Psicosis paranoide), Melancolía, Dementia Praecox (Esquizofrenia)",
        economy: "Libido retirada al Yo (Libido yoica)",
        transferenceCapacity: "Ausente o con restos insuficientes",
        analyticSuccess: "Inmunes e inaccesibles al psicoanálisis clásico freudiano",
        reaction: "Reciben al médico con indiferencia helada; no establecen investidura objetal."
      }
    ],
    epistemologicalQuote: "Un ser humano es accesible también desde su costado intelectual únicamente en la medida en que es capaz de investir libidinosamente objetos; y tememos en la magnitud de su narcisismo una barrera contra la posibilidad de influirlo.",
    speakerNotes: {
      timeEstimate: "4 min",
      opening: "Contextualizar la frontera clínica de Freud en 1916 respecto a la psicosis y la melancolía.",
      keyPoints: [
        "Freud no culpa al intelecto: destaca que los paranoicos suelen ser sumamente sagaces e inteligentes.",
        "Tampoco falta conciencia de enfermedad en los melancólicos: sufren atrozmente, pero no pueden ligar su libido al médico.",
        "La transferencia demuestra ser el requisito previo indispensable para que la interpretación tenga eficacia simbólica."
      ],
      discussionPrompt: "¿Cómo evolucionó este postulado freudiano con las posteriores escuelas psicoanalíticas (Klein, Lacan) sobre la psicosis?"
    }
  },
  {
    id: 11,
    slug: "transferencia-vs-sugestion",
    title: "Transferencia, Sugestión e Hipnosis",
    subtitle: "La réplica a Bernheim y la objeción del auditorio (págs. 405–406)",
    tag: "Epistemología Comparada",
    pages: "págs. 405–406",
    theAudienceObjection: "«¿Conque ha admitido que trabaja con el poder auxiliar de la sugestión? ¿Para qué todo el rodeo por el inconsciente y los recuerdos si lo único eficaz es la sugestión? ¿Por qué no aplica sugestión directa contra los síntomas como los hipnotizadores?»",
    comparisonTable: [
      {
        aspect: "Origen Teórico",
        hypnosis: "Considera la 'sugestionabilidad' un hecho inexplicable y primitivo.",
        psychoanalysis: "Descubre que la sugestión proviene de la sexualidad y de la libido objetal (transferencia)."
      },
      {
        aspect: "Modo de Operar",
        hypnosis: "Sugestión directa: ordena al síntoma desaparecer, imponiendo la autoridad del médico.",
        psychoanalysis: "Sugestión indirecta / transferencia: presta crédito a la palabra para vencer resistencias del Yo."
      },
      {
        aspect: "Resultado Final",
        hypnosis: "Dependencia perpetua; el síntoma reaparece o migra al cesar el influjo hipnótico.",
        psychoanalysis: "Disolución de la transferencia; autonomía plena del paciente frente a sus represiones."
      }
    ],
    freudPunchline: "«Hemos abandonado la hipnosis en nuestra técnica sólo para redescubrir la sugestión bajo la forma de la trasferencia»... pero despojándola de su carácter encubridor para transformarla en autoconocimiento.",
    speakerNotes: {
      timeEstimate: "3 min",
      opening: "Plantear la objeción provocadora que Freud anticipa de sus propios oyentes burgueses y médicos.",
      keyPoints: [
        "Freud no niega que haya un componente sugestivo: la creencia es un retoño del amor libidinal hacia el médico.",
        "Pero la diferencia capital: el hipnotizador prohíbe hablar y manda callar al síntoma; el analista usa el lazo para que lo reprimido hable y se recuerde.",
        "Al finalizar el análisis, el analista no queda entronizado como amo: se disuelve el vínculo."
      ],
      discussionPrompt: "¿Qué riesgos entraña confundir el psicoanálisis con una práctica de sugestión o coaching directivo?"
    }
  },
  {
    id: 12,
    slug: "laboratorio-clinico",
    title: "Laboratorio Clínico: Casos y Dilemas Técnicos",
    subtitle: "Ponga a prueba los principios técnicos de la Conferencia 27",
    tag: "Interactividad Dinámica",
    pages: "Casos basados en págs. 400–404",
    cases: [
      {
        id: "caso1",
        title: "Caso A: La Declaración Intempestiva de Amor",
        vignette: "Una paciente interrumpe la asociación libre y le confiesa: 'Doctor, me he dado cuenta de que usted es el único hombre que puede hacerme feliz. Solo su amor me curará; nada de lo que hablemos tiene sentido si usted no me corresponde'.",
        options: [
          {
            text: "Aceptar discretamente un vínculo afectivo fuera del consultorio para no frustrar la mejoría de la paciente.",
            verdict: "Error Fatal",
            feedback: "Queda terminantemente excluido ceder a las demandas amorosas; destruiría el tratamiento y reeditaría la neurosis.",
            isCorrect: false
          },
          {
            text: "Indignarse con severidad moral y reprender a la paciente por faltar al respeto del contrato médico.",
            verdict: "Error Técnico",
            feedback: "Freud señala expresamente que sería absurdo rechazarlo con indignación; eso confirmaría la represión previa.",
            isCorrect: false
          },
          {
            text: "Interpretar que ese reclamo amoroso es una reedición de afectos infantiles, mudando la repetición en recuerdo.",
            verdict: "Conducta Psicoanalítica Correcta",
            feedback: "¡Exacto! Se le demuestra que sus sentimientos no nacen de la persona del médico, sino que repiten fijaciones arcaicas.",
            isCorrect: true
          }
        ]
      },
      {
        id: "caso2",
        title: "Caso B: El Silencio Repentino («Nada más se me ocurre»)",
        vignette: "Un paciente que venía asociando con fluidez y brillantez se queda mudo varios minutos. Al preguntarle, responde secamente que su mente está en blanco y que el análisis ya no le despierta interés.",
        options: [
          {
            text: "Indicarle que la transferencia tierna se ha convertido en resistencia o que una moción erótica/hostil hacia el médico está siendo reprimida.",
            verdict: "Intervención Certera",
            feedback: "¡Brillante! Freud enseña que cuando el paciente suspende la regla fundamental diciendo que no tiene ocurrencias, es señal inequívoca de una resistencia transferencial.",
            isCorrect: true
          },
          {
            text: "Dar por terminada la sesión y sugerirle que regrese cuando tenga temas interesantes que conversar.",
            verdict: "Abandono Técnico",
            feedback: "Inadecuado. El silencio no es falta de contenido, sino el punto álgido de la resistencia que exige interpretación.",
            isCorrect: false
          },
          {
            text: "Sugerirle temas intelectuales o aconsejarle lecturas de autoayuda para reactivar la charla.",
            verdict: "Desvío Antianalítico",
            feedback: "El analista no es profesor ni animador de tertulias; intervenir así elude el conflicto transferencial.",
            isCorrect: false
          }
        ]
      },
      {
        id: "caso3",
        title: "Caso C: El Paciente Paranoide Indiferente",
        vignette: "Un sujeto con ideas persecutorias complejas y alta capacidad intelectual asiste a consulta, pero escucha las intervenciones con total frialdad y desapego afectivo, sin ligar ningún interés a la persona del analista.",
        options: [
          {
            text: "Insistir en darle más explicaciones lógicas sobre la falsedad de sus delirios persecutorios.",
            verdict: "Inutilidad Discursiva",
            feedback: "Los argumentos racionales no operan sin investidura libidinal previa; la sagacidad del paranoico desbarata toda lógica.",
            isCorrect: false
          },
          {
            text: "Reconocer la barrera del narcisismo: la libido de objeto retirada al Yo impide el establecimiento de la transferencia.",
            verdict: "Diagnóstico Estructural Preciso",
            feedback: "¡Correcto! Freud postula que en las neurosis narcisistas falta la capacidad transferencial necesaria para el mecanismo de curación.",
            isCorrect: true
          },
          {
            text: "Utilizar hipnosis directa para forzar la transferencia positiva.",
            verdict: "Inviable",
            feedback: "La hipnosis se basa en la misma sugestionabilidad libidinal que en el narcisismo se encuentra bloqueada.",
            isCorrect: false
          }
        ]
      }
    ],
    speakerNotes: {
      timeEstimate: "5 min",
      opening: "Invitar al público o a los estudiantes a votar en tiempo real antes de mostrar las retroalimentaciones.",
      keyPoints: [
        "Permite consolidar de manera interactiva los tres axiomas técnicos: la abstinencia analítica, la lectura del silencio como transferencia, y el límite del narcisismo.",
        "Genera dinamismo y participación activa en una exposición académica o clase universitaria."
      ],
      discussionPrompt: "¿Cuál de estos tres escenarios resulta más desafiante en la clínica contemporánea?"
    }
  },
  {
    id: 13,
    slug: "glosario-conceptos",
    title: "Glosario Fundamental de la 27ª Conferencia",
    subtitle: "Conceptos nucleares extraídos directamente del texto freudiano",
    tag: "Léxico Especializado",
    pages: "Vocabulario Técnico Freudiano",
    terms: [
      {
        term: "Trasferencia (Übertragung)",
        definition: "Proceso mediante el cual el paciente adjudica y revive sobre la figura del analista mociones afectivas, demandas amorosas u hostilidades arcaicas reprimidas, procedentes de sus relaciones infantiles primordiales."
      },
      {
        term: "Contrainvestidura (Gegenbesetzung)",
        definition: "Gasto de energía psíquica erigido por el Yo consciente/preconsciente para mantener reprimida una moción pulsional chocante; se manifiesta en la cura bajo la forma de resistencia."
      },
      {
        term: "Neurosis Artificial de Transferencia",
        definition: "Nueva versión remodelada de la enfermedad antigua que se engendra en el seno del tratamiento analítico, concentrando todos los síntomas patológicos alrededor de la relación viva con el médico."
      },
      {
        term: "Ambivalencia Afectiva",
        definition: "Coexistencia simultánea de sentimientos de amor y de odio de igual intensidad hacia el mismo objeto psíquico, origen fundamental de la alternancia entre transferencia tierna y hostil."
      },
      {
        term: "Mudar Repetición en Recuerdo",
        definition: "Principio técnico rector que consiste en despojar a la actuación transferencial de su carácter de presente real para restituirle su condición de memoria histórica reprimida."
      },
      {
        term: "Libido de Objeto vs. Libido Yoica",
        definition: "División económica de la energía sexual: vertida hacia las personas del mundo exterior (posibilita la transferencia) o replegada narcisistamente sobre el propio Yo (bloquea la terapia analítica)."
      }
    ],
    speakerNotes: {
      timeEstimate: "3 min",
      opening: "Revisar los términos técnicos esenciales que los estudiantes de psicología o asistentes deben dominar al leer este texto.",
      keyPoints: [
        "Fijar con precisión la traducción canónica de Amorrortu (trasferencia con o sin 's').",
        "Destacar la relación entre contrainvestidura y resistencia."
      ],
      discussionPrompt: "¿Cómo se vincula el concepto de 'neurosis de transferencia' con el acting out posterior?"
    }
  },
  {
    id: 14,
    slug: "sintesis-clausura",
    title: "Síntesis Magistral y Clausura",
    subtitle: "Conclusiones de la 27ª Conferencia de Sigmund Freud",
    tag: "Epílogo & Recursos",
    pages: "págs. 392–407",
    takeaways: [
      {
        number: "I",
        text: "La transferencia no es un artificio del analista ni un obstáculo contingente, sino la manifestación viva y necesaria de la naturaleza misma de la neurosis."
      },
      {
        number: "II",
        text: "El analista renuncia tanto a la satisfacción pulsional como al rechazo moral: su labor es devolver al paciente su propia verdad reprimida para forjar su autonomía."
      },
      {
        number: "III",
        text: "Al someter a análisis la neurosis artificial creada en la cura, se libera al sujeto de sus cadenas históricas; el médico se retira y el individuo conquista su propia vida."
      }
    ],
    closingQuote: "«Todos los síntomas del enfermo han abandonado su significado originario y se han incorporado a un sentido nuevo en la relación con el médico... El hombre que en la relación con el médico ha pasado a ser normal y libre del efecto de unas mociones reprimidas, sigue siéndolo también en su vida propia cuando el médico se ha hecho a un lado.» — Sigmund Freud, pág. 404.",
    speakerNotes: {
      timeEstimate: "3 min",
      opening: "Cerrar con una reflexión apasionada sobre el rigor y la audacia ética del descubrimiento freudiano.",
      keyPoints: [
        "Agradecer la atención del auditorio.",
        "Mencionar que la diapositiva web cuenta con modo imprimible para generar apuntes de clase en PDF.",
        "Abrir el espacio para preguntas y coloquio."
      ],
      discussionPrompt: "¿Qué legado nos deja la 27ª conferencia para la clínica del siglo XXI?"
    }
  }
];
