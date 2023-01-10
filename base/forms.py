from django import forms

from .models import  Volunteer, Donor, Message



class VolunteerForm(forms.ModelForm):
    class Meta:
        model = Volunteer
        exclude = ['id']
        
class DonorForm(forms.ModelForm):
    class Meta:
        model = Donor
        exclude = ['id']


class Message(forms.ModelForm):
    class Meta:
        model = Message
        exclude = ['id']
   
 