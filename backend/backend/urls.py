from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.http import JsonResponse
from api.views import ProtectedView

def home(request):
    return JsonResponse({"message": "Backend is running 🚀"})

urlpatterns = [
    path("", home),  # root route
    path("admin/", admin.site.urls),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/protected/", ProtectedView.as_view(), name="protected"),
]
