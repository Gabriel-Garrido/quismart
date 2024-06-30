# apps/ecoe/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    StudentViewSet,
    EvaluatorViewSet,
    StationViewSet,
    QuestionViewSet,
    EvaluationViewSet,
    EvaluationStationViewSet,
    ScoreViewSet,
    cargar_datos_prueba  # Importa la nueva vista
)

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'evaluators', EvaluatorViewSet)
router.register(r'stations', StationViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'evaluations', EvaluationViewSet)
router.register(r'evaluation-stations', EvaluationStationViewSet)
router.register(r'scores', ScoreViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('cargar-datos-prueba/', cargar_datos_prueba),  # Nueva URL para cargar datos de prueba en 'http://127.0.0.1:8000/api/ecoe/cargar-datos-prueba/'
]
