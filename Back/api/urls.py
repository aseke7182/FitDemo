from django.urls import path
from api import views


urlpatterns = [
                  path('catalogs/', views.CatalogList.as_view()),
                  path('catalogs/<int:pk>/', views.CatalogInfo.as_view()),
                  path('catalogs/<int:pk>/magazines/', views.MagazineList.as_view()),
                  path('catalogs/<int:pk>/magazines/<int:pk2>/', views.MagazineInfo.as_view()),
                  path('catalogs/<int:pk>/magazines/<int:pk2>/comments/', views.MagazineComment.as_view()),
                  path('login/', views.login),
                  path('logout/', views.logout),
                  path('signup/', views.create_user),
                  path('users/', views.UserList.as_view()),
                  path('developers/', views.Developers.as_view()),
                  path('developers/<int:pk>/', views.DeveloperInfo.as_view()),
                  path('basket/', views.BasketList.as_view()),
                  path('favorites/', views.FavoritesList.as_view()),
                  path('userfoods/<int:pk>/', views.UsersFoodList.as_view()),
                  path('allmagazines/', views.AllMagazinesList.as_view()),
                  path('send/', views.Message.as_view()),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
