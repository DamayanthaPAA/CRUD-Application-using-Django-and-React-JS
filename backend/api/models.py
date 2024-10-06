from django.db import models

# Create your models here.
class Students(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField()
    gender = models.CharField(max_length=6)
    address = models.TextField()
    contact_number = models.CharField(max_length=15)
    gread = models.CharField(max_length=1,default="A")
