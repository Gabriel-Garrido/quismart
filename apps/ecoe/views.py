# src/ecoe/views.py

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Estudiante, Evaluador, Estacion, Pregunta, Evaluacion, EvaluacionEstacion, Puntaje
from .serializers import (
    EstudianteSerializer,
    EvaluadorSerializer,
    EstacionSerializer,
    PreguntaSerializer,
    EvaluacionSerializer,
    EvaluacionEstacionSerializer,
    PuntajeSerializer
)
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.core.management import call_command

@api_view(['GET'])
def cargar_datos_prueba(request):
    """
    Vista para cargar datos de prueba desde un fixture.
    """
    call_command('loaddata', 'initial_data.json')
    return Response({"detail": "Datos de prueba cargados exitosamente."})

class EstudianteViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows students to be viewed or edited.
    """
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer


class EvaluadorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows evaluators to be viewed or edited.
    """
    queryset = Evaluador.objects.all()
    serializer_class = EvaluadorSerializer


class EstacionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows stations to be viewed or edited.
    """
    queryset = Estacion.objects.all()
    serializer_class = EstacionSerializer


class PreguntaViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Pregunta.objects.all()
    serializer_class = PreguntaSerializer


class EvaluacionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows evaluations to be viewed or edited.
    """
    queryset = Evaluacion.objects.all()
    serializer_class = EvaluacionSerializer

    @action(detail=True, methods=['get'])
    def estudiantes(self, request, pk=None):
        """
        Custom action to retrieve all students associated with an evaluation.
        """
        evaluacion = self.get_object()
        estudiantes = evaluacion.estudiantes.all()
        serializer = EstudianteSerializer(estudiantes, many=True)
        return Response(serializer.data)

class EvaluacionEstacionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows evaluation-station relations to be viewed or edited.
    """
    queryset = EvaluacionEstacion.objects.all()
    serializer_class = EvaluacionEstacionSerializer


class PuntajeViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows scores to be viewed or edited.
    """
    queryset = Puntaje.objects.all()
    serializer_class = PuntajeSerializer

    def create(self, request, *args, **kwargs):
        """
        Override create method to ensure unique constraint on (estudiante, evaluacion, estacion).
        """
        estudiante = request.data.get('estudiante')
        evaluacion = request.data.get('evaluacion')
        estacion = request.data.get('estacion')

        if Puntaje.objects.filter(estudiante=estudiante, evaluacion=evaluacion, estacion=estacion).exists():
            return Response({"detail": "Puntaje for this combination already exists."}, status=status.HTTP_400_BAD_REQUEST)

        return super().create(request, *args, **kwargs)
