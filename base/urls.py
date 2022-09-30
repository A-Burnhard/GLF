from django.contrib import admin
from django.urls import path

from base import views
from base.views import *
#( VolunteerDetailAPIView, DonorDetailAPIView,
#TourDetailAPIView, VolunteerListCreateAPIView, DonorListCreateAPIView, TourListCreateAPIView)


urlpatterns = [
    #CreateAPI Routers
    path('', HomePage.as_view(), name ="home"),
    path('volunteer/', VolCreateView.as_view(), name="vol_post"),
    path('donor/', DonCreateView.as_view(), name="don_post"),
    path('tour/', TourCreateView.as_view(), name="tour_post"),
    path('success/', SuccessView.as_view(), name = "success"  )
]