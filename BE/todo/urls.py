#from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
#    path('', views.ToDoListView.as_view(), name='todo'),
    path('', views.todoOverview, name='todo-overview'),
    path('list/', views.todoList, name='todo-list'),
    path('detail/<str:pk>/', views.todoDetail, name='todo-detail'),
    path('create/', views.todoCreate, name='todo-create'),
    path('update/<str:pk>/', views.todoUpdate, name='todo-update'),
    path('delete/<str:pk>/', views.todoDelete, name='todo-delete'),
]