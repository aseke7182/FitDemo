# Generated by Django 2.2 on 2019-05-08 11:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_food'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='ingredients',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.PROTECT, related_name='foods', to='api.Ingredient'),
        ),
    ]