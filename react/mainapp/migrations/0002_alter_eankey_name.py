# Generated by Django 3.2.9 on 2021-11-21 15:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eankey',
            name='name',
            field=models.BigIntegerField(verbose_name='EAN-13'),
        ),
    ]
