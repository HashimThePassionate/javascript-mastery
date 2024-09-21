from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer
from django.shortcuts import render

class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

def index(request):
    return render(request, 'index.html')
