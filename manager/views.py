from django.views.generic.base import TemplateView
from manager import serializers

from rest_framework import generics, mixins
from rest_framework import generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.renderers import TemplateHTMLRenderer


from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

from base import models
from base.models import Volunteer, Donor, Tour
from manager.serializers import VolunteerSerializer,DonorSerializer, TourSerializer


class DashBoard(TemplateView):
    template_name = "manager/index.html"

class Calendar(TemplateView):
    template_name = "manager/calendar.html"

class Primary(TemplateView):
    template_name = "manager/primary.html"


class VolunteerList(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'manager/vollist.html'

    def get(self, request):
        queryset = Volunteer.objects.all()
        return Response({'vol': queryset})

class TourList(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'manager/tourlist.html'

    def get(self, request):
        queryset = Tour.objects.all()
        return Response({'tour': queryset})

class DonorList(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'manager/donorlist.html'

    def get(self, request):
        queryset = Donor.objects.all()
        return Response({'don': queryset})    

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




def loginPage(request):
    page = 'login'
    if request.user.is_authenticated:
        return redirect('home')

    if request.method == 'POST':
        email = request.POST.get('email').lower()
        password = request.POST.get('password')

        try:
            user = Profile.objects.get(email=email)
        except:
            messages.error(request,'User does not exist')

        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'Username or password incorrect')
    context = {'page':page}
    return render(request, 'manager/login.html', context)

def logoutUser(request):
    logout(request)
    return redirect('home')