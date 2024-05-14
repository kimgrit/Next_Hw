from django.shortcuts import render, redirect
from .models import Article, Comment, Recomment

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


# def detail(request, article_id):
#     article = Article.objects.get(pk = article_id)  #변수니까 {{ }} 로 할 필요없음 그건 html에서 하면 된다!
    
#     if request.method == 'POST':
#         content = request.POST['content']  #댓글 또는 대댓글의 내용을 가져 옴
#         comment_type = request.POST.get('type', 'comment')  # 'type' 필드(html의 value)로 댓글과 대댓글 구분, 없으면 기본값 comment
    
#         if comment_type == 'comment':
#             Comment.objects.create(
#             article=article, 
#             content=content)
#         elif comment_type == 'recomment':
#             comment_id= request.POST.get('comment_id') # 대댓글의 경우 어떤 댓글에 종속되는지
#             parent_comment = Comment.objects.get(pk=comment_id)
#             Recomment.objects.create(comment=parent_comment, content=content)
    
#         return redirect('detail', article_id) #처리 완료 후 상세페이지 새로고심 하는 효과

#     return render(request, 'detail.html', {'article': article})


def detail(request, article_id):
    article = Article.objects.get(pk=article_id)

    if request.method == 'POST':
        # 댓글 처리
        if 'content' in request.POST:
            content = request.POST['content']
            Comment.objects.create(
                article=article,
                content=content
            )
            return redirect('detail', article_id)

        # 답글 처리
        elif 'reply_content' in request.POST:
            comment_id = request.POST['comment_id']
            content = request.POST['reply_content']
            comment = Comment.objects.get(pk=comment_id) 
            Recomment.objects.create(
                comment=comment,
                content=content
            )
            return redirect('detail', article_id)

    return render(request, 'detail.html', {'article': article})


def category(request, category):
    articles = Article.objects.filter(category=category)
    total_articles = articles.count()  # 해당 카테고리에 속하는 글의 총 개수
    return render(request, 'category.html', {'articles': articles, 'category': category, 'total_articles': total_articles})

def delete(request, article_id):
    article = Article.objects.get(pk = article_id)  #변수니까 {{ }} 로 할 필요없음 그건 html에서 하면 된다!
    #article = Article.objects.all()
    article.delete()  # 글 삭제하기
    return redirect('list')

def base(request):
    return render(request, 'base.html')