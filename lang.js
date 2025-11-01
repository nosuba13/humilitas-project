const translations = {
  gl: {
    "subtitle": "pegado á terra",
    "intentions-title": "Declaración de intencións",
    "intentions-1": "<b>Humilitas</b> é un proxecto que busca superar a visión de que o ser humano se atopa separado da natureza e é alleo a ela. A través de metáforas visuais e o recoñecemento de patróns comúns trata de recordarnos o noso profundo parentesco co resto de seres vivos,  que ao igual que nós, moldean o mundo dacordo coas súas preferencias para facelo menos hostil. Promove así unha mirada disruptiva, non atropocéntrica, desafíando os construtos de dominancia que deron forma á sociedade occidental, e fainos replantexarnos a nosa relación coa natureza.",
    "intentions-2": "Unha dose de humildade —máis necesaria que nunca— que toma o seu título dunha palabra latina, que orixinalmente significaba <i>pegado á terra</i>, e de cuxa mesma raíz deriva tamén o concepto de ser <i>\“humano\”</i>",
    "contact-title": "Contacto",
    "cta": "Consegue o teu exemplar!",
    "email-btn": "Enviar correo",
    "contact-text": "Se queres saber máis ou colaborar, podes escribirme a:",
    "footer": "© 2025 — Humilitas | Creado con 💚 e respeto polo planeta"
  },
  es: {
    "subtitle": "pegado a la tierra",
    "intentions-title": "Declaración de intenciones",
    "intentions-1": "<b>Humilitas</b> es un proyecto que busca superar la visión de que el ser humano se encuentra separado de la natureza y es ajeno a ella. A través de metáforas visuales y el reconocimiento de patrones comúnes trata de recordarnos nuestro profundo parentesco con el resto de seres vivos, que al igual que nosotros, moldean el mundo de acuerdo con sus preferencias para hacerlo menos hostil. Promueve así una mirada disruptiva, no atropocéntrica, desafíando los constructos de dominancia que dieron forma a la sociedad occidental, y nos hace replantearnos nuestra relación con la naturaleza.",
    "intentions-2": "Una dosis de humildad —más necesaria que nunca— que toma su título de una palabra latina, que originalmente significaba <i>pegado a la tierra</i>, y de cuya misma raíz deriva también el concepto de ser <i>\“humano\”</i>",
    "contact-title": "Contacto",
    "cta": "Consigue tu ejemplar!",
    "email-btn": "Enviar correo",
    "contact-text": "Si quieres saber más o colaborar, puedes escribirme a:",
    "footer": "© 2025 — Humilitas | Creado con 💚 y respeto por el planeta"
  },
  en: {
    "subtitle": "rooted to the earth",
    "intentions-title": "Statement of Intent",
    "intentions-1": "<b>Humilitas</b> is a project that seeks to overcome the view that human beings are separate from nature. Through visual metaphors and the recognition of shared patterns, it tries to remind us of our profound kinship with all other living beings, who, like us, shape the world according to their own preferences to make it less hostile. It thus promotes a disruptive, non-anthropocentric perspective, challenging the constructs of dominance that shaped Western society, and prompting us to rethink our relationship with nature.",
    "intentions-2": "A much-needed dose of humility that takes its title from a Latin word, which originally meant <i>grounded</i> (or <i>rooted to the earth</i>) and from which comes the very concept of being <i>“human\”</i>",
    "contact-title": "Contact",
    "cta": "Get your copy!",
    "email-btn": "Send email",
    "contact-text": "If you'd like to know more or collaborate, you can reach me at:",
    "footer": "© 2025 — Humilitas | Created with 💚 and respect for the planet"
  }
};

const buttons = document.querySelectorAll('.lang-btn');
const elements = document.querySelectorAll('[data-key]');

function setLanguage(lang) {
  buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  elements.forEach(el => {
    const key = el.dataset.key;
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });
  document.documentElement.lang = lang;
}

// Inicial: galego
setLanguage('gl');

buttons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

