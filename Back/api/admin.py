from django.contrib import admin
from api.models import *


@admin.register(Catalog)
class CatalogAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)


@admin.register(Developer)
class DeveloperAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Developer._meta.get_fields()]


admin.site.register(Magazine)
admin.site.register(Check)
admin.site.register(Comment)