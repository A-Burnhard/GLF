from django.views.generic.base import TemplateView
from django.views.generic.edit import FormView, CreateView
from django.views.generic import View
from django.shortcuts import render

from rest_framework import generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer

from django.shortcuts import get_list_or_404,redirect

from .models import Volunteer, Donor, Tour
from api.mixins import IsSuperAdminPermissionMixin, IsSuperStaffPermissionMixin, IsStaffPermissionMixin

from base.forms import *

from manager.serializers import VolunteerSerializer, DonorSerializer, TourSerializer

class HomePage(TemplateView):
    template_name = 'base/index.html'

class test(TemplateView):
    template_name = 'base/donate.html'

class Programmes(TemplateView):
    template_name = 'base/programmes.html'



############### MAKING ONLY ENTRIES #########################
 #ENDPOINT to post Volunteer model collection


class VolCreateView(CreateView):
    template_name = 'base/volunteer.html'
    form_class = VolunteerForm
    success_url = 'main'

    def form_valid(self,form):
         

        if form.is_valid():
            form.save()
            return redirect('main')
        return super().form_valid(form)


      
   
 #ENDPOINT to post Donor model collection
class DonCreateView(CreateView):
    template_name = 'base/donate.html'
    form_class = DonorForm
    success_url = 'main'

    def form_valid(self,form):
         

        if form.is_valid():
            form.save()
            return redirect('main')
        return super().form_valid(form)


 #ENDPOINT to post Tour model collection
class TourCreateView(CreateView):
    template_name = 'base/tour.html'
    form_class = DonorForm
    success_url = 'mainvol'

    def form_valid(self,form):
         

        if form.is_valid():
            form.save()
            return redirect('mainvol')
        return super().form_valid(form)
