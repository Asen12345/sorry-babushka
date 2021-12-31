from .models import Pass, Barcode, StoreCard
from django.http import HttpResponse
import json
from datetime import datetime
from django.shortcuts import redirect

from ..models import UserInfo
from ..models import EANKey

from enum import Enum
import uuid
import time

from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession
from google.auth import crypt as cryptGoogle
from google.auth import jwt as jwtGoogle
from pathlib import Path

import smtplib
import os

import mimetypes
from email import encoders
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.base import MIMEBase
from email.mime.audio import MIMEAudio

import csv
import sqlite3

from glob import glob
from os.path import expanduser


def apiOverview(request):
    api_urls = {
        'Create': '/user-create/',
    }
    return HttpResponse(api_urls)


def validDate(date):
    Result = True
    try:
        valid_date = time.strptime(date, '%d.%m.%Y %H:%M:%S.%f')
    except ValueError:
        Result = False
    return Result


def UserInfoCreate(request):
    y = json.loads(request.body)
    date = y['date'] + ' 18:23:29.000227'
    if not validDate(date):
        return HttpResponse('Недопустимый возраст')

    phone = y['phone'].replace('(', '').replace(')', '').replace(' ', '')
    if UserInfo.objects.filter(phone=phone).first():
        return HttpResponse('Такой номер уже зарегистрирован')

    info = EANKey.objects.filter(use=False)[:1]
    ean = info[0]
    EANKey.objects.filter(id=ean).update(use=True)

    date = y['date'] + ' 18:23:29.000227'
    date = datetime.strptime(date, '%d.%m.%Y %H:%M:%S.%f')
    date_validate = date.strftime("%Y")
    if(int(datetime.now().year) - int(date_validate) >= 85 or int(datetime.now().year) - int(date_validate) < 1):
        return HttpResponse('Недопустимый возраст')

    date = date.strftime("%Y-%m-%d")
    UserInfo.objects.create(name=y['name'], second_name=y['second_name'],
                            phone=phone, date=date, EAN_id=ean)

    return HttpResponse('success')


class VerticalType(Enum):
    OFFER = 1
    EVENTTICKET = 2
    FLIGHT = 3
    GIFTCARD = 4
    LOYALTY = 5
    TRANSIT = 6


EXISTS_MESSAGE = "No changes will be made when saved by link. To update info, use update() or patch(). For an example, see https://developers.google.com/pay/passes/guides/get-started/implementing-the-api/engage-through-google-pay#update-state\n"
NOT_EXIST_MESSAGE = "Will be inserted when user saves by link/button for first time\n"
SERVICE_ACCOUNT_EMAIL_ADDRESS = 'test-api@august-edge-333312.iam.gserviceaccount.com'
SERVICE_ACCOUNT_FILE = '/home/c/cg11205/public_html/react/mainapp/privatekey.json'
ISSUER_ID = '3388000000021402073'

AUDIENCE = 'google'
JWT_TYPE = 'savetoandroidpay'
SCOPES = ['https://www.googleapis.com/auth/wallet_object.issuer']
ORIGINS = [
    'https://sorry-babushka.ru/']

payload = {}


def generateUnsignedJwt():
    unsignedJwt = {}
    unsignedJwt['iss'] = SERVICE_ACCOUNT_EMAIL_ADDRESS
    unsignedJwt['aud'] = AUDIENCE
    unsignedJwt['typ'] = JWT_TYPE
    unsignedJwt['iat'] = int(time.time())
    unsignedJwt['payload'] = payload
    unsignedJwt['origins'] = ORIGINS

    return unsignedJwt


def generateSignedJwt():
    jwtToSign = generateUnsignedJwt()
    signedJwt = jwtGoogle.encode(cryptGoogle.RSASigner.from_service_account_file(
        SERVICE_ACCOUNT_FILE), jwtToSign)

    return signedJwt


def addOfferClass(resourcePayload):
    payload.setdefault('offerClasses', [])
    payload['offerClasses'].append(resourcePayload)


def addOfferObject(resourcePayload):
    payload.setdefault('offerObjects', [])
    payload['offerObjects'].append(resourcePayload)


def addLoyaltyClass(resourcePayload):
    payload.setdefault('loyaltyClasses', [])
    payload['loyaltyClasses'].append(resourcePayload)


