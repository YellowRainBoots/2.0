# Generated by Django 3.0.2 on 2020-01-20 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0002_auto_20200120_2016'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tenant',
            name='phone',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
