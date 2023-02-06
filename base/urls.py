from django.contrib import admin
from django.urls import path

from base import views
from base.views import *
#( VolunteerDetailAPIView, DonorDetailAPIView,
#TourDetailAPIView, VolunteerListCreateAPIView, DonorListCreateAPIView, TourListCreateAPIView)

app_name = 'glf'
urlpatterns = [
    #CreateAPI Routers
    path('', HomePage.as_view(), name ="main"),
    path('volunteer/', VolCreateView.as_view(), name="mainvol"),
    # path('donor/', DonCreateView.as_view(), name="maindon"),
    path('contact/', ContactView.as_view(), name="mainmessage"),
    path('management/', Management.as_view(), name="management"),
    path('programmes/', Programmes.as_view(), name="prog"),
    path('about/', About.as_view(), name="about"),
    path('chapters/', Chapters.as_view(), name="chapters"),


    path('volunteer-success/', VolSuccess.as_view(), name="vs"),
    path('donor-success/', DonSuccess.as_view(), name="ds"),
    path('message-success/', Messuccess.as_view(), name="ms"),
    path('maintenance/', Maintenance.as_view(), name="maintain"),
    path('privacy/', Privacy.as_view(), name="privacy"),

    path('error/', views.error, name="error"),
    path('donate', views.donate, name='maindon'),




    path('test/', test.as_view(), name = "oh")
]