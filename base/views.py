from django.views.generic.base import TemplateView

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
class VolunteerCreateAPIView(generics.CreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

 #ENDPOINT to post Donor model collection
class DonorCreateAPIView(generics.CreateAPIView):
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer

 #ENDPOINT to post Tour model collection
class TourCreateAPIView(generics.CreateAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    lookup_field = 'pk' 

