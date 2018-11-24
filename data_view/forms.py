from django import forms
from datetime import datetime
from data_view.models import Sensors

from django.core.exceptions import ValidationError
from django.core.validators import EmailValidator, URLValidator


class LoginForm(forms.Form):
    username = forms.CharField(max_length=64)
    password = forms.CharField(
        max_length=64, widget=forms.PasswordInput)


class AddSensorForm(forms.Form):

    name = forms.CharField(
            max_length=255,
            label='Sensor name',
            help_text='Sensor name')
    sensor_type = forms.CharField(
            max_length=255,
            label='Sensor type',
            help_text='Sensor type')
    location = forms.CharField(
            max_length=255,
            label='Sensor location',
            help_text='Sensor location')
    is_active = forms.BooleanField(initial=True)
    add_datetime = forms.DateTimeField(
            label='Add datetime',
            initial=datetime.now(),
            help_text='Add sensor date')
    remove_datetime = forms.DateTimeField(
            label='Remove datetime',
            help_text='Remove sensor date',
            required=False,
            initial=None)


class ShowDataForm(forms.Form):

    def choice():
        sensor = Sensors.objects.all()
        lista = []
        for id, name in sensor.values_list('id', 'name'):
            lista.append((id, name))
        return lista

    start_date = forms. DateTimeField(label='Star date')
    stop_date = forms.DateTimeField(label='Stop date')
    sensor_id = forms.ChoiceField(
            choices=choice())

