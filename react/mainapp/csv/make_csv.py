import csv
import sqlite3

from glob import glob
from os.path import expanduser
conn = sqlite3.connect(  # open "places.sqlite" from one of the Firefox profiles
    glob(expanduser('~/public_html/react/db.sqlite3'))[0]
)
cursor = conn.cursor()
cursor.execute("select * from mainapp_userinfo;")
records = cursor.fetchall()

with open("out.csv", "w") as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow([i[0] for i in cursor.description])  # write headers
    for i in records:
        ean = conn.cursor()
        ean.execute(
            "select name from mainapp_eankey where id = " + str(i[5]) + ";")
        ean_key = ean.fetchall()
        list_table = list(i)
        list_table[5] = ean_key[0][0]
        i = tuple(list_table)
        csv_writer.writerow(i)
