import { BlogPost, Certification, Project, SkillCategory, Tool } from '@shared/types';
import { IconType } from 'react-icons';
import {
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiPython,
  SiLinux,
  SiGithub,
  SiGithubactions,
  SiJavascript
} from 'react-icons/si';
import { 
  FaServer, 
  FaNetworkWired, 
  FaCode, 
  FaTools, 
  FaCloud, 
  FaTerminal, 
  FaDesktop, 
  FaWindows, 
  FaCodeBranch 
} from 'react-icons/fa';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AWS Serverless Data Processing Pipeline',
    description: 'Built a scalable data processing system using AWS Lambda, S3, and DynamoDB for analyzing large datasets with minimal operational overhead.',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    categories: ['aws', 'automation'],
    tags: [
      { name: 'AWS Lambda', color: 'blue' },
      { name: 'S3', color: 'blue' },
      { name: 'DynamoDB', color: 'blue' },
      { name: 'Python', color: 'blue' },
      { name: 'Serverless', color: 'blue' }
    ],
    githubUrl: '#',
    demoUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud-Native Incident Response System',
    description: 'Designed and implemented an automated incident response system for cloud infrastructure using Azure Functions and Logic Apps.',
    image: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    categories: ['azure', 'devops'],
    tags: [
      { name: 'Azure Functions', color: 'purple' },
      { name: 'Logic Apps', color: 'purple' },
      { name: 'Security', color: 'purple' },
      { name: 'PowerShell', color: 'purple' }
    ],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 3,
    title: 'Infrastructure as Code Pipeline',
    description: 'Created a fully automated infrastructure deployment pipeline using Terraform, GitHub Actions, and AWS CloudFormation.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    categories: ['aws', 'devops'],
    tags: [
      { name: 'Terraform', color: 'green' },
      { name: 'GitHub Actions', color: 'green' },
      { name: 'CloudFormation', color: 'green' },
      { name: 'IaC', color: 'green' }
    ],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 4,
    title: 'Multi-Cloud Cost Management Dashboard',
    description: 'Developed a centralized dashboard for monitoring and optimizing costs across AWS and Azure cloud environments.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    categories: ['aws', 'azure'],
    tags: [
      { name: 'Cost Management', color: 'blue' },
      { name: 'Power BI', color: 'blue' },
      { name: 'Multi-Cloud', color: 'purple' },
      { name: 'React', color: 'blue' }
    ],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 5,
    title: 'Containerized Microservices Architecture',
    description: 'Migrated a monolithic application to a microservices architecture using Docker, Kubernetes, and Azure AKS.',
    image: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    categories: ['azure', 'devops'],
    tags: [
      { name: 'Docker', color: 'purple' },
      { name: 'Kubernetes', color: 'purple' },
      { name: 'AKS', color: 'purple' },
      { name: 'Microservices', color: 'purple' }
    ],
    githubUrl: '#',
    demoUrl: '#'
  },
  {
    id: 6,
    title: 'Automated Security Compliance Toolkit',
    description: 'Built a suite of tools for automated security compliance scanning and reporting across cloud environments.',
    image: 'https://images.unsplash.com/photo-1606765962248-7ff407b51667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    categories: ['automation', 'devops'],
    tags: [
      { name: 'Security', color: 'blue' },
      { name: 'Compliance', color: 'green' },
      { name: 'Python', color: 'green' },
      { name: 'AWS Security Hub', color: 'blue' }
    ],
    githubUrl: '#',
    demoUrl: '#'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    level: 'Associate Level',
    description: 'Validates expertise in designing and deploying scalable systems on AWS, including cost optimization, security, and high availability.',
    issueDate: 'Jan 2022',
    icon: 'aws',
    iconColor: '#FF9900',
    verifyUrl: '#'
  },
  {
    id: 2,
    title: 'Microsoft Azure Administrator',
    level: 'Associate Level',
    description: 'Demonstrates proficiency in implementing, monitoring, and maintaining Microsoft Azure solutions, including virtual networks and storage.',
    issueDate: 'Mar 2022',
    icon: 'microsoft',
    iconColor: '#00A4EF',
    verifyUrl: '#'
  },
  {
    id: 3,
    title: 'HashiCorp Terraform Associate',
    level: 'Associate Level',
    description: 'Validates understanding of infrastructure as code concepts using Terraform for provisioning and managing cloud infrastructure.',
    issueDate: 'Jul 2022',
    icon: 'cogs',
    iconColor: '#7B42BC',
    verifyUrl: '#'
  },
  {
    id: 4,
    title: 'CompTIA Network+',
    level: 'Professional Level',
    description: 'Demonstrates expertise in networking concepts, infrastructure, troubleshooting, operations, and security.',
    issueDate: 'Aug 2020',
    icon: 'network-wired',
    iconColor: '#C8202D',
    verifyUrl: '#'
  },
  {
    id: 5,
    title: 'AWS Certified Developer',
    level: 'Associate Level',
    description: 'Validates proficiency in developing, deploying, and debugging cloud-based applications using AWS services.',
    issueDate: 'Sep 2022',
    icon: 'aws',
    iconColor: '#FF9900',
    verifyUrl: '#'
  },
  {
    id: 6,
    title: 'Linux Foundation Certified Sysadmin',
    level: 'Professional Level',
    description: 'Demonstrates the ability to design, install, configure, and manage a system installation, including networking and storage.',
    issueDate: 'Nov 2021',
    icon: 'linux',
    iconColor: '#FCC624',
    verifyUrl: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: '10 Ways to Optimize Your AWS Costs Without Sacrificing Performance',
    excerpt: 'Learn practical strategies to reduce your AWS bill while maintaining application performance and reliability. From right-sizing instances to leveraging Spot instances.',
    date: 'May 15, 2023',
    category: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    url: '#'
  },
  {
    id: 2,
    title: 'Terraform Best Practices for Production Environments',
    excerpt: 'Discover best practices for organizing, structuring, and maintaining Terraform code in production environments. Includes module strategies and state management.',
    date: 'Apr 3, 2023',
    category: 'Infrastructure as Code',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    url: '#'
  },
  {
    id: 3,
    title: 'My Journey from IT Support to Cloud Computing: Lessons Learned',
    excerpt: 'A personal account of my transition from traditional IT support to cloud computing, including challenges faced and strategies that helped me succeed.',
    date: 'Mar 12, 2023',
    category: 'Career Development',
    image: 'https://images.unsplash.com/photo-1633034616574-034dcc5fea8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    url: '#'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    icon: 'cloud',
    skills: [
      { name: 'Amazon Web Services', icon: 'aws', iconColor: '#FF9900' },
      { name: 'Microsoft Azure', icon: 'microsoft', iconColor: '#00A4EF' },
      { name: 'Google Cloud Platform', icon: 'google', iconColor: '#4285F4' },
      { name: 'Virtualization', icon: 'server' }
    ]
  },
  {
    title: 'Infrastructure & DevOps',
    icon: 'network-wired',
    skills: [
      { name: 'CI/CD Pipelines', icon: 'code-branch', iconColor: '#2496ED' },
      { name: 'Docker & Containers', icon: 'docker', iconColor: '#2496ED' },
      { name: 'Kubernetes', icon: 'dharmachakra', iconColor: '#326CE5' },
      { name: 'Infrastructure as Code', icon: 'cogs' }
    ]
  },
  {
    title: 'Programming & Scripting',
    icon: 'code',
    skills: [
      { name: 'Python', icon: 'python', iconColor: '#3776AB' },
      { name: 'Bash & Shell Scripting', icon: 'terminal' },
      { name: 'JavaScript', icon: 'js', iconColor: '#F7DF1E' },
      { name: 'Java', icon: 'java', iconColor: '#007396' }
    ]
  },
  {
    title: 'IT Support & Networking',
    icon: 'tools',
    skills: [
      { name: 'System Administration', icon: 'desktop' },
      { name: 'Network Troubleshooting', icon: 'network-wired' },
      { name: 'Windows Server', icon: 'windows', iconColor: '#0078D6' },
      { name: 'Linux Administration', icon: 'linux', iconColor: '#FCC624' }
    ]
  }
];

