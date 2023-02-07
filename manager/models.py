from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.contrib.auth.models import User
 

class profile(AbstractUser):
    name = models.CharField(max_length=200,null=True)
    email = models.EmailField(unique=True, null= True)
    bio = models.TextField(max_length=200,null=True)

    avatar = models.ImageField(null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    groups = models.ManyToManyField(
        Group,
        blank=True,
        related_name='profile_user_groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        blank=True,
        related_name='profile_user_permissions',
    )

class Room(models.Model):
    host = models.ForeignKey(profile,on_delete=models.SET_NULL, null=True)
    topic = models.CharField(max_length=200, null=True)
    participants = models.ManyToManyField(
        profile, related_name = 'participants', blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add = True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self) -> str:
        return self.name

class Message(models.Model):
    user = models.ForeignKey(profile, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.body[0:50]