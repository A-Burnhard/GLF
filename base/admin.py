from django.contrib import admin

from base.models import Volunteer
from .models import Volunteer, Donor, Tour, Message

admin.site.register(Donor),
admin.site.register(Volunteer),
admin.site.register(Tour),
admin.site.register(Message),