import os
import sys
 
sys.path.append('/home/c/cg11205/public_html/react')
sys.path.append('/home/c/cg11205/public_html/myenv/lib/python3.6/site-packages')
os.environ['DJANGO_SETTINGS_MODULE'] = 'react.settings'
import django
django.setup()
 
from django.core.handlers import wsgi
application = wsgi.WSGIHandler()
