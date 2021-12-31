from django.contrib import admin

from .models import EANKey, UserInfo

admin.site.register(EANKey)
admin.site.register(UserInfo)
