from django.urls import path
from .views import StudentDetailsView ,StudentListCreateView


urlpatterns = [
    path('students/',StudentListCreateView.as_view(),
    name="student-list-create"),
    path('students/<int:pk>/' , StudentDetailsView.as_view(),
    name ="student-details"),
]