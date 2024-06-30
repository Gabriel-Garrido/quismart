from django.contrib import admin
from .models import Student, Evaluator, Station, Question, Evaluation, EvaluationStation, Score

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'registration_number', 'email')
    search_fields = ('name', 'last_name', 'registration_number', 'email')
    list_filter = ('last_name',)
    ordering = ('last_name', 'name')

@admin.register(Evaluator)
class EvaluatorAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'specialty', 'email')
    search_fields = ('name', 'last_name', 'specialty', 'email')
    list_filter = ('specialty',)
    ordering = ('last_name', 'name')

@admin.register(Station)
class StationAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'evaluator')
    search_fields = ('name', 'description')
    list_filter = ('evaluator',)
    ordering = ('name',)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ('text', 'station')
    search_fields = ('text',)
    list_filter = ('station',)
    ordering = ('station', 'id')

@admin.register(Evaluation)
class EvaluationAdmin(admin.ModelAdmin):
    list_display = ('date', 'duration', 'type')
    search_fields = ('date', 'type')
    list_filter = ('date', 'type')
    ordering = ('date',)

@admin.register(EvaluationStation)
class EvaluationStationAdmin(admin.ModelAdmin):
    list_display = ('evaluation', 'station')
    search_fields = ('evaluation', 'station')
    list_filter = ('evaluation', 'station')
    ordering = ('evaluation', 'station')

@admin.register(Score)
class ScoreAdmin(admin.ModelAdmin):
    list_display = ('student', 'evaluation', 'station', 'score')
    search_fields = ('student__name', 'evaluation__date', 'station__name', 'score')
    list_filter = ('student', 'evaluation', 'station')
    ordering = ('student', 'evaluation', 'station')
