from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.companies),
    path('companies/<int:id>/', views.company_id),
    path('companies/<int:id>/vacancies/', views.company_vacancies),
    path('vacancies/', views.vacancies),
    path('vacancies/<int:id>/', views.vacancy_id),
    path('vacancies/top_ten/', views.vacancies_top_ten)
]
