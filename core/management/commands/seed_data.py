from django.core.management.base import BaseCommand
from django.utils import timezone
from core.models import Skill, Project, Certification, BlogPost
from datetime import datetime, timedelta

class Command(BaseCommand):
    help = 'Seeds the database with initial data for testing'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.SUCCESS('Starting database seeding process...'))
        
        # Clear existing data
        self.stdout.write('Clearing existing data...')
        Skill.objects.all().delete()
        Project.objects.all().delete()
        Certification.objects.all().delete()
        BlogPost.objects.all().delete()
        
        # Create skills
        self.stdout.write('Creating skills...')
        self._create_skills()
        
        # Create projects
        self.stdout.write('Creating projects...')
        self._create_projects()
        
        # Create certifications
        self.stdout.write('Creating certifications...')
        self._create_certifications()
        
        # Create blog posts
        self.stdout.write('Creating blog posts...')
        self._create_blog_posts()
        
        self.stdout.write(self.style.SUCCESS('Database seeding completed successfully!'))
    
    def _create_skills(self):
        skills_data = [
            # Cloud Platforms
            {'name': 'AWS', 'icon': 'aws', 'icon_color': '#FF9900', 'category': 'cloud', 'order': 1},
            {'name': 'Azure', 'icon': 'microsoft', 'icon_color': '#0078D4', 'category': 'cloud', 'order': 2},
            {'name': 'Google Cloud', 'icon': 'google', 'icon_color': '#4285F4', 'category': 'cloud', 'order': 3},
            
            # DevOps
            {'name': 'Docker', 'icon': 'docker', 'icon_color': '#2496ED', 'category': 'devops', 'order': 1},
            {'name': 'Kubernetes', 'icon': 'kubernetes', 'icon_color': '#326CE5', 'category': 'devops', 'order': 2},
            {'name': 'Terraform', 'icon': 'terraform', 'icon_color': '#7B42BC', 'category': 'devops', 'order': 3},
            {'name': 'Jenkins', 'icon': 'jenkins', 'icon_color': '#D33833', 'category': 'devops', 'order': 4},
            {'name': 'Git', 'icon': 'git', 'icon_color': '#F05032', 'category': 'devops', 'order': 5},
            
            # Programming & Scripting
            {'name': 'Python', 'icon': 'python', 'icon_color': '#3776AB', 'category': 'programming', 'order': 1},
            {'name': 'JavaScript', 'icon': 'js', 'icon_color': '#F7DF1E', 'category': 'programming', 'order': 2},
            {'name': 'Bash', 'icon': 'bash', 'icon_color': '#4EAA25', 'category': 'programming', 'order': 3},
            {'name': 'PowerShell', 'icon': 'microsoft', 'icon_color': '#5391FE', 'category': 'programming', 'order': 4},
            
            # IT Support & Networking
            {'name': 'Windows Server', 'icon': 'windows', 'icon_color': '#0078D6', 'category': 'it', 'order': 1},
            {'name': 'Linux', 'icon': 'linux', 'icon_color': '#FCC624', 'category': 'it', 'order': 2},
            {'name': 'Active Directory', 'icon': 'windows', 'icon_color': '#0078D6', 'category': 'it', 'order': 3},
            {'name': 'TCP/IP', 'icon': 'network-wired', 'icon_color': '#4682B4', 'category': 'it', 'order': 4},
        ]
        
        for skill_data in skills_data:
            Skill.objects.create(**skill_data)
            self.stdout.write(f'  - Created skill: {skill_data["name"]}')
    
    def _create_projects(self):
        projects_data = [
            {
                'title': 'AWS Serverless API',
                'description': 'Built a serverless REST API using AWS Lambda, API Gateway, and DynamoDB. The API handles CRUD operations for a task management system and includes authentication with Cognito.',
                'github_url': 'https://github.com/username/aws-serverless-api',
                'demo_url': 'https://demo-url.example.com/aws-api',
                'featured': True,
                'date_created': datetime.now() - timedelta(days=30),
                'order': 1,
                'categories': 'aws,serverless,api',
                'tags': 'Lambda:orange,API Gateway:orange,DynamoDB:orange,Cognito:orange'
            },
            {
                'title': 'Cloud Monitoring Dashboard',
                'description': 'Developed a centralized monitoring solution using Grafana, Prometheus, and AWS CloudWatch. Features include custom alerting rules, visualization of system metrics, and automated incident response.',
                'github_url': 'https://github.com/username/cloud-monitoring',
                'demo_url': 'https://demo-url.example.com/monitoring',
                'featured': True,
                'date_created': datetime.now() - timedelta(days=60),
                'order': 2,
                'categories': 'monitoring,aws,devops',
                'tags': 'CloudWatch:orange,Grafana:blue,Prometheus:red,Alerting:green'
            },
            {
                'title': 'Infrastructure as Code',
                'description': 'Created a comprehensive IaC solution using Terraform to provision and manage multi-region AWS infrastructure including VPCs, subnets, security groups, and EC2 instances with modular, reusable components.',
                'github_url': 'https://github.com/username/terraform-infra',
                'demo_url': 'https://demo-url.example.com/iac',
                'featured': False,
                'date_created': datetime.now() - timedelta(days=90),
                'order': 3,
                'categories': 'terraform,aws,infrastructure',
                'tags': 'Terraform:purple,AWS:orange,IaC:blue,DevOps:gray'
            },
            {
                'title': 'Automated Backup Solution',
                'description': 'Developed a Python-based backup automation system for critical business data. Features include incremental backups, encryption, retention policies, and integration with cloud storage providers.',
                'github_url': 'https://github.com/username/backup-automation',
                'demo_url': 'https://demo-url.example.com/backups',
                'featured': False,
                'date_created': datetime.now() - timedelta(days=120),
                'order': 4,
                'categories': 'python,aws,automation',
                'tags': 'Python:primary,AWS S3:orange,Automation:success,Backup:info'
            },
        ]
        
        for project_data in projects_data:
            Project.objects.create(**project_data)
            self.stdout.write(f'  - Created project: {project_data["title"]}')
    
    def _create_certifications(self):
        certifications_data = [
            {
                'title': 'AWS Certified Solutions Architect',
                'level': 'Associate',
                'description': 'Validates the ability to design and implement distributed systems on AWS.',
                'issue_date': 'June 2023',
                'icon': 's fa-aws',
                'icon_color': '#FF9900',
                'verify_url': 'https://www.credly.com/badges/example',
                'order': 1
            },
            {
                'title': 'Microsoft Certified: Azure Administrator',
                'level': 'Associate',
                'description': 'Validates the skills and knowledge to manage Azure subscriptions and resources.',
                'issue_date': 'March 2023',
                'icon': 's fa-microsoft',
                'icon_color': '#0078D4',
                'verify_url': 'https://www.credly.com/badges/example',
                'order': 2
            },
            {
                'title': 'CompTIA Security+',
                'level': 'Professional',
                'description': 'Validates the baseline skills necessary to perform core security functions.',
                'issue_date': 'November 2022',
                'icon': 's fa-shield-alt',
                'icon_color': '#50B8DC',
                'verify_url': 'https://www.credly.com/badges/example',
                'order': 3
            },
        ]
        
        for cert_data in certifications_data:
            Certification.objects.create(**cert_data)
            self.stdout.write(f'  - Created certification: {cert_data["title"]}')
    
    def _create_blog_posts(self):
        blog_posts_data = [
            {
                'title': 'Getting Started with AWS Lambda',
                'excerpt': 'Learn the basics of serverless computing with AWS Lambda and how to create your first function.',
                'date': datetime.now() - timedelta(days=15),
                'category': 'AWS',
                'url': 'https://blog.example.com/aws-lambda',
            },
            {
                'title': 'Terraform Best Practices',
                'excerpt': 'Explore proven patterns and best practices for organizing your Terraform codebase in large-scale projects.',
                'date': datetime.now() - timedelta(days=30),
                'category': 'DevOps',
                'url': 'https://blog.example.com/terraform-best-practices',
            },
            {
                'title': 'Kubernetes for Beginners',
                'excerpt': 'A comprehensive introduction to container orchestration with Kubernetes and its core concepts.',
                'date': datetime.now() - timedelta(days=45),
                'category': 'Containers',
                'url': 'https://blog.example.com/kubernetes-beginners',
            },
        ]
        
        for post_data in blog_posts_data:
            # Create with placeholder image URL since we can't create actual images in a command
            BlogPost.objects.create(**post_data)
            self.stdout.write(f'  - Created blog post: {post_data["title"]}')