
from datetime import datetime
from operator import truediv
from unittest.util import _MAX_LENGTH
from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class Volunteer(models.Model):
    #id = models.BigAutoField(primary_key = True)
  #  user=models.ForeignKey(
    #    User, on_delete=models.CASCADE, null= True, blank = True
  #  )
    
    id = models.IntegerField(primary_key = True)
    username = models.CharField(max_length=250, null= True)
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
    comments = models.TextField(max_length=350)
    date = models.DateTimeField(auto_now_add = True, null = True)

    def _str_(self):
        return self.surname + '' + self.otherNames

class Donor(models.Model):

     id = models.IntegerField(primary_key= True)
     Name = models.CharField(max_length=200)
     email = models.EmailField()
     PhoneNumber = models.IntegerField(null=True)
     MeansofGiving = models.CharField(max_length=120)
     FReqOfGiving = models.CharField(max_length=100)
     date = models.DateTimeField(auto_now_add = True, null =True)

     def _str_(self):
        return self.donorname 


class Tour(models.Model):

    id = models.IntegerField(primary_key = True)
    name = models.CharField(max_length=100)
    CountryOfBirth = models.CharField(max_length=100)
    Gender = models.CharField(max_length=10)
    nationality = models.CharField(max_length=100)
    PassportNmber = models.IntegerField(null=True)
    PermResAddress = models.TextField(null=True, blank=True)
    EmailAddress = models.EmailField(null = True)
    EmergContact = models.IntegerField(null=True)
    NameOfInstOrOcc = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add = True, null=True)

    def _str_(self):
      return self.Tname
