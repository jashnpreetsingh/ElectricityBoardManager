# Generated by Django 4.2.9 on 2024-02-03 13:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='GovtID_Type',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
