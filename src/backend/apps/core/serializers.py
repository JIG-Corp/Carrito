from rest_framework import serializers
from apps.core.models import Producto

class ProductoSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    nombre = serializers.CharField() 
    descripcion=serializers.CharField()
    categoria = serializers.CharField()
    precio = serializers.FloatField()
    class Meta:
        model = Producto