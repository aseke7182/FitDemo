from django_filters import rest_framework as filters
from api.models import Magazine


class MagazineFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr=('contains',))
    min_price = filters.NumberFilter(field_name='price', lookup_expr='gte')
    max_price = filters.NumberFilter(field_name='price', lookup_expr='lte')

    class Meta:
        model = Magazine
        fields = ('name', 'min_price', 'max_price',)
