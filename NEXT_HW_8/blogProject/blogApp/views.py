from django.shortcuts import render, redirect
from .models import Article

# Create your views here.
def new(request):
    if request.method == 'POST':
        print(request.POST)
        new_article = Article.objects.create(
            title=request.POST['title'],
            content=request.POST['content'],
            category = request.POST['category'],
            
        )
        return redirect('list')
    return render(request,'new.html',{'categories': ['취미','음식','프로그래밍']})

                
def list(request):
    three_categories = ['취미','음식','프로그래밍']
    category_counts = {}
    
    for category in three_categories:  #category_counts라는 딕셔너리 생성 -> 여기에 각 카테고리별 개수를 담는다.
        category_counts[category] = Article.objects.filter(category=category).count()
        
    total_articles = Article.objects.count()  
    articles = Article.objects.all()  # 모든 글 불러오기
    return render(request, 'list.html', {'three_categories': three_categories, 'category_counts': category_counts, 'total_articles': total_articles, 'articles': articles})


def detail(request, article_id):
    article = Article.objects.get(pk = article_id)  #변수니까 {{ }} 로 할 필요없음 그건 html에서 하면 된다!
    return render(request, 'detail.html', {'article': article})

def category(request, category):
    articles = Article.objects.filter(category=category)
    total_articles = articles.count()  # 해당 카테고리에 속하는 글의 총 개수
    return render(request, 'category.html', {'articles': articles, 'category': category, 'total_articles': total_articles})