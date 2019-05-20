# Generated by Django 2.2 on 2019-05-11 10:48

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0011_catalog_image'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='catalog',
            options={'verbose_name': 'Catalog', 'verbose_name_plural': 'Catalogs'},
        ),
        migrations.AddField(
            model_name='ingredient',
            name='foods',
            field=models.ForeignKey(default=11, on_delete=django.db.models.deletion.CASCADE, related_name='ingredients', to='api.Food'),
        ),
        migrations.AlterField(
            model_name='food',
            name='owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.CreateModel(
            name='Check',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meals', models.CharField(max_length=500)),
                ('status', models.CharField(choices=[('DONE', 'Done'), ('IN PROCESS', 'In process'), ('UNDONE', 'Undone')], default='UNDONE', max_length=10)),
                ('total_price', models.FloatField(default=0)),
                ('handler', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='handler', to=settings.AUTH_USER_MODEL)),
                ('sender', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sender', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Bonus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('discount', models.FloatField(default=5)),
                ('start_date', models.DateTimeField(default=datetime.datetime.now)),
                ('end_date', models.DateTimeField(default=datetime.datetime.now)),
                ('type', models.CharField(choices=[('PREMIUM', 'premium'), ('STANDART', 'standart'), ('STANDART+', 'standart+'), ('FREE', 'free')], default='BRONZE', max_length=8)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
