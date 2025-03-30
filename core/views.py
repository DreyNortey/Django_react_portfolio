from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from django.views.generic import TemplateView

from .models import Skill, Project, Certification, BlogPost
from .forms import ContactForm

class HomeView(TemplateView):
    template_name = 'core/home.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        
        # Projects
        context['projects'] = Project.objects.all()
        
        # Create a dictionary of skills organized by category
        skills_by_category = {}
        for skill in Skill.objects.all():
            category_name = skill.get_category_display()
            if category_name not in skills_by_category:
                skills_by_category[category_name] = {
                    'title': category_name,
                    'icon': skill.category,  # Using category code as icon
                    'skills': []
                }
            skills_by_category[category_name]['skills'].append({
                'name': skill.name,
                'icon': skill.icon,
                'iconColor': skill.icon_color
            })
        
        context['skill_categories'] = list(skills_by_category.values())
        context['certifications'] = Certification.objects.all()
        context['blog_posts'] = BlogPost.objects.all()[:3]  # Latest 3 blog posts
        context['contact_form'] = ContactForm()
        
        # Tools - a subset of skills that are marked as tools (currently using all skills)
        context['tools'] = Skill.objects.all()
        
        return context

@require_POST
def contact_view(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            message = form.save()
            
            # Optional: Send an email notification
            subject = f"New contact form submission: {message.subject}"
            email_message = f"""
            Name: {message.name}
            Email: {message.email}
            
            Message:
            {message.message}
            """
            # In production, use actual recipient email
            send_mail(subject, email_message, settings.DEFAULT_FROM_EMAIL, ['your_email@example.com'])
            
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({'success': True, 'message': 'Thank you for your message. I\'ll get back to you soon.'})
            else:
                messages.success(request, 'Thank you for your message. I\'ll get back to you soon.')
                return redirect('home')
        else:
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                errors = form.errors.as_json()
                return JsonResponse({'success': False, 'errors': errors})
    
    return redirect('home')
