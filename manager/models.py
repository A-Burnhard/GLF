from msilib.schema import AdminExecuteSequence
from multiprocessing import Value, managers
from django.db import models
from django.contrib.auth.models import AbstractUser


class Superadmin(AbstractUser):
    username = models.CharField(max_length=150, null=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    email = models.EmailField(unique=True, blank=True)
    bio = models.TextField(null=True)
    is_staff = models.BooleanField()

    avatar = models.ImageField(null=True)

class admin(AbstractUser):
    username = models.CharField(max_length=150, null=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    email = models.EmailField(unique=True, blank=True)
    bio = models.TextField(null=True)
    is_staff = models.BooleanField()

    avatar = models.ImageField(null=True)

class Staff(AbstractUser):
    username = models.CharField(max_length=150, null=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    email = models.EmailField(unique=True, blank=True)
    bio = models.TextField(null=True)
    is_staff = models.BooleanField()

    avatar = models.ImageField(null=True)



