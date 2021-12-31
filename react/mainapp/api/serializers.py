from rest_framework import serializers
from ..models import UserInfo, EANKey

class UserInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserInfo
        fields = '__all__'


class EANKeySerializer(serializers.ModelSerializer):

    class Meta:
        model = EANKey
        fields = '__all__'