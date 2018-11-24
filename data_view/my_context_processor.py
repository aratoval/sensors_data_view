from datetime import datetime
from time import strftime
from .forms import LoginForm


def my_footer(request):
    ctx = {
        "now": datetime.now().strftime("%Y-%m-%d"),
        "version": "1.0",
    }
    return ctx


def my_header(request):
    form = LoginForm()
    ctx = {
        'login_form': form
    }
    return ctx
