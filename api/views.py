from django.shortcuts import render

# Create your views here.
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view
from rest_framework.response import Response


from base.models import Volunteer,Tour, Donor
from manager.serializers import VolunteerSerializer, TourSerializer, DonorSerializer

@api_view(['POST'])
def api_home(request, *args, **kwargs):
    """
    DRF API View
    """
    serializer = VolunteerSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        # instance = serializer.save()
        # instance = form.save()
        print(serializer.data)
        return Response(serializer.data)
    return Response({"invalid": "not good data"}, status=400)
