# Generated by Django 5.0 on 2024-12-14 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('first_app', '0002_competition_medal'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='link',
            field=models.TextField(blank=True),
        ),
    ]