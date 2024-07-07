from rest_framework import serializers
from .models import Student, Station, EvaluationGroup, EvaluationStation

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'name', 'last_name', 'registration_number', 'email']

class StationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Station
        fields = ['id', 'name', 'description']

class EvaluationGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = EvaluationGroup
        fields = ['id', 'date', 'duration', 'type', 'students', 'stations']

class EvaluationStationSerializer(serializers.ModelSerializer):
    student = StudentSerializer()
    station = StationSerializer()
    evaluation_group = EvaluationGroupSerializer()

    class Meta:
        model = EvaluationStation
        fields = ['id', 'evaluation_group', 'station', 'student', 'station_score', 'station_comment']

class StudentDetailSerializer(serializers.ModelSerializer):
    evaluation_stations = EvaluationStationSerializer(many=True, source='evaluationstation_set')

    class Meta:
        model = Student
        fields = ['id', 'name', 'last_name', 'registration_number', 'email', 'evaluation_stations']

class EvaluationStationForStudentSerializer(serializers.ModelSerializer):
    student = StudentSerializer()
    station = StationSerializer()
    evaluation_group = EvaluationGroupSerializer()

    class Meta:
        model = EvaluationStation
        fields = ['id', 'student', 'evaluation_group', 'station', 'station_score', 'station_comment']

class EvaluationStationForGroupSerializer(serializers.ModelSerializer):
    student = StudentSerializer()
    station = StationSerializer()

    class Meta:
        model = EvaluationStation
        fields = ['id', 'student', 'station', 'station_score', 'station_comment']

class EvaluationGroupForStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = EvaluationGroup
        fields = ['id', 'date', 'duration', 'type']
