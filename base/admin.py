from django.contrib import admin

from base.models import Volunteer
from .models import Volunteer, Donor, Tour

admin.site.register(Donor),
admin.site.register(Volunteer),
admin.site.register(Tour),