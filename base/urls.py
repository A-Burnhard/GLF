from django.contrib import admin
from django.urls import path

from base import views
from base.views import *
#( VolunteerDetailAPIView, DonorDetailAPIView,
#TourDetailAPIView, VolunteerListCreateAPIView, DonorListCreateAPIView, TourListCreateAPIView)


urlpatterns = [
    #CreateAPI routers
    path('', HomePage.as_view(), name ="home"),
    path('volunteer/', VolunteerCreateAPIView.as_view(), name="vol_url"),
    path('donor/', DonorCreateAPIView.as_view(), name="don_url"),
    path('tour/', TourCreateAPIView.as_view(), name="tour_url"),

    #DetailAPI routers
    path('volunteerdetail/', VolunteerDetailAPIView.as_view(), name="vol_url"),
    path('donordetail/', DonorDetailAPIView.as_view(), name="don_url"),
    path('tourdetail/', TourDetailAPIView.as_view(), name="tour_url"),


]