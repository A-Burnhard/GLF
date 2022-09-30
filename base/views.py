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
  #  template_name = ''
    serializer_class = VolunteerSerializer
    form_class = VolunteerForm
    success_url = '//'

 #ENDPOINT to post Donor model collection
class DonCreateView(FormView):
   # template_name = ''
   form_class = DonorForm
   success_url = '//'

 #ENDPOINT to post Tour model collection
class TourCreateView(FormView):
   # template_name = ''
    success_url = '//'
    form_class = TourForm
    lookup_field = 'pk' 

