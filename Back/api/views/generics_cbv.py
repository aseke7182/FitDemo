from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics, filters
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from django.shortcuts import get_object_or_404
from api.serializers import *
from api.models import *
from api.filters import MagazineFilter


class CatalogList(generics.ListCreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CatalogSerializer
    queryset = Catalog.objects.all()


class CatalogInfo(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CatalogSerializer
    permission_classes = (AllowAny,)
    queryset = Catalog.objects.all()


class AllMagazinesList(generics.ListAPIView):
    serializer_class = MagazineSerializer
    permission_classes = (AllowAny,)
    queryset = Magazine.objects.all()


class MagazineList(generics.ListCreateAPIView):
    serializer_class = MagazineSerializer
    permission_classes = (AllowAny,)
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter,)
    filter_class = MagazineFilter
    search_fields = ('name',)
    ordering_fields = ('name', 'date', 'price',)
    ordering = ('name',)

    def get_queryset(self):
        catalog = get_object_or_404(Catalog, id=self.kwargs.get('pk'))
        queryset = catalog.foods.all()
        return queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class MagazineInfo(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = MagazineSerializer
    permission_classes = (IsAuthenticated,)
    lookup_url_kwarg = 'pk2'

    def get_queryset(self):
        catalog = get_object_or_404(Catalog, id=self.kwargs.get('pk'))
        queryset = catalog.foods.filter(owner=self.request.user)
        return queryset


class BasketList(generics.ListCreateAPIView):
    serializer_class = CheckSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        check = Check.objects.all()
        queryset = check.filter(owner=self.request.user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class FavoritesList(generics.ListCreateAPIView):
    serializer_class = FavoritesSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        favorite = Favorites.objects.all()
        queryset = favorite.filter(owner=self.request.user)
        return queryset

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class FavoritesInfo(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FavoritesSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Favorites.objects.all()


class UsersFoodList(generics.ListCreateAPIView):
    serializer_class = MagazineSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        catalog = get_object_or_404(Catalog, id=self.kwargs.get('pk'))
        foods = catalog.foods.all()
        return foods.filter(owner=self.request.user)


class MagazineComment(generics.ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = (AllowAny,)

    def get_queryset(self):
        magazines = get_object_or_404(Magazine, id=self.kwargs.get('pk2'))
        return magazines.comments.all()
