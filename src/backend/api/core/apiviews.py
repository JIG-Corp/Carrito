from tokenize import Token
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from apps.core import utils


class Producto(APIView):
    def get(self, request, producto_id):
        response = utils.get_name(producto_id)
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)

    def post(self, request, format='json'):
        saved = utils.guardar_producto(request.data)
        status_code = status.HTTP_200_OK if saved else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)

    def put(self, request, format='json'):
        saved = utils.modificar_producto(request.data)
        status_code = status.HTTP_200_OK if saved else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)

    def delete(self, resquest, producto_id):
        deleted = utils.borrar_producto(producto_id)
        status_code = status.HTTP_200_OK if deleted else status.HTTP_404_NOT_FOUND
        return Response(status=status_code)


class ListProducto(APIView):
    def get(self, request):
        response = utils.traer_producto(request)
        status_code = status.HTTP_404_NOT_FOUND if not response else status.HTTP_200_OK
        return Response(response, status_code)
