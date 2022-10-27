from rest_framework import serializers

from base import models
from base.models import Volunteer, Donor, Tour

class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Volunteer
        fields = '__all__'

    def get_vol_total(self, obj):
        return Volunteer.objects.all.count()

class DonorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donor
        fields = '__all__'

    def get_don_total(self, obj):
        return Donor.objects.all.count()

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'