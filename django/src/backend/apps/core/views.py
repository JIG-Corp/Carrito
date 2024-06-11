from django.shortcuts import render
from apps.core.models import Saludo

def index(request):
    template_name = "index.html"
    context = {}    
    context["saludo"] = Saludo.objects.get(pk=1)
    return render(request, template_name, context)