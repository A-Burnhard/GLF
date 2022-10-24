# Generated by Django 4.0.7 on 2022-10-24 07:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Donor',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('PhoneNumber', models.IntegerField(null=True)),
                ('MeansofGiving', models.CharField(max_length=120)),
                ('FReqOfGiving', models.CharField(max_length=100)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tour',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('CountryOfBirth', models.CharField(max_length=100)),
                ('Gender', models.CharField(max_length=10)),
                ('nationality', models.CharField(max_length=100)),
                ('PassportNmber', models.IntegerField(null=True)),
                ('PermResAddress', models.TextField(blank=True, null=True)),
                ('EmailAddress', models.EmailField(max_length=254, null=True)),
                ('EmergContact', models.IntegerField(null=True)),
                ('NameOfInstOrOcc', models.CharField(max_length=200)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Volunteer',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=250, null=True)),
                ('DateOfBirth', models.DateField()),
                ('email', models.EmailField(max_length=254, null=True)),
                ('phoneNumber', models.IntegerField(null=True)),
                ('address', models.CharField(max_length=200, null=True)),
                ('city', models.CharField(max_length=100, null=True)),
                ('country', models.CharField(max_length=50, null=True)),
                ('academicBg', models.CharField(max_length=200)),
                ('skills', models.TextField(max_length=250)),
                ('IntAreaOfPlacement', models.CharField(max_length=100)),
                ('DurOfPLacement', models.CharField(max_length=100)),
                ('citizenship', models.CharField(max_length=50)),
                ('comments', models.TextField(max_length=350)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
    ]
