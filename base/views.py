from django.shortcuts import render, redirect

from django.views.generic.list import ListView

from .models import Volunteer

class Volunteer_registration(ListView):
    model = Volunteer
    context_object_name = 'volunteer'
    template_name = 'base/volunteerRegistration.html'