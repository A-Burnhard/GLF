from django.views.generic.base import TemplateView


from rest_framework import generics, mixins
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.shortcuts import get_list_or_404

class DashBoard(TemplateView):
    template_name = "manager/TEMPLATE.html"