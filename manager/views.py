from django.http import HttpResponse
from django.shortcuts import render
from django.views import View

class manager(View):
    template_name = 'index.html'
  #  success_url = reverse_lazy('success')
   