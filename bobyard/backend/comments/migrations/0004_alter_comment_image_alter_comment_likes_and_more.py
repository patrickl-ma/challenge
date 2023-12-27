# Generated by Django 5.0 on 2023-12-27 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0003_alter_comment_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='image',
            field=models.CharField(blank=True, default='', max_length=1000),
        ),
        migrations.AlterField(
            model_name='comment',
            name='likes',
            field=models.PositiveIntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='comment',
            name='text',
            field=models.CharField(blank=True, default='', max_length=1000),
        ),
    ]
