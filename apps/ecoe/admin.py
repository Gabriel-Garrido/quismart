from django.contrib import admin
from .models import Estudiante, Evaluador, Estacion, Pregunta, Evaluacion, EvaluacionEstacion, Puntaje

@admin.register(Estudiante)
class EstudianteAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'matricula', 'email')
    search_fields = ('nombre', 'apellido', 'matricula', 'email')
    list_filter = ('apellido',)
    ordering = ('apellido', 'nombre')

@admin.register(Evaluador)
class EvaluadorAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'especialidad', 'email')
    search_fields = ('nombre', 'apellido', 'especialidad', 'email')
    list_filter = ('especialidad',)
    ordering = ('apellido', 'nombre')

@admin.register(Estacion)
class EstacionAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion', 'evaluador')
    search_fields = ('nombre', 'descripcion')
    list_filter = ('evaluador',)
    ordering = ('nombre',)

@admin.register(Pregunta)
class PreguntaAdmin(admin.ModelAdmin):
    list_display = ('texto', 'estacion')
    search_fields = ('texto',)
    list_filter = ('estacion',)
    ordering = ('estacion', 'id')

@admin.register(Evaluacion)
class EvaluacionAdmin(admin.ModelAdmin):
    list_display = ('fecha', 'duracion', 'tipo')
    search_fields = ('fecha', 'tipo')
    list_filter = ('fecha', 'tipo')
    ordering = ('fecha',)

@admin.register(EvaluacionEstacion)
class EvaluacionEstacionAdmin(admin.ModelAdmin):
    list_display = ('evaluacion', 'estacion')
    search_fields = ('evaluacion', 'estacion')
    list_filter = ('evaluacion', 'estacion')
    ordering = ('evaluacion', 'estacion')

@admin.register(Puntaje)
class PuntajeAdmin(admin.ModelAdmin):
    list_display = ('estudiante', 'evaluacion', 'estacion', 'puntaje')
    search_fields = ('estudiante__nombre', 'evaluacion__fecha', 'estacion__nombre', 'puntaje')
    list_filter = ('estudiante', 'evaluacion', 'estacion')
    ordering = ('estudiante', 'evaluacion', 'estacion')
