from django.urls import path
from .views import manager

urlpatterns = [
    path('', manager.as_view(), name = 'thome')

]