from django.shortcuts import render_to_response, render

from django.views import View
from django.views.decorators.csrf import csrf_exempt

from django.http import HttpResponseRedirect

from data_view.forms import AddSensorForm
from data_view.models import Sensors
from data_view.forms import LoginForm

from django.utils.decorators import method_decorator

from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin


# Create your views here.
def my_handler404(request, exception, template_name="404.html"):
    response = render_to_response("404.html")
    response.status_code = 404
    return response


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
class SensorsView(View):
#    permission_required = '/'

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

class DataView(View):

    def get(self, request):

        ctx = {

        }
        return render(request, 'view_data.html', ctx)
