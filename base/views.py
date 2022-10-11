from django.views.generic.base import TemplateView
from django.views.generic.edit import FormView

from rest_framework import generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import get_list_or_404

from .models import Volunteer, Donor, Tour
from .serializers import VolunteerSerializer, DonorSerializer, TourSerializer
from api.mixins import IsSuperAdminPermissionMixin, IsSuperStaffPermissionMixin, IsStaffPermissionMixin

from .forms import *

class HomePage(TemplateView):
    template_name = "index.html"


############### MAKING ONLY ENTRIES #########################
 #ENDPOINT to post Volunteer model collection
class VolCreateView(FormView):
    template_name = 'volunteer.html'
    form_class = VolunteerForm
    success_url = '/success/'

 #ENDPOINT to post Donor model collection
class DonCreateView(FormView):
   template_name = 'donor.html'
   form_class = DonorForm
   success_url = '/success/'

 #ENDPOINT to post Tour model collection
class TourCreateView(FormView):
    template_name = 'tour.html'
    form_class = TourForm
    success_url = '/success/'
    lookup_field = 'pk' 

class SuccessView(TemplateView):
    template_name = "success.html"
