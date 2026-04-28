from django.db import models
from django.db.models import Model


class Product(models.Model):
    """class Product
    """
    title = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField()


class Book(models.Model):
    """class Book
    """
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    description = models.TextField()
    price = models.FloatField()
