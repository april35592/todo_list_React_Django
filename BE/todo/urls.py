from django.conf.urls import url
from . import views

urlpatterns = [
    url('', views.ToDoListView.as_view(), name='todo'),
]