# Generated by Django 4.0.7 on 2022-10-28 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_donor_id'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='donor',
            options={'ordering': ['-date']},
        ),
        migrations.AlterField(
            model_name='tour',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='volunteer',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
