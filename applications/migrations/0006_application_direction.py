# Generated by Django 4.2.9 on 2024-02-04 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('applications', '0005_alter_application_date_of_application_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='application',
            name='Direction',
            field=models.CharField(default='North', max_length=50),
            preserve_default=False,
        ),
    ]