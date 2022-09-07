from django.contrib import admin
from django.urls import path
<<<<<<< HEAD
from base import views
=======
from base.views import volunteer,donor, tour
>>>>>>> 06f116afd90ef19ffb6ee4d0b927eaffa734d44c


urlpatterns = [
  
<<<<<<< HEAD
    path('volunteer/', views.volunteer, name="volunteerpath"),
=======
    path('volunter/', views.volunteer, name="volunteerpath"),
>>>>>>> 06f116afd90ef19ffb6ee4d0b927eaffa734d44c
    path('donor/', views.donor, name="donorpath"),
    path('tour/', views.tour, name="tourpath"),


]