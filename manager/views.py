from django.views.generic.base import TemplateView
from rest_framework import generics, mixins


from rest_framework import generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import get_list_or_404

from base import models, serializers
from base.models import Volunteer, Donor, Tour
from base.serializers import VolunteerSerializer,DonorSerializer, TourSerializer

class DashBoard(TemplateView):
    template_name = "manager/index.html"

class new(TemplateView):
    template_name = "manager/min_index.html"


############### VIEWING ALL ENTRIES #########################
 #ENDPOINT to read-only all Tour Volunteer collection
class VolunteerListAPIView(generics.ListAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

 #ENDPOINT to read-only all Donor model collection
class DonorListAPIView(generics.ListAPIView):
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer

 #ENDPOINT to read-only all Tour model collection
class TourListAPIView(generics.ListAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer



############### VIEWING SINGLE ENTRIES #########################
 #ENDPOINT to read-only Volunteer model instance
class VolunteerDetailAPIView(generics.RetrieveAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    lookup_field = 'pk'

 #ENDPOINT to read-only Donor model instance
class DonorDetailAPIView( generics.RetrieveAPIView):
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer
    lookup_field = 'pk' 

 #ENDPOINT to read-only Tour model instance
class TourDetailAPIView( generics.RetrieveAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    lookup_field = 'pk'


############### LISTING AND ENTERING ENTRIES #########################
 #ENDPOINT to make entries into Volunteer model instance
class VolunteerListCreateAPIView(generics.ListCreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    lookup_field = 'pk'

 #ENDPOINT to make entries into Donor model instance
class DonorListCreateAPIView(generics.ListCreateAPIView):
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer
    lookup_field = 'pk'

 #ENDPOINT to make entries into Tour model instance
class TourListCreateAPIView(generics.ListCreateAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer
    lookup_field = 'pk'
