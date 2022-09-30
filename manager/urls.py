from django.urls import path
from manager.views import *

urlpatterns = [

    path('', DashBoard.as_view(), name = 'dash'),
    path('new/', new.as_view(), name = 'new'),

    #DetailAPI Routers
    path('volunteerdetail/<int:pk>/', VolunteerDetailAPIView.as_view(), name="vol_detail"),
    path('donordetail/<int:pk>/', DonorDetailAPIView.as_view(), name="don_detail"),
    path('tourdetail/<int:pk>/', TourDetailAPIView.as_view(), name="tour_detail"),

    #ListAPI Routers
    path('volunteerlist/', VolunteerListAPIView.as_view(), name="vol_list"),
    path('donorlist/', DonorListAPIView.as_view(), name="don_list"),
    path('tourlist/', TourListAPIView.as_view(), name="tour_list"),

    #ListCreateAPI Routers
    path('volunteerlistcreate/', VolunteerListCreateAPIView.as_view(), name="vol_lc"),
    path('donorlistcreate/', DonorListCreateAPIView.as_view(), name="don_lc"),
    path('tourlistcreate/', TourListCreateAPIView.as_view(), name="tour_lc"),

]
