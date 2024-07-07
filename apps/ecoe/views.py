from rest_framework import viewsets, generics
from .models import Student, Station, EvaluationGroup, EvaluationStation
from .serializers import (
    StudentSerializer, StationSerializer, EvaluationGroupSerializer, EvaluationStationSerializer, 
    StudentDetailSerializer, EvaluationStationForStudentSerializer, EvaluationStationForGroupSerializer,
    EvaluationGroupForStudentSerializer
)

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StationViewSet(viewsets.ModelViewSet):
    queryset = Station.objects.all()
    serializer_class = StationSerializer

class EvaluationGroupViewSet(viewsets.ModelViewSet):
    queryset = EvaluationGroup.objects.all()
    serializer_class = EvaluationGroupSerializer

class EvaluationStationViewSet(viewsets.ModelViewSet):
    queryset = EvaluationStation.objects.all()
    serializer_class = EvaluationStationSerializer

class StudentDetailView(generics.RetrieveAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentDetailSerializer
    lookup_field = 'id'

class EvaluationStationByStudentView(generics.ListAPIView):
    serializer_class = EvaluationStationForStudentSerializer

    def get_queryset(self):
        student_id = self.kwargs['student_id']
        return EvaluationStation.objects.filter(student_id=student_id)

class EvaluationStationByGroupView(generics.ListAPIView):
    serializer_class = EvaluationStationForGroupSerializer

    def get_queryset(self):
        evaluation_group_id = self.kwargs['group_id']
        return EvaluationStation.objects.filter(evaluation_group_id=evaluation_group_id)

class EvaluationGroupByStudentView(generics.ListAPIView):
    serializer_class = EvaluationGroupForStudentSerializer

    def get_queryset(self):
        student_id = self.kwargs['student_id']
        return EvaluationGroup.objects.filter(students__id=student_id)

class EvaluationStationByStudentAndGroupView(generics.ListAPIView):
    serializer_class = EvaluationStationForStudentSerializer

    def get_queryset(self):
        student_id = self.kwargs['student_id']
        group_id = self.kwargs['group_id']
        return EvaluationStation.objects.filter(student_id=student_id, evaluation_group_id=group_id)
