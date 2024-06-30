# apps/ecoe/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    EstudianteViewSet,
    EvaluadorViewSet,
    EstacionViewSet,
    PreguntaViewSet,
    EvaluacionViewSet,
    EvaluacionEstacionViewSet,
    PuntajeViewSet,
    cargar_datos_prueba  # Importa la nueva vista
)

router = DefaultRouter()
router.register(r'estudiantes', EstudianteViewSet)
router.register(r'evaluadores', EvaluadorViewSet)
router.register(r'estaciones', EstacionViewSet)
router.register(r'preguntas', PreguntaViewSet)
router.register(r'evaluaciones', EvaluacionViewSet)
router.register(r'evaluacion-estaciones', EvaluacionEstacionViewSet)
router.register(r'puntajes', PuntajeViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('cargar-datos-prueba/', cargar_datos_prueba),  # Nueva URL para cargar datos de prueba en 'http://127.0.0.1:8000/api/ecoe/cargar-datos-prueba/'
]
