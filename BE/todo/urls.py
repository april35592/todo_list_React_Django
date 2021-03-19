#from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
#    path('', views.ToDoListView.as_view(), name='todo'),
    path('', views.todoOverview, name='overview'),
    path('list/', views.todoList, name='list'),
    path('detail/<str:pk>/', views.todoDetail, name='detail'),
    path('create/', views.todoCreate, name='create'),
    path('update/<str:pk>/', views.todoUpdate, name='update'),
    path('delete/<str:pk>/', views.todoDelete, name='delete'),
]