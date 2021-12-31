from django.urls import path

from .views import apiOverview, UserInfoCreate, GooglePasses, ApplePasses, csvSend

urlpatterns = [
    path('', apiOverview, name='api-overview'),
    path('user-create/', UserInfoCreate, name='user-create'),
    path('google-passes/', GooglePasses, name='google-passes'),
    path('apple-passes/', ApplePasses, name='apple-passes'),
    path('csv-send/', csvSend, name='csv-send')
]
