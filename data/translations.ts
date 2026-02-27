export const TRANSLATIONS: Record<string, any> = {
  en: {
    nav: {
      home: "Home",
      eligibility: "Do I Qualify?",
      process: "Step-by-Step Process",
      timeline: "Wait Times & Visa Bulletin",
      workpermit: "Work Permit & Deferred Action",
      parents: "Can I Petition Parents?",
      privacy: "Privacy",
      terms: "Terms",
    },
    hero: {
      title: "Special Immigrant Juvenile Status (SIJS) 2026: Complete Guide & Process",
      subtitle: "Understand SIJS from start to finish — eligibility, state court orders, I-360, EB-4 visa wait times, deferred action, work permits, and what changed in 2025–2026. Information for youth, guardians, and their attorneys.",
      cta_primary: "Check Eligibility",
      cta_secondary: "Speak with an Attorney",
    },
    cards: {
      eligibility_title: "Do I Qualify for SIJS?",
      eligibility_desc: "Key requirements: age, marital status, presence in the U.S., state court findings of abuse, neglect, or abandonment, and best interest determination.",
      process_title: "Step-by-Step Process",
      process_desc: "From state court order to I-360 petition, EB-4 category, and adjustment of status (I-485) — every stage explained with documents needed.",
      timeline_title: "Wait Times & Visa Bulletin",
      timeline_desc: "EB-4 priority dates, Final Action Dates vs. Dates for Filing, current Visa Bulletin data for February 2026, and how to track your case.",
      workpermit_title: "Work Permit & Deferred Action",
      workpermit_desc: "The most sensitive topic in 2025–2026: what changed with deferred action, the A.C.R. v. Noem litigation, and the current status of EAD eligibility.",
      parents_title: "Can I Petition My Parents?",
      parents_desc: "A direct and important answer: SIJS-based permanent residents cannot sponsor parents for immigration benefits. What this means and why.",
    },
    eligibility: {
      title: "Do I Qualify for SIJS?",
      subtitle: "Special Immigrant Juvenile Status is designed for certain minors and youth in the United States who need protection. Here are the core requirements.",
      what_title: "What is SIJS?",
      what_desc: "Special Immigrant Juvenile Status (SIJS) is a protection-based immigration classification for children and youth in the United States who cannot safely reunify with one or both parents due to abuse, neglect, or abandonment. SIJS itself does not directly grant immigration status — it is the critical first classification that then allows the youth to pursue lawful permanent residence (green card) through the EB-4 immigrant visa category.",
      reqs_title: "Core Requirements",
      reqs: [
        { label: "Present in the United States", desc: "You must be physically present in the U.S. at the time of filing." },
        { label: "Under 21 years old and unmarried", desc: "You must be under 21 and not married. Age requirements may vary slightly by state for the state court proceedings." },
        { label: "State court order with required findings", desc: "A state juvenile, family, or probate court must issue an order that includes specific findings (see below)." },
        { label: "Dependency, custody, or guardianship", desc: "The court must declare you dependent on the court, or place you under the custody/guardianship of an individual or state agency." },
        { label: "Reunification not viable with one or both parents", desc: "The court must find that reunification with one or both parents is not viable due to abuse, neglect, or abandonment. Definitions vary by state." },
        { label: "Best interest determination", desc: "The court must find that it is not in your best interest to be returned to your (or your parents') country of origin." },
      ],
      important_title: "Key Limitation",
      important_desc: "If you obtain permanent residence through SIJS, you will NOT be able to petition for immigration benefits for your parents — including the parent who did not cause harm. This is a permanent restriction under the law and often surprises applicants. Additionally, you cannot include other family members as derivatives in your SIJS case, unlike some other immigration benefits such as asylum or T/U visas.",
      who_title: "Who Can Be a Guardian?",
      who_desc: "The guardian or custodian can be a family member, a non-relative, or a state agency. In many states, the guardian's own immigration status is not a barrier — an undocumented person may serve as guardian in certain jurisdictions. However, this varies significantly by state. Consult an attorney familiar with your state's laws.",
      state_title: "State-by-State Variations",
      state_desc: "The definitions of 'abuse,' 'neglect,' and 'abandonment' vary by state. The type of court that has jurisdiction (juvenile court, family court, probate court) also varies. Some states have specific SIJS-related statutes, while others handle these findings through general dependency or guardianship proceedings. An attorney experienced in your state's family/juvenile law is essential.",
    },
    process: {
      title: "SIJS Process: Step by Step",
      subtitle: "The SIJS path involves multiple agencies and courts. Here is each stage from beginning to end.",
      step1_title: "Step 1: State Court Proceedings",
      step1_desc: "The process begins in a state court — typically a juvenile court, family court, or probate court depending on your state. The goal is to obtain a court order that includes the three required SIJS findings:",
      step1_findings: [
        "Declaration of dependency on the court, or custody/guardianship by an individual or agency",
        "Finding that reunification with one or both parents is not viable due to abuse, neglect, or abandonment",
        "Finding that it is not in the minor's best interest to return to the country of origin"
      ],
      step1_note: "The court order must contain all three findings. An incomplete order is one of the most common reasons for SIJS petition denials.",
      step2_title: "Step 2: USCIS Petition — Form I-360",
      step2_desc: "Once you have the state court order with the required findings, file Form I-360 (Petition for Amerasian, Widow(er), or Special Immigrant) with USCIS. This is the petition for SIJ classification.",
      step2_points: [
        "There is no filing fee for the I-360 SIJ petition",
        "Should be filed before turning 21 — age is determined at the time of filing",
        "Include a copy of the state court order with the required findings",
        "Include evidence of age (birth certificate, passport)",
        "Include evidence of presence in the United States",
        "USCIS consent: USCIS must consent to the SIJ classification as part of the adjudication"
      ],
      step3_title: "Step 3: Wait for Visa Availability (EB-4)",
      step3_desc: "SIJS falls under the EB-4 (Employment-Based Fourth Preference) immigrant visa category, specifically 'Certain Special Immigrants.' Because there are annual limits on EB-4 visas, there may be a significant wait before a visa number becomes available.",
      step3_points: [
        "Your priority date is generally the date your I-360 was filed",
        "Check the monthly Visa Bulletin from the Department of State",
        "When your priority date is 'current' according to the Final Action Dates chart, you can proceed to adjustment of status",
        "Wait times vary and can be several years depending on demand"
      ],
      step4_title: "Step 4: Adjustment of Status — Form I-485",
      step4_desc: "When a visa number is available (your priority date is current), file Form I-485 (Application to Register Permanent Residence or Adjust Status) to obtain your green card.",
      step4_points: [
        "File I-485 when your priority date is current per the Visa Bulletin",
        "Include medical examination (Form I-693)",
        "Biometrics appointment will be scheduled",
        "Interview may or may not be required",
        "Upon approval, you receive lawful permanent resident status (green card)"
      ],
      docs_title: "Common Documents Needed Throughout the Process",
      docs: [
        "Birth certificate (with certified English translation if not in English)",
        "State court order with all three SIJS findings",
        "Passport or other identity document (if available)",
        "Evidence of presence in the United States",
        "Form I-360 and supporting evidence",
        "Form I-485 and supporting evidence (when eligible)",
        "Medical examination (I-693) for adjustment of status",
        "Two passport-style photographs",
        "Any prior immigration documents or records"
      ],
      errors_title: "Common Mistakes to Avoid",
      errors: [
        "Incomplete state court order missing one or more of the three required findings",
        "Filing I-360 after turning 21",
        "Not including certified translations of foreign-language documents",
        "Filing I-485 before your priority date is current",
        "Failing to maintain the court order — some states require periodic review",
        "Not addressing jurisdiction issues (wrong type of court for your state)"
      ],
    },
    timeline: {
      title: "SIJS Wait Times & Visa Bulletin (2026)",
      subtitle: "Understanding priority dates, EB-4 cut-offs, and how to know when you can file for your green card.",
      what_title: "How the Visa Bulletin Works",
      what_desc: "The Visa Bulletin is published monthly by the Department of State. It shows the 'cut-off dates' for each visa category. For SIJS, you look at the EB-4 category under 'Certain Special Immigrants.' There are two charts that matter:",
      charts: [
        { label: "Final Action Dates", desc: "This is the main chart. When your priority date is earlier than the date shown, a visa number is available and you can file I-485 (or it can be approved if already filed)." },
        { label: "Dates for Filing", desc: "This chart may allow you to file I-485 earlier, but USCIS must announce each month whether they will accept filings based on this chart. Check the USCIS website for the current month's guidance." },
      ],
      current_title: "Current Data (February 2026)",
      current_desc: "For February 2026, the EB-4 Final Action Date for 'Certain Special Immigrants' is 01JAN21 (January 1, 2021) for all chargeability areas, including Mexico. This means if your I-360 was filed (priority date) before January 1, 2021, a visa number may be available.",
      current_note: "This data changes monthly. Always verify with the official Visa Bulletin at travel.state.gov before taking any action.",
      priority_title: "What is My Priority Date?",
      priority_desc: "Your priority date is typically the date USCIS received your I-360 petition. This date is used to determine your place in line for a visa number. You can find it on your I-360 receipt notice.",
      wait_title: "How Long is the Wait?",
      wait_desc: "Wait times depend on the difference between your priority date and the current EB-4 cut-off. As of February 2026, there is approximately a 5-year backlog for SIJS cases. Wait times can increase or decrease depending on demand and annual visa allocations. During this waiting period, other protections (like deferred action) become critical — see the Work Permit & Deferred Action section.",
      check_title: "Can I File I-485 Now?",
      check_steps: [
        "Find your priority date on your I-360 receipt notice",
        "Check the current month's Visa Bulletin at travel.state.gov",
        "Look at the EB-4 row under Final Action Dates for your chargeability area",
        "If your priority date is BEFORE the date shown, you may be eligible to file I-485",
        "Also check whether USCIS is accepting Dates for Filing for that month — this may allow earlier filing"
      ],
    },
    workpermit: {
      title: "Work Permit & Deferred Action for SIJS (2025–2026 Update)",
      subtitle: "This is the most rapidly changing and anxiety-producing aspect of SIJS right now. Here is what happened, where things stand, and what it means for you.",
      last_updated: "Last updated: February 2026",
      overview_title: "What Are Deferred Action and EAD?",
      overview_desc: "Deferred action is a discretionary determination by USCIS not to pursue removal of an individual for a specified period. It does not grant legal status, but it can provide temporary protection from deportation and, importantly, eligibility for an Employment Authorization Document (EAD) — a work permit. For SIJS youth waiting years for a visa number to become available, deferred action and a work permit can be essential.",
      history_title: "What Changed in 2025–2026",
      history_events: [
        { date: "Before June 2025", desc: "When USCIS approved an I-360 SIJ petition, it historically also considered deferred action and could issue work authorization (EAD) — typically for 4 years — while the youth waited for a visa number." },
        { date: "June 6, 2025", desc: "USCIS issued guidance stating it would no longer consider deferred action solely because a visa was not available. This effectively cut off the pathway to work permits for many SIJS-approved youth." },
        { date: "November 19, 2025", desc: "In the lawsuit A.C.R. v. Noem, a court issued a stay that, in practice, reinstated deferred action adjudications under the previous (2022) policy framework. However, the order does not require USCIS to decide cases within any specific timeframe." },
        { date: "February 2026 (Current)", desc: "All individuals with approved SIJS petitions are again entitled to have their deferred action requests adjudicated — but there is no guaranteed timeline for decisions." },
      ],
      standards_title: "Current Standards (as of February 18, 2026)",
      standards_desc: "The court's order created different standards depending on when your I-360 was approved:",
      standards: [
        { group: "I-360 approved between April 7, 2025 and June 6, 2025", standard: "The court required USCIS to apply a more favorable standard: the SIJ classification is treated as a strong factor favoring deferred action." },
        { group: "I-360 approved on or after June 6, 2025, and renewals", standard: "USCIS may apply a less favorable standard with more discretion in deciding whether to grant deferred action." },
      ],
      appeal_title: "Ongoing Litigation",
      appeal_desc: "On February 3, 2026, the plaintiffs appealed the portion of the court order that allows the less favorable standard. Separately, the government has indicated that USCIS intends to 'revisit' the deferred action program to decide whether to continue, revise, or terminate it — with a potential decision by early April 2026.",
      risk_title: "What This Means for You",
      risk_points: [
        "If you have an approved I-360 and have not yet received deferred action, you are entitled to have your request adjudicated — but there is no deadline for USCIS to decide.",
        "The standard applied to your case may differ depending on when your I-360 was approved.",
        "There is ongoing uncertainty: the government may change the program again by April 2026.",
        "If deferred action is denied, you should consult an attorney about your options — a denial of deferred action is not the same as a removal order.",
        "If you have a pending removal case in immigration court, the interaction between SIJS and removal proceedings requires careful legal strategy.",
      ],
      ead_title: "About the Work Permit (EAD)",
      ead_desc: "If deferred action is granted, you can apply for an Employment Authorization Document (EAD) using Form I-765. The EAD allows you to work legally in the United States for the period of your deferred action. If your deferred action expires, you may need to request renewal — but the standards for renewal may differ from the initial grant (see the different standards above).",
      faq_title: "Common Questions",
      faq: [
        { q: "What if my deferred action is denied?", a: "A denial of deferred action does not mean you will be deported. It means you do not have protection from removal or work authorization during the wait. Consult an attorney about other possible protections or strategies for your situation." },
        { q: "Can I renew my deferred action?", a: "Renewal is possible, but the standard applied may be the less favorable one depending on current policy. The litigation is ongoing and standards could change." },
        { q: "What if I have a case in immigration court?", a: "Having a pending removal case does not automatically disqualify you from SIJS or deferred action, but the interaction is complex. An attorney experienced in both juvenile and immigration proceedings is essential." },
      ],
    },
    parents: {
      title: "Can I Petition for My Parents Through SIJS?",
      subtitle: "This is one of the most common and important questions about SIJS. The answer may not be what you expect.",
      answer_title: "The Direct Answer",
      answer_desc: "No. If you obtain lawful permanent residence (green card) through SIJS, you are permanently barred from petitioning for immigration benefits for your parents. This applies to both parents — including the parent who did not cause the abuse, neglect, or abandonment that formed the basis of your SIJS claim.",
      why_title: "Why This Restriction Exists",
      why_desc: "Congress included this restriction in the Immigration and Nationality Act (INA § 101(a)(27)(J)) to prevent potential misuse of the SIJS process. The concern was that parents could facilitate a child's SIJS claim as a pathway to their own immigration benefits. Regardless of the reasoning, the restriction is absolute under current law.",
      scope_title: "What Exactly Is Restricted?",
      scope_points: [
        "You cannot file a family-based immigrant petition (I-130) for either parent",
        "This restriction applies even if you later become a U.S. citizen through naturalization",
        "This restriction is permanent — it does not expire",
        "This only applies to parents, not to other family relationships (e.g., you may be able to petition for a spouse or children in the future through other pathways)",
      ],
      comparison_title: "How This Differs From Other Immigration Benefits",
      comparison_desc: "Unlike asylum, T visas (trafficking victims), or U visas (crime victims), SIJS does not allow you to include family members as 'derivatives' in your case. Each person's immigration case must be evaluated separately. Other immigration benefits may have derivative provisions — SIJS does not.",
      advice_title: "What This Means in Practice",
      advice_desc: "If you are considering SIJS and your parent(s) also need immigration relief, it is critical to discuss all options with an attorney before proceeding. In some cases, a parent may have their own independent path to immigration benefits (asylum, VAWA, U visa, etc.) that should be explored simultaneously. The SIJS restriction on parent petitions does not prevent a parent from pursuing their own case independently.",
    },
    faq: {
      title: "Frequently Asked Questions About SIJS",
      items: [
        {
          q: "What is SIJS and who is it for?",
          a: "Special Immigrant Juvenile Status (SIJS) is an immigration classification for minors and youth (generally under 21, unmarried) in the United States who cannot safely reunify with one or both parents due to abuse, neglect, or abandonment. A state court must make specific findings, and then the youth can petition USCIS for SIJ classification as a step toward permanent residence."
        },
        {
          q: "Does SIJS give me a green card automatically?",
          a: "No. SIJS is a classification, not a status by itself. After USCIS approves your I-360 SIJ petition, you must wait for a visa number to become available under the EB-4 category (which may take years due to backlogs), and then apply for adjustment of status (I-485) to get your green card."
        },
        {
          q: "What happens while I wait for a visa number?",
          a: "During the wait, you may be eligible for deferred action and a work permit (EAD), depending on current USCIS policy. This area has changed significantly in 2025–2026 due to policy changes and litigation. See the Work Permit & Deferred Action section for current details."
        },
        {
          q: "How long is the wait for SIJS green card?",
          a: "As of February 2026, the EB-4 Final Action Date is January 1, 2021, meaning there is roughly a 5-year backlog. Wait times change monthly based on demand and visa availability."
        },
        {
          q: "Can my parent be undocumented and still be my guardian?",
          a: "In many states, the guardian's immigration status is not a barrier to being appointed as a guardian or custodian for SIJS purposes. However, this varies by state and jurisdiction. Consult an attorney who is familiar with your state's laws."
        },
        {
          q: "What counts as abuse, neglect, or abandonment?",
          a: "These terms are defined by your state's laws, not federal immigration law. Definitions vary significantly from state to state. Generally, abuse includes physical, emotional, or sexual harm. Neglect involves failure to provide adequate care. Abandonment can include a parent leaving or failing to maintain a parental relationship. An attorney can evaluate your specific circumstances under your state's law."
        },
        {
          q: "Can I be deported while my SIJS case is pending?",
          a: "Having a pending SIJS case does not automatically protect you from removal proceedings. However, if you have been granted deferred action, that provides temporary protection. If you have a case in immigration court, the interaction between SIJS and removal is complex — work with an attorney."
        },
        {
          q: "What if I turn 21 during the process?",
          a: "Age is generally determined at the time of filing the I-360 petition with USCIS. It is critical to file the I-360 before turning 21. For state court proceedings, age requirements may vary by state — some states have jurisdiction only over minors under 18."
        },
        {
          q: "Can I include my siblings in my SIJS case?",
          a: "No. SIJS does not allow derivative beneficiaries. Each person who may qualify for SIJS must go through their own separate state court proceedings and USCIS petition. However, siblings may each independently qualify for SIJS if they meet the requirements."
        },
        {
          q: "If I get my green card through SIJS, can I petition for my parents later?",
          a: "No. SIJS-based permanent residents are permanently barred from petitioning for immigration benefits for their parents, even after becoming U.S. citizens. This restriction applies to both parents."
        },
        {
          q: "What if my state court order is incomplete?",
          a: "An incomplete state court order that is missing one or more of the three required findings (dependency/custody, non-reunification, best interest) is one of the most common reasons for I-360 denials. It may be possible to go back to state court to amend or supplement the order. Work with an attorney."
        },
        {
          q: "Do I need an attorney for SIJS?",
          a: "While not legally required, SIJS involves both state court proceedings and federal immigration law, making it one of the more complex immigration processes. Having an attorney experienced in both areas significantly improves the chances of a successful outcome. Some legal organizations may offer services — consult resources in your area."
        },
      ],
    },
    timeline_section: {
      title: "Key Facts at a Glance",
      age_label: "Age Limit",
      age_text: "Must be under 21 and unmarried at the time of filing I-360 with USCIS.",
      visa_label: "EB-4 Visa Bulletin",
      visa_text: "February 2026 Final Action Date: 01JAN21 for all chargeability areas. Check monthly for updates.",
      court_label: "State Court Order",
      court_text: "Must include all three findings: dependency/custody, non-reunification, and best interest.",
    },
    footer: {
      about_desc: "An information resource about Special Immigrant Juvenile Status (SIJS) for youth, guardians, and attorneys. Content on eligibility, process, wait times, work permits, and the 2025–2026 policy changes.",
      resources_title: "Quick Resources",
      safety_title: "Useful Links",
      contact_title: "Need Legal Help?",
      rights_reserved: "All Rights Reserved.",
      privacy_policy: "Privacy Policy",
      terms_of_use: "Terms of Use",
      disclaimer: "This site provides general information about Special Immigrant Juvenile Status (SIJS) for educational purposes only. It does not constitute legal advice and does not create an attorney-client relationship. Immigration laws change frequently — always verify with official sources and consult a qualified attorney.",
      safety_warning: "Always verify immigration information with official USCIS and Department of State sources. Laws, policies, and processing times can change without notice.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      eligibility: "¿Califico?",
      process: "Proceso Paso a Paso",
      timeline: "Tiempos de Espera",
      workpermit: "Permiso de Trabajo",
      parents: "¿Puedo Pedir a Mis Papás?",
      privacy: "Privacidad",
      terms: "Términos",
    },
    hero: {
      title: "Estatus Especial de Inmigrante Juvenil (SIJS) 2026: Guía Completa y Proceso",
      subtitle: "Entiende SIJS de principio a fin — elegibilidad, órdenes de corte estatal, I-360, tiempos de espera EB-4, acción diferida, permisos de trabajo y qué cambió en 2025–2026. Información para jóvenes, guardianes y sus abogados.",
      cta_primary: "Verificar Elegibilidad",
      cta_secondary: "Hablar con un Abogado",
    },
    cards: {
      eligibility_title: "¿Califico para SIJS?",
      eligibility_desc: "Requisitos clave: edad, estado civil, presencia en EE.UU., hallazgos de corte estatal sobre abuso, negligencia o abandono, y determinación de mejor interés.",
      process_title: "Proceso Paso a Paso",
      process_desc: "Desde la orden de corte estatal hasta la petición I-360, categoría EB-4 y ajuste de estatus (I-485) — cada etapa explicada con documentos necesarios.",
      timeline_title: "Tiempos de Espera y Visa Bulletin",
      timeline_desc: "Fechas de prioridad EB-4, Final Action Dates vs. Dates for Filing, datos actuales del Visa Bulletin para febrero 2026 y cómo rastrear tu caso.",
      workpermit_title: "Permiso de Trabajo y Acción Diferida",
      workpermit_desc: "El tema más sensible en 2025–2026: qué cambió con la acción diferida, el litigio A.C.R. v. Noem y el estado actual de elegibilidad para EAD.",
      parents_title: "¿Puedo Pedir a Mis Papás?",
      parents_desc: "Una respuesta directa e importante: los residentes permanentes por SIJS no pueden patrocinar a sus padres para beneficios migratorios. Qué significa esto y por qué.",
    },
    eligibility: {
      title: "¿Califico para SIJS?",
      subtitle: "El Estatus Especial de Inmigrante Juvenil está diseñado para ciertos menores y jóvenes en Estados Unidos que necesitan protección. Estos son los requisitos principales.",
      what_title: "¿Qué es SIJS?",
      what_desc: "El Estatus Especial de Inmigrante Juvenil (SIJS) es una clasificación migratoria basada en protección para niños y jóvenes en Estados Unidos que no pueden reunificarse de forma segura con uno o ambos padres debido a abuso, negligencia o abandono. SIJS por sí solo no otorga estatus migratorio directamente — es la clasificación crítica que luego permite al joven buscar la residencia permanente legal (green card) a través de la categoría de visa de inmigrante EB-4.",
      reqs_title: "Requisitos Principales",
      reqs: [
        { label: "Presente en Estados Unidos", desc: "Debes estar físicamente presente en EE.UU. al momento de presentar la solicitud." },
        { label: "Menor de 21 años y soltero/a", desc: "Debes ser menor de 21 y no estar casado/a. Los requisitos de edad pueden variar ligeramente por estado para los procedimientos de corte estatal." },
        { label: "Orden de corte estatal con hallazgos requeridos", desc: "Una corte estatal de menores, familia o sucesiones debe emitir una orden que incluya hallazgos específicos (ver abajo)." },
        { label: "Dependencia, custodia o tutela", desc: "La corte debe declararte dependiente de la corte, o colocarte bajo la custodia/tutela de un individuo o agencia estatal." },
        { label: "Reunificación no viable con uno o ambos padres", desc: "La corte debe encontrar que la reunificación con uno o ambos padres no es viable debido a abuso, negligencia o abandono. Las definiciones varían por estado." },
        { label: "Determinación de mejor interés", desc: "La corte debe encontrar que no es en tu mejor interés ser devuelto/a al país de origen (tuyo o de tus padres)." },
      ],
      important_title: "Limitación Importante",
      important_desc: "Si obtienes la residencia permanente a través de SIJS, NO podrás pedir beneficios migratorios para tus padres — incluyendo al padre/madre que no causó el daño. Esta es una restricción permanente bajo la ley y frecuentemente sorprende a los solicitantes. Además, no puedes incluir a otros familiares como derivados en tu caso SIJS, a diferencia de otros beneficios migratorios como asilo o visas T/U.",
      who_title: "¿Quién Puede Ser Guardián?",
      who_desc: "El guardián o custodio puede ser un familiar, una persona sin parentesco o una agencia estatal. En muchos estados, el estatus migratorio del guardián no es una barrera — una persona indocumentada puede servir como guardián en ciertas jurisdicciones. Sin embargo, esto varía significativamente por estado. Consulta con un abogado familiarizado con las leyes de tu estado.",
      state_title: "Variaciones por Estado",
      state_desc: "Las definiciones de 'abuso,' 'negligencia' y 'abandono' varían por estado. El tipo de corte que tiene jurisdicción (corte de menores, corte de familia, corte de sucesiones) también varía. Algunos estados tienen estatutos específicos relacionados con SIJS, mientras que otros manejan estos hallazgos a través de procedimientos generales de dependencia o tutela. Un abogado con experiencia en la ley familiar/de menores de tu estado es esencial.",
    },
    process: {
      title: "Proceso SIJS: Paso a Paso",
      subtitle: "El camino de SIJS involucra múltiples agencias y cortes. Aquí está cada etapa de principio a fin.",
      step1_title: "Paso 1: Procedimientos en Corte Estatal",
      step1_desc: "El proceso comienza en una corte estatal — típicamente una corte de menores, corte de familia o corte de sucesiones dependiendo de tu estado. El objetivo es obtener una orden de corte que incluya los tres hallazgos requeridos para SIJS:",
      step1_findings: [
        "Declaración de dependencia de la corte, o custodia/tutela por un individuo o agencia",
        "Hallazgo de que la reunificación con uno o ambos padres no es viable debido a abuso, negligencia o abandono",
        "Hallazgo de que no es en el mejor interés del menor regresar al país de origen"
      ],
      step1_note: "La orden de corte debe contener los tres hallazgos. Una orden incompleta es una de las razones más comunes de negación de peticiones SIJS.",
      step2_title: "Paso 2: Petición ante USCIS — Formulario I-360",
      step2_desc: "Una vez que tengas la orden de corte estatal con los hallazgos requeridos, presenta el Formulario I-360 (Petición para Amerasiano, Viudo/a o Inmigrante Especial) ante USCIS. Esta es la petición para la clasificación SIJ.",
      step2_points: [
        "No hay tarifa de presentación para la petición I-360 SIJ",
        "Debe presentarse antes de cumplir 21 años — la edad se determina al momento de la presentación",
        "Incluye una copia de la orden de corte estatal con los hallazgos requeridos",
        "Incluye evidencia de edad (acta de nacimiento, pasaporte)",
        "Incluye evidencia de presencia en Estados Unidos",
        "Consentimiento de USCIS: USCIS debe consentir la clasificación SIJ como parte de la adjudicación"
      ],
      step3_title: "Paso 3: Esperar Disponibilidad de Visa (EB-4)",
      step3_desc: "SIJS cae bajo la categoría de visa de inmigrante EB-4 (Cuarta Preferencia Basada en Empleo), específicamente 'Ciertos Inmigrantes Especiales.' Debido a los límites anuales de visas EB-4, puede haber una espera significativa antes de que un número de visa esté disponible.",
      step3_points: [
        "Tu fecha de prioridad es generalmente la fecha en que se presentó tu I-360",
        "Revisa el Visa Bulletin mensual del Departamento de Estado",
        "Cuando tu fecha de prioridad esté 'vigente' según el cuadro de Final Action Dates, puedes proceder al ajuste de estatus",
        "Los tiempos de espera varían y pueden ser de varios años dependiendo de la demanda"
      ],
      step4_title: "Paso 4: Ajuste de Estatus — Formulario I-485",
      step4_desc: "Cuando un número de visa esté disponible (tu fecha de prioridad está vigente), presenta el Formulario I-485 (Solicitud para Registrar Residencia Permanente o Ajustar Estatus) para obtener tu green card.",
      step4_points: [
        "Presenta I-485 cuando tu fecha de prioridad esté vigente según el Visa Bulletin",
        "Incluye examen médico (Formulario I-693)",
        "Se programará cita de biométricos",
        "La entrevista puede o no ser requerida",
        "Al ser aprobado, recibes estatus de residente permanente legal (green card)"
      ],
      docs_title: "Documentos Comunes Necesarios Durante el Proceso",
      docs: [
        "Acta de nacimiento (con traducción certificada al inglés si no está en inglés)",
        "Orden de corte estatal con los tres hallazgos SIJS",
        "Pasaporte u otro documento de identidad (si está disponible)",
        "Evidencia de presencia en Estados Unidos",
        "Formulario I-360 y evidencia de respaldo",
        "Formulario I-485 y evidencia de respaldo (cuando seas elegible)",
        "Examen médico (I-693) para ajuste de estatus",
        "Dos fotografías tamaño pasaporte",
        "Cualquier documento o registro migratorio previo"
      ],
      errors_title: "Errores Comunes a Evitar",
      errors: [
        "Orden de corte estatal incompleta que no incluye uno o más de los tres hallazgos requeridos",
        "Presentar I-360 después de cumplir 21 años",
        "No incluir traducciones certificadas de documentos en idioma extranjero",
        "Presentar I-485 antes de que tu fecha de prioridad esté vigente",
        "No mantener la orden de corte — algunos estados requieren revisión periódica",
        "No abordar problemas de jurisdicción (tipo incorrecto de corte para tu estado)"
      ],
    },
    timeline: {
      title: "Tiempos de Espera SIJS y Visa Bulletin (2026)",
      subtitle: "Entendiendo fechas de prioridad, cut-offs EB-4 y cómo saber cuándo puedes presentar tu solicitud de green card.",
      what_title: "Cómo Funciona el Visa Bulletin",
      what_desc: "El Visa Bulletin es publicado mensualmente por el Departamento de Estado. Muestra las 'fechas de corte' para cada categoría de visa. Para SIJS, debes ver la categoría EB-4 bajo 'Ciertos Inmigrantes Especiales.' Hay dos cuadros importantes:",
      charts: [
        { label: "Final Action Dates", desc: "Este es el cuadro principal. Cuando tu fecha de prioridad es anterior a la fecha mostrada, un número de visa está disponible y puedes presentar I-485 (o puede ser aprobado si ya fue presentado)." },
        { label: "Dates for Filing", desc: "Este cuadro puede permitirte presentar I-485 antes, pero USCIS debe anunciar cada mes si aceptará presentaciones basadas en este cuadro. Revisa el sitio web de USCIS para la guía del mes actual." },
      ],
      current_title: "Datos Actuales (Febrero 2026)",
      current_desc: "Para febrero 2026, la Final Action Date de EB-4 para 'Ciertos Inmigrantes Especiales' es 01ENE21 (1 de enero de 2021) para todas las áreas de imputación, incluyendo México. Esto significa que si tu I-360 fue presentado (fecha de prioridad) antes del 1 de enero de 2021, un número de visa puede estar disponible.",
      current_note: "Estos datos cambian mensualmente. Siempre verifica con el Visa Bulletin oficial en travel.state.gov antes de tomar cualquier acción.",
      priority_title: "¿Cuál es Mi Fecha de Prioridad?",
      priority_desc: "Tu fecha de prioridad es típicamente la fecha en que USCIS recibió tu petición I-360. Esta fecha se usa para determinar tu lugar en la fila para un número de visa. Puedes encontrarla en tu aviso de recibo del I-360.",
      wait_title: "¿Cuánto Tarda la Espera?",
      wait_desc: "Los tiempos de espera dependen de la diferencia entre tu fecha de prioridad y el cut-off actual de EB-4. A partir de febrero 2026, hay aproximadamente 5 años de atraso para casos SIJS. Los tiempos de espera pueden aumentar o disminuir dependiendo de la demanda y asignaciones anuales de visas. Durante este período de espera, otras protecciones (como la acción diferida) se vuelven críticas — consulta la sección de Permiso de Trabajo y Acción Diferida.",
      check_title: "¿Puedo Presentar I-485 Ahora?",
      check_steps: [
        "Encuentra tu fecha de prioridad en tu aviso de recibo del I-360",
        "Revisa el Visa Bulletin del mes actual en travel.state.gov",
        "Busca la fila EB-4 bajo Final Action Dates para tu área de imputación",
        "Si tu fecha de prioridad es ANTERIOR a la fecha mostrada, puedes ser elegible para presentar I-485",
        "También revisa si USCIS está aceptando Dates for Filing para ese mes — esto puede permitir presentar antes"
      ],
    },
    workpermit: {
      title: "Permiso de Trabajo y Acción Diferida para SIJS (Actualización 2025–2026)",
      subtitle: "Este es el aspecto de SIJS que más rápido cambia y más ansiedad genera actualmente. Aquí está qué pasó, dónde estamos y qué significa para ti.",
      last_updated: "Última actualización: Febrero 2026",
      overview_title: "¿Qué Son la Acción Diferida y el EAD?",
      overview_desc: "La acción diferida es una determinación discrecional de USCIS de no proceder con la remoción de una persona por un período específico. No otorga estatus legal, pero puede proporcionar protección temporal contra la deportación y, crucialmente, elegibilidad para un Documento de Autorización de Empleo (EAD) — un permiso de trabajo. Para jóvenes con SIJS esperando años para que un número de visa esté disponible, la acción diferida y un permiso de trabajo pueden ser esenciales.",
      history_title: "Qué Cambió en 2025–2026",
      history_events: [
        { date: "Antes de junio 2025", desc: "Cuando USCIS aprobaba una petición I-360 SIJ, históricamente también consideraba acción diferida y podía emitir autorización de trabajo (EAD) — típicamente por 4 años — mientras el joven esperaba un número de visa." },
        { date: "6 de junio de 2025", desc: "USCIS emitió guía indicando que ya no consideraría acción diferida solo porque una visa no estaba disponible. Esto efectivamente cortó el camino a permisos de trabajo para muchos jóvenes con SIJS aprobado." },
        { date: "19 de noviembre de 2025", desc: "En la demanda A.C.R. v. Noem, un tribunal emitió un stay que, en la práctica, reinstaló las adjudicaciones de acción diferida bajo el marco de política anterior (2022). Sin embargo, la orden no requiere que USCIS decida casos dentro de un plazo específico." },
        { date: "Febrero 2026 (Actual)", desc: "Todas las personas con peticiones SIJS aprobadas nuevamente tienen derecho a que sus solicitudes de acción diferida sean adjudicadas — pero no hay un plazo garantizado para las decisiones." },
      ],
      standards_title: "Estándares Actuales (al 18 de febrero de 2026)",
      standards_desc: "La orden del tribunal creó diferentes estándares dependiendo de cuándo fue aprobado tu I-360:",
      standards: [
        { group: "I-360 aprobado entre el 7 de abril de 2025 y el 6 de junio de 2025", standard: "El tribunal requirió que USCIS aplique un estándar más favorable: la clasificación SIJ se trata como un factor fuerte a favor de la acción diferida." },
        { group: "I-360 aprobado en o después del 6 de junio de 2025, y renovaciones", standard: "USCIS puede aplicar un estándar menos favorable con más discreción para decidir si otorga la acción diferida." },
      ],
      appeal_title: "Litigio en Curso",
      appeal_desc: "El 3 de febrero de 2026, los demandantes apelaron la parte de la orden del tribunal que permite el estándar menos favorable. Por separado, el gobierno ha indicado que USCIS planea 'revisitar' el programa de acción diferida para decidir si continúa, revisa o lo termina — con una posible decisión para inicios de abril de 2026.",
      risk_title: "Qué Significa Esto Para Ti",
      risk_points: [
        "Si tienes un I-360 aprobado y aún no has recibido acción diferida, tienes derecho a que tu solicitud sea adjudicada — pero no hay plazo para que USCIS decida.",
        "El estándar aplicado a tu caso puede diferir dependiendo de cuándo fue aprobado tu I-360.",
        "Hay incertidumbre continua: el gobierno puede cambiar el programa nuevamente para abril de 2026.",
        "Si la acción diferida es negada, debes consultar con un abogado sobre tus opciones — una negación de acción diferida no es lo mismo que una orden de remoción.",
        "Si tienes un caso pendiente de remoción en corte de inmigración, la interacción entre SIJS y los procedimientos de remoción requiere estrategia legal cuidadosa.",
      ],
      ead_title: "Sobre el Permiso de Trabajo (EAD)",
      ead_desc: "Si se otorga la acción diferida, puedes solicitar un Documento de Autorización de Empleo (EAD) usando el Formulario I-765. El EAD te permite trabajar legalmente en Estados Unidos por el período de tu acción diferida. Si tu acción diferida expira, es posible que necesites solicitar renovación — pero los estándares para renovación pueden diferir de la concesión inicial (ver los diferentes estándares arriba).",
      faq_title: "Preguntas Comunes",
      faq: [
        { q: "¿Qué pasa si me niegan la acción diferida?", a: "Una negación de acción diferida no significa que serás deportado/a. Significa que no tienes protección contra la remoción ni autorización de trabajo durante la espera. Consulta con un abogado sobre otras posibles protecciones o estrategias para tu situación." },
        { q: "¿Puedo renovar mi acción diferida?", a: "La renovación es posible, pero el estándar aplicado puede ser el menos favorable dependiendo de la política actual. El litigio está en curso y los estándares podrían cambiar." },
        { q: "¿Qué pasa si tengo un caso en corte de inmigración?", a: "Tener un caso pendiente de remoción no te descalifica automáticamente de SIJS o acción diferida, pero la interacción es compleja. Un abogado con experiencia tanto en procedimientos de menores como de inmigración es esencial." },
      ],
    },
    parents: {
      title: "¿Puedo Pedir a Mis Padres a Través de SIJS?",
      subtitle: "Esta es una de las preguntas más comunes e importantes sobre SIJS. La respuesta puede no ser lo que esperas.",
      answer_title: "La Respuesta Directa",
      answer_desc: "No. Si obtienes la residencia permanente legal (green card) a través de SIJS, estás permanentemente impedido/a de pedir beneficios migratorios para tus padres. Esto aplica a ambos padres — incluyendo al padre/madre que no causó el abuso, negligencia o abandono que formó la base de tu petición SIJS.",
      why_title: "Por Qué Existe Esta Restricción",
      why_desc: "El Congreso incluyó esta restricción en la Ley de Inmigración y Nacionalidad (INA § 101(a)(27)(J)) para prevenir el posible mal uso del proceso SIJS. La preocupación era que los padres pudieran facilitar un caso SIJS del hijo como camino hacia sus propios beneficios migratorios. Independientemente del razonamiento, la restricción es absoluta bajo la ley actual.",
      scope_title: "¿Qué Exactamente Está Restringido?",
      scope_points: [
        "No puedes presentar una petición de inmigrante familiar (I-130) por ninguno de tus padres",
        "Esta restricción aplica incluso si después te conviertes en ciudadano estadounidense por naturalización",
        "Esta restricción es permanente — no expira",
        "Esto solo aplica a los padres, no a otras relaciones familiares (por ejemplo, podrías poder pedir por un cónyuge o hijos en el futuro a través de otros caminos)",
      ],
      comparison_title: "Cómo Difiere de Otros Beneficios Migratorios",
      comparison_desc: "A diferencia del asilo, visas T (víctimas de trata) o visas U (víctimas de crímenes), SIJS no te permite incluir familiares como 'derivados' en tu caso. El caso migratorio de cada persona debe evaluarse por separado. Otros beneficios migratorios pueden tener provisiones de derivados — SIJS no las tiene.",
      advice_title: "Lo Que Esto Significa en la Práctica",
      advice_desc: "Si estás considerando SIJS y tu(s) padre(s) también necesitan alivio migratorio, es crítico discutir todas las opciones con un abogado antes de proceder. En algunos casos, un padre puede tener su propio camino independiente hacia beneficios migratorios (asilo, VAWA, visa U, etc.) que debe explorarse simultáneamente. La restricción de SIJS sobre peticiones de padres no impide que un padre busque su propio caso independientemente.",
    },
    faq: {
      title: "Preguntas Frecuentes Sobre SIJS",
      items: [
        {
          q: "¿Qué es SIJS y para quién es?",
          a: "El Estatus Especial de Inmigrante Juvenil (SIJS) es una clasificación migratoria para menores y jóvenes (generalmente menores de 21, solteros) en Estados Unidos que no pueden reunificarse de forma segura con uno o ambos padres debido a abuso, negligencia o abandono. Una corte estatal debe hacer hallazgos específicos, y luego el joven puede pedir a USCIS la clasificación SIJ como un paso hacia la residencia permanente."
        },
        {
          q: "¿SIJS me da una green card automáticamente?",
          a: "No. SIJS es una clasificación, no un estatus por sí solo. Después de que USCIS aprueba tu petición I-360 SIJ, debes esperar a que un número de visa esté disponible bajo la categoría EB-4 (lo cual puede tomar años debido a los atrasos), y luego solicitar ajuste de estatus (I-485) para obtener tu green card."
        },
        {
          q: "¿Qué pasa mientras espero un número de visa?",
          a: "Durante la espera, puedes ser elegible para acción diferida y un permiso de trabajo (EAD), dependiendo de la política actual de USCIS. Esta área ha cambiado significativamente en 2025–2026 debido a cambios de política y litigios. Consulta la sección de Permiso de Trabajo y Acción Diferida para detalles actuales."
        },
        {
          q: "¿Cuánto tarda la espera para la green card por SIJS?",
          a: "A partir de febrero 2026, la Final Action Date de EB-4 es 1 de enero de 2021, lo que significa que hay aproximadamente 5 años de atraso. Los tiempos de espera cambian mensualmente basados en la demanda y disponibilidad de visas."
        },
        {
          q: "¿Puede mi padre/madre ser indocumentado/a y aún ser mi guardián?",
          a: "En muchos estados, el estatus migratorio del guardián no es una barrera para ser nombrado guardián o custodio para propósitos de SIJS. Sin embargo, esto varía por estado y jurisdicción. Consulta con un abogado familiarizado con las leyes de tu estado."
        },
        {
          q: "¿Qué cuenta como abuso, negligencia o abandono?",
          a: "Estos términos son definidos por las leyes de tu estado, no por la ley federal de inmigración. Las definiciones varían significativamente de estado a estado. Generalmente, el abuso incluye daño físico, emocional o sexual. La negligencia implica la falta de proporcionar cuidado adecuado. El abandono puede incluir que un padre se vaya o no mantenga una relación parental. Un abogado puede evaluar tus circunstancias específicas bajo la ley de tu estado."
        },
        {
          q: "¿Pueden deportarme mientras mi caso SIJS está pendiente?",
          a: "Tener un caso SIJS pendiente no te protege automáticamente de procedimientos de remoción. Sin embargo, si te han otorgado acción diferida, eso proporciona protección temporal. Si tienes un caso en corte de inmigración, la interacción entre SIJS y la remoción es compleja — trabaja con un abogado."
        },
        {
          q: "¿Qué pasa si cumplo 21 durante el proceso?",
          a: "La edad generalmente se determina al momento de presentar la petición I-360 ante USCIS. Es crítico presentar el I-360 antes de cumplir 21. Para procedimientos de corte estatal, los requisitos de edad pueden variar por estado — algunos estados tienen jurisdicción solo sobre menores de 18."
        },
        {
          q: "¿Puedo incluir a mis hermanos en mi caso SIJS?",
          a: "No. SIJS no permite beneficiarios derivados. Cada persona que pueda calificar para SIJS debe pasar por sus propios procedimientos de corte estatal y petición ante USCIS por separado. Sin embargo, los hermanos pueden cada uno calificar independientemente para SIJS si cumplen los requisitos."
        },
        {
          q: "Si obtengo mi green card por SIJS, ¿puedo pedir a mis padres después?",
          a: "No. Los residentes permanentes por SIJS están permanentemente impedidos de pedir beneficios migratorios para sus padres, incluso después de convertirse en ciudadanos estadounidenses. Esta restricción aplica a ambos padres."
        },
        {
          q: "¿Qué pasa si mi orden de corte estatal está incompleta?",
          a: "Una orden de corte estatal incompleta que no incluye uno o más de los tres hallazgos requeridos (dependencia/custodia, no-reunificación, mejor interés) es una de las razones más comunes de negación de I-360. Puede ser posible regresar a la corte estatal para enmendar o suplementar la orden. Trabaja con un abogado."
        },
        {
          q: "¿Necesito un abogado para SIJS?",
          a: "Aunque no es legalmente requerido, SIJS involucra tanto procedimientos de corte estatal como ley federal de inmigración, haciéndolo uno de los procesos migratorios más complejos. Tener un abogado con experiencia en ambas áreas mejora significativamente las posibilidades de un resultado exitoso. Algunas organizaciones legales pueden ofrecer servicios — consulta recursos en tu área."
        },
      ],
    },
    timeline_section: {
      title: "Datos Clave de un Vistazo",
      age_label: "Límite de Edad",
      age_text: "Debe ser menor de 21 y soltero/a al momento de presentar I-360 ante USCIS.",
      visa_label: "Visa Bulletin EB-4",
      visa_text: "Final Action Date de febrero 2026: 01ENE21 para todas las áreas de imputación. Revisa mensualmente para actualizaciones.",
      court_label: "Orden de Corte Estatal",
      court_text: "Debe incluir los tres hallazgos: dependencia/custodia, no-reunificación y mejor interés.",
    },
    footer: {
      about_desc: "Un recurso de información sobre el Estatus Especial de Inmigrante Juvenil (SIJS) para jóvenes, guardianes y abogados. Contenido sobre elegibilidad, proceso, tiempos de espera, permisos de trabajo y los cambios de política 2025–2026.",
      resources_title: "Recursos Rápidos",
      safety_title: "Enlaces Útiles",
      contact_title: "¿Necesitas Ayuda Legal?",
      rights_reserved: "Todos los Derechos Reservados.",
      privacy_policy: "Política de Privacidad",
      terms_of_use: "Términos de Uso",
      disclaimer: "Este sitio proporciona información general sobre el Estatus Especial de Inmigrante Juvenil (SIJS) solo con fines educativos. No constituye asesoramiento legal y no crea una relación abogado-cliente. Las leyes migratorias cambian frecuentemente — siempre verifica con fuentes oficiales y consulta con un abogado calificado.",
      safety_warning: "Siempre verifica la información migratoria con fuentes oficiales de USCIS y el Departamento de Estado. Las leyes, políticas y tiempos de procesamiento pueden cambiar sin previo aviso.",
    },
  },
};
