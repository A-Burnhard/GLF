
from datetime import datetime
from django.db import models
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404
from django.db.models.signals import post_save, pre_save
from django.core.signals import request_finished
from django.dispatch import receiver

class PageHit(models.Model):
    count = models.IntegerField(default=0)

@receiver(request_finished)
def count_page_hit(sender, **kwargs):
    count, created = PageHit.objects.get_or_create(pk=1)
    count.count += 1
    count.save()

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

class VolunteerCount(models.Model):
    count = models.IntegerField(default=0)

@receiver(post_save, sender=Volunteer)
def save_volunteer(sender, instance, created, **kwargs):
    if created:
        count, created = VolunteerCount.objects.get_or_create(pk=1)
        count.count += 1
        count.save()
        print('New volunteer form submitted', count.count)




class Donor(models.Model):

    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(null = True, blank= True)
    amount = models.PositiveIntegerField(null=True, blank=True )
    ref = models.CharField(null=True,max_length=200)
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
