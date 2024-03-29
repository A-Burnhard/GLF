
from django.urls import path
from . import views
from manager.views import *

urlpatterns = [
     #Template Routers

    path('', views.login_user, name="login"),
    path('home/', Dashboard.as_view(), name = 'home'),
    path('volunteer/', VolunteerList.as_view(), name= 'vol'),
    path('donor/', DonorList.as_view(), name= 'don'),
    path('calendar/', Calendar.as_view(), name= 'cal'),
    path('primary/', Primary.as_view(), name= 'prim'),
    path('chat/<str:pk>', Chat.as_view(), name= 'chat'),
    path('account/', Account.as_view(), name= 'account'),
    path('messages/', MessageList.as_view(), name = 'message'),
    path('docs/', Documentation.as_view(), name= 'docs'),
    path('sample/', sample.as_view(), name= 'sample'),
    path('logout_user', views.logout_user, name='logout'),


    #DetailAPI Routers
    path('volunteerdetail/<int:pk>/', VolunteerDetailAPIView.as_view(), name="vol_detail"),
    path('donordetail/<int:pk>/', DonorDetailAPIView.as_view(), name="don_detail"),

    #ListAPI Routers
    path('volunteerlist/', VolunteerListAPIView.as_view(), name="vol_list"),
    path('donorlist/', DonorListAPIView.as_view(), name="don_list"),

    #ListCreateAPI Routers
    path('volunteerlistcreate/', VolunteerListCreateAPIView.as_view(), name="vol_lc"),
    path('donorlistcreate/', DonorListCreateAPIView.as_view(), name="don_lc"),

]
