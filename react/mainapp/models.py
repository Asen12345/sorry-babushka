from django.db import models
from django.db.models.base import Model
from phonenumber_field.modelfields import PhoneNumberField

class EANKey(models.Model):
    
    name = models.BigIntegerField(verbose_name="EAN-13")
    use = models.BooleanField(default=False)
    def __int__(self):
        return self.id

class UserInfo(models.Model):

    name = models.CharField(max_length=255, verbose_name="Имя пользователя")
    second_name = models.CharField(max_length=255, verbose_name="Фамилия пользователя")
    phone = PhoneNumberField(null=False, blank=False, unique=True, verbose_name="Номер телефона")
    date = models.DateField(null=True, blank=True, verbose_name='Дата рождения', db_index=True)
    EAN = models.ForeignKey(EANKey, verbose_name='EAN-13', on_delete=models.CASCADE)

    def __str__(self):
        return self.name