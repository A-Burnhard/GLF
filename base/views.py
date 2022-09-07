from django.http import HttpResponse
from django.shortcuts import render,redirect
from django.views.generic.list import ListView
from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.views import View
from .models import Tour, Volunteer, Donor
from .forms import VolunteerForm, DonorForm, TourForm



class SuccessPage200(ListView):
    model = Volunteer
    template_name = 'Success.html'
    context_object_name = 'success'
    success_url = reverse_lazy('success')
   

def volunteer(view):
    form = VolunteerForm()

    if request.method == 'POST':
        form = VolunteerForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form' : form}
    return render(request, 'volunteer.html', context)


def donor(request):
    form = DonorForm()

    if request.method == 'POST':
        form = DonorForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form' : form}
    return render(request, 'donor.html', context)

    
def tour(request):
    form = TourForm()

    if request.method == 'POST':
        form = TourForm(request.POST)
        if form.is_valid():
            form.save()

    context = {'form' : form}
    return render(request, 'tour.html', context)