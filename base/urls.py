from django.contrib import admin
from django.urls import path

from base import views
from base.views import *
#( VolunteerDetailAPIView, DonorDetailAPIView,
#TourDetailAPIView, VolunteerListCreateAPIView, DonorListCreateAPIView, TourListCreateAPIView)


urlpatterns = [
    #CreateAPI Routers
    path('', HomePage.as_view(), name ="main"),
    path('volunteer/', VolCreateView.as_view(), name="mainvol"),
    path('donor/', DonCreateView.as_view(), name="maindon"),
    path('tour/', TourCreateView.as_view(), name="maintour"),
    path('programmes/', Programmes.as_view(), name="prog"),

    path('test/', test.as_view(), name = "oh")
]