from django.contrib import admin
from .models import Skill, Project, Certification, BlogPost, ContactMessage

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'order')
    list_filter = ('category',)
    search_fields = ('name',)
    ordering = ('category', 'order')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'featured', 'date_created', 'order')
    list_filter = ('featured',)
    search_fields = ('title', 'description', 'categories', 'tags')
    ordering = ('-featured', 'order')

@admin.register(Certification)
class CertificationAdmin(admin.ModelAdmin):
    list_display = ('title', 'level', 'issue_date', 'order')
    search_fields = ('title', 'description')
    ordering = ('order',)

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'date')
    list_filter = ('category',)
    search_fields = ('title', 'excerpt')
    ordering = ('-date',)

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'date_sent')
    search_fields = ('name', 'email', 'subject', 'message')
    ordering = ('-date_sent',)
    readonly_fields = ('date_sent',)
