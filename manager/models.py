from django.db import models
from django.contrib.auth.models import User

'''
Superadmin -> Director
Superstaff -> Other Top executives
Staff -> other members of staff
'''

class Profile(User):
   # username = models.CharField(max_length=150, null=True)
    firstName = models.CharField(max_length=30, blank=True)
    lastName = models.CharField(max_length=150, blank=True)
    emailAddress = models.EmailField(unique=True, blank=True)
    bio = models.TextField(null=True)
 #   is_staff = models.BooleanField()

    avatar = models.ImageField(null=True)

    def __str__(self):
        return self.username

    def __str__(self):
        return str(self.user)



