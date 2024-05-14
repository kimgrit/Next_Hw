from django.shortcuts import render,redirect
from .models import Post
from django.utils import timezone
from datetime import date



# Create your views here.
def home(request):
    posts = Post.objects.all().order_by('due_date') #정렬은 데이터 건드리지말고 뷰에서 접근해야 좋다
    today =timezone.now().date() #DateField type != datetime type이라 date()변환해줘야 함
    for post in posts:
        d_day = (post.due_date - today).days #일수계산
        if d_day == 0:
            post.d_day = "-Day"
        elif d_day < 0:
            d_day =  -1 * d_day
            post.d_day = f"+{d_day}"
        else:
            post.d_day = f"-{d_day}"
        
    return render(request, 'home.html', {'posts': posts, 'today': today}) #하나의 딕셔너리로. 변수 html에서 쓰고 싶은건 view에서

def new(request):
    if request.method == 'POST':
        due_date = request.POST.get('due_date') or date.today()  # 만약 due_date가 비어있으면 현재 시간으로 설정
        Post.objects.create(
            title=request.POST['title'],
            content=request.POST['content'],
            due_date=due_date,
            completed = request.POST.get('completed', False)  # completed 값이 없으면 기본값 False로 설정
        )
    return render(request, 'new.html')          

def detail(request, post_pk):
    post = Post.objects.get(pk=post_pk)
    return render(request, 'detail.html', {'post': post})

def update(request, post_pk):
    post = Post.objects.get(pk=post_pk)


    if request.method == 'POST': 
        Post.objects.filter(pk=post_pk).update(
        title = request.POST['title'],
        content = request.POST['content'],
        due_date = request.POST.get('due_date') or date.today()  # 만약 due_date가 비어있으면 현재 시간으로 설정        )
        )
        return redirect('detail', post_pk)
    
    return render(request, 'update.html', {'post': post})

def delete(request, post_pk):
    post = Post.objects.get(pk=post_pk) 
    post.delete()
    return redirect('home')