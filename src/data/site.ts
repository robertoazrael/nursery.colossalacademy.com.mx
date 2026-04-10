export type Locale = "es" | "en";

export const sharedSiteMeta = {
  phone: "+529995423580",
  phoneDisplay: "(999) 542-3580",
  email: "mscourtney@colossal-academy.com",
  address: "Av Remigio Aguilar 247, Miguel Alemán, 97148 Mérida, Yuc.",
  instagram: "https://www.instagram.com/colossalkids_merida/",
  facebook: "https://www.facebook.com/profile.php?id=61556652131900",
  youtubeVideoId: "REpbOFo4MJY",
  mapEmbed:
    "https://www.google.com/maps?q=Av+Remigio+Aguilar+247,+Miguel+Alem%C3%A1n,+97148+M%C3%A9rida,+Yuc.&z=16&output=embed",
  logo: "132d57a1c7e924e9346f904c843261456479ccf7.png",
};

const heroDecorations = [
  { src: "5ff5e9cfc732c42cbb97b653a4e8865558116d53.png", alt: "Books Icon", className: "left-[5%] top-[12%] w-10 md:w-12", delay: "1s" },
  { src: "41e994a5af28f734c1dc98a2fbd478570f4d1eeb.png", alt: "Pencil Icon", className: "right-[7%] top-[18%] w-10 md:w-12", delay: "1.6s" },
  { src: "d32b6254e03268eb824670f56f1d040dd3580243.png", alt: "Boy Icon", className: "left-[30%] top-[14%] w-10 md:w-12", delay: "2.4s" },
  { src: "215baf3127384e1ada48075edf801eddbfa3fa63.png", alt: "Teacher Icon", className: "right-[33%] top-[22%] w-10 md:w-12", delay: "2s" },
  { src: "47b56882bcdf37e60df68dc89b48897966101edb.png", alt: "Brain Icon", className: "left-[32%] bottom-[14%] w-10 md:w-12", delay: "0.6s" },
  { src: "5fab5cec89f4435d29117af5c2d8cdf58dc0b103.png", alt: "Girl Icon", className: "right-[28%] bottom-[10%] w-10 md:w-12", delay: "1.3s" },
  { src: "ed44b603831a7894c4fe8165541b97f02a168a0a.png", alt: "Kite Icon", className: "right-[8%] bottom-[12%] w-10 md:w-12", delay: "2.7s" },
  { src: "e48c57bc24a546bab51616283a94bc4c436b27d3.png", alt: "Rocket Icon", className: "left-[12%] bottom-[10%] w-10 md:w-12", delay: "3.1s" },
];