def addLoyaltyObject(resourcePayload):
    payload.setdefault('loyaltyObjects', [])
    payload['loyaltyObjects'].append(resourcePayload)


def addGiftcardClass(resourcePayload):
    payload.setdefault('giftCardClasses', [])
    payload['giftCardClasses'].append(resourcePayload)


def addGiftcardObject(resourcePayload):
    payload.setdefault('giftCardObjects', [])
    payload['giftCardObjects'].append(resourcePayload)


def addEventTicketClass(resourcePayload):
    payload.setdefault('eventTicketClasses', [])
    payload['eventTicketClasses'].append(resourcePayload)


def addEventTicketObject(resourcePayload):
    payload.setdefault('eventTicketObjects', [])
    payload['eventTicketObjects'].append(resourcePayload)


def addFlightClass(resourcePayload):
    payload.setdefault('flightClasses', [])
    payload['flightClasses'].append(resourcePayload)


def addFlightObject(resourcePayload):
    payload.setdefault('flightObjects', [])
    payload['flightObjects'].append(resourcePayload)


def addTransitClass(resourcePayload):
    payload.setdefault('transitClasses', [])
    payload['transitClasses'].append(resourcePayload)


def addTransitObject(resourcePayload):
    payload.setdefault('transitObjects', [])
    payload['transitObjects'].append(resourcePayload)


def index(request):
    return render(request, 'index.html', {})


def makeLoyaltyClassResource(classId, data):

    name = data[1]

    payload = {}

    payload = {
        "id": classId, "issuerName": "Traveler",
        "infoModuleData": {
            "labelValueRows":
                [
                    {"columns": {'label': '123', 'value': '123'}},
                    {"columns": {'label': '1234', 'value': '1234'}}
                ]
        },
        "textModulesData": [
            {
                "header": "MOSCOW",
                "body": "DME",
                "id": "myfield1"
            },
            {
                "header": "BALI",
                "body": "DPS",
                "id": "myfield2"
            },
            {
                "header": "DEPART",
                "body": "GATE 02",
                "id": "myfield3"
            },
            {
                "header": "FLIGHT",
                "body": "FREEDOM",
                "id": "myfield4"
            },
            {
                "body": "COFFEE TICKET",
                "id": "myfield5"
            },
            {
                "body": "FIRST CLASS",
                "id": "myfield6"
            },
        ],
        "linksModuleData": {
            "uris": [
                {
                    "uri": "http://maps.google.com/",
                    "description": "Nearby Locations",
                    "id": "mylink"
                }
            ]
        },
        "classTemplateInfo": {
            "cardBarcodeSectionDetails": {
                "firstTopDetail": {
                    "fieldSelector": {
                        "fields": [
                            {
                                "fieldPath": "class.textModulesData['myfield5']"
                            }
                        ]
                    }
                },
                "firstBottomDetail": {
                    "fieldSelector": {
                        "fields": [
                            {
                                "fieldPath": "class.textModulesData['myfield6']"
                            }
                        ]
                    }
                },
                "secondBottomDetail": {
                    "fieldSelector": {
                        "fields": [
                            {
                                "fieldPath": "class.textModulesData['myfield7']"
                            }
                        ]
                    }
                }
            },
            "detailsTemplateOverride": {
                "detailsItemInfos": [
                    {
                        "item": {
                            "firstValue": {
                                "fields": [{
                                    "fieldPath": "class.linksModuleData.uris['mylink']"
                                }]
                            }
                        }
                    }
                ]
            },
            "cardTemplateOverride": {
                "cardRowTemplateInfos": [{
                    "twoItems": {
                        "startItem": {
                            "firstValue": {
                                "fields": [{
                                    "fieldPath": "class.textModulesData['myfield1']"
                                }]
                            }
                        },
                        "endItem": {
                            "firstValue": {
                                "fields": [{
                                    "fieldPath": "class.textModulesData['myfield2']"
                                }]
                            }
                        },
                    }
                }, {
                    "twoItems": {
                        "startItem": {
                            "firstValue": {
                                "fields": [{
                                    "fieldPath": "class.textModulesData['myfield3']"
                                }]
                            }
                        },
                        "endItem": {
                            "firstValue": {
                                "fields": [{
                                    "fieldPath": "class.textModulesData['myfield4']"
                                }]
                            }
                        },
                    }
                }]
            }
        }, "programName": str(name), "programLogo": {
            "kind": "walletobjects#image", "sourceUri": {
                "kind": "walletobjects#uri", "uri": "https://sorry-babushka.ru/logo.jpg"
            }
        }, "reviewStatus": "underReview",
    }
    return payload


