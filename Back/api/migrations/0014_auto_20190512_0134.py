# Generated by Django 2.2 on 2019-05-11 19:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_developer'),
    ]

    operations = [
        migrations.RenameField(
            model_name='developer',
            old_name='mail',
            new_name='email',
        ),
    ]
