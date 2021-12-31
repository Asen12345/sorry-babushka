from django.shortcuts import render
from django.http import HttpResponse

from enum import Enum
import uuid
import time

from google.oauth2 import service_account
from google.auth.transport.requests import AuthorizedSession
from google.auth import crypt as cryptGoogle
from google.auth import jwt as jwtGoogle


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
    'http://www.cg11205.tmweb.ru/']

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


def makeLoyaltyClassResource(classId):

    payload = {}

    payload = {
        "id": classId, "issuerName": "Baconrista", "programName": "Baconrista Rewards654654", "programLogo": {
            "kind": "walletobjects#image", "sourceUri": {
                "kind": "walletobjects#uri", "uri": "http://farm8.staticflickr.com/7340/11177041185_a61a7f2139_o.jpg"
            }
        }, "reviewStatus": "underReview", "textModulesData": [{
            "header": "Rewards details",
            "body": "Welcome to Baconrista rewards.  Enjoy your rewards for being a loyal customer. " +
            "10 points for ever dollar spent.  Redeem your points for free coffee, bacon and more! "
        }], "linksModuleData": {
            "uris": [
                {
                    "kind": "walletobjects#uri", "uri": "http://maps.google.com/", "description": "Nearby Locations"
                }, {
                    "kind": "walletobjects#uri", "uri": "tel:6505555555", "description": "Call Customer Service"
                }]
        }, "imageModulesData": [
            {
                "mainImage": {
                    "kind": "walletobjects#image", "sourceUri": {
                        "kind": "walletobjects#uri", "uri":  "http://farm4.staticflickr.com/3738/12440799783_3dc3c20606_b.jpg", "description": "Coffee beans"
                    }
                }
            }
        ], "messages": [{
            "header": "Welcome to Banconrista Rewards!", "body": "Featuring our new bacon donuts.", "kind": "walletobjects#walletObjectMessage"
        }], "rewardsTier": "Gold", "rewardsTierLabel": "Tier", "locations": [{
            "kind": "walletobjects#latLongPoint", "latitude": 37.424015499999996, "longitude": -122.09259560000001
        }, {
            "kind": "walletobjects#latLongPoint", "latitude": 37.424354, "longitude": -122.09508869999999
        }, {
            "kind": "walletobjects#latLongPoint", "latitude": 37.7901435, "longitude": -122.39026709999997
        }, {
            "kind": "walletobjects#latLongPoint", "latitude": 40.7406578, "longitude": -74.00208940000002
        }]
    }
    return payload


def makeLoyaltyObjectResource(classId, objectId):

    payload = {}

    payload = {
        "id": objectId, "classId": classId, "state": "active", "accountId": "1234567890", "accountName": "Jane Doe", "barcode": {
            "alternateText": "12345", "type": "code128", "value": "28343E3"
        }, "textModulesData": [{
            "header": "Jane\"s Baconrista Rewards", "body": "Save more at your local Mountain View store Jane. " +
            " You get 1 bacon fat latte for every 5 coffees purchased.  " +
            "Also just for you, 10% off all pastries in the Mountain View store."
        }], "linksModuleData": {
            "uris": [
                {
                    "kind": "walletobjects#uri", "uri": "http://www.google.com/", "description": "My Baconrista Account"
                }]
        }, "infoModuleData": {
            "labelValueRows": [{
                "columns": [{
                    "label": "Next Reward in", "value": "2 coffees"
                }, {
                    "label": "Member Since", "value": "01/15/2013"
                }]
            }, {
                "columns": [{
                    "label": "Local Store", "value": "Mountain View"
                }]
            }], "showLastUpdateTime": "true"
        }, "messages": [{
            "header": "Jane, welcome to Banconrista Rewards", "body": "Thanks for joining our program. Show this message to " +
            "our barista for your first free coffee on us!", "kind": "walletobjects#walletObjectMessage"
        }],
        "loyaltyPoints": {
            "balance": {
                "string": "800"
            },
            "label": "Points"
        }, "locations": [{
            "kind": "walletobjects#latLongPoint", "latitude": 37.793484, "longitude": -122.394380
        }]
    }

    return payload


def getClassAndObjectDefinitions(verticalType, classId, objectId, classResourcePayload, objectResourcePayload):

    classResourcePayload = makeLoyaltyClassResource(
        classId)
    objectResourcePayload = makeLoyaltyObjectResource(
        classId, objectId)

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


def makeObjectJwt(verticalType, classId, objectId):
    signedJwt = None
    classResourcePayload = None
    objectResourcePayload = None
    classResponse = None
    objectResponse = None

    try:
        classResourcePayload, objectResourcePayload = getClassAndObjectDefinitions(
            verticalType, classId, objectId, classResourcePayload, objectResourcePayload)

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


def demoObjectJwt(verticalType, classId, objectId):
    SAVE_LINK = "https://pay.google.com/gp/v/save/"

    objectJwt = makeObjectJwt(verticalType, classId, objectId)

    if objectJwt is not None:
        print('This is an "object" jwt:\n%s\n' % (objectJwt.decode('UTF-8')))
        print('you can decode it with a tool to see the unsigned JWT representation:\n%s\n' % (
            'https://jwt.io'))
        print('Try this save link in your browser:\n%s%s' %
              (SAVE_LINK, objectJwt.decode('UTF-8')))

    return 'Try this save link in your browser:\n%s%s' % (SAVE_LINK, objectJwt.decode('UTF-8'))


def googlePasses(request):

    verticalType = VerticalType.LOYALTY

    classUid = str(verticalType).split(
        '.')[1] + '_CLASS_' + str(uuid.uuid4())

    classId = '%s.%s' % (ISSUER_ID, classUid)

    objectUid = str(verticalType).split(
        '.')[1] + '_OBJECT_' + str(uuid.uuid4())

    objectId = '%s.%s' % (ISSUER_ID, objectUid)

    return HttpResponse(demoObjectJwt(verticalType, classId, objectId))
