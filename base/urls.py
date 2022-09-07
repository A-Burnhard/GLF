from django.contrib import admin
from django.urls import path
from base import views


urlpatterns = [
  
    path('volunteer/', views.volunteer, name="volunteerpath"),
    path('donor/', views.donor, name="donorpath"),
    path('tour/', views.tour, name="tourpath"),


]