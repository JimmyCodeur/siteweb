import AgentImage from '../assets/images/bot_1.webp';
import AgentImageDev from '../assets/images/agent_dev.webp';
import AgentImageAssistance from '../assets/images/agent_assistance.webp';
import AgentImageChatbot from '../assets/images/agent_chatbot.webp';


export const agentModes = [
    {
      icon: "fas fa-comments",
      title: "Mode Conversation",
      description:
        "Une interaction fluide et naturelle pour répondre aux questions et guider l'utilisateur, comme si vous discutiez avec un humain.",
    },
    {
      icon: "fas fa-keyboard",
      title: "Mode Écrit",
      description:
        "Idéal pour fournir des réponses détaillées, des explications techniques ou des solutions adaptées, par texte.",
    },
    {
      icon: "fas fa-microphone-alt",
      title: "Mode Vocal en Temps Réel",
      description:
        "Discutez directement avec votre agent IA grâce à la reconnaissance vocale et une réponse instantanée. Parfait pour les expériences immersives.",
    },
    {
      icon: "fas fa-robot",
      title: "Mode Interactif",
      description:
        "Proposez des jeux éducatifs, des exercices pratiques ou des simulations pour engager davantage les utilisateurs.",
    },
    {
      icon: "fas fa-video",
      title: "Mode Visuel",
      description:
        "Intégrez des présentations vidéo, des graphiques ou des visualisations pour enrichir les explications et rendre l'expérience captivante.",
    },
    {
      icon: "fas fa-cogs",
      title: "Modes Personnalisés",
      description:
        "Créez des agents adaptés à des contextes spécifiques : avec l'IA, les possibilités sont infinies.",
    },
    {
      icon: "fas fa-cloud-upload-alt",
      title: "Déploiement Flexible",
      description:
        "Intégrez vos agents sur des plateformes web, applications mobiles ou dans vos systèmes internes pour une accessibilité maximale.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Sécurité Renforcée",
      description:
        "Protégez vos données et interactions grâce à des protocoles de sécurité avancés, garantissant la confidentialité et la fiabilité de vos agents IA.",
    },
    {
      icon: "fas fa-hand-holding",
      title: "Facilité d'Utilisation",
      description:
        "Profitez d'une interface intuitive et accessible, conçue pour simplifier l’interaction avec vos agents IA, même pour les débutants.",
    },
    {
      icon: "fas fa-user-secret",
      title: "Confidentialité des Données",
      description:
        "Garantissez la sécurité et la confidentialité de vos informations grâce à des protocoles de protection rigoureux et conformes aux normes.",
    },
    {
      icon: "fas fa-expand-arrows-alt",
      title: "Évolutivité",
      description:
        "Augmentez les capacités de vos agents IA au fil du temps, en ajoutant de nouvelles fonctionnalités pour répondre à vos besoins croissants.",
    },
    {
      icon: "fas fa-clock",
      title: "Assistance 24/7",
      description:
        "Offrez une disponibilité continue avec des agents IA qui restent opérationnels jour et nuit, pour répondre à vos utilisateurs à tout moment.",
    },
  ];
  
  export const agentCategories = [
    {
      category: "Agents Éducatifs & Apprentissages",
      agents: [
        {
          title: "Apprendre l'anglais",
          description: "Un agent IA interactif qui vous aide à améliorer vos compétences linguistiques en pratiquant des conversations, en vous corrigeant et en suivant vos progrès.",
          image: AgentImage,
          progress: 85,
          features: [
            "Prise en charge vocale",
            "Pratique conversationnelle",
            "Vérification grammaticale",
            "Traduction en temps réel",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton assistant d'apprentissage en anglais. Prêt à commencer ?" },
            { speaker: "User", message: "Oui, je suis prêt." },
            { speaker: "IA", message: "Parfait ! Essayons une phrase simple. Comment dirais-tu 'Bonjour, comment ça va ?' en anglais ?" },
            { speaker: "User", message: "Hello, how are you?" },
            { speaker: "IA", message: "Très bien ! C'est correct. Pour être plus naturel, tu peux dire : 'Hi, how are you doing?'." },
            { speaker: "IA", message: "Maintenant, essayons une autre question. Comment demander : 'Quelle heure est-il ?' ?" },
            { speaker: "User", message: "What time is it?" },
            { speaker: "IA", message: "Exactement ! Excellent travail. Tu peux aussi dire : 'Do you have the time?' dans une conversation informelle." },
            { speaker: "IA", message: "Maintenant, raconte-moi ce que tu fais pendant le week-end. Tu peux commencer par : 'During the weekend, I...'" },
            { speaker: "User", message: "During the weekend, I go to the park and play with my kids." },
            { speaker: "IA", message: "Bravo ! Tu as bien formulé ta phrase. Pour enrichir, tu peux dire : 'During the weekend, I usually go to the park with my kids and we play games together.' Cela montre plus d'interaction." },
            { speaker: "IA", message: "Continuons. Comment dirais-tu : 'Je vais au cinéma avec mes amis' ?" },
            { speaker: "User", message: "I go to the cinema with my friends." },
            { speaker: "IA", message: "Très bien ! C'est correct. En anglais américain, 'cinema' est souvent remplacé par 'movie theater'. Cela donnerait : 'I go to the movie theater with my friends.'." }
          ],
        },
        {
          title: "Apprendre à programmer",
          description: "Un agent IA conçu pour enseigner les bases de la programmation, vous guider à travers des exemples interactifs et des défis de codage adaptés à votre niveau.",
          image: AgentImageDev,
          progress: 25,
          features: [
            "Exercices interactifs",
            "Adaptées au niveau",
            "Corrections automatiques des erreurs",
            "Simulations de projets réels",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ici pour t'aider à apprendre la programmation. Prêt à commencer ?" },
            { speaker: "User", message: "Oui, absolument !" },
            { speaker: "IA", message: "Commençons par une question simple. Que signifie 'variable' en programmation ?" },
            { speaker: "User", message: "C'est une sorte de conteneur pour stocker des données." },
            { speaker: "IA", message: "Exactement ! Une variable est un espace de stockage nommé qui peut contenir différentes valeurs. Essayons de créer une variable en JavaScript : `let x = 10;`." },           
            { speaker: "IA", message: "Super ! Maintenant, essayons quelque chose d'un peu plus complexe. Comment créer une fonction en JavaScript qui additionne deux nombres ?" },
            { speaker: "User", message: "Je ne sais pas trop." },
            { speaker: "IA", message: "Pas de souci ! Voici comment faire : `function add(a, b) { return a + b; }`. Cette fonction prend deux arguments et retourne leur somme." },
            { speaker: "IA", message: "Essaye maintenant d'appeler cette fonction avec les arguments 5 et 7. Que devrait-elle retourner ?" },
            { speaker: "User", message: "12." },
            { speaker: "IA", message: "Exact ! Bien joué. Tu es prêt à passer au niveau suivant ?" },
            { speaker: "IA", message: "Pour le niveau avancé, essayons de manipuler des tableaux. Comment ajouter un élément à la fin d'un tableau en JavaScript ?" },
            { speaker: "User", message: "Je pense que c'est avec `.push()`." },
            { speaker: "IA", message: "Exactement ! Si tu as un tableau `let fruits = ['pomme', 'banane'];`, tu peux ajouter un élément comme ceci : `fruits.push('orange');`. Le tableau devient `['pomme', 'banane', 'orange']`." },
            { speaker: "IA", message: "Maintenant, peux-tu écrire une boucle qui parcourt ce tableau et affiche chaque fruit dans la console ?" },
            { speaker: "User", message: "Oui, quelque chose comme : `for (let i = 0; i < fruits.length; i++) { console.log(fruits[i]); }`." },
            { speaker: "IA", message: "Parfait ! Tu progresses vraiment bien." }
          ],
        },
      ],
    },
    {
      category: "Agents de Simulation",
      agents: [
        {
            title: "Préparateur d'Entretien d'Embauche",
            description: "Un agent IA interactif qui vous aide à préparer et réussir vos entretiens d'embauche avec des simulations, des conseils et des retours personnalisés.",
            image: AgentImageChatbot,
            progress: 40,
            features: [
              "Simulations d'entretien",
              "Réponses aux questions",
              "Conseils personnalisés",
              "Feedback détaillé",
            ],
            conversation: [
              { speaker: "IA", message: "Bonjour ! Je suis ton assistant pour t’aider à réussir tes entretiens d’embauche. Es-tu prêt à commencer ?" },
              { speaker: "User", message: "Oui, je veux me préparer pour mon entretien." },
              { speaker: "IA", message: "Génial ! Commençons par la base. Sais-tu comment structurer une réponse à la question 'Pouvez-vous vous présenter ?'" },
              { speaker: "User", message: "Je pense, mais je ne suis pas sûr." },
              { speaker: "IA", message: "Pas de problème ! Ta réponse doit être structurée en 3 parties : Qui tu es, ce que tu fais, et pourquoi tu es ici. Par exemple : 'Je m'appelle Sarah, je suis une gestionnaire de projet expérimentée, spécialisée dans la technologie. J'ai postulé à ce rôle parce que je suis passionnée par la gestion d'équipes pour résoudre des défis complexes.' À toi d'essayer." },
              { speaker: "User", message: "Je m'appelle Jean, je suis développeur avec 3 ans d'expérience en JavaScript. J'aime résoudre des problèmes complexes. Je postule à ce poste car j'aime le développement d'applications." },
              { speaker: "IA", message: "Bien joué ! Tu peux améliorer en précisant une réalisation clé. Par exemple : 'J'ai dirigé un projet qui a réduit le temps de chargement des pages de 30 %. C'est pourquoi je pense pouvoir apporter une vraie valeur à votre entreprise.' À toi !" },
              { speaker: "IA", message: "Passons à une autre question courante : 'Pourquoi voulez-vous ce poste ?'. As-tu une idée de ce que tu pourrais dire ?" },
              { speaker: "User", message: "Parce que j'aime le développement web." },
              { speaker: "IA", message: "C'est un bon point de départ, mais essayons de le rendre plus spécifique. Tu dois montrer que tu as compris l’entreprise et comment tu peux y contribuer. Par exemple : 'Je suis passionné par le développement web, et je vois que votre entreprise met l'accent sur des solutions innovantes. J'aimerais contribuer à ces projets et continuer à apprendre dans un environnement dynamique.' Essaie maintenant !" },
              { speaker: "User", message: "J'aime votre entreprise parce qu'elle est innovante. Je veux contribuer avec mes compétences en développement web." },
              { speaker: "IA", message: "Super ! Ajoute peut-être une anecdote personnelle ou un lien avec leurs projets pour rendre ta réponse encore plus percutante." },
              { speaker: "IA", message: "Maintenant, parlons des points forts et des points faibles. Commençons par les points forts. Quels sont tes principaux atouts professionnels ?" },
              { speaker: "User", message: "Je suis organisé et je travaille bien en équipe." },
              { speaker: "IA", message: "Excellents choix ! Pour impressionner encore plus, appuie tes points forts avec un exemple concret. Par exemple : 'Lors de mon dernier projet, mon organisation a permis de livrer le projet une semaine avant la date limite.' Essaie maintenant." },
              { speaker: "User", message: "Je suis organisé, et lors de mon dernier projet, j'ai aidé mon équipe à respecter toutes les échéances." },
              { speaker: "IA", message: "Très bien ! Cela montre ton impact direct sur l'équipe." },
              { speaker: "IA", message: "Passons aux points faibles. Cette question peut être délicate. Tu dois être honnête mais montrer que tu travailles sur ton amélioration. Par exemple : 'Je peux parfois me concentrer trop sur les détails, mais j'apprends à prioriser les tâches importantes.' Quel est ton point faible ?" },
              { speaker: "User", message: "Je pense que je prends trop de temps pour vérifier mon travail." },
              { speaker: "IA", message: "Bonne réponse ! Pour la compléter, explique ce que tu fais pour t'améliorer. Par exemple : 'Je travaille à gérer mon temps plus efficacement en utilisant des outils de planification.' Essaie d'ajouter cela." },
              { speaker: "IA", message: "Passons aux questions comportementales. Une question fréquente est : 'Parlez-moi d'un défi professionnel que vous avez surmonté.' Que dirais-tu ?" },
              { speaker: "User", message: "Une fois, mon équipe avait un délai très court, et j'ai dû travailler tard pour terminer le projet." },
              { speaker: "IA", message: "C'est un bon exemple. Rends-le plus impactant en utilisant la méthode STAR (Situation, Tâche, Action, Résultat). Par exemple : 'Lors d'un projet important, nous avons eu un délai très serré (Situation). J'étais responsable de coordonner l'équipe pour livrer à temps (Tâche). J'ai réorganisé les priorités et travaillé tard (Action), ce qui nous a permis de respecter la date limite avec un client satisfait (Résultat).' Essaie d'adapter cela à ton histoire." },
              { speaker: "IA", message: "Les employeurs aiment parfois poser des questions inattendues, comme : 'Si vous étiez un animal, lequel seriez-vous et pourquoi ?' Tu peux montrer ta personnalité tout en reliant ta réponse au rôle. Par exemple : 'Je serais une fourmi, car elles sont organisées, collaboratives, et travaillent dur pour atteindre leurs objectifs.' Essaie maintenant !" },
              { speaker: "User", message: "Je serais un aigle, car je vise toujours haut et je garde une vue d'ensemble sur les projets." },
              { speaker: "IA", message: "Excellent choix ! Cela montre que tu es stratégique et ambitieux." },
              { speaker: "IA", message: "Pour conclure, on te demandera souvent : 'Avez-vous des questions pour nous ?'. Prépare toujours une ou deux questions pertinentes. Par exemple : 'Comment définissez-vous le succès dans ce rôle ?' ou 'Quelles sont les prochaines étapes du processus de recrutement ?' As-tu des questions en tête ?" },
              { speaker: "User", message: "Je pourrais demander quelles sont les opportunités de croissance dans l'entreprise." },
              { speaker: "IA", message: "Parfait ! Cela montre ton intérêt pour l'avenir et ton envie de t'engager à long terme." },
              { speaker: "IA", message: "Bien joué ! Avec un peu plus de pratique, tu seras prêt à impressionner lors de ton prochain entretien. N’oublie pas : sois confiant, prépare-toi bien, et montre ton enthousiasme. Bonne chance !" },
            ]
          },
          {
            title: "Coach de Présentation Publique",
            description: "Un agent IA interactif qui vous aide à perfectionner vos compétences en prise de parole en public grâce à des exercices pratiques, des simulations et des retours constructifs.",
            image: AgentImageAssistance,
            progress: 60,
            features: [
              "Simulations de présentations",
              "Analyse vocale & vidéo",
              "Conseils sur le langage corporel",
              "Feedback détaillé sur la structure",
            ],
            conversation: [
              { speaker: "IA", message: "Bonjour ! Je suis ton coach de présentation publique. Prêt à améliorer tes compétences en communication ?" },
              { speaker: "User", message: "Oui, je veux m'améliorer dans mes présentations." },
              { speaker: "IA", message: "Parfait ! Commençons par les bases. Quand tu présentes, assure-toi de structurer ton discours en trois parties : introduction, développement, et conclusion. Essaye de m'expliquer un sujet qui t'intéresse." },
              { speaker: "User", message: "Je veux parler des énergies renouvelables." },
              { speaker: "IA", message: "Excellent choix ! Ton introduction pourrait être : 'Aujourd'hui, nous allons explorer les énergies renouvelables, une solution clé pour lutter contre le changement climatique.' Passons à la partie développement. Peux-tu donner trois points clés à développer ?" },
              { speaker: "User", message: "Leur importance, les types d'énergies renouvelables, et les défis." },
              { speaker: "IA", message: "Super ! Pour la conclusion, termine avec un appel à l'action. Par exemple : 'Investir dans les énergies renouvelables est essentiel pour construire un avenir durable.' Essaie de répéter le tout." },
              { speaker: "IA", message: "Maintenant, travaillons sur ta voix. Parle-moi de ton sujet, et je vais analyser ton ton et ton rythme." },
              { speaker: "User", message: "Les énergies renouvelables sont importantes pour..." },
              { speaker: "IA", message: "Bien joué ! Ton ton est engageant, mais essaie de ralentir un peu et de marquer des pauses après chaque idée clé. Cela rendra ton discours plus impactant." },
              { speaker: "IA", message: "Passons au langage corporel. Assure-toi d'établir un contact visuel, d'utiliser tes mains pour illustrer tes points, et de te tenir droit. Imagine que tu présentes devant un public. Peux-tu essayer ?" },
              { speaker: "User", message: "Je vais essayer de lever les mains pour souligner mes points." },
              { speaker: "IA", message: "Parfait ! Ton langage corporel est dynamique. Continue ainsi et garde ton sourire pour capter l'attention du public." },
              { speaker: "IA", message: "Pour résumer, ta présentation était bien structurée, ton ton engageant, et ton langage corporel dynamique. Continue à pratiquer et tu deviendras un excellent orateur ! Besoin d'autres conseils ?" },
              { speaker: "User", message: "Non, merci pour l'aide." },
              { speaker: "IA", message: "Avec plaisir ! N'oublie pas : la pratique est la clé. Bonne chance pour ta prochaine présentation !" },
            ]
          },
          {
            title: "Simulateur de Négociation",
            description: "Un agent IA interactif conçu pour améliorer vos compétences en négociation, que ce soit pour des accords professionnels, des achats ou des discussions importantes.",
            image: AgentImageChatbot,
            progress: 50,
            features: [
              "Scénarios réalistes",
              "Techniques de négociation",
              "Analyse des réponses",
              "Stratégies personnalisées",
            ],
            conversation: [
              { speaker: "IA", message: "Bonjour ! Je suis ton assistant pour améliorer tes compétences en négociation. Prêt à te lancer ?" },
              { speaker: "User", message: "Oui, j'aimerais apprendre à mieux négocier." },
              { speaker: "IA", message: "Parfait ! Commençons par une situation simple : Tu veux négocier une augmentation de salaire. Comment commencerais-tu la discussion ?" },
              { speaker: "User", message: "Je demanderais si c'est possible d'avoir une augmentation." },
              { speaker: "IA", message: "C'est une approche directe, mais pour être plus persuasif, commence par expliquer tes contributions. Par exemple : 'Au cours de l'année dernière, j'ai mené plusieurs projets qui ont augmenté notre efficacité de 20%. Je pense que cela justifie une discussion sur une augmentation.' Essaie maintenant !" },
              { speaker: "User", message: "D'accord. J'ai contribué à augmenter les ventes de l'entreprise. Je mérite une augmentation." },
              { speaker: "IA", message: "Bien joué ! Ajoute des chiffres précis pour renforcer ton argumentation, comme : 'Grâce à mes efforts, les ventes ont augmenté de 15% cette année.' Passons à l'étape suivante." },
              { speaker: "IA", message: "Essayons un autre scénario : Tu veux négocier un prix plus bas pour une voiture. Comment aborderais-tu le vendeur ?" },
              { speaker: "User", message: "Je demanderais directement une réduction." },
              { speaker: "IA", message: "C'est une bonne base, mais sois stratégique. Par exemple : 'Cette voiture me plaît beaucoup, mais elle dépasse un peu mon budget. Pouvez-vous faire un geste sur le prix ?' Cela montre ton intérêt tout en laissant place à la négociation. Essaie cette approche." },
              { speaker: "IA", message: "Maintenant, parlons des concessions. Une bonne négociation implique parfois de donner pour recevoir. Par exemple, si tu veux des délais de paiement plus longs, propose quelque chose en échange. Peux-tu me donner un exemple ?" },
              { speaker: "User", message: "Je pourrais proposer de payer un peu plus si j'ai des délais plus longs." },
              { speaker: "IA", message: "Exactement ! C'est un compromis intelligent. Cela montre que tu es flexible, ce qui peut inciter l'autre partie à accepter." },
              { speaker: "IA", message: "Ton style de négociation est bon, mais essaie de poser plus de questions ouvertes, comme : 'Quels sont vos besoins prioritaires ?' Cela te permettra de mieux comprendre l'autre partie et d'adapter ta stratégie." },
              { speaker: "User", message: "D'accord, merci pour le conseil." },
              { speaker: "IA", message: "Avec plaisir ! Continue de t'entraîner, et tu deviendras un excellent négociateur. Besoin d'autres scénarios ?" },
            ]
          }
          
          
          
      ],
    }
    // Ajout d'autres catégories d'agent si nécessaire
  ];
  