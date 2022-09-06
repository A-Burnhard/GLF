from django.contrib import admin
from django.urls import path
from .views import VolunteerView, HomeView, SuccessPage200
from django.views.generic import TemplateView
urlpatterns = [
    path('vol/', VolunteerView.as_view(), name = 'volform'),
    path('home/', HomeView.as_view(), name= 'home' ), 
    path('success/', SuccessPage200.as_view() , name ='success'),
    path('overview/',TemplateView.as_view(template_name = 'pages/index.html')),
    path('test/',TemplateView.as_view(template_name = 'pages/login.html')),


]