from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from django.template import loader


# Create your views here.
def handler404(request, exception, template_name="404.html"):
    response = render_to_response("404.html")
    response.status_code = 404
    return response
