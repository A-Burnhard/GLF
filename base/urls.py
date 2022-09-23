from django.contrib import admin
from django.urls import path

from base import views
from base.views import *
#( VolunteerDetailAPIView, DonorDetailAPIView,
#TourDetailAPIView, VolunteerListCreateAPIView, DonorListCreateAPIView, TourListCreateAPIView)


urlpatterns = [
    #CreateAPI Routers
    path('', HomePage.as_view(), name ="home"),
    path('volunteer/', VolunteerCreateAPIView.as_view(), name="vol_post"),
    path('donor/', DonorCreateAPIView.as_view(), name="don_post"),
    path('tour/', TourCreateAPIView.as_view(), name="tour_post"),

    #DetailAPI Routers
    path('volunteerdetail/', VolunteerDetailAPIView.as_view(), name="vol_detail"),
    path('donordetail/', DonorDetailAPIView.as_view(), name="don_detail"),
    path('tourdetail/', TourDetailAPIView.as_view(), name="tour_detail"),

    #ListAPI Routers
    path('volunteerlist/', VolunteerListAPIView.as_view(), name="vol_list"),
    path('donorlist/', DonorListAPIView.as_view(), name="don_list"),
    path('tourlist/', TourListAPIView.as_view(), name="tour_list"),

    #ListCreateAPI Routers
    path('volunteerlistcreate/', VolunteerListAPIView.as_view(), name="vol_lc"),
    path('donorlistcreate/', DonorListAPIView.as_view(), name="don_lc"),
    path('tourlistcreate/', TourListAPIView.as_view(), name="tour_lc"),

]