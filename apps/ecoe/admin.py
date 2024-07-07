from django.contrib import admin
from .models import Student, Station, EvaluationGroup, EvaluationStation

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name', 'registration_number', 'email')
    search_fields = ('name', 'last_name', 'registration_number', 'email')
    ordering = ('last_name', 'name')

@admin.register(Station)
class StationAdmin(admin.ModelAdmin):
    list_display = ('name', 'description')
    search_fields = ('name',)
    ordering = ('name',)

@admin.register(EvaluationGroup)
class EvaluationGroupAdmin(admin.ModelAdmin):
    list_display = ('date', 'duration', 'type')
    search_fields = ('type',)
    ordering = ('date',)

@admin.register(EvaluationStation)
class EvaluationStationAdmin(admin.ModelAdmin):
    list_display = ('evaluation_group', 'station', 'student', 'station_score')
    search_fields = ('evaluation_group__type', 'station__name', 'student__name')
    ordering = ('evaluation_group', 'station', 'student')
