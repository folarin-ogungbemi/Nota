from django.shortcuts import render
from django.http import JsonResponse
from api.models import Notes
from rest_framework.response import Response
from rest_framework.decorators import api_view

# import notes
from .models import Notes
from .serializers import NoteSerializer


@api_view(['GET'])
def getNotes(request):
    # get the data from the DB
    notes = Notes.objects.all()
    # Next we have to serialize the data 
    # from python object to a json format for trasfer purposes
    # 'many' specifies that we are serializing many objects
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getNote(request, pk):
    note = Notes.objects.get(id=pk)
    # 'many' specifies that we are serializing one object
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)

# PUT is for partial update of items
@api_view(['PUT'])
def updateNote(request, pk):
    data = request.data
    note = Notes.objects.get(id=pk)
    serializer = NoteSerializer(instance=note, data=data)
    
    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)