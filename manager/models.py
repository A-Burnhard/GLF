from django.db import models
from django.contrib.auth.models import AbstractUser


'''
Superadmin -> Director
Superstaff -> Other Top executives
Staff -> other members of staff
'''

class Superadmin(AbstractUser):
    username = models.CharField(max_length=150, null=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    email = models.EmailField(unique=True, blank=True)
    bio = models.TextField(null=True)
 #   is_staff = models.BooleanField()

    avatar = models.ImageField(null=True)

    def __str__(self):
        return self.username

class Superstaff(AbstractUser):
    username = models.CharField(max_length=150, null=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    email = models.EmailField(unique=True, blank=True)
    bio = models.TextField(null=True)
 #   is_staff = models.BooleanField()

    avatar = models.ImageField(null=True)

    def __str__(self):
        return self.username
      
class Staff(AbstractUser):
    username = models.CharField(max_length=150, null=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    email = models.EmailField(unique=True, blank=True)
    bio = models.TextField(null=True)
 #   is_staff = models.BooleanField()

    avatar = models.ImageField(null=True)

    def __str__(self):
        return self.username



