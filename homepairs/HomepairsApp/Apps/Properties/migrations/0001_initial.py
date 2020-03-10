# Generated by Django 3.0.2 on 2020-03-03 21:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('PropertyManagers', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Property',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('streetAddress', models.CharField(max_length=255)),
                ('city', models.CharField(max_length=255)),
                ('state', models.CharField(max_length=255)),
                ('numBath', models.FloatField()),
                ('numBed', models.IntegerField()),
                ('maxTenants', models.IntegerField()),
                ('rooId', models.CharField(blank=True, max_length=10)),
                ('pm', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='PropertyManagers.PropertyManager')),
            ],
        ),
    ]
