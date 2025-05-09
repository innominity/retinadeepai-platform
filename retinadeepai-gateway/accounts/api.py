from django.http import JsonResponse
from rest_framework.decorators import (api_view, authentication_classes,
                                       permission_classes)

from .forms import SignupForm


@api_view(['GET'])
def me(request):
    print(request.user.id)
    return JsonResponse({
        'id': request.user.id,
        'email': request.user.email,
    })


@api_view(['POST'])
@authentication_classes([])
@permission_classes([])
def signup(request):
    data = request.data
    message = 'success'

    form = SignupForm({
        'email': data.get('email'),
        'password1': data.get('password1'),
        'password2': data.get('password2'),
    })

    if form.is_valid():
        form.save()

        # Send verification email later!
    else:
        message = 'error'

    return JsonResponse({'message': message})