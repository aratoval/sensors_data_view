from .models import Pressures
from rest_framework import serializers


class PressureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pressures
        fields = ("id", "sensor_name", "date_time", "pressure", "temperature")
