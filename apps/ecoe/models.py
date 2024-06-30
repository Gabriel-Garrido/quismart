from django.db import models

class Estudiante(models.Model):
    """
    Modelo para almacenar información de los estudiantes.
    """
    nombre = models.CharField(max_length=100, verbose_name="Nombre")
    apellido = models.CharField(max_length=100, verbose_name="Apellido")
    matricula = models.CharField(max_length=20, unique=True, verbose_name="Matrícula")
    email = models.EmailField(max_length=50, null=False, blank=False, verbose_name="Rol")

    class Meta:
        verbose_name = "Estudiante"
        verbose_name_plural = "Estudiantes"
        ordering = ['apellido', 'nombre']

    def __str__(self):
        return f'{self.nombre} {self.apellido}'


class Evaluador(models.Model):
    """
    Modelo para almacenar información de los evaluadores.
    """
    nombre = models.CharField(max_length=100, verbose_name="Nombre")
    apellido = models.CharField(max_length=100, verbose_name="Apellido")
    especialidad = models.CharField(max_length=100, verbose_name="Especialidad")
    email = models.EmailField(max_length=50, null=False, blank=False, verbose_name="Rol")

    class Meta:
        verbose_name = "Evaluador"
        verbose_name_plural = "Evaluadores"
        ordering = ['apellido', 'nombre']

    def __str__(self):
        return f'{self.nombre} {self.apellido}'


class Estacion(models.Model):
    """
    Modelo para almacenar información de las estaciones.
    """
    nombre = models.CharField(max_length=100, verbose_name="Nombre")
    descripcion = models.TextField(verbose_name="Descripción")
    evaluador = models.ForeignKey(Evaluador, on_delete=models.CASCADE, related_name='estaciones', verbose_name="Evaluador")

    class Meta:
        verbose_name = "Estación"
        verbose_name_plural = "Estaciones"
        ordering = ['nombre']

    def __str__(self):
        return self.nombre


class Pregunta(models.Model):
    """
    Modelo para almacenar información de las preguntas de cada estación.
    """
    texto = models.TextField(verbose_name="Texto de la pregunta")
    estacion = models.ForeignKey(Estacion, related_name='preguntas', on_delete=models.CASCADE, verbose_name="Estación")

    class Meta:
        verbose_name = "Pregunta"
        verbose_name_plural = "Preguntas"
        ordering = ['estacion', 'id']

    def __str__(self):
        return self.texto[:50]


class Evaluacion(models.Model):
    """
    Modelo para almacenar información de las evaluaciones.
    """
    fecha = models.DateField(verbose_name="Fecha de la evaluación")
    duracion = models.DurationField(null=True, blank=True, verbose_name="Duración")
    tipo = models.CharField(max_length=50, null=True, blank=True, verbose_name="Tipo de evaluación")
    estudiantes = models.ManyToManyField(Estudiante, through='Puntaje', related_name='evaluaciones')
    estaciones = models.ManyToManyField(Estacion, through='EvaluacionEstacion', related_name='evaluaciones')

    class Meta:
        verbose_name = "Evaluación"
        verbose_name_plural = "Evaluaciones"
        ordering = ['fecha']

    def __str__(self):
        return f'Evaluación {self.tipo} - {self.fecha}'


class EvaluacionEstacion(models.Model):
    """
    Modelo intermedio para representar la relación entre Evaluación y Estación.
    """
    evaluacion = models.ForeignKey(Evaluacion, on_delete=models.CASCADE, verbose_name="Evaluación")
    estacion = models.ForeignKey(Estacion, on_delete=models.CASCADE, verbose_name="Estación")

    class Meta:
        verbose_name = "Evaluación-Estación"
        verbose_name_plural = "Evaluaciones-Estaciones"
        unique_together = ('evaluacion', 'estacion')

    def __str__(self):
        return f'{self.evaluacion} - {self.estacion}'


class Puntaje(models.Model):
    """
    Modelo para almacenar los puntajes de los estudiantes en cada estación de una evaluación.
    """
    estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE, verbose_name="Estudiante")
    evaluacion = models.ForeignKey(Evaluacion, on_delete=models.CASCADE, verbose_name="Evaluación")
    estacion = models.ForeignKey(Estacion, on_delete=models.CASCADE, verbose_name="Estación")
    puntaje = models.DecimalField(max_digits=5, decimal_places=2, verbose_name="Puntaje")
    comentario = models.TextField(null=True, blank=True, verbose_name="Comentario")
    feedback = models.TextField(null=True, blank=True, verbose_name="Feedback")

    class Meta:
        verbose_name = "Puntaje"
        verbose_name_plural = "Puntajes"
        unique_together = ('estudiante', 'evaluacion', 'estacion')
        ordering = ['estudiante', 'evaluacion', 'estacion']

    def __str__(self):
        return f'{self.estudiante} - {self.evaluacion} - {self.estacion}: {self.puntaje}'