const localeContent = {
  es: {
    meta: {
      lang: "es",
      path: "/",
      title: "Colossal Academy Kids | Preschool en Mérida",
      description:
        "Preschool bilingüe en Mérida con aprendizaje activo, grupos reducidos y una comunidad educativa centrada en la infancia.",
      whatsapp:
        "https://wa.me/529995423580?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20visita%20a%20Colossal%20Academy%20Kids",
    },
    switcher: {
      current: "Español",
      alternate: "English",
      alternatePath: "/en",
      menu: "Menú",
    },
    navItems: [
      { label: "Inicio", href: "#hero" },
      { label: "Nosotros", href: "#vision" },
      { label: "Escuela", href: "#life" },
      { label: "Testimonios", href: "#reviews" },
      { label: "Contacto", href: "#contacto" },
    ],
    ctas: {
      bookVisit: "Agenda una visita",
      explore: "Explora más",
      whatsapp: "Escríbenos por WhatsApp",
      visitUs: "Visítanos",
    },
    hero: {
      eyebrow: "Preschool bilingüe en Mérida",
      title: "Educación práctica para el mundo real",
      description:
        "Una comunidad educativa que honra la infancia y prepara a los niños para el futuro.",
      videoTitle: "Colossal Academy - Filosofía Educativa",
      worldAlt: "World Icon",
      decorations: heroDecorations,
    },
    values: {
      kicker: "Nosotros",
      title: "Una escuela diferente para una nueva generación",
      copy: "Educamos para comprender el mundo y crear el futuro.",
      cards: [
        {
          title: "Aprendizaje activo, no pasivo",
          description: "Los niños participan, construyen y aplican.",
          image: "4ac72e2e33b4e6703403e7852cd4c42bd2b7ca1b.png",
          icon: "book",
        },
        {
          title: "Tecnología con propósito",
          description: "Herramientas al servicio de la creatividad y la humanidad.",
          image: "c7e705c6375c75f0bcc3979016de20233fdf4278.png",
          icon: "rocket",
        },
        {
          title: "Voz y agencia",
          description: "Los niños toman decisiones y desarrollan autonomía.",
          image: "d23d582430b34e89088b7af12f173a4ff1d6d733.png",
          icon: "chat",
        },
        {
          title: "Comunidad educativa",
          description: "No somos una institución tradicional. Somos una comunidad.",
          image: "4242f15aefb984e4abf03381c8b52ba53655813e.png",
          icon: "heart",
        },
      ],
    },
    differentiators: {
      kicker: "Diferenciadores",
      title: "Atención Personalizada",
      copy: "Potenciamos habilidades y conocimiento en grupos reducidos y con acompañamiento cercano.",
      image: "f48c3688cbb0eb96230bd40686eff1909c15f4d9.png",
      imageAlt: "Niños en ambiente de aprendizaje",
      items: [
        "Grupos reducidos",
        "Atención individual",
        "Potenciamos talentos",
        "Educación moderna",
        "Aprendizaje experiencial",
        "Conexión con el mundo real",
        "Tecnología al servicio de la humanidad",
        "Maestros expertos en sus áreas",
      ],
    },
    schoolLife: {
      kicker: "Escuela",
      title: "Vida en Colossal",
      copy: "Un día típico está lleno de descubrimientos, risas, desafíos y crecimiento.",
      quote: '"Aprender haciendo. Ser niño también es parte del aprendizaje."',
      cards: [
        { title: "Cocina", description: "Habilidades para la vida práctica", image: "8181ec8004e016baa8ee81642e79b20b7dbf77fa.png" },
        { title: "Deportes y Movimiento", description: "Cuerpos activos, mentes activas", image: "ddcfe107aebacf0c80ec24fbe4142f868e01a303.png" },
        { title: "Excursiones", description: "El mundo es nuestro salón de clases", image: "b1df46b180339a60c9e58605b03093ccd17db61d.png" },
        { title: "Circle Time", description: "Compartiendo ideas y construyendo comunidad", image: "1aaf09c13b59c68d3b924162e63396b90dc3f612.png" },
        { title: "Arte y Expresión", description: "Creatividad sin límites", image: "0efeb3345d9b07f583b42566bafb9186f61a1a39.png" },
        { title: "Ciencia Aplicada", description: "De la teoría a la vida real", image: "5b01457abcec8c2b0951267bb7740ff3c7ef1e5b.png" },
        { title: "Salón Montessori", description: "Espacios diseñados para la exploración", image: "e0dae56557d8ab19da11ed11516918eed798eb5f.png" },
        { title: "Proyectos Interdisciplinarios", description: "Conectando conocimientos", image: "86c7d5378b7442e952a390db8c4de376924238e6.png" },
        { title: "Matemáticas", description: "Números y lógica a través del juego", image: "c50c34fa6b9124e950152006652e577ec56e7545.png" },
      ],
    },
    founder: {
      kicker: "Fundadora",
      title: "Conoce a nuestra directora",
      name: "Miss Courtney Nicolaides",
      image: "3d8f65218567cdbf3d70f1c4ce0d26e988a65c7c.png",
      highlights: [
        "Psicóloga con maestría en Sociología (énfasis en educación)",
        "Maestría en Política Pública Educativa",
        "Estudios en Estados Unidos, República Checa y México",
        "Dos diplomados de posgrado en Harvard Graduate School of Education",
        "Conferencista sobre Inteligencia Artificial aplicada a la educación",
        "Autora de libros sobre educación y tecnología",
      ],
      quote:
        '"Colossal Academy nace en la intersección de mis dos amores: mi hija y la educación. Creé la escuela que quería para ella y para cada niño que merece una educación significativa."',
    },
    testimonials: {
      kicker: "Testimonios",
      title: "Lo que dicen las familias",
      copy: "Experiencias reales de quienes ya forman parte de la comunidad.",
      reviewVerified: "Reseña verificada",
      items: [
        {
          name: "David Kramer",
          initials: "DK",
          quote:
            "Nuestra hija fue a esta increíble escuela durante un mes mientras estábamos en Mérida. La atención y el cuidado hacia los niños es ejemplar y muy enriquecedor. ¡Tantas actividades geniales! A nuestra hija le encantó y a nosotros también. ¡100% recomendado tanto para estadías a largo como a corto plazo!",
        },
        {
          name: "Chris Turcotte",
          initials: "CT",
          quote:
            "Gran escuela bilingüe para tu pequeño curioso. Miss Courtney es una educadora increíble. Ella entiende a los niños. Cada semana, si no todos los días, me impresiona el conocimiento con el que mi hijo llega a casa.",
        },
        {
          name: "Shirley Gomez",
          initials: "SG",
          quote:
            "Excelente escuelita, maestros capacitados y actividades muy divertidas. Me encanta que sea bilingüe y ver cómo mi hijo de 2 aprende día con día un nuevo idioma. Además llevan clases de música y arte que le gusta mucho.",
        },
        {
          name: "Alejandro Contreras",
          initials: "AC",
          quote:
            "A mi hija le encanta absolutamente esta escuela. Desde el primer día, Miss Courtney y su equipo la han hecho sentir, y a nosotros también, muy bienvenidos y cuidados. Realmente se nota cuánto aman lo que hacen.",
        },
        {
          name: "Hakuna Cassatta",
          initials: "HC",
          quote:
            "¡Nos encanta este preescolar bilingüe! Son verdaderamente bilingües. El plan de estudios de educación temprana está tan bien o mejor diseñado que el de cualquiera de las grandes escuelas y el personal es muy atento con cada estudiante.",
        },
      ],
    },
    faq: {
      kicker: "Preguntas Frecuentes",
      title: "Resolvemos tus dudas",
      copy: "Todo lo que necesitas saber sobre Colossal Academy.",
      image: "e476e5b6e74bde49692689d32409e3e7b1fd7002.png",
      imageAlt: "Niños aprendiendo en Colossal Academy",
      items: [
        {
          question: "¿Cómo es el proceso de inscripción?",
          answer:
            "El primer paso es agendar una visita. Ahí conocen el espacio, conversan con el equipo y revisan disponibilidad, edades y acompañamiento para cada familia.",
        },
        {
          question: "¿Cuál es el enfoque académico?",
          answer:
            "El enfoque combina aprendizaje activo, experiencias reales, exploración guiada y desarrollo socioemocional. Buscamos que cada niño comprenda, cree y participe.",
        },
        {
          question: "¿La escuela es bilingüe?",
          answer:
            "Sí. El sitio presenta una comunidad bilingüe donde el inglés y el español forman parte natural de la experiencia cotidiana.",
        },
        {
          question: "¿Qué edades aceptan y cuántos alumnos hay por salón?",
          answer:
            "La propuesta está pensada para preschool con grupos reducidos. Durante la visita pueden confirmar rango de edades vigente, disponibilidad y composición de cada grupo.",
        },
        {
          question: "¿Ofrecen actividades extraescolares?",
          answer:
            "Sí. La experiencia incluye arte, movimiento, música, proyectos, cocina y salidas que amplían el aprendizaje más allá del aula.",
        },
      ],
    },
    contact: {
      ctaTitle: "¿Listo para formar parte de nuestra comunidad?",
      ctaCopy:
        "Agenda una visita y descubre cómo podemos transformar la educación de tu hijo o hija.",
      kicker: "Contacto",
      title: "Estamos en Mérida, Yucatán",
      copy: "Ven a conocer nuestras instalaciones y comunidad.",
      infoTitle: "Información",
      labels: {
        address: "Dirección",
        phone: "Teléfono",
        email: "Email",
        hours: "Horario",
      },
      hours: "Lunes a viernes, 8:00 AM a 4:00 PM",
      mapTitle: "Ubicación de Colossal Academy Kids",
    },
    footer: {
      blurb:
        "Comunidad educativa que honra la infancia y prepara a los niños para el futuro.",
      contact: "Contacto",
      hours: "Horarios",
      follow: "Síguenos",
      week: "Lunes a Viernes",
      visits: "Visitas",
      byAppointment: "Con cita previa",
      rights: "© 2026 Colossal Academy Kids. Todos los derechos reservados.",
    },
  },
  en: {
    meta: {
      lang: "en",
      path: "/en",
      title: "Colossal Academy Kids | Preschool in Merida",
      description:
        "Bilingual preschool in Merida with active learning, small groups, and a child-centered educational community.",
      whatsapp:
        "https://wa.me/529995423580?text=Hello%2C%20I%27d%20like%20to%20schedule%20a%20visit%20to%20Colossal%20Academy%20Kids",
    },
    switcher: {
      current: "English",
      alternate: "Español",
      alternatePath: "/",
      menu: "Menu",
    },
    navItems: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#vision" },
      { label: "School", href: "#life" },
      { label: "Reviews", href: "#reviews" },
      { label: "Contact", href: "#contacto" },
    ],
    ctas: {
      bookVisit: "Book a visit",
      explore: "Explore more",
      whatsapp: "Chat on WhatsApp",
      visitUs: "Visit us",
    },
    hero: {
      eyebrow: "Bilingual preschool in Merida",
      title: "Practical education for the real world",
      description:
        "An educational community that honors childhood and prepares children for the future.",
      videoTitle: "Colossal Academy - Educational Philosophy",
      worldAlt: "World Icon",
      decorations: heroDecorations,
    },
    values: {
      kicker: "About",
      title: "A different school for a new generation",
      copy: "We educate children to understand the world and help create the future.",
      cards: [
        {
          title: "Active learning, not passive learning",
          description: "Children participate, build, and apply what they learn.",
          image: "4ac72e2e33b4e6703403e7852cd4c42bd2b7ca1b.png",
          icon: "book",
        },
        {
          title: "Technology with purpose",
          description: "Tools that serve creativity and humanity.",
          image: "c7e705c6375c75f0bcc3979016de20233fdf4278.png",
          icon: "rocket",
        },
        {
          title: "Voice and agency",
          description: "Children make decisions and develop autonomy.",
          image: "d23d582430b34e89088b7af12f173a4ff1d6d733.png",
          icon: "chat",
        },
        {
          title: "Educational community",
          description: "We are not a traditional institution. We are a community.",
          image: "4242f15aefb984e4abf03381c8b52ba53655813e.png",
          icon: "heart",
        },
      ],
    },
    differentiators: {
      kicker: "What Makes Us Different",
      title: "Personalized Attention",
      copy: "We strengthen skills and knowledge through small groups and close support.",
      image: "f48c3688cbb0eb96230bd40686eff1909c15f4d9.png",
      imageAlt: "Children in a learning environment",
      items: [
        "Small groups",
        "Individual attention",
        "We grow each child's talents",
        "Modern education",
        "Experiential learning",
        "Connection with the real world",
        "Technology in service of humanity",
        "Teachers who are experts in their fields",
      ],
    },
    schoolLife: {
      kicker: "School",
      title: "Life at Colossal",
      copy: "A typical day is full of discoveries, laughter, challenges, and growth.",
      quote: '"Learning by doing. Being a child is also part of learning."',
      cards: [
        { title: "Cooking", description: "Practical life skills", image: "8181ec8004e016baa8ee81642e79b20b7dbf77fa.png" },
        { title: "Sports and Movement", description: "Active bodies, active minds", image: "ddcfe107aebacf0c80ec24fbe4142f868e01a303.png" },
        { title: "Field Trips", description: "The world is our classroom", image: "b1df46b180339a60c9e58605b03093ccd17db61d.png" },
        { title: "Circle Time", description: "Sharing ideas and building community", image: "1aaf09c13b59c68d3b924162e63396b90dc3f612.png" },
        { title: "Art and Expression", description: "Creativity without limits", image: "0efeb3345d9b07f583b42566bafb9186f61a1a39.png" },
        { title: "Applied Science", description: "From theory to real life", image: "5b01457abcec8c2b0951267bb7740ff3c7ef1e5b.png" },
        { title: "Montessori Classroom", description: "Spaces designed for exploration", image: "e0dae56557d8ab19da11ed11516918eed798eb5f.png" },
        { title: "Interdisciplinary Projects", description: "Connecting knowledge", image: "86c7d5378b7442e952a390db8c4de376924238e6.png" },
        { title: "Math", description: "Numbers and logic through play", image: "c50c34fa6b9124e950152006652e577ec56e7545.png" },
      ],
    },
    founder: {
      kicker: "Founder",
      title: "Meet our director",
      name: "Miss Courtney Nicolaides",
      image: "3d8f65218567cdbf3d70f1c4ce0d26e988a65c7c.png",
      highlights: [
        "Psychologist with a master's degree in Sociology focused on education",
        "Master's degree in Educational Public Policy",
        "Academic studies in the United States, the Czech Republic, and Mexico",
        "Two postgraduate certificates from Harvard Graduate School of Education",
        "Speaker on Artificial Intelligence applied to education",
        "Author of books about education and technology",
      ],
      quote:
        '"Colossal Academy was born at the intersection of my two greatest loves: my daughter and education. I created the school I wanted for her, and for every child who deserves meaningful learning."',
    },
    testimonials: {
      kicker: "Reviews",
      title: "What families are saying",
      copy: "Real experiences from families already part of the community.",
      reviewVerified: "Verified review",
      items: [
        {
          name: "David Kramer",
          initials: "DK",
          quote:
            "Our daughter attended this incredible school for a month while we were in Merida. The care and attention given to the children is exceptional and deeply enriching. She loved it, and so did we.",
        },
        {
          name: "Chris Turcotte",
          initials: "CT",
          quote:
            "Great bilingual school for your curious little one. Miss Courtney is an amazing educator. She truly understands children, and I am constantly impressed by what my son comes home knowing.",
        },
        {
          name: "Shirley Gomez",
          initials: "SG",
          quote:
            "Excellent little school, trained teachers, and very fun activities. I love that it is bilingual and seeing how my 2-year-old learns a new language day by day.",
        },
        {
          name: "Alejandro Contreras",
          initials: "AC",
          quote:
            "My daughter absolutely loves this school. From day one, Miss Courtney and her team made her, and us, feel welcomed and cared for. You can truly see how much they love what they do.",
        },
        {
          name: "Hakuna Cassatta",
          initials: "HC",
          quote:
            "We love this bilingual preschool. They are genuinely bilingual, which is not always the case in Merida. The early education curriculum is thoughtfully designed and the staff is attentive with every student.",
        },
      ],
    },
    faq: {
      kicker: "Frequently Asked Questions",
      title: "We answer your questions",
      copy: "Everything you need to know about Colossal Academy.",
      image: "e476e5b6e74bde49692689d32409e3e7b1fd7002.png",
      imageAlt: "Children learning at Colossal Academy",
      items: [
        {
          question: "What does the enrollment process look like?",
          answer:
            "The first step is to schedule a visit. Families get to know the space, meet the team, and review availability, ages, and the best fit for each child.",
        },
        {
          question: "What is the academic approach?",
          answer:
            "The approach combines active learning, real-world experiences, guided exploration, and socio-emotional development. We want children to understand, create, and participate.",
        },
        {
          question: "Is the school bilingual?",
          answer:
            "Yes. The school is presented as a bilingual community where English and Spanish are naturally part of daily life.",
        },
        {
          question: "What ages do you accept and how large are the groups?",
          answer:
            "The program is designed for preschool ages with small groups. During your visit, the team can confirm current age ranges, availability, and group composition.",
        },
        {
          question: "Do you offer extracurricular activities?",
          answer:
            "Yes. The experience includes art, movement, music, projects, cooking, and outings that expand learning beyond the classroom.",
        },
      ],
    },
    contact: {
      ctaTitle: "Ready to join our community?",
      ctaCopy:
        "Schedule a visit and discover how we can transform your child's educational journey.",
      kicker: "Contact",
      title: "We are in Merida, Yucatan",
      copy: "Come visit our campus and community.",
      infoTitle: "Information",
      labels: {
        address: "Address",
        phone: "Phone",
        email: "Email",
        hours: "Hours",
      },
      hours: "Monday to Friday, 8:00 AM to 4:00 PM",
      mapTitle: "Colossal Academy Kids location",
    },
    footer: {
      blurb:
        "An educational community that honors childhood and prepares children for the future.",
      contact: "Contact",
      hours: "Hours",
      follow: "Follow us",
      week: "Monday to Friday",
      visits: "Visits",
      byAppointment: "By appointment",
      rights: "© 2026 Colossal Academy Kids. All rights reserved.",
    },
  },
} as const;

export type SiteContent = (typeof localeContent)[Locale];

export function getSiteContent(locale: Locale): SiteContent {
  return localeContent[locale];
}