export const TOOLS: Tool[] = [
  { name: 'AWS', icon: 'aws', iconColor: '#FF9900' },
  { name: 'Azure', icon: 'microsoft', iconColor: '#00A4EF' },
  { name: 'Docker', icon: 'docker', iconColor: '#2496ED' },
  { name: 'Kubernetes', icon: 'kubernetes', iconColor: '#326CE5' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Jenkins', icon: 'jenkins', iconColor: '#D24939' },
  { name: 'Python', icon: 'python', iconColor: '#3776AB' },
  { name: 'Linux', icon: 'linux', iconColor: '#FCC624' },
  { name: 'Bash', icon: 'terminal' },
  { name: 'Git', icon: 'git' }
];

export const getIconComponent = (iconName: string): IconType => {
  switch (iconName) {
    case 'aws': return SiAmazon;
    case 'microsoft': return FaWindows; // Using Windows icon as fallback for Microsoft
    case 'google': return FaCode; // Using code icon as fallback for Google
    case 'server': return FaServer;
    case 'network-wired': return FaNetworkWired;
    case 'code': return FaCode;
    case 'tools': return FaTools;
    case 'cloud': return FaCloud;
    case 'terminal': return FaTerminal;
    case 'desktop': return FaDesktop;
    case 'windows': return FaWindows;
    case 'code-branch': return FaCodeBranch;
    case 'docker': return SiDocker;
    case 'kubernetes': return SiKubernetes;
    case 'dharmachakra': return SiKubernetes; // Using Kubernetes icon for dharmachakra
    case 'cogs': return FaTools;
    case 'python': return SiPython;
    case 'js': return SiJavascript;
    case 'java': return FaCode; // Using code icon as fallback for Java
    case 'linux': return SiLinux;
    case 'github': return SiGithub;
    case 'jenkins': return SiJenkins;
    case 'git': return FaCodeBranch;
    case 'terraform': return SiTerraform;
    case 'githubactions': return SiGithubactions;
    default: return FaCode;
  }
};
