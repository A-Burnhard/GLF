# Generated by Django 4.0.7 on 2022-11-28 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_alter_message_options_message_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='volunteer',
            name='city',
            field=models.CharField(choices=[(1, 'okay'), (2, 'something')], max_length=100, null=True),
        ),
    ]
