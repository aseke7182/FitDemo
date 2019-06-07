from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from django.shortcuts import get_object_or_404
from api.serializers import *
from api.models import *


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
        magazines = get_object_or_404(Magazine,id=self.kwargs.get('pk2'))
        return magazines.comments.all()
