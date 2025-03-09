import logging
import os

from django.db import migrations


logger = logging.getLogger(__name__)


def generate_superuser(apps, schema_editor):
    from django.contrib.auth import get_user_model

    ADMIN_PASSWORD = os.environ.get("ADMIN_DJANGO_PASSWORD", "adminadmin")
    ADMIN_EMAIL = os.environ.get("ADMIN_DJANGO_EMAIL", "admin@mail.ru")

    USER_PASSWORD = os.environ.get("USER_DJANGO_PASSWORD", "Kilmonger731pass")
    USER_EMAIL = os.environ.get("USER_DJANGO_EMAIL", "username2@gmail.com")

    user = get_user_model()

    if not user.objects.filter(email=ADMIN_EMAIL).exists():
        logger.info("Creating new superuser")
        admin = user.objects.create_superuser(email=ADMIN_EMAIL, password=ADMIN_PASSWORD)
        admin.save()
    else:
        logger.info("Superuser already created!")

    if not user.objects.filter(email=USER_EMAIL).exists():
        logger.info("Creating new user")
        simple_user = user.objects.create_user(email=USER_EMAIL, password=USER_PASSWORD)
        simple_user.save()
    else:
        logger.info("User already created!")


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0001_initial"),
    ]

    operations = [migrations.RunPython(generate_superuser)]
