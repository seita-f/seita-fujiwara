from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.conf import settings
import os
from django.core.mail import EmailMessage
from .forms import ContactForm
import requests
from .models import Project
from .models import Profile, Project, Competition, Company, Experience


# Create your views here.
def home(request):
    profile = Profile.objects.first() 
    companies = Company.objects.all()
    # experiences = Experience.objects.all()
    # tags = Tag.objects.all(),
    projects = Project.objects.all()  
    competitions = Competition.objects.all()  

    # DEBUG:
    print("DEBUG")
    print(f"Profile: {profile}")
    
    return render(request, 'home.html', {
        'profile': profile,
        'companies': companies,
        'projects': projects,
        'competitions': competitions,
    })