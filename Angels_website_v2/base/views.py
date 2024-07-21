from django.shortcuts import render
from django.http import HttpResponse

from .models import Games

# Create your views here.

# games = [
#     {'id': 1, "name": "JKL"},
#     {'id': 2, "name": "UCU"}
# ]


def home(request):
    games = Games.objects.all()
    context = {'games': games}
    return render(request, 'base/home.html', context)

def games(request):
    return render(request, 'base/games_schedule.html')

def main(request):
    return render(request, 'base/master_schedule.html')

def players(request):
    return render(request, 'base/team.html')

def community(request):
    return render (request, 'base/community.html')