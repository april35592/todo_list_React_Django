from django.db import models

# Create your models here.
class ToDo(models.Model):
    todo = models.CharField(max_length=100)
    checked = models.BooleanField(default=False)

    def __str__(self):
        return self.text