from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Catalog, Developer, Check, Magazine, Comment, Message, Favorites


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password',)

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class CatalogSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    image = serializers.CharField(required=True)

    class Meta:
        model = Catalog
        fields = ('id', 'name', 'image')


class MagazineSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    owner = UserSerializer(read_only=True)
    date = serializers.DateTimeField(required=False)

    class Meta:
        model = Magazine
        fields = ('id', 'name', 'owner', 'catalog', 'price', 'image', 'date')

    def create(self, validated_data):
        catalog = validated_data.pop('catalog')
        instance = Magazine.objects.create(catalog=catalog, **validated_data)
        return instance


class CheckSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    status = serializers.CharField(required=True)
    owner = UserSerializer(read_only=True)
    magazines = MagazineSerializer(read_only=True, many=True)

    class Meta:
        model = Check
        fields = ('id', 'status', 'cost', 'owner', 'magazines', 'ma')

    def create(self, validated_data):
        foods = validated_data.pop('ma')
        cost = 0
        for i in foods:
            cost += i.price
        instance = Check.objects.create(cost=cost, **validated_data)
        instance.magazines.set(foods)
        return instance


class FavoritesSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    owner = UserSerializer(read_only=True)
    magazines = MagazineSerializer(read_only=True, many=True)

    class Meta:
        model = Favorites
        fields = ('id', 'owner', 'magazines', 'ma')
    
    def create(self, validated_data):
        foodsI = validated_data.pop('ma')
        instance = Favorites.objects.create(**validated_data)
        instance.magazines.set(foodsI)
        return instance
    
    def update(self, instance, validated_data):
        foodsI = validated_data.pop('ma')
        instance.magazines.set(foodsI)
        instance.save()
        return instance


class DeveloperSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Developer
        fields = ('id', 'name', 'email', 'github', 'phone',)


class CommentSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    owner = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'text', 'rating', 'magazine', 'owner')

    def create(self, validated_data):
        magazine = validated_data.pop('magazine')
        instance = Comment.objects.create(magazine=magazine, **validated_data)
        return instance


class MessageSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    sender = serializers.CharField(read_only=True)
    password = serializers.CharField(read_only=True)
    text = serializers.CharField(required=True)
    dest = serializers.CharField(required=True)

    class Meta:
        model = Message
        fields = '__all__'
