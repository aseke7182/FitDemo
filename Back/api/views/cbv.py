import smtplib
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from django.core.mail import send_mail
from django.http import Http404
from rest_framework.views import APIView
from api.models import Developer, Favorites
from api.serializers import DeveloperSerializer,MessageSerializer, FavoritesSerializer
from rest_framework.response import Response
from rest_framework import status


class Developers(APIView):
    def get(self, request):
        developers = Developer.objects.all()
        serializer = DeveloperSerializer(developers, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = DeveloperSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


class DeveloperInfo(APIView):
    def get_developers(self, pk):
        try:
            return Developer.objects.get(id=pk)
        except Developer.DoesNotExist:
            raise Http404

    def get(self, requeset, pk):
        developers = self.get_developers(pk)
        serializer = DeveloperSerializer(developers)
        return Response(serializer.data)

    def put(self, request, pk):
        developers = self.get_developers(pk)
        serializer = DeveloperSerializer(instance=developers, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk):
        developers = self.get_developers(pk)
        developers.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# class FavoritesDetail(APIView):
#     permission_classes = (IsAuthenticated,)
#     def get 


class Message(APIView):
    def post(self, request):
        serializer = MessageSerializer(data=request.data)
        if serializer.is_valid():
            mes = serializer.save()
            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.ehlo()
            server.starttls()
            server.ehlo()
            server.login(mes.sender, mes.password)
            server.sendmail(mes.sender, mes.dest, mes.text)
            print(mes.text)
            server.quit()
            print(serializer.data.get('sender'))
            if mes:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
