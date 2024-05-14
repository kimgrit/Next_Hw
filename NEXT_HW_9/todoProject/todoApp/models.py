from django.db import models
from datetime import date
from django.utils import timezone

# Create your models here.
class Post(models.Model):
    title =  models.CharField(max_length=100)
    content = models.TextField()
    due_date = models.DateField(null=True, default=date.today)
    completed = models.BooleanField(default=None)  #완료, 미완료 체크항목
    
    def __str__(self): 
        return f'{self.title} - {self.due_date} - {self.completed}' #str은 이렇게 여러개 입력
