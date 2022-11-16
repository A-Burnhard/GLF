from django import forms
from django_countries import countries

from .models import  Volunteer, Tour, Donor, Message

COUNTRY_CHOICES = tuple(countries)


class VolunteerForm(forms.ModelForm):

    class Meta:
        model = Volunteer
        fields = '__all__'
        labels = {
            "username" : "Full name",
            "DateOfBirth" : " Date of Birth",
            "email" : "Email",
            "phoneNumber" : "Phone Number",
            "address" : "Residential Address",
            "city" : "City",
            "country" : "Country",
            "academicBg" : "Academic Background", 
            "skills" : "Skills" ,
            "IntAreaOfPlacement" : "Interested Area of Placement",
            "DurOfPLacement" : "Duration of Placement",
            "citizenship" : " Citizenship",
            "comments" : "Comments",


        } 




        widgets = {

              'username': forms.TextInput(attrs={'class': 'form-control', "type" : "text", "class" : "firstname-input", "placeholder" : " Full name"}),
              'DateOfBirth': forms.DateInput(attrs={'class': 'form-control', 'type' : 'date' ,'class' : 'date-input', 'name' : 'DateOfBirth' }),
             'email': forms.EmailInput(attrs={'class': 'form-control',  'type' : "email", 'class': "email-input" ,'name' : "email", 'placeholder' : "emailus@sample.com"}),
              'phoneNumber': forms.NumberInput(attrs={'class': 'form-control', 'type' : "phone", 'class': "phone-input", 'name' :"phoneNumber", 'placeholder' :"Enter phone number"}),
              'address': forms.TextInput(attrs={'class': 'form-control','type':"address", 'class' :"address-input", 'name' :"address", 'placeholder': "Enter residential address"  }),
               'city': forms.TextInput(attrs={'class': 'form-control', "type" : "city", "class" : "city-input" , "placeholder" : "Enter city name"}),
                'country': forms.TextInput(attrs={'class': 'form-control', "type" : "country", "class" : "city-input" , "placeholder" : "Enter  name"}),
                 'academicBg': forms.TextInput(attrs={ 'class' : 'form-control', "type" : "text", "class" : "academics-input", "placeholder" : "Academic background"  }),
                  'skills': forms.TextInput(attrs={ 'class' : 'form-control', "type" : "text", "class" : "lastname-input", "placeholder" : " Your skills" }),
                   'IntAreaOfPlacement': forms.TextInput(attrs={ 'class' : 'form-control', "type" : "text", "class" : "lastname-input", "placeholder" : "Interested area of placement "}),
                    'DurOfPLacement': forms.TextInput(attrs={'class' : 'form-control', "type" : "text", "class" : "lastname-input", "placeholder" : " Less than a month or two "}),
                     'citizenship': forms.TextInput(attrs={'class' : 'form-control', "type" : "text", "class" : "lastname-input", "placeholder" : "American "}),
                      'comments': forms.TextInput(attrs={'class' : 'form-control', "type" : "text", "class" : "lastname-input", "placeholder" : "Any comments" }),

        }
        

class DonorForm(forms.ModelForm):

    class Meta:
        model = Donor
        fields = '__all__'

        label = {
            "Name" : "Full name",
            "email" : "Email",
            "country" : "Country",
            "PhoneNumber" : "Phone Number",
            "MeansofGiving" : "Means Of Giving",
            "FReqOfGiving" : "Frequency of Giving",

        }

        widgets = {

         'Name': forms.TextInput(attrs={'class': 'form-control'}),
         'email' : forms.EmailInput(attrs={'class': 'form-control'}),
         'country' : forms.TextInput(attrs={'class': 'form-control'}),
          'PhoneNumber': forms.NumberInput(attrs={'class': 'form-control'}),
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
        