from functools import wraps
from django.shortcuts import get_object_or_404, render
from django.utils import timezone
from .models import Post


def update_last_accessed(func):
    @wraps(func)
    def wrapper(request, *args, **kwargs):
        post_id = kwargs.get('id')
        if post_id and request.user.is_authenticated:
            post = Post.objects.get(id=post_id)
            post.last_time = timezone.now()
            post.last_user = request.user
            post.save()
        return func(request, *args, **kwargs)
    return wrapper