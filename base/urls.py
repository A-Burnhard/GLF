from django.contrib import admin
from django.urls import path
from base.views import volunteer,donor, tour


urlpatterns = [
  
    path('volunter/', views.volunteer, name="volunteerpath"),
    path('donor/', views.donor, name="donorpath"),
    path('tour/', views.tour, name="tourpath"),


]