from django.db import models

# Create your models here.

class Games(models.Model):
    team = models.CharField(max_length=200)
    scores = models.TextField(null=True, blank = True)
    icon = models.ImageField(null=True, default="avatar.svg")
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.team