
from django.shortcuts import redirect, render
from .models import Comment, Post
from django.contrib.auth.decorators import login_required
from .accessed import update_last_accessed
from authapp.permissions import check_is_creator_or_admin


def home(request):
    posts = Post.objects.all()

    return render(request, "home.html", {"posts": posts})


@login_required
def new(request):
    if request.method == "POST":
        title = request.POST["title"]
        content = request.POST["content"]

        new_post = Post.objects.create(
            title=title, content=content, creator=request.user
        )
        return redirect("detail", new_post.pk)

    return render(request, "new.html")

@login_required
@update_last_accessed
def detail(request, id):
    post = Post.objects.get(pk=id)

    if request.method == "POST":
        content = request.POST["content"]
        Comment.objects.create(post=post, content=content, creator=request.user)
        return redirect("detail", id)

    return render(request, "detail.html", {"post": post})


@login_required
@check_is_creator_or_admin(Post, "id")
def update(request, id):
    post = Post.objects.get(pk=id)

    if request.method == "POST":
        title = request.POST["title"]
        content = request.POST["content"]
        Post.objects.filter(pk=id).update(title=title, content=content)
        return redirect("detail", id)

    return render(request, "update.html", {"post": post})

@login_required
@check_is_creator_or_admin(Post, "id")
def delete(request, id):
    post = Post.objects.get(pk=id)
    post.delete()
    return redirect("home")

@login_required
@check_is_creator_or_admin(Comment, "comment_id")
def delete_comment(request, id, comment_id):
    comment = Comment.objects.get(pk=comment_id)
    comment.delete()

    return redirect("detail", id)
