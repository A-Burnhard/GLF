# Generated by Django 4.0.7 on 2022-09-23 12:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_donor_tour'),
    ]

    operations = [
        migrations.RenameField(
            model_name='donor',
            old_name='dFReqOfGiving',
            new_name='FReqOfGiving',
        ),
        migrations.RenameField(
            model_name='donor',
            old_name='dMeansofGiving',
            new_name='MeansofGiving',
        ),
        migrations.RenameField(
            model_name='donor',
            old_name='donorname',
            new_name='Name',
        ),
        migrations.RenameField(
            model_name='donor',
            old_name='dphonenumber',
            new_name='PhoneNumber',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='TCountryOfBirth',
            new_name='CountryOfBirth',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='TEmailAddress',
            new_name='EmailAddress',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='TEmergContact',
            new_name='EmergContact',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='TGender',
            new_name='Gender',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='TNameOfInstOrOcc',
            new_name='NameOfInstOrOcc',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='TPassportNmber',
            new_name='PassportNmber',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='TPermResAddress',
            new_name='PermResAddress',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='Tname',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='tour',
            old_name='Tnationality',
            new_name='nationality',
        ),
    ]