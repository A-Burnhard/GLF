
from datetime import datetime
from django.db import models
from django.contrib.auth.models import User
 
from django.db.models.signals import post_save
from django.dispatch import receiver


class Notification(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name='sender_notification')
    recipient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recipient_notification')
    message = models.TextField()
    read = models.BooleanField(default=False)
    recieved_date = models.DateTimeField(auto_now_add=True)