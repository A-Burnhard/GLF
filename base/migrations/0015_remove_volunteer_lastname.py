# Generated by Django 4.0.7 on 2023-01-10 18:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_remove_volunteer_firstname'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='volunteer',
            name='lastName',
        ),
    ]