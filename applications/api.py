from applications.models import application
from rest_framework import viewsets, permissions
from .serializers import applicationSerializer

# application Viewset
class applicationViewSet(viewsets.ModelViewSet):
    queryset = application.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = applicationSerializer