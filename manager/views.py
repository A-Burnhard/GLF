from django.views.generic.base import TemplateView
from manager import serializers

from rest_framework import generics, mixins, permissions
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.renderers import TemplateHTMLRenderer
from notifications.signals import notify
from django.db.models.signals import post_save
from notifications.signals import notify

from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout

from base import models
from base.models import Volunteer, Donor, Tour, User, Message
from manager.serializers import VolunteerSerializer,DonorSerializer, TourSerializer
# from manager import models
# from manager.models import Notification

from django.views.generic import View


def login_user(request):
	if request.method == "POST":
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			login(request, user)
			return redirect('home')
		else:
			messages.success(request, ("There Was An Error Logging In, Try Again..."))	
			return redirect('login')	


	else:
		return render(request, 'manager/login.html', {})

def logout_user(request):
	logout(request)
	messages.success(request, ("You Were Logged Out!"))
	return redirect('logout')

   


class sample(TemplateView):
    template_name = "manager/sample.html"
    permission_classes = [permissions.IsAuthenticated]


 
class Calendar(TemplateView):
    template_name = "manager/calendar.html"
    permission_classes = [permissions.IsAuthenticated]

class Account(TemplateView):
    template_name = "manager/account.html"
    permission_classes = [permissions.IsAuthenticated]



class Primary(APIView):
  renderer_classes = [TemplateHTMLRenderer]
  template_name = 'manager/index.html'
  permission_classes = [permissions.IsAuthenticated]


  def get(self, request):
        dcount = Donor.objects.all().count()
        tcount = Tour.objects.all().count()
        vcount = Volunteer.objects.all().count()
        total = dcount+tcount+vcount
        
        return render(request,'manager/primary.html' ,{ "dc" : dcount ,
        "tc" : tcount,
        "vc" : vcount,
        "all_total": total  })

class Documentation(TemplateView):
    template_name = "manager/docs.html"
    permission_classes = [permissions.IsAuthenticated]


class Dashboard(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'manager/index.html'
    permission_classes = [permissions.IsAuthenticated]

  
    def get(self, request):
        dcount = Donor.objects.all().count()
        tcount = Tour.objects.all().count()
        vcount = Volunteer.objects.all().count()
        total = dcount+tcount+vcount

        return render(request,'manager/index.html' ,{ "dc" : dcount ,
        "tc" : tcount,
        "vc" : vcount,
        "all_total": total  })




class VolunteerList(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'manager/vollist.html'
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        queryset = Volunteer.objects.all()
                
        return Response({'vol': queryset},)

# def my_handler(sender, instance, created, **kwargs):
#     sender = User.request
#     instance = Volunteer.objects.create
#     notify.send(instance, verb='was saved')

# post_save.connect(my_handler, sender=User.request)



class TourList(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'manager/tourlist.html'
    permission_classes = [permissions.IsAuthenticated]


    def get(self, request):
        queryset = Tour.objects.all()
        return Response({'tour': queryset})

class DonorList(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'manager/donorlist.html'
    permission_classes = [permissions.IsAuthenticated]


    def get(self, request):
        queryset = Donor.objects.all()
        return Response({'don': queryset})    

class MessageList(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'manager/messages.html'
    permission_classes = [permissions.IsAuthenticated]


    def get(self, request):
        queryset = Message.objects.all()
        return Response({'message': queryset}) 


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



