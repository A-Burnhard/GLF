from django.contrib import admin
from .models import Superadmin, Superstaff,Staff
# Register your models here.

admin.site.register(Superadmin)
admin.site.register(Superstaff)
admin.site.register(Staff)