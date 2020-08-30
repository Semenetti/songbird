const birdsData = [
  [
    {
      id: 1,
      completed: false,
      name: 'Артик и Асти',
      species: 'Девочка танцуй',
      description:
        'Украинская поп-группа, основанная в 2010 году продюсером и исполнителем Артёмом Умрихиным (псевдоним Artik). В состав группы входят два артиста: Artik (Артём) и Asti (Анна).',
      image: './src/assets/img/artik_asti.jpg',
      audio: './src/assets/audio/artik_asti_devochka_tancuj.mp3',
    },
    {
      id: 2,
      completed: false,
      name: 'Ганвест',
      species: 'Кайфули',
      description:
        'Настоящее имя — Руслан Владимирович Гоминов. Родился 11 ноября 1992 года в г. Актау, Мангистауская область, Казахстан. Хип-хоп и рэп-исполнитель. Стал известен благодаря таким песням как «Дурман» и «Никотин»',
      image: './src/assets/img/ganvest.jpg',
      audio: './src/assets/audio/ganvest_kajfuli.mp3',
    },
    {
      id: 3,
      completed: false,
      name: 'Intelligency',
      species: 'August',
      description:
        'Intelligency (рус. Интеллигенция, произносится как «интеллидженси») — белорусский мультиязычный музыкальный коллектив, играющий в стиле техно. Сами музыканты называют свой стиль «техно-блюз»',
      image: './src/assets/img/intelligency.jpg',
      audio: './src/assets/audio/intelligency_august.mp3',
    },
    {
      id: 4,
      completed: false,
      name: 'Little Big',
      species: 'Uno',
      description:
        'Little Big — российская панк-поп-рэйв-группа, образованная в 2013 году в Санкт-Петербурге. Коллектив был выдвинут от России на песенный конкурс «Евровидение-2020».',
      image: './src/assets/img/little_big.jpg',
      audio: './src/assets/audio/little_big_uno.mp3',
    },
    {
      id: 5,
      completed: false,
      name: 'Олег Кензов',
      species: 'По кайфу',
      description:
        'Украинский певец, МС и ведущий. Родился в Полтаве 19 августа 1988 года. В марте 2010 года стал участником хип-хоп команды «Принципова зміна», творчество которой пользовалось спросом во многих престижных клубах Украины.',
      image: './src/assets/img/oleg_kenzov.jpg',
      audio: './src/assets/audio/oleg_kenzov_po_kajfu.mp3',
    },
    {
      id: 6,
      completed: false,
      name: 'Zivert',
      species: 'ЯТЛ',
      description:
        'Zivert (наст. имя: Ю́лия Дми́триевна Зи́верт; род. 28 ноября 1990, Москва) — российская поп-певица. Прославилась в 2017 году с песнями «Чак» и «Анестезия». Широкую популярность получила в конце 2018 года после выхода трека «Life».',
      image: './src/assets/img/zivert.jpg',
      audio: './src/assets/audio/zivert_yatl.mp3',
    },
  ],
  [
    {
      id: 1,
      completed: false,
      name: 'Buster Poindexter',
      species: 'Hit the Road Jack',
      description:
        'Buster Poindexter - одноименный альбом, выпущенный RCA Records в 1987 году Бастером Пойндекстером, альтер-эго фронтмена New York Dolls Дэвида Йохансена. Йохансен перезаписал трек "Heart of Gold" в виде Buster Poindexter, который первоначально появился на сольном альбоме Йохансена 1981 года Here Comes the Night.',
      image: './src/assets/img/Buster_Poindexter.jpg',
      audio: './src/assets/audio/buster_pointdexter_hit_the_road_jack.mp3',
    },
    {
      id: 2,
      completed: false,
      name: 'Chris De Burgh',
      species: 'The Lady In Red',
      description:
        'Крис де Бург (англ. Chris de Burgh; имя при рождении Кристофер Джон Дэвисон, англ. Christopher John Davison; 15 октября 1948 года) — ирландский рок-музыкант и композитор.',
      image: './src/assets/img/chris-de-burgh.jpg',
      audio: './src/assets/audio/chris_de_burgh_the_lady_in_red.mp3',
    },
    {
      id: 3,
      completed: false,
      name: 'Frank Sinatra',
      species: 'I love you baby',
      description:
        'Фрэ́нсис А́льберт Сина́тра (англ. Francis Albert Sinatra: 12 декабря 1915, Хобокен, Нью-Джерси — 14 мая 1998, Лос-Анджелес) — американский киноактёр, кинорежиссёр, продюсер, шоумен, певец (крунер). Одиннадцать раз становился лауреатом премии «Грэмми». Славился романтическим стилем исполнения песен и «бархатным» тембром голоса. В XX веке Синатра стал легендой не только музыкального мира, но и каждого аспекта американской культуры. Когда его не стало, некоторые журналисты писали: «К чёрту календарь. День смерти Фрэнка Синатры — конец XX века». Певческая карьера Синатры стартовала ещё в 1930-х годах',
      image: './src/assets/img/frank-sinatra.jpg',
      audio: './src/assets/audio/frank_sinatra_i_love_you_baby.mp3',
    },
    {
      id: 4,
      completed: false,
      name: 'Gregory Porter',
      species: 'Consequence of love',
      description:
        'Грегори Портер - американский певец, автор песен и актер. В 2014 году он получил премию Грэмми за лучший джазовый вокальный альбом для Liquid Spirit, а в 2017 году - Take Me to the Alley.',
      image: './src/assets/img/gregory_porter.jpg',
      audio: './src/assets/audio/gregory_porter_consequence_of_love.mp3',
    },
    {
      id: 5,
      completed: false,
      name: 'Louis Armstrong',
      species: 'What a wonderful world',
      description:
        'Луи Армстронг (англ. Louis Armstrong; 4 августа 1901, Новый Орлеан, Луизиана — 6 июля 1971, Нью-Йорк) — американский джазовый трубач, вокалист и руководитель ансамбля. Оказал (наряду с Дюком Эллингтоном, Чарли Паркером, Майлсом Дейвисом и Джоном Колтрейном) наибольшее влияние на развитие джаза и внес неоценимый вклад в его популяризацию во всём мире.',
      image: './src/assets/img/Louis-Armstrong.jpg',
      audio: './src/assets/audio/louis_armstrong_what_a_wonderful_world.mp3',
    },
    {
      id: 6,
      completed: false,
      name: 'The Platters',
      species: 'Only you',
      description:
        'The Platters (с англ. — «Граммофонные пластинки») — вокальная группа из Лос-Анджелеса, образованная в 1953 году. Известны как авторы и исполнители лёгкой музыки в период расцвета рок-н-ролла. В состав группы входили музыканты: Тони Уильямс (ведущий тенор), Дэвид Линч, Пол Роб, Херб Рид и Зола Тэйлор. За все годы своей карьеры музыканты записали порядка четырехсот песен, записи разошлись по всему миру тиражом 89 миллионов экземпляров, посетили с концертами более 90 стран, где собрали около 230 различных наград. The Platters участвовали в съёмках фильмов: «Rock Around the Clock», «Девушка, я не могу помочь», «Европа ночью», «Девушки города», «Рок карнавала» и других. The Platters были включены в Зал славы вокальных групп в 1998 году и в Зал славы рок-н-ролла в 1990 году.',
      image: './src/assets/img/platters.jpg',
      audio: './src/assets/audio/the_platters_only_you.mp3',
    },
  ],
  [
    {
      id: 1,
      completed: false,
      name: 'Bon Jovi',
      species: 'It’s My Life',
      description:
        'Bon Jovi — американская рок-группа из Нью-Джерси, образованная в 1983 году. В состав коллектива входят вокалист Джон Бон Джови, клавишник Дэвид Брайан, бас-гитарист Хью Макдональд, гитарист Фил Икс и барабанщик Тико Торрес. Всемирной популярности Bon Jovi поспособствовал альбом Slippery When Wet (1986). Их песня 2000 года «It’s My Life» смогла привлечь внимание более молодой аудитории.',
      image: './src/assets/img/bonjovi.jpg',
      audio: './src/assets/audio/bon_jovi_its_my_life.mp3',
    },
    {
      id: 2,
      completed: false,
      name: 'Deep purple',
      species: 'Smoke On The Water',
      description:
        'Deep Purple — британская рок-группа, образованная в феврале 1968 года в Хартфорде, Англия, и считающаяся одной из самых заметных и влиятельных в хард-роке 1970-х годов. Музыкальные критики считают Deep Purple одними из основателей хард-рока и высоко оценивают их вклад в его развитие.',
      image: './src/assets/img/Deep-purple.jpg',
      audio: './src/assets/audio/deep_purple_smoke_on_the_water.mp3',
    },
    {
      id: 3,
      completed: false,
      name: 'Hozier',
      species: 'Take Me to Church',
      description:
        'Э́ндрю Джон Хо́зиер-Бирн (англ. Andrew John Hozier-Byrne; род. 17 марта 1990), мононимно известный как Хо́зиер (англ. Hozier), — ирландский музыкант, певец и автор песен.',
      image: './src/assets/img/hozier.jpg',
      audio: './src/assets/audio/hozier_take_me_to_church.mp3',
    },
    {
      id: 4,
      completed: false,
      name: 'Metallica',
      species: 'Nothing Else Matters',
      description:
        'Metallica (читается как Метáллика) — американская метал-группа, образованная в 1981 году, в Лос-Анджелесе. Metallica оказала большое влияние на развитие метала и входит (вместе с такими группами как Slayer, Megadeth и Anthrax) в «большую четвёрку трэш-метала». Альбомы Metallica были проданы в общей сложности в количестве более 110 миллионов экземпляров по всему миру, что делает её одним из самых коммерчески успешных металлических коллективов. В 2011 году один из крупнейших журналов о метал-музыке Kerrang! в июньском номере признал Metallica лучшей метал-группой последних 30 лет.',
      image: './src/assets/img/metallica.jpg',
      audio: './src/assets/audio/metallica_nothing_else_matters.mp3',
    },
    {
      id: 5,
      completed: false,
      name: 'Queen',
      species: 'The Show Must Go On',
      description:
        'Queen (Куи́н; в переводе с англ. — «королева») — британская рок-группа, добившаяся широчайшей известности в середине 1970-х годов, и одна из наиболее успешных групп в истории рок-музыки. Средства массовой информации называют группу «культовой» и пишут, что она и по сей день имеет сотни миллионов поклонников. Группа выпустила пятнадцать студийных альбомов, пять концертных и многочисленные сборники. Восемнадцать хитов «Queen» занимали первые места в чартах разных стран. Каждый участник группы является автором как минимум одного хита, достигавшего вершины британского чарта. Концертные выступления группы также были признаны одними из самых ярких и значимых за всю историю рока.',
      image: './src/assets/img/queen.jpg',
      audio: './src/assets/audio/queen_the_show_must_go_on.mp3',
    },
    {
      id: 6,
      completed: false,
      name: 'Rammstein',
      species: 'Deutschland',
      description:
        'Rammstein (нем. [ˈʀamʃtaɪ̯n]) — немецкая метал-группа, образованная в январе 1994 года в Берлине. Музыкальный стиль группы относится к жанру индастриал-метала (конкретно — его немецкой сцене Neue Deutsche Härte). Основные черты творчества группы: специфический ритм, в котором выдержана большая часть композиций, и эпатирующие тексты песен. Особую известность группе принесли сценические выступления, часто сопровождаемые использованием пиротехники, получившие признание в музыкальной среде. Состав группы ни разу не менялся. По состоянию на 2018 год группа продала около 20 млн копий альбомов.',
      image: './src/assets/img/rammstein.jpg',
      audio: './src/assets/audio/rammstein_deutschland.mp3',
    },
  ],
  [
    {
      id: 1,
      completed: false,
      name: 'Би-2',
      species: 'Лайки',
      description:
        'Би-2 — советская и российская рок-группа, образованная в 1988 году в Бобруйске. Основатели и бессменные участники — Шура Би-2 и Лёва Би-2. В состав команды также входят: Андрей Звонков, Макс Лакмус, Борис Лифшиц и Ян Николенко. В 2017 году Би-2 завершили работу над десятым студийным альбомом «Горизонт событий».',
      image: './src/assets/img/bi2.jpg',
      audio: './src/assets/audio/bi_2_lajki.mp3',
    },
    {
      id: 2,
      completed: false,
      name: 'Кино',
      species: 'Звезда по имени солнце',
      description:
        '«Кино́» — одна из самых популярных советских рок-групп 1980-х годов. Лидером и автором почти всех текстов и музыки неизменно оставался Виктор Цой, после смерти которого коллектив, выпустивший, в общей сложности, за девять лет на студийных альбомах более ста песен, несколько сборников и концертных записей, а также большое количество неофициальных бутлегов, прекратил существование.',
      image: './src/assets/img/kino.jpeg',
      audio: './src/assets/audio/kino_zvezda_po_imeni_solnce.mp3',
    },
    {
      id: 3,
      completed: false,
      name: 'Ленинград',
      species: 'Кабриолет',
      description:
        '«Ленингра́д» — российская музыкальная группа из Санкт-Петербурга, созданная Сергеем Шнуровым. Известна, в частности, эксцентричными песнями с большим количеством мата и алкогольно-бытовой тематикой. Группа использует в своём творчестве обширный состав духовых инструментов: труба, саксофон, тромбон, туба.',
      image: './src/assets/img/leningrad.jpg',
      audio: './src/assets/audio/leningrad_kabriolet.mp3',
    },
    {
      id: 4,
      completed: false,
      name: 'Звери',
      species: 'Котенок',
      description:
        '«Зве́ри» — российская поп-рок-группа, созданная Романом Билыком в 2001 году. Лауреат премии MTV Россия и премии «Дебют». На премии Муз-ТВ группа побеждала в номинации «Лучшая рок-группа» 9 раз.',
      image: './src/assets/img/zveri.jpg',
      audio: './src/assets/audio/zveri_kotenok.mp3',
    },
    {
      id: 5,
      completed: false,
      name: 'Мумий Тролль',
      species: 'Лира',
      description:
        '«Му́мий Тролль» — советская и российская рок-группа из Владивостока. Основана в 1983 году во Владивостоке её бессменным лидером и идеологом Ильёй Лагутенко. Группа представляла Россию на конкурсе песни «Евровидение — 2001», где заняла 12-е место.',
      image: './src/assets/img/mumij_troll.jpg',
      audio: './src/assets/audio/mumij_troll_lira.mp3',
    },
    {
      id: 6,
      name: 'Ночные снайперы',
      completed: false,
      species: 'Камень',
      description:
        '«Ночны́е сна́йперы» — российская рок-группа, основанная в 1993 году Дианой Арбениной и Светланой Сургановой. Постоянный участник крупнейших российских рок-фестивалей. Наибольшую известность получили такие песни коллектива, как «31 весна», «Ты дарила мне розы», «Рубеж», «Столица», «Асфальт», «Актриса».',
      image: './src/assets/img/nochnye_snajpery.jpg',
      audio: './src/assets/audio/nochnye_snajpery_kamen.mp3',
    },
  ],
  [
    {
      id: 1,
      completed: false,
      name: 'Alborosie',
      species: 'Kingston town',
      description:
        "Альберто д'Аскола, более известный под псевдонимом Alborosie, является итальянско-ямайским исполнителем регги. Его иногда называют «послом итальянского регги».",
      image: './src/assets/img/alborosie_kingston_town.png',
      audio: './src/assets/audio/alborosie_kingston_town.mp3',
    },
    {
      id: 2,
      completed: false,
      name: 'Bob Marley',
      species: 'Sweat (A La La La La Long)',
      description:
        'Боб Марли — ямайский музыкант, гитарист, вокалист, композитор. Несмотря на то, что со времени его смерти прошло много лет, Боб Марли до сих пор является самым известным исполнителем в стиле регги. Именно благодаря его международному успеху регги приобрёл широкую популярность за пределами Ямайки.',
      image: './src/assets/img/Bob_Marley.jpg',
      audio: './src/assets/audio/bob_marley_sweat_a_la_la_la_la_long.mp3',
    },
    {
      id: 3,
      completed: false,
      name: 'Laid Back',
      species: 'Sunshine Reggae',
      description:
        'Laid Back (рус. Расслабленные) — датская поп-группа, сформированная в 1979 году, известность которой принесли хиты «Sunshine Reggae» (1982) и «White Horse» (1983).',
      image: './src/assets/img/laid_back.jpg',
      audio: './src/assets/audio/laid_back_sunshine_reggae.mp3',
    },
    {
      id: 4,
      completed: false,
      name: 'Manu Chao',
      species: 'Bongo Bong',
      description:
        'Ману́ Ча́о — французский музыкант испанского происхождения. Известен как сольный музыкант и как лидер группы Mano Negra. Его музыку можно охарактеризовать как сплав рока и латиноамериканской музыки. Тексты песен Ману Чао на французском, испанском, галисийском, португальском и английском языках.',
      image: './src/assets/img/manu_chao_bongo_bong.jpg',
      audio: './src/assets/audio/manu_chao_bongo_bong.mp3',
    },
    {
      id: 5,
      completed: false,
      name: 'Max Romeo',
      species: 'Chase The Devil',
      description:
        'Макс Ромео — ямайский регги-исполнитель, получивший широкую известность в своей стране, а также в Великобритании. Сотрудничал с вокальной группой «The Emotions». Песни из его альбома «A Dream» были выдержаны в откровенно сексуальной манере и породили новый стиль регги.',
      image: './src/assets/img/max-romeo.jpg',
      audio: './src/assets/audio/max_romeo_chase_the_devil.mp3',
    },
    {
      id: 6,
      completed: false,
      name: 'Tribal Seeds',
      species: 'Dawn of Time',
      description:
        'Tribal Seeds - это регги-группа из Сан-Диего, основанная в 2005 году братьями Якобо, певцом Стивеном и продюсером Тони-Рэй. В том же году группа выпустила свой дебютный альбом Youth Rebellion.',
      image: './src/assets/img/Tribal-seeds.jpg',
      audio: './src/assets/audio/tribal_seeds_dawn_of_time.mp3',
    },
  ],
  [
    {
      id: 1,
      completed: false,
      name: 'Enrasta',
      species: 'Джованна',
      description:
        'Стремительно набирает популярность творчество известного хип-хоп исполнителя Enrasta. Его песни слушают в кафе и автомобилях, на отдыхе и тренировках, в городе и на природе. Отличный вокал, энергетика звукового ряда и конечно тексты песен – всё это привлекает к певцу повышенное внимание слушателей самых разных категорий, национальностей и возрастов. Треки Enrasta погружают нас в особенную атмосферу любви и романтики, сложных сопутствующих чувств и переживаний, заставляют не только слушать, но и думать.',
      image: './src/assets/img/Enrasta.jpg',
      audio: './src/assets/audio/enrasta_devochka_dzhovanna.mp3',
    },
    {
      id: 2,
      completed: false,
      name: 'Gafur',
      species: 'Порш Панамера',
      description:
        'Gafur – талантливый певец узбекского происхождения с мелодичным голосом. Является представителем лейбла RAAVA (Jony, Elman, Andro), стремительно ворвавшегося на музыкальный рынок в 2019 году.',
      image: './src/assets/img/gafur.jpg',
      audio: './src/assets/audio/Gafur_JONY_-_Porsh_Panamera.mp3',
    },
    {
      id: 3,
      completed: false,
      name: 'Jah Khalib',
      species: 'Кукла',
      description:
        'Jah Khalib (Джа Халиб), настоящее имя Бахтияр Гусейнович Мамедов (род. 29 сентября 1993, Алма-Ата, Казахстан) — казахстанский русскоязычный рэпер, певец, битмейкер и продюсер.',
      image: './src/assets/img/Jah-Khalib.jpg',
      audio: './src/assets/audio/jah_khalib_kukla.mp3',
    },
    {
      id: 4,
      completed: false,
      name: 'KARAT',
      species: 'По барам',
      description:
        'Набирающий популярность испольнитель "Karat" - Андрей Лебедев, уроженец г.Череповца, родился 23 октября 1994 года.',
      image: './src/assets/img/Karat.jpg',
      audio: './src/assets/audio/karat_po_baram.mp3',
    },
    {
      id: 5,
      completed: false,
      name: 'Макс Корж',
      species: 'Тепло',
      description:
        'Макс Корж (полное имя Макси́м Анато́льевич Корж; род. 23 ноября 1988, Лунинец, БССР, СССР) — белорусский певец и автор песен.',
      image: './src/assets/img/maxkorzh.jpg',
      audio: './src/assets/audio/Maks_Korzh_-_Teplo.mp3',
    },
    {
      id: 6,
      completed: false,
      name: 'Серега',
      species: 'GUCCIDED',
      description:
        'Серге́й Васи́льевич Пархо́менко, более известный как Серёга — белорусский и украинский хип-хоп-исполнитель, ставший знаменитым после выпуска хита «Чёрный бумер». В первых пресс-релизах стилистику рэпера называли спортивными частушками.',
      image: './src/assets/img/serega.jpg',
      audio: './src/assets/audio/seryoga_guchchided.mp3',
    },
  ],
];

export default birdsData;