def makeLoyaltyObjectResource(classId, objectId, data):

    id = data[0]
    name = data[1]

    payload = {}

    payload = {
        "id": objectId, "classId": classId, "state": "active", "accountId": 'SEAT', "accountName": str(name), 'barcode': {
            'type': 'QR_CODE',
            'value': id
        }, "textModulesData": [
            {
                "header": "" + str(name) + " добро пожаловать", "body": "Данная карта дает обладателю право на получение специальных" +
                " условий в любом магазине сети, а так же на участие в специальных" +
                " закрытых программах для членов клуба."
            }]
    }

    return payload


def getClassAndObjectDefinitions(verticalType, classId, objectId, classResourcePayload, objectResourcePayload, data):

    classResourcePayload = makeLoyaltyClassResource(
        classId, data)
    objectResourcePayload = makeLoyaltyObjectResource(
        classId, objectId, data)

    return classResourcePayload, objectResourcePayload


def createPath(verticalType, postfix, id_to_use=''):
    if verticalType == VerticalType.FLIGHT:
        path = '/%s%s/%s' % ("flight", postfix, id_to_use)
    elif verticalType == VerticalType.EVENTTICKET:
        path = '/%s%s/%s' % ("eventTicket", postfix, id_to_use)
    elif verticalType == VerticalType.GIFTCARD:
        path = '/%s%s/%s' % ("giftCard", postfix, id_to_use)
    elif verticalType == VerticalType.LOYALTY:
        path = '/%s%s/%s' % ("loyalty", postfix, id_to_use)
    elif verticalType == VerticalType.OFFER:
        path = '/%s%s/%s' % ("offer", postfix, id_to_use)
    elif verticalType == VerticalType.TRANSIT:
        path = '/%s%s/%s' % ("transit", postfix, id_to_use)
    return path


def makeOauthCredential():
    # the variables are in config file
    credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)

    return credentials


def insertClass(verticalType, payload):

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
    }
    credentials = makeOauthCredential()
    response = None

    # Define insert() REST call of target vertical
    uri = 'https://walletobjects.googleapis.com/walletobjects/v1'
    postfix = 'Class'
    path = createPath(verticalType, postfix)

    # There is no Google API for Passes Client Library for Python.
    # Authorize a http client with credential generated from Google API client library.
    # see https://google-auth.readthedocs.io/en/latest/user-guide.html#making-authenticated-requests
    authed_session = AuthorizedSession(credentials)

    # make the POST request to make an insert(); this returns a response object
    # other methods require different http methods; for example, get() requires authed_Session.get(...)
    # check the reference API to make the right REST call
    # https://developers.google.com/pay/passes/reference/v1/
    # https://google-auth.readthedocs.io/en/latest/user-guide.html#making-authenticated-requests
    response = authed_session.post(
        uri+path          # REST API endpoint
        , headers=headers  # Header; optional
        # non-form-encoded Payload for POST. Check rest API for format based on method.
        , json=payload
    )

    return response


def getObject(verticalType, objectId):

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=UTF-8'
    }
    credentials = makeOauthCredential()
    response = None

    # Define get() REST call of target vertical
    uri = 'https://walletobjects.googleapis.com/walletobjects/v1'
    postfix = 'Object'
    path = createPath(verticalType, postfix, objectId)

    authed_session = AuthorizedSession(credentials)

    response = authed_session.get(
        uri+path          # REST API endpoint
        , headers=headers  # Header; optional
    )

    return response


