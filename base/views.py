from django.shortcuts import render, redirect
from django.views.generic.base import TemplateView
from django.views.generic.list import ListView
from django.views.generic.edit import FormView
from django.urls import reverse_lazy

from django.contrib.auth.forms import UserCreationForm
from django.views import View
from .models import Tour, Volunteer
from .forms import VolunteerForm

class VolunteerView(FormView):

    template_name = 'volunteer.html'
    form_class = VolunteerForm
    success_url = reverse_lazy('Success')

class HomeView(ListView):

    template_name = 'home.html'
    success_url = reverse_lazy('home')


class SuccessPage200(ListView):
    model = Volunteer
    template_name = 'Success.html'
    context_object_name = 'success'
    success_url = reverse_lazy('success')
   