from rest_framework.serializers import ModelSerializer
from .models import Notes


class NoteSerializer(ModelSerializer):
    class Meta:
        model = Notes
        # we can also manually specify the fields
        # fields = ['body', 'content']
        fields = '__all__'