# Generated by Django 4.2.9 on 2024-02-04 02:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0003_alter_application_date_of_application_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='Date_of_Application',
            field=models.DateField(max_length=50),
        ),
        migrations.AlterField(
            model_name='application',
            name='Date_of_Approval',
            field=models.DateField(max_length=50),
        ),
        migrations.AlterField(
            model_name='application',
            name='Modified_Date',
            field=models.DateField(max_length=50),
        ),
    ]