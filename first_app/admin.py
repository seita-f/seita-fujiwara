from django import forms
from django.contrib import admin
from .models import Profile, Company, Experience, Project, ProjectImage, Competition

# Experience admin
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('company', 'title', 'tag_list')
    list_filter = ('company',)
    
    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related('tags')

    def tag_list(self, obj):
        return u", ".join(o.name for o in obj.tags.all())

# Inline for ProjectImage
class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1  

# Project admin
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'tag_list')
    inlines = [ProjectImageInline]  # ProjectImage

    def get_queryset(self, request):
        return super().get_queryset(request).prefetch_related('tags')

    def tag_list(self, obj):
        return u", ".join(o.name for o in obj.tags.all())
    

# Register models in admin
admin.site.register(Profile)
admin.site.register(Company)
admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Competition)

