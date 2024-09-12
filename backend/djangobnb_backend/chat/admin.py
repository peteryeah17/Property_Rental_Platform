from django.contrib import admin
#done
from .models import Conversation, ConversationMessage


admin.site.register(Conversation)
admin.site.register(ConversationMessage)