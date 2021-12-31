from wallet.models import Pass, Barcode, StoreCard

cardInfo = StoreCard() 
cardInfo.addPrimaryField('name', 'Имя', 'Traveler')
cardInfo.addSecondaryField('way1', 'MOSCOW', 'DME')
cardInfo.addSecondaryField('way2', 'BALI', 'DPS')
cardInfo.addAuxiliaryField('way3', 'DEPART', 'GATE 02')
cardInfo.addAuxiliaryField('way4', 'FLIGHT', 'FREEDOM')

organizationName = 'Phils Pass Generator' 
passTypeIdentifier = 'pass.Sorrybabushka' 
teamIdentifier = 'Y98DVHQXQX'

passfile = Pass(cardInfo, passTypeIdentifier=passTypeIdentifier, organizationName=organizationName, teamIdentifier=teamIdentifier)
passfile.serialNumber = 'serialNumber'
passfile.logo_text = 'COFFEE TICKET'
passfile.backgroundColor = 'rgba(48,120,108,1)'
passfile.labelColor = 'rgba(255,255,255,1)'
passfile.barcode = Barcode(message = 'serialNumber', format = 'PKBarcodeFormatQR')

# Including the icon and logo is necessary for the passbook to be valid. 
passfile.addFile('icon.png', open('images/icon.png', 'rb')) 
passfile.addFile('logo.png', open('images/logo.png', 'rb')) 
passfile.create('certificate.pem', 'key.pem', 'wwdr.pem', 'UMqsb69E1Afq', 'test.pkpass') # Create and output the Passbook file (.pkpass)