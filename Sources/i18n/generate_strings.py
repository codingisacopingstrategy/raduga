import csv
import codecs
from xml.dom.minidom import getDOMImplementation

f = open('Raduga Interface Translations - Sheet1.csv')
reader = csv.reader(f)
impl = getDOMImplementation()

doc_en = impl.createDocument(None, "resources", None)
for slug, en, ru in reader:
    s = doc_en.createElement("string")
    s.setAttribute("name", slug)
    value = doc_en.createTextNode(en)
    s.appendChild(value)
    doc_en.documentElement.appendChild(s)

f.seek(0)

doc_ru = impl.createDocument(None, "resources", None)
for slug, en, ru in reader:
    s = doc_ru.createElement("string")
    s.setAttribute("name", slug)
    value = doc_ru.createTextNode(ru)
    s.appendChild(value)
    doc_ru.documentElement.appendChild(s)

with codecs.open('../../i18n/en/strings.xml', 'w', 'utf-8') as f_en:
    f_en.write(doc_en.toprettyxml())

with codecs.open('../../i18n/ru/strings.xml', 'w', 'utf-8') as f_ru:
    f_ru.write(
        doc_ru.toprettyxml().decode("utf8")
        )



