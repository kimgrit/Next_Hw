from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=200)
    content= models.TextField()
    category = models.CharField(max_length=30) #카테고리명
    created_at = models.DateTimeField(auto_now_add=True)  #만든 시간

    def __str__(self):
        return self.title

class Comment(models.Model):
    article= models.ForeignKey(Article, on_delete=models.CASCADE, related_name='comments')
    content=models.TextField()
    
    def __str__(self):
        return self.content
    
class Recomment(models.Model):
    comment= models.ForeignKey(Comment, on_delete=models.CASCADE, related_name='recomments')
    content=models.TextField()
    
    def __str__(self):
        return self.content