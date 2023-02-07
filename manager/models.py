from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.contrib.auth.models import User
 

class profile(AbstractUser):
    name = models.CharField(max_length=200,null=True)
    email = models.EmailField(unique=True, null= True)
    bio = models.TextField(null=True)

    avatar = models.ImageField(null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    groups = models.ManyToManyField(
        Group,
        blank=True,
        related_name='profile_groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        blank=True,
        related_name='profile_permissions',
    )