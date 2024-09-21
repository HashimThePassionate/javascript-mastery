from rest_framework import serializers
from .models import Todo
import re
class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'

    def validate_title(self, value):
        # Title should not be empty
        if not value.strip():
            raise serializers.ValidationError('Title empty nahin ho sakta.')

        # Title length validations
        if len(value) < 5:
            raise serializers.ValidationError('Title 5 characters se kam nahin ho sakta.')
        if len(value) > 40:
            raise serializers.ValidationError('Title 40 characters se zyada nahin ho sakta.')

        # Title should not contain numbers or symbols
        if not re.match("^[A-Za-z ]+$", value):
            raise serializers.ValidationError('Title mein sirf letters aur spaces allowed hain.')

        return value
