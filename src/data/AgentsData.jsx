import AgentImage from '../assets/images/bot_1.webp';
import AgentImageDev from '../assets/images/agent_dev.webp';
import AgentImageAssistance from '../assets/images/agent_assistance.webp';
import AgentImageChatbot from '../assets/images/agent_chatbot.webp';
import AgentGestion from '../assets/images/ia_gestion.webp';
import AgentGMuscle from '../assets/images/ia_muscle.webp';
import AgentCuisine from '../assets/images/ia_cuisine.webp';
import AgentFinance from '../assets/images/ia_finance.webp';
import AgentVeille from '../assets/images/ia_veille.webp';
import AgentCollecte from '../assets/images/ia_collecte.webp';
import AgentDonnee from '../assets/images/ia_donnee.webp';
import AgentMedia from '../assets/images/ia_media.webp';
import AgentHistoire from '../assets/images/ia_histoire.webp';
import AgentSoftSkills from '../assets/images/ia_softskill.webp';
import AgentExcel from '../assets/images/ia_excel.webp';
import AgentGestionProjet from '../assets/images/ia_gestionprojets.webp';
import AgentProspection from '../assets/images/ia_prospection.webp';
import AgentGestionCrise from '../assets/images/ia_prospection.webp';


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
        {
          title: "Formation à la Gestion du Temps",
          description: "Un agent IA interactif conçu pour enseigner et améliorer les compétences en gestion du temps et en organisation, idéal pour les étudiants et les professionnels.",
          image: AgentGestion,
          progress: 10,
          features: [
            "Création de plannings personnalisés",
            "Suivi des objectifs",
            "Conseils sur les techniques de gestion du temps",
            "Rappels intelligents pour les échéances",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton assistant en gestion du temps. Prêt à mieux organiser tes journées ?" },
            { speaker: "User", message: "Oui, j’ai du mal à respecter mes échéances." },
            { speaker: "IA", message: "Pas de souci ! Commençons par identifier tes priorités. Quelles sont les trois tâches les plus importantes que tu dois accomplir cette semaine ?" },
            { speaker: "User", message: "Je dois finir un rapport, préparer une présentation, et répondre à des emails." },
            { speaker: "IA", message: "Bien. Pour le rapport, combien de temps penses-tu avoir besoin ? Je te recommande de bloquer des plages horaires spécifiques pour te concentrer uniquement sur cette tâche." },
            { speaker: "User", message: "Peut-être 3 heures." },
            { speaker: "IA", message: "Parfait ! Je vais planifier une session de 1h30 aujourd’hui et une autre demain. Pense aussi à éliminer les distractions pendant ces périodes. Veux-tu des astuces pour cela ?" },
            { speaker: "User", message: "Oui, je veux bien." },
            { speaker: "IA", message: "Utilise la technique Pomodoro : travaille pendant 25 minutes sans interruption, puis prends une pause de 5 minutes. Cela t’aide à rester concentré. Veux-tu que je programme un timer pour toi ?" },
            { speaker: "User", message: "Oui, merci." },
            { speaker: "IA", message: "Génial ! Pour tes emails, programme une session quotidienne de 30 minutes uniquement dédiée à cela. Cela évitera qu’ils te perturbent pendant d'autres tâches. Est-ce que cela te convient ?" },
            { speaker: "User", message: "Oui, c’est une bonne idée." },
            { speaker: "IA", message: "Super ! Enfin, pour ta présentation, je te propose de diviser le travail en trois étapes : collecte des informations, création des diapositives, et répétition. À quelle échéance veux-tu terminer ?" },
            { speaker: "User", message: "D’ici vendredi." },
            { speaker: "IA", message: "Excellent. Je vais répartir ces étapes sur les trois prochains jours. Tu recevras des rappels pour chaque étape. Tu veux aussi des conseils sur comment faire une bonne présentation ?" },
            { speaker: "User", message: "Oui, je veux bien." },
            { speaker: "IA", message: "Pour captiver ton audience, commence avec une introduction percutante, utilise des visuels clairs, et termine avec un appel à l’action. Je peux aussi analyser ton script si tu veux." },
            { speaker: "IA", message: "Pour résumer, ton planning est prêt et tes rappels sont programmés. Ensemble, nous allons t’aider à respecter toutes tes échéances et à devenir un expert en gestion du temps !" },
          ],
        },
        {
          title: "Apprentissage de l’Histoire",
          description: "Un agent IA interactif conçu pour enseigner et rendre l'apprentissage de l'histoire engageant, adapté aux étudiants, enseignants ou passionnés d'histoire.",
          image: AgentHistoire,
          progress: 20,
          features: [
            "Quiz interactifs sur différentes périodes historiques",
            "Récits captivants sur des événements marquants",
            "Analyse des causes et conséquences des événements",
            "Création de frises chronologiques personnalisées",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton guide dans le monde fascinant de l’histoire. Prêt à explorer les événements qui ont façonné notre monde ?" },
            { speaker: "User", message: "Oui, je veux apprendre quelque chose de nouveau." },
            { speaker: "IA", message: "Génial ! Préfères-tu commencer par une période spécifique comme l’Antiquité, le Moyen Âge, ou la Révolution industrielle ?" },
            { speaker: "User", message: "La Révolution industrielle." },
            { speaker: "IA", message: "Parfait ! La Révolution industrielle a marqué un tournant dans l’histoire humaine. Peux-tu deviner où elle a commencé ?" },
            { speaker: "User", message: "En Angleterre ?" },
            { speaker: "IA", message: "Exactement ! Elle a commencé en Angleterre au 18e siècle grâce à des innovations comme la machine à vapeur. Veux-tu savoir comment cela a changé la société ?" },
            { speaker: "User", message: "Oui, je veux en savoir plus." },
            { speaker: "IA", message: "Avec plaisir ! La machine à vapeur a révolutionné l’industrie textile, les transports, et la production en général. Cela a entraîné une urbanisation massive et de nombreux changements sociaux. Souhaites-tu explorer les avantages ou les inconvénients de cette période ?" },
            { speaker: "User", message: "Les avantages." },
            { speaker: "IA", message: "Les avantages incluent une production accrue, une baisse des coûts des biens, et des innovations technologiques qui ont transformé la vie quotidienne. À ton avis, quel a été le principal inconvénient ?" },
            { speaker: "User", message: "Peut-être les mauvaises conditions de travail ?" },
            { speaker: "IA", message: "Absolument. Les conditions de travail étaient terribles pour de nombreux ouvriers, avec des journées de travail longues et des salaires faibles. Souhaites-tu découvrir comment cela a conduit à des réformes sociales ?" },
            { speaker: "User", message: "Oui, je veux savoir." },
            { speaker: "IA", message: "Cela a conduit à des mouvements syndicaux et à des lois pour protéger les droits des travailleurs. Veux-tu faire un quiz rapide pour voir ce que tu as retenu ?" },
            { speaker: "User", message: "Oui, pourquoi pas !" },
            { speaker: "IA", message: "Super ! Première question : Quelle invention est considérée comme un symbole clé de la Révolution industrielle ?"},
            { speaker: "User", message: "La machine à vapeur ?" },
            { speaker: "IA", message: "Exact ! Bravo. Deuxième question : Dans quel secteur la Révolution industrielle a-t-elle eu le plus grand impact initial ?" },
            { speaker: "User", message: "L’industrie textile ?" },
            { speaker: "IA", message: "Bien joué ! Tu progresses rapidement. Si tu veux en savoir plus, je peux te guider à travers d'autres périodes historiques. Où veux-tu aller ensuite ?" },
            { speaker: "User", message: "L'Antiquité." },
            { speaker: "IA", message: "Excellent choix ! Nous allons explorer des civilisations fascinantes comme l’Égypte antique, la Grèce classique et Rome. Prêt pour une nouvelle aventure ?" },
            { speaker: "IA", message: "Avec moi, tu découvriras des histoires passionnantes et des leçons du passé. Ensemble, nous allons rendre l’histoire vivante !" },
          ],
        },
   
        
        
        
      ],
    },
    {
      category: "Agents Formations",
      agents: [
        {
          title: "Formation en Soft Skills",
          description: "Un agent IA interactif conçu pour améliorer les compétences interpersonnelles comme la communication, le leadership et la gestion des conflits, adapté aux professionnels et étudiants.",
          image: AgentSoftSkills,
          category: "Agents Formation",
          progress: 10,
          features: [
            "Simulations de situations professionnelles",
            "Techniques pour améliorer la communication",
            "Conseils personnalisés sur la gestion des conflits",
            "Quiz pour évaluer et développer vos compétences",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton coach en soft skills. Que veux-tu améliorer aujourd’hui : communication, leadership ou gestion des conflits ?" },
            { speaker: "User", message: "Je voudrais améliorer ma communication." },
            { speaker: "IA", message: "Excellente idée ! La communication est essentielle. Peux-tu me dire si tu veux travailler sur des situations spécifiques, comme des présentations, des réunions ou des conversations informelles ?" },
            { speaker: "User", message: "Les présentations." },
            { speaker: "IA", message: "Super ! Parlons de structure : une bonne présentation commence par une introduction captivante, suivie d’un message clair, et se termine par un appel à l’action. Veux-tu que je t’aide à préparer une présentation spécifique ?" },
            { speaker: "User", message: "Oui, j’ai une présentation la semaine prochaine." },
            { speaker: "IA", message: "Parfait ! Pour commencer, quel est le sujet de ta présentation ?" },
            { speaker: "User", message: "L’impact du télétravail sur la productivité." },
            { speaker: "IA", message: "Très intéressant ! Pour captiver ton audience, commence par une statistique ou une question intrigante. Par exemple : 'Savez-vous que 85 % des travailleurs trouvent qu’ils sont plus productifs en télétravail ?'. Que penses-tu de cette idée ?" },
            { speaker: "User", message: "C’est une bonne idée." },
            { speaker: "IA", message: "Génial ! Je peux aussi t’aider à structurer le reste de ta présentation, à créer des diapositives impactantes ou à pratiquer ton discours. Que veux-tu faire ensuite ?" },
            { speaker: "User", message: "Créer les diapositives." },
            { speaker: "IA", message: "Pour les diapositives, assure-toi qu’elles soient visuellement simples avec peu de texte et des images pertinentes. Je peux te proposer un modèle de structure. Tu veux essayer ?" },
            { speaker: "User", message: "Oui, je veux bien." },
            { speaker: "IA", message: "Super ! Continuons ensemble. Je suis là pour t’aider à impressionner ton audience et développer ta confiance en communication !" },
          ],
        },
        {
          title: "Formation Excel Avancée",
          description: "Un agent IA interactif pour maîtriser les fonctionnalités avancées d'Excel, adapté aux professionnels et étudiants souhaitant améliorer leur efficacité et productivité.",
          image: AgentExcel,
          category: "Agents Formation",
          progress: 0, 
          features: [
            "Création et personnalisation de tableaux croisés dynamiques",
            "Utilisation des fonctions avancées",
            "Introduction à l'automatisation avec les macros",
            "Analyse de données avec des outils graphiques avancés",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton assistant spécialisé en Excel avancé. Que veux-tu apprendre aujourd’hui : tableaux croisés dynamiques, fonctions complexes ou macros ?" },
            { speaker: "User", message: "Les tableaux croisés dynamiques." },
            { speaker: "IA", message: "Excellente idée ! Les tableaux croisés dynamiques sont parfaits pour analyser rapidement des données. Commençons par insérer un tableau croisé dynamique. As-tu déjà un tableau de données dans Excel ?" },
            { speaker: "User", message: "Oui, j’ai un tableau de ventes." },
            { speaker: "IA", message: "Super ! Sélectionne ton tableau, puis clique sur 'Insérer > Tableau Croisé Dynamique'. Choisis d’ajouter le tableau dans une nouvelle feuille. Dis-moi si tu vois l’interface des champs du tableau croisé." },
            { speaker: "User", message: "Oui, je la vois." },
            { speaker: "IA", message: "Parfait ! Fais glisser la colonne 'Produit' dans les lignes et 'Ventes' dans les valeurs. Cela résumera les ventes par produit. Que vois-tu ?" },
            { speaker: "User", message: "Je vois une liste avec les totaux par produit." },
            { speaker: "IA", message: "Génial ! Tu peux aussi ajouter un filtre, par exemple, par région. Veux-tu essayer ?" },
            { speaker: "User", message: "Oui, je vais essayer." },
            { speaker: "IA", message: "Super travail ! Une fois que tu es à l’aise, nous pourrons explorer comment créer des graphiques croisés dynamiques pour visualiser ces données. Es-tu prêt ?" },
            { speaker: "User", message: "Oui, ça m’intéresse." },
            { speaker: "IA", message: "C’est parti ! Clique sur 'Analyse > Graphique Croisé Dynamique'. Choisis un type de graphique qui te convient, comme un histogramme ou un camembert. Je suis là si tu rencontres des difficultés." },
            { speaker: "IA", message: "Bravo, tu progresses rapidement ! Ensemble, nous allons explorer d'autres fonctionnalités avancées comme les macros pour automatiser tes tâches. Prêt pour la prochaine étape ?" },
          ],
        },
        {
          title: "Formation en Gestion de Projets",
          description: "Un agent IA interactif conçu pour enseigner les meilleures pratiques en gestion de projets, y compris la planification, l'exécution et le suivi des tâches.",
          image: AgentGestionProjet, // Remplacez par une image pertinente pour cet agent
          category: "Agents Formation",
          progress: 0, // Exemple de progression initiale
          features: [
            "Planification de projets avec des diagrammes de Gantt",
            "Suivi des tâches et gestion des priorités",
            "Introduction aux méthodologies Agile et Scrum",
            "Analyse des risques et gestion des ressources",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton coach en gestion de projets. Que veux-tu apprendre aujourd’hui : planification, méthodologies ou suivi ?" },
            { speaker: "User", message: "Je veux apprendre à planifier un projet." },
            { speaker: "IA", message: "Parfait ! Commençons par définir ton objectif principal. Quel est le projet que tu souhaites planifier ?" },
            { speaker: "User", message: "Organiser un événement de lancement." },
            { speaker: "IA", message: "Excellent ! Une bonne planification commence par identifier les grandes étapes. Par exemple : préparer le budget, choisir le lieu, inviter les participants. Veux-tu que je t’aide à créer un planning détaillé ?" },
            { speaker: "User", message: "Oui, ça serait super." },
            { speaker: "IA", message: "D’accord. Pour chaque étape, nous allons définir une échéance et les ressources nécessaires. Par exemple, pour 'choisir le lieu', combien de temps penses-tu que cela prendra ?" },
            { speaker: "User", message: "Peut-être une semaine." },
            { speaker: "IA", message: "Super ! Ajoutons cela à ton planning. Maintenant, passons à l'étape suivante : 'préparer le budget'. Quel est ton budget estimé ?" },
            { speaker: "User", message: "Environ 5000€." },
            { speaker: "IA", message: "Parfait. Je vais t’aider à répartir ce budget entre les différentes catégories comme le lieu, la restauration, et la communication. Veux-tu un exemple ?" },
            { speaker: "User", message: "Oui, je veux bien." },
            { speaker: "IA", message: "Pour un budget de 5000€, tu pourrais allouer 50 % au lieu, 30 % à la restauration, et 20 % à la communication. Cela te semble-t-il raisonnable ?" },
            { speaker: "User", message: "Oui, c’est une bonne répartition." },
            { speaker: "IA", message: "Génial ! Une fois le planning établi, nous pourrons ajouter des outils de suivi comme un diagramme de Gantt pour visualiser les étapes. Es-tu prêt à continuer ?" },
            { speaker: "User", message: "Oui, allons-y." },
            { speaker: "IA", message: "Excellent ! Ensemble, nous allons faire de ton projet un succès. Je suis là pour t’accompagner à chaque étape." },
          ],
        },
        {
          title: "Formation à la Prospection Commerciale",
          description: "Un agent IA interactif conçu pour enseigner les meilleures pratiques de prospection commerciale, qu'il s'agisse d'appels à froid, d'e-mails de vente ou de gestion des prospects.",
          image: AgentProspection, 
          category: "Agents Formation",
          progress: 0, 
          features: [
            "Rédaction d'e-mails de prospection efficaces",
            "Techniques pour réussir vos appels à froid",
            "Stratégies de qualification des prospects",
            "Outils pour organiser et suivre vos leads",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton coach en prospection commerciale. Que veux-tu améliorer aujourd’hui : les appels à froid, les e-mails, ou la gestion de prospects ?" },
            { speaker: "User", message: "Je voudrais améliorer mes appels à froid." },
            { speaker: "IA", message: "Excellente idée ! Pour réussir un appel à froid, il est essentiel de préparer un script. As-tu déjà une idée de ce que tu veux dire ?" },
            { speaker: "User", message: "Pas vraiment, je ne sais pas par où commencer." },
            { speaker: "IA", message: "Pas de souci ! Un bon script commence par une introduction courte et engageante. Par exemple : 'Bonjour, je m'appelle [Nom] de [Entreprise]. Ai-je bien atteint [Nom du Prospect] ?'. Souhaites-tu que je t'aide à rédiger un script personnalisé ?" },
            { speaker: "User", message: "Oui, je veux bien." },
            { speaker: "IA", message: "Super ! Quel est le produit ou service que tu proposes ? Nous allons créer une accroche percutante." },
            { speaker: "User", message: "Je vends des logiciels de gestion de projet." },
            { speaker: "IA", message: "Parfait ! Tu pourrais dire : 'Nos logiciels de gestion de projet aident les équipes à gagner du temps et à travailler plus efficacement. Cela pourrait-il vous intéresser ?'. Que penses-tu de cette accroche ?" },
            { speaker: "User", message: "Ça me semble bien, merci." },
            { speaker: "IA", message: "Génial ! N'oublie pas de poser des questions ouvertes pour engager la conversation. Par exemple : 'Quels sont vos principaux défis en gestion de projet actuellement ?'. Souhaites-tu que je te donne d'autres conseils pour répondre aux objections ?" },
            { speaker: "User", message: "Oui, j'aimerais bien." },
            { speaker: "IA", message: "Pour répondre aux objections, reste calme et montre de l'empathie. Par exemple, si on te dit : 'C’est trop cher', tu peux répondre : 'Je comprends tout à fait. Puis-je vous montrer comment cela pourrait vous faire économiser à long terme ?'. Prêt à essayer une simulation d'appel ?" },
            { speaker: "User", message: "Oui, allons-y." },
            { speaker: "IA", message: "Super ! Commençons. Je vais jouer le rôle du client et te poser des questions. Ensemble, nous allons perfectionner tes appels à froid." },
          ],
        }
        
        
        
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
          },
          {
            title: "Simulateur de Gestion de Crise",
            description: "Un agent IA interactif conçu pour entraîner les utilisateurs à gérer des crises organisationnelles ou professionnelles de manière efficace et stratégique.",
            image: AgentGestionCrise, 
            progress: 0, 
            features: [
              "Scénarios interactifs réalistes de gestion de crise",
              "Analyse des décisions et feedback immédiat",
              "Entraînement à la communication de crise",
              "Outils pour identifier les risques et établir des plans d’action",
            ],
            conversation: [
              { speaker: "IA", message: "Bonjour ! Je suis ton simulateur de gestion de crise. Prêt à tester tes compétences face à des situations critiques ?" },
              { speaker: "User", message: "Oui, je veux m'entraîner." },
              { speaker: "IA", message: "Super ! Commençons avec un scénario. Imagine que ton entreprise fait face à une fuite de données massive. Quels seraient tes premiers réflexes ?" },
              { speaker: "User", message: "Je communiquerais avec l’équipe pour évaluer l’impact." },
              { speaker: "IA", message: "Bonne idée ! Une communication interne rapide est essentielle. Qui dans l’équipe devrais-tu informer en priorité ?" },
              { speaker: "User", message: "Le service IT et le responsable de la sécurité." },
              { speaker: "IA", message: "Excellent choix. Une fois cela fait, il est important de notifier les clients impactés de manière transparente. Que dirais-tu dans ton communiqué ?" },
              { speaker: "User", message: "Je dirais que nous travaillons à résoudre le problème et à protéger leurs données." },
              { speaker: "IA", message: "Parfait ! Assure-toi également d’inclure des détails sur les mesures préventives prises. Es-tu prêt à aborder les questions des journalistes lors d’une conférence de presse ?" },
              { speaker: "User", message: "Oui, allons-y." },
              { speaker: "IA", message: "Simulons une question difficile : 'Comment cette fuite affectera-t-elle la confiance des clients envers votre entreprise ?'. Que répondrais-tu ?" },
              { speaker: "User", message: "Nous nous excusons pour l’incident et travaillons à regagner leur confiance." },
              { speaker: "IA", message: "Très bien ! Une réponse sincère est toujours appréciée. Avec un entraînement régulier, tu pourras gérer toute crise avec confiance." },
            ],
          }          
      ],
    },
    {
      category: "Agents Action & Interaction",
      agents: [
        {
          title: "Agent de Planification d'Événements",
          description: "Un agent IA conçu pour organiser des événements, gérer les invitations, et coordonner les tâches, parfait pour les entreprises ou les particuliers.",
          image: AgentImageAssistance,
          progress: 65,
          features: [
            "Création de planning détaillé",
            "Suivi des tâches",
            "Gestion des invitations",
            "Rappels automatiques",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton assistant pour planifier ton événement. De quel type d'événement s'agit-il ?" },
            { speaker: "User", message: "Une conférence d'entreprise." },
            { speaker: "IA", message: "Super ! Combien de participants attends-tu ?" },
            { speaker: "User", message: "Environ 50 personnes." },
            { speaker: "IA", message: "Très bien. Je vais créer un planning détaillé, envoyer des invitations et t'aider à suivre les confirmations. As-tu une date en tête ?" },
            { speaker: "User", message: "Oui, le 15 janvier." },
            { speaker: "IA", message: "Parfait. J’ai programmé des rappels pour les intervenants et un suivi pour les inscriptions. Besoin d’aide pour organiser les sessions ?" },
            { speaker: "User", message: "Oui, ce serait utile." },
            { speaker: "IA", message: "D'accord, je vais te proposer une structure avec des pauses intégrées et une liste d'équipements nécessaires pour chaque session." },
          ],
        },
        {
          title: "Agent d’Exercices Physiques",
          description: "Un coach IA interactif pour créer des routines d'entraînement personnalisées, suivre les progrès, et motiver les utilisateurs.",
          image: AgentGMuscle,
          progress: 50,
          features: [
            "Plans d'entraînement personnalisés",
            "Rappels pour les séances",
            "Suivi des performances",
            "Motivation et conseils",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton coach personnel. Quel est ton objectif ? Perte de poids, gain de muscle, ou rester en forme ?" },
            { speaker: "User", message: "Je veux perdre du poids." },
            { speaker: "IA", message: "Parfait. Combien de séances par semaine peux-tu consacrer à ton entraînement ?" },
            { speaker: "User", message: "3 séances par semaine." },
            { speaker: "IA", message: "Très bien. Je vais te préparer un programme basé sur tes préférences. Préfères-tu des exercices cardio, des entraînements en salle, ou un mélange des deux ?" },
            { speaker: "User", message: "Un mélange des deux." },
            { speaker: "IA", message: "Super choix ! Ta première séance sera prête. N’oublie pas : une alimentation équilibrée est essentielle pour atteindre tes objectifs." },
            { speaker: "User", message: "Merci, j’ai hâte de commencer." },
          ],
        },
        {
          title: "Agent Assistant en Cuisine",
          description: "Un agent IA interactif pour aider à préparer des repas, trouver des recettes, et gérer la liste des courses.",
          image: AgentCuisine,
          progress: 80,
          features: [
            "Suggestions de recettes",
            "Adaptation aux préférences alimentaires",
            "Création de listes de courses",
            "Guidage étape par étape en cuisine",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton assistant culinaire. Que veux-tu préparer aujourd'hui ?" },
            { speaker: "User", message: "Un dîner rapide et sain." },
            { speaker: "IA", message: "D’accord. Combien de personnes dois-tu servir ?" },
            { speaker: "User", message: "Deux personnes." },
            { speaker: "IA", message: "Super ! Voici une suggestion : saumon grillé avec légumes vapeur. Veux-tu une autre option ?" },
            { speaker: "User", message: "Non, c’est parfait." },
            { speaker: "IA", message: "Je vais te guider étape par étape. Tout d'abord, rassemble ces ingrédients : saumon, courgettes, carottes, et huile d’olive. Prêt à commencer ?" },
            { speaker: "User", message: "Oui, allons-y." },
          ],
        },
        {
          title: "Agent de Simulation Financière",
          description: "Un agent IA pour simuler des scénarios financiers, gérer un budget, et planifier des objectifs à long terme.",
          image: AgentFinance,
          progress: 45,
          features: [
            "Gestion budgétaire",
            "Suivi des dépenses",
            "Simulations d'investissement",
            "Recommandations personnalisées",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ton assistant financier. Souhaites-tu gérer ton budget ou planifier un objectif financier ?" },
            { speaker: "User", message: "Je veux planifier un objectif." },
            { speaker: "IA", message: "D'accord. Quel est ton objectif ?" },
            { speaker: "User", message: "Économiser pour des vacances." },
            { speaker: "IA", message: "Super ! Combien souhaites-tu économiser et dans quel délai ?" },
            { speaker: "User", message: "2000 euros en six mois." },
            { speaker: "IA", message: "Parfait. Tu devras mettre de côté environ 333 euros par mois. Je vais analyser tes dépenses et te proposer des ajustements. Veux-tu commencer ?" },
            { speaker: "User", message: "Oui, merci." },
          ],
        },
      ],
    },
    {
      category: "Agents Recherche & Collecte d'Information",
      agents: [
        {
          title: "Agent de Recherche Documentaire",
          description: "Un agent IA conçu pour effectuer des recherches rapides et approfondies sur un sujet spécifique, parfait pour les étudiants, chercheurs et professionnels.",
          image: AgentCollecte,
          progress: 75,
          features: [
            "Recherche en temps réel",
            "Synthèse des informations",
            "Suggestions de sources fiables",
            "Exportation des résultats",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Quel sujet souhaitez-vous explorer aujourd'hui ?" },
            { speaker: "User", message: "Je veux en savoir plus sur le réchauffement climatique." },
            { speaker: "IA", message: "D'accord. Je vais collecter des informations sur les causes, les impacts et les solutions. Voulez-vous que je me concentre sur un aspect particulier ?" },
            { speaker: "User", message: "Oui, les impacts économiques." },
            { speaker: "IA", message: "Très bien. Voici un résumé : le réchauffement climatique peut entraîner des pertes agricoles, des dommages aux infrastructures, et une augmentation des coûts de santé. Voulez-vous plus de détails ou des exemples concrets ?" },
            { speaker: "User", message: "Oui, des exemples concrets seraient utiles." },
            { speaker: "IA", message: "Par exemple, en 2020, les pertes dues aux catastrophes climatiques ont été estimées à 210 milliards de dollars dans le monde. Souhaitez-vous un rapport complet sur ce sujet ?" },
            { speaker: "User", message: "Oui, merci." },
          ],
        },
        {
          title: "Agent Veille Concurrentielle",
          description: "Un agent IA interactif pour surveiller les tendances du marché, analyser les concurrents et fournir des rapports clairs et détaillés.",
          image: AgentVeille,
          progress: 60,
          features: [
            "Analyse de la concurrence",
            "Surveillance des tendances",
            "Rapports personnalisés",
            "Alertes en temps réel",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis votre assistant de veille concurrentielle. Quel secteur ou entreprise souhaitez-vous analyser ?" },
            { speaker: "User", message: "Je veux surveiller le secteur des énergies renouvelables." },
            { speaker: "IA", message: "Parfait. Je vais collecter des informations sur les leaders du marché, les innovations récentes et les tendances de croissance. Préférez-vous un rapport quotidien ou hebdomadaire ?" },
            { speaker: "User", message: "Un rapport hebdomadaire serait parfait." },
            { speaker: "IA", message: "Très bien. J'ai identifié plusieurs entreprises clés comme Tesla et Vestas. Voulez-vous un focus particulier ?" },
            { speaker: "User", message: "Oui, sur Tesla." },
            { speaker: "IA", message: "D'accord. Je vais suivre leurs projets dans les énergies renouvelables et vous fournir des mises à jour. Voulez-vous des alertes pour chaque nouveauté ?" },
            { speaker: "User", message: "Oui, merci." },
          ],
        },
        {
          title: "Agent de Collecte de Données",
          description: "Un agent IA interactif pour extraire, organiser et analyser des données provenant de diverses sources en ligne.",
          image: AgentDonnee,
          progress: 50,
          features: [
            "Extraction automatisée des données",
            "Organisation des informations",
            "Analyse et visualisation",
            "Exportation des fichiers",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Je suis ici pour vous aider à collecter des données. Quelle information recherchez-vous ?" },
            { speaker: "User", message: "Je veux des données sur la consommation énergétique en Europe." },
            { speaker: "IA", message: "D'accord. Je vais analyser les bases de données publiques et les rapports officiels. Souhaitez-vous des données pour une année spécifique ?" },
            { speaker: "User", message: "Oui, pour 2022." },
            { speaker: "IA", message: "Très bien. Voici un aperçu des données disponibles : consommation totale, répartition par pays, et sources d'énergie. Voulez-vous un graphique ou un tableau ?" },
            { speaker: "User", message: "Un graphique serait bien." },
            { speaker: "IA", message: "Voici un graphique montrant la consommation par pays. Souhaitez-vous l'exporter ?" },
            { speaker: "User", message: "Oui, en format PDF." },
          ],
        },
        {
          title: "Agent Analyse des Médias",
          description: "Un agent IA pour surveiller les actualités, les réseaux sociaux et les médias afin de fournir des résumés et des analyses approfondies.",
          image: AgentMedia,
          progress: 70,
          features: [
            "Surveillance des actualités",
            "Analyse des tendances sur les réseaux sociaux",
            "Résumés personnalisés",
            "Alertes sur les sujets sensibles",
          ],
          conversation: [
            { speaker: "IA", message: "Bonjour ! Quel sujet ou mot-clé voulez-vous que je surveille ?" },
            { speaker: "User", message: "Je veux suivre les actualités sur l'intelligence artificielle." },
            { speaker: "IA", message: "D'accord. Je vais surveiller les dernières actualités, les discussions sur les réseaux sociaux, et les publications scientifiques. Voulez-vous un résumé quotidien ?" },
            { speaker: "User", message: "Oui, un résumé quotidien serait parfait." },
            { speaker: "IA", message: "Super. Je vais également vous envoyer des alertes pour les sujets critiques, comme les nouvelles régulations ou innovations. Souhaitez-vous des rapports visuels ?" },
            { speaker: "User", message: "Oui, avec des graphiques." },
            { speaker: "IA", message: "Entendu. Vous recevrez des rapports détaillés avec graphiques interactifs chaque jour." },
          ],
        },
      ],
    }
    
    
    // Ajout d'autres catégories d'agent si nécessaire
  ];
  