from django.shortcuts import render

# Create your views here.
def count(request):
    #logic here
    return render(request, 'count.html')

def result(request):
    text = request.POST['text']
    total_len = len(text)
    total_len2 = len(text.replace(" ",""))  #replace는 쌍따옴표 써야 한다.
    words = len(text.split(" "))
    return render(request, 'result.html',{'text': text, 'total_len': total_len, 'total_len2' : total_len2, 'words': words})