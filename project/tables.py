import django_tables2 as tables
from .models import Pressures


class PressureTable(tables.Table):
    class Meta:
        model = Pressures
        template_name = 'django_tables2/bootstrap.html'
        template_name = 'django_tables2/semantic.html'
