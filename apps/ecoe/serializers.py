from rest_framework import serializers
from .models import Student, Evaluator, Station, Question, Evaluation, EvaluationStation, Score

class EvaluatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluator
        fields = ['id', 'name', 'last_name', 'specialty', 'email']

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'text']

class StationSerializer(serializers.ModelSerializer):
    evaluator = EvaluatorSerializer(read_only=True)
    questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Station
        fields = ['id', 'name', 'description', 'evaluator', 'questions']

class EvaluationStationSerializer(serializers.ModelSerializer):
    station = StationSerializer(read_only=True)

    class Meta:
        model = EvaluationStation
        fields = ['id', 'evaluation', 'station']

class EvaluationSerializer(serializers.ModelSerializer):
    stations = EvaluationStationSerializer(source='evaluationstation_set', many=True, read_only=True)
    students = serializers.StringRelatedField(many=True, read_only=True)

    class Meta:
        model = Evaluation
        fields = ['id', 'date', 'duration', 'type', 'stations', 'students']

class ScoreDetailSerializer(serializers.ModelSerializer):
    evaluation = EvaluationSerializer(read_only=True)
    station = StationSerializer(read_only=True)

    class Meta:
        model = Score
        fields = ['id', 'evaluation', 'station', 'score', 'comment', 'feedback']

class StudentSerializer(serializers.ModelSerializer):
    scores = ScoreDetailSerializer(source='score_set', many=True, read_only=True)

    class Meta:
        model = Student
        fields = ['id', 'name', 'last_name', 'registration_number', 'email', 'scores']

class ScoreSerializer(serializers.ModelSerializer):
    student = StudentSerializer(read_only=True)
    evaluation = EvaluationSerializer(read_only=True)
    station = StationSerializer(read_only=True)

    class Meta:
        model = Score
        fields = ['id', 'student', 'evaluation', 'station', 'score', 'comment', 'feedback']
