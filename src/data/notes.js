export const notes = [
  {
    id: 'cors-error',
    title: {
      fr: 'Résoudre une erreur CORS',
      en: 'Fix a CORS error',
      pt: 'Corrigir um erro CORS',
    },
    problem: {
      fr: 'Le navigateur bloque une requête entre deux origines distinctes et empêche le bon fonctionnement de l’application.',
      en: 'The browser blocks a request between two different origins and prevents the application from working properly.',
      pt: 'O navegador bloqueia uma requisição entre duas origens diferentes e impede o funcionamento correto da aplicação.',
    },
    solution: {
      fr: 'Vérifier les en-têtes du serveur, autoriser les bonnes origines et contrôler les méthodes et méthodes HTTP acceptées.',
      en: 'Check server headers, authorize the correct origins and control the accepted HTTP methods and headers.',
      pt: 'Verificar os cabeçalhos do servidor, autorizar as origens corretas e controlar os métodos e cabeçalhos HTTP aceitos.',
    },
    technologies: ['Frontend', 'API', 'HTTP'],
    code: {
      fr: 'Access-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: Content-Type, Authorization',
      en: 'Access-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: Content-Type, Authorization',
      pt: 'Access-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: Content-Type, Authorization',
    },
    tags: ['frontend', 'api', 'debugging'],
  },
  {
    id: 'vercel-deploy',
    title: {
      fr: 'Déployer React sur Vercel',
      en: 'Deploy React on Vercel',
      pt: 'Implantar React no Vercel',
    },
    problem: {
      fr: 'Le projet React ne s’affiche pas correctement après le déploiement et certaines routes ne sont pas servies.',
      en: 'The React project does not display correctly after deployment and some routes are not served properly.',
      pt: 'O projeto React não aparece corretamente após o deploy e algumas rotas não são servidas corretamente.',
    },
    solution: {
      fr: 'Configurer le projet avec les bonnes build settings, les variables d’environnement et la redirection des routes.',
      en: 'Configure the project with the proper build settings, environment variables and route redirects.',
      pt: 'Configurar o projeto com as configurações corretas de build, variáveis de ambiente e redirecionamento de rotas.',
    },
    technologies: ['React', 'Vercel', 'Build'],
    code: {
      fr: 'npm run build\nnpm install -g vercel\nvercel --prod',
      en: 'npm run build\nnpm install -g vercel\nvercel --prod',
      pt: 'npm run build\nnpm install -g vercel\nvercel --prod',
    },
    tags: ['deployment', 'react', 'vercel'],
  },
  {
    id: 'linux-useful-commands',
    title: {
      fr: 'Commandes Linux utiles',
      en: 'Useful Linux commands',
      pt: 'Comandos úteis do Linux',
    },
    problem: {
      fr: 'Il manque une base de commandes pour surveiller, explorer et administrer un système Linux rapidement.',
      en: 'There is no quick command base to monitor, inspect and administer a Linux system efficiently.',
      pt: 'Falta uma base de comandos para monitorar, explorar e administrar um sistema Linux com rapidez.',
    },
    solution: {
      fr: 'Créer une petite checklist de commandes essentielles pour la gestion des processus, fichiers et logs.',
      en: 'Create a shortlist of essential commands for managing processes, files and logs.',
      pt: 'Criar uma lista curta de comandos essenciais para gerenciar processos, arquivos e logs.',
    },
    technologies: ['Linux', 'Shell', 'System'],
    code: {
      fr: 'ls -la\nps aux\nnetstat -tulpn\ntail -f /var/log/syslog\nchmod +x script.sh',
      en: 'ls -la\nps aux\nnetstat -tulpn\ntail -f /var/log/syslog\nchmod +x script.sh',
      pt: 'ls -la\nps aux\nnetstat -tulpn\ntail -f /var/log/syslog\nchmod +x script.sh',
    },
    tags: ['linux', 'system', 'shell'],
  },
  {
    id: 'active-directory',
    title: {
      fr: 'Configuration Active Directory',
      en: 'Active Directory configuration',
      pt: 'Configuração do Active Directory',
    },
    problem: {
      fr: 'La gestion centralisée des identités et des droits devient plus complexe avec plusieurs postes et services.',
      en: 'Centralized identity and permission management becomes more complex as the number of machines and services grows.',
      pt: 'A gestão centralizada de identidades e permissões fica mais complexa com o aumento de máquinas e serviços.',
    },
    solution: {
      fr: 'Structurer les unités d’organisation, définir les groupes, puis piloter les droits par rôle et par besoin fonctionnel.',
      en: 'Structure organizational units, define groups and then manage permissions by role and functional need.',
      pt: 'Estruturar unidades organizacionais, definir grupos e então controlar permissões por função e necessidade funcional.',
    },
    technologies: ['Active Directory', 'Windows', 'Security'],
    code: {
      fr: 'New-ADUser -Name "John Doe" -SamAccountName jdoe -UserPrincipalName jdoe@company.local\nAdd-ADGroupMember -Identity "IT" -Members jdoe',
      en: 'New-ADUser -Name "John Doe" -SamAccountName jdoe -UserPrincipalName jdoe@company.local\nAdd-ADGroupMember -Identity "IT" -Members jdoe',
      pt: 'New-ADUser -Name "John Doe" -SamAccountName jdoe -UserPrincipalName jdoe@company.local\nAdd-ADGroupMember -Identity "IT" -Members jdoe',
    },
    tags: ['windows', 'active-directory', 'security'],
  },
  {
    id: 'git-branching',
    title: {
      fr: 'Bonnes pratiques Git / GitHub',
      en: 'Git / GitHub good practices',
      pt: 'Boas práticas de Git / GitHub',
    },
    problem: {
      fr: 'Les projets évoluent rapidement et il devient difficile de gérer les branches, les validations et les revues de code.',
      en: 'Projects develop quickly and it becomes difficult to manage branches, commits and code reviews.',
      pt: 'Os projetos evoluem rapidamente e fica difícil gerenciar branches, commits e revisões de código.',
    },
    solution: {
      fr: 'Utiliser des branches claires, des messages de commit explicites, des revues régulières et des conventions simples.',
      en: 'Use clear branches, explicit commit messages, regular reviews and simple conventions.',
      pt: 'Usar branches claras, mensagens de commit explícitas, revisões regulares e convenções simples.',
    },
    technologies: ['Git', 'GitHub', 'Collaboration'],
    code: {
      fr: 'git checkout -b feature/new-module\ngit add .\ngit commit -m "feat: add new module"\ngit push origin feature/new-module',
      en: 'git checkout -b feature/new-module\ngit add .\ngit commit -m "feat: add new module"\ngit push origin feature/new-module',
      pt: 'git checkout -b feature/new-module\ngit add .\ngit commit -m "feat: add new module"\ngit push origin feature/new-module',
    },
    tags: ['git', 'github', 'workflow'],
  },
]
