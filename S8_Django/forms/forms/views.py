from django.shortcuts import render
from . import machine_learning_model as mlm

def home(request):
    return render(request, 'index.html')

def result(request):
    user_input = request.GET['user_input']
    user_input = mlm.multiplier(user_input)
    return render(request, 'result.html', {'home_input' : user_input})
