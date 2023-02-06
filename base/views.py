from api.mixins import (IsStaffPermissionMixin, IsSuperAdminPermissionMixin,
                        IsSuperStaffPermissionMixin)
import paystack
import requests, json
from django.shortcuts import get_list_or_404, redirect, render
from django.views.generic.base import TemplateView
from django.views.generic import View
from manager.serializers import DonorSerializer, VolunteerSerializer
from rest_framework import generics, mixins
from rest_framework.decorators import api_view
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response

from base.forms import *

from .models import Donor, Volunteer, PageHit



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

class HomePage(View):
    template_name = 'base/index.html'

    def get(self, request, *args, **kwargs):
        count = PageHit.objects.first().count
        context = {'count':count}
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        pass



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


'''
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
  
   
'''


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







def donate(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        amount = request.POST.get('amount')
        paystack_secret_key = "sk_test_3d2dd3bbd888a8dc0b88687560defe702c116457"
        headers = {
            'Authorization': 'Bearer ' + paystack_secret_key,
            'Content-Type': 'application/json',
        }
        data = {
            "amount": {{ Donor.amount_value }}, 
            "email": {{ Donor.email}},
            "reference": {96685849494},
            "callback_url": " {% static url 'about' %}", # URL for the callback
        }
        response = requests.post(
            "https://api.paystack.co/transaction/initialize",
            headers=headers,
            data=json.dumps(data),
        )
        if response.status_code == 200:
            response_json = response.json()
            transaction_reference = response_json["data"]["reference"]
            # redirect the user to the payment page
            return redirect(response_json["data"]["authorization_url"])
        else:
            # handle the error
            pass
    return render(request, 'base/donate.html')
