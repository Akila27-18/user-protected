from django.http import JsonResponse

def home(request):
    return JsonResponse({"message": "Backend is running 🚀"})

urlpatterns = [
    path("", home),  # <--- add this
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/protected/", ProtectedView.as_view(), name="protected"),
]
