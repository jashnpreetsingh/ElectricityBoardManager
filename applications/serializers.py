from rest_framework import  serializers
from applications.models import application


#ApplicationSerializer
class applicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = application
        fields = '__all__'