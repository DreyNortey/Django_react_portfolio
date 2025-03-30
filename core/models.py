from django.db import models
from django.core.validators import MinLengthValidator

class Skill(models.Model):
    CATEGORY_CHOICES = [
        ('cloud', 'Cloud Platforms'),
        ('devops', 'Infrastructure & DevOps'),
        ('programming', 'Programming & Scripting'),
        ('it', 'IT Support & Networking'),
    ]
    
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50)
    icon_color = models.CharField(max_length=20, blank=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    order = models.PositiveSmallIntegerField(default=0)
    
    class Meta:
        ordering = ['category', 'order']
        
    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='projects')
    github_url = models.URLField()
    demo_url = models.URLField()
    featured = models.BooleanField(default=False)
    date_created = models.DateField()
    order = models.PositiveSmallIntegerField(default=0)
    
    # Categories and tags as character fields for simplicity
    # In a real app, consider using separate models with ManyToMany relationships
    categories = models.CharField(max_length=200, help_text="Comma-separated categories (e.g., 'aws,automation')")
    tags = models.CharField(max_length=300, help_text="Comma-separated tags with colors (e.g., 'AWS Lambda:blue,S3:blue')")
    
    class Meta:
        ordering = ['-featured', 'order']
        
    def __str__(self):
        return self.title
    
    def category_list(self):
        return [cat.strip() for cat in self.categories.split(',')]
    
    def tag_list(self):
        tags = []
        for tag_entry in self.tags.split(','):
            if ':' in tag_entry:
                name, color = tag_entry.split(':', 1)
                tags.append({'name': name.strip(), 'color': color.strip()})
            else:
                tags.append({'name': tag_entry.strip(), 'color': 'blue'})
        return tags

class Certification(models.Model):
    title = models.CharField(max_length=100)
    level = models.CharField(max_length=50)
    description = models.TextField()
    issue_date = models.CharField(max_length=30)
    icon = models.CharField(max_length=50)
    icon_color = models.CharField(max_length=20)
    verify_url = models.URLField()
    order = models.PositiveSmallIntegerField(default=0)
    
    class Meta:
        ordering = ['order']
        
    def __str__(self):
        return self.title

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    excerpt = models.TextField()
    date = models.DateField()
    category = models.CharField(max_length=50)
    image = models.ImageField(upload_to='blog')
    url = models.URLField()
    
    class Meta:
        ordering = ['-date']
        
    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField(validators=[MinLengthValidator(10)])
    date_sent = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-date_sent']
        
    def __str__(self):
        return f"{self.name} - {self.subject}"
