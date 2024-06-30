from django.db import models

class Student(models.Model):
    """
    Modelo para almacenar información de los students.
    """
    name = models.CharField(max_length=100, verbose_name="Name")
    last_name = models.CharField(max_length=100, verbose_name="last_name")
    registration_number = models.CharField(max_length=20, unique=True, verbose_name="Registration_number")
    email = models.EmailField(max_length=50, null=False, blank=False, verbose_name="Email")

    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "Students"
        ordering = ['last_name', 'name']

    def __str__(self):
        return f'{self.name} {self.last_name}'


class Evaluator(models.Model):
    """
    Modelo para almacenar información de los evaluators.
    """
    name = models.CharField(max_length=100, verbose_name="Name")
    last_name = models.CharField(max_length=100, verbose_name="last_name")
    specialty = models.CharField(max_length=100, verbose_name="Specialty")
    email = models.EmailField(max_length=50, null=False, blank=False, verbose_name="Email")

    class Meta:
        verbose_name = "Evaluator"
        verbose_name_plural = "Evaluators"
        ordering = ['last_name', 'name']

    def __str__(self):
        return f'{self.name} {self.last_name}'


class Station(models.Model):
    """
    Modelo para almacenar información de las stations.
    """
    name = models.CharField(max_length=100, verbose_name="Name")
    description = models.TextField(verbose_name="Description")
    evaluator = models.ForeignKey(Evaluator, on_delete=models.CASCADE, related_name='stations', verbose_name="Evaluator")

    class Meta:
        verbose_name = "Station"
        verbose_name_plural = "Stations"
        ordering = ['name']

    def __str__(self):
        return self.name


class Question(models.Model):
    """
    Modelo para almacenar información de las questions de cada estación.
    """
    text = models.TextField(verbose_name="Text de la question")
    station = models.ForeignKey(Station, related_name='questions', on_delete=models.CASCADE, verbose_name="Station")

    class Meta:
        verbose_name = "Question"
        verbose_name_plural = "Questions"
        ordering = ['station', 'id']

    def __str__(self):
        return self.text[:50]


class Evaluation(models.Model):
    """
    Modelo para almacenar información de las evaluations.
    """
    date = models.DateField(verbose_name="Date de la evaluation")
    duration = models.DurationField(null=True, blank=True, verbose_name="Duration")
    type = models.CharField(max_length=50, null=True, blank=True, verbose_name="Type de evaluation")
    students = models.ManyToManyField(Student, through='Score', related_name='evaluations')
    stations = models.ManyToManyField(Station, through='EvaluationStation', related_name='evaluations')

    class Meta:
        verbose_name = "Evaluation"
        verbose_name_plural = "Evaluations"
        ordering = ['date']

    def __str__(self):
        return f'Evaluation {self.type} - {self.date}'


class EvaluationStation(models.Model):
    """
    Modelo intermedio para representar la relación entre Evaluation y Station.
    """
    evaluation = models.ForeignKey(Evaluation, on_delete=models.CASCADE, verbose_name="Evaluation")
    station = models.ForeignKey(Station, on_delete=models.CASCADE, verbose_name="Station")

    class Meta:
        verbose_name = "Evaluation-Station"
        verbose_name_plural = "Evaluations-Stations"
        unique_together = ('evaluation', 'station')

    def __str__(self):
        return f'{self.evaluation} - {self.station}'


class Score(models.Model):
    """
    Modelo para almacenar los scores de los students en cada estación de una evaluation.
    """
    student = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name="Student")
    evaluation = models.ForeignKey(Evaluation, on_delete=models.CASCADE, verbose_name="Evaluation")
    station = models.ForeignKey(Station, on_delete=models.CASCADE, verbose_name="Station")
    score = models.DecimalField(max_digits=5, decimal_places=2, verbose_name="Score")
    comment = models.TextField(null=True, blank=True, verbose_name="Comment")
    feedback = models.TextField(null=True, blank=True, verbose_name="Feedback")

    class Meta:
        verbose_name = "Score"
        verbose_name_plural = "Scores"
        unique_together = ('student', 'evaluation', 'station')
        ordering = ['student', 'evaluation', 'station']

    def __str__(self):
        return f'{self.student} - {self.evaluation} - {self.station}: {self.score}'
