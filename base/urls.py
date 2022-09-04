from django.urls import path
from .views import Volunteer_registration

urlpatterns = [
    path('', Volunteer_registration.as_view(), name = 'volunteer'),
]