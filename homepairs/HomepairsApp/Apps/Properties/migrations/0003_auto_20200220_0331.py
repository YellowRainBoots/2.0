# Generated by Django 3.0.2 on 2020-02-20 03:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Properties', '0002_property_rooid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='property',
            name='rooId',
            field=models.CharField(blank=True, max_length=10),
        ),
    ]
