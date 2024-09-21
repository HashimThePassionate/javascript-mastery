from django.db import models
from django.core.exceptions import ValidationError
import re

class Todo(models.Model):
    title = models.CharField(max_length=40)
    created = models.DateTimeField(auto_now_add=True)

    def clean(self):
        if len(self.title) < 5:
            raise ValidationError('Title 5 characters se kam nahin ho sakta.')
        if len(self.title) > 40:
            raise ValidationError('Title 40 characters se zyada nahin ho sakta.')
        if not re.match("^[A-Za-z ]+$", self.title):
            raise ValidationError('Title mein sirf letters aur spaces allowed hain.')
        if self.title.strip() == '':
            raise ValidationError('Title empty nahin ho sakta.')

    def __str__(self):
        return self.title
