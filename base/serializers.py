from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

from .models import Volunteer, Donor, Tour

class VolunteerSerializer(serializers.Modelserializer):
    class Meta:
        model = Volunteer
        fields = ['__all__']

class DonorSerializer(serializers.Modelserializer):
    class Meta:
        model = Donor
        fields = ['__all__']

class TourSerializer(serializers.Modelserializer):
    class Meta:
        model = Tour
        fields = ['__all__']