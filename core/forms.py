from django import forms
from django.core.validators import MinLengthValidator
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your Name'}),
            'email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'your.email@example.com'}),
            'subject': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Job Opportunity'}),
            'message': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Your message here...', 'rows': '5'})
        }
    
    consent = forms.BooleanField(
        required=True,
        label='I consent to having this website store my submitted information so they can respond to my inquiry.'
    )