# Generated by Django 4.2.9 on 2024-02-04 03:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0004_alter_application_date_of_application_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='Date_of_Application',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='application',
            name='Date_of_Approval',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='application',
            name='Modified_Date',
            field=models.DateField(),
        ),
    ]