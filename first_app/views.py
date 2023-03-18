from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.conf import settings
import os
from django.core.mail import EmailMessage
from .forms import ContactForm
import requests

# Create your views here.
def home(request):

    # Contact
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            recipient_list = ['seitafujiwara@gmail.com']
            email = EmailMessage(
                subject='',
                body=message,
                from_email=email,
                to=recipient_list,
                reply_to=[email]
            )
            email.send()
            return render(request, 'home.html')
    else:
        form = ContactForm()

    return render(request, "home.html", {'form': form},)
