from dataclasses import fields
from pyexpat import model
from rest_framework import serializers

from .models import Volunteer, Donor, Tour

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = ['__all__']

class DonorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donor
        fields = ['__all__']

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = ['__all__']