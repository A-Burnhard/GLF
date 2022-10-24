from django import forms
from .models import  Volunteer, Tour, Donor


class VolunteerForm(forms.ModelForm):

    class Meta:
        model = Volunteer
        fields = '__all__'

        # widgets = {
        #      'surname': forms.TextInput(attrs={'class': 'form-control' }),
        #      'otherNames': forms.TextInput(attrs={'class': 'form-control'}),
        #      'DateOfBirth': forms.DateInput(attrs={'class': 'form-control'}),
        #     'email': forms.EmailInput(attrs={'class': 'form-control'}),
        #      'phoneNumber': forms.NumberInput(attrs={'class': 'form-control'}),
        #      'address': forms.TextInput(attrs={'class': 'form-control'}),
        #       'city': forms.TextInput(attrs={'class': 'form-control'}),
        #        'country': forms.TextInput(attrs={'class': 'form-control'}),
        #         'academicBg': forms.TextInput(attrs={'class': 'form-control'}),
        #          'skills': forms.TextInput(attrs={'class': 'form-control'}),
        #           'IntAreaOfPlacement': forms.TextInput(attrs={'class': 'form-control'}),
        #            'DurOfPLacement': forms.TextInput(attrs={'class': 'form-control'}),
        #             'citizenship': forms.TextInput(attrs={'class': 'form-control'}),
        #              'comments': forms.NumberInput(attrs={'class': 'form-control'}),

        # }
        

class DonorForm(forms.ModelForm):

    class Meta:
        model = Donor
        fields = '__all__'

        # widgets = {
        # 'Name': forms.TextInput(attrs={'class': 'form-control'}),
        #  'PhoneNumber': forms.NumberInput(attrs={'class': 'form-control'}),
        #   'MeansofGiving': forms.TextInput(attrs={'class': 'form-control'}),
        #     'FReqOfGiving': forms.TextInput(attrs={'class': 'form-control'}),

        # }

class TourForm(forms.ModelForm):
    class Meta:
        model = Tour
        fields =  '__all__'

        # widgets = {
        # 'name': forms.TextInput(attrs={'class': 'form-control'}),
        # 'CountryOfBirth': forms.TextInput(attrs={'class': 'form-control'}),
        # 'Gender': forms.TextInput(attrs={'class': 'form-control'}),
        # 'nationality': forms.TextInput(attrs={'class': 'form-control'}),
        # 'PassportNmber': forms.NumberInput(attrs={'class': 'form-control'}),
        # 'PermResAddress': forms.TextInput(attrs={'class': 'form-control'}),
        # 'EmailAddress': forms.EmailInput(attrs={'class': 'form-control'}),
        # 'EmergContact': forms.NumberInput(attrs={'class': 'form-control'}),
        # 'NameOfInstOrOcc': forms.TextInput(attrs={'class': 'form-control'}),


        