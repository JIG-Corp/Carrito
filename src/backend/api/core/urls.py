from django.urls import path
from api.core.apiviews import Producto, ListProducto
urlpatterns = [
    
    path('get/Producto/<producto_id>/', Producto.as_view()),
    path('post/Producto/', Producto.as_view()),
    path('update/Producto/', Producto.as_view()),
    path('delete/Producto/<producto_id>/', Producto.as_view()),
    path('get/list/Producto/', ListProducto.as_view()),
]
