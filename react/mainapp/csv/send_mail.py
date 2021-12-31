# -*- coding: utf-8 -*-
import smtplib
import os

import mimetypes
from email import encoders
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.base import MIMEBase
from email.mime.audio import MIMEAudio


def attach_file(msg, filepath):
    filename = os.path.basename(filepath)
    ctype, encoding = mimetypes.guess_type(filepath)
    if ctype is None or encoding is not None:
        ctype = 'application/octet-stream'
    maintype, subtype = ctype.split('/', 1)
    if maintype == 'text':
        with open(filepath) as fp:
            file = MIMEText(fp.read(), _subtype=subtype)
            fp.close()
    elif maintype == 'image':
        with open(filepath, 'rb') as fp:
            file = MIMEImage(fp.read(), _subtype=subtype)
            fp.close()
    elif maintype == 'audio':
        with open(filepath, 'rb') as fp:
            file = MIMEAudio(fp.read(), _subtype=subtype)
            fp.close()
    else:
        with open(filepath, 'rb') as fp:
            file = MIMEBase(maintype, subtype)
            file.set_payload(fp.read())
            fp.close()
            encoders.encode_base64(file)
    file.add_header('Content-Disposition', 'attachment',
                    filename=filename)
    msg.attach(file)


def process_attachement(msg, files):
    for f in files:
        if os.path.isfile(f):
            attach_file(msg, f)
        elif os.path.exists(f):
            dir = os.listdir(f)
            for file in dir:
                attach_file(msg, f+"/"+file)


addr_from = "admin@sorry-babushka.ru"
addr_to = "andrey_yagin@mail.ru"
password = "NqaGM8Em"

msg = MIMEMultipart()
msg['From'] = addr_from
msg['To'] = addr_to
msg['Subject'] = 'Тема сообщения'

body = "Текст сообщения"

process_attachement(msg, ['./out.csv'])

msg.attach(MIMEText(body, 'plain'))

server = smtplib.SMTP('smtp.timeweb.ru', 25)

server.set_debuglevel(True)

server.starttls()
server.login(addr_from, password)
server.send_message(msg, addr_from, addr_to)
server.quit()
