# Generated by Django 4.0.7 on 2022-11-15 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0009_message'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='message',
            options={'ordering': ['-date']},
        ),
        migrations.AddField(
            model_name='message',
            name='date',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
