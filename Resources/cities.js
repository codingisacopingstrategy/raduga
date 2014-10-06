var cities = [
  {
    "href_en": "http://en.wikipedia.org/wiki/Abakan",
    "name_en": "Abakan",
    "name_ru": "Абакан",
    "lat": 53.717,
    "lon": 91.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Abaza_(town)",
    "name_en": "Abaza",
    "name_ru": "Абаза",
    "lat": 52.64806,
    "lon": 90.07389
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Abdulino",
    "name_en": "Abdulino",
    "name_ru": "Абдулино",
    "lat": 53.7,
    "lon": 53.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Abinsk",
    "name_en": "Abinsk",
    "name_ru": "Абинск",
    "lat": 44.867,
    "lon": 38.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Achinsk",
    "name_en": "Achinsk",
    "name_ru": "Ачинск",
    "lat": 56.25,
    "lon": 90.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Adygeysk",
    "name_en": "Adygeysk",
    "name_ru": "Адыгейск",
    "lat": 44.883,
    "lon": 39.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Agidel",
    "name_en": "Agidel",
    "name_ru": "Агидель",
    "lat": 55.9,
    "lon": 53.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Agryz",
    "name_en": "Agryz",
    "name_ru": "Агрыз",
    "lat": 56.52194,
    "lon": 52.9975
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ak-Dovurak",
    "name_en": "Ak-Dovurak",
    "name_ru": "Ак-Довурак",
    "lat": 51.183,
    "lon": 90.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Akhtubinsk",
    "name_en": "Akhtubinsk",
    "name_ru": "Ахтубинск",
    "lat": 48.283,
    "lon": 46.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Aksay,_Rostov_Oblast",
    "name_en": "Aksay",
    "name_ru": "Аксай",
    "lat": 47.2606,
    "lon": 39.8706
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Alagir",
    "name_en": "Alagir",
    "name_ru": "Алагир",
    "lat": 43.033,
    "lon": 44.233
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Alapayevsk",
    "name_en": "Alapayevsk",
    "name_ru": "Алапаевск",
    "lat": 57.85,
    "lon": 61.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Alatyr,_Chuvash_Republic",
    "name_en": "Alatyr",
    "name_ru": "Алатырь",
    "lat": 54.85,
    "lon": 46.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Aldan,_Russia",
    "name_en": "Aldan",
    "name_ru": "Алдан",
    "lat": 58.617,
    "lon": 125.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Alexandrov,_Vladimir_Oblast",
    "name_en": "Alexandrov",
    "name_ru": "Александров",
    "lat": 56.4,
    "lon": 38.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Alexandrovsk,_Perm_Krai",
    "name_en": "Alexandrovsk",
    "name_ru": "Александровск",
    "lat": 59.167,
    "lon": 57.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Alexandrovsk-Sakhalinsky_(town)",
    "name_en": "Alexandrovsk-Sakhalinsky",
    "name_ru": "Александровск-Сахалинский",
    "lat": 50.9,
    "lon": 142.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Alexeyevka,_Belgorod_Oblast",
    "name_en": "Alexeyevka",
    "name_ru": "Алексеевка",
    "lat": 50.633,
    "lon": 38.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Aleksin",
    "name_en": "Aleksin",
    "name_ru": "Алексин",
    "lat": 54.5,
    "lon": 37.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Aleysk",
    "name_en": "Aleysk",
    "name_ru": "Алейск",
    "lat": 52.5,
    "lon": 82.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Almetyevsk",
    "name_en": "Almetyevsk",
    "name_ru": "Альметьевск",
    "lat": 54.9,
    "lon": 52.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Alzamay",
    "name_en": "Alzamay",
    "name_ru": "Алзамай",
    "lat": 55.567,
    "lon": 98.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Amursk",
    "name_en": "Amursk",
    "name_ru": "Амурск",
    "lat": 50.217,
    "lon": 136.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Anadyr_(town)",
    "name_en": "Anadyr",
    "name_ru": "Анадырь",
    "lat": 64.733,
    "lon": 177.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Anapa",
    "name_en": "Anapa",
    "name_ru": "Анапа",
    "lat": 44.867,
    "lon": 37.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Andreapol",
    "name_en": "Andreapol",
    "name_ru": "Андреаполь",
    "lat": 56.65,
    "lon": 32.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Angarsk",
    "name_en": "Angarsk",
    "name_ru": "Ангарск",
    "lat": 52.55,
    "lon": 103.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Aniva",
    "name_en": "Aniva",
    "name_ru": "Анива",
    "lat": 46.717,
    "lon": 142.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Anzhero-Sudzhensk",
    "name_en": "Anzhero-Sudzhensk",
    "name_ru": "Анжеро-Судженск",
    "lat": 56.083,
    "lon": 86.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Apatity",
    "name_en": "Apatity",
    "name_ru": "Апатиты",
    "lat": 67.567,
    "lon": 33.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Aprelevka",
    "name_en": "Aprelevka",
    "name_ru": "Апрелевка",
    "lat": 55.55,
    "lon": 37.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Apsheronsk",
    "name_en": "Apsheronsk",
    "name_ru": "Апшеронск",
    "lat": 44.467,
    "lon": 39.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Aramil",
    "name_en": "Aramil",
    "name_ru": "Арамиль",
    "lat": 56.7,
    "lon": 60.83306
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ardatov_(town),_Republic_of_Mordovia",
    "name_en": "Ardatov",
    "name_ru": "Ардатов",
    "lat": 54.85,
    "lon": 46.233
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ardon,_Republic_of_North_Ossetia%E2%80%93Alania",
    "name_en": "Ardon",
    "name_ru": "Ардон",
    "lat": 43.183,
    "lon": 44.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Argun,_Chechen_Republic",
    "name_en": "Argun",
    "name_ru": "Аргун",
    "lat": 43.3,
    "lon": 45.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Arkadak",
    "name_en": "Arkadak",
    "name_ru": "Аркадак",
    "lat": 51.93861,
    "lon": 43.5025
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Arkhangelsk",
    "name_en": "Arkhangelsk",
    "name_ru": "Архангельск",
    "lat": 64.533,
    "lon": 40.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Armavir,_Russia",
    "name_en": "Armavir",
    "name_ru": "Армавир",
    "lat": 45.0,
    "lon": 41.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Arsenyev",
    "name_en": "Arsenyev",
    "name_ru": "Арсеньев",
    "lat": 44.167,
    "lon": 133.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Arsk",
    "name_en": "Arsk",
    "name_ru": "Арск",
    "lat": 56.1,
    "lon": 49.883
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Artyom,_Russia",
    "name_en": "Artyom",
    "name_ru": "Артём",
    "lat": 43.38056,
    "lon": 132.18667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Artyomovsk,_Russia",
    "name_en": "Artyomovsk",
    "name_ru": "Артёмовск",
    "lat": 54.34833,
    "lon": 93.43556
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Artyomovsky,_Sverdlovsk_Oblast",
    "name_en": "Artyomovsky",
    "name_ru": "Артёмовский",
    "lat": 57.35639,
    "lon": 61.87111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Arzamas",
    "name_en": "Arzamas",
    "name_ru": "Арзамас",
    "lat": 55.4,
    "lon": 43.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Asbest",
    "name_en": "Asbest",
    "name_ru": "Асбест",
    "lat": 57.0,
    "lon": 61.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Asha_(town)",
    "name_en": "Asha",
    "name_ru": "Аша",
    "lat": 54.983,
    "lon": 57.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Asino",
    "name_en": "Asino",
    "name_ru": "Асино",
    "lat": 57.0,
    "lon": 86.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Astrakhan",
    "name_en": "Astrakhan",
    "name_ru": "Астрахань",
    "lat": 46.32361,
    "lon": 48.03667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Atkarsk",
    "name_en": "Atkarsk",
    "name_ru": "Аткарск",
    "lat": 51.867,
    "lon": 45.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Aznakayevo",
    "name_en": "Aznakayevo",
    "name_ru": "Азнакаево",
    "lat": 54.85,
    "lon": 53.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Azov",
    "name_en": "Azov",
    "name_ru": "Азов",
    "lat": 47.1,
    "lon": 39.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Babayevo_(town),_Vologda_Oblast",
    "name_en": "Babayevo",
    "name_ru": "Бабаево",
    "lat": 59.383,
    "lon": 35.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Babushkin_(town)",
    "name_en": "Babushkin",
    "name_ru": "Бабушкин",
    "lat": 51.717,
    "lon": 105.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bagrationovsk",
    "name_en": "Bagrationovsk",
    "name_ru": "Багратионовск",
    "lat": 54.4,
    "lon": 20.633
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bakal",
    "name_en": "Bakal",
    "name_ru": "Бакал",
    "lat": 54.933,
    "lon": 58.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Baksan",
    "name_en": "Baksan",
    "name_ru": "Баксан",
    "lat": 43.6825,
    "lon": 43.53389
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Balabanovo,_Kaluga_Oblast",
    "name_en": "Balabanovo",
    "name_ru": "Балабаново",
    "lat": 55.183,
    "lon": 36.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Balakhna,_Balakhninsky_District,_Nizhny_Novgorod_Oblast",
    "name_en": "Balakhna",
    "name_ru": "Балахна",
    "lat": 56.483,
    "lon": 43.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Balakovo",
    "name_en": "Balakovo",
    "name_ru": "Балаково",
    "lat": 52.033,
    "lon": 47.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Balashikha",
    "name_en": "Balashikha",
    "name_ru": "Балашиха",
    "lat": 55.817,
    "lon": 37.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Balashov_(town)",
    "name_en": "Balashov",
    "name_ru": "Балашов",
    "lat": 51.54694,
    "lon": 43.17333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Baley",
    "name_en": "Baley",
    "name_ru": "Балей",
    "lat": 51.6,
    "lon": 116.633
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Baltiysk",
    "name_en": "Baltiysk",
    "name_ru": "Балтийск",
    "lat": 54.65,
    "lon": 19.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Barabinsk",
    "name_en": "Barabinsk",
    "name_ru": "Барабинск",
    "lat": 55.35,
    "lon": 78.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Barnaul",
    "name_en": "Barnaul",
    "name_ru": "Барнаул",
    "lat": 53.29083,
    "lon": 83.64778
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Barysh",
    "name_en": "Barysh",
    "name_ru": "Барыш",
    "lat": 53.65,
    "lon": 47.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bataysk",
    "name_en": "Bataysk",
    "name_ru": "Батайск",
    "lat": 47.167,
    "lon": 39.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bavly",
    "name_en": "Bavly",
    "name_ru": "Бавлы",
    "lat": 54.383,
    "lon": 53.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Baykalsk",
    "name_en": "Baykalsk",
    "name_ru": "Байкальск",
    "lat": 51.517,
    "lon": 104.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Baymak",
    "name_en": "Baymak",
    "name_ru": "Баймак",
    "lat": 52.583,
    "lon": 58.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belaya_Kalitva",
    "name_en": "Belaya Kalitva",
    "name_ru": "Белая Калитва",
    "lat": 48.175,
    "lon": 40.78944
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belaya_Kholunitsa",
    "name_en": "Belaya Kholunitsa",
    "name_ru": "Белая Холуница",
    "lat": 58.85,
    "lon": 50.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belebey",
    "name_en": "Belebey",
    "name_ru": "Белебей",
    "lat": 54.1,
    "lon": 54.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belgorod",
    "name_en": "Belgorod",
    "name_ru": "Белгород",
    "lat": 50.6,
    "lon": 36.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belinsky_(town)",
    "name_en": "Belinsky",
    "name_ru": "Белинский",
    "lat": 52.967,
    "lon": 43.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belogorsk,_Amur_Oblast",
    "name_en": "Belogorsk",
    "name_ru": "Белогорск",
    "lat": 50.917,
    "lon": 128.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belokurikha",
    "name_en": "Belokurikha",
    "name_ru": "Белокуриха",
    "lat": 51.983,
    "lon": 84.983
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belomorsk",
    "name_en": "Belomorsk",
    "name_ru": "Беломорск",
    "lat": 64.52528,
    "lon": 34.76583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belorechensk,_Krasnodar_Krai",
    "name_en": "Belorechensk",
    "name_ru": "Белореченск",
    "lat": 44.76861,
    "lon": 39.87333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Beloretsk",
    "name_en": "Beloretsk",
    "name_ru": "Белорецк",
    "lat": 53.967,
    "lon": 58.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belovo,_Kemerovo_Oblast",
    "name_en": "Belovo",
    "name_ru": "Белово",
    "lat": 54.417,
    "lon": 86.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Beloyarsky,_Khanty-Mansi_Autonomous_Okrug",
    "name_en": "Beloyarsky",
    "name_ru": "Белоярский",
    "lat": 63.717,
    "lon": 66.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belozersk",
    "name_en": "Belozersk",
    "name_ru": "Белозерск",
    "lat": 60.033,
    "lon": 37.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bely,_Tver_Oblast",
    "name_en": "Bely",
    "name_ru": "Белый",
    "lat": 55.833,
    "lon": 32.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Belyov",
    "name_en": "Belyov",
    "name_ru": "Белёв",
    "lat": 53.8,
    "lon": 36.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Berdsk",
    "name_en": "Berdsk",
    "name_ru": "Бердск",
    "lat": 54.75,
    "lon": 83.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Berezniki",
    "name_en": "Berezniki",
    "name_ru": "Березники",
    "lat": 59.417,
    "lon": 56.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Beryozovsky,_Kemerovo_Oblast",
    "name_en": "Berezovsky",
    "name_ru": "Березовский",
    "lat": 55.667,
    "lon": 86.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Beryozovsky,_Sverdlovsk_Oblast",
    "name_en": "Berezovsky",
    "name_ru": "Березовский",
    "lat": 56.917,
    "lon": 60.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Beslan",
    "name_en": "Beslan",
    "name_ru": "Беслан",
    "lat": 43.183,
    "lon": 44.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bezhetsk",
    "name_en": "Bezhetsk",
    "name_ru": "Бежецк",
    "lat": 57.783,
    "lon": 36.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bikin",
    "name_en": "Bikin",
    "name_ru": "Бикин",
    "lat": 46.817,
    "lon": 134.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bilibino",
    "name_en": "Bilibino",
    "name_ru": "Билибино",
    "lat": 68.05,
    "lon": 166.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Birobidzhan",
    "name_en": "Birobidzhan",
    "name_ru": "Биробиджан",
    "lat": 48.80139,
    "lon": 132.90111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Birsk",
    "name_en": "Birsk",
    "name_ru": "Бирск",
    "lat": 55.417,
    "lon": 55.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Biryuch",
    "name_en": "Biryuch",
    "name_ru": "Бирюч",
    "lat": 50.65,
    "lon": 38.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Biryusinsk",
    "name_en": "Biryusinsk",
    "name_ru": "Бирюсинск",
    "lat": 55.967,
    "lon": 97.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Biysk",
    "name_en": "Biysk",
    "name_ru": "Бийск",
    "lat": 52.517,
    "lon": 85.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Blagodarny,_Stavropol_Krai",
    "name_en": "Blagodarny",
    "name_ru": "Благодарный",
    "lat": 45.1,
    "lon": 43.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Blagoveshchensk",
    "name_en": "Blagoveshchensk",
    "name_ru": "Благовещенск",
    "lat": 50.367,
    "lon": 127.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Blagoveshchensk,_Republic_of_Bashkortostan",
    "name_en": "Blagoveshchensk",
    "name_ru": "Благовещенск",
    "lat": 55.035,
    "lon": 55.97806
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bobrov,_Bobrovsky_District,_Voronezh_Oblast",
    "name_en": "Bobrov",
    "name_ru": "Бобров",
    "lat": 51.1,
    "lon": 40.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bodaybo",
    "name_en": "Bodaybo",
    "name_ru": "Бодайбо",
    "lat": 57.867,
    "lon": 114.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bogdanovich_(town)",
    "name_en": "Bogdanovich",
    "name_ru": "Богданович",
    "lat": 56.7803,
    "lon": 62.0494
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bogoroditsk",
    "name_en": "Bogoroditsk",
    "name_ru": "Богородицк",
    "lat": 53.767,
    "lon": 38.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bogorodsk,_Bogorodsky_District,_Nizhny_Novgorod_Oblast",
    "name_en": "Bogorodsk",
    "name_ru": "Богородск",
    "lat": 56.10333,
    "lon": 43.51583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bogotol",
    "name_en": "Bogotol",
    "name_ru": "Боготол",
    "lat": 56.2,
    "lon": 89.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Boguchar",
    "name_en": "Boguchar",
    "name_ru": "Богучар",
    "lat": 49.95,
    "lon": 40.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Boksitogorsk",
    "name_en": "Boksitogorsk",
    "name_ru": "Бокситогорск",
    "lat": 59.483,
    "lon": 33.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bolgar,_Spassky_District,_Republic_of_Tatarstan",
    "name_en": "Bolgar",
    "name_ru": "Болгар",
    "lat": 54.97417,
    "lon": 49.03083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bolkhov",
    "name_en": "Bolkhov",
    "name_ru": "Болхов",
    "lat": 53.433,
    "lon": 36.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bologoye",
    "name_en": "Bologoye",
    "name_ru": "Бологое",
    "lat": 57.867,
    "lon": 34.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bolokhovo",
    "name_en": "Bolokhovo",
    "name_ru": "Болохово",
    "lat": 54.0936,
    "lon": 37.8183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bolotnoye",
    "name_en": "Bolotnoye",
    "name_ru": "Болотное",
    "lat": 55.667,
    "lon": 84.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bolshoy_Kamen",
    "name_en": "Bolshoy Kamen",
    "name_ru": "Большой Камень",
    "lat": 43.117,
    "lon": 132.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bor,_Nizhny_Novgorod_Oblast",
    "name_en": "Bor",
    "name_ru": "Бор",
    "lat": 56.35,
    "lon": 44.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Borisoglebsk",
    "name_en": "Borisoglebsk",
    "name_ru": "Борисоглебск",
    "lat": 51.38278,
    "lon": 42.075
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Borodino,_Krasnoyarsk_Krai",
    "name_en": "Borodino",
    "name_ru": "Бородино",
    "lat": 55.90556,
    "lon": 94.89972
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Borovichi",
    "name_en": "Borovichi",
    "name_ru": "Боровичи",
    "lat": 58.4,
    "lon": 33.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Borovsk",
    "name_en": "Borovsk",
    "name_ru": "Боровск",
    "lat": 55.2,
    "lon": 36.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Borzya",
    "name_en": "Borzya",
    "name_ru": "Борзя",
    "lat": 50.383,
    "lon": 116.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bratsk",
    "name_en": "Bratsk",
    "name_ru": "Братск",
    "lat": 56.117,
    "lon": 101.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bronnitsy",
    "name_en": "Bronnitsy",
    "name_ru": "Бронницы",
    "lat": 55.42611,
    "lon": 38.265
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bryansk",
    "name_en": "Bryansk",
    "name_ru": "Брянск",
    "lat": 53.25,
    "lon": 34.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Budyonnovsk",
    "name_en": "Budyonnovsk",
    "name_ru": "Будённовск",
    "lat": 44.78389,
    "lon": 44.16583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Bugulma",
    "name_en": "Bugulma",
    "name_ru": "Бугульма",
    "lat": 54.53639,
    "lon": 52.7975
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Buguruslan",
    "name_en": "Buguruslan",
    "name_ru": "Бугуруслан",
    "lat": 53.65833,
    "lon": 52.43583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Buinsk,_Republic_of_Tatarstan",
    "name_en": "Buinsk",
    "name_ru": "Буинск",
    "lat": 54.967,
    "lon": 48.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Buturlinovka",
    "name_en": "Buturlinovka",
    "name_ru": "Бутурлиновка",
    "lat": 50.833,
    "lon": 40.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Buy,_Kostroma_Oblast",
    "name_en": "Buy",
    "name_ru": "Буй",
    "lat": 58.483,
    "lon": 41.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Buynaksk",
    "name_en": "Buynaksk",
    "name_ru": "Буйнакск",
    "lat": 42.817,
    "lon": 47.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Buzuluk,_Orenburg_Oblast",
    "name_en": "Buzuluk",
    "name_ru": "Бузулук",
    "lat": 52.783,
    "lon": 52.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chadan_(town)",
    "name_en": "Chadan",
    "name_ru": "Чадан",
    "lat": 51.283,
    "lon": 91.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chapayevsk",
    "name_en": "Chapayevsk",
    "name_ru": "Чапаевск",
    "lat": 52.983,
    "lon": 49.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chaplygin,_Lipetsk_Oblast",
    "name_en": "Chaplygin",
    "name_ru": "Чаплыгин",
    "lat": 53.25,
    "lon": 39.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chaykovsky,_Perm_Krai",
    "name_en": "Chaykovsky",
    "name_ru": "Чайковский",
    "lat": 56.783,
    "lon": 54.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chebarkul",
    "name_en": "Chebarkul",
    "name_ru": "Чебаркуль",
    "lat": 54.983,
    "lon": 60.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Cheboksary",
    "name_en": "Cheboksary",
    "name_ru": "Чебоксары",
    "lat": 56.11028,
    "lon": 47.25111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chegem",
    "name_en": "Chegem",
    "name_ru": "Чегем",
    "lat": 43.567,
    "lon": 43.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chekalin",
    "name_en": "Chekalin",
    "name_ru": "Чекалин",
    "lat": 54.1,
    "lon": 36.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chekhov,_Moscow_Oblast",
    "name_en": "Chekhov",
    "name_ru": "Чехов",
    "lat": 55.14806,
    "lon": 37.47694
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chelyabinsk",
    "name_en": "Chelyabinsk",
    "name_ru": "Челябинск",
    "lat": 55.15472,
    "lon": 61.37583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Cherdyn,_Perm_Krai",
    "name_en": "Cherdyn",
    "name_ru": "Чердынь",
    "lat": 60.40167,
    "lon": 56.47944
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Cheremkhovo",
    "name_en": "Cheremkhovo",
    "name_ru": "Черемхово",
    "lat": 53.15,
    "lon": 103.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Cherepanovo,_Novosibirsk_Oblast",
    "name_en": "Cherepanovo",
    "name_ru": "Черепаново",
    "lat": 54.217,
    "lon": 83.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Cherepovets",
    "name_en": "Cherepovets",
    "name_ru": "Череповец",
    "lat": 59.2,
    "lon": 37.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Cherkessk",
    "name_en": "Cherkessk",
    "name_ru": "Черкесск",
    "lat": 44.217,
    "lon": 42.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chernogolovka",
    "name_en": "Chernogolovka",
    "name_ru": "Черноголовка",
    "lat": 56.0,
    "lon": 38.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chernogorsk",
    "name_en": "Chernogorsk",
    "name_ru": "Черногорск",
    "lat": 53.82361,
    "lon": 91.28417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chernushka,_Chernushinsky_District,_Perm_Krai",
    "name_en": "Chernushka",
    "name_ru": "Чернушка",
    "lat": 56.5,
    "lon": 56.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chernyakhovsk",
    "name_en": "Chernyakhovsk",
    "name_ru": "Черняховск",
    "lat": 54.63472,
    "lon": 21.81194
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chistopol",
    "name_en": "Chistopol",
    "name_ru": "Чистополь",
    "lat": 55.36472,
    "lon": 50.62611
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chita,_Zabaykalsky_Krai",
    "name_en": "Chita",
    "name_ru": "Чита",
    "lat": 52.05,
    "lon": 113.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chkalovsk,_Russia",
    "name_en": "Chkalovsk",
    "name_ru": "Чкаловск",
    "lat": 56.767,
    "lon": 43.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chudovo,_Chudovsky_District,_Novgorod_Oblast",
    "name_en": "Chudovo",
    "name_ru": "Чудово",
    "lat": 59.133,
    "lon": 31.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chukhloma",
    "name_en": "Chukhloma",
    "name_ru": "Чухлома",
    "lat": 58.75,
    "lon": 42.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chulym,_Novosibirsk_Oblast",
    "name_en": "Chulym",
    "name_ru": "Чулым",
    "lat": 55.1,
    "lon": 80.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chusovoy",
    "name_en": "Chusovoy",
    "name_ru": "Чусовой",
    "lat": 58.283,
    "lon": 57.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Chyormoz",
    "name_en": "Chyormoz",
    "name_ru": "Чёрмоз",
    "lat": 58.7811,
    "lon": 56.16
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dagestanskiye_Ogni",
    "name_en": "Dagestanskiye Ogni",
    "name_ru": "Дагестанские Огни",
    "lat": 42.117,
    "lon": 48.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dalmatovo",
    "name_en": "Dalmatovo",
    "name_ru": "Далматово",
    "lat": 56.267,
    "lon": 62.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dalnegorsk",
    "name_en": "Dalnegorsk",
    "name_ru": "Дальнегорск",
    "lat": 44.533,
    "lon": 135.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dalnerechensk",
    "name_en": "Dalnerechensk",
    "name_ru": "Дальнереченск",
    "lat": 45.933,
    "lon": 133.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Danilov,_Yaroslavl_Oblast",
    "name_en": "Danilov",
    "name_ru": "Данилов",
    "lat": 58.183,
    "lon": 40.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dankov",
    "name_en": "Dankov",
    "name_ru": "Данков",
    "lat": 53.2517,
    "lon": 39.1478
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Davlekanovo",
    "name_en": "Davlekanovo",
    "name_ru": "Давлеканово",
    "lat": 54.217,
    "lon": 55.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dedovsk",
    "name_en": "Dedovsk",
    "name_ru": "Дедовск",
    "lat": 55.867,
    "lon": 37.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Degtyarsk",
    "name_en": "Degtyarsk",
    "name_ru": "Дегтярск",
    "lat": 56.69611,
    "lon": 60.09806
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Demidov,_Smolensk_Oblast",
    "name_en": "Demidov",
    "name_ru": "Демидов",
    "lat": 55.267,
    "lon": 31.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Derbent",
    "name_en": "Derbent",
    "name_ru": "Дербент",
    "lat": 42.05,
    "lon": 48.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Desnogorsk",
    "name_en": "Desnogorsk",
    "name_ru": "Десногорск",
    "lat": 54.15,
    "lon": 33.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Digora",
    "name_en": "Digora",
    "name_ru": "Дигора",
    "lat": 43.15806,
    "lon": 44.15694
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dimitrovgrad,_Russia",
    "name_en": "Dimitrovgrad",
    "name_ru": "Димитровград",
    "lat": 54.183,
    "lon": 49.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Divnogorsk",
    "name_en": "Divnogorsk",
    "name_ru": "Дивногорск",
    "lat": 55.95944,
    "lon": 92.36194
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dmitriyev_(town)",
    "name_en": "Dmitriyev",
    "name_ru": "Дмитриев",
    "lat": 52.117,
    "lon": 35.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dmitrov",
    "name_en": "Dmitrov",
    "name_ru": "Дмитров",
    "lat": 56.35,
    "lon": 37.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dmitrovsk",
    "name_en": "Dmitrovsk",
    "name_ru": "Дмитровск",
    "lat": 52.5078,
    "lon": 35.1439
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dno",
    "name_en": "Dno",
    "name_ru": "Дно",
    "lat": 57.817,
    "lon": 29.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dobryanka",
    "name_en": "Dobryanka",
    "name_ru": "Добрянка",
    "lat": 58.45,
    "lon": 56.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dolgoprudny",
    "name_en": "Dolgoprudny",
    "name_ru": "Долгопрудный",
    "lat": 55.933,
    "lon": 37.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dolinsk,_Sakhalin_Oblast",
    "name_en": "Dolinsk",
    "name_ru": "Долинск",
    "lat": 47.317,
    "lon": 142.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Domodedovo_(town)",
    "name_en": "Domodedovo",
    "name_ru": "Домодедово",
    "lat": 55.44,
    "lon": 37.76194
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Donetsk,_Russia",
    "name_en": "Donetsk",
    "name_ru": "Донецк",
    "lat": 48.333,
    "lon": 39.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Donskoy,_Tula_Oblast",
    "name_en": "Donskoy",
    "name_ru": "Донской",
    "lat": 53.96583,
    "lon": 38.32472
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dorogobuzh",
    "name_en": "Dorogobuzh",
    "name_ru": "Дорогобуж",
    "lat": 54.917,
    "lon": 33.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Drezna",
    "name_en": "Drezna",
    "name_ru": "Дрезна",
    "lat": 55.75,
    "lon": 38.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dubna",
    "name_en": "Dubna",
    "name_ru": "Дубна",
    "lat": 56.733,
    "lon": 37.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dubovka,_Dubovsky_District,_Volgograd_Oblast",
    "name_en": "Dubovka",
    "name_ru": "Дубовка",
    "lat": 49.05,
    "lon": 44.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dudinka",
    "name_en": "Dudinka",
    "name_ru": "Дудинка",
    "lat": 69.4,
    "lon": 86.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dukhovshchina,_Smolensk_Oblast",
    "name_en": "Dukhovshchina",
    "name_ru": "Духовщина",
    "lat": 55.2,
    "lon": 32.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dyatkovo",
    "name_en": "Dyatkovo",
    "name_ru": "Дятьково",
    "lat": 53.6,
    "lon": 34.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dyurtyuli",
    "name_en": "Dyurtyuli",
    "name_ru": "Дюртюли",
    "lat": 55.483,
    "lon": 54.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dzerzhinsk,_Russia",
    "name_en": "Dzerzhinsk",
    "name_ru": "Дзержинск",
    "lat": 56.233,
    "lon": 43.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Dzerzhinsky,_Moscow_Oblast",
    "name_en": "Dzerzhinsky",
    "name_ru": "Дзержинский",
    "lat": 55.633,
    "lon": 37.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Elektrogorsk",
    "name_en": "Elektrogorsk",
    "name_ru": "Электрогорск",
    "lat": 55.883,
    "lon": 38.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Elektrostal",
    "name_en": "Elektrostal",
    "name_ru": "Электросталь",
    "lat": 55.783,
    "lon": 38.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Elektrougli",
    "name_en": "Elektrougli",
    "name_ru": "Электроугли",
    "lat": 55.717,
    "lon": 38.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Elista",
    "name_en": "Elista",
    "name_ru": "Элиста",
    "lat": 46.317,
    "lon": 44.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Engels,_Saratov_Oblast",
    "name_en": "Engels",
    "name_ru": "Энгельс",
    "lat": 51.483,
    "lon": 46.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ertil,_Voronezh_Oblast",
    "name_en": "Ertil",
    "name_ru": "Эртиль",
    "lat": 51.85,
    "lon": 40.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Fatezh",
    "name_en": "Fatezh",
    "name_ru": "Фатеж",
    "lat": 52.1,
    "lon": 35.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Fokino,_Bryansk_Oblast",
    "name_en": "Fokino",
    "name_ru": "Фокино",
    "lat": 53.21278,
    "lon": 34.41861
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Fokino,_Primorsky_Krai",
    "name_en": "Fokino",
    "name_ru": "Фокино",
    "lat": 42.967,
    "lon": 132.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Frolovo",
    "name_en": "Frolovo",
    "name_ru": "Фролово",
    "lat": 49.77,
    "lon": 43.65417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Fryazino",
    "name_en": "Fryazino",
    "name_ru": "Фрязино",
    "lat": 55.95,
    "lon": 38.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Furmanov,_Ivanovo_Oblast",
    "name_en": "Furmanov",
    "name_ru": "Фурманов",
    "lat": 57.25,
    "lon": 41.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gadzhiyevo",
    "name_en": "Gadzhiyevo",
    "name_ru": "Гаджиево",
    "lat": 69.25,
    "lon": 33.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gagarin,_Russia",
    "name_en": "Gagarin",
    "name_ru": "Гагарин",
    "lat": 55.55,
    "lon": 34.983
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Galich,_Russia",
    "name_en": "Galich",
    "name_ru": "Галич",
    "lat": 58.383,
    "lon": 42.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gatchina",
    "name_en": "Gatchina",
    "name_ru": "Гатчина",
    "lat": 59.583,
    "lon": 30.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gavrilov_Posad",
    "name_en": "Gavrilov Posad",
    "name_ru": "Гаврилов Посад",
    "lat": 56.55,
    "lon": 40.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gavrilov-Yam",
    "name_en": "Gavrilov-Yam",
    "name_ru": "Гаврилов-Ям",
    "lat": 57.3,
    "lon": 39.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gay,_Orenburg_Oblast",
    "name_en": "Gay",
    "name_ru": "Гай",
    "lat": 51.467,
    "lon": 58.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gdov",
    "name_en": "Gdov",
    "name_ru": "Гдов",
    "lat": 58.75,
    "lon": 27.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gelendzhik",
    "name_en": "Gelendzhik",
    "name_ru": "Геленджик",
    "lat": 44.55,
    "lon": 38.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Georgiyevsk",
    "name_en": "Georgiyevsk",
    "name_ru": "Георгиевск",
    "lat": 44.15,
    "lon": 43.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Glazov",
    "name_en": "Glazov",
    "name_ru": "Глазов",
    "lat": 58.133,
    "lon": 52.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Golitsyno",
    "name_en": "Golitsyno",
    "name_ru": "Голицыно",
    "lat": 55.61472,
    "lon": 36.98722
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gorbatov_(town)",
    "name_en": "Gorbatov",
    "name_ru": "Горбатов",
    "lat": 56.13306,
    "lon": 43.05833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gorno-Altaysk",
    "name_en": "Gorno-Altaysk",
    "name_ru": "Горно-Алтайск",
    "lat": 51.95,
    "lon": 85.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gornozavodsk,_Perm_Krai",
    "name_en": "Gornozavodsk",
    "name_ru": "Горнозаводск",
    "lat": 58.37583,
    "lon": 58.32111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gornyak,_Altai_Krai",
    "name_en": "Gornyak",
    "name_ru": "Горняк",
    "lat": 50.983,
    "lon": 81.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gorodets,_Nizhny_Novgorod_Oblast",
    "name_en": "Gorodets",
    "name_ru": "Городец",
    "lat": 56.65,
    "lon": 43.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gorodishche,_Gorodishchensky_District,_Penza_Oblast",
    "name_en": "Gorodishche",
    "name_ru": "Городище",
    "lat": 53.27472,
    "lon": 45.70083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gorodovikovsk",
    "name_en": "Gorodovikovsk",
    "name_ru": "Городовиковск",
    "lat": 46.083,
    "lon": 41.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gorokhovets,_Vladimir_Oblast",
    "name_en": "Gorokhovets",
    "name_ru": "Гороховец",
    "lat": 56.2,
    "lon": 42.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Goryachy_Klyuch",
    "name_en": "Goryachy Klyuch",
    "name_ru": "Горячий Ключ",
    "lat": 44.633,
    "lon": 39.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Grayvoron",
    "name_en": "Grayvoron",
    "name_ru": "Грайворон",
    "lat": 50.483,
    "lon": 35.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gremyachinsk",
    "name_en": "Gremyachinsk",
    "name_ru": "Гремячинск",
    "lat": 58.567,
    "lon": 57.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Grozny",
    "name_en": "Grozny",
    "name_ru": "Грозный",
    "lat": 43.333,
    "lon": 45.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gryazi",
    "name_en": "Gryazi",
    "name_ru": "Грязи",
    "lat": 52.4917,
    "lon": 39.9436
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gryazovets",
    "name_en": "Gryazovets",
    "name_ru": "Грязовец",
    "lat": 58.883,
    "lon": 40.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gubakha",
    "name_en": "Gubakha",
    "name_ru": "Губаха",
    "lat": 58.87056,
    "lon": 57.59333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gubkin",
    "name_en": "Gubkin",
    "name_ru": "Губкин",
    "lat": 51.283,
    "lon": 37.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gubkinsky_(town)",
    "name_en": "Gubkinsky",
    "name_ru": "Губкинский",
    "lat": 66.433,
    "lon": 76.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gudermes",
    "name_en": "Gudermes",
    "name_ru": "Гудермес",
    "lat": 43.35,
    "lon": 46.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gukovo",
    "name_en": "Gukovo",
    "name_ru": "Гуково",
    "lat": 48.05,
    "lon": 39.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gulkevichi",
    "name_en": "Gulkevichi",
    "name_ru": "Гулькевичи",
    "lat": 45.35944,
    "lon": 40.70722
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Guryevsk,_Kaliningrad_Oblast",
    "name_en": "Guryevsk",
    "name_ru": "Гурьевск",
    "lat": 54.783,
    "lon": 20.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Guryevsk,_Kemerovo_Oblast",
    "name_en": "Guryevsk",
    "name_ru": "Гурьевск",
    "lat": 54.283,
    "lon": 85.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gusev",
    "name_en": "Gusev",
    "name_ru": "Гусев",
    "lat": 54.583,
    "lon": 22.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gusinoozersk",
    "name_en": "Gusinoozersk",
    "name_ru": "Гусиноозерск",
    "lat": 51.283,
    "lon": 106.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gus-Khrustalny_(town)",
    "name_en": "Gus-Khrustalny",
    "name_ru": "Гусь-Хрустальный",
    "lat": 55.617,
    "lon": 40.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Gvardeysk",
    "name_en": "Gvardeysk",
    "name_ru": "Гвардейск",
    "lat": 54.667,
    "lon": 21.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Igarka",
    "name_en": "Igarka",
    "name_ru": "Игарка",
    "lat": 67.467,
    "lon": 86.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ilansky_(town)",
    "name_en": "Ilansky",
    "name_ru": "Иланский",
    "lat": 56.24139,
    "lon": 96.05806
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Insar,_Insarsky_District,_Republic_of_Mordovia",
    "name_en": "Insar",
    "name_ru": "Инсар",
    "lat": 53.867,
    "lon": 44.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Inta",
    "name_en": "Inta",
    "name_ru": "Инта",
    "lat": 66.083,
    "lon": 60.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Inza,_Russia",
    "name_en": "Inza",
    "name_ru": "Инза",
    "lat": 53.8533,
    "lon": 46.3586
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ipatovo,_Stavropol_Krai",
    "name_en": "Ipatovo",
    "name_ru": "Ипатово",
    "lat": 45.0,
    "lon": 42.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Irbit",
    "name_en": "Irbit",
    "name_ru": "Ирбит",
    "lat": 57.667,
    "lon": 63.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Irkutsk",
    "name_en": "Irkutsk",
    "name_ru": "Иркутск",
    "lat": 52.31222,
    "lon": 104.29583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ishim,_Tyumen_Oblast",
    "name_en": "Ishim",
    "name_ru": "Ишим",
    "lat": 56.117,
    "lon": 69.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ishimbay",
    "name_en": "Ishimbay",
    "name_ru": "Ишимбай",
    "lat": 53.45,
    "lon": 56.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Isilkul",
    "name_en": "Isilkul",
    "name_ru": "Исилькуль",
    "lat": 54.90333,
    "lon": 71.27278
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Iskitim",
    "name_en": "Iskitim",
    "name_ru": "Искитим",
    "lat": 54.64,
    "lon": 83.30611
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Istra,_Istrinsky_District,_Moscow_Oblast",
    "name_en": "Istra",
    "name_ru": "Истра",
    "lat": 55.917,
    "lon": 36.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ivangorod",
    "name_en": "Ivangorod",
    "name_ru": "Ивангород",
    "lat": 59.367,
    "lon": 28.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ivanovo",
    "name_en": "Ivanovo",
    "name_ru": "Иваново",
    "lat": 56.99667,
    "lon": 40.98194
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ivanteyevka,_Moscow_Oblast",
    "name_en": "Ivanteyevka",
    "name_ru": "Ивантеевка",
    "lat": 55.983,
    "lon": 37.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ivdel",
    "name_en": "Ivdel",
    "name_ru": "Ивдель",
    "lat": 60.683,
    "lon": 60.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Izberbash",
    "name_en": "Izberbash",
    "name_ru": "Избербаш",
    "lat": 42.56333,
    "lon": 47.86361
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Izhevsk",
    "name_en": "Izhevsk",
    "name_ru": "Ижевск",
    "lat": 56.833,
    "lon": 53.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Izobilny,_Stavropol_Krai",
    "name_en": "Izobilny",
    "name_ru": "Изобильный",
    "lat": 45.367,
    "lon": 41.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kachkanar",
    "name_en": "Kachkanar",
    "name_ru": "Качканар",
    "lat": 58.7,
    "lon": 59.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kadnikov",
    "name_en": "Kadnikov",
    "name_ru": "Кадников",
    "lat": 59.5,
    "lon": 40.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kalach,_Kalacheyevsky_District,_Voronezh_Oblast",
    "name_en": "Kalach",
    "name_ru": "Калач",
    "lat": 50.433,
    "lon": 41.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kalach-na-Donu",
    "name_en": "Kalach-na-Donu",
    "name_ru": "Калач-на-Дону",
    "lat": 48.7,
    "lon": 43.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kalachinsk",
    "name_en": "Kalachinsk",
    "name_ru": "Калачинск",
    "lat": 55.05,
    "lon": 74.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kaliningrad",
    "name_en": "Kaliningrad",
    "name_ru": "Калининград",
    "lat": 54.717,
    "lon": 20.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kalininsk,_Saratov_Oblast",
    "name_en": "Kalininsk",
    "name_ru": "Калининск",
    "lat": 52.5,
    "lon": 44.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kaltan",
    "name_en": "Kaltan",
    "name_ru": "Калтан",
    "lat": 53.517,
    "lon": 87.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kaluga",
    "name_en": "Kaluga",
    "name_ru": "Калуга",
    "lat": 54.55,
    "lon": 36.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kalyazin",
    "name_en": "Kalyazin",
    "name_ru": "Калязин",
    "lat": 57.233,
    "lon": 37.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kambarka",
    "name_en": "Kambarka",
    "name_ru": "Камбарка",
    "lat": 56.267,
    "lon": 54.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kamenka,_Penza_Oblast",
    "name_en": "Kamenka",
    "name_ru": "Каменка",
    "lat": 53.183,
    "lon": 44.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kamen-na-Obi",
    "name_en": "Kamen-na-Obi",
    "name_ru": "Камень-на-Оби",
    "lat": 53.79194,
    "lon": 81.34861
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kamennogorsk",
    "name_en": "Kamennogorsk",
    "name_ru": "Каменногорск",
    "lat": 60.967,
    "lon": 29.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kamensk-Shakhtinsky",
    "name_en": "Kamensk-Shakhtinsky",
    "name_ru": "Каменск-Шахтинский",
    "lat": 48.32056,
    "lon": 40.26111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kamensk-Uralsky",
    "name_en": "Kamensk-Uralsky",
    "name_ru": "Каменск-Уральский",
    "lat": 56.4,
    "lon": 61.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kameshkovo,_Vladimir_Oblast",
    "name_en": "Kameshkovo",
    "name_ru": "Камешково",
    "lat": 56.35,
    "lon": 41.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kamyshin",
    "name_en": "Kamyshin",
    "name_ru": "Камышин",
    "lat": 50.083,
    "lon": 45.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kamyshlov",
    "name_en": "Kamyshlov",
    "name_ru": "Камышлов",
    "lat": 56.833,
    "lon": 62.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kamyzyak",
    "name_en": "Kamyzyak",
    "name_ru": "Камызяк",
    "lat": 46.117,
    "lon": 48.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kanash",
    "name_en": "Kanash",
    "name_ru": "Канаш",
    "lat": 55.517,
    "lon": 47.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kandalaksha",
    "name_en": "Kandalaksha",
    "name_ru": "Кандалакша",
    "lat": 67.15,
    "lon": 32.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kansk",
    "name_en": "Kansk",
    "name_ru": "Канск",
    "lat": 56.2,
    "lon": 95.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Karabanovo,_Vladimir_Oblast",
    "name_en": "Karabanovo",
    "name_ru": "Карабаново",
    "lat": 56.317,
    "lon": 38.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Karabash,_Chelyabinsk_Oblast",
    "name_en": "Karabash",
    "name_ru": "Карабаш",
    "lat": 55.483,
    "lon": 60.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Karabulak,_Republic_of_Ingushetia",
    "name_en": "Karabulak",
    "name_ru": "Карабулак",
    "lat": 43.3,
    "lon": 44.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Karachayevsk",
    "name_en": "Karachayevsk",
    "name_ru": "Карачаевск",
    "lat": 43.77306,
    "lon": 41.91694
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Karachev",
    "name_en": "Karachev",
    "name_ru": "Карачев",
    "lat": 53.117,
    "lon": 34.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Karasuk_(town)",
    "name_en": "Karasuk",
    "name_ru": "Карасук",
    "lat": 53.733,
    "lon": 78.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kargat",
    "name_en": "Kargat",
    "name_ru": "Каргат",
    "lat": 55.19556,
    "lon": 80.28111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kargopol",
    "name_en": "Kargopol",
    "name_ru": "Каргополь",
    "lat": 61.5,
    "lon": 38.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Karpinsk",
    "name_en": "Karpinsk",
    "name_ru": "Карпинск",
    "lat": 59.7575,
    "lon": 60.01111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kartaly",
    "name_en": "Kartaly",
    "name_ru": "Карталы",
    "lat": 53.05,
    "lon": 60.6667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kashin_(town)",
    "name_en": "Kashin",
    "name_ru": "Кашин",
    "lat": 57.35,
    "lon": 37.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kashira",
    "name_en": "Kashira",
    "name_ru": "Кашира",
    "lat": 54.833,
    "lon": 38.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kasimov",
    "name_en": "Kasimov",
    "name_ru": "Касимов",
    "lat": 54.933,
    "lon": 41.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kasli",
    "name_en": "Kasli",
    "name_ru": "Касли",
    "lat": 55.883,
    "lon": 60.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kaspiysk",
    "name_en": "Kaspiysk",
    "name_ru": "Каспийск",
    "lat": 42.88028,
    "lon": 47.63833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Katav-Ivanovsk",
    "name_en": "Katav-Ivanovsk",
    "name_ru": "Катав-Ивановск",
    "lat": 54.75,
    "lon": 58.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kataysk,_Kurgan_Oblast",
    "name_en": "Kataysk",
    "name_ru": "Катайск",
    "lat": 56.3,
    "lon": 62.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kazan",
    "name_en": "Kazan",
    "name_ru": "Казань",
    "lat": 55.79028,
    "lon": 49.13472
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kedrovy,_Tomsk_Oblast",
    "name_en": "Kedrovy",
    "name_ru": "Кедровый",
    "lat": 57.567,
    "lon": 79.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kem,_Russia",
    "name_en": "Kem",
    "name_ru": "Кемь",
    "lat": 64.95,
    "lon": 34.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kemerovo",
    "name_en": "Kemerovo",
    "name_ru": "Кемерово",
    "lat": 55.36083,
    "lon": 86.08889
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Khabarovsk",
    "name_en": "Khabarovsk",
    "name_ru": "Хабаровск",
    "lat": 48.483,
    "lon": 135.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Khadyzhensk",
    "name_en": "Khadyzhensk",
    "name_ru": "Хадыженск",
    "lat": 44.42556,
    "lon": 39.53194
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Khanty-Mansiysk",
    "name_en": "Khanty-Mansiysk",
    "name_ru": "Ханты-Мансийск",
    "lat": 61.0,
    "lon": 69.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kharabali",
    "name_en": "Kharabali",
    "name_ru": "Харабали",
    "lat": 47.405,
    "lon": 47.25556
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kharovsk",
    "name_en": "Kharovsk",
    "name_ru": "Харовск",
    "lat": 59.95,
    "lon": 40.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Khasavyurt",
    "name_en": "Khasavyurt",
    "name_ru": "Хасавюрт",
    "lat": 43.25,
    "lon": 46.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Khilok,_Zabaykalsky_Krai",
    "name_en": "Khilok",
    "name_ru": "Хилок",
    "lat": 51.35,
    "lon": 110.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Khimki",
    "name_en": "Khimki",
    "name_ru": "Химки",
    "lat": 55.9,
    "lon": 37.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kholm,_Kholmsky_District,_Novgorod_Oblast",
    "name_en": "Kholm",
    "name_ru": "Холм",
    "lat": 57.15,
    "lon": 31.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kholmsk",
    "name_en": "Kholmsk",
    "name_ru": "Холмск",
    "lat": 47.05,
    "lon": 142.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Khotkovo",
    "name_en": "Khotkovo",
    "name_ru": "Хотьково",
    "lat": 56.25,
    "lon": 37.983
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Khvalynsk",
    "name_en": "Khvalynsk",
    "name_ru": "Хвалынск",
    "lat": 52.517,
    "lon": 48.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kimovsk",
    "name_en": "Kimovsk",
    "name_ru": "Кимовск",
    "lat": 53.96667,
    "lon": 38.53333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kimry",
    "name_en": "Kimry",
    "name_ru": "Кимры",
    "lat": 56.867,
    "lon": 37.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kinel",
    "name_en": "Kinel",
    "name_ru": "Кинель",
    "lat": 53.22222,
    "lon": 50.63333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kineshma",
    "name_en": "Kineshma",
    "name_ru": "Кинешма",
    "lat": 57.433,
    "lon": 42.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kingisepp",
    "name_en": "Kingisepp",
    "name_ru": "Кингисепп",
    "lat": 59.367,
    "lon": 28.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirensk",
    "name_en": "Kirensk",
    "name_ru": "Киренск",
    "lat": 57.783,
    "lon": 108.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kireyevsk",
    "name_en": "Kireyevsk",
    "name_ru": "Киреевск",
    "lat": 53.9353,
    "lon": 37.9231
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirillov_(town)",
    "name_en": "Kirillov",
    "name_ru": "Кириллов",
    "lat": 59.85,
    "lon": 38.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirishi",
    "name_en": "Kirishi",
    "name_ru": "Кириши",
    "lat": 59.45,
    "lon": 32.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirov,_Kaluga_Oblast",
    "name_en": "Kirov",
    "name_ru": "Киров",
    "lat": 54.083,
    "lon": 34.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirov,_Kirov_Oblast",
    "name_en": "Kirov",
    "name_ru": "Киров",
    "lat": 58.6,
    "lon": 49.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirovgrad",
    "name_en": "Kirovgrad",
    "name_ru": "Кировград",
    "lat": 57.435,
    "lon": 60.05611
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirovo-Chepetsk",
    "name_en": "Kirovo-Chepetsk",
    "name_ru": "Кирово-Чепецк",
    "lat": 58.55,
    "lon": 50.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirovsk,_Leningrad_Oblast",
    "name_en": "Kirovsk",
    "name_ru": "Кировск",
    "lat": 59.867,
    "lon": 30.983
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirovsk,_Murmansk_Oblast",
    "name_en": "Kirovsk",
    "name_ru": "Кировск",
    "lat": 67.617,
    "lon": 33.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirs,_Russia",
    "name_en": "Kirs",
    "name_ru": "Кирс",
    "lat": 59.35,
    "lon": 52.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirsanov",
    "name_en": "Kirsanov",
    "name_ru": "Кирсанов",
    "lat": 52.65,
    "lon": 42.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kirzhach",
    "name_en": "Kirzhach",
    "name_ru": "Киржач",
    "lat": 56.15,
    "lon": 38.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kiselyovsk",
    "name_en": "Kiselyovsk",
    "name_ru": "Киселёвск",
    "lat": 54.0,
    "lon": 86.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kislovodsk",
    "name_en": "Kislovodsk",
    "name_ru": "Кисловодск",
    "lat": 43.917,
    "lon": 42.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kizel",
    "name_en": "Kizel",
    "name_ru": "Кизел",
    "lat": 59.05639,
    "lon": 57.6425
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kizilyurt",
    "name_en": "Kizilyurt",
    "name_ru": "Кизилюрт",
    "lat": 43.21056,
    "lon": 46.86556
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kizlyar",
    "name_en": "Kizlyar",
    "name_ru": "Кизляр",
    "lat": 43.85,
    "lon": 46.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Klimovsk",
    "name_en": "Klimovsk",
    "name_ru": "Климовск",
    "lat": 55.367,
    "lon": 37.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Klin,_Klinsky_District,_Moscow_Oblast",
    "name_en": "Klin",
    "name_ru": "Клин",
    "lat": 56.333,
    "lon": 36.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Klintsy",
    "name_en": "Klintsy",
    "name_ru": "Клинцы",
    "lat": 52.767,
    "lon": 32.233
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Knyaginino,_Nizhny_Novgorod_Oblast",
    "name_en": "Knyaginino",
    "name_ru": "Княгинино",
    "lat": 55.817,
    "lon": 45.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kodinsk",
    "name_en": "Kodinsk",
    "name_ru": "Кодинск",
    "lat": 58.683,
    "lon": 99.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kogalym",
    "name_en": "Kogalym",
    "name_ru": "Когалым",
    "lat": 62.267,
    "lon": 74.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kokhma",
    "name_en": "Kokhma",
    "name_ru": "Кохма",
    "lat": 56.93111,
    "lon": 41.08889
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kola,_Russia",
    "name_en": "Kola",
    "name_ru": "Кола",
    "lat": 68.883,
    "lon": 33.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kolchugino,_Vladimir_Oblast",
    "name_en": "Kolchugino",
    "name_ru": "Кольчугино",
    "lat": 56.317,
    "lon": 39.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kologriv",
    "name_en": "Kologriv",
    "name_ru": "Кологрив",
    "lat": 58.8,
    "lon": 44.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kolomna",
    "name_en": "Kolomna",
    "name_ru": "Коломна",
    "lat": 55.083,
    "lon": 38.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kolpashevo",
    "name_en": "Kolpashevo",
    "name_ru": "Колпашево",
    "lat": 58.317,
    "lon": 82.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kolpino",
    "name_en": "Kolpino",
    "name_ru": "Колпино",
    "lat": 59.733,
    "lon": 30.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kommunar,_Gatchinsky_District,_Leningrad_Oblast",
    "name_en": "Kommunar",
    "name_ru": "Коммунар",
    "lat": 59.633,
    "lon": 30.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Komsomolsk,_Ivanovo_Oblast",
    "name_en": "Komsomolsk",
    "name_ru": "Комсомольск",
    "lat": 57.02611,
    "lon": 40.37889
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Komsomolsk-na-Amure",
    "name_en": "Komsomolsk-na-Amure",
    "name_ru": "Комсомольск-на-Амуре",
    "lat": 50.567,
    "lon": 137.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Konakovo",
    "name_en": "Konakovo",
    "name_ru": "Конаково",
    "lat": 56.7,
    "lon": 36.76667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kondopoga",
    "name_en": "Kondopoga",
    "name_ru": "Кондопога",
    "lat": 62.2,
    "lon": 34.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kondrovo,_Kaluga_Oblast",
    "name_en": "Kondrovo",
    "name_ru": "Кондрово",
    "lat": 54.8,
    "lon": 35.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Konstantinovsk",
    "name_en": "Konstantinovsk",
    "name_ru": "Константиновск",
    "lat": 47.58333,
    "lon": 41.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kopeysk",
    "name_en": "Kopeysk",
    "name_ru": "Копейск",
    "lat": 55.1,
    "lon": 61.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Korablino,_Korablinsky_District,_Ryazan_Oblast",
    "name_en": "Korablino",
    "name_ru": "Кораблино",
    "lat": 53.917,
    "lon": 40.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Korenovsk",
    "name_en": "Korenovsk",
    "name_ru": "Кореновск",
    "lat": 45.46861,
    "lon": 39.45194
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Korkino",
    "name_en": "Korkino",
    "name_ru": "Коркино",
    "lat": 54.89583,
    "lon": 61.37917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Korocha",
    "name_en": "Korocha",
    "name_ru": "Короча",
    "lat": 50.817,
    "lon": 37.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Korolyov,_Moscow_Oblast",
    "name_en": "Korolyov",
    "name_ru": "Королёв",
    "lat": 55.917,
    "lon": 37.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Korsakov_(town)",
    "name_en": "Korsakov",
    "name_ru": "Корсаков",
    "lat": 46.633,
    "lon": 142.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Koryazhma",
    "name_en": "Koryazhma",
    "name_ru": "Коряжма",
    "lat": 61.317,
    "lon": 47.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kosteryovo",
    "name_en": "Kosteryovo",
    "name_ru": "Костерёво",
    "lat": 55.917,
    "lon": 39.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kostomuksha",
    "name_en": "Kostomuksha",
    "name_ru": "Костомукша",
    "lat": 64.683,
    "lon": 30.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kostroma",
    "name_en": "Kostroma",
    "name_ru": "Кострома",
    "lat": 57.767,
    "lon": 40.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kotelnich",
    "name_en": "Kotelnich",
    "name_ru": "Котельнич",
    "lat": 58.30778,
    "lon": 48.31806
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kotelniki",
    "name_en": "Kotelniki",
    "name_ru": "Котельники",
    "lat": 55.65,
    "lon": 37.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kotelnikovo,_Volgograd_Oblast",
    "name_en": "Kotelnikovo",
    "name_ru": "Котельниково",
    "lat": 47.633,
    "lon": 43.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kotlas",
    "name_en": "Kotlas",
    "name_ru": "Котлас",
    "lat": 61.25,
    "lon": 46.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kotovo,_Volgograd_Oblast",
    "name_en": "Kotovo",
    "name_ru": "Котово",
    "lat": 50.3,
    "lon": 44.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kotovsk,_Russia",
    "name_en": "Kotovsk",
    "name_ru": "Котовск",
    "lat": 52.583,
    "lon": 41.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kovdor",
    "name_en": "Kovdor",
    "name_ru": "Ковдор",
    "lat": 67.55944,
    "lon": 30.46667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kovrov",
    "name_en": "Kovrov",
    "name_ru": "Ковров",
    "lat": 56.367,
    "lon": 41.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kovylkino",
    "name_en": "Kovylkino",
    "name_ru": "Ковылкино",
    "lat": 54.04028,
    "lon": 43.92139
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kozelsk",
    "name_en": "Kozelsk",
    "name_ru": "Козельск",
    "lat": 54.033,
    "lon": 35.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kozlovka,_Kozlovsky_District,_Chuvash_Republic",
    "name_en": "Kozlovka",
    "name_ru": "Козловка",
    "lat": 55.85,
    "lon": 48.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kozmodemyansk",
    "name_en": "Kozmodemyansk",
    "name_ru": "Козьмодемьянск",
    "lat": 56.33667,
    "lon": 46.57111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasavino,_Veliky_Ustyug,_Vologda_Oblast",
    "name_en": "Krasavino",
    "name_ru": "Красавино",
    "lat": 60.967,
    "lon": 46.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoarmeysk,_Moscow_Oblast",
    "name_en": "Krasnoarmeysk",
    "name_ru": "Красноармейск",
    "lat": 56.1,
    "lon": 38.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoarmeysk,_Saratov_Oblast",
    "name_en": "Krasnoarmeysk",
    "name_ru": "Красноармейск",
    "lat": 51.02306,
    "lon": 45.70306
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnodar",
    "name_en": "Krasnodar",
    "name_ru": "Краснодар",
    "lat": 45.033,
    "lon": 38.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnogorsk,_Moscow_Oblast",
    "name_en": "Krasnogorsk",
    "name_ru": "Красногорск",
    "lat": 55.817,
    "lon": 37.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnokamensk,_Zabaykalsky_Krai",
    "name_en": "Krasnokamensk",
    "name_ru": "Краснокаменск",
    "lat": 50.1,
    "lon": 118.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnokamsk",
    "name_en": "Krasnokamsk",
    "name_ru": "Краснокамск",
    "lat": 58.083,
    "lon": 55.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoslobodsk,_Volgograd_Oblast",
    "name_en": "Krasnoslobodsk",
    "name_ru": "Краснослободск",
    "lat": 48.7,
    "lon": 44.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoslobodsk,_Republic_of_Mordovia",
    "name_en": "Krasnoslobodsk",
    "name_ru": "Краснослободск",
    "lat": 54.433,
    "lon": 43.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoturinsk",
    "name_en": "Krasnoturinsk",
    "name_ru": "Краснотурьинск",
    "lat": 59.77333,
    "lon": 60.18528
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoufimsk",
    "name_en": "Krasnoufimsk",
    "name_ru": "Красноуфимск",
    "lat": 56.61667,
    "lon": 57.77222
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnouralsk",
    "name_en": "Krasnouralsk",
    "name_ru": "Красноуральск",
    "lat": 58.35028,
    "lon": 60.04528
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnovishersk",
    "name_en": "Krasnovishersk",
    "name_ru": "Красновишерск",
    "lat": 60.4,
    "lon": 57.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoyarsk",
    "name_en": "Krasnoyarsk",
    "name_ru": "Красноярск",
    "lat": 56.017,
    "lon": 93.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoye_Selo",
    "name_en": "Krasnoye Selo",
    "name_ru": "Красное Село",
    "lat": 59.733,
    "lon": 30.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnozavodsk",
    "name_en": "Krasnozavodsk",
    "name_ru": "Краснозаводск",
    "lat": 56.45,
    "lon": 38.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoznamensk,_Kaliningrad_Oblast",
    "name_en": "Krasnoznamensk",
    "name_ru": "Краснознаменск",
    "lat": 54.94222,
    "lon": 22.48972
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasnoznamensk,_Moscow_Oblast",
    "name_en": "Krasnoznamensk",
    "name_ru": "Краснознаменск",
    "lat": 55.60083,
    "lon": 37.03583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasny_Kholm,_Krasnokholmsky_District,_Tver_Oblast",
    "name_en": "Krasny Kholm",
    "name_ru": "Красный Холм",
    "lat": 58.05,
    "lon": 37.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasny_Kut,_Saratov_Oblast",
    "name_en": "Krasny Kut",
    "name_ru": "Красный Кут",
    "lat": 50.95,
    "lon": 46.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krasny_Sulin",
    "name_en": "Krasny Sulin",
    "name_ru": "Красный Сулин",
    "lat": 47.89139,
    "lon": 40.07583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kronstadt",
    "name_en": "Kronstadt",
    "name_ru": "Кронштадт",
    "lat": 60.0,
    "lon": 29.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kropotkin,_Krasnodar_Krai",
    "name_en": "Kropotkin",
    "name_ru": "Кропоткин",
    "lat": 45.433,
    "lon": 40.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Krymsk",
    "name_en": "Krymsk",
    "name_ru": "Крымск",
    "lat": 44.92333,
    "lon": 37.98056
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kstovo,_Nizhny_Novgorod_Oblast",
    "name_en": "Kstovo",
    "name_ru": "Кстово",
    "lat": 56.15,
    "lon": 44.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kubinka",
    "name_en": "Kubinka",
    "name_ru": "Кубинка",
    "lat": 55.583,
    "lon": 36.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kudymkar",
    "name_en": "Kudymkar",
    "name_ru": "Кудымкар",
    "lat": 59.017,
    "lon": 54.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kulebaki",
    "name_en": "Kulebaki",
    "name_ru": "Кулебаки",
    "lat": 55.4133,
    "lon": 42.5325
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kumertau",
    "name_en": "Kumertau",
    "name_ru": "Кумертау",
    "lat": 52.767,
    "lon": 55.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kungur",
    "name_en": "Kungur",
    "name_ru": "Кунгур",
    "lat": 57.433,
    "lon": 56.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kupino,_Novosibirsk_Oblast",
    "name_en": "Kupino",
    "name_ru": "Купино",
    "lat": 54.367,
    "lon": 77.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kurchatov,_Russia",
    "name_en": "Kurchatov",
    "name_ru": "Курчатов",
    "lat": 51.667,
    "lon": 35.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kurgan,_Kurgan_Oblast",
    "name_en": "Kurgan",
    "name_ru": "Курган",
    "lat": 55.467,
    "lon": 65.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kurganinsk",
    "name_en": "Kurganinsk",
    "name_ru": "Курганинск",
    "lat": 44.867,
    "lon": 40.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kurilsk",
    "name_en": "Kurilsk",
    "name_ru": "Курильск",
    "lat": 45.217,
    "lon": 147.883
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kurlovo_(town),_Vladimir_Oblast",
    "name_en": "Kurlovo",
    "name_ru": "Курлово",
    "lat": 55.45,
    "lon": 40.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kurovskoye,_Moscow_Oblast",
    "name_en": "Kurovskoye",
    "name_ru": "Куровское",
    "lat": 55.583,
    "lon": 38.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kursk",
    "name_en": "Kursk",
    "name_ru": "Курск",
    "lat": 51.717,
    "lon": 36.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kurtamysh_(town)",
    "name_en": "Kurtamysh",
    "name_ru": "Куртамыш",
    "lat": 54.917,
    "lon": 64.433
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kusa_(town)",
    "name_en": "Kusa",
    "name_ru": "Куса",
    "lat": 55.333,
    "lon": 59.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kushva",
    "name_en": "Kushva",
    "name_ru": "Кушва",
    "lat": 58.283,
    "lon": 59.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kuvandyk",
    "name_en": "Kuvandyk",
    "name_ru": "Кувандык",
    "lat": 51.47611,
    "lon": 57.35194
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kuvshinovo,_Kuvshinovsky_District,_Tver_Oblast",
    "name_en": "Kuvshinovo",
    "name_ru": "Кувшиново",
    "lat": 57.033,
    "lon": 34.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kuybyshev,_Novosibirsk_Oblast",
    "name_en": "Kuybyshev",
    "name_ru": "Куйбышев",
    "lat": 55.433,
    "lon": 78.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kuznetsk",
    "name_en": "Kuznetsk",
    "name_ru": "Кузнецк",
    "lat": 53.117,
    "lon": 46.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kyakhta",
    "name_en": "Kyakhta",
    "name_ru": "Кяхта",
    "lat": 50.35,
    "lon": 106.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kyshtym",
    "name_en": "Kyshtym",
    "name_ru": "Кыштым",
    "lat": 55.7,
    "lon": 60.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Kyzyl",
    "name_en": "Kyzyl",
    "name_ru": "Кызыл",
    "lat": 51.717,
    "lon": 94.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Labinsk",
    "name_en": "Labinsk",
    "name_ru": "Лабинск",
    "lat": 44.633,
    "lon": 40.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Labytnangi",
    "name_en": "Labytnangi",
    "name_ru": "Лабытнанги",
    "lat": 66.65722,
    "lon": 66.41833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ladushkin",
    "name_en": "Ladushkin",
    "name_ru": "Ладушкин",
    "lat": 54.567,
    "lon": 20.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lagan,_Russia",
    "name_en": "Lagan",
    "name_ru": "Лагань",
    "lat": 45.39083,
    "lon": 47.36583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Laishevo",
    "name_en": "Laishevo",
    "name_ru": "Лаишево",
    "lat": 55.4,
    "lon": 49.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lakhdenpokhya",
    "name_en": "Lakhdenpokhya",
    "name_ru": "Лахденпохья",
    "lat": 61.52222,
    "lon": 30.1925
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lakinsk",
    "name_en": "Lakinsk",
    "name_ru": "Лакинск",
    "lat": 56.033,
    "lon": 39.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Langepas",
    "name_en": "Langepas",
    "name_ru": "Лангепас",
    "lat": 61.25,
    "lon": 75.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lebedyan",
    "name_en": "Lebedyan",
    "name_ru": "Лебедянь",
    "lat": 53.011179,
    "lon": 39.130111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Leninogorsk,_Russia",
    "name_en": "Leninogorsk",
    "name_ru": "Лениногорск",
    "lat": 54.6,
    "lon": 52.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Leninsk,_Volgograd_Oblast",
    "name_en": "Leninsk",
    "name_ru": "Ленинск",
    "lat": 48.7,
    "lon": 45.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Leninsk-Kuznetsky_(city)",
    "name_en": "Leninsk-Kuznetsky",
    "name_ru": "Ленинск-Кузнецкий",
    "lat": 54.6575,
    "lon": 86.16167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lensk",
    "name_en": "Lensk",
    "name_ru": "Ленск",
    "lat": 60.733,
    "lon": 114.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lermontov,_Russia",
    "name_en": "Lermontov",
    "name_ru": "Лермонтов",
    "lat": 44.1,
    "lon": 42.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lesnoy,_Sverdlovsk_Oblast",
    "name_en": "Lesnoy",
    "name_ru": "Лесной",
    "lat": 58.633,
    "lon": 59.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lesosibirsk",
    "name_en": "Lesosibirsk",
    "name_ru": "Лесосибирск",
    "lat": 58.23583,
    "lon": 92.48278
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lesozavodsk",
    "name_en": "Lesozavodsk",
    "name_ru": "Лесозаводск",
    "lat": 45.467,
    "lon": 133.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lgov,_Kursk_Oblast",
    "name_en": "Lgov",
    "name_ru": "Льгов",
    "lat": 51.667,
    "lon": 35.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Likhoslavl",
    "name_en": "Likhoslavl",
    "name_ru": "Лихославль",
    "lat": 57.117,
    "lon": 35.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Likino-Dulyovo",
    "name_en": "Likino-Dulyovo",
    "name_ru": "Ликино-Дулёво",
    "lat": 55.7117,
    "lon": 38.9544
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lipetsk",
    "name_en": "Lipetsk",
    "name_ru": "Липецк",
    "lat": 52.617,
    "lon": 39.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lipki,_Kireyevsky_District,_Tula_Oblast",
    "name_en": "Lipki",
    "name_ru": "Липки",
    "lat": 53.95,
    "lon": 37.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Liski,_Voronezh_Oblast",
    "name_en": "Liski",
    "name_ru": "Лиски",
    "lat": 50.967,
    "lon": 39.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Livny",
    "name_en": "Livny",
    "name_ru": "Ливны",
    "lat": 52.42389,
    "lon": 37.59972
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lobnya",
    "name_en": "Lobnya",
    "name_ru": "Лобня",
    "lat": 56.017,
    "lon": 37.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lodeynoye_Pole",
    "name_en": "Lodeynoye Pole",
    "name_ru": "Лодейное Поле",
    "lat": 60.717,
    "lon": 33.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lomonosov,_Russia",
    "name_en": "Lomonosov",
    "name_ru": "Ломоносов",
    "lat": 59.917,
    "lon": 29.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Losino-Petrovsky",
    "name_en": "Losino-Petrovsky",
    "name_ru": "Лосино-Петровский",
    "lat": 55.87444,
    "lon": 38.20167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Luga,_Leningrad_Oblast",
    "name_en": "Luga",
    "name_ru": "Луга",
    "lat": 58.733,
    "lon": 29.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lukhovitsy",
    "name_en": "Lukhovitsy",
    "name_ru": "Луховицы",
    "lat": 54.983,
    "lon": 39.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lukoyanov",
    "name_en": "Lukoyanov",
    "name_ru": "Лукоянов",
    "lat": 55.0353,
    "lon": 44.4897
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Luza,_Luzsky_District,_Kirov_Oblast",
    "name_en": "Luza",
    "name_ru": "Луза",
    "lat": 60.65,
    "lon": 47.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lyantor",
    "name_en": "Lyantor",
    "name_ru": "Лянтор",
    "lat": 61.617,
    "lon": 72.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lyskovo,_Nizhny_Novgorod_Oblast",
    "name_en": "Lyskovo",
    "name_ru": "Лысково",
    "lat": 56.02889,
    "lon": 45.03611
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lysva",
    "name_en": "Lysva",
    "name_ru": "Лысьва",
    "lat": 58.10028,
    "lon": 57.80417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lytkarino",
    "name_en": "Lytkarino",
    "name_ru": "Лыткарино",
    "lat": 55.583,
    "lon": 37.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lyuban_(town),_Leningrad_Oblast",
    "name_en": "Lyuban",
    "name_ru": "Любань",
    "lat": 59.35,
    "lon": 31.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lyubertsy",
    "name_en": "Lyubertsy",
    "name_ru": "Люберцы",
    "lat": 55.667,
    "lon": 37.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lyubim",
    "name_en": "Lyubim",
    "name_ru": "Любим",
    "lat": 58.367,
    "lon": 40.683
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Lyudinovo",
    "name_en": "Lyudinovo",
    "name_ru": "Людиново",
    "lat": 53.867,
    "lon": 34.433
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Magadan",
    "name_en": "Magadan",
    "name_ru": "Магадан",
    "lat": 59.567,
    "lon": 150.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Magas",
    "name_en": "Magas",
    "name_ru": "Магас",
    "lat": 43.167,
    "lon": 44.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Magnitogorsk",
    "name_en": "Magnitogorsk",
    "name_ru": "Магнитогорск",
    "lat": 53.383,
    "lon": 59.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Makarov,_Russia",
    "name_en": "Makarov",
    "name_ru": "Макаров",
    "lat": 48.633,
    "lon": 142.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Makaryev",
    "name_en": "Makaryev",
    "name_ru": "Макарьев",
    "lat": 57.883,
    "lon": 43.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Makhachkala",
    "name_en": "Makhachkala",
    "name_ru": "Махачкала",
    "lat": 42.967,
    "lon": 47.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Makushino,_Kurgan_Oblast",
    "name_en": "Makushino",
    "name_ru": "Макушино",
    "lat": 55.217,
    "lon": 67.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Malaya_Vishera",
    "name_en": "Malaya Vishera",
    "name_ru": "Малая Вишера",
    "lat": 58.85,
    "lon": 32.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Malgobek",
    "name_en": "Malgobek",
    "name_ru": "Малгобек",
    "lat": 43.5,
    "lon": 44.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Malmyzh,_Kirov_Oblast",
    "name_en": "Malmyzh",
    "name_ru": "Малмыж",
    "lat": 56.533,
    "lon": 50.683
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Maloarkhangelsk,_Oryol_Oblast",
    "name_en": "Maloarkhangelsk",
    "name_ru": "Малоархангельск",
    "lat": 52.4006,
    "lon": 36.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Maloyaroslavets",
    "name_en": "Maloyaroslavets",
    "name_ru": "Малоярославец",
    "lat": 55.017,
    "lon": 36.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mamadysh",
    "name_en": "Mamadysh",
    "name_ru": "Мамадыш",
    "lat": 55.71306,
    "lon": 51.41056
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mamonovo",
    "name_en": "Mamonovo",
    "name_ru": "Мамоново",
    "lat": 54.46389,
    "lon": 19.94139
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Manturovo,_Kostroma_Oblast",
    "name_en": "Manturovo",
    "name_ru": "Мантурово",
    "lat": 58.333,
    "lon": 44.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mariinsk",
    "name_en": "Mariinsk",
    "name_ru": "Мариинск",
    "lat": 56.2,
    "lon": 87.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mariinsky_Posad",
    "name_en": "Mariinsky Posad",
    "name_ru": "Мариинский Посад",
    "lat": 56.1,
    "lon": 47.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Marks,_Russia",
    "name_en": "Marks",
    "name_ru": "Маркс",
    "lat": 51.683,
    "lon": 46.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Maykop",
    "name_en": "Maykop",
    "name_ru": "Майкоп",
    "lat": 44.6,
    "lon": 40.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Maysky,_Kabardino-Balkar_Republic",
    "name_en": "Maysky",
    "name_ru": "Майский",
    "lat": 43.63306,
    "lon": 44.06444
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mednogorsk",
    "name_en": "Mednogorsk",
    "name_ru": "Медногорск",
    "lat": 51.42222,
    "lon": 57.59528
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Medvezhyegorsk",
    "name_en": "Medvezhyegorsk",
    "name_ru": "Медвежьегорск",
    "lat": 62.9,
    "lon": 34.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Medyn",
    "name_en": "Medyn",
    "name_ru": "Медынь",
    "lat": 54.967,
    "lon": 35.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Megion",
    "name_en": "Megion",
    "name_ru": "Мегион",
    "lat": 61.05,
    "lon": 76.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Melenki",
    "name_en": "Melenki",
    "name_ru": "Меленки"
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Meleuz",
    "name_en": "Meleuz",
    "name_ru": "Мелеуз",
    "lat": 52.95,
    "lon": 55.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mendeleyevsk",
    "name_en": "Mendeleyevsk",
    "name_ru": "Менделеевск",
    "lat": 55.9,
    "lon": 52.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Menzelinsk",
    "name_en": "Menzelinsk",
    "name_ru": "Мензелинск",
    "lat": 55.733,
    "lon": 53.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Meshchovsk",
    "name_en": "Meshchovsk",
    "name_ru": "Мещовск",
    "lat": 54.32444,
    "lon": 35.28083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mezen,_Mezensky_District,_Arkhangelsk_Oblast",
    "name_en": "Mezen",
    "name_ru": "Мезень",
    "lat": 65.833,
    "lon": 44.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mezhdurechensk,_Kemerovo_Oblast",
    "name_en": "Mezhdurechensk",
    "name_ru": "Междуреченск",
    "lat": 53.683,
    "lon": 88.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mezhgorye",
    "name_en": "Mezhgorye",
    "name_ru": "Межгорье"
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mglin",
    "name_en": "Mglin",
    "name_ru": "Мглин",
    "lat": 53.05,
    "lon": 32.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Miass",
    "name_en": "Miass",
    "name_ru": "Миасс",
    "lat": 55.0,
    "lon": 60.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Michurinsk",
    "name_en": "Michurinsk",
    "name_ru": "Мичуринск",
    "lat": 52.883,
    "lon": 40.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mikhaylov,_Ryazan_Oblast",
    "name_en": "Mikhaylov",
    "name_ru": "Михайлов",
    "lat": 54.233,
    "lon": 39.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mikhaylovka,_Volgograd_Oblast",
    "name_en": "Mikhaylovka",
    "name_ru": "Михайловка",
    "lat": 50.067,
    "lon": 43.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mikhaylovsk,_Sverdlovsk_Oblast",
    "name_en": "Mikhaylovsk",
    "name_ru": "Михайловск",
    "lat": 56.44,
    "lon": 59.1103
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mikhaylovsk,_Stavropol_Krai",
    "name_en": "Mikhaylovsk",
    "name_ru": "Михайловск",
    "lat": 45.133,
    "lon": 42.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mikun",
    "name_en": "Mikun",
    "name_ru": "Микунь",
    "lat": 62.367,
    "lon": 50.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Millerovo,_Millerovsky_District,_Rostov_Oblast",
    "name_en": "Millerovo",
    "name_ru": "Миллерово",
    "lat": 48.917,
    "lon": 40.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mineralnyye_Vody",
    "name_en": "Mineralnyye Vody",
    "name_ru": "Минеральные Воды",
    "lat": 44.217,
    "lon": 43.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Minusinsk",
    "name_en": "Minusinsk",
    "name_ru": "Минусинск",
    "lat": 53.7,
    "lon": 91.683
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Minyar",
    "name_en": "Minyar",
    "name_ru": "Миньяр",
    "lat": 55.067,
    "lon": 57.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mirny,_Arkhangelsk_Oblast",
    "name_en": "Mirny",
    "name_ru": "Мирный",
    "lat": 62.767,
    "lon": 40.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mirny,_Sakha_Republic",
    "name_en": "Mirny",
    "name_ru": "Мирный",
    "lat": 62.55,
    "lon": 113.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mogocha",
    "name_en": "Mogocha",
    "name_ru": "Могоча",
    "lat": 53.733,
    "lon": 119.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Monchegorsk",
    "name_en": "Monchegorsk",
    "name_ru": "Мончегорск",
    "lat": 67.933,
    "lon": 32.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Morozovsk",
    "name_en": "Morozovsk",
    "name_ru": "Морозовск",
    "lat": 48.367,
    "lon": 41.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Morshansk",
    "name_en": "Morshansk",
    "name_ru": "Моршанск",
    "lat": 53.45,
    "lon": 41.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mosalsk",
    "name_en": "Mosalsk",
    "name_ru": "Мосальск",
    "lat": 54.5,
    "lon": 34.983
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Moskovsky,_Moscow_Oblast",
    "name_en": "Moskovsky",
    "name_ru": "Московский",
    "lat": 55.6,
    "lon": 37.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Moscow",
    "name_en": "Moscow",
    "name_ru": "Москва",
    "lat": 55.75,
    "lon": 37.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mozdok,_Republic_of_North_Ossetia%E2%80%93Alania",
    "name_en": "Mozdok",
    "name_ru": "Моздок",
    "lat": 43.733,
    "lon": 44.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mozhaysk",
    "name_en": "Mozhaysk",
    "name_ru": "Можайск",
    "lat": 55.5,
    "lon": 36.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mozhga",
    "name_en": "Mozhga",
    "name_ru": "Можга",
    "lat": 56.45,
    "lon": 52.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mtsensk",
    "name_en": "Mtsensk",
    "name_ru": "Мценск",
    "lat": 53.267,
    "lon": 36.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Murashi,_Kirov_Oblast",
    "name_en": "Murashi",
    "name_ru": "Мураши",
    "lat": 59.4,
    "lon": 48.983
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Muravlenko",
    "name_en": "Muravlenko",
    "name_ru": "Муравленко",
    "lat": 63.79111,
    "lon": 74.525
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Murmansk",
    "name_en": "Murmansk",
    "name_ru": "Мурманск",
    "lat": 68.967,
    "lon": 33.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Murom",
    "name_en": "Murom",
    "name_ru": "Муром",
    "lat": 55.567,
    "lon": 42.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Myshkin",
    "name_en": "Myshkin",
    "name_ru": "Мышкин",
    "lat": 57.783,
    "lon": 38.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Myski",
    "name_en": "Myski",
    "name_ru": "Мыски",
    "lat": 53.7,
    "lon": 87.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Mytishchi",
    "name_en": "Mytishchi",
    "name_ru": "Мытищи",
    "lat": 55.917,
    "lon": 37.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Naberezhnye_Chelny",
    "name_en": "Naberezhnye Chelny",
    "name_ru": "Набережные Челны",
    "lat": 55.683,
    "lon": 52.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nadym",
    "name_en": "Nadym",
    "name_ru": "Надым",
    "lat": 65.533,
    "lon": 72.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nakhodka",
    "name_en": "Nakhodka",
    "name_ru": "Находка",
    "lat": 42.817,
    "lon": 132.883
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nalchik",
    "name_en": "Nalchik",
    "name_ru": "Нальчик",
    "lat": 43.483,
    "lon": 43.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Narimanov,_Astrakhan_Oblast",
    "name_en": "Narimanov",
    "name_ru": "Нариманов",
    "lat": 46.683,
    "lon": 47.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Naro-Fominsk",
    "name_en": "Naro-Fominsk",
    "name_ru": "Наро-Фоминск",
    "lat": 55.383,
    "lon": 36.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nartkala",
    "name_en": "Nartkala",
    "name_ru": "Нарткала",
    "lat": 43.55,
    "lon": 43.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Naryan-Mar",
    "name_en": "Naryan-Mar",
    "name_ru": "Нарьян-Мар",
    "lat": 67.633,
    "lon": 53.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Navashino",
    "name_en": "Navashino",
    "name_ru": "Навашино",
    "lat": 55.5292,
    "lon": 42.2003
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Navoloki,_Ivanovo_Oblast",
    "name_en": "Navoloki",
    "name_ru": "Наволоки",
    "lat": 57.467,
    "lon": 41.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nazarovo,_Krasnoyarsk_Krai",
    "name_en": "Nazarovo",
    "name_ru": "Назарово",
    "lat": 56.0,
    "lon": 90.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nazran",
    "name_en": "Nazran",
    "name_ru": "Назрань",
    "lat": 43.217,
    "lon": 44.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nazyvayevsk",
    "name_en": "Nazyvayevsk",
    "name_ru": "Называевск",
    "lat": 55.567,
    "lon": 71.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Neftegorsk,_Samara_Oblast",
    "name_en": "Neftegorsk, Samara Oblast",
    "name_ru": "Нефтегорск",
    "lat": 52.81667,
    "lon": 51.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Neftekamsk",
    "name_en": "Neftekamsk",
    "name_ru": "Нефтекамск",
    "lat": 56.14167,
    "lon": 54.46667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Neftekumsk",
    "name_en": "Neftekumsk",
    "name_ru": "Нефтекумск",
    "lat": 44.783,
    "lon": 44.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nefteyugansk",
    "name_en": "Nefteyugansk",
    "name_ru": "Нефтеюганск",
    "lat": 61.083,
    "lon": 72.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nelidovo,_Nelidovsky_District,_Tver_Oblast",
    "name_en": "Nelidovo",
    "name_ru": "Нелидово",
    "lat": 53.217,
    "lon": 32.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Neman_(town)",
    "name_en": "Neman",
    "name_ru": "Неман",
    "lat": 55.033,
    "lon": 22.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nerchinsk",
    "name_en": "Nerchinsk",
    "name_ru": "Нерчинск",
    "lat": 51.99444,
    "lon": 116.55556
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nerekhta,_Kostroma_Oblast",
    "name_en": "Nerekhta",
    "name_ru": "Нерехта",
    "lat": 57.45,
    "lon": 40.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Neryungri",
    "name_en": "Neryungri",
    "name_ru": "Нерюнгри",
    "lat": 56.683,
    "lon": 124.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nesterov",
    "name_en": "Nesterov",
    "name_ru": "Нестеров",
    "lat": 54.63056,
    "lon": 22.57333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nevel",
    "name_en": "Nevel",
    "name_ru": "Невель",
    "lat": 56.017,
    "lon": 29.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nevelsk",
    "name_en": "Nevelsk",
    "name_ru": "Невельск",
    "lat": 46.65,
    "lon": 141.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nevinnomyssk",
    "name_en": "Nevinnomyssk",
    "name_ru": "Невинномысск",
    "lat": 44.633,
    "lon": 41.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nevyansk",
    "name_en": "Nevyansk",
    "name_ru": "Невьянск",
    "lat": 57.483,
    "lon": 60.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Neya_(town)",
    "name_en": "Neya",
    "name_ru": "Нея",
    "lat": 58.3,
    "lon": 43.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nikolayevsk",
    "name_en": "Nikolayevsk",
    "name_ru": "Николаевск",
    "lat": 50.033,
    "lon": 45.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nikolayevsk-na-Amure",
    "name_en": "Nikolayevsk-na-Amure",
    "name_ru": "Николаевск-на-Амуре",
    "lat": 53.133,
    "lon": 140.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nikolsk,_Vologda_Oblast",
    "name_en": "Nikolsk",
    "name_ru": "Никольск",
    "lat": 59.533,
    "lon": 45.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nikolsk,_Nikolsky_District,_Penza_Oblast",
    "name_en": "Nikolsk",
    "name_ru": "Никольск",
    "lat": 53.7097,
    "lon": 46.0814
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nikolskoye,_Tosnensky_District,_Leningrad_Oblast",
    "name_en": "Nikolskoye",
    "name_ru": "Никольское",
    "lat": 59.7,
    "lon": 30.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nizhnekamsk",
    "name_en": "Nizhnekamsk",
    "name_ru": "Нижнекамск",
    "lat": 55.633,
    "lon": 51.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nizhneudinsk",
    "name_en": "Nizhneudinsk",
    "name_ru": "Нижнеудинск",
    "lat": 54.933,
    "lon": 99.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nizhnevartovsk",
    "name_en": "Nizhnevartovsk",
    "name_ru": "Нижневартовск",
    "lat": 60.95,
    "lon": 76.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nizhniye_Sergi",
    "name_en": "Nizhniye Sergi",
    "name_ru": "Нижние Серги",
    "lat": 56.667,
    "lon": 59.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nizhny_Lomov",
    "name_en": "Nizhny Lomov",
    "name_ru": "Нижний Ломов",
    "lat": 53.52,
    "lon": 43.6761
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nizhny_Novgorod",
    "name_en": "Nizhny Novgorod",
    "name_ru": "Нижний Новгород",
    "lat": 56.333,
    "lon": 44.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nizhny_Tagil",
    "name_en": "Nizhny Tagil",
    "name_ru": "Нижний Тагил",
    "lat": 57.917,
    "lon": 59.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nizhnyaya_Salda",
    "name_en": "Nizhnyaya Salda",
    "name_ru": "Нижняя Салда",
    "lat": 58.07639,
    "lon": 60.72583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nizhnyaya_Tura",
    "name_en": "Nizhnyaya Tura",
    "name_ru": "Нижняя Тура",
    "lat": 58.62083,
    "lon": 59.84778
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Noginsk",
    "name_en": "Noginsk",
    "name_ru": "Ногинск",
    "lat": 55.85,
    "lon": 38.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nolinsk",
    "name_en": "Nolinsk",
    "name_ru": "Нолинск",
    "lat": 57.567,
    "lon": 49.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Norilsk",
    "name_en": "Norilsk",
    "name_ru": "Норильск",
    "lat": 69.333,
    "lon": 88.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novaya_Ladoga",
    "name_en": "Novaya Ladoga",
    "name_ru": "Новая Ладога",
    "lat": 60.1,
    "lon": 32.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novaya_Lyalya",
    "name_en": "Novaya Lyalya",
    "name_ru": "Новая Ляля",
    "lat": 59.05611,
    "lon": 60.60278
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novoaleksandrovsk",
    "name_en": "Novoaleksandrovsk",
    "name_ru": "Новоалександровск",
    "lat": 45.5,
    "lon": 41.233
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novoaltaysk",
    "name_en": "Novoaltaysk",
    "name_ru": "Новоалтайск",
    "lat": 53.383,
    "lon": 83.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novoanninsky_(town)",
    "name_en": "Novoanninsky",
    "name_ru": "Новоаннинский",
    "lat": 50.533,
    "lon": 42.683
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novocheboksarsk",
    "name_en": "Novocheboksarsk",
    "name_ru": "Новочебоксарск",
    "lat": 56.117,
    "lon": 47.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novocherkassk",
    "name_en": "Novocherkassk",
    "name_ru": "Новочеркасск",
    "lat": 47.417,
    "lon": 40.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novodvinsk",
    "name_en": "Novodvinsk",
    "name_ru": "Новодвинск",
    "lat": 64.417,
    "lon": 40.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novokhopyorsk",
    "name_en": "Novokhopyorsk",
    "name_ru": "Новохопёрск",
    "lat": 51.1,
    "lon": 41.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novokubansk",
    "name_en": "Novokubansk",
    "name_ru": "Новокубанск",
    "lat": 45.1,
    "lon": 41.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novokuybyshevsk",
    "name_en": "Novokuybyshevsk",
    "name_ru": "Новокуйбышевск",
    "lat": 53.1,
    "lon": 49.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novokuznetsk",
    "name_en": "Novokuznetsk",
    "name_ru": "Новокузнецк",
    "lat": 53.75,
    "lon": 87.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novomichurinsk",
    "name_en": "Novomichurinsk",
    "name_ru": "Новомичуринск",
    "lat": 54.033,
    "lon": 39.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novomoskovsk,_Russia",
    "name_en": "Novomoskovsk",
    "name_ru": "Новомосковск",
    "lat": 54.033,
    "lon": 38.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novopavlovsk",
    "name_en": "Novopavlovsk",
    "name_ru": "Новопавловск",
    "lat": 43.95,
    "lon": 43.633
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novorossiysk",
    "name_en": "Novorossiysk",
    "name_ru": "Новороссийск",
    "lat": 44.717,
    "lon": 37.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novorzhev",
    "name_en": "Novorzhev",
    "name_ru": "Новоржев",
    "lat": 57.033,
    "lon": 29.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novoshakhtinsk",
    "name_en": "Novoshakhtinsk",
    "name_ru": "Новошахтинск",
    "lat": 47.75,
    "lon": 39.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novosibirsk",
    "name_en": "Novosibirsk",
    "name_ru": "Новосибирск",
    "lat": 55.017,
    "lon": 82.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novosil",
    "name_en": "Novosil",
    "name_ru": "Новосиль",
    "lat": 52.967,
    "lon": 37.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novosokolniki",
    "name_en": "Novosokolniki",
    "name_ru": "Новосокольники",
    "lat": 56.333,
    "lon": 30.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novotroitsk",
    "name_en": "Novotroitsk",
    "name_ru": "Новотроицк",
    "lat": 51.20389,
    "lon": 58.31139
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novoulyanovsk",
    "name_en": "Novoulyanovsk",
    "name_ru": "Новоульяновск",
    "lat": 54.167,
    "lon": 48.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novouralsk",
    "name_en": "Novouralsk",
    "name_ru": "Новоуральск",
    "lat": 57.25,
    "lon": 60.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novouzensk",
    "name_en": "Novouzensk",
    "name_ru": "Новоузенск",
    "lat": 50.45,
    "lon": 48.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novovoronezh",
    "name_en": "Novovoronezh",
    "name_ru": "Нововоронеж",
    "lat": 51.317,
    "lon": 39.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novozybkov",
    "name_en": "Novozybkov",
    "name_ru": "Новозыбков",
    "lat": 52.533,
    "lon": 31.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novy_Oskol",
    "name_en": "Novy Oskol",
    "name_ru": "Новый Оскол",
    "lat": 50.75833,
    "lon": 37.87361
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Novy_Urengoy",
    "name_en": "Novy Urengoy",
    "name_ru": "Новый Уренгой",
    "lat": 66.083,
    "lon": 76.683
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Noyabrsk",
    "name_en": "Noyabrsk",
    "name_ru": "Ноябрьск",
    "lat": 63.2,
    "lon": 75.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nurlat",
    "name_en": "Nurlat",
    "name_ru": "Нурлат",
    "lat": 54.433,
    "lon": 50.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nyagan",
    "name_en": "Nyagan",
    "name_ru": "Нягань",
    "lat": 62.133,
    "lon": 65.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nyandoma",
    "name_en": "Nyandoma",
    "name_ru": "Няндома",
    "lat": 61.667,
    "lon": 40.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nyazepetrovsk",
    "name_en": "Nyazepetrovsk",
    "name_ru": "Нязепетровск",
    "lat": 56.0472,
    "lon": 59.6019
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nytva",
    "name_en": "Nytva",
    "name_ru": "Нытва",
    "lat": 57.933,
    "lon": 55.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Nyurba",
    "name_en": "Nyurba",
    "name_ru": "Нюрба",
    "lat": 63.283,
    "lon": 118.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ob,_Russia",
    "name_en": "Ob",
    "name_ru": "Обь",
    "lat": 54.99167,
    "lon": 82.7125
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Obluchye",
    "name_en": "Obluchye",
    "name_ru": "Облучье",
    "lat": 49.0,
    "lon": 131.08306
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Obninsk",
    "name_en": "Obninsk",
    "name_ru": "Обнинск",
    "lat": 55.09306,
    "lon": 36.61056
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Oboyan",
    "name_en": "Oboyan",
    "name_ru": "Обоянь",
    "lat": 51.2,
    "lon": 36.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ochyor_(town)",
    "name_en": "Ochyor",
    "name_ru": "Очёр",
    "lat": 57.88139,
    "lon": 54.72056
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Odintsovo",
    "name_en": "Odintsovo",
    "name_ru": "Одинцово",
    "lat": 55.667,
    "lon": 37.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Okha,_Russia",
    "name_en": "Okha",
    "name_ru": "Оха",
    "lat": 53.583,
    "lon": 142.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Okhansk",
    "name_en": "Okhansk",
    "name_ru": "Оханск",
    "lat": 57.7189,
    "lon": 55.3842
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Oktyabrsk",
    "name_en": "Oktyabrsk",
    "name_ru": "Октябрьск",
    "lat": 53.167,
    "lon": 48.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Oktyabrsky,_Republic_of_Bashkortostan",
    "name_en": "Oktyabrsky",
    "name_ru": "Октябрьский",
    "lat": 54.467,
    "lon": 53.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Okulovka_(town),_Novgorod_Oblast",
    "name_en": "Okulovka",
    "name_ru": "Окуловка",
    "lat": 58.383,
    "lon": 33.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Olenegorsk,_Murmansk_Oblast",
    "name_en": "Olenegorsk",
    "name_ru": "Оленегорск",
    "lat": 68.15,
    "lon": 33.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Olonets",
    "name_en": "Olonets",
    "name_ru": "Олонец",
    "lat": 60.983,
    "lon": 32.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Olyokminsk",
    "name_en": "Olyokminsk",
    "name_ru": "Олёкминск",
    "lat": 60.367,
    "lon": 120.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Omsk",
    "name_en": "Omsk",
    "name_ru": "Омск",
    "lat": 54.983,
    "lon": 73.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Omutninsk",
    "name_en": "Omutninsk",
    "name_ru": "Омутнинск",
    "lat": 58.667,
    "lon": 52.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Onega,_Russia",
    "name_en": "Onega",
    "name_ru": "Онега",
    "lat": 63.917,
    "lon": 38.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Opochka",
    "name_en": "Opochka",
    "name_ru": "Опочка",
    "lat": 56.717,
    "lon": 28.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Orekhovo-Zuyevo",
    "name_en": "Orekhovo-Zuyevo",
    "name_ru": "Орехово-Зуево",
    "lat": 55.8,
    "lon": 38.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Oryol",
    "name_en": "Oryol",
    "name_ru": "Орёл",
    "lat": 52.967,
    "lon": 36.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Orenburg",
    "name_en": "Orenburg",
    "name_ru": "Оренбург",
    "lat": 51.783,
    "lon": 55.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Orlov,_Kirov_Oblast",
    "name_en": "Orlov",
    "name_ru": "Орлов",
    "lat": 58.533,
    "lon": 48.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Orsk",
    "name_en": "Orsk",
    "name_ru": "Орск",
    "lat": 51.2,
    "lon": 58.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Osa,_Perm_Krai",
    "name_en": "Osa",
    "name_ru": "Оса",
    "lat": 57.283,
    "lon": 55.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Osinniki",
    "name_en": "Osinniki",
    "name_ru": "Осинники",
    "lat": 53.617,
    "lon": 87.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ostashkov",
    "name_en": "Ostashkov",
    "name_ru": "Осташков",
    "lat": 57.15,
    "lon": 33.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ostrogozhsk",
    "name_en": "Ostrogozhsk",
    "name_ru": "Острогожск",
    "lat": 50.867,
    "lon": 39.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ostrov,_Pskov_Oblast",
    "name_en": "Ostrov",
    "name_ru": "Остров",
    "lat": 57.333,
    "lon": 28.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ostrovnoy,_Murmansk_Oblast",
    "name_en": "Ostrovnoy",
    "name_ru": "Островной",
    "lat": 68.05,
    "lon": 39.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Otradnoye,_Kirovsky_District,_Leningrad_Oblast",
    "name_en": "Otradnoye",
    "name_ru": "Отрадное",
    "lat": 59.783,
    "lon": 30.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Otradny,_Samara_Oblast",
    "name_en": "Otradny",
    "name_ru": "Отрадный",
    "lat": 53.367,
    "lon": 51.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ozyorsk,_Kaliningrad_Oblast",
    "name_en": "Ozyorsk",
    "name_ru": "Озёрск",
    "lat": 54.4,
    "lon": 22.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ozyorsk,_Chelyabinsk_Oblast",
    "name_en": "Ozyorsk",
    "name_ru": "Озёрск",
    "lat": 55.75,
    "lon": 60.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ozherelye",
    "name_en": "Ozherelye",
    "name_ru": "Ожерелье",
    "lat": 54.8,
    "lon": 38.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ozyory,_Moscow_Oblast",
    "name_en": "Ozyory",
    "name_ru": "Озёры",
    "lat": 54.85,
    "lon": 38.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pallasovka_(town)",
    "name_en": "Pallasovka",
    "name_ru": "Палласовка",
    "lat": 50.05,
    "lon": 46.883
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Partizansk",
    "name_en": "Partizansk",
    "name_ru": "Партизанск",
    "lat": 43.133,
    "lon": 133.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pavlovo,_Pavlovsky_District,_Nizhny_Novgorod_Oblast",
    "name_en": "Pavlovo",
    "name_ru": "Павлово",
    "lat": 55.95,
    "lon": 43.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pavlovsk,_Voronezh_Oblast",
    "name_en": "Pavlovsk",
    "name_ru": "Павловск",
    "lat": 50.45778,
    "lon": 40.10806
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pavlovsk,_Saint_Petersburg",
    "name_en": "Pavlovsk",
    "name_ru": "Павловск",
    "lat": 59.683,
    "lon": 30.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pavlovsky_Posad",
    "name_en": "Pavlovsky Posad",
    "name_ru": "Павловский Посад",
    "lat": 55.783,
    "lon": 38.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pechora",
    "name_en": "Pechora",
    "name_ru": "Печора",
    "lat": 65.133,
    "lon": 57.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pechory",
    "name_en": "Pechory",
    "name_ru": "Печоры",
    "lat": 57.817,
    "lon": 27.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Penza",
    "name_en": "Penza",
    "name_ru": "Пенза",
    "lat": 53.2,
    "lon": 45.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pereslavl-Zalessky",
    "name_en": "Pereslavl-Zalessky",
    "name_ru": "Переславль-Залесский",
    "lat": 56.733,
    "lon": 38.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Peresvet",
    "name_en": "Peresvet",
    "name_ru": "Пересвет",
    "lat": 56.417,
    "lon": 38.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Perevoz,_Nizhny_Novgorod_Oblast",
    "name_en": "Perevoz",
    "name_ru": "Перевоз",
    "lat": 55.6,
    "lon": 44.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Perm",
    "name_en": "Perm",
    "name_ru": "Пермь",
    "lat": 58.0,
    "lon": 56.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pervomaysk,_Nizhny_Novgorod_Oblast",
    "name_en": "Pervomaysk",
    "name_ru": "Первомайск",
    "lat": 54.867,
    "lon": 43.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pervouralsk",
    "name_en": "Pervouralsk",
    "name_ru": "Первоуральск",
    "lat": 56.917,
    "lon": 59.95
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pestovo,_Pestovsky_District,_Novgorod_Oblast",
    "name_en": "Pestovo",
    "name_ru": "Пестово",
    "lat": 58.6,
    "lon": 35.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Petergof",
    "name_en": "Petergof",
    "name_ru": "Петергоф",
    "lat": 59.883,
    "lon": 29.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Petropavlovsk-Kamchatsky",
    "name_en": "Petropavlovsk-Kamchatsky",
    "name_ru": "Петропавловск-Камчатский",
    "lat": 53.017,
    "lon": 158.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Petrov_Val",
    "name_en": "Petrov Val",
    "name_ru": "Петров Вал",
    "lat": 50.15,
    "lon": 45.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Petrovsk,_Saratov_Oblast",
    "name_en": "Petrovsk",
    "name_ru": "Петровск",
    "lat": 50.45,
    "lon": 48.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Petrovsk-Zabaykalsky_(town)",
    "name_en": "Petrovsk-Zabaykalsky",
    "name_ru": "Петровск-Забайкальский",
    "lat": 51.267,
    "lon": 108.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Petrozavodsk",
    "name_en": "Petrozavodsk",
    "name_ru": "Петрозаводск",
    "lat": 61.783,
    "lon": 34.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Petukhovo_(town),_Kurgan_Oblast",
    "name_en": "Petukhovo",
    "name_ru": "Петухово",
    "lat": 55.067,
    "lon": 67.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Petushki,_Vladimir_Oblast",
    "name_en": "Petushki",
    "name_ru": "Петушки",
    "lat": 55.933,
    "lon": 39.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pevek",
    "name_en": "Pevek",
    "name_ru": "Певек",
    "lat": 69.7,
    "lon": 170.28333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pikalyovo,_Leningrad_Oblast",
    "name_en": "Pikalyovo",
    "name_ru": "Пикалёво",
    "lat": 59.533,
    "lon": 34.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pionersky,_Kaliningrad_Oblast",
    "name_en": "Pionersky",
    "name_ru": "Пионерский",
    "lat": 54.95167,
    "lon": 20.23333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pitkyaranta",
    "name_en": "Pitkyaranta",
    "name_ru": "Питкяранта",
    "lat": 61.575,
    "lon": 31.47778
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Plast_(town)",
    "name_en": "Plast",
    "name_ru": "Пласт",
    "lat": 54.367,
    "lon": 60.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Plavsk",
    "name_en": "Plavsk",
    "name_ru": "Плавск",
    "lat": 53.70944,
    "lon": 37.29194
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Plyos,_Ivanovo_Oblast",
    "name_en": "Plyos",
    "name_ru": "Плёс",
    "lat": 57.45,
    "lon": 41.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pochep,_Bryansk_Oblast",
    "name_en": "Pochep",
    "name_ru": "Почеп",
    "lat": 52.933,
    "lon": 33.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pochinok,_Smolensk_Oblast",
    "name_en": "Pochinok",
    "name_ru": "Починок",
    "lat": 54.40833,
    "lon": 32.44222
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Podolsk",
    "name_en": "Podolsk",
    "name_ru": "Подольск",
    "lat": 55.417,
    "lon": 37.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Podporozhye,_Leningrad_Oblast",
    "name_en": "Podporozhye",
    "name_ru": "Подпорожье",
    "lat": 60.9,
    "lon": 34.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pokachi",
    "name_en": "Pokachi",
    "name_ru": "Покачи",
    "lat": 61.75,
    "lon": 75.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pokhvistnevo,_Samara_Oblast",
    "name_en": "Pokhvistnevo",
    "name_ru": "Похвистнево",
    "lat": 53.65,
    "lon": 52.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pokrov,_Vladimir_Oblast",
    "name_en": "Pokrov",
    "name_ru": "Покров",
    "lat": 55.91167,
    "lon": 39.18472
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pokrovsk,_Sakha_Republic",
    "name_en": "Pokrovsk",
    "name_ru": "Покровск",
    "lat": 61.483,
    "lon": 129.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Polessk",
    "name_en": "Polessk",
    "name_ru": "Полесск",
    "lat": 54.867,
    "lon": 21.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Polevskoy",
    "name_en": "Polevskoy",
    "name_ru": "Полевской",
    "lat": 56.45,
    "lon": 60.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Polyarny,_Murmansk_Oblast",
    "name_en": "Polyarny",
    "name_ru": "Полярный",
    "lat": 69.2,
    "lon": 33.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Polyarnye_Zori",
    "name_en": "Polyarnye Zori",
    "name_ru": "Полярные Зори",
    "lat": 67.367,
    "lon": 32.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Polysayevo",
    "name_en": "Polysayevo",
    "name_ru": "Полысаево",
    "lat": 54.60139,
    "lon": 86.24861
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Porkhov",
    "name_en": "Porkhov",
    "name_ru": "Порхов",
    "lat": 57.767,
    "lon": 29.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Poronaysk",
    "name_en": "Poronaysk",
    "name_ru": "Поронайск",
    "lat": 49.217,
    "lon": 143.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Poshekhonye",
    "name_en": "Poshekhonye",
    "name_ru": "Пошехонье",
    "lat": 58.5,
    "lon": 39.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Povorino",
    "name_en": "Povorino",
    "name_ru": "Поворино",
    "lat": 51.2,
    "lon": 42.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pravdinsk",
    "name_en": "Pravdinsk",
    "name_ru": "Правдинск",
    "lat": 54.433,
    "lon": 21.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Primorsk,_Leningrad_Oblast",
    "name_en": "Primorsk",
    "name_ru": "Приморск",
    "lat": 60.367,
    "lon": 28.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Primorsko-Akhtarsk",
    "name_en": "Primorsko-Akhtarsk",
    "name_ru": "Приморско-Ахтарск",
    "lat": 46.05,
    "lon": 38.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Priozersk",
    "name_en": "Priozersk",
    "name_ru": "Приозерск",
    "lat": 61.05,
    "lon": 30.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Privolzhsk",
    "name_en": "Privolzhsk",
    "name_ru": "Приволжск",
    "lat": 57.3825,
    "lon": 41.28611
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Prokhladny",
    "name_en": "Prokhladny",
    "name_ru": "Прохладный",
    "lat": 43.75,
    "lon": 44.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Prokopyevsk",
    "name_en": "Prokopyevsk",
    "name_ru": "Прокопьевск",
    "lat": 53.883,
    "lon": 86.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Proletarsk,_Rostov_Oblast",
    "name_en": "Proletarsk",
    "name_ru": "Пролетарск",
    "lat": 46.70306,
    "lon": 41.71917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Protvino",
    "name_en": "Protvino",
    "name_ru": "Протвино",
    "lat": 54.883,
    "lon": 37.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pskov",
    "name_en": "Pskov",
    "name_ru": "Псков",
    "lat": 57.817,
    "lon": 28.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Puchezh",
    "name_en": "Puchezh",
    "name_ru": "Пучеж",
    "lat": 56.983,
    "lon": 43.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pudozh",
    "name_en": "Pudozh",
    "name_ru": "Пудож",
    "lat": 61.8,
    "lon": 36.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pugachyov",
    "name_en": "Pugachyov",
    "name_ru": "Пугачев",
    "lat": 52.017,
    "lon": 48.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pushchino",
    "name_en": "Pushchino",
    "name_ru": "Пущино",
    "lat": 54.833,
    "lon": 37.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pushkin,_Saint_Petersburg",
    "name_en": "Pushkin",
    "name_ru": "Пушкин",
    "lat": 59.733,
    "lon": 30.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pushkino,_Moscow_Oblast",
    "name_en": "Pushkino",
    "name_ru": "Пушкино",
    "lat": 56.0,
    "lon": 37.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pustoshka,_Pustoshkinsky_District,_Pskov_Oblast",
    "name_en": "Pustoshka",
    "name_ru": "Пустошка",
    "lat": 56.333,
    "lon": 29.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pyatigorsk",
    "name_en": "Pyatigorsk",
    "name_ru": "Пятигорск",
    "lat": 44.033,
    "lon": 43.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pytalovo",
    "name_en": "Pytalovo",
    "name_ru": "Пыталово",
    "lat": 57.067,
    "lon": 27.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Pyt-Yakh",
    "name_en": "Pyt-Yakh",
    "name_ru": "Пыть-Ях",
    "lat": 60.75,
    "lon": 72.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Raduzhny,_Vladimir_Oblast",
    "name_en": "Raduzhny",
    "name_ru": "Радужный",
    "lat": 56.0,
    "lon": 40.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Raduzhny,_Khanty-Mansi_Autonomous_Okrug",
    "name_en": "Raduzhny",
    "name_ru": "Радужный",
    "lat": 62.133,
    "lon": 77.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ramenskoye,_Moscow_Oblast",
    "name_en": "Ramenskoye",
    "name_ru": "Раменское",
    "lat": 55.567,
    "lon": 38.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rasskazovo",
    "name_en": "Rasskazovo",
    "name_ru": "Рассказово",
    "lat": 52.667,
    "lon": 41.883
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Raychikhinsk",
    "name_en": "Raychikhinsk",
    "name_ru": "Райчихинск",
    "lat": 49.767,
    "lon": 129.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Reutov",
    "name_en": "Reutov",
    "name_ru": "Реутов",
    "lat": 55.767,
    "lon": 37.883
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Revda,_Sverdlovsk_Oblast",
    "name_en": "Revda",
    "name_ru": "Ревда",
    "lat": 56.80528,
    "lon": 59.92833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rezh",
    "name_en": "Rezh",
    "name_ru": "Реж",
    "lat": 57.367,
    "lon": 61.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rodniki,_Ivanovo_Oblast",
    "name_en": "Rodniki",
    "name_ru": "Родники",
    "lat": 57.117,
    "lon": 41.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Roshal_(town)",
    "name_en": "Roshal",
    "name_ru": "Рошаль",
    "lat": 55.667,
    "lon": 39.883
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Roslavl",
    "name_en": "Roslavl",
    "name_ru": "Рославль",
    "lat": 53.95278,
    "lon": 32.86389
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rossosh,_Rossoshansky_District,_Voronezh_Oblast",
    "name_en": "Rossosh",
    "name_ru": "Россошь",
    "lat": 50.2,
    "lon": 39.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rostov",
    "name_en": "Rostov",
    "name_ru": "Ростов",
    "lat": 57.183,
    "lon": 39.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rostov-on-Don",
    "name_en": "Rostov-on-Don",
    "name_ru": "Ростов-на-Дону",
    "lat": 47.233,
    "lon": 39.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rtishchevo",
    "name_en": "Rtishchevo",
    "name_ru": "Ртищево",
    "lat": 52.25,
    "lon": 43.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rubtsovsk",
    "name_en": "Rubtsovsk",
    "name_ru": "Рубцовск",
    "lat": 51.517,
    "lon": 81.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rudnya,_Rudnyansky_District,_Smolensk_Oblast",
    "name_en": "Rudnya",
    "name_ru": "Рудня",
    "lat": 54.95,
    "lon": 31.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ruza,_Ruzsky_District,_Moscow_Oblast",
    "name_en": "Ruza",
    "name_ru": "Руза",
    "lat": 55.7,
    "lon": 36.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ruzayevka",
    "name_en": "Ruzayevka",
    "name_ru": "Рузаевка",
    "lat": 54.067,
    "lon": 44.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ryazan",
    "name_en": "Ryazan",
    "name_ru": "Рязань",
    "lat": 54.6,
    "lon": 39.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ryazhsk",
    "name_en": "Ryazhsk",
    "name_ru": "Ряжск",
    "lat": 53.7,
    "lon": 40.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rybinsk",
    "name_en": "Rybinsk",
    "name_ru": "Рыбинск",
    "lat": 58.05,
    "lon": 38.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rybnoye,_Ryazan_Oblast",
    "name_en": "Rybnoye",
    "name_ru": "Рыбное",
    "lat": 54.733,
    "lon": 39.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rylsk,_Russia",
    "name_en": "Rylsk",
    "name_ru": "Рыльск",
    "lat": 51.567,
    "lon": 34.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Rzhev",
    "name_en": "Rzhev",
    "name_ru": "Ржев",
    "lat": 56.25,
    "lon": 34.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Safonovo,_Safonovsky_District,_Smolensk_Oblast",
    "name_en": "Safonovo",
    "name_ru": "Сафоново",
    "lat": 55.1072,
    "lon": 33.2358
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Saint_Petersburg",
    "name_en": "Saint Petersburg",
    "name_ru": "Санкт-Петербург",
    "lat": 59.95,
    "lon": 30.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Salair_(town)",
    "name_en": "Salair",
    "name_ru": "Салаир",
    "lat": 54.233,
    "lon": 85.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Salavat,_Russia",
    "name_en": "Salavat",
    "name_ru": "Салават",
    "lat": 53.367,
    "lon": 55.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Salekhard",
    "name_en": "Salekhard",
    "name_ru": "Салехард",
    "lat": 66.533,
    "lon": 66.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Salsk",
    "name_en": "Salsk",
    "name_ru": "Сальск",
    "lat": 46.4725,
    "lon": 41.5428
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Samara,_Russia",
    "name_en": "Samara",
    "name_ru": "Самара",
    "lat": 53.20278,
    "lon": 50.14083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Saransk",
    "name_en": "Saransk",
    "name_ru": "Саранск",
    "lat": 54.183,
    "lon": 45.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sarapul",
    "name_en": "Sarapul",
    "name_ru": "Сарапул",
    "lat": 56.467,
    "lon": 53.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Saratov",
    "name_en": "Saratov",
    "name_ru": "Саратов",
    "lat": 51.533,
    "lon": 46.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sarov",
    "name_en": "Sarov",
    "name_ru": "Саров",
    "lat": 54.933,
    "lon": 43.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sasovo,_Ryazan_Oblast",
    "name_en": "Sasovo",
    "name_ru": "Сасово",
    "lat": 54.35,
    "lon": 41.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Satka",
    "name_en": "Satka",
    "name_ru": "Сатка",
    "lat": 55.033,
    "lon": 59.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sayanogorsk",
    "name_en": "Sayanogorsk",
    "name_ru": "Саяногорск",
    "lat": 53.0875,
    "lon": 91.39139
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sayansk",
    "name_en": "Sayansk",
    "name_ru": "Саянск",
    "lat": 54.117,
    "lon": 102.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sebezh",
    "name_en": "Sebezh",
    "name_ru": "Себеж",
    "lat": 56.283,
    "lon": 28.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Segezha",
    "name_en": "Segezha",
    "name_ru": "Сегежа",
    "lat": 63.733,
    "lon": 34.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Seltso",
    "name_en": "Seltso",
    "name_ru": "Сельцо",
    "lat": 53.36778,
    "lon": 34.09778
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Semikarakorsk",
    "name_en": "Semikarakorsk",
    "name_ru": "Семикаракорск",
    "lat": 47.51639,
    "lon": 40.81083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Semiluki",
    "name_en": "Semiluki",
    "name_ru": "Семилуки",
    "lat": 51.683,
    "lon": 39.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Semyonov,_Nizhny_Novgorod_Oblast",
    "name_en": "Semyonov",
    "name_ru": "Семёнов",
    "lat": 56.8,
    "lon": 44.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sengiley",
    "name_en": "Sengiley",
    "name_ru": "Сенгилей",
    "lat": 53.96222,
    "lon": 48.79444
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Serafimovich_(town)",
    "name_en": "Serafimovich",
    "name_ru": "Серафимович",
    "lat": 49.583,
    "lon": 42.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Serdobsk",
    "name_en": "Serdobsk",
    "name_ru": "Сердобск",
    "lat": 52.46667,
    "lon": 44.21667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sergach",
    "name_en": "Sergach",
    "name_ru": "Сергач",
    "lat": 55.533,
    "lon": 45.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sergiyev_Posad",
    "name_en": "Sergiyev Posad",
    "name_ru": "Сергиев Посад",
    "lat": 56.3,
    "lon": 38.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Serov_(town)",
    "name_en": "Serov",
    "name_ru": "Серов",
    "lat": 59.6,
    "lon": 60.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Serpukhov",
    "name_en": "Serpukhov",
    "name_ru": "Серпухов",
    "lat": 54.917,
    "lon": 37.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sertolovo",
    "name_en": "Sertolovo",
    "name_ru": "Сертолово",
    "lat": 60.15,
    "lon": 30.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sestroretsk",
    "name_en": "Sestroretsk",
    "name_ru": "Сестрорецк",
    "lat": 60.1,
    "lon": 29.95
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Severobaykalsk",
    "name_en": "Severobaykalsk",
    "name_ru": "Северобайкальск",
    "lat": 55.65,
    "lon": 109.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Severodvinsk",
    "name_en": "Severodvinsk",
    "name_ru": "Северодвинск",
    "lat": 64.56806,
    "lon": 39.83167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Severo-Kurilsk",
    "name_en": "Severo-Kurilsk",
    "name_ru": "Северо-Курильск",
    "lat": 50.683,
    "lon": 156.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Severomorsk",
    "name_en": "Severomorsk",
    "name_ru": "Североморск",
    "lat": 69.067,
    "lon": 33.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Severouralsk",
    "name_en": "Severouralsk",
    "name_ru": "Североуральск",
    "lat": 60.15444,
    "lon": 59.95639
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Seversk",
    "name_en": "Seversk",
    "name_ru": "Северск",
    "lat": 56.6,
    "lon": 84.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sevsk,_Bryansk_Oblast",
    "name_en": "Sevsk",
    "name_ru": "Севск",
    "lat": 52.15,
    "lon": 34.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shadrinsk",
    "name_en": "Shadrinsk",
    "name_ru": "Шадринск",
    "lat": 56.133,
    "lon": 63.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shagonar",
    "name_en": "Shagonar",
    "name_ru": "Шагонар",
    "lat": 51.55,
    "lon": 92.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shakhtyorsk",
    "name_en": "Shakhtyorsk",
    "name_ru": "Шахтерск",
    "lat": 49.15,
    "lon": 142.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shakhty",
    "name_en": "Shakhty",
    "name_ru": "Шахты",
    "lat": 47.7,
    "lon": 40.233
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shakhunya",
    "name_en": "Shakhunya",
    "name_ru": "Шахунья",
    "lat": 57.667,
    "lon": 46.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shali,_Chechen_Republic",
    "name_en": "Shali",
    "name_ru": "Шали",
    "lat": 43.15,
    "lon": 45.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sharya",
    "name_en": "Sharya",
    "name_ru": "Шарья",
    "lat": 58.367,
    "lon": 45.5
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sharypovo",
    "name_en": "Sharypovo",
    "name_ru": "Шарыпово",
    "lat": 55.533,
    "lon": 89.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shatsk,_Russia",
    "name_en": "Shatsk",
    "name_ru": "Шацк",
    "lat": 54.017,
    "lon": 41.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shatura",
    "name_en": "Shatura",
    "name_ru": "Шатура",
    "lat": 55.5761,
    "lon": 39.5442
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shcherbinka",
    "name_en": "Shcherbinka",
    "name_ru": "Щербинка",
    "lat": 55.5,
    "lon": 37.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shchigry,_Kursk_Oblast",
    "name_en": "Shchigry",
    "name_ru": "Щигры",
    "lat": 51.867,
    "lon": 36.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shchuchye,_Shchuchansky_District,_Kurgan_Oblast",
    "name_en": "Shchuchye",
    "name_ru": "Щучье",
    "lat": 55.217,
    "lon": 62.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shchyokino_(town),_Tula_Oblast",
    "name_en": "Shchyokino",
    "name_ru": "Щёкино",
    "lat": 54.017,
    "lon": 37.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shchyolkovo",
    "name_en": "Shchyolkovo",
    "name_ru": "Щёлково",
    "lat": 55.917,
    "lon": 38.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shebekino",
    "name_en": "Shebekino",
    "name_ru": "Шебекино",
    "lat": 50.417,
    "lon": 36.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shelekhov",
    "name_en": "Shelekhov",
    "name_ru": "Шелехов",
    "lat": 52.217,
    "lon": 104.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shenkursk",
    "name_en": "Shenkursk",
    "name_ru": "Шенкурск",
    "lat": 62.1,
    "lon": 42.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shikhany",
    "name_en": "Shikhany",
    "name_ru": "Шиханы",
    "lat": 52.117,
    "lon": 47.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shilka_(town)",
    "name_en": "Shilka",
    "name_ru": "Шилка",
    "lat": 51.85,
    "lon": 116.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shimanovsk",
    "name_en": "Shimanovsk",
    "name_ru": "Шимановск",
    "lat": 52.0,
    "lon": 127.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shlisselburg",
    "name_en": "Shlisselburg",
    "name_ru": "Шлиссельбург",
    "lat": 59.95,
    "lon": 31.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shumerlya",
    "name_en": "Shumerlya",
    "name_ru": "Шумерля",
    "lat": 55.5,
    "lon": 46.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shumikha,_Kurgan_Oblast",
    "name_en": "Shumikha",
    "name_ru": "Шумиха",
    "lat": 55.233,
    "lon": 63.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Shuya,_Ivanovo_Oblast",
    "name_en": "Shuya",
    "name_ru": "Шуя",
    "lat": 56.85,
    "lon": 41.36667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sibay",
    "name_en": "Sibay",
    "name_ru": "Сибай",
    "lat": 52.7,
    "lon": 58.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sim,_Chelyabinsk_Oblast",
    "name_en": "Sim",
    "name_ru": "Сим",
    "lat": 54.983,
    "lon": 57.683
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Skopin",
    "name_en": "Skopin",
    "name_ru": "Скопин",
    "lat": 53.817,
    "lon": 39.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Skovorodino,_Amur_Oblast",
    "name_en": "Skovorodino",
    "name_ru": "Сковородино",
    "lat": 53.983,
    "lon": 123.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Slantsy,_Leningrad_Oblast",
    "name_en": "Slantsy",
    "name_ru": "Сланцы",
    "lat": 59.117,
    "lon": 28.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Slavgorod",
    "name_en": "Slavgorod",
    "name_ru": "Славгород",
    "lat": 53.0,
    "lon": 78.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Slavsk",
    "name_en": "Slavsk",
    "name_ru": "Славск",
    "lat": 55.083,
    "lon": 21.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Slavyansk-na-Kubani",
    "name_en": "Slavyansk-na-Kubani",
    "name_ru": "Славянск-на-Кубани",
    "lat": 45.25,
    "lon": 38.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Slobodskoy,_Kirov_Oblast",
    "name_en": "Slobodskoy",
    "name_ru": "Слободской",
    "lat": 58.72083,
    "lon": 50.185
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Slyudyanka,_Slyudyansky_District,_Irkutsk_Oblast",
    "name_en": "Slyudyanka",
    "name_ru": "Слюдянка",
    "lat": 51.633,
    "lon": 103.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Smolensk",
    "name_en": "Smolensk",
    "name_ru": "Смоленск",
    "lat": 54.78278,
    "lon": 32.04528
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Snezhinsk",
    "name_en": "Snezhinsk",
    "name_ru": "Снежинск",
    "lat": 56.083,
    "lon": 60.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Snezhnogorsk,_Murmansk_Oblast",
    "name_en": "Snezhnogorsk",
    "name_ru": "Снежногорск",
    "lat": 69.2,
    "lon": 33.233
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sobinka",
    "name_en": "Sobinka",
    "name_ru": "Собинка",
    "lat": 56.0,
    "lon": 40.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sochi",
    "name_en": "Sochi",
    "name_ru": "Сочи",
    "lat": 43.58528,
    "lon": 39.72028
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sokol,_Vologda_Oblast",
    "name_en": "Sokol",
    "name_ru": "Сокол",
    "lat": 59.467,
    "lon": 40.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sokolniki,_Tula_Oblast",
    "name_en": "Sokolniki",
    "name_ru": "Сокольники",
    "lat": 54.067,
    "lon": 38.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Soligalich",
    "name_en": "Soligalich",
    "name_ru": "Солигалич",
    "lat": 59.083,
    "lon": 42.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Solikamsk",
    "name_en": "Solikamsk",
    "name_ru": "Соликамск",
    "lat": 59.64333,
    "lon": 56.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sol-Iletsk",
    "name_en": "Sol-Iletsk",
    "name_ru": "Соль-Илецк",
    "lat": 51.167,
    "lon": 55.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Solnechnogorsk",
    "name_en": "Solnechnogorsk",
    "name_ru": "Солнечногорск",
    "lat": 56.183,
    "lon": 36.983
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Soltsy",
    "name_en": "Soltsy",
    "name_ru": "Сольцы",
    "lat": 58.11667,
    "lon": 30.31667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Solvychegodsk",
    "name_en": "Solvychegodsk",
    "name_ru": "Сольвычегодск",
    "lat": 61.333,
    "lon": 46.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sorochinsk",
    "name_en": "Sorochinsk",
    "name_ru": "Сорочинск",
    "lat": 52.433,
    "lon": 53.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sorsk",
    "name_en": "Sorsk",
    "name_ru": "Сорск",
    "lat": 54.033,
    "lon": 90.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sortavala",
    "name_en": "Sortavala",
    "name_ru": "Сортавала",
    "lat": 61.7,
    "lon": 30.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sosensky,_Kaluga_Oblast",
    "name_en": "Sosensky",
    "name_ru": "Сосенский",
    "lat": 54.05,
    "lon": 35.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sosnogorsk",
    "name_en": "Sosnogorsk",
    "name_ru": "Сосногорск",
    "lat": 63.59944,
    "lon": 53.88278
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sosnovka,_Kirov_Oblast",
    "name_en": "Sosnovka",
    "name_ru": "Сосновка",
    "lat": 56.25,
    "lon": 51.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sosnovoborsk,_Krasnoyarsk_Krai",
    "name_en": "Sosnovoborsk",
    "name_ru": "Сосновоборск",
    "lat": 56.133,
    "lon": 93.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sosnovy_Bor,_Leningrad_Oblast",
    "name_en": "Sosnovy Bor",
    "name_ru": "Сосновый Бор",
    "lat": 59.88972,
    "lon": 29.08556
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sovetsk,_Kaliningrad_Oblast",
    "name_en": "Sovetsk",
    "name_ru": "Советск",
    "lat": 55.083,
    "lon": 21.883
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sovetsk,_Kirov_Oblast",
    "name_en": "Sovetsk",
    "name_ru": "Советск",
    "lat": 57.583,
    "lon": 48.983
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sovetsk,_Tula_Oblast",
    "name_en": "Sovetsk",
    "name_ru": "Советск",
    "lat": 53.94139,
    "lon": 37.63306
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sovetskaya_Gavan",
    "name_en": "Sovetskaya Gavan",
    "name_ru": "Советская Гавань",
    "lat": 48.967,
    "lon": 140.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sovetsky,_Khanty-Mansi_Autonomous_Okrug",
    "name_en": "Sovetsky",
    "name_ru": "Советский",
    "lat": 61.36139,
    "lon": 63.58417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Spas-Demensk",
    "name_en": "Spas-Demensk",
    "name_ru": "Спас-Деменск",
    "lat": 54.4,
    "lon": 34.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Spas-Klepiki",
    "name_en": "Spas-Klepiki",
    "name_ru": "Спас-Клепики",
    "lat": 55.133,
    "lon": 40.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Spassk,_Penza_Oblast",
    "name_en": "Spassk",
    "name_ru": "Спасск",
    "lat": 53.933,
    "lon": 43.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Spassk-Dalny",
    "name_en": "Spassk-Dalny",
    "name_ru": "Спасск-Дальний",
    "lat": 44.6,
    "lon": 132.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Spassk-Ryazansky",
    "name_en": "Spassk-Ryazansky",
    "name_ru": "Спасск-Рязанский",
    "lat": 54.4,
    "lon": 40.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Srednekolymsk",
    "name_en": "Srednekolymsk",
    "name_ru": "Среднеколымск",
    "lat": 67.467,
    "lon": 153.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sredneuralsk",
    "name_en": "Sredneuralsk",
    "name_ru": "Среднеуральск",
    "lat": 56.983,
    "lon": 60.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sretensk",
    "name_en": "Sretensk",
    "name_ru": "Сретенск",
    "lat": 52.25,
    "lon": 117.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Staraya_Kupavna",
    "name_en": "Staraya Kupavna",
    "name_ru": "Старая Купавна",
    "lat": 55.8,
    "lon": 38.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Staraya_Russa",
    "name_en": "Staraya Russa",
    "name_ru": "Старая Русса",
    "lat": 57.98333,
    "lon": 31.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Staritsa,_Staritsky_District,_Tver_Oblast",
    "name_en": "Staritsa",
    "name_ru": "Старица",
    "lat": 56.517,
    "lon": 34.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Starodub",
    "name_en": "Starodub",
    "name_ru": "Стародуб",
    "lat": 52.583,
    "lon": 32.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Stary_Oskol",
    "name_en": "Stary Oskol",
    "name_ru": "Старый Оскол",
    "lat": 51.3,
    "lon": 37.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Stavropol",
    "name_en": "Stavropol",
    "name_ru": "Ставрополь",
    "lat": 45.05,
    "lon": 41.983
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sterlitamak",
    "name_en": "Sterlitamak",
    "name_ru": "Стерлитамак",
    "lat": 53.633,
    "lon": 55.95
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Strezhevoy",
    "name_en": "Strezhevoy",
    "name_ru": "Стрежевой",
    "lat": 60.733,
    "lon": 77.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Stroitel,_Belgorod_Oblast",
    "name_en": "Stroitel",
    "name_ru": "Строитель",
    "lat": 50.783,
    "lon": 36.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Strunino,_Vladimir_Oblast",
    "name_en": "Strunino",
    "name_ru": "Струнино",
    "lat": 56.367,
    "lon": 38.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Stupino,_Stupinsky_District,_Moscow_Oblast",
    "name_en": "Stupino",
    "name_ru": "Ступино",
    "lat": 54.883,
    "lon": 38.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sudogda",
    "name_en": "Sudogda",
    "name_ru": "Судогда",
    "lat": 55.95,
    "lon": 40.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sudzha,_Kursk_Oblast",
    "name_en": "Sudzha",
    "name_ru": "Суджа",
    "lat": 51.2,
    "lon": 35.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sukhinichi",
    "name_en": "Sukhinichi",
    "name_ru": "Сухиничи",
    "lat": 54.1,
    "lon": 35.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sukhoy_Log,_Sverdlovsk_Oblast",
    "name_en": "Sukhoy Log",
    "name_ru": "Сухой Лог",
    "lat": 56.917,
    "lon": 62.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Suoyarvi",
    "name_en": "Suoyarvi",
    "name_ru": "Суоярви",
    "lat": 62.083,
    "lon": 32.35
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Surazh",
    "name_en": "Surazh",
    "name_ru": "Сураж",
    "lat": 53.017,
    "lon": 32.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Surgut",
    "name_en": "Surgut",
    "name_ru": "Сургут",
    "lat": 61.25,
    "lon": 73.433
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Surovikino",
    "name_en": "Surovikino",
    "name_ru": "Суровикино",
    "lat": 48.6,
    "lon": 42.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sursk",
    "name_en": "Sursk",
    "name_ru": "Сурск",
    "lat": 53.083,
    "lon": 45.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Susuman",
    "name_en": "Susuman",
    "name_ru": "Сусуман",
    "lat": 62.783,
    "lon": 148.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Suvorov,_Tula_Oblast",
    "name_en": "Suvorov",
    "name_ru": "Суворов",
    "lat": 54.12333,
    "lon": 36.49278
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Suzdal",
    "name_en": "Suzdal",
    "name_ru": "Суздаль",
    "lat": 56.417,
    "lon": 40.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Svetlogorsk,_Kaliningrad_Oblast",
    "name_en": "Svetlogorsk",
    "name_ru": "Светлогорск",
    "lat": 54.95,
    "lon": 20.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Svetlograd",
    "name_en": "Svetlograd",
    "name_ru": "Светлоград",
    "lat": 45.35,
    "lon": 42.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Svetly,_Kaliningrad_Oblast",
    "name_en": "Svetly",
    "name_ru": "Светлый",
    "lat": 54.6775,
    "lon": 20.13167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Svetogorsk",
    "name_en": "Svetogorsk",
    "name_ru": "Светогорск",
    "lat": 61.117,
    "lon": 28.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Svirsk",
    "name_en": "Svirsk",
    "name_ru": "Свирск",
    "lat": 53.083,
    "lon": 103.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Svobodny,_Amur_Oblast",
    "name_en": "Svobodny",
    "name_ru": "Свободный",
    "lat": 51.37722,
    "lon": 128.11806
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Syasstroy",
    "name_en": "Syasstroy",
    "name_ru": "Сясьстрой",
    "lat": 60.15,
    "lon": 32.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sychyovka,_Sychyovsky_District,_Smolensk_Oblast",
    "name_en": "Sychyovka",
    "name_ru": "Сычёвка",
    "lat": 55.833,
    "lon": 34.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Syktyvkar",
    "name_en": "Syktyvkar",
    "name_ru": "Сыктывкар",
    "lat": 61.667,
    "lon": 50.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Sysert",
    "name_en": "Sysert",
    "name_ru": "Сысерть",
    "lat": 56.5,
    "lon": 60.817
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Syzran",
    "name_en": "Syzran",
    "name_ru": "Сызрань",
    "lat": 53.167,
    "lon": 48.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Taganrog",
    "name_en": "Taganrog",
    "name_ru": "Таганрог",
    "lat": 47.217,
    "lon": 38.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Taldom",
    "name_en": "Taldom",
    "name_ru": "Талдом",
    "lat": 56.733,
    "lon": 37.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Talitsa,_Sverdlovsk_Oblast",
    "name_en": "Talitsa",
    "name_ru": "Талица",
    "lat": 57.017,
    "lon": 63.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tambov",
    "name_en": "Tambov",
    "name_ru": "Тамбов",
    "lat": 52.717,
    "lon": 41.433
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tara,_Omsk_Oblast",
    "name_en": "Tara",
    "name_ru": "Тара",
    "lat": 56.9,
    "lon": 74.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tarko-Sale",
    "name_en": "Tarko-Sale",
    "name_ru": "Тарко-Сале",
    "lat": 64.9225,
    "lon": 77.785
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tarusa",
    "name_en": "Tarusa",
    "name_ru": "Таруса",
    "lat": 54.733,
    "lon": 37.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tashtagol",
    "name_en": "Tashtagol",
    "name_ru": "Таштагол",
    "lat": 52.767,
    "lon": 87.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tatarsk,_Novosibirsk_Oblast",
    "name_en": "Tatarsk",
    "name_ru": "Татарск",
    "lat": 55.217,
    "lon": 75.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tavda",
    "name_en": "Tavda",
    "name_ru": "Тавда",
    "lat": 58.05,
    "lon": 65.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tayga",
    "name_en": "Tayga",
    "name_ru": "Тайга",
    "lat": 56.067,
    "lon": 85.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tayshet",
    "name_en": "Tayshet",
    "name_ru": "Тайшет",
    "lat": 55.95,
    "lon": 98.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Teberda",
    "name_en": "Teberda",
    "name_ru": "Теберда",
    "lat": 43.44389,
    "lon": 41.74528
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Temnikov",
    "name_en": "Temnikov",
    "name_ru": "Темников",
    "lat": 54.633,
    "lon": 43.233
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Temryuk",
    "name_en": "Temryuk",
    "name_ru": "Темрюк",
    "lat": 45.267,
    "lon": 37.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Terek_(town)",
    "name_en": "Terek",
    "name_ru": "Терек",
    "lat": 43.483,
    "lon": 44.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tetyushi",
    "name_en": "Tetyushi",
    "name_ru": "Тетюши",
    "lat": 54.933,
    "lon": 48.833
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Teykovo",
    "name_en": "Teykovo",
    "name_ru": "Тейково",
    "lat": 56.85472,
    "lon": 40.54111
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tikhoretsk",
    "name_en": "Tikhoretsk",
    "name_ru": "Тихорецк",
    "lat": 45.867,
    "lon": 40.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tikhvin",
    "name_en": "Tikhvin",
    "name_ru": "Тихвин",
    "lat": 59.65,
    "lon": 33.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Timashyovsk",
    "name_en": "Timashyovsk",
    "name_ru": "Тимашёвск",
    "lat": 45.617,
    "lon": 38.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tobolsk",
    "name_en": "Tobolsk",
    "name_ru": "Тобольск",
    "lat": 58.19528,
    "lon": 68.25806
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Toguchin",
    "name_en": "Toguchin",
    "name_ru": "Тогучин",
    "lat": 55.23917,
    "lon": 84.38917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tolyatti",
    "name_en": "Tolyatti",
    "name_ru": "Тольятти",
    "lat": 53.50889,
    "lon": 49.42222
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tomari,_Russia",
    "name_en": "Tomari",
    "name_ru": "Томари",
    "lat": 47.767,
    "lon": 142.067
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tommot",
    "name_en": "Tommot",
    "name_ru": "Томмот",
    "lat": 58.967,
    "lon": 126.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tomsk",
    "name_en": "Tomsk",
    "name_ru": "Томск",
    "lat": 56.5,
    "lon": 84.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Topki_(town),_Kemerovo_Oblast",
    "name_en": "Topki",
    "name_ru": "Топки",
    "lat": 55.333,
    "lon": 85.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Toropets",
    "name_en": "Toropets",
    "name_ru": "Торопец",
    "lat": 56.5,
    "lon": 31.62972
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Torzhok",
    "name_en": "Torzhok",
    "name_ru": "Торжок",
    "lat": 57.033,
    "lon": 34.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tosno",
    "name_en": "Tosno",
    "name_ru": "Тосно",
    "lat": 59.55,
    "lon": 30.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Totma",
    "name_en": "Totma",
    "name_ru": "Тотьма",
    "lat": 59.967,
    "lon": 42.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Troitsk,_Moscow_Oblast",
    "name_en": "Troitsk",
    "name_ru": "Троицк",
    "lat": 55.49139,
    "lon": 37.30917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Troitsk,_Chelyabinsk_Oblast",
    "name_en": "Troitsk",
    "name_ru": "Троицк",
    "lat": 54.08333,
    "lon": 61.56667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Trubchevsk",
    "name_en": "Trubchevsk",
    "name_ru": "Трубчевск",
    "lat": 52.567,
    "lon": 33.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tryokhgorny",
    "name_en": "Tryokhgorny",
    "name_ru": "Трёхгорный",
    "lat": 54.8,
    "lon": 58.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tsimlyansk",
    "name_en": "Tsimlyansk",
    "name_ru": "Цимлянск",
    "lat": 47.6461,
    "lon": 42.1019
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tsivilsk",
    "name_en": "Tsivilsk",
    "name_ru": "Цивильск",
    "lat": 55.867,
    "lon": 47.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tuapse",
    "name_en": "Tuapse",
    "name_ru": "Туапсе",
    "lat": 44.10444,
    "lon": 39.07722
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tula,_Russia",
    "name_en": "Tula",
    "name_ru": "Тула",
    "lat": 54.2,
    "lon": 37.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tulun",
    "name_en": "Tulun",
    "name_ru": "Тулун",
    "lat": 54.567,
    "lon": 100.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Turan,_Tuva_Republic",
    "name_en": "Turan",
    "name_ru": "Туран",
    "lat": 52.0,
    "lon": 94.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Turinsk",
    "name_en": "Turinsk",
    "name_ru": "Туринск",
    "lat": 58.0453,
    "lon": 63.6975
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tutayev",
    "name_en": "Tutayev",
    "name_ru": "Тутаев",
    "lat": 57.883,
    "lon": 39.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tuymazy",
    "name_en": "Tuymazy",
    "name_ru": "Туймазы",
    "lat": 54.6,
    "lon": 53.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tver",
    "name_en": "Tver",
    "name_ru": "Тверь",
    "lat": 56.8625,
    "lon": 35.92417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tynda",
    "name_en": "Tynda",
    "name_ru": "Тында",
    "lat": 55.167,
    "lon": 124.717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tyrnyauz",
    "name_en": "Tyrnyauz",
    "name_ru": "Тырныауз",
    "lat": 43.4,
    "lon": 42.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tyukalinsk",
    "name_en": "Tyukalinsk",
    "name_ru": "Тюкалинск",
    "lat": 55.867,
    "lon": 72.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Tyumen",
    "name_en": "Tyumen",
    "name_ru": "Тюмень",
    "lat": 57.15,
    "lon": 65.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uchaly_(town)",
    "name_en": "Uchaly",
    "name_ru": "Учалы",
    "lat": 54.367,
    "lon": 59.433
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Udachny",
    "name_en": "Udachny",
    "name_ru": "Удачный",
    "lat": 66.4,
    "lon": 112.317
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Udomlya",
    "name_en": "Udomlya",
    "name_ru": "Удомля",
    "lat": 57.867,
    "lon": 35.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ufa",
    "name_en": "Ufa",
    "name_ru": "Уфа",
    "lat": 54.75,
    "lon": 55.967
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uglegorsk,_Sakhalin_Oblast",
    "name_en": "Uglegorsk",
    "name_ru": "Углегорск",
    "lat": 49.067,
    "lon": 142.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uglich",
    "name_en": "Uglich",
    "name_ru": "Углич",
    "lat": 57.533,
    "lon": 38.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ukhta",
    "name_en": "Ukhta",
    "name_ru": "Ухта",
    "lat": 63.567,
    "lon": 53.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ulan-Ude",
    "name_en": "Ulan-Ude",
    "name_ru": "Улан-Удэ",
    "lat": 51.833,
    "lon": 107.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ulyanovsk",
    "name_en": "Ulyanovsk",
    "name_ru": "Ульяновск",
    "lat": 54.317,
    "lon": 48.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Unecha",
    "name_en": "Unecha",
    "name_ru": "Унеча",
    "lat": 52.84611,
    "lon": 32.67667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uray",
    "name_en": "Uray",
    "name_ru": "Урай",
    "lat": 60.133,
    "lon": 64.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uren,_Russia",
    "name_en": "Uren",
    "name_ru": "Урень",
    "lat": 57.46,
    "lon": 45.7847
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Urus-Martan",
    "name_en": "Urus-Martan",
    "name_ru": "Урус-Мартан",
    "lat": 43.133,
    "lon": 45.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uryupinsk",
    "name_en": "Uryupinsk",
    "name_ru": "Урюпинск",
    "lat": 50.8,
    "lon": 42.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Urzhum,_Urzhumsky_District,_Kirov_Oblast",
    "name_en": "Urzhum",
    "name_ru": "Уржум",
    "lat": 57.117,
    "lon": 50.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Usinsk",
    "name_en": "Usinsk",
    "name_ru": "Усинск",
    "lat": 66.0,
    "lon": 57.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Usman,_Russia",
    "name_en": "Usman",
    "name_ru": "Усмань",
    "lat": 52.05,
    "lon": 39.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Usolye,_Usolsky_District,_Perm_Krai",
    "name_en": "Usolye",
    "name_ru": "Усолье",
    "lat": 59.417,
    "lon": 56.683
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Usolye-Sibirskoye",
    "name_en": "Usolye-Sibirskoye",
    "name_ru": "Усолье-Сибирское",
    "lat": 52.75,
    "lon": 103.633
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ussuriysk",
    "name_en": "Ussuriysk",
    "name_ru": "Уссурийск",
    "lat": 43.8,
    "lon": 131.95
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ust-Dzheguta",
    "name_en": "Ust-Dzheguta",
    "name_ru": "Усть-Джегута",
    "lat": 44.08722,
    "lon": 41.97333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ust-Ilimsk",
    "name_en": "Ust-Ilimsk",
    "name_ru": "Усть-Илимск",
    "lat": 58.0,
    "lon": 102.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ust-Katav",
    "name_en": "Ust-Katav",
    "name_ru": "Усть-Катав",
    "lat": 54.933,
    "lon": 58.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ust-Kut",
    "name_en": "Ust-Kut",
    "name_ru": "Усть-Кут",
    "lat": 56.783,
    "lon": 105.633
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ust-Labinsk",
    "name_en": "Ust-Labinsk",
    "name_ru": "Усть-Лабинск",
    "lat": 45.217,
    "lon": 39.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Ustyuzhna",
    "name_en": "Ustyuzhna",
    "name_ru": "Устюжна",
    "lat": 58.833,
    "lon": 36.433
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uvarovo,_Tambov_Oblast",
    "name_en": "Uvarovo",
    "name_ru": "Уварово",
    "lat": 51.983,
    "lon": 42.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uyar,_Uyarsky_District,_Krasnoyarsk_Krai",
    "name_en": "Uyar",
    "name_ru": "Уяр",
    "lat": 55.82667,
    "lon": 94.31528
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uzhur",
    "name_en": "Uzhur",
    "name_ru": "Ужур",
    "lat": 55.3175,
    "lon": 89.8225
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Uzlovaya",
    "name_en": "Uzlovaya",
    "name_ru": "Узловая",
    "lat": 53.983,
    "lon": 38.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Valday,_Novgorod_Oblast",
    "name_en": "Valday",
    "name_ru": "Валдай",
    "lat": 57.97917,
    "lon": 33.25278
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Valuyki,_Belgorod_Oblast",
    "name_en": "Valuyki",
    "name_ru": "Валуйки",
    "lat": 50.217,
    "lon": 38.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Velikiye_Luki",
    "name_en": "Velikiye Luki",
    "name_ru": "Великие Луки",
    "lat": 56.333,
    "lon": 30.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Veliky_Novgorod",
    "name_en": "Veliky Novgorod",
    "name_ru": "Великий Новгород",
    "lat": 58.55,
    "lon": 31.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Veliky_Ustyug",
    "name_en": "Veliky Ustyug",
    "name_ru": "Великий Устюг",
    "lat": 60.767,
    "lon": 46.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Velizh",
    "name_en": "Velizh",
    "name_ru": "Велиж",
    "lat": 55.6,
    "lon": 31.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Velsk",
    "name_en": "Velsk",
    "name_ru": "Вельск",
    "lat": 61.067,
    "lon": 42.117
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Venyov",
    "name_en": "Venyov",
    "name_ru": "Венёв",
    "lat": 54.3528,
    "lon": 38.2717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vereshchagino,_Vereshchaginsky_District,_Perm_Krai",
    "name_en": "Vereshchagino",
    "name_ru": "Верещагино",
    "lat": 58.067,
    "lon": 54.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vereya",
    "name_en": "Vereya",
    "name_ru": "Верея",
    "lat": 55.35,
    "lon": 36.183
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Verkhneuralsk",
    "name_en": "Verkhneuralsk",
    "name_ru": "Верхнеуральск",
    "lat": 53.883,
    "lon": 59.217
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Verkhny_Tagil",
    "name_en": "Verkhny Tagil",
    "name_ru": "Верхний Тагил",
    "lat": 57.38333,
    "lon": 59.93333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Verkhny_Ufaley",
    "name_en": "Verkhny Ufaley",
    "name_ru": "Верхний Уфалей",
    "lat": 56.05,
    "lon": 60.233
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Verkhnyaya_Pyshma",
    "name_en": "Verkhnyaya Pyshma",
    "name_ru": "Верхняя Пышма",
    "lat": 56.97611,
    "lon": 60.59444
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Verkhnyaya_Salda",
    "name_en": "Verkhnyaya Salda",
    "name_ru": "Верхняя Салда",
    "lat": 58.04556,
    "lon": 60.55333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Verkhnyaya_Tura",
    "name_en": "Verkhnyaya Tura",
    "name_ru": "Верхняя Тура",
    "lat": 58.35944,
    "lon": 59.8175
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Verkhoturye",
    "name_en": "Verkhoturye",
    "name_ru": "Верхотурье",
    "lat": 58.867,
    "lon": 60.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Verkhoyansk",
    "name_en": "Verkhoyansk",
    "name_ru": "Верхоянск",
    "lat": 67.55,
    "lon": 133.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vesyegonsk",
    "name_en": "Vesyegonsk",
    "name_ru": "Весьегонск",
    "lat": 58.683,
    "lon": 37.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vetluga",
    "name_en": "Vetluga",
    "name_ru": "Ветлуга",
    "lat": 57.85,
    "lon": 45.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vichuga",
    "name_en": "Vichuga",
    "name_ru": "Вичуга",
    "lat": 57.2,
    "lon": 41.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vidnoye,_Moscow_Oblast",
    "name_en": "Vidnoye",
    "name_ru": "Видное",
    "lat": 55.55,
    "lon": 37.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vikhorevka",
    "name_en": "Vikhorevka",
    "name_ru": "Вихоревка",
    "lat": 56.117,
    "lon": 101.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vilyuchinsk",
    "name_en": "Vilyuchinsk",
    "name_ru": "Вилючинск",
    "lat": 52.93056,
    "lon": 158.40278
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vilyuysk",
    "name_en": "Vilyuysk",
    "name_ru": "Вилюйск",
    "lat": 63.75,
    "lon": 121.633
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vladikavkaz",
    "name_en": "Vladikavkaz",
    "name_ru": "Владикавказ",
    "lat": 43.017,
    "lon": 44.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vladimir",
    "name_en": "Vladimir",
    "name_ru": "Владимир",
    "lat": 56.133,
    "lon": 40.417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vladivostok",
    "name_en": "Vladivostok",
    "name_ru": "Владивосток",
    "lat": 43.133,
    "lon": 131.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volchansk",
    "name_en": "Volchansk",
    "name_ru": "Волчанск",
    "lat": 59.93333,
    "lon": 60.12139
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volgodonsk",
    "name_en": "Volgodonsk",
    "name_ru": "Волгодонск",
    "lat": 47.517,
    "lon": 42.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volgograd",
    "name_en": "Volgograd",
    "name_ru": "Волгоград",
    "lat": 48.7,
    "lon": 44.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volgorechensk",
    "name_en": "Volgorechensk",
    "name_ru": "Волгореченск",
    "lat": 57.44389,
    "lon": 41.15917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volkhov",
    "name_en": "Volkhov",
    "name_ru": "Волхов",
    "lat": 59.917,
    "lon": 32.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volodarsk,_Russia",
    "name_en": "Volodarsk",
    "name_ru": "Володарск",
    "lat": 56.22611,
    "lon": 43.18611
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vologda",
    "name_en": "Vologda",
    "name_ru": "Вологда",
    "lat": 59.217,
    "lon": 39.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volokolamsk",
    "name_en": "Volokolamsk",
    "name_ru": "Волоколамск",
    "lat": 56.033,
    "lon": 35.95
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volosovo,_Volosovsky_District,_Leningrad_Oblast",
    "name_en": "Volosovo",
    "name_ru": "Волосово",
    "lat": 59.433,
    "lon": 29.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volsk",
    "name_en": "Volsk",
    "name_ru": "Вольск",
    "lat": 52.05,
    "lon": 47.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volzhsk",
    "name_en": "Volzhsk",
    "name_ru": "Волжск",
    "lat": 55.87028,
    "lon": 48.35611
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Volzhsky,_Volgograd_Oblast",
    "name_en": "Volzhsky",
    "name_ru": "Волжский",
    "lat": 48.80556,
    "lon": 44.74167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vorkuta",
    "name_en": "Vorkuta",
    "name_ru": "Воркута",
    "lat": 67.5,
    "lon": 64.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Voronezh",
    "name_en": "Voronezh",
    "name_ru": "Воронеж",
    "lat": 51.67083,
    "lon": 39.21417
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vorsma",
    "name_en": "Vorsma",
    "name_ru": "Ворсма",
    "lat": 55.9856,
    "lon": 43.2717
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Voskresensk,_Moscow_Oblast",
    "name_en": "Voskresensk",
    "name_ru": "Воскресенск",
    "lat": 55.317,
    "lon": 38.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Votkinsk",
    "name_en": "Votkinsk",
    "name_ru": "Воткинск",
    "lat": 57.05,
    "lon": 54.0
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vsevolozhsk",
    "name_en": "Vsevolozhsk",
    "name_ru": "Всеволожск",
    "lat": 60.033,
    "lon": 30.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vuktyl",
    "name_en": "Vuktyl",
    "name_ru": "Вуктыл",
    "lat": 63.85667,
    "lon": 57.30944
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vyatskiye_Polyany",
    "name_en": "Vyatskiye Polyany",
    "name_ru": "Вятские Поляны",
    "lat": 56.22389,
    "lon": 51.06333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vyazemsky,_Khabarovsk_Krai",
    "name_en": "Vyazemsky",
    "name_ru": "Вяземский",
    "lat": 47.525,
    "lon": 134.75722
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vyazma",
    "name_en": "Vyazma",
    "name_ru": "Вязьма",
    "lat": 55.2,
    "lon": 34.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vyazniki,_Vladimir_Oblast",
    "name_en": "Vyazniki",
    "name_ru": "Вязники",
    "lat": 56.25,
    "lon": 42.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vyborg",
    "name_en": "Vyborg",
    "name_ru": "Выборг",
    "lat": 60.717,
    "lon": 28.767
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vyksa",
    "name_en": "Vyksa",
    "name_ru": "Выкса",
    "lat": 55.317,
    "lon": 42.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vyshny_Volochyok",
    "name_en": "Vyshny Volochyok",
    "name_ru": "Вышний Волочёк",
    "lat": 57.583,
    "lon": 34.567
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vysokovsk",
    "name_en": "Vysokovsk",
    "name_ru": "Высоковск",
    "lat": 56.317,
    "lon": 36.55
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vysotsk",
    "name_en": "Vysotsk",
    "name_ru": "Высоцк",
    "lat": 60.617,
    "lon": 28.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Vytegra",
    "name_en": "Vytegra",
    "name_ru": "Вытегра",
    "lat": 61.0,
    "lon": 36.45
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yadrin",
    "name_en": "Yadrin",
    "name_ru": "Ядрин",
    "lat": 55.933,
    "lon": 46.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yakhroma",
    "name_en": "Yakhroma",
    "name_ru": "Яхрома",
    "lat": 56.3,
    "lon": 37.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yakutsk",
    "name_en": "Yakutsk",
    "name_ru": "Якутск",
    "lat": 62.033,
    "lon": 129.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yalutorovsk",
    "name_en": "Yalutorovsk",
    "name_ru": "Ялуторовск",
    "lat": 56.65,
    "lon": 66.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yanaul",
    "name_en": "Yanaul",
    "name_ru": "Янаул",
    "lat": 56.267,
    "lon": 54.933
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yaransk",
    "name_en": "Yaransk",
    "name_ru": "Яранск",
    "lat": 57.317,
    "lon": 47.9
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yaroslavl",
    "name_en": "Yaroslavl",
    "name_ru": "Ярославль",
    "lat": 57.617,
    "lon": 39.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yarovoye",
    "name_en": "Yarovoye",
    "name_ru": "Яровое",
    "lat": 52.933,
    "lon": 78.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yartsevo,_Smolensk_Oblast",
    "name_en": "Yartsevo",
    "name_ru": "Ярцево",
    "lat": 55.067,
    "lon": 32.683
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yasnogorsk,_Tula_Oblast",
    "name_en": "Yasnogorsk",
    "name_ru": "Ясногорск",
    "lat": 54.47944,
    "lon": 37.69333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yasny,_Orenburg_Oblast",
    "name_en": "Yasny",
    "name_ru": "Ясный",
    "lat": 51.033,
    "lon": 59.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yefremov_(town)",
    "name_en": "Yefremov",
    "name_ru": "Ефремов",
    "lat": 53.1531,
    "lon": 38.0947
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yegoryevsk",
    "name_en": "Yegoryevsk",
    "name_ru": "Егорьевск",
    "lat": 55.383,
    "lon": 39.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yekaterinburg",
    "name_en": "Yekaterinburg",
    "name_ru": "Екатеринбург",
    "lat": 56.833,
    "lon": 60.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yelabuga",
    "name_en": "Yelabuga",
    "name_ru": "Елабуга",
    "lat": 55.767,
    "lon": 52.083
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yelets",
    "name_en": "Yelets",
    "name_ru": "Елец",
    "lat": 52.61667,
    "lon": 38.46667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yelizovo",
    "name_en": "Yelizovo",
    "name_ru": "Елизово",
    "lat": 53.183,
    "lon": 158.383
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yelnya,_Yelninsky_District,_Smolensk_Oblast",
    "name_en": "Yelnya",
    "name_ru": "Ельня",
    "lat": 54.567,
    "lon": 33.167
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yemanzhelinsk",
    "name_en": "Yemanzhelinsk",
    "name_ru": "Еманжелинск",
    "lat": 54.75,
    "lon": 61.31667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yemva",
    "name_en": "Yemva",
    "name_ru": "Емва",
    "lat": 62.6,
    "lon": 50.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yeniseysk",
    "name_en": "Yeniseysk",
    "name_ru": "Енисейск",
    "lat": 58.467,
    "lon": 92.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yermolino,_Kaluga_Oblast",
    "name_en": "Yermolino",
    "name_ru": "Ермолино",
    "lat": 55.2,
    "lon": 36.6
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yershov,_Saratov_Oblast",
    "name_en": "Yershov",
    "name_ru": "Ершов",
    "lat": 51.35,
    "lon": 48.267
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yessentuki",
    "name_en": "Yessentuki",
    "name_ru": "Ессентуки",
    "lat": 44.033,
    "lon": 42.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yeysk",
    "name_en": "Yeysk",
    "name_ru": "Ейск",
    "lat": 46.7,
    "lon": 38.283
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yoshkar-Ola",
    "name_en": "Yoshkar-Ola",
    "name_ru": "Йошкар-Ола",
    "lat": 56.633,
    "lon": 47.867
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yubileyny,_Moscow_Oblast",
    "name_en": "Yubileyny",
    "name_ru": "Юбилейный",
    "lat": 55.933,
    "lon": 37.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yugorsk",
    "name_en": "Yugorsk",
    "name_ru": "Югорск",
    "lat": 61.317,
    "lon": 63.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yukhnov",
    "name_en": "Yukhnov",
    "name_ru": "Юхнов",
    "lat": 54.74444,
    "lon": 35.22972
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yurga",
    "name_en": "Yurga",
    "name_ru": "Юрга",
    "lat": 55.72306,
    "lon": 84.88611
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yuryevets,_Ivanovo_Oblast",
    "name_en": "Yuryevets",
    "name_ru": "Юрьевец",
    "lat": 57.317,
    "lon": 43.1
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yuryev-Polsky_(town)",
    "name_en": "Yuryev-Polsky",
    "name_ru": "Юрьев-Польский",
    "lat": 56.5,
    "lon": 39.683
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yuryuzan,_Chelyabinsk_Oblast",
    "name_en": "Yuryuzan",
    "name_ru": "Юрюзань",
    "lat": 54.867,
    "lon": 58.433
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yuzha",
    "name_en": "Yuzha",
    "name_ru": "Южа",
    "lat": 56.583,
    "lon": 42.033
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yuzhno-Sakhalinsk",
    "name_en": "Yuzhno-Sakhalinsk",
    "name_ru": "Южно-Сахалинск",
    "lat": 46.967,
    "lon": 142.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yuzhno-Sukhokumsk",
    "name_en": "Yuzhno-Sukhokumsk",
    "name_ru": "Южно-Сухокумск",
    "lat": 44.667,
    "lon": 45.65
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Yuzhnouralsk",
    "name_en": "Yuzhnouralsk",
    "name_ru": "Южноуральск",
    "lat": 54.45,
    "lon": 61.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zadonsk",
    "name_en": "Zadonsk",
    "name_ru": "Задонск",
    "lat": 52.39139,
    "lon": 38.91639
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zainsk",
    "name_en": "Zainsk",
    "name_ru": "Заинск",
    "lat": 55.3,
    "lon": 52.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zakamensk",
    "name_en": "Zakamensk",
    "name_ru": "Закаменск",
    "lat": 50.37722,
    "lon": 103.27361
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zaozyorny,_Krasnoyarsk_Krai",
    "name_en": "Zaozyorny",
    "name_ru": "Заозёрный",
    "lat": 55.967,
    "lon": 94.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zaozyorsk",
    "name_en": "Zaozyorsk",
    "name_ru": "Заозёрск",
    "lat": 69.4,
    "lon": 32.617
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zapadnaya_Dvina",
    "name_en": "Zapadnaya Dvina",
    "name_ru": "Западная Двина",
    "lat": 56.26333,
    "lon": 32.08389
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zapolyarny,_Murmansk_Oblast",
    "name_en": "Zapolyarny",
    "name_ru": "Заполярный",
    "lat": 69.417,
    "lon": 30.8
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zaraysk",
    "name_en": "Zaraysk",
    "name_ru": "Зарайск",
    "lat": 54.767,
    "lon": 38.883
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zarechny,_Penza_Oblast",
    "name_en": "Zarechny",
    "name_ru": "Заречный",
    "lat": 53.2,
    "lon": 45.16667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zarechny,_Sverdlovsk_Oblast",
    "name_en": "Zarechny",
    "name_ru": "Заречный",
    "lat": 56.817,
    "lon": 61.333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zarinsk",
    "name_en": "Zarinsk",
    "name_ru": "Заринск",
    "lat": 53.70889,
    "lon": 84.96722
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zavitinsk",
    "name_en": "Zavitinsk",
    "name_ru": "Завитинск",
    "lat": 50.12806,
    "lon": 129.44333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zavodoukovsk",
    "name_en": "Zavodoukovsk",
    "name_ru": "Заводоуковск",
    "lat": 56.483,
    "lon": 66.533
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zavolzhsk",
    "name_en": "Zavolzhsk",
    "name_ru": "Заволжск",
    "lat": 57.467,
    "lon": 42.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zavolzhye,_Nizhny_Novgorod_Oblast",
    "name_en": "Zavolzhye",
    "name_ru": "Заволжье",
    "lat": 56.633,
    "lon": 43.4
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zelenodolsk,_Russia",
    "name_en": "Zelenodolsk",
    "name_ru": "Зеленодольск",
    "lat": 55.85,
    "lon": 48.517
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zelenogorsk,_Krasnoyarsk_Krai",
    "name_en": "Zelenogorsk",
    "name_ru": "Зеленогорск",
    "lat": 56.1,
    "lon": 94.58333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zelenogorsk,_Saint_Petersburg",
    "name_en": "Zelenogorsk",
    "name_ru": "Зеленогорск",
    "lat": 60.2,
    "lon": 29.7
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zelenograd",
    "name_en": "Zelenograd",
    "name_ru": "Зеленоград",
    "lat": 55.99778,
    "lon": 37.19028
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zelenogradsk",
    "name_en": "Zelenogradsk",
    "name_ru": "Зеленоградск",
    "lat": 54.967,
    "lon": 20.483
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zelenokumsk",
    "name_en": "Zelenokumsk",
    "name_ru": "Зеленокумск",
    "lat": 44.417,
    "lon": 43.917
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zernograd",
    "name_en": "Zernograd",
    "name_ru": "Зерноград",
    "lat": 46.85,
    "lon": 40.3
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zeya,_Russia",
    "name_en": "Zeya",
    "name_ru": "Зея",
    "lat": 53.733,
    "lon": 127.25
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zheleznodorozhny,_Moscow_Oblast",
    "name_en": "Zheleznodorozhny",
    "name_ru": "Железнодорожный",
    "lat": 55.75,
    "lon": 38.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zheleznogorsk,_Krasnoyarsk_Krai",
    "name_en": "Zheleznogorsk",
    "name_ru": "Железногорск",
    "lat": 56.25,
    "lon": 93.53333
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zheleznogorsk,_Kursk_Oblast",
    "name_en": "Zheleznogorsk",
    "name_ru": "Железногорск",
    "lat": 52.333,
    "lon": 35.367
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zheleznogorsk-Ilimsky",
    "name_en": "Zheleznogorsk-Ilimsky",
    "name_ru": "Железногорск-Илимский",
    "lat": 56.583,
    "lon": 104.133
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zheleznovodsk",
    "name_en": "Zheleznovodsk",
    "name_ru": "Железноводск",
    "lat": 44.13944,
    "lon": 43.01694
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zherdevka",
    "name_en": "Zherdevka",
    "name_ru": "Жердевка",
    "lat": 51.833,
    "lon": 41.467
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zhigulyovsk",
    "name_en": "Zhigulyovsk",
    "name_ru": "Жигулёвск",
    "lat": 53.39972,
    "lon": 49.49528
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zhirnovsk",
    "name_en": "Zhirnovsk",
    "name_ru": "Жирновск",
    "lat": 50.983,
    "lon": 44.783
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zhizdra",
    "name_en": "Zhizdra",
    "name_ru": "Жиздра",
    "lat": 53.75028,
    "lon": 34.73611
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zhukov,_Kaluga_Oblast",
    "name_en": "Zhukov",
    "name_ru": "Жуков",
    "lat": 55.033,
    "lon": 36.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zhukovka,_Bryansk_Oblast",
    "name_en": "Zhukovka",
    "name_ru": "Жуковка",
    "lat": 53.533,
    "lon": 33.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zhukovsky,_Moscow_Oblast",
    "name_en": "Zhukovsky",
    "name_ru": "Жуковский",
    "lat": 55.59722,
    "lon": 38.12028
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zima_(town)",
    "name_en": "Zima",
    "name_ru": "Зима",
    "lat": 53.917,
    "lon": 102.05
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zlatoust",
    "name_en": "Zlatoust",
    "name_ru": "Златоуст",
    "lat": 55.167,
    "lon": 59.667
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zlynka",
    "name_en": "Zlynka",
    "name_ru": "Злынка",
    "lat": 52.417,
    "lon": 31.733
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zmeinogorsk",
    "name_en": "Zmeinogorsk",
    "name_ru": "Змеиногорск",
    "lat": 51.167,
    "lon": 82.2
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Znamensk,_Astrakhan_Oblast",
    "name_en": "Znamensk",
    "name_ru": "Знаменск",
    "lat": 48.583,
    "lon": 45.75
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zubtsov",
    "name_en": "Zubtsov",
    "name_ru": "Зубцов",
    "lat": 56.167,
    "lon": 34.583
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zuyevka,_Kirov_Oblast",
    "name_en": "Zuyevka",
    "name_ru": "Зуевка",
    "lat": 58.4,
    "lon": 51.15
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zvenigorod",
    "name_en": "Zvenigorod",
    "name_ru": "Звенигород",
    "lat": 55.733,
    "lon": 36.85
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zvenigovo",
    "name_en": "Zvenigovo",
    "name_ru": "Звенигово",
    "lat": 55.983,
    "lon": 48.017
  },
  {
    "href_en": "http://en.wikipedia.org/wiki/Zverevo",
    "name_en": "Zverevo",
    "name_ru": "Зверево",
    "lat": 47.02056,
    "lon": 40.1225
  }
];

exports.cities = cities;
