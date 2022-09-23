from django.contrib import admin
from django.urls import path

from base import views
from base.views import *
#( VolunteerDetailAPIView, DonorDetailAPIView,
#TourDetailAPIView, VolunteerListCreateAPIView, DonorListCreateAPIView, TourListCreateAPIView)


urlpatterns = [
    
    path('volunteer/', VolunteerCreateAPIView.as_view(), name="vol_url"),
    path('donor/', DonorCreateAPIView.as_view(), name="don_url"),
    path('tour/', TourCreateAPIView.as_view(), name="tour_url"),

 #   path('volunteer/', VolunteerDetailAPIView.as_view(), name="vol_url"),
  #  path('donor/', DonorDetailAPIView.as_view(), name="don_url"),
 #   path('tour/', TourDetailAPIView.as_view(), name="tour_url"),


]