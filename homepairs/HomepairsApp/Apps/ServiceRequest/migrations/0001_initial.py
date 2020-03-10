# Generated by Django 3.0.2 on 2020-03-03 21:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Properties', '0001_initial'),
        ('Appliances', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ServiceRequest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('job', models.CharField(max_length=100)),
                ('details', models.CharField(max_length=300)),
                ('serviceCompany', models.CharField(max_length=100)),
                ('client', models.CharField(max_length=100)),
                ('status', models.CharField(max_length=20)),
                ('dayStarted', models.DateTimeField()),
                ('appFixed', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Appliances.Appliance')),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Properties.Property')),
            ],
        ),
    ]
