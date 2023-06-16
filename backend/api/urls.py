from django.urls import path
from . import views

urlpatterns = [
    path('', views.getNotes, name='notes'),
    path('notes/<str:pk>/', views.getNote, name='note'),
]
