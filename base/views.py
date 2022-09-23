from rest_framework import generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import get_list_or_404

from .models import Volunteer, Donor, Tour
from .serializers import VolunteerSerializer, DonorSerializer, TourSerializer


############### MAKING ONLY ENTRIES #########################
 #ENDPOINT to post Volunteer model collection
class VolunteerCreateAPIView(generics.CreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??

 #ENDPOINT to post Donor model collection
class DonorCreateAPIView(generics.CreateAPIView):
    queryset = Donor.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??

 #ENDPOINT to post Tour model collection
class TourCreateAPIView(generics.CreateAPIView):
    queryset = Tour.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??


############### VIEWING ALL ENTRIES #########################
 #ENDPOINT to read-only Tour Volunteer collection
class VolunteerListAPIView( generics.ListAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??

 #ENDPOINT to read-only Donor model collection
class DonorListAPIView( generics.ListAPIView):
    queryset = Donor.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??

 #ENDPOINT to read-only Tour model collection
class TourListAPIView( generics.ListAPIView):
    queryset = Tour.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??



############### VIEWING SINGLE ENTRIES #########################
class VolunteerDetailAPIView( generics.RetrieveAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??

 #ENDPOINT to read-only Donor model instance
class DonorDetailAPIView( generics.RetrieveAPIView):
    queryset = Donor.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??

 #ENDPOINT to read-only Tour model instance
class TourDetailAPIView( generics.RetrieveAPIView):
    queryset = Tour.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??


############### LISTING AND ENTERING ENTRIES #########################
 #ENDPOINT to make entries into Volunteer model instance
class VolunteerListCreateAPIView(generics.ListCreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

 #ENDPOINT to make entries into Donor model instance
class DonorListCreateAPIView(generics.ListCreateAPIView):
    queryset = Donor.objects.all()
    serializer_class = DonorSerializer

 #ENDPOINT to make entries into Tour model instance
class TourListCreateAPIView(generics.ListCreateAPIView):
    queryset = Tour.objects.all()
    serializer_class = TourSerializer