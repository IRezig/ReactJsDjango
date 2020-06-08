from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, unique=True)
    message = models.CharField(max_length=250, blank=True)
    owner = models.ForeignKey(User, related_name='leads', on_delete=models.CASCADE, null=True)
    created_at = models.DateField(auto_now=False, auto_now_add=True)
