from apps.core.models import Producto
from apps.core.serializers import ProductoSerializer
from django.http import Http404


def get_name(i=None):
    if i is not None:
        try:
            i = int(i)
            p = Producto.objects.get(id=i)
            return ProductoSerializer(p).data
        except Exception as e:
            print(e)
            raise Http404
    else:
        raise Http404


def traer_producto(request):
    p = Producto.objects.all()
    return ProductoSerializer(p, context={"request": request}, many=True).data


def guardar_producto(kwargs):
    if 'nombre' in kwargs and kwargs.get('nombre') != "" and type(kwargs.get('nombre')) == str:
        p = Producto.objects.create(nombre=kwargs.get('nombre'))
        p.descripcion = kwargs.get('descripcion') if 'descripcion' in kwargs else None
        p.categoria = kwargs.get('categoria') if 'categoria' in kwargs else None
        p.precio = kwargs.get('precio') if 'precio' in kwargs else None
        p.save()
        return True
    else:
        return False


def modificar_producto(datos):
    if 'identificador' in datos and datos.get('identificador') != "" and type(datos.get('identificador')) == str:
        p = Producto.objects.get(id=int(datos.get('identificador')))
        p.nombre = datos.get('nombre') if 'nombre' in datos else None
        p.f_nacimiento = datos.get('f_nacimiento') if 'f_nacimiento' in datos else None
        p.ciudad = datos.get('ciudad') if 'ciudad' in datos else None
        p.avatar = datos.get('avatar') if 'avatar' in datos else None
        p.save()
        return True
    else:
        return False


def borrar_producto(i=None):
    if i is not None:
        try:
            i = int(i)
            Producto.objects.get(id=i).delete()
            return True
        except Exception as e:
            print(e)
            raise Http404
    else:
        raise Http404