def handleInsertCallStatusCode(insertCallResponse, idType, id, checkClassId=None, verticalType=None):
    if insertCallResponse.status_code == 200:
        print('%sId (%s) insertion success!\n' % (idType, id))
    elif insertCallResponse.status_code == 409:  # id resource exists for this issuer account
        print('%sId: (%s) already exists. %s' % (idType, id, EXISTS_MESSAGE))

        # for object insert, do additional check
        if idType == "object":
            getCallResponse = None
            # get existing object Id data
            # if it is a new object Id, expected status is 409
            getCallResponse = getObject(verticalType, id)
            # check if object's classId matches target classId
            classIdOfObjectId = getCallResponse.json()['classId']
            if classIdOfObjectId != checkClassId and checkClassId is not None:
                raise ValueError('the classId of inserted object is (%s). It does not match the target classId (%s). The saved object will not have the class properties you expect.' % (
                    classIdOfObjectId, checkClassId))
    else:
        raise ValueError('%s insert issue.' %
                         (idType), insertCallResponse.text)

    return


def handleGetCallStatusCode(getCallResponse, idType, id, checkClassId=None):
    if getCallResponse.status_code == 200:  # id resource exists for this issuer account
        print('%sId: (%s) already exists. %s' % (idType, id, EXISTS_MESSAGE))

        # for object get, do additional check
        if idType == "object":
            # check if object's classId matches target classId
            classIdOfObjectId = getCallResponse.json()['classId']
            if classIdOfObjectId != checkClassId and checkClassId is not None:
                raise ValueError('the classId of inserted object is (%s). It does not match the target classId (%s). The saved object will not have the class properties you expect.' % (
                    classIdOfObjectId, checkClassId))
    elif getCallResponse.status_code == 404:  # id resource does not exist for this issuer account
        print('%sId: (%s) does not exist. %s' %
              (idType, id, NOT_EXIST_MESSAGE))
    else:
        raise ValueError('Issue with getting %s.' %
                         (idType), getCallResponse.text)

    return


def loadObjectIntoJWT(verticalType, objectResourcePayload):
    if verticalType == VerticalType.FLIGHT:
        addFlightObject(objectResourcePayload)
    elif verticalType == VerticalType.EVENTTICKET:
        addEventTicketObject(objectResourcePayload)
    elif verticalType == VerticalType.GIFTCARD:
        addGiftcardObject(objectResourcePayload)
    elif verticalType == VerticalType.LOYALTY:
        addLoyaltyObject(objectResourcePayload)
    elif verticalType == VerticalType.OFFER:
        addOfferObject(objectResourcePayload)
    elif verticalType == VerticalType.TRANSIT:
        addTransitObject(objectResourcePayload)


def makeObjectJwt(verticalType, classId, objectId, data):
    signedJwt = None
    classResourcePayload = None
    objectResourcePayload = None
    classResponse = None
    objectResponse = None

    try:
        classResourcePayload, objectResourcePayload = getClassAndObjectDefinitions(
            verticalType, classId, objectId, classResourcePayload, objectResourcePayload, data)

        print('\nMaking REST call to insert class')

        classResponse = insertClass(
            verticalType, classResourcePayload)

        objectResponse = getObject(verticalType, objectId)

        handleInsertCallStatusCode(
            classResponse, "class", classId, None, verticalType)

        handleGetCallStatusCode(objectResponse, "object", objectId, classId)

        loadObjectIntoJWT(verticalType, objectResourcePayload)

        signedJwt = generateSignedJwt()

    except ValueError as err:
        print(err.args)

    return signedJwt


def demoObjectJwt(verticalType, classId, objectId, data):
    SAVE_LINK = "https://pay.google.com/gp/v/save/"

    objectJwt = makeObjectJwt(verticalType, classId, objectId, data)

    if objectJwt is not None:
        print('This is an "object" jwt:\n%s\n' % (objectJwt.decode('UTF-8')))
        print('you can decode it with a tool to see the unsigned JWT representation:\n%s\n' % (
            'https://jwt.io'))
        print('Try this save link in your browser:\n%s%s' %
              (SAVE_LINK, objectJwt.decode('UTF-8')))

    return '%s%s' % (SAVE_LINK, objectJwt.decode('UTF-8'))


def GooglePasses(request):

    verticalType = VerticalType.LOYALTY

    classUid = str(verticalType).split(
        '.')[1] + '_CLASS_' + str(uuid.uuid4())

    classId = '%s.%s' % (ISSUER_ID, classUid)

    objectUid = str(verticalType).split(
        '.')[1] + '_OBJECT_' + str(uuid.uuid4())

    objectId = '%s.%s' % (ISSUER_ID, objectUid)
    data = ['', '']
    ean = EANKey.objects.filter(use=True).order_by('-id')[0]
    user = UserInfo.objects.order_by('-id')[0]
    data[0] = ean.name
    data[1] = str(user) + " " + str(user.second_name)

    return HttpResponse(demoObjectJwt(verticalType, classId, objectId, data))


