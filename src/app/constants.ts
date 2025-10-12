import { Language } from '@/app/types';

export const COPY = {
  [Language.EN]: {
    // Header
    
    // Hero
   devBadge: 'Coming Soon',
heroTitle: 'Ship Work. Not Excuses.',
heroSubtitle: 'The task manager that gets out of your way. Built by freelancers who actually ship.',

// Waitlist Form
formPlaceholder: 'your@email.com',
formButton: 'Claim Early Access',
formPrivacy: 'One email when we launch. That`s it.',
formSuccess: 'You`re in! Check your inbox for something special 🚀',

// Problem/Solution
problemTitle: 'Task Apps Are Broken. You Know It. We Know It.',
problemSimpleTitle: 'The "Simple" Ones',
problemSimpleText: 'Great for grocery lists. Useless when you`re juggling 5 clients, 12 projects, and that invoice due yesterday is... somewhere.',
problemComplexTitle: 'The "Professional" Ones',
problemComplexText: '47 features you`ll never use. 3 hours setting up workflows. Meanwhile, your actual work is still waiting.',
solutionTitle: 'Meet Loomtask: Real Work. Real Simple.',
solutionText: 'We killed the features you don`t need and perfected the ones you do. Smart tags that think like you. Deadlines that don`t ambush you. Search that actually works. Revolutionary? No. Finally done right? Yes.',

// Features
featuresTitle: 'Built For How You Actually Work',
featureAuthTitle: 'Start In Seconds',
featureAuthText: 'Google or GitHub. One click. You`re working. No BS.',
featureCrudTitle: 'Tasks That Move Fast',
featureCrudText: 'Create, edit, done, delete. Keyboard shortcuts everywhere. Work at thought-speed.',
featureTagsTitle: 'One Tag. Total Clarity.',
featureTagsText: 'Client, project, or context. One tag per task. Find anything instantly.',
featureNotificationsTitle: 'Never Miss A Deadline',
featureNotificationsText: 'Smart reminders that respect your workflow. Because ghosting clients kills careers.',
featureEssentialsTitle: 'The Basics. Perfected.',
featureEssentialsText: 'Priority levels. Rich descriptions. Lightning search. Dark mode. The stuff that matters.',
comingSoonTitle: 'And We`re Just Getting Started...',
comingSoonText: 'AI task breakdown. Time tracking that works. Team collaboration. We`re building what you asked for, not what a committee decided.',

// Mockup
mockupTitle: 'See It. Love It. Ship With It.',
mockupSubtitle: 'Dark mode first. Because we know when real work happens.',
mockupScreenshot2: 'One task. One tag. Zero complexity. This is how focus feels.',
mockupScreenshot3: 'Everything you need in one view. Edit inline. Ship faster.',
mockupScreenshot4: 'Smart notifications that respect your time. Never drop the ball again.',

// Founder
founderQuote: '"I tried everything. Notion, Asana, Trello, sticky notes on my monitor. They all failed me. So I built what I needed: a task manager that respects my time and my sanity. If you ship for a living, this is for you."',
founderName: 'Joaquin Palladino',
founderTitle: 'Founder & Power User',

// CTA
ctaTitle: 'Ready To Ship More?',
ctaSubtitle: 'Join 500+ freelancers who are done with task app circus. Early access = lifetime discount.',

// Footer
footerText: `© ${new Date().getFullYear()} Loomtask. Built for shippers.`,

// FAQ
faqTitle: 'Quick Answers',
faqs: [
  {
    question: 'What makes Loomtask different?',
    answer: 'Speed and focus. No bloat, no 20-step onboarding, no features you`ll never touch. Just pure task management that works the way your brain does.',
  },
  {
    question: 'Who is this for?',
    answer: 'Freelancers, consultants, and solo professionals who measure success in shipped work, not organized dashboards.',
  },
  {
    question: 'Why should I trust another task app?',
    answer: 'Don`t. Join the waitlist, try it free for a week when we launch, and decide for yourself. We`re betting you won`t go back.',
  },
  {
    question: 'What`s the damage?',
    answer: '$3 USD /month after your free week. Less than your morning coffee. More valuable than your current task manager.',
  },
  {
    question: 'When can I use it?',
    answer: 'We`re in final testing. Drop your email and you`ll be first in when we open the doors. Plus, early access = lifetime discount.',
  },
],

    // Privacy Policy
    privacyPolicy: {
      title: 'Privacy Policy — Loomtask',
      lastUpdated: 'Last updated: [date — e.g. October 9, 2025]',
      dataController: 'Data Controller: [Legal name of the company / responsible person] — [full address] — Email: [contact@loomtask.example]',
      sections: [
        {
          title: 'Short summary (what we do with your data)',
          content: 'Loomtask collects only your email address when you subscribe on the landing page to receive updates about the product’s development and launch. We also use Google Analytics on the landing page to measure user interaction and behavior for site improvement. We do not sell personal data to third parties. For users in the European Union, processing is based on the consent of the data subject for sending communications and for analytical cookies.',
        },
        {
          title: 'Data we collect',
          content: 'Email address (personal data): to send newsletters and updates about Loomtask.\n\nUsage / analytics data (e.g., pages visited, session duration, cookie identifiers) collected via Google Analytics on the landing page; these may include technical identifiers and, depending on configuration, IP address in a truncated/aggregated form.',
        },
        {
          title: 'Purposes and legal bases',
          content: 'Sending updates and communications about the product (limited direct marketing): legal basis = consent of the data subject (Art. 6(1)(a) GDPR) for users in the EU/EEA. Consent must be freely given, specific, informed and unambiguous — provided via an unchecked checkbox on the landing page.\n\nWeb analytics (Google Analytics): legal basis = consent for the EU when the processing involves non-essential cookies or international transfers. We will only activate analytics cookies if the user gives explicit consent.',
        },
        {
          title: 'Cookies and trackers / Google Analytics',
          content: 'We use a consent management solution (cookie banner) that distinguishes between: strictly necessary cookies (if any), analytical cookies (Google Analytics) and other categories. Analytical cookies are activated only after the user’s explicit consent.\n\nGoogle Analytics: Google may transfer data outside the EEA (e.g., to servers in the U.S.). Several European data protection authorities have raised concerns about compatibility of Google Analytics with the GDPR due to potential international transfers and risks of re-identification. We adopt mitigation measures (IP anonymization, limited retention, contractual safeguards where possible) and request user consent for analytics cookies. Regulatory developments may require further technical or organizational changes; in that event we will update our practices. Provide a clear reject/opt-out option in the banner.',
        },
        {
          title: 'International data transfers',
          content: 'EU users → Argentina: Argentina has an EU adequacy decision that may allow transfers from the EU to Argentina under certain conditions; processing by a controller based in Argentina can therefore be covered by that adequacy decision. Nevertheless, third-party providers (e.g., Google) may involve additional transfers outside the EEA that require safeguards.\n\nEU users → providers in the U.S. (e.g., Google): There is regulatory risk relating to transfers to the U.S.; therefore we require user consent and implement technical/contractual measures where feasible. If required by authorities, we may suspend or modify the use of such services.',
        },
        {
          title: 'Storage periods',
          content: 'Email address: we will retain your email while there is an ongoing interest to send updates and until you request unsubscription; upon unsubscribe we will remove the email within [e.g., 30 days], unless legal obligations require retention.\n\nAnalytics data (Google Analytics): retained for a limited, configurable period (e.g., 2–14 months) and aggregated/anonymized whenever possible to reduce identifiability.',
        },
        {
          title: 'Your rights (EU / GDPR) and how to exercise them',
          content: 'If you are located in the EU/EEA you have, among others, the rights of access, rectification, erasure (right to be forgotten), restriction of processing, data portability and objection; and the right to withdraw consent at any time without affecting the lawfulness of processing based on consent before its withdrawal. To exercise these rights contact: [contact@loomtask.example] or send a postal request to [address]. We will respond within the timeframes required by law (typically one month).',
        },
        {
          title: 'Notes for users in the United States (including California)',
          content: 'Laws such as the CCPA/CPRA in California grant California residents specific rights (for example, the right to request access, deletion, and to opt out of the sale or sharing of personal information). Loomtask does not sell personal data. We will provide mechanisms to handle opt-outs and data subject requests under the CCPA/CPRA as applicable.',
        },
        {
          title: 'Security',
          content: 'We implement reasonable technical and organizational measures to protect personal data against loss, unauthorized access, disclosure or alteration. No system is entirely risk-free; if a security breach affecting personal data occurs that poses a risk to individuals’ rights and freedoms, we will notify the competent supervisory authority and, where appropriate, affected persons in accordance with applicable law.',
        },
        {
          title: 'Minors',
          content: 'Our landing page is not intended for children under [16] years (or the applicable age in the user’s jurisdiction). We do not knowingly collect or process data from minors. If you are a minor, please do not submit your email without consent from your legal guardian. If we become aware that we have collected personal data from a minor without appropriate authorization, we will delete it.',
        },
        {
          title: 'Changes to this policy',
          content: 'We may update this policy to reflect regulatory changes or changes in our services. We will publish the “Last updated” date above and, if changes are material, will inform subscribers by email when appropriate.',
        },
        {
          title: 'Contact and supervisory authority',
          content: 'For questions or to exercise your rights: Email: [contact@loomtask.example] — Address: [full address]. If you believe your rights have not been respected, you have the right to lodge a complaint with the competent supervisory authority (for example, the data protection authority in your EU Member State).',
        },
      ],
    },

    // Terms of Use
    termsOfUse: {
      title: 'Terms of Use — Loomtask (Landing Page)',
      lastUpdated: 'Last updated: [date]',
      sections: [
        {
          title: '1. Scope and purpose',
          content: 'The Loomtask landing page aims to present information about a task management service (the "Service") and to collect only the email addresses of users who wish to receive updates about the development and launch of the application. The landing page also uses web analytics tools (e.g., Google Analytics) to understand browsing behavior for statistical and site-improvement purposes.\n\nThese Terms apply exclusively to the landing page and to the collection of email addresses for marketing/informational communications and to the use of analytics tools. Any later use of the product (if and when launched) will be subject to separate terms and conditions which will be published at that time.',
        },
        {
          title: '2. Data we collect',
          content: 'Email address. We collect the email address you voluntarily provide to receive newsletters, updates, and communications related to the development and launch of the Service.\n\nAnalytics data. The landing page uses Google Analytics or similar services to collect data about visits (e.g., pages viewed, session duration, device type, aggregated navigation data). This information is used for statistical analysis and site optimization.\n\nWe do not collect payment information, passwords, photos, documents, or other sensitive personal data through the landing page.',
        },
        {
          title: '3. Legal basis for processing (Europe / GDPR)',
          content: 'For users located in the European Union and the European Economic Area ("EU/EEA"), data processing is based on:\n\nConsent: sending updates by email is carried out on the basis of your explicit consent when subscribing. You may withdraw consent at any time without affecting the lawfulness of prior processing.\n\nLegitimate interest / consent for analytics: collection of data via analytics tools will be carried out in accordance with applicable law (e.g., ePrivacy) and, where required by law, after obtaining your consent through a consent manager (cookie banner) that allows you to accept or decline cookies/analytics tracking.',
        },
        {
          title: '4. Use of Google Analytics and third parties',
          content: 'Analytics provider: the landing page uses Google Analytics or equivalent solutions. These platforms act as processors or subprocessors and have their own privacy policies.\n\nScope of processing: Google and other providers may collect and process data about your browsing. To the extent international transfers occur (for example, to servers in the United States or other countries), Loomtask will adopt contractual and technical measures (e.g., standard contractual clauses, transfer impact assessments, or applicable adequacy mechanisms) to ensure an adequate level of protection in line with the GDPR and applicable law.\n\nPrivacy configuration: where appropriate, Loomtask will limit data collection using available settings (e.g., anonymization, regional restrictions) and will request your consent to enable Google Analytics if required by your jurisdiction\'s law.',
        },
        {
          title: '5. International transfers',
          content: 'Because Loomtask may operate and use providers located outside the User\'s country (including potential transfers to the United States or other territories), Loomtask will implement appropriate safeguards (such as standard contractual clauses, available adequacy decisions, or equivalent instruments) to ensure that personal data receive an adequate level of protection under the GDPR when applicable.\n\nAs rules on international transfers evolve, Loomtask will update its documentation and technical/contractual measures to maintain compliance.',
        },
        {
          title: '6. Data retention',
          content: 'Email address: we will retain your email address while there is a legitimate purpose (e.g., until you unsubscribe). If you request deletion, we will erase your data unless retention is required by applicable law.\n\nAnalytics data: analytics data will be retained in aggregated and/or pseudonymized form for limited periods according to Loomtask’s retention policy, which will be communicated in the Privacy Policy.',
        },
        {
          title: '7. User rights (for EU/EEA residents)',
          content: 'You have, among others, the following rights regarding your personal data:\n\nRight of access: request a copy of the data we process about you.\n\nRight of rectification: correct inaccurate or incomplete data.\n\nRight to erasure (right to be forgotten): under certain circumstances you may request deletion of your data.\n\nRight to restriction of processing.\n\nRight to data portability (where applicable).\n\nRight to object to processing for reasons related to your particular situation, and specifically to marketing communications.\n\nRight to withdraw consent at any time (without affecting the lawfulness of prior processing).\n\nRight to lodge a complaint with the competent supervisory authority (for example, your national data protection authority or the authority of your EU member state).\n\nTo exercise any of these rights, contact: privacy@loomtask.com (provisional address). Please include an identifier that allows us to locate your data and the specific request. We will respond within the timeframes required by applicable law.',
        },
        {
          title: '8. Security',
          content: 'Loomtask implements reasonable technical and organizational measures to protect data against unauthorized access, disclosure, alteration, or destruction. These measures are reviewed periodically and adapted as risks and the service evolve.\n\nHowever, no system is completely invulnerable. In the event of a security incident affecting personal data that poses a risk to individuals’ rights and freedoms, Loomtask will take actions required by applicable law (including notification to the supervisory authority and, where appropriate, to the data subjects).',
        },
        {
          title: '9. Minors',
          content: 'The landing page is not directed to minors under 16 years of age (or the minimum age applicable in your country). We do not knowingly collect email addresses from minors. If you are a parent or guardian and believe your minor child has provided their email, contact us to request deletion.',
        },
        {
          title: '10. Third-party links',
          content: 'The landing page may contain links to third-party websites. Loomtask is not responsible for the practices or content of those sites; we recommend reviewing the privacy and cookie policies of any site you visit.',
        },
        {
          title: '11. Changes to these Terms',
          content: 'Loomtask may update these Terms at any time. For material changes, we will notify subscribed users by email and/or display a visible notice on the landing page. The "Last updated" date will reflect the current version.',
        },
        {
          title: '12. Governing law and jurisdiction',
          content: 'Unless otherwise required by mandatory law, these Terms shall be governed by the laws of the Argentine Republic. Without prejudice to the foregoing, for users domiciled in the European Union, nothing in these Terms will affect the rights and protections afforded by EU law (including the GDPR). Any dispute will be submitted to the competent courts according to applicable rules on jurisdiction.',
        },
        {
          title: '13. Limitation of liability',
          content: 'To the extent permitted by law, Loomtask will not be liable for indirect damages, lost profits, or losses arising from browsing the landing page or from the use or inability to use the Service in the future. The Provider’s total liability for damages caused by breach shall be the maximum permitted by applicable law.',
        },
        {
          title: '14. Contact',
          content: 'If you have questions about these Terms or wish to exercise your rights, you may write to:\n\nEmail: privacy@loomtask.com (provisional address)\n\nPostal address: [provider address]',
        },
      ],
    },
  },
  [Language.ES]: {
   devBadge: 'Próximamente',
heroTitle: 'Entrega Trabajo. No Excusas.',
heroSubtitle: 'El gestor de tareas que no estorba. Creado por freelancers que entregan de verdad.',

// Waitlist Form
formPlaceholder: 'tu@email.com',
formButton: 'Reserva Tu Acceso',
formPrivacy: 'Un email cuando lancemos. Nada más.',
formSuccess: '¡Dentro! Revisa tu inbox, hay algo especial esperándote 🚀',

// Problem/Solution
problemTitle: 'Las Apps de Tareas Están Rotas. Lo Sabes. Nosotros También.',
problemSimpleTitle: 'Las "Simples"',
problemSimpleText: 'Geniales para la lista del super. Inútiles cuando manejas 5 clientes, 12 proyectos, y esa factura de ayer está... en algún lado.',
problemComplexTitle: 'Las "Profesionales"',
problemComplexText: '47 funciones que nunca usarás. 3 horas configurando workflows. Mientras tanto, tu trabajo real sigue esperando.',
solutionTitle: 'Conoce Loomtask: Trabajo Real. Realmente Simple.',
solutionText: 'Matamos las funciones que no necesitas y perfeccionamos las que sí. Tags inteligentes que piensan como vos. Deadlines que no te emboscan. Búsqueda que funciona. ¿Revolucionario? No. ¿Por fin bien hecho? Sí.',

// Features
featuresTitle: 'Diseñado Para Como Trabajas De Verdad',
featureAuthTitle: 'Empieza En Segundos',
featureAuthText: 'Google o GitHub. Un click. Ya estás trabajando. Sin vueltas.',
featureCrudTitle: 'Tareas Que Vuelan',
featureCrudText: 'Crear, editar, completar, borrar. Atajos por todos lados. Trabaja a la velocidad del pensamiento.',
featureTagsTitle: 'Un Tag. Claridad Total.',
featureTagsText: 'Cliente, proyecto o contexto. Un tag por tarea. Encuentra todo al instante.',
featureNotificationsTitle: 'Cero Deadlines Perdidos',
featureNotificationsText: 'Recordatorios inteligentes que respetan tu ritmo. Porque ghostear clientes mata carreras.',
featureEssentialsTitle: 'Lo Básico. Perfeccionado.',
featureEssentialsText: 'Niveles de prioridad. Descripciones completas. Búsqueda instantánea. Modo oscuro. Lo que importa.',
comingSoonTitle: 'Y Recién Empezamos...',
comingSoonText: 'IA para desglosar tareas. Time tracking que sirve. Colaboración en equipo. Construimos lo que pediste, no lo que decidió un comité.',

// Mockup
mockupTitle: 'Miralo. Enamorate. Entrega Con Él.',
mockupSubtitle: 'Modo oscuro de entrada. Porque sabemos cuándo pasa el trabajo real.',
mockupScreenshot2: 'Una tarea. Un tag. Cero complejidad. Así se siente el foco.',
mockupScreenshot3: 'Todo lo que necesitas en una vista. Edita al vuelo. Entrega más rápido.',
mockupScreenshot4: 'Notificaciones inteligentes que respetan tu tiempo. No se te escapa nada.',

// Founder
founderQuote: '"Probé todo. Notion, Asana, Trello, post-its en el monitor. Todos me fallaron. Así que construí lo que necesitaba: un gestor de tareas que respeta mi tiempo y mi cordura. Si vivís de entregar, esto es para vos."',
founderName: 'Joaquin Palladino',
founderTitle: 'Fundador & Heavy User',

// CTA
ctaTitle: '¿Listo Para Entregar Más?',
ctaSubtitle: 'Unite a 500+ freelancers que se cansaron del circo de apps. Acceso anticipado = descuento de por vida.',

// Footer
footerText: `© ${new Date().getFullYear()} Loomtask. Hecho para los que entregan.`,

// FAQ
faqTitle: 'Respuestas Rápidas',
faqs: [
  {
    question: '¿Qué hace diferente a Loomtask?',
    answer: 'Velocidad y foco. Sin bloat, sin onboarding de 20 pasos, sin funciones que nunca vas a tocar. Solo gestión de tareas pura que funciona como tu cerebro.',
  },
  {
    question: '¿Para quién es esto?',
    answer: 'Freelancers, consultores y profesionales independientes que miden el éxito en trabajo entregado, no en dashboards organizados.',
  },
  {
    question: '¿Por qué confiar en otra app de tareas?',
    answer: 'No lo hagas. Unite a la lista de espera, probala gratis una semana cuando lancemos, y decidí vos mismo. Apostamos que no vas a volver atrás.',
  },
  {
    question: '¿Cuánto duele?',
    answer: '$3 USD /mes después de tu semana gratis. Menos que tu café. Más valioso que tu gestor actual.',
  },
  {
    question: '¿Cuándo puedo usarla?',
    answer: 'Estamos en testing final. Dejá tu email y vas a ser de los primeros cuando abramos. Bonus: acceso anticipado = descuento de por vida.',
  },
],
    // Privacy Policy
    privacyPolicy: {
      title: 'Política de Privacidad — Loomtask',
      lastUpdated: 'Última actualización: [fecha — p. ej. 9 de octubre de 2025]',
      dataController: 'Controlador de datos: [Nombre legal de la empresa / persona responsable] — [dirección completa] — Email: [contacto@loomtask.example]',
      sections: [
        {
          title: 'Resumen breve (qué hacemos con tus datos)',
          content: 'Loomtask recoge únicamente tu correo electrónico cuando te suscribes en la landing page para recibir actualizaciones sobre el desarrollo y lanzamiento del producto. Además, usamos Google Analytics en la landing para medir la interacción y comportamiento de los usuarios con fines de mejora del sitio. No vendemos datos personales a terceros. Para residentes en la Unión Europea, el tratamiento se realiza sobre la base del consentimiento del interesado en el envío de comunicaciones y en el uso de cookies analíticas.',
        },
        {
          title: 'Datos que recogemos',
          content: 'Correo electrónico (dato personal): para enviar boletines informativos y actualizaciones sobre Loomtask.\n\nDatos de uso / analíticos (p. ej. páginas visitadas, duración de la visita, identificadores de cookies) recogidos mediante Google Analytics en la landing page; estos datos pueden incluir identificadores técnicos y, en su caso, dirección IP en forma agregada o parcial dependiendo de la configuración.',
        },
        {
          title: 'Finalidades y bases legales',
          content: 'Envío de actualizaciones y comunicaciones sobre el producto (marketing directo limitado): base legal = consentimiento del interesado (art. 6.1.a GDPR) para usuarios en la UE/EEE. El consentimiento será libre, específico, informado e inequívoco: debe otorgarse mediante una casilla (checkbox) no pre-marcada en la landing. Para otras jurisdicciones (p. ej. EEUU), se aplicarán las normas locales pertinentes (ver Sección 8).\n\nAnalítica web (Google Analytics): base legal = consentimiento para la Unión Europea cuando el tratamiento implique cookies no estrictamente necesarias o transferencias internacionales; se solicitará consentimiento explícito para activar las cookies analíticas en el banner de cookies.',
        },
        {
          title: 'Cookies y rastreadores / Google Analytics',
          content: 'Usamos una solución de consentimiento (banner de cookies) que distingue entre: cookies estrictamente necesarias (si las hubiera), cookies analíticas (Google Analytics) y otras categorías. Las cookies analíticas se activan solo si el usuario da su consentimiento explícito.\n\nGoogle Analytics: Google puede transferir datos fuera del EEE (por ejemplo a servidores de EE. UU.). En varios Estados europeos las autoridades de protección han señalado riesgos de incompatibilidad entre GA y el GDPR por transferencias internacionales y por posible re-identificación del usuario; por ello adoptamos medidas (configuración de anonimización de IP, retención limitada, contratar garantías contractuales donde proceda) y pedimos el consentimiento del usuario. Aun así, la situación regulatoria evoluciona y puede requerir cambios técnicos o dejar de usar el servicio si una autoridad lo considera incompatible. Recomendamos ofrecer siempre una opción clara de rechazo/opt-out en el banner.',
        },
        {
          title: 'Transferencias internacionales de datos',
          content: 'Usuarios en la UE → Argentina: Argentina cuenta con una decisión de adecuación que permite transferencias desde la UE bajo ciertas condiciones; por tanto, el tratamiento por parte de un responsable con sede en Argentina puede estar cubierto por esa adecuación. Aun así, para servicios de terceros como Google, pueden producirse transferencias adicionales fuera de la zona EEE que requieren garantías.\n\nUsuarios en la UE → proveedores en EEUU (p. ej. Google): existe riesgo regulatorio y las autoridades han advertido sobre transferencias mediante Google Analytics; pedimos consentimiento y aplicamos medidas técnicas/contractuales en la medida de lo posible. Si las autoridades lo exigieran, procederíamos a suspender o modificar el uso de esos servicios.',
        },
        {
          title: 'Plazo de conservación',
          content: 'Correo electrónico: conservaremos tu email mientras exista interés legítimo para enviar actualizaciones y hasta que solicites la baja; si solicitas baja, lo eliminaremos en un plazo de [p. ej. 30 días], salvo obligación legal en contrario.\n\nDatos analíticos (Google Analytics): retenidos por un periodo limitado (configurable; p. ej. 2–14 meses) y anonimizados/agrupados cuando sea posible para minimizar identifiabilidad.',
        },
        {
          title: 'Tus derechos (UE / GDPR) y cómo ejercerlos',
          content: 'Si te encuentras en la UE/EEE tienes, entre otros, los derechos a: acceso, rectificación, supresión (derecho al olvido), limitación del tratamiento, portabilidad y oposición; y a retirar el consentimiento en cualquier momento sin afectar la licitud del tratamiento anterior. Para ejercerlos contacta: [contacto@loomtask.example] o por correo postal a [dirección]. Responderemos conforme a los plazos legales (normalmente 1 mes).',
        },
        {
          title: 'Notas específicas para usuarios en EEUU (incl. California)',
          content: 'Leyes como la CCPA/CPRA de California otorgan a los residentes de California derechos específicos (por ejemplo, derecho a solicitar acceso, eliminación y a optar por no vender o compartir sus datos). Aunque Loomtask no vende datos, proporcionaremos mecanismos para ejercer opt-outs y solicitudes relacionadas con la CCPA/CPRA según corresponda. Para más información sobre CCPA/CPRA y derechos de consumidores en California, consulta la guía oficial.',
        },
        {
          title: 'Seguridad',
          content: 'Adoptamos medidas técnicas y organizativas razonables para proteger los datos personales frente a pérdida, acceso no autorizado, divulgación o alteración. No obstante, ningún sistema es infalible; si ocurre una brecha de seguridad con riesgo para tus derechos y libertades, notificaremos a la autoridad competente y, cuando proceda, a los afectados conforme a la normativa aplicable.',
        },
        {
          title: 'Menores',
          content: 'Nuestra landing page no está destinada a menores de [16] años (o la edad que corresponda según la legislación local). No solicitamos ni procesamos conscientemente datos de menores. Si eres menor, no envíes tu correo sin el consentimiento de tu representante legal; si tenemos constancia de que hemos recogido datos de un menor sin la debida autorización, procederemos a su eliminación.',
        },
        {
          title: 'Cambios en la política',
          content: 'Podemos actualizar esta política para cumplir cambios normativos o de servicio. Publicaremos la fecha de la "Última actualización" arriba y, cuando el cambio sea material, avisaremos por correo a los suscriptores si procede.',
        },
        {
          title: 'Contacto y autoridad de control',
          content: 'Para consultas sobre esta política o para ejercer derechos: Email: [contacto@loomtask.example] — Dirección: [dirección completa]. Si consideras que tus derechos no han sido atendidos, tienes derecho a presentar una reclamación ante la autoridad de protección de datos competente (por ejemplo, la AEPD en España o la autoridad correspondiente en tu país).',
        },
      ],
    },

    // Terms of Use
    termsOfUse: {
      title: 'Términos de Uso — Loomtask (Landing Page)',
      lastUpdated: 'Última actualización: [fecha]',
      sections: [
        {
          title: '1. Alcance y finalidad',
          content: 'La landing page de Loomtask tiene por objeto presentar información sobre un servicio de gestión de tareas (el "Servicio") y recabar únicamente la dirección de correo electrónico de los usuarios que quieran recibir actualizaciones sobre el desarrollo y lanzamiento de la aplicación. La landing page también utiliza herramientas de analítica web (por ejemplo, Google Analytics) para evaluar el comportamiento de navegación con fines estadísticos y de mejora del sitio.\n\nEstos Términos se aplican exclusivamente a la landing page y a la recopilación de correos electrónicos para comunicaciones comerciales/informativas y al uso de herramientas de analítica. El uso posterior del producto (si y cuando se lance) estará sujeto a términos y condiciones separados que se publicarán oportunamente.',
        },
        {
          title: '2. Datos que recogemos',
          content: 'Correo electrónico. Recabamos la dirección de correo electrónico que usted facilite voluntariamente para recibir boletines, actualizaciones y comunicaciones relacionadas con el desarrollo y lanzamiento del Servicio.\n\nDatos de analítica. La landing page emplea Google Analytics u otros servicios de analítica para recopilar datos sobre la visita (p. ej. páginas visitadas, duración de la sesión, tipo de dispositivo, datos agregados de navegación). Esta información se utiliza con fines estadísticos y de optimización.\n\nNo recogemos información de pago, contraseñas, fotografías, documentos ni otros datos personales sensibles a través de la landing page.',
        },
        {
          title: '3. Base legal para el tratamiento (Europa / GDPR)',
          content: 'Para los usuarios ubicados en la Unión Europea y el Espacio Económico Europeo ("UE/EEE"), los tratamientos se basan en:\n\nConsentimiento: el envío de actualizaciones por correo electrónico se realiza con su consentimiento expreso al suscribirse. Usted puede retirar dicho consentimiento en cualquier momento sin afectar la licitud del tratamiento previo a la retirada.\n\nInterés legítimo / consentimiento para analítica: la recogida de datos a través de herramientas de analítica se realizará conforme a la normativa aplicable (p. ej. ePrivacy) y, cuando la ley lo exija, previa obtención de su consentimiento mediante un gestor de consentimiento (cookie banner) que permita aceptar o rechazar cookies/seguimiento analítico.',
        },
        {
          title: '4. Uso de Google Analytics y terceros',
          content: 'Proveedor de analítica: la landing page usa Google Analytics u otras soluciones equivalentes. Estas plataformas actúan como encargados o subcontratistas de tratamiento y aplican sus propias políticas de privacidad.\n\nÁmbito de tratamiento: Google y otros proveedores pueden recopilar y tratar datos sobre su navegación. En la medida en que se realicen transferencias internacionales (por ejemplo, a servidores en Estados Unidos u otros países), Loomtask adoptará las medidas contractuales y técnicas que estime necesarias (p. ej. cláusulas contractuales tipo, evaluaciones de transferencia, o el marco de adecuación aplicable) para asegurar un nivel adecuado de protección conforme al GDPR y la normativa aplicable.\n\nConfiguración de privacidad: cuando proceda, Loomtask limitará la recopilación de datos mediante configuraciones disponibles (p. ej. anonimización, restricciones regionales) y le pedirá su consentimiento para activar Google Analytics si así lo exige la normativa de su país.',
        },
        {
          title: '5. Transferencias internacionales',
          content: 'Dado que Loomtask operará y utilizará proveedores que pueden estar ubicados fuera del país del Usuario, incluida la posibilidad de transferencias a los Estados Unidos u otros territorios, Loomtask implementará salvaguardas adecuadas (por ejemplo, cláusulas contractuales tipo, decisiones de adecuación vigentes o instrumentos equivalentes) para garantizar que sus datos reciban un nivel de protección adecuado conforme al GDPR cuando proceda.\n\nEn la medida en que las normas sobre transferencias internacionales evolucionen, Loomtask actualizará su documentación y medidas técnicas/contractuales para mantener el cumplimiento.',
        },
        {
          title: '6. Conservación de datos',
          content: 'Correo electrónico: conservaremos su correo electrónico mientras exista una finalidad legítima (p. ej. hasta que usted solicite la baja). Si usted solicita la eliminación, procederemos a su supresión salvo obligación legal en contrario.\n\nDatos de analítica: los datos de analítica se conservan en formatos agregados y/o pseudonimizados por períodos limitados y conforme a la política de retención que Loomtask establezca y comunique en la Política de Privacidad.',
        },
        {
          title: '7. Derechos de los usuarios (para residentes en la UE/EEE)',
          content: 'Usted tiene, entre otros, los siguientes derechos respecto de sus datos personales:\n\nDerecho de acceso: solicitar copia de los datos que tratamos sobre usted.\n\nDerecho de rectificación: corregir datos inexactos o incompletos.\n\nDerecho de supresión (derecho al olvido): en determinadas circunstancias puede solicitar la eliminación de sus datos.\n\nDerecho a la limitación del tratamiento.\n\nDerecho a la portabilidad de los datos (cuando proceda).\n\nDerecho de oposición al tratamiento por motivos relacionados con su situación particular, y específicamente a recibir comunicaciones de marketing.\n\nDerecho a retirar el consentimiento en cualquier momento (sin afectar la licitud del tratamiento previo).\n\nDerecho a presentar una reclamación ante la autoridad de control competente (por ejemplo, la autoridad de protección de datos de su país o la autoridad de su Estado miembro de la UE).\n\nPara ejercer cualquiera de estos derechos puede escribir a: privacy@loomtask.com (dirección provisional). En su solicitud incluya un identificador que permita localizar sus datos y la petición concreta. Responderemos en los plazos que impone la normativa aplicable.',
        },
        {
          title: '8. Seguridad',
          content: 'Loomtask aplica medidas técnicas y organizativas razonables para proteger los datos frente a acceso, divulgación, alteración o destrucción no autorizada. Estas medidas se revisan periódicamente y se adaptan conforme evolucionen los riesgos y el servicio.\n\nNo obstante, ningún sistema es totalmente invulnerable. En caso de incidente de seguridad que afecte a sus datos personales y que suponga un riesgo para sus derechos y libertades, Loomtask adoptará las acciones previstas por la normativa aplicable (incluida la notificación a la autoridad de control y, cuando proceda, a los interesados).',
        },
        {
          title: '9. Menores',
          content: 'La landing page no está dirigida a menores de 16 años (o la edad mínima aplicable en su país). No recopilaremos conscientemente correos electrónicos de menores. Si usted es padre/madre o tutor y cree que su hijo menor de edad nos ha facilitado su correo, contáctenos en la dirección indicada para proceder a la eliminación.',
        },
        {
          title: '10. Enlaces a terceros',
          content: 'La landing page puede contener enlaces a sitios de terceros. Loomtask no es responsable por las prácticas ni por el contenido de esos sitios; le recomendamos revisar las políticas de privacidad y cookies de cada sitio que visite.',
        },
        {
          title: '11. Modificaciones de estos Términos',
          content: 'Loomtask podrá actualizar estos Términos en cualquier momento. Cuando existan cambios materiales se lo comunicaremos a los usuarios suscritos por correo electrónico y/o mediante aviso visible en la landing page. La fecha de la "Última actualización" reflejará la versión vigente.',
        },
        {
          title: '12. Legislación aplicable y jurisdicción',
          content: 'Salvo disposición legal imperativa en contrario, estos Términos se regirán por las leyes de la República Argentina. Sin perjuicio de lo anterior, para los usuarios domiciliados en la Unión Europea, nada en estos Términos afectará los derechos y protecciones que les confiere el Derecho de la UE (incluido el RGPD). Cualquier controversia será sometida a los tribunales competentes conforme a la normativa aplicable y a las reglas de competencia foral que resulten obligatorias.',
        },
        {
          title: '13. Limitación de responsabilidad',
          content: 'Dentro de los límites permitidos por la ley, Loomtask no será responsable por daños indirectos, lucro cesante o pérdidas derivadas de la navegación por la landing page ni por el uso o imposibilidad de uso del Servicio en el futuro. La responsabilidad total del Proveedor por los daños causados por incumplimiento será la máxima permitida por la legislación aplicable.',
        },
        {
          title: '14. Contacto',
          content: 'Si tiene preguntas sobre estos Términos o desea ejercer sus derechos, puede escribir a:\n\nCorreo electrónico: privacy@loomtask.com (dirección provisional)\n\nDirección postal: [dirección del proveedor].',
        },
      ],
    },
  }
};
