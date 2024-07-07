from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    StudentViewSet, StationViewSet, EvaluationGroupViewSet, EvaluationStationViewSet, 
    StudentDetailView, EvaluationStationByStudentView, EvaluationStationByGroupView,
    EvaluationGroupByStudentView, EvaluationStationByStudentAndGroupView
)

router = DefaultRouter()
router.register(r'students', StudentViewSet)
router.register(r'stations', StationViewSet)
router.register(r'evaluation-groups', EvaluationGroupViewSet)
router.register(r'evaluation-stations', EvaluationStationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('students/<int:id>/', StudentDetailView.as_view(), name='student-detail'),
    path('students/<int:student_id>/evaluations/', EvaluationStationByStudentView.as_view(), name='student-evaluation-stations'),
    path('evaluation-groups/<int:group_id>/evaluations/', EvaluationStationByGroupView.as_view(), name='group-evaluation-stations'),
    path('students/<int:student_id>/evaluation-groups/', EvaluationGroupByStudentView.as_view(), name='student-evaluation-groups'),
    path('students/<int:student_id>/evaluation-groups/<int:group_id>/evaluations/', EvaluationStationByStudentAndGroupView.as_view(), name='student-group-evaluation-stations')
]
