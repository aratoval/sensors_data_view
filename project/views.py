from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.views import View
from django.http import HttpResponseRedirect, HttpResponse
from django_tables2 import RequestConfig
from django.contrib.auth.decorators import login_required
from project.forms import AddSensorForm, ShowDataForm
from project.models import Sensors, Pressures
from time import strftime, strptime
from datetime import datetime, timedelta
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from .tables import PressureTable
from .fusioncharts import FusionCharts
from collections import OrderedDict
from django.views.generic import FormView
from rest_framework.views import APIView, Response
from project.forms import LoginForm
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from .serializers import PressureSerializer



# Create your views here.
class Index(View):

    def get(self, request):
        form = LoginForm()
        ctx = {
            'login_form': form
        }
        return render(request, 'extend_base.html', ctx)

    def post(self, request):
        form = LoginForm(request.POST)
        ctx = {}

        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(username=username, password=password)

            if user is not None:
                login(self.request, user)
            else:
                ctx["message"] = "Login fail"

        return render(request, 'extend_base.html', ctx)


class LogoutView(View):

    def post(self, request):
        logout(request)
        return HttpResponseRedirect('/')


class SensorAddView(LoginRequiredMixin, View):

    def get(self, request):
        form = AddSensorForm()
        ctx = {'form': form}
        return render(request, 'add_sensor.html', ctx)

    def post(self, request):
        form = AddSensorForm(request.POST)
        if form.is_valid():
            Sensors.objects.create(**form.cleaned_data)
            return HttpResponseRedirect("/view_sensors")
        else:
            return HttpResponseRedirect("/add_sensor")



@method_decorator(csrf_exempt, name='dispatch')
class SensorsView(LoginRequiredMixin, View):
    permission_required = '/'

    def get(self, request):
        sensors = Sensors.objects.all()
        ctx = {
            'sensors': sensors
        }
        return render(request, 'view_sensors.html', ctx)

    def post(self, request):
        if request.POST.get('del') is None:
            return HttpResponseRedirect('/view_sensors')
        elif request.POST.get('del') is not None:
            for i in request.POST.getlist('del'):
                Sensors.objects.filter(pk=i).delete()
            return HttpResponseRedirect('/view_sensors')



class PressureView(LoginRequiredMixin, View):

    def get(self, request):
        dataSource = {}
        dataSource['chart'] = {
            "caption":           "Pressures chart",
            "subCaption":        "last 24 hours",
            "xAxisName":         "Date",
            "yAxisName":         "Pressure [hPa]",
            "decimals":          "2",
            "formatNumber":      "1",
            "formatNumberScale": "0",
            "showValues":        "0",
            "drawAnchors":       "0",
            "refreshInterval":   "1",
            "labelDisplay":      "rotate",
            "slantLabel":        "1",
            "labelStep":         "200",
            "theme":             "fusion"
        }

        dataSource['data'] = []
        date_start = (datetime.now() - timedelta(hours=24))\
            .strftime('%Y-%m-%d %H:%M:%S')
        date_stop = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        max_value = 0
        min_value = 2000
        for key in list(Pressures.objects.filter(
                date_time__range=(date_start, date_stop))
                                .order_by('date_time')):
            data = {}
            data['label'] = key.date_time.strftime('%Y-%m-%d %H:%M:%S')
            value = 10 + key.pressure / 100.0
            if value > max_value:
                max_value = value
            if value < min_value:
                min_value = value
            data['value'] = value
            dataSource['data'].append(data)

        dataSource['chart']["yAxisMaxValue"] = max_value + 0.05
        dataSource['chart']["yAxisMinValue"] = min_value - 0.05

        plot = FusionCharts("line", "ex1", "1200", "800", "chart-1",
                            "json", dataSource)
        return render(request, 'view_data.html', {'output': plot.render()})


def test(request):
    return render(request, 'test.html')


class PressureViewJson(APIView):

    def get_object(self, sensor_name):
        try:
            return Pressures.objects.all(sensor_name=sensor_name)
        except Pressures.DoesNotExist:
            return Response(status=404)

    def get(self, request, format=None):
        pressure = self.get_object(1)
        serializer = PressureSerializer(pressure, context={"request": request})
        return Response(serializer.data)
