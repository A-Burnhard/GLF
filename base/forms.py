from django.forms import ModelForm
from .models import  Volunteer, Tour, Donor


class VolunteerForm(ModelForm):

    class Meta:
        model = Volunteer
        fields = '__all__'

        
class DonorForm(ModelForm):

    class Meta:
        model = Donor
        fields = '__all__'


class TourForm(ModelForm):
    class Meta:
        model = Tour
        fields = '__all__'