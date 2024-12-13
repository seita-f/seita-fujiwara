from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.conf import settings
import os
from django.core.mail import EmailMessage
from .forms import ContactForm
import requests
from .models import Project
from .models import Profile, Project, Competition


# Create your views here.
def home(request):
    profile = Profile.objects.first() 
    projects = Project.objects.all()  
    competitions = Competition.objects.all()  

    # DEBUG:
    print("DEBUG")
    print(f"Profile: {profile}")
    
    return render(request, 'home.html', {
        'profile': profile,
        'projects': projects,
        'competitions': competitions
    })