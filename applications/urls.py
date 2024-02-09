from rest_framework import routers
from .api import applicationViewSet

router =  routers.DefaultRouter()
router.register('api/applications', applicationViewSet, 'applications')

urlpatterns = router.urls