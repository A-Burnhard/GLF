from api.mixins import (IsStaffPermissionMixin, IsSuperAdminPermissionMixin,
                        IsSuperStaffPermissionMixin)
from django.shortcuts import get_list_or_404, redirect, render
from django.views import View
from django.views.generic.base import TemplateView
from manager.serializers import DonorSerializer, VolunteerSerializer
from rest_framework import generics, mixins
from rest_framework.decorators import api_view
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response

from base.forms import *

from .models import Donor, Volunteer


class HomePage(TemplateView):
    template_name = 'base/index.html'

class Management(TemplateView):
    template_name = 'base/management.html'


class test(TemplateView):
    template_name = 'base/donate.html'

class Programmes(TemplateView):
    template_name = 'base/programmes.html'

class About(TemplateView):
    template_name = 'base/about.html'

class Chapters(TemplateView):
    template_name = 'base/chapters.html'

class VolSuccess(TemplateView):
    template_name = 'base/success-v.html'

class DonSuccess(TemplateView):
    template_name = 'base/success-d.html'

class Messuccess(TemplateView):
    template_name = 'base/success-m.html'

class Maintenance(TemplateView):
    template_name = 'base/maintenance.html'

class Privacy(TemplateView):
    template_name = 'base/privacy-policy.html'


############### MAKING ONLY ENTRIES #########################
 #ENDPOINT to post Volunteer model collection


class VolCreateView(View):
    template_name = 'base/volunteer.html'

    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        form = VolunteerForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('glf:vs')
        
        print(form.errors)
        return redirect('glf:main')



class DonCreateView(View):
    template_name = 'base/donate.html'

    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        form = DonorForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('glf:ds')

        print(form.errors)
        return redirect('glf:main')
  
   
 


class ContactView(View):
    template_name = 'base/contact.html'
  
    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, self.template_name, context)

    def post(self,request, *args, **kwargs):
        form = Message(request.POST)

        if form.is_valid():
            form.save()
            return redirect('glf:ms')

        print(form.errors) 
        return redirect('glf:main')



def error(request, reason=""):
    ctx = {'message': 'some custom messages'}
    return render('base/maintenance.html', ctx)
