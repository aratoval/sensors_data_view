"""sensors_data_view URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import handler404, handler500, url
from django.conf.urls.static import static
from data_view.views import SensorAddView, SensorsView, Index, LogoutView, \
    DataView, my_handler404, Data


urlpatterns = [
    url(r'^$', Index.as_view(), name='index'),
    path('admin/', admin.site.urls),
    url(r'^add_sensor/', SensorAddView.as_view(), name='add-sensor'),
    url(r'^view_sensors/', SensorsView.as_view(), name='view-sensors'),
    url(r'^logout', LogoutView.as_view(), name='logout-view'),
    url(r'^view_data', DataView.as_view(), name='data-view'),
    url(r'^data/', Data.as_view()),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

handler404 = my_handler404
handler500 = my_handler404

