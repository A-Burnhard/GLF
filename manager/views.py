from django.views.generic.base import TemplateView
from django.http import HttpResponse
from django.urls import reverse_lazy
from django.shortcuts import render
from django.views import View

class HomePageView(TemplateView):

  template_name = "index.html"
  SUCCESS_URL = reverse_lazy('index.html')