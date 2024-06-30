from rest_framework import serializers
from .models import Estudiante, Evaluador, Estacion, Pregunta, Evaluacion, EvaluacionEstacion, Puntaje

class EstudianteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estudiante
        fields = ['id', 'nombre', 'apellido', 'matricula', 'email']

class EvaluadorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Evaluador
        fields = ['id', 'nombre', 'apellido', 'especialidad', 'email']
        
class PreguntaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pregunta
        fields = ['id', 'texto', 'estacion']

class EstacionSerializer(serializers.ModelSerializer):
    evaluador = EvaluadorSerializer(read_only=True)
    preguntas = PreguntaSerializer(many=True, read_only=True)

    class Meta:
        model = Estacion
        fields = ['id', 'nombre', 'descripcion', 'evaluador', 'preguntas']

class EvaluacionEstacionSerializer(serializers.ModelSerializer):
    estacion = EstacionSerializer(read_only=True)

    class Meta:
        model = EvaluacionEstacion
        fields = ['id', 'evaluacion', 'estacion']

class EvaluacionSerializer(serializers.ModelSerializer):
    estaciones = EvaluacionEstacionSerializer(source='evaluacionestacion_set', many=True, read_only=True)
    estudiantes = EstudianteSerializer(many=True, read_only=True)

    class Meta:
        model = Evaluacion
        fields = ['id', 'fecha', 'duracion', 'tipo', 'estaciones', 'estudiantes']

class PuntajeSerializer(serializers.ModelSerializer):
    estudiante = EstudianteSerializer(read_only=True)
    evaluacion = EvaluacionSerializer(read_only=True)
    estacion = EstacionSerializer(read_only=True)

    class Meta:
        model = Puntaje
        fields = ['id', 'estudiante', 'evaluacion', 'estacion', 'puntaje', 'comentario', 'feedback']
