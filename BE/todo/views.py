from django.shortcuts import render
from django.http import JsonResponse

#from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ToDoSerializer

from .models import ToDo

@api_view(['GET'])
def todoOverview(request):
    api_urls = {
        'List':'/todo-list/',
        'Detail':'/todo-detail/<str:pk>/',
        'Create':'/todo-create/',
        'Update':'/todo-update/<str:pk>/',
        'Delete':'/todo-delete/<str:pk>/',
    }
    return Response(api_urls)

@api_view(['GET'])
def todoList(request):
    todo = ToDo.objects.all()
    serializer = ToDoSerializer(todo, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def todoDetail(request, pk):
    todo = ToDo.objects.get(id=pk)
    serializer = ToDoSerializer(todo, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def todoCreate(request):
    serializer = ToDoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def todoUpdate(request, pk):
    todo = ToDo.objects.get(id=pk)
    serializer = ToDoSerializer(instance=todo, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def todoDelete(request, pk):
    todo = ToDo.objects.get(id=pk)
    todo.delete()
    return Response('ToDo delete')

#class ToDoListView(generics.ListAPIView):
#    serializer_class = ToDoSerializer
#    queryset = ToDo.objects.all()