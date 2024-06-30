# src/ecoe/views.py

from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Student, Evaluator, Station, Question, Evaluation, EvaluationStation, Score
from .serializers import (
    StudentSerializer,
    EvaluatorSerializer,
    StationSerializer,
    QuestionSerializer,
    EvaluationSerializer,
    EvaluationStationSerializer,
    ScoreSerializer
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

class StudentViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows students to be viewed or edited.
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class EvaluatorViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows evaluators to be viewed or edited.
    """
    queryset = Evaluator.objects.all()
    serializer_class = EvaluatorSerializer


class StationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows stations to be viewed or edited.
    """
    queryset = Station.objects.all()
    serializer_class = StationSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class EvaluationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows evaluations to be viewed or edited.
    """
    queryset = Evaluation.objects.all()
    serializer_class = EvaluationSerializer

    @action(detail=True, methods=['get'])
    def students(self, request, pk=None):
        """
        Custom action to retrieve all students associated with an evaluation.
        """
        evaluation = self.get_object()
        students = evaluation.students.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

class EvaluationStationViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows evaluation-station relations to be viewed or edited.
    """
    queryset = EvaluationStation.objects.all()
    serializer_class = EvaluationStationSerializer


class ScoreViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows scores to be viewed or edited.
    """
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer

    def create(self, request, *args, **kwargs):
        """
        Override create method to ensure unique constraint on (student, evaluation, station).
        """
        student = request.data.get('student')
        evaluation = request.data.get('evaluation')
        station = request.data.get('station')

        if Score.objects.filter(student=student, evaluation=evaluation, station=station).exists():
            return Response({"detail": "Score for this combination already exists."}, status=status.HTTP_400_BAD_REQUEST)

        return super().create(request, *args, **kwargs)
