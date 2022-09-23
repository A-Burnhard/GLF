from rest_framework import generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import get_list_or_404

from .models import Volunteer, Donor, Tour
from .serializers import VolunteerSerializer, DonorSerializer, TourSerializer

############### VIEWING ENTRIES #########################
class VolunteerDetailAPIView( generics.RetrieveAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??

 #ENDPOINT to read-only Donor model instance
class DonorDetailAPIView( generics.RetrieveAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??

 #ENDPOINT to read-only Tour model instance
class TourDetailAPIView( generics.RetrieveAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer
    # lookup_field = 'pk' ??


############### ENTERING ENTRIES #########################
 #ENDPOINT to make entries into Volunteer model instance
class VolunteerListCreateAPIView(generics.ListCreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = VolunteerSerializer

 #ENDPOINT to make entries into Donor model instance
class DonorListCreateAPIView(generics.ListCreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = DonorSerializer

 #ENDPOINT to make entries into Tour model instance
class TourListCreateAPIView(generics.ListCreateAPIView):
    queryset = Volunteer.objects.all()
    serializer_class = TourSerializer