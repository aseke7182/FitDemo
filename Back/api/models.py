from django.db import models
from django.contrib.auth.models import User


class Catalog(models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=500, default="1")


class Magazine(models.Model):
    name = models.CharField(max_length=200)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    catalog = models.ForeignKey(Catalog, on_delete=models.PROTECT, related_name='foods')
    image = models.CharField(max_length=500, default="1")
    price = models.IntegerField(default=500)


class Check(models.Model):
    status = models.CharField(max_length=100, default='UNDONE')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender')
    cost = models.FloatField(default=0)
    magazines = models.ManyToManyField(Magazine, related_name='food')
    ma = models.ManyToManyField(Magazine)


class Developer(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    github = models.CharField(max_length=200)
    phone = models.IntegerField()


class Comment(models.Model):
    text = models.CharField(max_length=500)
    rating = models.IntegerField()
    magazine = models.ForeignKey(Magazine,on_delete=models.CASCADE)
