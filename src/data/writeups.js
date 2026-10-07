export const writeups = [
  {
    id: 'cybersecurity-baseline',
    slug: 'cybersecurity-baseline',
    title: {
      fr: 'Bases de sécurité pour un environnement de travail moderne',
      en: 'Security basics for a modern work environment',
      pt: 'Fundamentos de segurança para um ambiente de trabalho moderno',
    },
    description: {
      fr: 'Une analyse simple et pratique des bonnes pratiques à mettre en place pour sécuriser un environnement de travail et les accès système.',
      en: 'A practical analysis of the key practices to secure a work environment, user access and digital systems.',
      pt: 'Uma análise prática das melhores práticas para proteger um ambiente de trabalho, acessos e sistemas digitais.',
    },
    category: {
      fr: 'Cybersécurité',
      en: 'Cybersecurity',
      pt: 'Cibersegurança',
    },
    date: '2025-09-12',
    readingTime: '6 min',
    technologies: ['Kali Linux', 'Nmap', 'Linux', 'Hardening'],
    image: '/images/projects/GreenAI.png',
    tags: ['security', 'linux', 'hardening'],
    content: {
      fr: [
        'Dans un environnement technologique, la sécurité commence par des habitudes simples et répétables : gestion des accès, restriction des services, vigilance sur les outils de travail et audit des configurations.',
        'Les premiers correctifs ne sont pas toujours les plus visibles, mais ils ont un impact direct sur la posture globale de l’organisation.',
      ],
      en: [
        'In a technology environment, security starts with simple and repeatable habits: access management, service restriction, awareness of working tools and regular configuration review.',
        'The first fixes are not always the most visible, but they directly improve the overall security posture of the organization.',
      ],
      pt: [
        'Em um ambiente tecnológico, a segurança começa por hábitos simples e repetíveis: gestão de acessos, restrição de serviços, atenção às ferramentas de trabalho e revisão constante de configurações.',
        'As primeiras correções nem sempre são as mais visíveis, mas têm impacto direto na postura geral de segurança da organização.',
      ],
    },
  },
  {
    id: 'network-debugging',
    slug: 'network-debugging',
    title: {
      fr: 'Méthodologie de diagnostic réseau en environnement partagé',
      en: 'Network diagnostics workflow in a shared environment',
      pt: 'Metodologia de diagnóstico de rede em ambiente compartilhado',
    },
    description: {
      fr: 'Guide de diagnostic pour identifier les erreurs de connectivité, les conflits de services et les problèmes de routage dans des environnements partagés.',
      en: 'A practical diagnosis guide to identify connectivity issues, service conflicts and routing problems in shared environments.',
      pt: 'Um guia prático para identificar problemas de conectividade, conflitos de serviços e falhas de roteamento em ambientes compartilhados.',
    },
    category: {
      fr: 'Réseaux',
      en: 'Networks',
      pt: 'Redes',
    },
    date: '2025-08-04',
    readingTime: '8 min',
    technologies: ['VLAN', 'IP', 'Troubleshooting', 'Topology'],
    image: '/images/projects/SentinelOps.png',
    tags: ['network', 'diagnostic', 'vlan'],
    content: {
      fr: [
        'Le diagnostic réseau passe souvent par l’observation des couches physiques et logiques : adressage, masque, passerelles, services actifs et flux de données.',
        'Avant de modifier une configuration, il est utile de vérifier à la fois le périmètre, les règles de sécurité et la cohérence du schéma de routage.',
      ],
      en: [
        'Network diagnostics usually begin with observing both physical and logical layers: addressing, subneting, gateways, active services and traffic flow.',
        'Before changing a configuration, it is useful to verify scope, security rules and the consistency of the routing scheme.',
      ],
      pt: [
        'O diagnóstico de rede geralmente começa pela observação das camadas físicas e lógicas: endereçamento, máscara, gateways, serviços ativos e fluxo de tráfego.',
        'Antes de alterar uma configuração, é útil verificar o escopo, as regras de segurança e a consistência do esquema de roteamento.',
      ],
    },
  },
  {
    id: 'linux-automation',
    slug: 'linux-automation',
    title: {
      fr: 'Automatisation de tâches Linux pour gagner du temps',
      en: 'Linux task automation to save time',
      pt: 'Automação de tarefas no Linux para ganhar tempo',
    },
    description: {
      fr: 'Des bonnes pratiques orientées Linux pour structurer les scripts, automatiser les tâches et améliorer la fiabilité des workflows.',
      en: 'A practical Linux-oriented workflow to structure scripts, automate tasks and improve automation reliability.',
      pt: 'Um fluxo prático orientado para Linux para estruturar scripts, automatizar tarefas e melhorar a confiabilidade do trabalho.',
    },
    category: {
      fr: 'Linux',
      en: 'Linux',
      pt: 'Linux',
    },
    date: '2025-07-18',
    readingTime: '5 min',
    technologies: ['Shell', 'Bash', 'Monitoring', 'System'],
    image: '/images/projects/AI Secure Platform.png',
    tags: ['linux', 'automation', 'bash'],
    content: {
      fr: [
        'L’automatisation sur Linux est précieuse quand le but est d’éviter les tâches répétitives, de réduire les erreurs humaines et d’accélérer les opérations de maintenance.',
        'Une automatisation lisible, documentée et testée reste plus durable qu’un script complexe et opaque.',
      ],
      en: [
        'Automation on Linux is valuable when the goal is to avoid repetitive tasks, reduce human error and speed up maintenance operations.',
        'A readable, documented and tested automation process is more durable than a complex and opaque script.',
      ],
      pt: [
        'A automação no Linux é valiosa quando o objetivo é evitar tarefas repetitivas, reduzir erros humanos e acelerar operações de manutenção.',
        'Um processo de automação legível, documentado e testado é mais sustentável do que um script complexo e pouco transparente.',
      ],
    },
  },
]
