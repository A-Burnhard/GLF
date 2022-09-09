from django.contrib import admin
from django.urls import path

from base import views
from base.views import volunteer,donor, tour


urlpatterns = [
  
    path('volunteer/', views.volunteer, name="vol_url"),
    path('donor/', views.donor, name="don_url"),
    path('tour/', views.tour, name="tour_url"),


]