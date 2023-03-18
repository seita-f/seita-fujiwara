from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(label='Name', max_length=50, widget=forms.TextInput(
        attrs={
            "name": "name",
            "type": "text",
            "class": "feedback-input",
            "placeholder": "Name",
        }))
    email = forms.EmailField(label='Email Address', widget=forms.EmailInput(
        attrs={
            "name": "email",
            "type": "text",
            "class": "feedback-input",
            "placeholder": "Email",
        }))
    message = forms.CharField(label='Message', widget=forms.Textarea(
        attrs={
            "name": "text",
            "class": "feedback-input",
            "placeholder": "Comment",
        }))