def ApplePasses(request):
    cwd = Path(__file__).parent
    data = ['', '']
    ean = EANKey.objects.filter(use=True).order_by('-id')[0]
    user = UserInfo.objects.order_by('-id')[0]
    data[0] = str(ean.name)
    data[1] = str(user) + " " + str(user.second_name)
    cardInfo = StoreCard()
    cardInfo.addPrimaryField('name', data[1], 'Traveler')
    cardInfo.addSecondaryField('way1', 'MOSCOW', 'DME')
    cardInfo.addSecondaryField('way2', 'BALI', 'DPS')
    cardInfo.addSecondaryField('way3', 'DEPART', 'GATE 02')
    cardInfo.addSecondaryField('way4', 'FLIGHT', 'FREEDOM')

    organizationName = 'Sorrybabushka'
    passTypeIdentifier = 'pass.Sorrybabushka'
    teamIdentifier = 'Y98DVHQXQX'

    passfile = Pass(cardInfo, passTypeIdentifier=passTypeIdentifier,
                    organizationName=organizationName, teamIdentifier=teamIdentifier)
    passfile.serialNumber = str(uuid.uuid4())
    passfile.logoText = 'COFFEE TICKET'
    passfile.backgroundColor = 'rgba(48,120,108,1)'
    passfile.labelColor = 'rgba(255,255,255,1)'
    passfile.foregroundColor = 'rgba(255,255,255,1)'
    passfile.barcode = Barcode(
        message=data[0], format='PKBarcodeFormatQR')

    # Including the icon and logo is necessary for the passbook to be valid.
    passfile.addFile('icon.png', open(cwd / 'images/icon.png', 'rb'))
    passfile.addFile('logo.png', open(cwd / 'images/logo.png', 'rb'))
    passfile.addFile('strip.png', open(cwd / 'images/strip.png', 'rb'))
    file_name = 'pkpass/' + str(uuid.uuid4()) + '.pkpass'
    passfile.create(cwd / 'certificate.pem', cwd / 'key.pem', cwd / 'wwdr.pem', 'UMqsb69E1Afq',
                    cwd / file_name)  # Create and output the Passbook file (.pkpass)

    return HttpResponse('react/mainapp/api/'+ file_name)

def csvSend(request):
    conn = sqlite3.connect(  # open "places.sqlite" from one of the Firefox profiles
    glob(expanduser('~/public_html/react/db.sqlite3'))[0]
    )
    cursor = conn.cursor()
    cursor.execute("select * from mainapp_userinfo;")
    records = cursor.fetchall()
    cwd = Path(__file__).parent
    with open(cwd / 'out.csv', "w") as csv_file:
      csv_writer = csv.writer(csv_file)
      csv_writer.writerow([i[0] for i in cursor.description])  # write headers
      for i in records:
        ean = conn.cursor()
        ean.execute(
            "select name from mainapp_eankey where id = " + str(i[5]) + ";")
        ean_key = ean.fetchall()
        list_table = list(i)
        list_table[5] = ean_key[0][0] 
        c = 0
        for item in list_table:
           list_table[c] = str(item).encode()
           c += 1
        i = tuple(list_table)
        csv_writer.writerow(i)
    addr_from = "admin@sorry-babushka.ru"
    addr_to = "andrey_yagin@mail.ru"
    password = "NqaGM8Em"

    msg = MIMEMultipart()
    msg['From'] = addr_from
    msg['To'] = addr_to
    msg['Subject'] = 'Список с сайта sorry-babushka'

    body = "Список с сайта sorry-babushka"

    process_attachement(msg, ['./file.txt'])

    msg.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP('smtp.timeweb.ru', 25)

    server.set_debuglevel(True)

    server.starttls()
    server.login(addr_from, password)
    server.send_message(msg, addr_from, addr_to)
    server.quit()
    return HttpResponse('')
    
    
    
    
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
    
