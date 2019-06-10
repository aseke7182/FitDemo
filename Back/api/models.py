from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
from django.db.models.signals import post_save
from django.dispatch import receiver
import django.utils.timezone as t


class Catalog(models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=500, default="1")


def todayttime():
    return t.now() + t.timedelta(hours=6)


class Magazine(models.Model):
    name = models.CharField(max_length=200)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default=10)
    catalog = models.ForeignKey(Catalog, on_delete=models.PROTECT, related_name='foods')
    price = models.IntegerField(default=500)
    image = models.ImageField(upload_to="images", null=True, default=None)
    date = models.DateTimeField(default=todayttime)


class Check(models.Model):
    status = models.CharField(max_length=100, default='UNDONE')
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender')
    cost = models.FloatField(default=0)
    magazines = models.ManyToManyField(Magazine, related_name='food')
    ma = models.ManyToManyField(Magazine)


class Favorites(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    magazines = models.ManyToManyField(Magazine, related_name="foodI")
    ma = models.ManyToManyField(Magazine, default=None, blank=True)


@receiver(post_save, sender=User)
def create_favorites(sender, instance, created, **kwargs):
    if created:
        Favorites.objects.create(owner=instance)


@receiver(post_save, sender=User)
def save_favorites(sender, instance, **kwargs):
    instance.favorites.save()


class Developer(models.Model):
    name = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    github = models.CharField(max_length=200)
    phone = models.IntegerField()


class Comment(models.Model):
    text = models.CharField(max_length=9500)
    rating = models.IntegerField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, default=10)
    magazine = models.ForeignKey(Magazine, on_delete=models.CASCADE, related_name='comments')


class Message(models.Model):
    text = models.CharField(max_length=250)
    sender = models.CharField(max_length=250, default="codefazzer@gmail.com")
    password = models.CharField(default="123456789Bd", max_length=200)
    dest = models.CharField(max_length=100)
