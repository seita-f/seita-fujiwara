from django.db import models
from datetime import date

# Company model
class Company(models.Model):
    name = models.CharField(max_length=100, default="Defualt Name")
    position = models.CharField(max_length=100, default="Default Position")
    start_date = models.DateField(default=date(2000, 1, 1))
    end_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.name


# Profile model
class Profile(models.Model):
    bio = models.TextField()
    profile_picture = models.ImageField(upload_to='profile_pictures/')  # Only 1 picture

    def __str__(self):
        return self.bio


# Experience model
class Experience(models.Model):
    company = models.ForeignKey(Company, related_name='experiences', on_delete=models.CASCADE, null=True, blank=True)
    title = models.CharField(max_length=100, default="")
    description = models.TextField()

    def __str__(self):
        return f"{self.company.name} - {self.position}"


# Project model
class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title


# ProjectImage model (linked to Project)
class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='project_images/')

    def __str__(self):
        return f"Image for {self.project.title}"


# Competition model
class Competition(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title
