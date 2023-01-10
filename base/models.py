
from datetime import datetime

from django.db import models
from django.contrib.auth.models import User
 
from django.db.models.signals import post_save
from django.dispatch import receiver


class Volunteer(models.Model):
    
    
    fullName = models.CharField(max_length=200, null=True)
    email = models.EmailField(null =True,)
    dateOfBirth = models.DateField(null=True)
    phoneNumber = models.CharField(max_length= 30, null = True)
    address= models.CharField(max_length=100, null=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    country = models.CharField(max_length=50, null=True)
    academicBg = models.CharField(max_length=200, null=True)
    intAreaOfPlacement = models.CharField(max_length=100, null=True) 
    durOfPlacement = models.CharField(max_length=100, null=True)
    addInfo = models.TextField(max_length=350, null=True, blank=True)
    date = models.DateTimeField(auto_now_add = True, null = True, blank=True)

    class Meta:
        ordering = ['-date']

    def _str_(self):
        return self.firstName + '' + self.lastName

def create_volunteer(sender, instance, created, **kwargs):
    if created:
        Volunteer.objects.create(username=instance)
        print('New volunteer form submitted')

class Donor(models.Model):

    name = models.CharField(max_length=200, blank=True)
    email = models.EmailField(null = True, blank= True)
    message = models.TextField(null = True, blank=True)
    date = models.DateTimeField(auto_now_add = True, null = True, blank=True)

    class Meta:
        ordering = ['-date']

    def _str_(self):
        return self.name


def create_donor(sender, instance, created, **kwargs):
    if created:
        Donor.objects.create(username=instance)
        print('New donor form submitted')



class Message(models.Model):
    firstName = models.CharField(max_length=200, null= True)
    lastName = models.CharField(max_length=200, null= True)
    email = models.EmailField(null = True)
    phoneNumber = models.CharField(max_length=16, null = True)
    date = models.DateTimeField(auto_now_add=True, null=True)
    message = models.TextField(null = True)


    class Meta:
        ordering = ['-date']


    def _str_(self):
      return self.firstName
