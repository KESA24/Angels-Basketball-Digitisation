from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name="home"),
    path('games/', views.games, name="games"),
    path('clubschedule/', views.main, name='mainschedule'),
    path('team/', views.players, name='team'),
    path('community/', views.community, name='community')
]