from django.shortcuts import render

def bombed_it(success):
    return render(success, "test.html")

def about(request):
    return render(request, "about.html")
