from django.db import models

class Student(models.Model):
    """
    Model to store student information.
    """
    name = models.CharField(max_length=100, verbose_name="Name")
    last_name = models.CharField(max_length=100, verbose_name="Last Name")
    registration_number = models.CharField(max_length=20, unique=True, verbose_name="Registration Number")
    email = models.EmailField(max_length=50, verbose_name="Email")

    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "Students"
        ordering = ['last_name', 'name']

    def __str__(self):
        return f'{self.name} {self.last_name}'

class Station(models.Model):
    """
    Model to store station information.
    """
    name = models.CharField(max_length=100, verbose_name="Name")
    description = models.TextField(verbose_name="Description")

    class Meta:
        verbose_name = "Station"
        verbose_name_plural = "Stations"
        ordering = ['name']

    def __str__(self):
        return self.name

class EvaluationGroup(models.Model):
    """
    Model to store information about evaluation groups.
    """
    date = models.DateField(verbose_name="Date")
    duration = models.DurationField(null=True, blank=True, verbose_name="Duration")
    type = models.CharField(max_length=50, null=True, blank=True, verbose_name="Type")
    students = models.ManyToManyField(Student, related_name='evaluation_groups')
    stations = models.ManyToManyField(Station, related_name='evaluation_groups')

    class Meta:
        verbose_name = "Evaluation Group"
        verbose_name_plural = "Evaluation Groups"
        ordering = ['date']

    def __str__(self):
        return f'Evaluation Group {self.type} - {self.date}'

class EvaluationStation(models.Model):
    """
    Intermediate model to represent the relationship between Evaluation and Station.
    """
    evaluation_group = models.ForeignKey(EvaluationGroup, on_delete=models.CASCADE, verbose_name="Evaluation Group")
    station = models.ForeignKey(Station, on_delete=models.CASCADE, verbose_name="Station")
    student = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name="Student")
    station_score = models.FloatField(default=0, verbose_name="Station Score")
    station_comment = models.TextField(null=True, blank=True, verbose_name="Station Comment")

    class Meta:
        verbose_name = "Evaluation Station"
        verbose_name_plural = "Evaluation Stations"
        unique_together = ('evaluation_group', 'station', 'student')

    def __str__(self):
        return f'{self.student.name} - {self.station_score} - {self.evaluation_group} - {self.station}'
