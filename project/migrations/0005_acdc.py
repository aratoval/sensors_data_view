# Generated by Django 2.1.3 on 2018-11-08 08:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('project', '0004_delete_test'),
    ]

    operations = [
        migrations.CreateModel(
            name='AcDc',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_time', models.DateTimeField()),
                ('ani0', models.IntegerField()),
                ('ani1', models.IntegerField()),
                ('ani2', models.IntegerField()),
                ('ani3', models.IntegerField()),
                ('sensor_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sensor_acdc_name', to='project.Sensors')),
            ],
        ),
    ]
