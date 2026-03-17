import type { Dictionary } from "./en";

const fr: Dictionary = {
  nav: {
    experiences: "Expériences",
    howItWorks: "Comment ça Marche",
    about: "À Propos",
    gallery: "Galerie",
    reviews: "Avis",
    faq: "FAQ",
    bookYourRun: "Réservez Votre Run",
  },
  hero: {
    tagline: "Courir \u2022 Explorer \u2022 Découvrir",
    title: "Découvrez Las Palmas",
    titleHighlight: "en Courant",
    subtitle:
      "Explorez des monuments emblématiques, des trésors cachés et des côtes magnifiques avec un coureur local comme guide.",
    cta1: "Voir les Expériences",
    cta2: "Rencontrez Votre Guide",
    rating: "5.0 — Adoré par des coureurs de plus de 20 pays",
  },
  trust: {
    runners: "Coureurs Heureux",
    rating: "Note Moyenne",
    countries: "Pays",
    routes: "Parcours Uniques",
  },
  experiences: {
    label: "Choisissez Votre Aventure",
    title: "Nos Expériences Running",
    subtitle:
      "Trois façons uniques de découvrir Las Palmas de Gran Canaria en courant",
    bookNow: "Réserver",
    from: "À partir de",
    person: "/personne",
    tours: [
      {
        title: "Las Canteras Running Experience",
        description:
          "Courez le long de la magnifique plage de Las Canteras, l'une des plus belles plages urbaines d'Europe, en plein cœur de la ville. Le parcours se termine au célèbre Auditorium Alfredo Kraus, où les vues sur l'océan rendent cette expérience inoubliable.",
        badge: "PLUS POPULAIRE",
        distance: "5-7 km",
        duration: "60-75 min",
        level: "Tous niveaux",
      },
      {
        title: "Course Historique à Vegueta",
        description:
          "Remontez le temps en courant à travers Vegueta, le cœur historique de la ville. Découvrez l'impressionnante Cathédrale, le marché local animé, l'élégant Théâtre Pérez Galdós et la célèbre Place Santa Ana, entourée de siècles d'histoire et d'architecture magnifique.",
        badge: "CULTUREL",
        distance: "4-6 km",
        duration: "60-90 min",
        level: "Tous niveaux",
      },
      {
        title: "Tour Running Complet de Las Palmas",
        description:
          "Explorez la ville d'un bout à l'autre sur ce parcours unique. En partant près du Port et de la Marina, nous courons à travers le centre-ville animé, le long de la plage de Las Alcaravaneras, pour finir aux spectaculaires piscines naturelles de La Laja. Une façon parfaite de vivre les paysages, la culture et l'énergie de Las Palmas en courant.",
        badge: "AVENTURE",
        distance: "10-12 km",
        duration: "90-120 min",
        level: "Intermédiaire",
      },
    ],
  },
  privateTour: {
    label: "Expérience Exclusive",
    title: "Envie d'une expérience personnalisée ?",
    subtitle:
      "Réservez un tour running privé adapté à votre rythme, vos intérêts et votre emploi du temps. La ville est à vous.",
    from: "À partir de",
    person: "/personne",
    cta: "Demander un Tour Privé",
  },
  howItWorks: {
    label: "Processus Simple",
    title: "Comment ça Marche",
    subtitle: "De la réservation à la ligne d'arrivée en 3 étapes simples",
    steps: [
      {
        title: "Choisissez Votre Expérience",
        description:
          "Choisissez votre tour, date et taille de groupe. Réservez en ligne en quelques secondes.",
      },
      {
        title: "Rencontrez Votre Guide",
        description:
          "Nous nous retrouvons au point de départ. Votre guide coureur local vous présentera le parcours.",
      },
      {
        title: "Courez et Découvrez",
        description:
          "Profitez de la course à votre rythme. Photos, histoires et vues inoubliables incluses.",
      },
    ],
    step: "ÉTAPE",
  },
  about: {
    label: "Votre Guide",
    title: "Rencontrez Nano (Dani Mesa)",
    p1: "Salut ! Je suis Dani, mais tout le monde m'appelle Nano. Je suis un coureur passionné et fier habitant de Las Palmas de Gran Canaria. J'ai créé Running Tours LPGC parce que je crois que la meilleure façon de découvrir une ville, c'est en courant.",
    p2: "Que vous soyez un marathonien expérimenté ou un jogger occasionnel, j'adapterai chaque parcours à votre rythme et vous montrerai les endroits que seuls les locaux connaissent. Courons ensemble !",
    yearsRunning: "Ans de Course",
    local: "Local",
    bornRaised: "Né et Élevé",
    languages: "Langues",
    followInstagram: "Suivez sur Instagram",
    joinStrava: "Rejoignez sur Strava",
    guideCard: "Nano — Guide Runner Local",
    guideLocation: "Las Palmas de Gran Canaria",
  },
  gallery: {
    label: "Las Palmas de Gran Canaria",
    title: "La Ville Vous Attend",
    images: [
      "Plage de Las Canteras",
      "Cathédrale Santa Ana",
      "Auditorium Alfredo Kraus",
      "Rues de Vegueta",
      "Piscines Naturelles",
      "Théâtre Pérez Galdós",
      "Sculpture Atlantique",
      "Plage Volcanique",
    ],
  },
  reviews: {
    label: "Témoignages",
    title: "Ce Que Disent les Coureurs",
  },
  faq: {
    label: "Des Questions ?",
    title: "Questions Fréquentes",
    items: [
      {
        question: "Quel niveau de forme physique faut-il ?",
        answer:
          "Nos tours sont conçus pour tous les niveaux. Nous adaptons le rythme au groupe. Que vous couriez 5 km ou des marathons, vous apprécierez l'expérience. On ne laisse personne derrière !",
      },
      {
        question: "Que dois-je apporter ?",
        answer:
          "Juste vos chaussures de course et des vêtements confortables. Nous fournissons l'eau et prenons des photos pendant la course pour que vous puissiez profiter pleinement.",
      },
      {
        question: "Comment réserver ?",
        answer:
          "Choisissez simplement votre expérience, sélectionnez une date et contactez-nous via WhatsApp ou le formulaire de réservation. Vous recevrez une confirmation avec les détails du point de rencontre.",
      },
      {
        question: "Puis-je réserver un tour privé ?",
        answer:
          "Absolument ! Les tours privés sont entièrement personnalisables selon votre rythme, vos intérêts et votre emploi du temps. Contactez-nous et nous concevrons le parcours parfait pour vous. À partir de 90€/personne.",
      },
      {
        question: "Et s'il pleut ?",
        answer:
          "Las Palmas bénéficie de plus de 300 jours de soleil par an ! Dans le rare cas de mauvais temps, nous reprogrammons sans frais supplémentaires.",
      },
      {
        question: "Quelles langues proposez-vous ?",
        answer:
          "Les tours sont disponibles en anglais et en espagnol. D'autres langues peuvent être disponibles sur demande.",
      },
    ],
  },
  finalCta: {
    title: "Prêt à Courir ?",
    subtitle:
      "Réservez votre running tour et découvrez Las Palmas comme jamais auparavant.",
    cta: "Réservez Votre Expérience",
    whatsapp: "Discuter sur WhatsApp",
  },
  footer: {
    tagline:
      "La meilleure façon de découvrir Las Palmas de Gran Canaria, c'est en courant. Tours guidés avec un coureur local.",
    quickLinks: "Liens Rapides",
    contact: "Contact",
    findUsOn: "Retrouvez-nous aussi sur",
    rights: "Tous droits réservés.",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d'Utilisation",
  },
};

export default fr;
