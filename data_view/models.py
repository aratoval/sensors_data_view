from django.db import models


class Sensors(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, null=False)
    sensor_type = models.CharField(max_length=255, null=False)
    location = models.CharField(max_length=255, null=False)
    is_active = models.BooleanField(default=True, null=False)
    add_datetime = models.DateTimeField(null=False)
    remove_datetime = models.DateTimeField(null=True, blank=True)


class Pressures(models.Model):

    date_time = models.DateTimeField(null=False, verbose_name='date_time')
    sensor_name = models.ForeignKey(
            Sensors, related_name='sensors_name', on_delete=models.CASCADE,
            verbose_name='sensor_name')
    pressure = models.IntegerField(null=False, verbose_name='pressure')
    temperature = models.IntegerField(verbose_name='temperature')

    def __unicode__(self):
        return u'%s %s %s %s %s' % (self.id, self.date_time, self.sensor_name,
                                    self.pressure, self.temperature)


class AcDc(models.Model):
    date_time = models.DateTimeField(null=False)
    sensor_name = models.ForeignKey(
            Sensors, related_name='sensor_acdc_name', on_delete=models.CASCADE)
    ani0 = models.IntegerField()
    ani1 = models.IntegerField()
    ani2 = models.IntegerField()
    ani3 = models.IntegerField()
