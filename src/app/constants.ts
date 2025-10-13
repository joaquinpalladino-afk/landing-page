import { Language } from '@/app/types';

export const COPY = {
  [Language.EN]: {
    // Header
    
// Hero 
devBadge: "⚡In Development",
heroTitle: "The Task Manager That Actually Gets You",
heroSubtitle: "Built for freelancers and solopreneurs who are tired of overthinking their to-do list. Not too simple. Not too complex. Just right.",

// Waitlist Form
formPlaceholder: "Enter your email",
formButton: "Join the Waitlist",
formPrivacy: "We respect your privacy. Unsubscribe anytime.",
formSuccess: "🎉 You're on the list! Check your email for updates.",
formInvalidEmail: "Please enter a valid email address",
formAgreement: "By joining, you agree to receive product updates and early access notifications.",

// Problem/Solution
problemTitle: "You're Not Lazy. Your Tools Are.",
problemSimpleTitle: "Too Simple = No Structure",
problemSimpleText: "The basic to-do apps feel lightweight, but when you're juggling 3 clients, a side project, and life admin? You're drowning in chaos with no way to organize what actually matters.",
problemComplexTitle: "Too Complex = Decision Paralysis",
problemComplexText: "Enterprise tools promise everything. But you spend more time configuring databases and choosing templates than actually doing the work. You need to move fast, not build a second brain.",
solutionTitle: "Meet Your Goldilocks Zone",
solutionText: "A task manager designed for how you actually work. Organize with smart tags instead of rigid project hierarchies. Get reminders when they matter. No bloat. No learning curve. Just you, your tasks, and momentum.",

// Features
featuresTitle: "Everything You Need. Nothing You Don't.",
featureAuthTitle: "Sign In & Start",
featureAuthText: "One click with Google or GitHub. No forms, no friction, no wasted time setting up accounts.",
featureCrudTitle: "Create, Update, Done",
featureCrudText: "Add tasks in seconds. Edit on the fly. Check them off and feel that dopamine hit. Task management shouldn't feel like project management.",
featureTagsTitle: "Smart Tags, Not Projects",
featureTagsText: "Forget nested folders and project hierarchies. Tag your tasks contextually and see what matters right now. #urgent #client #personal—done.",
featureNotificationsTitle: "Reminders That Actually Help",
featureNotificationsText: "Set due dates and get notified before deadlines sneak up on you. Scheduled reminders keep you on track without the overwhelm.",
featureEssentialsTitle: "The Essentials, Perfected",
featureEssentialsText: "Fast. Clean. No distractions. Built for people who want to get things done, not manage software.",
comingSoonTitle: "And We're Just Getting Started",
comingSoonText: "Recurring tasks, calendar sync, mobile app, integrations, and more—all coming soon. We're building this with you, based on your feedback.",

// Mockup
mockupTitle: "Simple Enough to Love. Powerful Enough to Trust.",
mockupSubtitle: "See how easy it is to take control of your workday",
mockupScreenshot2: "Organize with smart tags—no rigid project structures",
mockupScreenshot3: "Clean, distraction-free interface that respects your focus",
mockupScreenshot4: "Never miss a deadline with smart notifications",

// Founder
founderQuote: "I built this because I was tired of choosing between apps that did too little and apps that did too much. As a solopreuner, I needed something that just worked—fast, focused, and flexible. This is the tool I wish I had from day one.",
founderName: "Joaquin Palladino",
founderTitle: "Founder & Developer",

// CTA
ctaTitle: "Lock In Your Founder Discount",
ctaSubtitle: "First 100 users get 50% off forever. $5 USD /month instead of $10 USD. Join the waitlist now and be first in line when we launch.",

// Footer
footerText: "© 2025 Loomtask. All rights reserved.",
footerLinks: [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Service" },
],

// FAQ
faqTitle: "Questions? We've Got Answers.",
faqs: [
  {
    question: "When will the app launch?",
    answer: "We're working hard to ship a solid v1. Waitlist members will be first to know when we're ready to roll out early access—expected in the coming months. You'll get regular updates along the way."
  },
  {
    question: "What makes this different from other task managers?",
    answer: "Most apps are either too bare-bones or too bloated. We're hitting the sweet spot: structured enough to keep you organized with smart tags and notifications, but simple enough that you'll actually use it daily without setup fatigue."
  },
  {
    question: "Will there be a free plan?",
    answer: "We're focused on building a sustainable product, so we're launching with a paid model at $10 USD /month. However, the first 100 users get lifetime access at 50% off—just $5/month forever. No gimmicks, no price hikes for early supporters."
  },
  {
    question: "Can I use this on mobile?",
    answer: "At launch, we'll have a responsive web app that works on mobile browsers. A dedicated mobile app is high on our roadmap and will be built based on user feedback after the initial release."
  },
  {
    question: "How do you handle my data and privacy?",
    answer: "Your data is yours. We use industry-standard encryption, secure authentication via Google/GitHub, and we'll never sell your information. You can export or delete your data anytime. Full privacy policy will be available before launch."
  },
],

//Cookies Policy
cookiesPolicy: {
 "title": "Cookie Policy — Loomtask",
  "lastUpdated": "Last updated: October 12, 2025",
  "dataController": "Data Controller: Loomtask — Email: hello@loomtask.com",
  "sections": [
    {
      "title": "1. What Are Cookies?",
      "content": "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site. This Cookie Policy explains how we at Loomtask ('Loomtask') use cookies on our landing page and the choices you have."
    },
    {
      "title": "2. How We Use Cookies",
      "content": "We use cookies for a very limited and specific purpose: to understand how visitors interact with our website. This allows us to improve our landing page and provide a better experience for our future users. We do not use cookies for advertising or tracking you across other websites. Our use of cookies is divided into two categories, as explained below."
    },
    {
      "title": "3. Types of Cookies We Use",
      "content": "Strictly Necessary Cookies:\nPurpose: These cookies are essential for you to browse the website and use its features, such as remembering your cookie consent preferences. Without these cookies, the services you have asked for cannot be provided.\nConsent: These cookies do not require your consent as they are fundamental to the site's operation.\nExamples: cookie_consent_status (to remember if you've accepted or rejected cookies).\n\nAnalytical / Performance Cookies:\nPurpose: These cookies collect information about how you use our website, like which pages you visited and which links you clicked on. This information is aggregated and anonymized and is used solely to help us improve our website's performance.\nConsent: We will only use these cookies if you give us your explicit consent through the cookie consent banner that appears when you first visit our site.\nExamples: _ga, _gid (Used by Google Analytics to distinguish users and analyze traffic)."
    },
    {
      "title": "4. Your Consent",
      "content": "In compliance with the GDPR and the ePrivacy Directive, we ask for your explicit consent before placing any non-essential cookies on your device. When you first visit our landing page, you will be presented with a cookie banner where you can:\n\n- Accept all cookies.\n- Reject all non-essential cookies.\n- Configure your preferences.\n\nIf you do not provide consent, we will not use analytical cookies."
    },
    {
      "title": "5. How to Manage and Delete Cookies",
      "content": "You have full control over cookies. You can withdraw your consent or change your preferences at any time.\n\nVia Our Cookie Banner: You can change your settings at any time by accessing the cookie management options on our site (usually a floating icon or a link in the footer).\n\nVia Your Browser: Most web browsers allow some control of most cookies through the browser settings. You can set your browser to block cookies or to alert you when cookies are being sent. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.\n\nPlease note that if you block all cookies (including essential cookies), you may not be able to access all or parts of our site."
    },
    {
      "title": "6. Third-Party Cookies (Google Analytics)",
      "content": "We use Google Analytics to help us analyze traffic on our landing page. Google Analytics uses cookies to collect this data. To protect your privacy, we have implemented IP anonymization, which means Google will truncate/anonymize the last octet of your IP address. For more information on how Google uses this data, please visit Google's Privacy & Terms page."
    },
    {
      "title": "7. Changes to This Cookie Policy",
      "content": "We may update this policy to reflect changes in technology or legislation. Any changes will be posted on this page with an updated revision date."
    },
    {
      "title": "8. Contact Us",
      "content": "If you have any questions about our use of cookies, please contact us at: hellol@loomtask.com."
    }
  ]
},

    // Privacy Policy
    privacyPolicy: {
"title": "Privacy Policy — Loomtask",
"lastUpdated": "Last updated: October 12, 2025",
"dataController": "Data Controller: Loomtask — Email: hello@loomtask.com",
"sections": [
{
"title": "1. Introduction and Our Commitment",
"content": "Welcome to Loomtask ('we', 'us', or 'our'). We are committed to protecting your privacy and handling your data in an open and transparent manner. This Privacy Policy explains how we collect, use, and protect your information when you visit our landing page and subscribe to our waitlist."
},
{
"title": "2. Information We Collect and Why",
"content": "We collect the minimum amount of information necessary to provide our service and improve your experience.\n\n- Personal Information (Email Address): When you voluntarily subscribe to our waitlist, we collect your email address. We use this solely to send you updates about Loomtask's development, notify you of our launch, and provide information about early access opportunities.\n\n- Usage Data (Analytics): We use Google Analytics to understand how visitors interact with our website. This helps us improve our landing page. The data collected is aggregated and largely anonymous, including your anonymized IP address, browser type, pages visited, and session duration. We have configured Google Analytics to anonymize IP addresses to further protect your privacy."
},
{
"title": "3. Legal Basis for Processing Your Data (GDPR)",
"content": "Our legal basis for processing your personal data depends on the specific context:\n\n- Waitlist Subscription (Email): We process your email address based on your explicit consent (Article 6(1)(a) GDPR), which you provide by entering your email and actively submitting the form.\n\n- Analytics Cookies: We place non-essential analytics cookies on your device based on your explicit consent (Article 6(1)(a) GDPR), which you can grant or deny through our cookie consent banner when you first visit our site."
},
{
"title": "4. How We Share Your Information",
"content": "We do not and will not sell your personal data. We only share information with trusted third parties who act as our service providers (Data Processors):\n\n- Google Analytics: To analyze website traffic. Google has its own robust privacy policies and is compliant with data protection laws. Data transfers are protected by Standard Contractual Clauses (SCCs).\n\n- Email Service Provider: We may use a third-party email service to manage our waitlist and send communications. Any provider we use will be vetted for GDPR compliance and will have a Data Processing Agreement (DPA) in place with us.\n\n- Legal Obligations: We may disclose your information if required to do so by law or in response to valid requests by public authorities."
},
{
"title": "5. Your Data Protection Rights (GDPR)",
"content": "As a user, you have comprehensive rights over your personal data:\n\n- Right to Access: You can request a copy of the information we hold about you.\n- Right to Rectification: You can ask us to correct any inaccurate information.\n- Right to Erasure ('Right to be Forgotten'): You can request the deletion of your personal data.\n- Right to Restrict Processing: You can ask us to limit the use of your data.\n- Right to Data Portability: You can request your data in a structured, machine-readable format.\n- Right to Object: You can object to us processing your data for certain purposes.\n- Right to Withdraw Consent: You can withdraw your consent at any time. Unsubscribing from our waitlist is a direct way to do this.\n- Right to Lodge a Complaint: You have the right to lodge a complaint with a supervisory authority if you feel we have not handled your data correctly.\n\nTo exercise any of these rights, please contact us at hello@loomtask.com."
},
{
"title": "6. Data Security and Retention",
"content": "- Security: We implement appropriate technical and organizational measures to protect your data from unauthorized access, loss, or destruction. However, no internet transmission is 100% secure.\n\n- Retention: We retain your email address only for as long as you remain on our waitlist. If you unsubscribe, your email will be permanently deleted from our active lists within 30 days. Aggregated analytics data is retained in Google Analytics for a period of 14 months before automatic deletion."
},
{
"title": "7. International Data Transfers",
"content": "Information we collect may be stored and processed in any country where we or our service providers (like Google) have facilities. This may involve transferring your data outside the European Economic Area (EEA). When we do this, we ensure a similar degree of protection is afforded to it by using legally-approved mechanisms such as Standard Contractual Clauses (SCCs)."
},
{
"title": "8. Cookies Policy",
"content": "Cookies are small text files stored on your device. We use them for essential site functionality and, with your consent, for analytics.\n\n- Strictly Necessary Cookies: These are essential for the website to function and cannot be disabled.\n- Analytical Cookies (Google Analytics): These help us understand traffic and improve the site. These are only activated if you provide explicit consent via our cookie banner.\n\nYou can manage your cookie preferences at any time through the banner or your browser settings."
},
{
"title": "9. Children's Privacy",
"content": "Our service is not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such information, please contact us so we can promptly delete it."
},
{
"title": "10. Changes to This Privacy Policy",
"content": "We may update this policy from time to time. The 'Last updated' date at the top will always reflect the latest version. We encourage you to review this policy periodically."
},
{
"title": "11. Contact Us",
"content": "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Data Controller at: hello@loomtask.com"
}
]
    },

    // Terms of Use
    termsOfUse: {
      title: 'Terms of Use — Loomtask (Landing Page)',
      lastUpdated: 'Last updated: October 12, 2025',
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
          content: 'You have, among others, the following rights regarding your personal data:\n\nRight of access: request a copy of the data we process about you.\n\nRight of rectification: correct inaccurate or incomplete data.\n\nRight to erasure (right to be forgotten): under certain circumstances you may request deletion of your data.\n\nRight to restriction of processing.\n\nRight to data portability (where applicable).\n\nRight to object to processing for reasons related to your particular situation, and specifically to marketing communications.\n\nRight to withdraw consent at any time (without affecting the lawfulness of prior processing).\n\nRight to lodge a complaint with the competent supervisory authority (for example, your national data protection authority or the authority of your EU member state).\n\nTo exercise any of these rights, contact: privacy@loomtask.com (provisional address). Please include an identifier that allows us to locate your. data and the specific request. We will respond within the timeframes required by applicable law.',
        },
        {
          title: '8. Security',
          content: 'Loomtask implements reasonable technical and organizational measures to protect data against unauthorized access, disclosure, alteration, or destruction. These measures are reviewed periodically and adapted as risks and the service evolve.\n\nHowever, no system is completely invulnerable. In the event of a security incident affecting personal data that poses a risk to individuals’ rights and freedoms, Loomtask will take actions required by applicable law (including notification to the supervisory authority and, where appropriate, to the data subjects).',
        },
        {
          title: '9. Minors',
          content: 'The landing page is not directed to minors under 18 years of age (or the minimum age applicable in your country). We do not knowingly collect email addresses from minors. If you are a parent or guardian and believe your minor child has provided their email, contact us to request deletion.',
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
          content: 'If you have questions about these Terms or wish to exercise your rights, you may write to:\n\nEmail: privacy@loomtask.com (provisional address)\n\n',
        },
      ],
    },
  },
  [Language.ES]: {
 // Hero 
devBadge: "⚡ En Desarrollo",
heroTitle: "El Gestor de Tareas Que Te Entiende",
heroSubtitle: "Creado para freelancers y emprendedores que están hartos de complicarse con su lista de pendientes. Ni muy básico. Ni muy complejo. En el punto justo.",

// Waitlist Form
formPlaceholder: "Ingresá tu email",
formButton: "Unirme a la Lista",
formPrivacy: "Respetamos tu privacidad. Cancelá cuando quieras.",
formSuccess: "🎉 ¡Ya estás en la lista! Revisá tu email para actualizaciones.",
formInvalidEmail: "Por favor ingresá un email válido",
formAgreement: "Al unirte, aceptás recibir novedades del producto y acceso anticipado.",

// Problem/Solution
problemTitle: "No Sos Vos. Son Tus Herramientas.",
problemSimpleTitle: "Muy Simple = Sin Estructura",
problemSimpleText: "Las apps de notas básicas se sienten livianas, pero cuando estás lidiando 3 clientes, un proyecto personal y cosas de la vida… terminás ahogado en caos sin forma de organizar lo que realmente importa.",
problemComplexTitle: "Muy Complejo = Parálisis Total",
problemComplexText: "Las herramientas empresariales prometen todo. Pero terminás perdiendo más tiempo armando bases de datos y eligiendo plantillas que haciendo el trabajo real. Necesitás moverte rápido, no construir un segundo cerebro.",
solutionTitle: "Encontrá Tu Punto Perfecto",
solutionText: "Un gestor de tareas diseñado vos. Diseñá tu rutina etiquetas inteligentes en vez de jerarquías rígidas de proyectos. Recibí recordatorios que importan. Sin curva de aprendizaje. Solo vos, tus tareas y progreso constante.",

// Features
featuresTitle: "Todo Lo Que Necesitás.",
featureAuthTitle: "Entrá y Arrancá",
featureAuthText: "Un click con Google o GitHub. Sin formularios, sin fricciones, sin perder tiempo configurando cuentas.",
featureCrudTitle: "Creá, Actualizá, Listo",
featureCrudText: "Agregá tareas en segundos. Editá en el momento. Tildá y sentí esa satisfacción. Gestionar tareas no debería sentirse como gestionar proyectos.",
featureTagsTitle: "Etiquetas Inteligentes, No Proyectos",
featureTagsText: "Olvidate de carpetas anidadas y jerarquías de proyectos. Etiquetá tus tareas por contexto y mirá lo que importa ahora. #urgente #cliente #personal—listo.",
featureNotificationsTitle: "Recordatorios Que Ayudan de Verdad",
featureNotificationsText: "Establecé fechas límite y recibí notificaciones antes de que los deadlines te agarren desprevenido. Recordatorios programados te mantienen activo sin agobiarte.",
featureEssentialsTitle: "Lo Esencial, Perfeccionado",
featureEssentialsText: "Rápido. Limpio. Sin distracciones. Construido para gente que quiere hacer las cosas, no administrar software.",
comingSoonTitle: "Y Recién Empezamos",
comingSoonText: "Tareas recurrentes, sincronización con calendario, app móvil, tareas colaborativas y más—todo en camino. Estamos construyendo esto con vos, basándonos en tu feedback.",

// Mockup
mockupTitle: "Lo Suficientemente Simple Para Amarlo. Lo Suficientemente Potente Para Confiar.",
mockupSubtitle: "Mirá qué fácil es tomar control de tu día",
mockupScreenshot2: "Organizá con etiquetas inteligentes—sin estructuras rígidas",
mockupScreenshot3: "Interfaz limpia y sin distracciones que respeta tu concentración",
mockupScreenshot4: "Nunca te pierdas un deadline con notificaciones inteligentes",

// Founder
founderQuote: "Construí esta herramienta porque estaba cansado de elegir entre apps que hacían muy poco y apps que hacían demasiado. Como emprendedor, necesitaba algo que simplemente funcionara—rápido, enfocado y flexible. Esta es la herramienta que me hubiera encantado tener desde el día uno.",
founderName: "Joaquin Palladino",
founderTitle: "Fundador y Desarrollador",

// CTA
ctaTitle: "Asegurá Tu Descuento de Fundador",
ctaSubtitle: "Los primeros 100 usuarios obtienen 50% de descuento para siempre. $5 USD /mes en lugar de $10 USD. Unite a la lista ahora y sé de los primeros cuando lancemos.",

// Footer
footerText: "© 2025 Loomtask. Todos los derechos reservados.",
footerLinks: [
  { href: "/privacy-policy", label: "Política de Privacidad" },
  { href: "/terms-of-use", label: "Términos de Servicio" },
],

// FAQ
faqTitle: "¿Preguntas? Tenemos Respuestas.",
faqs: [
  {
    question: "¿Cuándo se lanza la app?",
    answer: "Estamos trabajando a full para sacar una v1 sólida. Los miembros de la lista serán los primeros en saber cuándo estemos listos para el acceso anticipado—esperamos que en los próximos meses. Te mantendremos al tanto con actualizaciones regulares."
  },
  {
    question: "¿Qué la hace diferente de otros gestores de tareas?",
    answer: "La mayoría de las apps son muy básicas o están sobrecargadas. Nosotros apuntamos al punto justo: suficientemente estructurada para mantenerte organizado con etiquetas inteligentes y notificaciones, pero tan simple que la vas a usar todos los días sin cansarte de configurar."
  },
  {
    question: "¿Habrá un plan gratuito?",
    answer: "Estamos enfocados en construir un producto sustentable, así que lanzamos con un modelo pago de $10 USD /mes. Sin embargo, los primeros 100 usuarios obtienen acceso de por vida con 50% de descuento—solo $5/mes para siempre. Sin trucos, sin aumentos de precio para los early adopters."
  },
  {
    question: "¿Puedo usarla en el celular?",
    answer: "En el lanzamiento, tendremos una web app responsive que funciona en navegadores móviles. Una app móvil dedicada está como prioridad en nuestro roadmap y la construiremos basándonos en el feedback de usuarios después del lanzamiento inicial."
  },
  {
    question: "¿Cómo manejan mis datos y privacidad?",
    answer: "Tus datos son tuyos. Usamos encriptación estándar de la industria, autenticación segura vía Google/GitHub, y nunca venderemos tu información. Podés exportar o eliminar tus datos cuando quieras. La política de privacidad completa estará disponible antes del lanzamiento."
  },
],

    // Cookies Policy
    cookiesPolicy: {
        "title": "Política de Cookies — Loomtask",
  "lastUpdated": "Última actualización: 12 de octubre de 2025",
  "dataController": "Responsable del Tratamiento: Loomtask — Email: hello@loomtask.com",
  "sections": [
    {
      "title": "1. ¿Qué son las Cookies?",
      "content": "Las cookies son pequeños archivos de texto que se instalan en tu ordenador o dispositivo móvil cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.\n\nEsta Política de Cookies explica cómo en Loomtask ('[Nombre Legal de tu Empresa]') utilizamos cookies en nuestra página de aterrizaje (landing page) y las opciones que tienes a tu disposición."
    },
    {
      "title": "2. Cómo Utilizamos las Cookies",
      "content": "Utilizamos cookies con un propósito muy limitado y específico: entender cómo los visitantes interactúan con nuestro sitio web. Esto nos permite mejorar nuestra landing page y ofrecer una mejor experiencia a nuestros futuros usuarios. No utilizamos cookies para publicidad ni para rastrearte en otros sitios web.\n\nNuestro uso de cookies se divide en dos categorías, como se explica a continuación."
    },
    {
      "title": "3. Tipos de Cookies que Utilizamos",
      "content": "Cookies Estrictamente Necesarias:\n\nPropósito: Estas cookies son esenciales para que puedas navegar por el sitio web y utilizar sus funciones, como recordar tus preferencias de consentimiento de cookies. Sin estas cookies, los servicios que has solicitado no pueden ser proporcionados.\n\nConsentimiento: Estas cookies no requieren tu consentimiento, ya que son fundamentales para el funcionamiento del sitio.\n\nEjemplos: cookie_consent_status (para recordar si has aceptado o rechazado las cookies).\n\nCookies Analíticas o de Rendimiento:\n\nPropósito: Estas cookies recopilan información sobre cómo utilizas nuestro sitio web, como qué páginas visitaste y en qué enlaces hiciste clic. Esta información se agrega, se anonimiza y se utiliza únicamente para ayudarnos a mejorar el rendimiento de nuestro sitio web.\n\nConsentimiento: Solo utilizaremos estas cookies si nos das tu consentimiento explícito a través del banner de consentimiento de cookies que aparece la primera vez que visitas nuestro sitio.\n\nEjemplos: _ga, _gid (Utilizadas por Google Analytics para distinguir usuarios y analizar el tráfico)."
    },
    {
      "title": "4. Tu Consentimiento",
      "content": "En cumplimiento del RGPD y la Directiva ePrivacy, solicitamos tu consentimiento explícito antes de instalar cualquier cookie no esencial en tu dispositivo. La primera vez que visites nuestra landing page, se te presentará un banner de cookies donde podrás:\n\n- Aceptar todas las cookies.\n- Rechazar todas las cookies no esenciales.\n- Configurar tus preferencias.\n\nSi no das tu consentimiento, no utilizaremos cookies analíticas."
    },
    {
      "title": "5. Cómo Gestionar y Eliminar Cookies",
      "content": "Tienes control total sobre las cookies. Puedes retirar tu consentimiento o cambiar tus preferencias en cualquier momento.\n\nA través de nuestro Banner de Cookies: Puedes cambiar tu configuración en cualquier momento accediendo a las opciones de gestión de cookies en nuestro sitio (normalmente un icono flotante o un enlace en el pie de página).\n\nA través de tu Navegador: La mayoría de los navegadores web permiten cierto control sobre las cookies a través de la configuración del navegador. Puedes configurar tu navegador para que bloquee las cookies o te avise cuando se envíen. Para obtener más información sobre las cookies, incluyendo cómo ver qué cookies se han instalado, visita www.aboutcookies.org o www.allaboutcookies.org.\n\nTen en cuenta que si bloqueas todas las cookies (incluidas las esenciales), es posible que no puedas acceder a todo o parte de nuestro sitio."
    },
    {
      "title": "6. Cookies de Terceros (Google Analytics)",
      "content": "Utilizamos Google Analytics para ayudarnos a analizar el tráfico en nuestra landing page. Google Analytics utiliza cookies para recopilar estos datos. Para proteger tu privacidad, hemos implementado la anonimización de IP, lo que significa que Google truncará/anonimizará el último octeto de tu dirección IP.\n\nPara más información sobre cómo Google utiliza estos datos, por favor, visita la página de Privacidad y Condiciones de Google."
    },
    {
      "title": "7. Cambios en esta Política de Cookies",
      "content": "Podemos actualizar esta política para reflejar cambios en la tecnología o la legislación. Cualquier cambio se publicará en esta página con una fecha de revisión actualizada."
    },
    {
      "title": "8. Contacto",
      "content": "Si tienes alguna pregunta sobre nuestro uso de cookies, por favor, contáctanos en: hello@loomtask.com"
    }
  ]
},

    // Privacy Policy
    privacyPolicy: {
     "title": "Política de Privacidad — Loomtask",
"lastUpdated": "Última actualización: 12 de octubre de 2025",
"dataController": "Responsable del Tratamiento: [Nombre Legal de tu Empresa] — [Tu Dirección Completa] — Email: hello@loomtask.com",
"sections": [
{
"title": "1. Introducción y Nuestro Compromiso",
"content": "Bienvenido/a a Loomtask ('nosotros' o 'nuestro'). Estamos comprometidos a proteger tu privacidad y a gestionar tus datos de forma abierta y transparente. Esta Política de Privacidad explica cómo recopilamos, usamos y protegemos tu información cuando visitas nuestra página de aterrizaje (landing page) y te suscribes a nuestra lista de espera."
},
{
"title": "2. Información que Recopilamos y Por Qué",
"content": "Recopilamos la mínima cantidad de información necesaria para ofrecer nuestro servicio y mejorar tu experiencia.\n\n- Información Personal (Dirección de email): Cuando te suscribes voluntariamente a nuestra lista de espera, recopilamos tu dirección de correo electrónico. La usamos exclusivamente para enviarte actualizaciones sobre el desarrollo de Loomtask, notificarte sobre nuestro lanzamiento y ofrecerte información sobre oportunidades de acceso anticipado.\n\n- Datos de Uso (Analítica): Usamos Google Analytics para entender cómo los visitantes interactúan con nuestro sitio web. Esto nos ayuda a mejorar nuestra página. Los datos recopilados son agregados y mayormente anónimos, incluyendo tu dirección IP anonimizada, tipo de navegador, páginas visitadas y duración de la sesión. Hemos configurado Google Analytics para anonimizar las direcciones IP y así proteger aún más tu privacidad."
},
{
"title": "3. Base Jurídica para el Tratamiento de tus Datos (RGPD)",
"content": "Nuestra base jurídica para el tratamiento de tus datos personales depende del contexto específico:\n\n- Suscripción a la Lista de Espera (Email): Tratamos tu dirección de correo electrónico basándonos en tu consentimiento explícito (Artículo 6(1)(a) del RGPD), que otorgas al introducir tu email y enviar activamente el formulario.\n\n- Cookies de Analítica: Instalamos cookies de analítica no esenciales en tu dispositivo basándonos en tu consentimiento explícito (Artículo 6(1)(a) del RGPD), que puedes otorgar o denegar a través de nuestro banner de consentimiento de cookies cuando visitas nuestro sitio por primera vez."
},
{
"title": "4. Cómo Compartimos tu Información",
"content": "No vendemos ni venderemos tus datos personales. Solo compartimos información con terceros de confianza que actúan como nuestros proveedores de servicios (Encargados del Tratamiento):\n\n- Google Analytics: Para analizar el tráfico del sitio web. Google tiene sus propias políticas de privacidad robustas y cumple con las leyes de protección de datos. Las transferencias de datos están protegidas por Cláusulas Contractuales Tipo (CCT).\n\n- Proveedor de Servicios de Email: Podríamos usar un servicio de email de terceros para gestionar nuestra lista de espera y enviar comunicaciones. Cualquier proveedor que utilicemos será evaluado para asegurar su cumplimiento con el RGPD y tendrá un Acuerdo de Tratamiento de Datos (ATD) con nosotros.\n\n- Obligaciones Legales: Podríamos revelar tu información si así lo exige la ley o en respuesta a solicitudes válidas de autoridades públicas."
},
{
"title": "5. Tus Derechos de Protección de Datos (RGPD)",
"content": "Como usuario, tienes derechos exhaustivos sobre tus datos personales:\n\n- Derecho de Acceso: Puedes solicitar una copia de la información que tenemos sobre ti.\n- Derecho de Rectificación: Puedes pedirnos que corrijamos cualquier información inexacta.\n- Derecho de Supresión ('Derecho al Olvido'): Puedes solicitar la eliminación de tus datos personales.\n- Derecho a la Limitación del Tratamiento: Puedes pedirnos que limitemos el uso de tus datos.\n- Derecho a la Portabilidad de los Datos: Puedes solicitar tus datos en un formato estructurado y legible por máquina.\n- Derecho de Oposición: Puedes oponerte a que tratemos tus datos para ciertos fines.\n- Derecho a Retirar el Consentimiento: Puedes retirar tu consentimiento en cualquier momento. Darse de baja de nuestra lista de espera es una forma directa de hacerlo.\n- Derecho a presentar una reclamación: Tienes derecho a presentar una reclamación ante una autoridad de control si consideras que no hemos gestionado tus datos correctamente.\n\nPara ejercer cualquiera de estos derechos, por favor, contáctanos en hello@loomtask.com"
},
{
"title": "6. Seguridad y Conservación de Datos",
"content": "- Seguridad: Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos contra el acceso no autorizado, la pérdida o la destrucción. Sin embargo, ninguna transmisión por internet es 100% segura.\n\n- Conservación: Conservamos tu dirección de email solo mientras permanezcas en nuestra lista de espera. Si te das de baja, tu email será eliminado permanentemente de nuestras listas activas en un plazo de 30 días. Los datos de analítica agregados se conservan en Google Analytics durante un período de 14 meses antes de su eliminación automática."
},
{
"title": "7. Transferencias Internacionales de Datos",
"content": "La información que recopilamos puede ser almacenada y tratada en cualquier país donde nosotros o nuestros proveedores de servicios (como Google) tengamos instalaciones. Esto puede implicar la transferencia de tus datos fuera del Espacio Económico Europeo (EEE). Cuando lo hacemos, nos aseguramos de que se les otorgue un grado de protección similar mediante el uso de mecanismos legalmente aprobados, como las Cláusulas Contractuales Tipo (CCT)."
},
{
"title": "8. Política de Cookies",
"content": "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo. Las usamos para la funcionalidad esencial del sitio y, con tu consentimiento, para la analítica.\n\n- Cookies Estrictamente Necesarias: Son esenciales para que el sitio web funcione y no se pueden desactivar.\n- Cookies Analíticas (Google Analytics): Nos ayudan a entender el tráfico y a mejorar el sitio. Solo se activan si otorgas tu consentimiento explícito a través de nuestro banner de cookies.\n\nPuedes gestionar tus preferencias de cookies en cualquier momento a través del banner o de la configuración de tu navegador."
},
{
"title": "9. Privacidad de Menores",
"content": "Nuestro servicio no está dirigido a personas menores de 18 años. No recopilamos de forma consciente datos personales de menores. Si crees que hemos recopilado inadvertidamente dicha información, por favor, contáctanos para que podamos eliminarla de inmediato."
},
{
"title": "10. Cambios en esta Política de Privacidad",
"content": "Podemos actualizar esta política ocasionalmente. La fecha de 'Última actualización' en la parte superior siempre reflejará la versión más reciente. Te recomendamos que revises esta política periódicamente."
},
{
"title": "11. Contacto",
"content": "Si tienes alguna pregunta sobre esta Política de Privacidad o deseas ejercer tus derechos, por favor, contacta a nuestro Responsable del Tratamiento en: hello@loomtask.com"
}
]
    },

    // Terms of Use
    termsOfUse: {
      title: 'Términos de Uso — Loomtask (Landing Page)',
      lastUpdated: 'Última actualización: 12 de octubre de 2025',
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
          content: 'La landing page no está dirigida a menores de 18 años (o la edad mínima aplicable en su país). No recopilaremos conscientemente correos electrónicos de menores. Si usted es padre/madre o tutor y cree que su hijo menor de edad nos ha facilitado su correo, contáctenos en la dirección indicada para proceder a la eliminación.',
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
          content: 'Si tiene preguntas sobre estos Términos o desea ejercer sus derechos, puede escribir a:\n\nCorreo electrónico: privacy@loomtask.com (dirección provisional)\n\n',
        },
      ],
    },
  }
};
