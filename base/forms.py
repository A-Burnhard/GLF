from django import forms
from django_countries import countries

from .models import  Volunteer, Tour, Donor, Message

COUNTRY_CHOICES = tuple(countries)
placement = (
(1, 'okay'),
(2, 'something')



)

class VolunteerForm(forms.ModelForm):
    class Meta:
        model = Volunteer
        exclude = ['id']
        

class DonorForm(forms.ModelForm):

    class Meta:
        model = Donor
        fields = '__all__'

        labels = {
            "Name" : "Full name",
            "email" : "Email",
            "country" : "Country",
            "PhoneNumber" : "Phone Number",
            "MeansofGiving" : "Means Of Giving",
            "FReqOfGiving" : "Frequency of Giving",

        }

        widgets = {

         'Name': forms.TextInput(attrs={'class': 'form-control', "type" : "text",  "placeholder" : " Full name", }),
         'email' : forms.EmailInput(attrs={'class': 'form-control',  "type" : "text",  "placeholder" : " Full name"}),
         'country' : forms.TextInput(attrs={'class': 'form-control',  "type" : "text",  "placeholder" : " Full name"}),
          'PhoneNumber': forms.NumberInput(attrs={'class': 'form-control', "type" : "text",  "placeholder" : " Full name"}),
           'MeansofGiving': forms.TextInput(attrs={'class': 'form-control'}),
             'FReqOfGiving': forms.TextInput(attrs={'class': 'form-control'}),

         }


class TourForm(forms.ModelForm):
    class Meta:
        model = Tour
        fields =  '__all__'
    
        widgets = {

         'name': forms.TextInput(attrs={'class': 'form-control'}),
         'CountryOfBirth': forms.TextInput(attrs={'class': 'form-control'}),
         'Gender': forms.TextInput(attrs={'class': 'form-control'}),
         'nationality': forms.TextInput(attrs={'class': 'form-control'}),
         'PassportNmber': forms.NumberInput(attrs={'class': 'form-control'}),
         'PermResAddress': forms.TextInput(attrs={'class': 'form-control'}),
         'EmailAddress': forms.EmailInput(attrs={'class': 'form-control'}),
         'EmergContact': forms.NumberInput(attrs={'class': 'form-control'}),
         'NameOfInstOrOcc': forms.TextInput(attrs={'class': 'form-control'}),

        }
        
class Message(forms.ModelForm):

    class Meta:
        model = Message
        fields = '__all__'
      


        widgets = {

              'name': forms.TextInput(attrs={'class': 'form-control', "type" : "text", "class" : "firstname-input", "placeholder" : " Full name"}),
              'email': forms.DateInput(attrs={'class': 'form-control', 'type' : 'date' ,'class' : 'date-input', 'name' : 'DateOfBirth' }),
             'email': forms.EmailInput(attrs={'class': 'form-control',  'type' : "email", 'class': "email-input" ,'name' : "email", 'placeholder' : "emailus@sample.com"}),
              'text': forms.TextInput(attrs={'class': 'form-control','type':"address", 'class' :"address-input", 'name' :"address", 'placeholder': "Enter residential address"  }),

        }
        