
from datetime import datetime
from enum import auto

from django.db import models
from django.contrib.auth.models import User
 
from django.db.models.signals import post_save
from django.dispatch import receiver


class Volunteer(models.Model):
    
    id = models.AutoField(primary_key= True)
    username = models.CharField(max_length=250, null= True)
    DateOfBirth = models.DateField(null=True)
    email = models.EmailField(null =True,)
    phoneNumber = models.TextField(null = True)
    address= models.CharField(max_length=15, null=True)
    city = models.CharField(max_length=100, null=True)
    country = models.CharField(max_length=50, null=True)
    academicBg = models.CharField(max_length=200, null=True)
    skills = models.TextField(max_length=250, null=True)
    IntAreaOfPlacement = models.CharField(max_length=100, null=True) 
    DurOfPLacement = models.CharField(max_length=100, null=True)
    comments = models.TextField(max_length=350, null=True)
    date = models.DateTimeField(auto_now_add = True, null = True)

    class Meta:
        ordering = ['-date']

    def _str_(self):
        return self.surname + '' + self.username

def create_volunteer(sender, instance, created, **kwargs):
    if created:
        Volunteer.objects.create(username=instance)
        print('New volunteer form submitted')

class Donor(models.Model):

     id = models.AutoField(primary_key= True)
     Name = models.CharField(max_length=200)
     email = models.EmailField(null = True)
     PhoneNumber = models.TextField(null = True)
     country = models.CharField(max_length = 200)
     MeansofGiving = models.CharField(max_length=120)
     FReqOfGiving = models.CharField(max_length=100)
     date = models.DateTimeField(auto_now_add = True, null =True)

     class Meta:
        ordering = ['-date']

     def _str_(self):
        return self.Name 

def create_donor(sender, instance, created, **kwargs):
    if created:
        Donor.objects.create(username=instance)
        print('New donor form submitted')



class Tour(models.Model):

    id = models.AutoField(primary_key= True)
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

    class Meta:
        ordering = ['-date']


    def _str_(self):
      return self.name


class Message(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(null = True)
    text = models.CharField(max_length=300)
    date = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        ordering = ['-date']


    def _str_(self):
      return self.name
