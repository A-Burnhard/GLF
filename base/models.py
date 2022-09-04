
from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class Volunteer(models.Model):
    #id = models.BigAutoField(primary_key = True)
  #  user=models.ForeignKey(
    #    User, on_delete=models.CASCADE, null= True, blank = True
  #  )
    surname = models.CharField(max_length=200, null= True)
    otherNames = models.CharField(max_length=250, null = True)
    DateOfBirth = models.DateField()
    email = models.EmailField()
    phoneNumber = models.IntegerField(null = True)
    address= models.CharField(max_length=200, null=True)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    academicBg = models.CharField(max_length=200)
    skills = models.TextField(max_length=250)
    IntAreaOfPlacement = models.CharField(max_length=100)
    DurOfPLacement = models.CharField(max_length=100)
    citizenship = models.CharField(max_length=50)
    comments = models.TextField(max_length=200)


    def _str_(self):
        return self.surname

class Donor(models.Model):
     donorname = models.CharField(max_length=200)
     dphonenumber = models.IntegerField(null=True)
     dMeansofGiving = models.CharField(max_length=120)
     dFReqOfGiving = models.CharField(max_length=100)


class Tour(models.Model):
    Tname = models.CharField(max_length=100)
    TCountryOfBirth = models.CharField(max_length=100)
    TGender = models.CharField(max_length=10)
    Tnationality = models.CharField(max_length=100)
    TPassportNmber = models.IntegerField(null=True)
    TPermResAddress = models.TextField(null=True, blank=True)
    TEmailAddress = models.EmailField()
    TEmergContact = models.IntegerField(null=True)
    TNameOfInstOrOcc = models.CharField(max_length=200)
