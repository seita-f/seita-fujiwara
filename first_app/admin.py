from django.contrib import admin
from .models import Profile, Company, Experience, Project, ProjectImage, Competition
from django.utils.html import format_html

# Profile admin
class ProfileAdmin(admin.ModelAdmin):
    list_display = ('bio', 'profile_picture')


# ProjectImage inline (to link images with a project)
class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1


# Project admin
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')
    inlines = [ProjectImageInline]  # Allow multiple images


# Company admin
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'start_date', 'end_date')

    # def display_end_date(self, obj):
    #     if obj.end_date is None:
    #         return format_html('<span style="color: green;">Current</span>')  # null の場合 "Current"
    #     return obj.end_date  # 通常の日付を表示

    # display_end_date.short_description = 'End Date'  # 管理画面でのカラム名


# Experience admin
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('company',)
    list_filter = ('company',)  # add filter on admin UI


# Register models in admin
admin.site.register(Profile, ProfileAdmin)
admin.site.register(Company, CompanyAdmin)
admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Competition)  # Independent