<<<<<<< HEAD
const cities = [
	{
		coords: {
			lat: '52.65',
			lon: '90.083333333333',
		},
		district: 'Сибирский',
		name: 'Абаза',
		population: 12272,
		subject: 'Хакасия',
	},
	{
		coords: {
			lat: '53.71667',
			lon: '91.41667',
		},
		district: 'Сибирский',
		name: 'Абакан',
		population: 184769,
		subject: 'Хакасия',
	},
	{
		coords: {
			lat: '53.68333',
			lon: '53.65',
		},
		district: 'Приволжский',
		name: 'Абдулино',
		population: 17274,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '44.86667',
			lon: '38.16667',
		},
		district: 'Южный',
		name: 'Абинск',
		population: 39511,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '55.9',
			lon: '53.93333',
		},
		district: 'Приволжский',
		name: 'Агидель',
		population: 14219,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '56.51667',
			lon: '52.98333',
		},
		district: 'Приволжский',
		name: 'Агрыз',
		population: 19991,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '44.884525',
			lon: '39.19202',
		},
		district: 'Южный',
		name: 'Адыгейск',
		population: 13175,
		subject: 'Адыгея',
	},
	{
		coords: {
			lat: '54.85',
			lon: '53.06667',
		},
		district: 'Приволжский',
		name: 'Азнакаево',
		population: 34750,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '47.1',
			lon: '39.41667',
		},
		district: 'Южный',
		name: 'Азов',
		population: 81924,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '51.16667',
			lon: '90.6',
		},
		district: 'Сибирский',
		name: 'Ак-Довурак',
		population: 12456,
		subject: 'Тыва',
	},
	{
		coords: {
			lat: '47.26667',
			lon: '39.86667',
		},
		district: 'Южный',
		name: 'Аксай',
		population: 48372,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '43.04167',
			lon: '44.21056',
		},
		district: 'Северо-Кавказский',
		name: 'Алагир',
		population: 21550,
		subject: 'Северная Осетия',
	},
	{
		coords: {
			lat: '57.85',
			lon: '61.7',
		},
		district: 'Уральский',
		name: 'Алапаевск',
		population: 36189,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '54.85',
			lon: '46.58333',
		},
		district: 'Приволжский',
		name: 'Алатырь',
		population: 32265,
		subject: 'Чувашия',
	},
	{
		coords: {
			lat: '58.6',
			lon: '125.38333',
		},
		district: 'Дальневосточный',
		name: 'Алдан',
		population: 21590,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '52.5',
			lon: '82.78333',
		},
		district: 'Сибирский',
		name: 'Алейск',
		population: 25380,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '56.39361',
			lon: '38.715',
		},
		district: 'Центральный',
		name: 'Александров',
		population: 57053,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '50.9',
			lon: '142.15',
		},
		district: 'Дальневосточный',
		name: 'Александровск-Сахалинский',
		population: 8854,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '59.16667',
			lon: '57.58333',
		},
		district: 'Приволжский',
		name: 'Александровск',
		population: 10780,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '50.63',
			lon: '38.68639',
		},
		district: 'Центральный',
		name: 'Алексеевка',
		population: 36578,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '54.5',
			lon: '37.06667',
		},
		district: 'Центральный',
		name: 'Алексин',
		population: 60842,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '55.55',
			lon: '98.66667',
		},
		district: 'Сибирский',
		name: 'Алзамай',
		population: 5373,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '44.41972',
			lon: '34.04306',
		},
		district: 'Южный',
		name: 'Алупка',
		population: 9063,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '44.66722',
			lon: '34.39778',
		},
		district: 'Южный',
		name: 'Алушта',
		population: 31364,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '54.9',
			lon: '52.3',
		},
		district: 'Приволжский',
		name: 'Альметьевск',
		population: 163512,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '50.21667',
			lon: '136.9',
		},
		district: 'Дальневосточный',
		name: 'Амурск',
		population: 38606,
		subject: 'Хабаровский край',
	},
	{
		coords: {
			lat: '64.73333',
			lon: '177.51667',
		},
		district: 'Дальневосточный',
		name: 'Анадырь',
		population: 13202,
		subject: 'Чукотский АО',
	},
	{
		coords: {
			lat: '44.893857',
			lon: '37.317481',
		},
		district: 'Южный',
		name: 'Анапа',
		population: 81863,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '52.56667',
			lon: '103.91667',
		},
		district: 'Сибирский',
		name: 'Ангарск',
		population: 221296,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '56.65',
			lon: '32.26667',
		},
		district: 'Центральный',
		name: 'Андреаполь',
		population: 6956,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '56.08333',
			lon: '86.03333',
		},
		district: 'Сибирский',
		name: 'Анжеро-Судженск',
		population: 66583,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '46.71667',
			lon: '142.51667',
		},
		district: 'Дальневосточный',
		name: 'Анива',
		population: 9638,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '67.5675',
			lon: '33.39333',
		},
		district: 'Северо-Западный',
		name: 'Апатиты',
		population: 49647,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '55.53333',
			lon: '37.05',
		},
		district: 'Центральный',
		name: 'Апрелевка',
		population: 35514,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '44.46083',
			lon: '39.74056',
		},
		district: 'Южный',
		name: 'Апшеронск',
		population: 40289,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '56.7',
			lon: '60.83333',
		},
		district: 'Уральский',
		name: 'Арамиль',
		population: 19013,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '43.292095',
			lon: '45.876622',
		},
		district: 'Северо-Кавказский',
		name: 'Аргун',
		population: 41622,
		subject: 'Чечня',
	},
	{
		coords: {
			lat: '54.85',
			lon: '46.23333',
		},
		district: 'Приволжский',
		name: 'Ардатов',
		population: 8857,
		subject: 'Мордовия',
	},
	{
		coords: {
			lat: '43.17278',
			lon: '44.29222',
		},
		district: 'Северо-Кавказский',
		name: 'Ардон',
		population: 18956,
		subject: 'Северная Осетия',
	},
	{
		coords: {
			lat: '55.38333',
			lon: '43.8',
		},
		district: 'Приволжский',
		name: 'Арзамас',
		population: 104908,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '51.93333',
			lon: '43.5',
		},
		district: 'Приволжский',
		name: 'Аркадак',
		population: 10990,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '44.99464',
			lon: '41.12946',
		},
		district: 'Южный',
		name: 'Армавир',
		population: 187177,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '46.10694',
			lon: '33.69306',
		},
		district: 'Южный',
		name: 'Армянск',
		population: 20692,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '44.16667',
			lon: '133.26667',
		},
		district: 'Дальневосточный',
		name: 'Арсеньев',
		population: 47937,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '56.09056',
			lon: '49.87639',
		},
		district: 'Приволжский',
		name: 'Арск',
		population: 20421,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '43.35',
			lon: '132.18333',
		},
		district: 'Дальневосточный',
		name: 'Артём',
		population: 109556,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '54.35',
			lon: '93.43333',
		},
		district: 'Сибирский',
		name: 'Артёмовск',
		population: 1510,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '57.33639',
			lon: '61.89194',
		},
		district: 'Уральский',
		name: 'Артёмовский',
		population: 28943,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '64.55',
			lon: '40.53333',
		},
		district: 'Северо-Западный',
		name: 'Архангельск',
		population: 301199,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '57.01027679',
			lon: '61.45639038',
		},
		district: 'Уральский',
		name: 'Асбест',
		population: 57317,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '57',
			lon: '86.15',
		},
		district: 'Сибирский',
		name: 'Асино',
		population: 24913,
		subject: 'Томская область',
	},
	{
		coords: {
			lat: '46.33333',
			lon: '48.03333',
		},
		district: 'Южный',
		name: 'Астрахань',
		population: 475629,
		subject: 'Астраханская область',
	},
	{
		coords: {
			lat: '51.86667',
			lon: '45',
		},
		district: 'Приволжский',
		name: 'Аткарск',
		population: 22709,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '48.28333',
			lon: '46.16667',
		},
		district: 'Южный',
		name: 'Ахтубинск',
		population: 35635,
		subject: 'Астраханская область',
	},
	{
		coords: {
			lat: '56.26667',
			lon: '90.5',
		},
		district: 'Сибирский',
		name: 'Ачинск',
		population: 100621,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '43.189155',
			lon: '45.284741',
		},
		district: 'Северо-Кавказский',
		name: 'Ачхой-Мартан',
		population: 30739,
		subject: 'Чечня',
	},
	{
		coords: {
			lat: '55',
			lon: '57.25',
		},
		district: 'Уральский',
		name: 'Аша',
		population: 27890,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '59.38333',
			lon: '35.95',
		},
		district: 'Северо-Западный',
		name: 'Бабаево',
		population: 11739,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '51.71667',
			lon: '105.86667',
		},
		district: 'Сибирский',
		name: 'Бабушкин',
		population: 4368,
		subject: 'Бурятия',
	},
	{
		coords: {
			lat: '54.4',
			lon: '53.25',
		},
		district: 'Приволжский',
		name: 'Бавлы',
		population: 21628,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '54.38333',
			lon: '20.63333',
		},
		district: 'Северо-Западный',
		name: 'Багратионовск',
		population: 6417,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '51.51722',
			lon: '104.15611',
		},
		district: 'Сибирский',
		name: 'Байкальск',
		population: 13199,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '52.58333',
			lon: '58.31667',
		},
		district: 'Приволжский',
		name: 'Баймак',
		population: 17833,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '54.93333',
			lon: '58.8',
		},
		district: 'Уральский',
		name: 'Бакал',
		population: 16345,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '43.683333',
			lon: '43.533333',
		},
		district: 'Северо-Кавказский',
		name: 'Баксан',
		population: 39593,
		subject: 'Кабардино-Балкария',
	},
	{
		coords: {
			lat: '55.18333',
			lon: '36.65',
		},
		district: 'Центральный',
		name: 'Балабаново',
		population: 29029,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '44.5',
			lon: '33.6',
		},
		district: 'Южный',
		name: 'Балаклава',
		population: 35919,
		subject: 'Севастополь',
	},
	{
		coords: {
			lat: '52.03333',
			lon: '47.78333',
		},
		district: 'Приволжский',
		name: 'Балаково',
		population: 184466,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '56.48083',
			lon: '43.54028',
		},
		district: 'Приволжский',
		name: 'Балахна',
		population: 48569,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '55.8',
			lon: '37.93333',
		},
		district: 'Центральный',
		name: 'Балашиха',
		population: 520962,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '51.55',
			lon: '43.16667',
		},
		district: 'Приволжский',
		name: 'Балашов',
		population: 74057,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '51.57694',
			lon: '116.64917',
		},
		district: 'Сибирский',
		name: 'Балей',
		population: 10286,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '54.65',
			lon: '19.91667',
		},
		district: 'Северо-Западный',
		name: 'Балтийск',
		population: 26796,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '55.35',
			lon: '78.35',
		},
		district: 'Сибирский',
		name: 'Барабинск',
		population: 27648,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '53.347361',
			lon: '83.77833',
		},
		district: 'Сибирский',
		name: 'Барнаул',
		population: 630877,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '53.65',
			lon: '47.11667',
		},
		district: 'Приволжский',
		name: 'Барыш',
		population: 14924,
		subject: 'Ульяновская область',
	},
	{
		coords: {
			lat: '47.13333',
			lon: '39.75',
		},
		district: 'Южный',
		name: 'Батайск',
		population: 126988,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '44.75278',
			lon: '33.86083',
		},
		district: 'Южный',
		name: 'Бахчисарай',
		population: 28609,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '57.78333',
			lon: '36.7',
		},
		district: 'Центральный',
		name: 'Бежецк',
		population: 21466,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '48.17472',
			lon: '40.79306',
		},
		district: 'Южный',
		name: 'Белая Калитва',
		population: 40448,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '58.83333',
			lon: '50.85',
		},
		district: 'Приволжский',
		name: 'Белая Холуница',
		population: 9659,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '50.6',
			lon: '36.6',
		},
		district: 'Центральный',
		name: 'Белгород',
		population: 339978,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '54.1',
			lon: '54.13333',
		},
		district: 'Приволжский',
		name: 'Белебей',
		population: 59195,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '52.96667',
			lon: '43.41667',
		},
		district: 'Приволжский',
		name: 'Белинский',
		population: 8656,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '54.416666666667',
			lon: '86.3',
		},
		district: 'Сибирский',
		name: 'Белово',
		population: 68542,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '50.91667',
			lon: '128.48333',
		},
		district: 'Дальневосточный',
		name: 'Белогорск',
		population: 61440,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '45.05444',
			lon: '34.60222',
		},
		district: 'Южный',
		name: 'Белогорск',
		population: 17445,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '60.03333',
			lon: '37.78333',
		},
		district: 'Северо-Западный',
		name: 'Белозерск',
		population: 8375,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '52',
			lon: '84.98333',
		},
		district: 'Сибирский',
		name: 'Белокуриха',
		population: 14735,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '64.51667',
			lon: '34.76667',
		},
		district: 'Северо-Западный',
		name: 'Беломорск',
		population: 7708,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '55.46139',
			lon: '38.44222',
		},
		district: 'Центральный',
		name: 'Белоозёрский',
		population: 13737,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '53.96667',
			lon: '58.4',
		},
		district: 'Приволжский',
		name: 'Белорецк',
		population: 64525,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '44.76667',
			lon: '39.86667',
		},
		district: 'Южный',
		name: 'Белореченск',
		population: 55870,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '55.09167',
			lon: '36.66667',
		},
		district: 'Центральный',
		name: 'Белоусово',
		population: 10946,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '63.71667',
			lon: '66.66667',
		},
		district: 'Уральский',
		name: 'Белоярский',
		population: 19994,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '55.83333',
			lon: '32.93333',
		},
		district: 'Центральный',
		name: 'Белый',
		population: 3125,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '53.8',
			lon: '36.13333',
		},
		district: 'Центральный',
		name: 'Белёв',
		population: 12846,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '54.75',
			lon: '83.1',
		},
		district: 'Сибирский',
		name: 'Бердск',
		population: 102850,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '59.40806',
			lon: '56.80528',
		},
		district: 'Приволжский',
		name: 'Березники',
		population: 138069,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '55.66667',
			lon: '86.25',
		},
		district: 'Сибирский',
		name: 'Берёзовский',
		population: 44932,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '56.9',
			lon: '60.8',
		},
		district: 'Уральский',
		name: 'Берёзовский',
		population: 59698,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '43.18889',
			lon: '44.521691',
		},
		district: 'Северо-Кавказский',
		name: 'Беслан',
		population: 35929,
		subject: 'Северная Осетия',
	},
	{
		coords: {
			lat: '52.51667',
			lon: '85.16667',
		},
		district: 'Сибирский',
		name: 'Бийск',
		population: 183852,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '46.81667',
			lon: '134.25',
		},
		district: 'Дальневосточный',
		name: 'Бикин',
		population: 16240,
		subject: 'Хабаровский край',
	},
	{
		coords: {
			lat: '68.05',
			lon: '166.45',
		},
		district: 'Дальневосточный',
		name: 'Билибино',
		population: 5546,
		subject: 'Чукотский АО',
	},
	{
		coords: {
			lat: '48.78333',
			lon: '132.93333',
		},
		district: 'Дальневосточный',
		name: 'Биробиджан',
		population: 70064,
		subject: 'Еврейская АО',
	},
	{
		coords: {
			lat: '55.41667',
			lon: '55.53333',
		},
		district: 'Приволжский',
		name: 'Бирск',
		population: 44295,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '55.95',
			lon: '97.81667',
		},
		district: 'Сибирский',
		name: 'Бирюсинск',
		population: 8632,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '50.65',
			lon: '38.4',
		},
		district: 'Центральный',
		name: 'Бирюч',
		population: 7114,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '50.25778',
			lon: '127.53639',
		},
		district: 'Дальневосточный',
		name: 'Благовещенск',
		population: 241437,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '55.03333',
			lon: '55.98333',
		},
		district: 'Приволжский',
		name: 'Благовещенск',
		population: 35481,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '45.1029039',
			lon: '43.4251513',
		},
		district: 'Северо-Кавказский',
		name: 'Благодарный',
		population: 30827,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '51.09444',
			lon: '40.03222',
		},
		district: 'Центральный',
		name: 'Бобров',
		population: 20871,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '56.78333',
			lon: '62.05',
		},
		district: 'Уральский',
		name: 'Богданович',
		population: 30142,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '53.76667',
			lon: '38.13333',
		},
		district: 'Центральный',
		name: 'Богородицк',
		population: 29560,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '56.09972',
			lon: '43.50722',
		},
		district: 'Приволжский',
		name: 'Богородск',
		population: 35068,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '56.2',
			lon: '89.51667',
		},
		district: 'Сибирский',
		name: 'Боготол',
		population: 18206,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '49.93333',
			lon: '40.55',
		},
		district: 'Центральный',
		name: 'Богучар',
		population: 14370,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '57.85',
			lon: '114.2',
		},
		district: 'Сибирский',
		name: 'Бодайбо',
		population: 8921,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '59.473576',
			lon: '33.847675',
		},
		district: 'Северо-Западный',
		name: 'Бокситогорск',
		population: 16185,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '54.96667',
			lon: '49.03333',
		},
		district: 'Приволжский',
		name: 'Болгар',
		population: 8285,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '57.87083',
			lon: '34.07361',
		},
		district: 'Центральный',
		name: 'Бологое',
		population: 20234,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '55.66667',
			lon: '84.4',
		},
		district: 'Сибирский',
		name: 'Болотное',
		population: 15644,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '54.08333',
			lon: '37.81667',
		},
		district: 'Центральный',
		name: 'Болохово',
		population: 9339,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '53.45',
			lon: '36',
		},
		district: 'Центральный',
		name: 'Болхов',
		population: 9495,
		subject: 'Орловская область',
	},
	{
		coords: {
			lat: '43.11667',
			lon: '132.35',
		},
		district: 'Дальневосточный',
		name: 'Большой Камень',
		population: 41825,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '56.36028',
			lon: '44.05917',
		},
		district: 'Приволжский',
		name: 'Бор',
		population: 78372,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '50.38333',
			lon: '116.53333',
		},
		district: 'Сибирский',
		name: 'Борзя',
		population: 29596,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '51.36667',
			lon: '42.08333',
		},
		district: 'Центральный',
		name: 'Борисоглебск',
		population: 60687,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '58.38694',
			lon: '33.91139',
		},
		district: 'Северо-Западный',
		name: 'Боровичи',
		population: 47883,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '55.2',
			lon: '36.48333',
		},
		district: 'Центральный',
		name: 'Боровск',
		population: 12598,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '55.9',
			lon: '94.9',
		},
		district: 'Сибирский',
		name: 'Бородино',
		population: 15174,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '56.152',
			lon: '101.633',
		},
		district: 'Сибирский',
		name: 'Братск',
		population: 224071,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '55.42278',
			lon: '38.25889',
		},
		district: 'Центральный',
		name: 'Бронницы',
		population: 21831,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '53.25',
			lon: '34.36667',
		},
		district: 'Центральный',
		name: 'Брянск',
		population: 379152,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '54.53333',
			lon: '52.78333',
		},
		district: 'Приволжский',
		name: 'Бугульма',
		population: 81677,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '53.61667',
			lon: '52.41667',
		},
		district: 'Приволжский',
		name: 'Бугуруслан',
		population: 43593,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '44.79',
			lon: '44.14',
		},
		district: 'Северо-Кавказский',
		name: 'Будённовск',
		population: 58103,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '52.76667',
			lon: '52.26667',
		},
		district: 'Приволжский',
		name: 'Бузулук',
		population: 88341,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '54.96667',
			lon: '48.28333',
		},
		district: 'Приволжский',
		name: 'Буинск',
		population: 19968,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '58.48333',
			lon: '41.51667',
		},
		district: 'Центральный',
		name: 'Буй',
		population: 20564,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '42.81667',
			lon: '47.11667',
		},
		district: 'Северо-Кавказский',
		name: 'Буйнакск',
		population: 68121,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '50.825',
			lon: '40.58889',
		},
		district: 'Центральный',
		name: 'Бутурлиновка',
		population: 24397,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '57.96667',
			lon: '33.25',
		},
		district: 'Северо-Западный',
		name: 'Валдай',
		population: 14074,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '50.18333',
			lon: '38.11667',
		},
		district: 'Центральный',
		name: 'Валуйки',
		population: 33032,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '55.6',
			lon: '31.2',
		},
		district: 'Центральный',
		name: 'Велиж',
		population: 6293,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '56.35',
			lon: '30.51667',
		},
		district: 'Северо-Западный',
		name: 'Великие Луки',
		population: 86711,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '58.525',
			lon: '31.275',
		},
		district: 'Северо-Западный',
		name: 'Великий Новгород',
		population: 224286,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '60.75889',
			lon: '46.30389',
		},
		district: 'Северо-Западный',
		name: 'Великий Устюг',
		population: 28670,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '61.06667',
			lon: '42.1',
		},
		district: 'Северо-Западный',
		name: 'Вельск',
		population: 21613,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '54.35',
			lon: '38.26667',
		},
		district: 'Центральный',
		name: 'Венёв',
		population: 12668,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '58.06667',
			lon: '54.65',
		},
		district: 'Приволжский',
		name: 'Верещагино',
		population: 22239,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '55.33333',
			lon: '36.18333',
		},
		district: 'Центральный',
		name: 'Верея',
		population: 4906,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '53.88333',
			lon: '59.21667',
		},
		district: 'Уральский',
		name: 'Верхнеуральск',
		population: 8929,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '57.38333',
			lon: '59.93333',
		},
		district: 'Уральский',
		name: 'Верхний Тагил',
		population: 10113,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '56.05',
			lon: '60.23333',
		},
		district: 'Уральский',
		name: 'Верхний Уфалей',
		population: 22981,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '56.966666666667',
			lon: '60.583333333333',
		},
		district: 'Уральский',
		name: 'Верхняя Пышма',
		population: 71335,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '58.05',
			lon: '60.55',
		},
		district: 'Уральский',
		name: 'Верхняя Салда',
		population: 41034,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '58.3574333',
			lon: '59.8224444',
		},
		district: 'Уральский',
		name: 'Верхняя Тура',
		population: 8554,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '58.86667',
			lon: '60.8',
		},
		district: 'Уральский',
		name: 'Верхотурье',
		population: 6706,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '67.55',
			lon: '133.38333',
		},
		district: 'Дальневосточный',
		name: 'Верхоянск',
		population: 828,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '58.65',
			lon: '37.26667',
		},
		district: 'Центральный',
		name: 'Весьегонск',
		population: 6330,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '57.85556',
			lon: '45.78111',
		},
		district: 'Приволжский',
		name: 'Ветлуга',
		population: 7681,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '55.55',
			lon: '37.7',
		},
		district: 'Центральный',
		name: 'Видное',
		population: 101490,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '63.75',
			lon: '121.61667',
		},
		district: 'Дальневосточный',
		name: 'Вилюйск',
		population: 10032,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '52.93333',
			lon: '158.4',
		},
		district: 'Дальневосточный',
		name: 'Вилючинск',
		population: 21774,
		subject: 'Камчатский край',
	},
	{
		coords: {
			lat: '56.11667',
			lon: '101.16667',
		},
		district: 'Сибирский',
		name: 'Вихоревка',
		population: 21719,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '57.2',
			lon: '41.91667',
		},
		district: 'Центральный',
		name: 'Вичуга',
		population: 30694,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '43.116666666667',
			lon: '131.9',
		},
		district: 'Дальневосточный',
		name: 'Владивосток',
		population: 603519,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '43.01667',
			lon: '44.683315',
		},
		district: 'Северо-Кавказский',
		name: 'Владикавказ',
		population: 295830,
		subject: 'Северная Осетия',
	},
	{
		coords: {
			lat: '56.13333',
			lon: '40.41667',
		},
		district: 'Центральный',
		name: 'Владимир',
		population: 349951,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '48.71167',
			lon: '44.51389',
		},
		district: 'Южный',
		name: 'Волгоград',
		population: 1028036,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '47.54',
			lon: '42.20722',
		},
		district: 'Южный',
		name: 'Волгодонск',
		population: 168048,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '57.43333',
			lon: '41.16667',
		},
		district: 'Центральный',
		name: 'Волгореченск',
		population: 14355,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '55.86667',
			lon: '48.35',
		},
		district: 'Приволжский',
		name: 'Волжск',
		population: 53013,
		subject: 'Марий Эл',
	},
	{
		coords: {
			lat: '48.783333333333',
			lon: '44.766666666667',
		},
		district: 'Южный',
		name: 'Волжский',
		population: 321479,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '59.216666666667',
			lon: '39.9',
		},
		district: 'Северо-Западный',
		name: 'Вологда',
		population: 313944,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '56.23333',
			lon: '43.2',
		},
		district: 'Приволжский',
		name: 'Володарск',
		population: 9705,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '56.03333',
			lon: '35.95',
		},
		district: 'Центральный',
		name: 'Волоколамск',
		population: 26389,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '59.447275',
			lon: '29.484819',
		},
		district: 'Северо-Западный',
		name: 'Волосово',
		population: 11931,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '59.900543',
			lon: '32.352681',
		},
		district: 'Северо-Западный',
		name: 'Волхов',
		population: 38511,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '59.93333',
			lon: '60.05',
		},
		district: 'Уральский',
		name: 'Волчанск',
		population: 8573,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '52.05',
			lon: '47.38333',
		},
		district: 'Приволжский',
		name: 'Вольск',
		population: 55035,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '67.5',
			lon: '64.03333',
		},
		district: 'Северо-Западный',
		name: 'Воркута',
		population: 56985,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '51.67167',
			lon: '39.21056',
		},
		district: 'Центральный',
		name: 'Воронеж',
		population: 1057681,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '55.98333',
			lon: '43.26667',
		},
		district: 'Приволжский',
		name: 'Ворсма',
		population: 10162,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '55.32333',
			lon: '38.68056',
		},
		district: 'Центральный',
		name: 'Воскресенск',
		population: 95495,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '57.05',
			lon: '54',
		},
		district: 'Приволжский',
		name: 'Воткинск',
		population: 97471,
		subject: 'Удмуртия',
	},
	{
		coords: {
			lat: '60.021321',
			lon: '30.654084',
		},
		district: 'Северо-Западный',
		name: 'Всеволожск',
		population: 79038,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '63.86667',
			lon: '57.31667',
		},
		district: 'Северо-Западный',
		name: 'Вуктыл',
		population: 9322,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '60.710496',
			lon: '28.749781',
		},
		district: 'Северо-Западный',
		name: 'Выборг',
		population: 72530,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '55.31944',
			lon: '42.17306',
		},
		district: 'Приволжский',
		name: 'Выкса',
		population: 45240,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '56.31667',
			lon: '36.55',
		},
		district: 'Центральный',
		name: 'Высоковск',
		population: 13081,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '60.625604',
			lon: '28.568277',
		},
		district: 'Северо-Западный',
		name: 'Высоцк',
		population: 1129,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '61',
			lon: '36.45',
		},
		district: 'Северо-Западный',
		name: 'Вытегра',
		population: 10386,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '57.58333',
			lon: '34.56667',
		},
		district: 'Центральный',
		name: 'Вышний Волочёк',
		population: 45830,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '47.53333',
			lon: '134.75',
		},
		district: 'Дальневосточный',
		name: 'Вяземский',
		population: 12775,
		subject: 'Хабаровский край',
	},
	{
		coords: {
			lat: '56.24333',
			lon: '42.12917',
		},
		district: 'Центральный',
		name: 'Вязники',
		population: 36203,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '55.21028',
			lon: '34.285',
		},
		district: 'Центральный',
		name: 'Вязьма',
		population: 51950,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '56.218417',
			lon: '51.068583',
		},
		district: 'Приволжский',
		name: 'Вятские Поляны',
		population: 29742,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '56.56667',
			lon: '40.11667',
		},
		district: 'Центральный',
		name: 'Гаврилов Посад',
		population: 5429,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '57.3',
			lon: '39.85',
		},
		district: 'Центральный',
		name: 'Гаврилов-Ям',
		population: 16084,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '55.55',
			lon: '35',
		},
		district: 'Центральный',
		name: 'Гагарин',
		population: 26500,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '69.25528',
			lon: '33.31667',
		},
		district: 'Северо-Западный',
		name: 'Гаджиево',
		population: 9297,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '51.46667',
			lon: '58.45',
		},
		district: 'Приволжский',
		name: 'Гай',
		population: 33280,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '58.38333',
			lon: '42.35',
		},
		district: 'Центральный',
		name: 'Галич',
		population: 12856,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '59.56841',
			lon: '30.122892',
		},
		district: 'Северо-Западный',
		name: 'Гатчина',
		population: 94377,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '54.65',
			lon: '21.06667',
		},
		district: 'Северо-Западный',
		name: 'Гвардейск',
		population: 14122,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '58.73333',
			lon: '27.81667',
		},
		district: 'Северо-Западный',
		name: 'Гдов',
		population: 3455,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '44.560999',
			lon: '38.076949',
		},
		district: 'Южный',
		name: 'Геленджик',
		population: 80204,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '44.15',
			lon: '43.46667',
		},
		district: 'Северо-Кавказский',
		name: 'Георгиевск',
		population: 63221,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '58.14083',
			lon: '52.67417',
		},
		district: 'Приволжский',
		name: 'Глазов',
		population: 87762,
		subject: 'Удмуртия',
	},
	{
		coords: {
			lat: '55.61472',
			lon: '36.98722',
		},
		district: 'Центральный',
		name: 'Голицыно',
		population: 22733,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '56.13333',
			lon: '43.06667',
		},
		district: 'Приволжский',
		name: 'Горбатов',
		population: 2009,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '51.96',
			lon: '85.96',
		},
		district: 'Сибирский',
		name: 'Горно-Алтайск',
		population: 65342,
		subject: 'Алтай',
	},
	{
		coords: {
			lat: '58.38333',
			lon: '58.31667',
		},
		district: 'Приволжский',
		name: 'Горнозаводск',
		population: 11073,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '50.993028',
			lon: '81.467934',
		},
		district: 'Сибирский',
		name: 'Горняк',
		population: 10112,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '56.65028',
			lon: '43.47028',
		},
		district: 'Приволжский',
		name: 'Городец',
		population: 28660,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '53.26667',
			lon: '45.7',
		},
		district: 'Приволжский',
		name: 'Городище',
		population: 7796,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '46.08333',
			lon: '41.93333',
		},
		district: 'Южный',
		name: 'Городовиковск',
		population: 8285,
		subject: 'Калмыкия',
	},
	{
		coords: {
			lat: '56.20278',
			lon: '42.6925',
		},
		district: 'Центральный',
		name: 'Гороховец',
		population: 12666,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '44.633284',
			lon: '39.133287',
		},
		district: 'Южный',
		name: 'Горячий Ключ',
		population: 40903,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '50.48333',
			lon: '35.66667',
		},
		district: 'Центральный',
		name: 'Грайворон',
		population: 6179,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '58.56667',
			lon: '57.83333',
		},
		district: 'Приволжский',
		name: 'Гремячинск',
		population: 8360,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '43.31667',
			lon: '45.7',
		},
		district: 'Северо-Кавказский',
		name: 'Грозный',
		population: 328533,
		subject: 'Чечня',
	},
	{
		coords: {
			lat: '52.5',
			lon: '39.93333',
		},
		district: 'Центральный',
		name: 'Грязи',
		population: 43908,
		subject: 'Липецкая область',
	},
	{
		coords: {
			lat: '58.88333',
			lon: '40.25',
		},
		district: 'Северо-Западный',
		name: 'Грязовец',
		population: 14505,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '58.86667',
			lon: '57.58333',
		},
		district: 'Приволжский',
		name: 'Губаха',
		population: 23397,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '51.28333',
			lon: '37.55',
		},
		district: 'Центральный',
		name: 'Губкин',
		population: 85225,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '64.43333',
			lon: '76.5',
		},
		district: 'Уральский',
		name: 'Губкинский',
		population: 33273,
		subject: 'Ямало-Ненецкий АО',
	},
	{
		coords: {
			lat: '43.34861',
			lon: '46.09611',
		},
		district: 'Северо-Кавказский',
		name: 'Гудермес',
		population: 64376,
		subject: 'Чечня',
	},
	{
		coords: {
			lat: '48.05',
			lon: '39.93333',
		},
		district: 'Южный',
		name: 'Гуково',
		population: 60361,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '45.36028',
			lon: '40.69444',
		},
		district: 'Южный',
		name: 'Гулькевичи',
		population: 33357,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '54.76667',
			lon: '20.6',
		},
		district: 'Северо-Западный',
		name: 'Гурьевск',
		population: 26760,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '54.28333',
			lon: '85.93333',
		},
		district: 'Сибирский',
		name: 'Гурьевск',
		population: 22134,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '54.58333',
			lon: '22.2',
		},
		district: 'Северо-Западный',
		name: 'Гусев',
		population: 29234,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '51.28556',
			lon: '106.52917',
		},
		district: 'Сибирский',
		name: 'Гусиноозёрск',
		population: 24451,
		subject: 'Бурятия',
	},
	{
		coords: {
			lat: '55.61667',
			lon: '40.65',
		},
		district: 'Центральный',
		name: 'Гусь-Хрустальный',
		population: 51552,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '54.21667',
			lon: '55.03333',
		},
		district: 'Приволжский',
		name: 'Давлеканово',
		population: 21834,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '42.11667',
			lon: '48.2',
		},
		district: 'Северо-Кавказский',
		name: 'Дагестанские Огни',
		population: 31412,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '56.26667',
			lon: '62.91667',
		},
		district: 'Уральский',
		name: 'Далматово',
		population: 11584,
		subject: 'Курганская область',
	},
	{
		coords: {
			lat: '44.56667',
			lon: '135.61667',
		},
		district: 'Дальневосточный',
		name: 'Дальнегорск',
		population: 33655,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '45.93333',
			lon: '133.73333',
		},
		district: 'Дальневосточный',
		name: 'Дальнереченск',
		population: 23613,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '58.18333',
			lon: '40.18333',
		},
		district: 'Центральный',
		name: 'Данилов',
		population: 13677,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '53.25',
			lon: '39.15',
		},
		district: 'Центральный',
		name: 'Данков',
		population: 19726,
		subject: 'Липецкая область',
	},
	{
		coords: {
			lat: '56.7',
			lon: '60.1',
		},
		district: 'Уральский',
		name: 'Дегтярск',
		population: 15497,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '55.86667',
			lon: '37.13333',
		},
		district: 'Центральный',
		name: 'Дедовск',
		population: 30731,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '55.26667',
			lon: '31.51667',
		},
		district: 'Центральный',
		name: 'Демидов',
		population: 6326,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '42.069825',
			lon: '48.295025',
		},
		district: 'Северо-Кавказский',
		name: 'Дербент',
		population: 124953,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '54.1530861',
			lon: '33.2902917',
		},
		district: 'Центральный',
		name: 'Десногорск',
		population: 25345,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '45.70861',
			lon: '34.39333',
		},
		district: 'Южный',
		name: 'Джанкой',
		population: 37014,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '56.23333',
			lon: '43.45',
		},
		district: 'Приволжский',
		name: 'Дзержинск',
		population: 218630,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '55.63333',
			lon: '37.85',
		},
		district: 'Центральный',
		name: 'Дзержинский',
		population: 57918,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '55.95',
			lon: '92.38333',
		},
		district: 'Сибирский',
		name: 'Дивногорск',
		population: 27477,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '43.15',
			lon: '44.15',
		},
		district: 'Северо-Кавказский',
		name: 'Дигора',
		population: 9922,
		subject: 'Северная Осетия',
	},
	{
		coords: {
			lat: '54.23333',
			lon: '49.58333',
		},
		district: 'Приволжский',
		name: 'Димитровград',
		population: 110968,
		subject: 'Ульяновская область',
	},
	{
		coords: {
			lat: '52.12889',
			lon: '35.07556',
		},
		district: 'Центральный',
		name: 'Дмитриев',
		population: 6317,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '56.34667',
			lon: '37.52167',
		},
		district: 'Центральный',
		name: 'Дмитров',
		population: 65574,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '52.505504',
			lon: '35.141478',
		},
		district: 'Центральный',
		name: 'Дмитровск',
		population: 5202,
		subject: 'Орловская область',
	},
	{
		coords: {
			lat: '57.83333',
			lon: '29.96667',
		},
		district: 'Северо-Западный',
		name: 'Дно',
		population: 7850,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '58.45',
			lon: '56.41667',
		},
		district: 'Приволжский',
		name: 'Добрянка',
		population: 28782,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '55.93333',
			lon: '37.5',
		},
		district: 'Центральный',
		name: 'Долгопрудный',
		population: 120907,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '47.31667',
			lon: '142.8',
		},
		district: 'Дальневосточный',
		name: 'Долинск',
		population: 11740,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '55.44389',
			lon: '37.75806',
		},
		district: 'Центральный',
		name: 'Домодедово',
		population: 152404,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '48.33694',
			lon: '39.945',
		},
		district: 'Южный',
		name: 'Донецк',
		population: 46623,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '53.96667',
			lon: '38.31667',
		},
		district: 'Центральный',
		name: 'Донской',
		population: 63837,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '54.92',
			lon: '33.307777777778',
		},
		district: 'Центральный',
		name: 'Дорогобуж',
		population: 9528,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '55.74444',
			lon: '38.84944',
		},
		district: 'Центральный',
		name: 'Дрезна',
		population: 12295,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '56.75',
			lon: '37.15',
		},
		district: 'Центральный',
		name: 'Дубна',
		population: 74183,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '49.05',
			lon: '44.83333',
		},
		district: 'Южный',
		name: 'Дубовка',
		population: 14779,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '69.4',
			lon: '86.18333',
		},
		district: 'Сибирский',
		name: 'Дудинка',
		population: 19556,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '55.2',
			lon: '32.41667',
		},
		district: 'Центральный',
		name: 'Духовщина',
		population: 3990,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '55.48333',
			lon: '54.86667',
		},
		district: 'Приволжский',
		name: 'Дюртюли',
		population: 31185,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '53.6',
			lon: '34.33333',
		},
		district: 'Центральный',
		name: 'Дятьково',
		population: 25255,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '45.2',
			lon: '33.35833',
		},
		district: 'Южный',
		name: 'Евпатория',
		population: 107877,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '55.38333',
			lon: '39.03361',
		},
		district: 'Центральный',
		name: 'Егорьевск',
		population: 71686,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '46.71056',
			lon: '38.27778',
		},
		district: 'Южный',
		name: 'Ейск',
		population: 82943,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '56.83333',
			lon: '60.58333',
		},
		district: 'Уральский',
		name: 'Екатеринбург',
		population: 1544376,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '55.76667',
			lon: '52.03333',
		},
		district: 'Приволжский',
		name: 'Елабуга',
		population: 73630,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '52.61667',
			lon: '38.46667',
		},
		district: 'Центральный',
		name: 'Елец',
		population: 99875,
		subject: 'Липецкая область',
	},
	{
		coords: {
			lat: '53.18333',
			lon: '158.38333',
		},
		district: 'Дальневосточный',
		name: 'Елизово',
		population: 36240,
		subject: 'Камчатский край',
	},
	{
		coords: {
			lat: '54.56667',
			lon: '33.16667',
		},
		district: 'Центральный',
		name: 'Ельня',
		population: 8332,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '54.75',
			lon: '61.31667',
		},
		district: 'Уральский',
		name: 'Еманжелинск',
		population: 27632,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '62.58333',
			lon: '50.85',
		},
		district: 'Северо-Западный',
		name: 'Емва',
		population: 10994,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '58.46667',
			lon: '92.13333',
		},
		district: 'Сибирский',
		name: 'Енисейск',
		population: 17537,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '55.20556',
			lon: '36.57',
		},
		district: 'Центральный',
		name: 'Ермолино',
		population: 10809,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '51.35',
			lon: '48.28333',
		},
		district: 'Приволжский',
		name: 'Ершов',
		population: 18095,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '44.04306',
			lon: '42.86417',
		},
		district: 'Северо-Кавказский',
		name: 'Ессентуки',
		population: 119658,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '53.149167',
			lon: '38.082585',
		},
		district: 'Центральный',
		name: 'Ефремов',
		population: 36545,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '44.13333',
			lon: '43.03333',
		},
		district: 'Северо-Кавказский',
		name: 'Железноводск',
		population: 22863,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '56.58333',
			lon: '104.11667',
		},
		district: 'Сибирский',
		name: 'Железногорск-Илимский',
		population: 21621,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '56.25',
			lon: '93.53333',
		},
		district: 'Сибирский',
		name: 'Железногорск',
		population: 82723,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '52.339174',
			lon: '35.351582',
		},
		district: 'Центральный',
		name: 'Железногорск',
		population: 97038,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '51.83333',
			lon: '41.46667',
		},
		district: 'Центральный',
		name: 'Жердевка',
		population: 13883,
		subject: 'Тамбовская область',
	},
	{
		coords: {
			lat: '53.4',
			lon: '49.5',
		},
		district: 'Приволжский',
		name: 'Жигулёвск',
		population: 50466,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '53.75028',
			lon: '34.73611',
		},
		district: 'Центральный',
		name: 'Жиздра',
		population: 5545,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '50.98028',
			lon: '44.78083',
		},
		district: 'Южный',
		name: 'Жирновск',
		population: 15555,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '55.03333',
			lon: '36.75',
		},
		district: 'Центральный',
		name: 'Жуков',
		population: 16224,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '53.53333',
			lon: '33.73333',
		},
		district: 'Центральный',
		name: 'Жуковка',
		population: 17628,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '55.60111',
			lon: '38.11611',
		},
		district: 'Центральный',
		name: 'Жуковский',
		population: 111222,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '50.11667',
			lon: '129.43333',
		},
		district: 'Дальневосточный',
		name: 'Завитинск',
		population: 9615,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '56.5',
			lon: '66.55',
		},
		district: 'Уральский',
		name: 'Заводоуковск',
		population: 27100,
		subject: 'Тюменская область',
	},
	{
		coords: {
			lat: '57.48333',
			lon: '42.13333',
		},
		district: 'Центральный',
		name: 'Заволжск',
		population: 8896,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '56.6425',
			lon: '43.39278',
		},
		district: 'Приволжский',
		name: 'Заволжье',
		population: 36763,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '52.38333',
			lon: '38.91667',
		},
		district: 'Центральный',
		name: 'Задонск',
		population: 9887,
		subject: 'Липецкая область',
	},
	{
		coords: {
			lat: '55.3',
			lon: '52.01667',
		},
		district: 'Приволжский',
		name: 'Заинск',
		population: 39739,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '50.38333',
			lon: '103.28333',
		},
		district: 'Сибирский',
		name: 'Закаменск',
		population: 11365,
		subject: 'Бурятия',
	},
	{
		coords: {
			lat: '55.96667',
			lon: '94.7',
		},
		district: 'Сибирский',
		name: 'Заозёрный',
		population: 10573,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '69.4',
			lon: '32.45',
		},
		district: 'Северо-Западный',
		name: 'Заозёрск',
		population: 7762,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '56.26667',
			lon: '32.08333',
		},
		district: 'Центральный',
		name: 'Западная Двина',
		population: 7869,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '69.41667',
			lon: '30.8',
		},
		district: 'Северо-Западный',
		name: 'Заполярный',
		population: 14791,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '54.76528',
			lon: '38.88361',
		},
		district: 'Центральный',
		name: 'Зарайск',
		population: 20736,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '53.2',
			lon: '45.16667',
		},
		district: 'Приволжский',
		name: 'Заречный',
		population: 58510,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '56.81667',
			lon: '61.31667',
		},
		district: 'Уральский',
		name: 'Заречный',
		population: 28112,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '53.7',
			lon: '84.91667',
		},
		district: 'Сибирский',
		name: 'Заринск',
		population: 41272,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '55.96667',
			lon: '48.01667',
		},
		district: 'Приволжский',
		name: 'Звенигово',
		population: 10994,
		subject: 'Марий Эл',
	},
	{
		coords: {
			lat: '55.73333',
			lon: '36.85',
		},
		district: 'Центральный',
		name: 'Звенигород',
		population: 35842,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '48.01667',
			lon: '40.11667',
		},
		district: 'Южный',
		name: 'Зверево',
		population: 19353,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '56.1',
			lon: '94.58333',
		},
		district: 'Сибирский',
		name: 'Зеленогорск',
		population: 54279,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '60.2',
			lon: '29.7',
		},
		district: 'Северо-Западный',
		name: 'Зеленогорск',
		population: 15613,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '55.997917',
			lon: '37.190417',
		},
		district: 'Центральный',
		name: 'Зеленоград',
		population: 256775,
		subject: 'Москва',
	},
	{
		coords: {
			lat: '54.95',
			lon: '20.48333',
		},
		district: 'Северо-Западный',
		name: 'Зеленоградск',
		population: 16625,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '55.85',
			lon: '48.51667',
		},
		district: 'Приволжский',
		name: 'Зеленодольск',
		population: 99137,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '44.4070115',
			lon: '43.8731235',
		},
		district: 'Северо-Кавказский',
		name: 'Зеленокумск',
		population: 33187,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '46.846525',
			lon: '40.3040333',
		},
		district: 'Южный',
		name: 'Зерноград',
		population: 24076,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '53.73333',
			lon: '127.25',
		},
		district: 'Дальневосточный',
		name: 'Зея',
		population: 19414,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '53.91667',
			lon: '102.05',
		},
		district: 'Сибирский',
		name: 'Зима',
		population: 30640,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '55.16667',
			lon: '59.66667',
		},
		district: 'Уральский',
		name: 'Златоуст',
		population: 161774,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '52.43333',
			lon: '31.73333',
		},
		district: 'Центральный',
		name: 'Злынка',
		population: 5270,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '51.16667',
			lon: '82.16667',
		},
		district: 'Сибирский',
		name: 'Змеиногорск',
		population: 9410,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '48.58333',
			lon: '45.75',
		},
		district: 'Южный',
		name: 'Знаменск',
		population: 24628,
		subject: 'Астраханская область',
	},
	{
		coords: {
			lat: '56.16667',
			lon: '34.58333',
		},
		district: 'Центральный',
		name: 'Зубцов',
		population: 6217,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '58.403333',
			lon: '51.130361',
		},
		district: 'Приволжский',
		name: 'Зуевка',
		population: 9767,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '59.37649',
			lon: '28.219712',
		},
		district: 'Северо-Западный',
		name: 'Ивангород',
		population: 9861,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '56.99667',
			lon: '40.98194',
		},
		district: 'Центральный',
		name: 'Иваново',
		population: 361644,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '55.97',
			lon: '37.92',
		},
		district: 'Центральный',
		name: 'Ивантеевка',
		population: 82827,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '60.68333',
			lon: '60.43333',
		},
		district: 'Уральский',
		name: 'Ивдель',
		population: 14306,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '67.46667',
			lon: '86.56667',
		},
		district: 'Сибирский',
		name: 'Игарка',
		population: 3634,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '56.85306',
			lon: '53.21222',
		},
		district: 'Приволжский',
		name: 'Ижевск',
		population: 623472,
		subject: 'Удмуртия',
	},
	{
		coords: {
			lat: '42.56667',
			lon: '47.86667',
		},
		district: 'Северо-Кавказский',
		name: 'Избербаш',
		population: 55996,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '45.36667',
			lon: '41.71667',
		},
		district: 'Северо-Кавказский',
		name: 'Изобильный',
		population: 38614,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '56.23333',
			lon: '96.06667',
		},
		district: 'Сибирский',
		name: 'Иланский',
		population: 15945,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '53.85',
			lon: '46.35',
		},
		district: 'Приволжский',
		name: 'Инза',
		population: 16293,
		subject: 'Ульяновская область',
	},
	{
		coords: {
			lat: '44.61417',
			lon: '33.60833',
		},
		district: 'Южный',
		name: 'Инкерман',
		population: 13858,
		subject: 'Севастополь',
	},
	{
		coords: {
			lat: '55.763633',
			lon: '48.736553',
		},
		district: 'Приволжский',
		name: 'Иннополис',
		population: 3955,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '53.86667',
			lon: '44.36667',
		},
		district: 'Приволжский',
		name: 'Инсар',
		population: 7920,
		subject: 'Мордовия',
	},
	{
		coords: {
			lat: '66.0398139',
			lon: '60.1315194',
		},
		district: 'Северо-Западный',
		name: 'Инта',
		population: 20271,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '45.71667',
			lon: '42.9',
		},
		district: 'Северо-Кавказский',
		name: 'Ипатово',
		population: 26122,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '57.66667',
			lon: '63.06667',
		},
		district: 'Уральский',
		name: 'Ирбит',
		population: 37009,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '52.28333',
			lon: '104.3',
		},
		district: 'Сибирский',
		name: 'Иркутск',
		population: 617264,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '54.90889',
			lon: '71.26056',
		},
		district: 'Сибирский',
		name: 'Исилькуль',
		population: 20515,
		subject: 'Омская область',
	},
	{
		coords: {
			lat: '54.63333',
			lon: '83.3',
		},
		district: 'Сибирский',
		name: 'Искитим',
		population: 57147,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '55.91667',
			lon: '36.86667',
		},
		district: 'Центральный',
		name: 'Истра',
		population: 37474,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '56.11667',
			lon: '69.5',
		},
		district: 'Уральский',
		name: 'Ишим',
		population: 67614,
		subject: 'Тюменская область',
	},
	{
		coords: {
			lat: '53.45444',
			lon: '56.04389',
		},
		district: 'Приволжский',
		name: 'Ишимбай',
		population: 64041,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '56.632777777778',
			lon: '47.895833333333',
		},
		district: 'Приволжский',
		name: 'Йошкар-Ола',
		population: 281248,
		subject: 'Марий Эл',
	},
	{
		coords: {
			lat: '59.5',
			lon: '40.33333',
		},
		district: 'Северо-Западный',
		name: 'Кадников',
		population: 4106,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '55.79083',
			lon: '49.11444',
		},
		district: 'Приволжский',
		name: 'Казань',
		population: 1308660,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '48.68333',
			lon: '43.53333',
		},
		district: 'Южный',
		name: 'Калач-на-Дону',
		population: 24277,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '50.42583',
			lon: '41.01556',
		},
		district: 'Центральный',
		name: 'Калач',
		population: 17624,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '55.05',
			lon: '74.58333',
		},
		district: 'Сибирский',
		name: 'Калачинск',
		population: 21378,
		subject: 'Омская область',
	},
	{
		coords: {
			lat: '54.71667',
			lon: '20.5',
		},
		district: 'Северо-Западный',
		name: 'Калининград',
		population: 490449,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '51.5',
			lon: '44.45',
		},
		district: 'Приволжский',
		name: 'Калининск',
		population: 14949,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '53.51667',
			lon: '87.26667',
		},
		district: 'Сибирский',
		name: 'Калтан',
		population: 21752,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '54.53333',
			lon: '36.26667',
		},
		district: 'Центральный',
		name: 'Калуга',
		population: 337058,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '57.23333',
			lon: '37.85',
		},
		district: 'Центральный',
		name: 'Калязин',
		population: 12621,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '56.26667',
			lon: '54.2',
		},
		district: 'Приволжский',
		name: 'Камбарка',
		population: 10080,
		subject: 'Удмуртия',
	},
	{
		coords: {
			lat: '53.18333',
			lon: '44.05',
		},
		district: 'Приволжский',
		name: 'Каменка',
		population: 33491,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '60.95081',
			lon: '29.130882',
		},
		district: 'Северо-Западный',
		name: 'Каменногорск',
		population: 7160,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '56.4',
			lon: '61.93333',
		},
		district: 'Уральский',
		name: 'Каменск-Уральский',
		population: 164192,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '48.31667',
			lon: '40.26667',
		},
		district: 'Южный',
		name: 'Каменск-Шахтинский',
		population: 86365,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '53.79194',
			lon: '81.34861',
		},
		district: 'Сибирский',
		name: 'Камень-на-Оби',
		population: 32385,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '56.34917',
			lon: '40.99778',
		},
		district: 'Центральный',
		name: 'Камешково',
		population: 12028,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '46.11556',
			lon: '48.07694',
		},
		district: 'Южный',
		name: 'Камызяк',
		population: 16154,
		subject: 'Астраханская область',
	},
	{
		coords: {
			lat: '50.08333',
			lon: '45.4',
		},
		district: 'Южный',
		name: 'Камышин',
		population: 107927,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '56.85',
			lon: '62.71667',
		},
		district: 'Уральский',
		name: 'Камышлов',
		population: 27117,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '55.50694',
			lon: '47.49139',
		},
		district: 'Приволжский',
		name: 'Канаш',
		population: 44354,
		subject: 'Чувашия',
	},
	{
		coords: {
			lat: '67.15694',
			lon: '32.41167',
		},
		district: 'Северо-Западный',
		name: 'Кандалакша',
		population: 29138,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '56.2',
			lon: '95.7',
		},
		district: 'Сибирский',
		name: 'Канск',
		population: 86816,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '56.30889',
			lon: '38.70139',
		},
		district: 'Центральный',
		name: 'Карабаново',
		population: 13150,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '55.48333',
			lon: '60.2',
		},
		district: 'Уральский',
		name: 'Карабаш',
		population: 10514,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '43.306285',
			lon: '44.909763',
		},
		district: 'Северо-Кавказский',
		name: 'Карабулак',
		population: 43037,
		subject: 'Ингушетия',
	},
	{
		coords: {
			lat: '53.73333',
			lon: '78.03333',
		},
		district: 'Сибирский',
		name: 'Карасук',
		population: 24890,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '43.769713',
			lon: '41.911369',
		},
		district: 'Северо-Кавказский',
		name: 'Карачаевск',
		population: 23867,
		subject: 'Карачаево-Черкесия',
	},
	{
		coords: {
			lat: '53.11667',
			lon: '34.98333',
		},
		district: 'Центральный',
		name: 'Карачев',
		population: 17449,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '55.2',
			lon: '80.28333',
		},
		district: 'Сибирский',
		name: 'Каргат',
		population: 8316,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '61.5',
			lon: '38.93333',
		},
		district: 'Северо-Западный',
		name: 'Каргополь',
		population: 8849,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '59.76667',
			lon: '60',
		},
		district: 'Уральский',
		name: 'Карпинск',
		population: 25879,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '53.05',
			lon: '60.65',
		},
		district: 'Уральский',
		name: 'Карталы',
		population: 27103,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '54.95',
			lon: '41.39722',
		},
		district: 'Центральный',
		name: 'Касимов',
		population: 28443,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '55.88333',
			lon: '60.75',
		},
		district: 'Уральский',
		name: 'Касли',
		population: 15383,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '42.88333',
			lon: '47.63333',
		},
		district: 'Северо-Кавказский',
		name: 'Каспийск',
		population: 121140,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '54.75',
			lon: '58.2',
		},
		district: 'Уральский',
		name: 'Катав-Ивановск',
		population: 14663,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '56.3',
			lon: '62.56667',
		},
		district: 'Уральский',
		name: 'Катайск',
		population: 11881,
		subject: 'Курганская область',
	},
	{
		coords: {
			lat: '58.7',
			lon: '59.48333',
		},
		district: 'Уральский',
		name: 'Качканар',
		population: 37307,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '57.35',
			lon: '37.61667',
		},
		district: 'Центральный',
		name: 'Кашин',
		population: 14113,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '54.83333',
			lon: '38.15',
		},
		district: 'Центральный',
		name: 'Кашира',
		population: 45922,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '57.56667',
			lon: '79.56667',
		},
		district: 'Сибирский',
		name: 'Кедровый',
		population: 1818,
		subject: 'Томская область',
	},
	{
		coords: {
			lat: '55.35417',
			lon: '86.08972',
		},
		district: 'Сибирский',
		name: 'Кемерово',
		population: 557119,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '64.95',
			lon: '34.6',
		},
		district: 'Северо-Западный',
		name: 'Кемь',
		population: 10018,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '45.33861',
			lon: '36.46806',
		},
		district: 'Южный',
		name: 'Керчь',
		population: 154621,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '59.05',
			lon: '57.65',
		},
		district: 'Приволжский',
		name: 'Кизел',
		population: 15619,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '43.2',
			lon: '46.86667',
		},
		district: 'Северо-Кавказский',
		name: 'Кизилюрт',
		population: 38335,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '43.850245',
			lon: '46.71698',
		},
		district: 'Северо-Кавказский',
		name: 'Кизляр',
		population: 49999,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '53.96667',
			lon: '38.53333',
		},
		district: 'Центральный',
		name: 'Кимовск',
		population: 26475,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '56.86667',
			lon: '37.35',
		},
		district: 'Центральный',
		name: 'Кимры',
		population: 40875,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '59.378053',
			lon: '28.601209',
		},
		district: 'Северо-Западный',
		name: 'Кингисепп',
		population: 49716,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '53.23333',
			lon: '50.61667',
		},
		district: 'Приволжский',
		name: 'Кинель',
		population: 36729,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '57.45',
			lon: '42.15',
		},
		district: 'Центральный',
		name: 'Кинешма',
		population: 77694,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '53.93333',
			lon: '37.93333',
		},
		district: 'Центральный',
		name: 'Киреевск',
		population: 25560,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '57.78333',
			lon: '108.1',
		},
		district: 'Сибирский',
		name: 'Киренск',
		population: 10998,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '56.15',
			lon: '38.86667',
		},
		district: 'Центральный',
		name: 'Киржач',
		population: 27318,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '59.86667',
			lon: '38.38333',
		},
		district: 'Северо-Западный',
		name: 'Кириллов',
		population: 7149,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '59.449695',
			lon: '32.008716',
		},
		district: 'Северо-Западный',
		name: 'Кириши',
		population: 51028,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '54.08333',
			lon: '34.3',
		},
		district: 'Центральный',
		name: 'Киров',
		population: 28097,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '58.6',
			lon: '49.65',
		},
		district: 'Приволжский',
		name: 'Киров',
		population: 468212,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '57.43333',
			lon: '60.06667',
		},
		district: 'Уральский',
		name: 'Кировград',
		population: 18698,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '58.55',
			lon: '50.01667',
		},
		district: 'Приволжский',
		name: 'Кирово-Чепецк',
		population: 66651,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '59.87533',
			lon: '30.981457',
		},
		district: 'Северо-Западный',
		name: 'Кировск',
		population: 27238,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '67.61417',
			lon: '33.67167',
		},
		district: 'Северо-Западный',
		name: 'Кировск',
		population: 24857,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '59.337167',
			lon: '52.245472',
		},
		district: 'Приволжский',
		name: 'Кирс',
		population: 8982,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '52.65',
			lon: '42.73333',
		},
		district: 'Центральный',
		name: 'Кирсанов',
		population: 16164,
		subject: 'Тамбовская область',
	},
	{
		coords: {
			lat: '53.98333',
			lon: '86.7',
		},
		district: 'Сибирский',
		name: 'Киселёвск',
		population: 83431,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '43.90333',
			lon: '42.72444',
		},
		district: 'Северо-Кавказский',
		name: 'Кисловодск',
		population: 127521,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '56.33389',
			lon: '36.7125',
		},
		district: 'Центральный',
		name: 'Клин',
		population: 88511,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '52.75278',
			lon: '32.23611',
		},
		district: 'Центральный',
		name: 'Клинцы',
		population: 63059,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '55.81667',
			lon: '45.03333',
		},
		district: 'Приволжский',
		name: 'Княгинино',
		population: 6447,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '67.55944',
			lon: '30.46667',
		},
		district: 'Северо-Западный',
		name: 'Ковдор',
		population: 15770,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '56.36056',
			lon: '41.31972',
		},
		district: 'Центральный',
		name: 'Ковров',
		population: 132417,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '54.03333',
			lon: '43.91667',
		},
		district: 'Приволжский',
		name: 'Ковылкино',
		population: 19793,
		subject: 'Мордовия',
	},
	{
		coords: {
			lat: '62.26667',
			lon: '74.48333',
		},
		district: 'Уральский',
		name: 'Когалым',
		population: 61441,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '58.6',
			lon: '99.18333',
		},
		district: 'Сибирский',
		name: 'Кодинск',
		population: 13324,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '54.03333',
			lon: '35.78333',
		},
		district: 'Центральный',
		name: 'Козельск',
		population: 16759,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '55.83333',
			lon: '48.25',
		},
		district: 'Приволжский',
		name: 'Козловка',
		population: 7781,
		subject: 'Чувашия',
	},
	{
		coords: {
			lat: '56.33333',
			lon: '46.56667',
		},
		district: 'Приволжский',
		name: 'Козьмодемьянск',
		population: 19731,
		subject: 'Марий Эл',
	},
	{
		coords: {
			lat: '68.88306',
			lon: '33.02194',
		},
		district: 'Северо-Западный',
		name: 'Кола',
		population: 9016,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '58.8252278',
			lon: '44.311444',
		},
		district: 'Центральный',
		name: 'Кологрив',
		population: 2468,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '55.09389',
			lon: '38.76806',
		},
		district: 'Центральный',
		name: 'Коломна',
		population: 134850,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '58.31667',
			lon: '82.91667',
		},
		district: 'Сибирский',
		name: 'Колпашево',
		population: 20824,
		subject: 'Томская область',
	},
	{
		coords: {
			lat: '59.75',
			lon: '30.6',
		},
		district: 'Северо-Западный',
		name: 'Колпино',
		population: 142108,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '59.932919',
			lon: '30.655377',
		},
		district: 'Северо-Западный',
		name: 'Колтуши',
		population: 14052,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '56.3',
			lon: '39.38333',
		},
		district: 'Центральный',
		name: 'Кольчугино',
		population: 39410,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '59.621609',
			lon: '30.393483',
		},
		district: 'Северо-Западный',
		name: 'Коммунар',
		population: 25793,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '50.55',
			lon: '137',
		},
		district: 'Дальневосточный',
		name: 'Комсомольск-на-Амуре',
		population: 238505,
		subject: 'Хабаровский край',
	},
	{
		coords: {
			lat: '57.03333',
			lon: '40.38333',
		},
		district: 'Центральный',
		name: 'Комсомольск',
		population: 8364,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '56.7',
			lon: '36.76667',
		},
		district: 'Центральный',
		name: 'Конаково',
		population: 33560,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '62.2',
			lon: '34.26667',
		},
		district: 'Северо-Западный',
		name: 'Кондопога',
		population: 25851,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '54.8',
			lon: '35.93333',
		},
		district: 'Центральный',
		name: 'Кондрово',
		population: 15734,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '47.58333',
			lon: '41.1',
		},
		district: 'Южный',
		name: 'Константиновск',
		population: 17207,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '55.1',
			lon: '61.61667',
		},
		district: 'Уральский',
		name: 'Копейск',
		population: 147806,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '53.91667',
			lon: '40.01667',
		},
		district: 'Центральный',
		name: 'Кораблино',
		population: 10334,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '45.46667',
			lon: '39.45',
		},
		district: 'Южный',
		name: 'Кореновск',
		population: 41826,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '54.88333',
			lon: '61.4',
		},
		district: 'Уральский',
		name: 'Коркино',
		population: 37224,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '55.91667',
			lon: '37.81667',
		},
		district: 'Центральный',
		name: 'Королёв',
		population: 228095,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '50.81361',
			lon: '37.18139',
		},
		district: 'Центральный',
		name: 'Короча',
		population: 5623,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '46.63333',
			lon: '142.76667',
		},
		district: 'Дальневосточный',
		name: 'Корсаков',
		population: 33950,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '61.3',
			lon: '47.16667',
		},
		district: 'Северо-Западный',
		name: 'Коряжма',
		population: 34523,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '55.93333',
			lon: '39.63333',
		},
		district: 'Центральный',
		name: 'Костерёво',
		population: 7113,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '64.58333',
			lon: '30.6',
		},
		district: 'Северо-Западный',
		name: 'Костомукша',
		population: 26048,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '57.76667',
			lon: '40.93333',
		},
		district: 'Центральный',
		name: 'Кострома',
		population: 267481,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '55.6625',
			lon: '37.86722',
		},
		district: 'Центральный',
		name: 'Котельники',
		population: 63728,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '47.63333',
			lon: '43.13333',
		},
		district: 'Южный',
		name: 'Котельниково',
		population: 22016,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '58.3',
			lon: '48.33333',
		},
		district: 'Приволжский',
		name: 'Котельнич',
		population: 20144,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '61.25',
			lon: '46.65',
		},
		district: 'Северо-Западный',
		name: 'Котлас',
		population: 56093,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '50.31667',
			lon: '44.8',
		},
		district: 'Южный',
		name: 'Котово',
		population: 21028,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '52.58333',
			lon: '41.5',
		},
		district: 'Центральный',
		name: 'Котовск',
		population: 26694,
		subject: 'Тамбовская область',
	},
	{
		coords: {
			lat: '56.93333',
			lon: '41.08333',
		},
		district: 'Центральный',
		name: 'Кохма',
		population: 30940,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '60.96667',
			lon: '46.48333',
		},
		district: 'Северо-Западный',
		name: 'Красавино',
		population: 5601,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '56.12278',
			lon: '38.14611',
		},
		district: 'Центральный',
		name: 'Красноармейск',
		population: 26492,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '51.01667',
			lon: '45.7',
		},
		district: 'Приволжский',
		name: 'Красноармейск',
		population: 21350,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '60.4',
			lon: '57.06667',
		},
		district: 'Приволжский',
		name: 'Красновишерск',
		population: 14460,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '55.81667',
			lon: '37.33333',
		},
		district: 'Центральный',
		name: 'Красногорск',
		population: 187634,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '45.03333',
			lon: '38.98333',
		},
		district: 'Южный',
		name: 'Краснодар',
		population: 1099344,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '59.733745',
			lon: '30.086205',
		},
		district: 'Северо-Западный',
		name: 'Красное Село',
		population: 56533,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '56.43806',
			lon: '38.22944',
		},
		district: 'Центральный',
		name: 'Краснозаводск',
		population: 14639,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '54.95',
			lon: '22.5',
		},
		district: 'Северо-Западный',
		name: 'Краснознаменск',
		population: 3419,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '55.6',
			lon: '37.03333',
		},
		district: 'Центральный',
		name: 'Краснознаменск',
		population: 43868,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '50.1',
			lon: '118.03333',
		},
		district: 'Сибирский',
		name: 'Краснокаменск',
		population: 51137,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '58.08333',
			lon: '55.75',
		},
		district: 'Приволжский',
		name: 'Краснокамск',
		population: 48778,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '45.955306',
			lon: '33.795',
		},
		district: 'Южный',
		name: 'Красноперекопск',
		population: 25569,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '48.7',
			lon: '44.566666666667',
		},
		district: 'Южный',
		name: 'Краснослободск',
		population: 16545,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '54.43333',
			lon: '43.78333',
		},
		district: 'Приволжский',
		name: 'Краснослободск',
		population: 8910,
		subject: 'Мордовия',
	},
	{
		coords: {
			lat: '59.76667',
			lon: '60.2',
		},
		district: 'Уральский',
		name: 'Краснотурьинск',
		population: 55875,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '58.35',
			lon: '60.05',
		},
		district: 'Уральский',
		name: 'Красноуральск',
		population: 21507,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '56.61667',
			lon: '57.76667',
		},
		district: 'Уральский',
		name: 'Красноуфимск',
		population: 37301,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '56.012083',
			lon: '92.871295',
		},
		district: 'Сибирский',
		name: 'Красноярск',
		population: 1187771,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '50.95',
			lon: '46.96667',
		},
		district: 'Приволжский',
		name: 'Красный Кут',
		population: 14296,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '47.88333',
			lon: '40.06667',
		},
		district: 'Южный',
		name: 'Красный Сулин',
		population: 35697,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '58.06329',
			lon: '37.122983',
		},
		district: 'Центральный',
		name: 'Красный Холм',
		population: 4998,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '54.88917',
			lon: '37.12333',
		},
		district: 'Центральный',
		name: 'Кремёнки',
		population: 11745,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '60',
			lon: '29.76667',
		},
		district: 'Северо-Западный',
		name: 'Кронштадт',
		population: 44399,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '45.43333',
			lon: '40.56667',
		},
		district: 'Южный',
		name: 'Кропоткин',
		population: 75858,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '44.93333',
			lon: '38',
		},
		district: 'Южный',
		name: 'Крымск',
		population: 54597,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '56.15167',
			lon: '44.19556',
		},
		district: 'Приволжский',
		name: 'Кстово',
		population: 63646,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '55.57639',
			lon: '36.69472',
		},
		district: 'Центральный',
		name: 'Кубинка',
		population: 23146,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '51.48333',
			lon: '57.35',
		},
		district: 'Приволжский',
		name: 'Кувандык',
		population: 26596,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '57.03333',
			lon: '34.16667',
		},
		district: 'Центральный',
		name: 'Кувшиново',
		population: 9262,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '59.908489',
			lon: '30.513569',
		},
		district: 'Северо-Западный',
		name: 'Кудрово',
		population: 60791,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '59.01667',
			lon: '54.66667',
		},
		district: 'Приволжский',
		name: 'Кудымкар',
		population: 28293,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '53.11667',
			lon: '46.6',
		},
		district: 'Приволжский',
		name: 'Кузнецк',
		population: 78390,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '55.45028',
			lon: '78.3075',
		},
		district: 'Сибирский',
		name: 'Куйбышев',
		population: 41946,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '56.1825',
			lon: '50.90639',
		},
		district: 'Приволжский',
		name: 'Кукмор',
		population: 17886,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '55.41667',
			lon: '42.51667',
		},
		district: 'Приволжский',
		name: 'Кулебаки',
		population: 32184,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '52.76667',
			lon: '55.78333',
		},
		district: 'Приволжский',
		name: 'Кумертау',
		population: 57949,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '57.43333',
			lon: '56.93333',
		},
		district: 'Приволжский',
		name: 'Кунгур',
		population: 62673,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '54.36667',
			lon: '77.3',
		},
		district: 'Сибирский',
		name: 'Купино',
		population: 15065,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '55.44083',
			lon: '65.34111',
		},
		district: 'Уральский',
		name: 'Курган',
		population: 310911,
		subject: 'Курганская область',
	},
	{
		coords: {
			lat: '44.88333',
			lon: '40.6',
		},
		district: 'Южный',
		name: 'Курганинск',
		population: 47305,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '45.25',
			lon: '147.883333',
		},
		district: 'Дальневосточный',
		name: 'Курильск',
		population: 2530,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '55.45',
			lon: '40.61667',
		},
		district: 'Центральный',
		name: 'Курлово',
		population: 6309,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '55.58333',
			lon: '38.91667',
		},
		district: 'Центральный',
		name: 'Куровское',
		population: 19857,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '51.71667',
			lon: '36.18333',
		},
		district: 'Центральный',
		name: 'Курск',
		population: 440052,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '54.9',
			lon: '64.43333',
		},
		district: 'Уральский',
		name: 'Куртамыш',
		population: 14806,
		subject: 'Курганская область',
	},
	{
		coords: {
			lat: '43.20444',
			lon: '46.087812',
		},
		district: 'Северо-Кавказский',
		name: 'Курчалой',
		population: 23425,
		subject: 'Чечня',
	},
	{
		coords: {
			lat: '51.66667',
			lon: '35.65',
		},
		district: 'Центральный',
		name: 'Курчатов',
		population: 40318,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '55.33333',
			lon: '59.43333',
		},
		district: 'Уральский',
		name: 'Куса',
		population: 17136,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '58.28333',
			lon: '59.73333',
		},
		district: 'Уральский',
		name: 'Кушва',
		population: 27306,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '51.7',
			lon: '94.36667',
		},
		district: 'Сибирский',
		name: 'Кызыл',
		population: 125241,
		subject: 'Тыва',
	},
	{
		coords: {
			lat: '55.7',
			lon: '60.55',
		},
		district: 'Уральский',
		name: 'Кыштым',
		population: 36045,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '50.35',
			lon: '106.45',
		},
		district: 'Сибирский',
		name: 'Кяхта',
		population: 17877,
		subject: 'Бурятия',
	},
	{
		coords: {
			lat: '44.633338',
			lon: '40.733311',
		},
		district: 'Южный',
		name: 'Лабинск',
		population: 57428,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '66.65806',
			lon: '66.38389',
		},
		district: 'Уральский',
		name: 'Лабытнанги',
		population: 25501,
		subject: 'Ямало-Ненецкий АО',
	},
	{
		coords: {
			lat: '45.3925',
			lon: '47.355',
		},
		district: 'Южный',
		name: 'Лагань',
		population: 13834,
		subject: 'Калмыкия',
	},
	{
		coords: {
			lat: '54.56667',
			lon: '20.16667',
		},
		district: 'Северо-Западный',
		name: 'Ладушкин',
		population: 3666,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '55.4',
			lon: '49.55',
		},
		district: 'Приволжский',
		name: 'Лаишево',
		population: 9076,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '56.01694',
			lon: '39.94944',
		},
		district: 'Центральный',
		name: 'Лакинск',
		population: 12861,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '61.25',
			lon: '75.16667',
		},
		district: 'Уральский',
		name: 'Лангепас',
		population: 42701,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '61.51667',
			lon: '30.2',
		},
		district: 'Северо-Западный',
		name: 'Лахденпохья',
		population: 5952,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '53.0115528',
			lon: '39.1281167',
		},
		district: 'Центральный',
		name: 'Лебедянь',
		population: 20049,
		subject: 'Липецкая область',
	},
	{
		coords: {
			lat: '54.5988694',
			lon: '52.4422722',
		},
		district: 'Приволжский',
		name: 'Лениногорск',
		population: 60993,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '54.65',
			lon: '86.16667',
		},
		district: 'Сибирский',
		name: 'Ленинск-Кузнецкий',
		population: 92244,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '48.7',
			lon: '45.2',
		},
		district: 'Южный',
		name: 'Ленинск',
		population: 13391,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '60.71667',
			lon: '114.9',
		},
		district: 'Дальневосточный',
		name: 'Ленск',
		population: 21392,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '44.10528',
			lon: '42.97167',
		},
		district: 'Северо-Кавказский',
		name: 'Лермонтов',
		population: 22444,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '58.63333',
			lon: '59.78333',
		},
		district: 'Уральский',
		name: 'Лесной',
		population: 48261,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '45.46667',
			lon: '133.4',
		},
		district: 'Дальневосточный',
		name: 'Лесозаводск',
		population: 35433,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '58.23333',
			lon: '92.48333',
		},
		district: 'Сибирский',
		name: 'Лесосибирск',
		population: 55730,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '52.425306',
			lon: '37.608306',
		},
		district: 'Центральный',
		name: 'Ливны',
		population: 43549,
		subject: 'Орловская область',
	},
	{
		coords: {
			lat: '55.71528',
			lon: '38.95778',
		},
		district: 'Центральный',
		name: 'Ликино-Дулёво',
		population: 34191,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '52.61667',
			lon: '39.6',
		},
		district: 'Центральный',
		name: 'Липецк',
		population: 496403,
		subject: 'Липецкая область',
	},
	{
		coords: {
			lat: '53.95',
			lon: '37.7',
		},
		district: 'Центральный',
		name: 'Липки',
		population: 8325,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '50.98222',
			lon: '39.49944',
		},
		district: 'Центральный',
		name: 'Лиски',
		population: 54147,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '57.11667',
			lon: '35.46667',
		},
		district: 'Центральный',
		name: 'Лихославль',
		population: 11017,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '56.01194',
			lon: '37.47444',
		},
		district: 'Центральный',
		name: 'Лобня',
		population: 82764,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '60.734305',
			lon: '33.543183',
		},
		district: 'Северо-Западный',
		name: 'Лодейное Поле',
		population: 18905,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '59.91074',
			lon: '29.776466',
		},
		district: 'Северо-Западный',
		name: 'Ломоносов',
		population: 39147,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '55.86667',
			lon: '38.2',
		},
		district: 'Центральный',
		name: 'Лосино-Петровский',
		population: 29000,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '58.733333333333',
			lon: '29.85',
		},
		district: 'Северо-Западный',
		name: 'Луга',
		population: 38407,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '60.61667',
			lon: '47.28333',
		},
		district: 'Приволжский',
		name: 'Луза',
		population: 9122,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '55.03833',
			lon: '44.49778',
		},
		district: 'Приволжский',
		name: 'Лукоянов',
		population: 12652,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '54.96667',
			lon: '39.025',
		},
		district: 'Центральный',
		name: 'Луховицы',
		population: 29889,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '56.01278',
			lon: '45.02528',
		},
		district: 'Приволжский',
		name: 'Лысково',
		population: 21657,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '58.1003806',
			lon: '57.8043278',
		},
		district: 'Приволжский',
		name: 'Лысьва',
		population: 53855,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '55.58361',
			lon: '37.90556',
		},
		district: 'Центральный',
		name: 'Лыткарино',
		population: 65212,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '51.66667',
			lon: '35.26667',
		},
		district: 'Центральный',
		name: 'Льгов',
		population: 17557,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '59.349301',
			lon: '31.24858',
		},
		district: 'Северо-Западный',
		name: 'Любань',
		population: 4565,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '55.68139',
			lon: '37.89389',
		},
		district: 'Центральный',
		name: 'Люберцы',
		population: 224195,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '58.35',
			lon: '40.7',
		},
		district: 'Центральный',
		name: 'Любим',
		population: 5037,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '53.86667',
			lon: '34.46667',
		},
		district: 'Центральный',
		name: 'Людиново',
		population: 35874,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '61.61667',
			lon: '72.16667',
		},
		district: 'Уральский',
		name: 'Лянтор',
		population: 40977,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '59.56667',
			lon: '150.8',
		},
		district: 'Дальневосточный',
		name: 'Магадан',
		population: 90757,
		subject: 'Магаданская область',
	},
	{
		coords: {
			lat: '43.16667',
			lon: '44.81667',
		},
		district: 'Северо-Кавказский',
		name: 'Магас',
		population: 15271,
		subject: 'Ингушетия',
	},
	{
		coords: {
			lat: '53.38333',
			lon: '59.03333',
		},
		district: 'Уральский',
		name: 'Магнитогорск',
		population: 410594,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '44.611',
			lon: '40.111',
		},
		district: 'Южный',
		name: 'Майкоп',
		population: 143385,
		subject: 'Адыгея',
	},
	{
		coords: {
			lat: '43.630508',
			lon: '44.067733',
		},
		district: 'Северо-Кавказский',
		name: 'Майский',
		population: 26632,
		subject: 'Кабардино-Балкария',
	},
	{
		coords: {
			lat: '48.61667',
			lon: '142.78333',
		},
		district: 'Дальневосточный',
		name: 'Макаров',
		population: 5848,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '57.88333',
			lon: '43.8',
		},
		district: 'Центральный',
		name: 'Макарьев',
		population: 5528,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '55.2',
			lon: '67.25',
		},
		district: 'Уральский',
		name: 'Макушино',
		population: 6827,
		subject: 'Курганская область',
	},
	{
		coords: {
			lat: '58.85',
			lon: '32.21667',
		},
		district: 'Северо-Западный',
		name: 'Малая Вишера',
		population: 9996,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '43.508882',
			lon: '44.585563',
		},
		district: 'Северо-Кавказский',
		name: 'Малгобек',
		population: 36480,
		subject: 'Ингушетия',
	},
	{
		coords: {
			lat: '56.52278',
			lon: '50.68083',
		},
		district: 'Приволжский',
		name: 'Малмыж',
		population: 6931,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '52.4',
			lon: '36.5',
		},
		district: 'Центральный',
		name: 'Малоархангельск',
		population: 3609,
		subject: 'Орловская область',
	},
	{
		coords: {
			lat: '55',
			lon: '36.46667',
		},
		district: 'Центральный',
		name: 'Малоярославец',
		population: 41836,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '55.7',
			lon: '51.4',
		},
		district: 'Приволжский',
		name: 'Мамадыш',
		population: 15726,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '54.46667',
			lon: '19.93333',
		},
		district: 'Северо-Западный',
		name: 'Мамоново',
		population: 8314,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '58.33333',
			lon: '44.76667',
		},
		district: 'Центральный',
		name: 'Мантурово',
		population: 13043,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '56.21667',
			lon: '87.75',
		},
		district: 'Сибирский',
		name: 'Мариинск',
		population: 40779,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '56.11667',
			lon: '47.71667',
		},
		district: 'Приволжский',
		name: 'Мариинский Посад',
		population: 7851,
		subject: 'Чувашия',
	},
	{
		coords: {
			lat: '51.7',
			lon: '46.75',
		},
		district: 'Приволжский',
		name: 'Маркс',
		population: 28749,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '42.98333',
			lon: '47.5',
		},
		district: 'Северо-Кавказский',
		name: 'Махачкала',
		population: 623254,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '53.06111',
			lon: '32.84833',
		},
		district: 'Центральный',
		name: 'Мглин',
		population: 6919,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '61.033055555556',
			lon: '76.109722222222',
		},
		district: 'Уральский',
		name: 'Мегион',
		population: 52887,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '62.91667',
			lon: '34.45',
		},
		district: 'Северо-Западный',
		name: 'Медвежьегорск',
		population: 11962,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '51.422085',
			lon: '57.595296',
		},
		district: 'Приволжский',
		name: 'Медногорск',
		population: 23693,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '54.96667',
			lon: '35.86667',
		},
		district: 'Центральный',
		name: 'Медынь',
		population: 8200,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '54.24167',
			lon: '57.96778',
		},
		district: 'Приволжский',
		name: 'Межгорье',
		population: 15697,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '53.68333',
			lon: '88.05',
		},
		district: 'Сибирский',
		name: 'Междуреченск',
		population: 96174,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '65.85',
			lon: '44.23333',
		},
		district: 'Северо-Западный',
		name: 'Мезень',
		population: 2874,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '55.33333',
			lon: '41.63333',
		},
		district: 'Центральный',
		name: 'Меленки',
		population: 13407,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '52.95',
			lon: '55.93333',
		},
		district: 'Приволжский',
		name: 'Мелеуз',
		population: 56505,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '55.9',
			lon: '52.316666666667',
		},
		district: 'Приволжский',
		name: 'Менделеевск',
		population: 22875,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '55.71667',
			lon: '53.08333',
		},
		district: 'Приволжский',
		name: 'Мензелинск',
		population: 16008,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '54.31667',
			lon: '35.28333',
		},
		district: 'Центральный',
		name: 'Мещовск',
		population: 3810,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '55.05',
			lon: '60.1',
		},
		district: 'Уральский',
		name: 'Миасс',
		population: 147995,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '62.35',
			lon: '50.06667',
		},
		district: 'Северо-Западный',
		name: 'Микунь',
		population: 8527,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '48.91667',
			lon: '40.4',
		},
		district: 'Южный',
		name: 'Миллерово',
		population: 34841,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '44.20083',
			lon: '43.1125',
		},
		district: 'Северо-Кавказский',
		name: 'Минеральные Воды',
		population: 70485,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '53.7',
			lon: '91.68333',
		},
		district: 'Сибирский',
		name: 'Минусинск',
		population: 70089,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '55.06667',
			lon: '57.55',
		},
		district: 'Уральский',
		name: 'Миньяр',
		population: 8500,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '62.76028',
			lon: '40.33528',
		},
		district: 'Северо-Западный',
		name: 'Мирный',
		population: 27262,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '62.53333',
			lon: '113.95',
		},
		district: 'Дальневосточный',
		name: 'Мирный',
		population: 34045,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '54.23333',
			lon: '39.03333',
		},
		district: 'Центральный',
		name: 'Михайлов',
		population: 10303,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '50.06667',
			lon: '43.23333',
		},
		district: 'Южный',
		name: 'Михайловка',
		population: 56031,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '56.43333',
			lon: '59.11667',
		},
		district: 'Уральский',
		name: 'Михайловск',
		population: 9756,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '45.130012',
			lon: '42.027487',
		},
		district: 'Северо-Кавказский',
		name: 'Михайловск',
		population: 114133,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '52.89222',
			lon: '40.49278',
		},
		district: 'Центральный',
		name: 'Мичуринск',
		population: 90451,
		subject: 'Тамбовская область',
	},
	{
		coords: {
			lat: '53.73333',
			lon: '119.76667',
		},
		district: 'Сибирский',
		name: 'Могоча',
		population: 12390,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '55.5',
			lon: '36.03333',
		},
		district: 'Центральный',
		name: 'Можайск',
		population: 33880,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '56.45',
			lon: '52.21667',
		},
		district: 'Приволжский',
		name: 'Можга',
		population: 44345,
		subject: 'Удмуртия',
	},
	{
		coords: {
			lat: '43.736575',
			lon: '44.652834',
		},
		district: 'Северо-Кавказский',
		name: 'Моздок',
		population: 36784,
		subject: 'Северная Осетия',
	},
	{
		coords: {
			lat: '67.93944',
			lon: '32.91556',
		},
		district: 'Северо-Западный',
		name: 'Мончегорск',
		population: 39962,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '48.35',
			lon: '41.833333333333',
		},
		district: 'Южный',
		name: 'Морозовск',
		population: 24258,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '53.45',
			lon: '41.8',
		},
		district: 'Центральный',
		name: 'Моршанск',
		population: 39023,
		subject: 'Тамбовская область',
	},
	{
		coords: {
			lat: '54.48333',
			lon: '34.98333',
		},
		district: 'Центральный',
		name: 'Мосальск',
		population: 4234,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '55.755833333333',
			lon: '37.617777777778',
		},
		district: 'Центральный',
		name: 'Москва',
		population: 13010112,
		subject: 'Москва',
	},
	{
		coords: {
			lat: '55.6',
			lon: '37.35',
		},
		district: 'Центральный',
		name: 'Московский',
		population: 65417,
		subject: 'Москва',
	},
	{
		coords: {
			lat: '63.79444',
			lon: '74.49722',
		},
		district: 'Уральский',
		name: 'Муравленко',
		population: 29233,
		subject: 'Ямало-Ненецкий АО',
	},
	{
		coords: {
			lat: '59.38333',
			lon: '48.96667',
		},
		district: 'Приволжский',
		name: 'Мураши',
		population: 5700,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '60.051284',
			lon: '30.438578',
		},
		district: 'Северо-Западный',
		name: 'Мурино',
		population: 89083,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '68.96667',
			lon: '33.08333',
		},
		district: 'Северо-Западный',
		name: 'Мурманск',
		population: 270384,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '55.5725',
			lon: '42.05139',
		},
		district: 'Центральный',
		name: 'Муром',
		population: 107497,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '53.27833',
			lon: '36.575',
		},
		district: 'Центральный',
		name: 'Мценск',
		population: 36960,
		subject: 'Орловская область',
	},
	{
		coords: {
			lat: '53.7',
			lon: '87.81667',
		},
		district: 'Сибирский',
		name: 'Мыски',
		population: 40109,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '55.91667',
			lon: '37.73333',
		},
		district: 'Центральный',
		name: 'Мытищи',
		population: 255429,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '57.78333',
			lon: '38.45',
		},
		district: 'Центральный',
		name: 'Мышкин',
		population: 5621,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '55.7',
			lon: '52.33333',
		},
		district: 'Приволжский',
		name: 'Набережные Челны',
		population: 548434,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '55.53333',
			lon: '42.2',
		},
		district: 'Приволжский',
		name: 'Навашино',
		population: 14664,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '57.46667',
			lon: '41.96667',
		},
		district: 'Центральный',
		name: 'Наволоки',
		population: 8167,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '65.53333',
			lon: '72.51667',
		},
		district: 'Уральский',
		name: 'Надым',
		population: 45973,
		subject: 'Ямало-Ненецкий АО',
	},
	{
		coords: {
			lat: '56.00639',
			lon: '90.39139',
		},
		district: 'Сибирский',
		name: 'Назарово',
		population: 45333,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '43.21667',
			lon: '44.76667',
		},
		district: 'Северо-Кавказский',
		name: 'Назрань',
		population: 122350,
		subject: 'Ингушетия',
	},
	{
		coords: {
			lat: '55.56667',
			lon: '71.35',
		},
		district: 'Сибирский',
		name: 'Называевск',
		population: 10434,
		subject: 'Омская область',
	},
	{
		coords: {
			lat: '43.485259',
			lon: '43.607072',
		},
		district: 'Северо-Кавказский',
		name: 'Нальчик',
		population: 247054,
		subject: 'Кабардино-Балкария',
	},
	{
		coords: {
			lat: '46.68333',
			lon: '47.85',
		},
		district: 'Южный',
		name: 'Нариманов',
		population: 11104,
		subject: 'Астраханская область',
	},
	{
		coords: {
			lat: '55.38333',
			lon: '36.73333',
		},
		district: 'Центральный',
		name: 'Наро-Фоминск',
		population: 71121,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '43.556734',
			lon: '43.862222',
		},
		district: 'Северо-Кавказский',
		name: 'Нарткала',
		population: 33203,
		subject: 'Кабардино-Балкария',
	},
	{
		coords: {
			lat: '67.63778',
			lon: '53.00667',
		},
		district: 'Северо-Западный',
		name: 'Нарьян-Мар',
		population: 23399,
		subject: 'Ненецкий АО',
	},
	{
		coords: {
			lat: '42.81667',
			lon: '132.88333',
		},
		district: 'Дальневосточный',
		name: 'Находка',
		population: 139931,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '56.01667',
			lon: '29.93333',
		},
		district: 'Северо-Западный',
		name: 'Невель',
		population: 13980,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '46.65',
			lon: '141.86667',
		},
		district: 'Дальневосточный',
		name: 'Невельск',
		population: 10608,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '44.63333',
			lon: '41.93333',
		},
		district: 'Северо-Кавказский',
		name: 'Невинномысск',
		population: 117562,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '57.48333',
			lon: '60.2',
		},
		district: 'Уральский',
		name: 'Невьянск',
		population: 22061,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '56.21667',
			lon: '32.78333',
		},
		district: 'Центральный',
		name: 'Нелидово',
		population: 18603,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '55.03333',
			lon: '22.03333',
		},
		district: 'Северо-Западный',
		name: 'Неман',
		population: 9255,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '57.45',
			lon: '40.58333',
		},
		district: 'Центральный',
		name: 'Нерехта',
		population: 19977,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '51.98333',
			lon: '116.58333',
		},
		district: 'Сибирский',
		name: 'Нерчинск',
		population: 15290,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '56.65833',
			lon: '124.725',
		},
		district: 'Дальневосточный',
		name: 'Нерюнгри',
		population: 53409,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '54.63333',
			lon: '22.56667',
		},
		district: 'Северо-Западный',
		name: 'Нестеров',
		population: 3336,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '52.8',
			lon: '51.16667',
		},
		district: 'Приволжский',
		name: 'Нефтегорск',
		population: 18076,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '56.08889',
			lon: '54.24639',
		},
		district: 'Приволжский',
		name: 'Нефтекамск',
		population: 131942,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '44.75056',
			lon: '44.97972',
		},
		district: 'Северо-Кавказский',
		name: 'Нефтекумск',
		population: 23137,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '61.1',
			lon: '72.6',
		},
		district: 'Уральский',
		name: 'Нефтеюганск',
		population: 124732,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '58.29444',
			lon: '43.87806',
		},
		district: 'Центральный',
		name: 'Нея',
		population: 7816,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '60.93389',
			lon: '76.58111',
		},
		district: 'Уральский',
		name: 'Нижневартовск',
		population: 283256,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '55.63333',
			lon: '51.81667',
		},
		district: 'Приволжский',
		name: 'Нижнекамск',
		population: 241479,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '54.9',
			lon: '99.01667',
		},
		district: 'Сибирский',
		name: 'Нижнеудинск',
		population: 29995,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '56.66667',
			lon: '59.3',
		},
		district: 'Уральский',
		name: 'Нижние Серги',
		population: 8009,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '53.53333',
			lon: '43.68333',
		},
		district: 'Приволжский',
		name: 'Нижний Ломов',
		population: 20421,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '56.32694',
			lon: '44.0075',
		},
		district: 'Приволжский',
		name: 'Нижний Новгород',
		population: 1226076,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '57.91667',
			lon: '59.96667',
		},
		district: 'Уральский',
		name: 'Нижний Тагил',
		population: 338966,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '58.08333',
			lon: '60.71667',
		},
		district: 'Уральский',
		name: 'Нижняя Салда',
		population: 16505,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '58.62083',
			lon: '59.84778',
		},
		district: 'Уральский',
		name: 'Нижняя Тура',
		population: 18392,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '53.15',
			lon: '140.73333',
		},
		district: 'Дальневосточный',
		name: 'Николаевск-на-Амуре',
		population: 18631,
		subject: 'Хабаровский край',
	},
	{
		coords: {
			lat: '50.02722',
			lon: '45.46306',
		},
		district: 'Южный',
		name: 'Николаевск',
		population: 13460,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '59.53333',
			lon: '45.45',
		},
		district: 'Северо-Западный',
		name: 'Никольск',
		population: 7661,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '53.71667',
			lon: '46.08333',
		},
		district: 'Приволжский',
		name: 'Никольск',
		population: 19873,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '59.704642',
			lon: '30.788975',
		},
		district: 'Северо-Западный',
		name: 'Никольское',
		population: 22355,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '60.106401',
			lon: '32.316183',
		},
		district: 'Северо-Западный',
		name: 'Новая Ладога',
		population: 7432,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '59.05',
			lon: '60.6',
		},
		district: 'Уральский',
		name: 'Новая Ляля',
		population: 10684,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '45.49333',
			lon: '41.21694',
		},
		district: 'Северо-Кавказский',
		name: 'Новоалександровск',
		population: 26767,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '53.4',
			lon: '83.93333',
		},
		district: 'Сибирский',
		name: 'Новоалтайск',
		population: 73049,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '50.51667',
			lon: '42.66667',
		},
		district: 'Южный',
		name: 'Новоаннинский',
		population: 15351,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '51.31667',
			lon: '39.21667',
		},
		district: 'Центральный',
		name: 'Нововоронеж',
		population: 30658,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '64.41667',
			lon: '40.81667',
		},
		district: 'Северо-Западный',
		name: 'Новодвинск',
		population: 33294,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '52.53333',
			lon: '31.93333',
		},
		district: 'Центральный',
		name: 'Новозыбков',
		population: 38680,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '45.1',
			lon: '41.05',
		},
		district: 'Южный',
		name: 'Новокубанск',
		population: 34000,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '53.73333',
			lon: '87.08333',
		},
		district: 'Сибирский',
		name: 'Новокузнецк',
		population: 537480,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '53.1',
			lon: '49.91667',
		},
		district: 'Приволжский',
		name: 'Новокуйбышевск',
		population: 98306,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '54.03333',
			lon: '39.75',
		},
		district: 'Центральный',
		name: 'Новомичуринск',
		population: 16900,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '54.03333',
			lon: '38.26667',
		},
		district: 'Центральный',
		name: 'Новомосковск',
		population: 119697,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '43.96361',
			lon: '43.63944',
		},
		district: 'Северо-Кавказский',
		name: 'Новопавловск',
		population: 20781,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '57.03333',
			lon: '29.33333',
		},
		district: 'Северо-Западный',
		name: 'Новоржев',
		population: 3222,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '44.71667',
			lon: '37.76667',
		},
		district: 'Южный',
		name: 'Новороссийск',
		population: 262293,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '55.01667',
			lon: '82.91667',
		},
		district: 'Сибирский',
		name: 'Новосибирск',
		population: 1633595,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '52.96667',
			lon: '37.05',
		},
		district: 'Центральный',
		name: 'Новосиль',
		population: 2912,
		subject: 'Орловская область',
	},
	{
		coords: {
			lat: '56.33333',
			lon: '30.15',
		},
		district: 'Северо-Западный',
		name: 'Новосокольники',
		population: 6895,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '51.20667',
			lon: '58.32806',
		},
		district: 'Приволжский',
		name: 'Новотроицк',
		population: 75960,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '50.45',
			lon: '48.15',
		},
		district: 'Приволжский',
		name: 'Новоузенск',
		population: 15216,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '54.15',
			lon: '48.38333',
		},
		district: 'Приволжский',
		name: 'Новоульяновск',
		population: 13673,
		subject: 'Ульяновская область',
	},
	{
		coords: {
			lat: '57.25',
			lon: '60.08333',
		},
		district: 'Уральский',
		name: 'Новоуральск',
		population: 78479,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '51.1',
			lon: '41.61667',
		},
		district: 'Центральный',
		name: 'Новохопёрск',
		population: 5948,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '56.12194',
			lon: '47.4925',
		},
		district: 'Приволжский',
		name: 'Новочебоксарск',
		population: 120375,
		subject: 'Чувашия',
	},
	{
		coords: {
			lat: '47.43583',
			lon: '40.09861',
		},
		district: 'Южный',
		name: 'Новочеркасск',
		population: 163674,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '47.76667',
			lon: '39.91667',
		},
		district: 'Южный',
		name: 'Новошахтинск',
		population: 103480,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '50.76667',
			lon: '37.86667',
		},
		district: 'Центральный',
		name: 'Новый Оскол',
		population: 18359,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '66.08472',
			lon: '76.67889',
		},
		district: 'Уральский',
		name: 'Новый Уренгой',
		population: 107251,
		subject: 'Ямало-Ненецкий АО',
	},
	{
		coords: {
			lat: '55.85',
			lon: '38.43333',
		},
		district: 'Центральный',
		name: 'Ногинск',
		population: 103891,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '57.55722',
			lon: '49.93417',
		},
		district: 'Приволжский',
		name: 'Нолинск',
		population: 8262,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '69.33333',
			lon: '88.21667',
		},
		district: 'Сибирский',
		name: 'Норильск',
		population: 174453,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '63.20167',
			lon: '75.45167',
		},
		district: 'Уральский',
		name: 'Ноябрьск',
		population: 100188,
		subject: 'Ямало-Ненецкий АО',
	},
	{
		coords: {
			lat: '54.43333',
			lon: '50.8',
		},
		district: 'Приволжский',
		name: 'Нурлат',
		population: 33990,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '57.93333',
			lon: '55.33333',
		},
		district: 'Приволжский',
		name: 'Нытва',
		population: 16675,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '63.28333',
			lon: '118.33333',
		},
		district: 'Дальневосточный',
		name: 'Нюрба',
		population: 10138,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '62.13333',
			lon: '65.38333',
		},
		district: 'Уральский',
		name: 'Нягань',
		population: 63034,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '56.05',
			lon: '59.6',
		},
		district: 'Уральский',
		name: 'Нязепетровск',
		population: 10379,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '61.666666666667',
			lon: '40.2',
		},
		district: 'Северо-Западный',
		name: 'Няндома',
		population: 18473,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '49',
			lon: '131.05',
		},
		district: 'Дальневосточный',
		name: 'Облучье',
		population: 7959,
		subject: 'Еврейская АО',
	},
	{
		coords: {
			lat: '55.1',
			lon: '36.61667',
		},
		district: 'Центральный',
		name: 'Обнинск',
		population: 125376,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '51.21111',
			lon: '36.27639',
		},
		district: 'Центральный',
		name: 'Обоянь',
		population: 11844,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '54.99167',
			lon: '82.7125',
		},
		district: 'Сибирский',
		name: 'Обь',
		population: 30369,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '55.67333',
			lon: '37.27333',
		},
		district: 'Центральный',
		name: 'Одинцово',
		population: 180530,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '54.41667',
			lon: '22.01667',
		},
		district: 'Северо-Западный',
		name: 'Озёрск',
		population: 4152,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '55.75',
			lon: '60.71667',
		},
		district: 'Уральский',
		name: 'Озёрск',
		population: 76896,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '54.857875',
			lon: '38.5438194',
		},
		district: 'Центральный',
		name: 'Озёры',
		population: 24359,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '53.16667',
			lon: '48.66667',
		},
		district: 'Приволжский',
		name: 'Октябрьск',
		population: 20703,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '54.48333',
			lon: '53.48333',
		},
		district: 'Приволжский',
		name: 'Октябрьский',
		population: 115557,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '58.38333',
			lon: '33.3',
		},
		district: 'Северо-Западный',
		name: 'Окуловка',
		population: 9949,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '68.15',
			lon: '33.28333',
		},
		district: 'Северо-Западный',
		name: 'Оленегорск',
		population: 21438,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '60.98333',
			lon: '32.96667',
		},
		district: 'Северо-Западный',
		name: 'Олонец',
		population: 7663,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '60.38333',
			lon: '120.43333',
		},
		district: 'Дальневосточный',
		name: 'Олёкминск',
		population: 8398,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '54.96667',
			lon: '73.38333',
		},
		district: 'Сибирский',
		name: 'Омск',
		population: 1125695,
		subject: 'Омская область',
	},
	{
		coords: {
			lat: '58.66667',
			lon: '52.18333',
		},
		district: 'Приволжский',
		name: 'Омутнинск',
		population: 19629,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '63.91667',
			lon: '38.08333',
		},
		district: 'Северо-Западный',
		name: 'Онега',
		population: 16947,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '56.71667',
			lon: '28.65',
		},
		district: 'Северо-Западный',
		name: 'Опочка',
		population: 9928,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '51.76667',
			lon: '55.1',
		},
		district: 'Приволжский',
		name: 'Оренбург',
		population: 543654,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '55.8',
			lon: '38.96667',
		},
		district: 'Центральный',
		name: 'Орехово-Зуево',
		population: 105745,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '58.53889',
			lon: '48.89861',
		},
		district: 'Приволжский',
		name: 'Орлов',
		population: 5508,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '51.2',
			lon: '58.61667',
		},
		district: 'Приволжский',
		name: 'Орск',
		population: 189195,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '52.96667',
			lon: '36.08333',
		},
		district: 'Центральный',
		name: 'Орёл',
		population: 303169,
		subject: 'Орловская область',
	},
	{
		coords: {
			lat: '57.28333',
			lon: '55.45',
		},
		district: 'Приволжский',
		name: 'Оса',
		population: 19523,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '53.61667',
			lon: '87.33333',
		},
		district: 'Сибирский',
		name: 'Осинники',
		population: 40367,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '57.15',
			lon: '33.1',
		},
		district: 'Центральный',
		name: 'Осташков',
		population: 16674,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '57.33333',
			lon: '28.35',
		},
		district: 'Северо-Западный',
		name: 'Остров',
		population: 20923,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '68.05306',
			lon: '39.51306',
		},
		district: 'Северо-Западный',
		name: 'Островной',
		population: 1487,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '50.86667',
			lon: '39.06667',
		},
		district: 'Центральный',
		name: 'Острогожск',
		population: 31699,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '59.77409',
			lon: '30.794553',
		},
		district: 'Северо-Западный',
		name: 'Отрадное',
		population: 25706,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '53.36667',
			lon: '51.35',
		},
		district: 'Приволжский',
		name: 'Отрадный',
		population: 46984,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '53.58333',
			lon: '142.95',
		},
		district: 'Дальневосточный',
		name: 'Оха',
		population: 20357,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '57.71667',
			lon: '55.38333',
		},
		district: 'Приволжский',
		name: 'Оханск',
		population: 6430,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '57.88333',
			lon: '54.71667',
		},
		district: 'Приволжский',
		name: 'Очёр',
		population: 14385,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '55.96194',
			lon: '43.09',
		},
		district: 'Приволжский',
		name: 'Павлово',
		population: 57116,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '50.45',
			lon: '40.06667',
		},
		district: 'Центральный',
		name: 'Павловск',
		population: 22384,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '59.68333',
			lon: '30.43333',
		},
		district: 'Северо-Западный',
		name: 'Павловск',
		population: 17463,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '55.78333',
			lon: '38.65',
		},
		district: 'Центральный',
		name: 'Павловский Посад',
		population: 65098,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '50.05',
			lon: '46.88333',
		},
		district: 'Южный',
		name: 'Палласовка',
		population: 14966,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '43.13333',
			lon: '133.13333',
		},
		district: 'Дальневосточный',
		name: 'Партизанск',
		population: 33832,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '69.7',
			lon: '170.31667',
		},
		district: 'Дальневосточный',
		name: 'Певек',
		population: 4015,
		subject: 'Чукотский АО',
	},
	{
		coords: {
			lat: '53.2',
			lon: '45',
		},
		district: 'Приволжский',
		name: 'Пенза',
		population: 501109,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '54.86667',
			lon: '43.8',
		},
		district: 'Приволжский',
		name: 'Первомайск',
		population: 13223,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '56.91667',
			lon: '59.95',
		},
		district: 'Уральский',
		name: 'Первоуральск',
		population: 114450,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '55.6',
			lon: '44.55',
		},
		district: 'Приволжский',
		name: 'Перевоз',
		population: 8999,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '56.41667',
			lon: '38.175',
		},
		district: 'Центральный',
		name: 'Пересвет',
		population: 11752,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '56.7381333',
			lon: '38.8561528',
		},
		district: 'Центральный',
		name: 'Переславль-Залесский',
		population: 37738,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '58.01389',
			lon: '56.24889',
		},
		district: 'Приволжский',
		name: 'Пермь',
		population: 1034002,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '58.6',
			lon: '35.81667',
		},
		district: 'Северо-Западный',
		name: 'Пестово',
		population: 14032,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '59.88333',
			lon: '29.9',
		},
		district: 'Северо-Западный',
		name: 'Петергоф',
		population: 80814,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '50.13333',
			lon: '45.21667',
		},
		district: 'Южный',
		name: 'Петров Вал',
		population: 12526,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '51.28333',
			lon: '108.83333',
		},
		district: 'Сибирский',
		name: 'Петровск-Забайкальский',
		population: 15015,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '52.31667',
			lon: '45.38333',
		},
		district: 'Приволжский',
		name: 'Петровск',
		population: 26319,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '61.79611',
			lon: '34.34917',
		},
		district: 'Северо-Западный',
		name: 'Петрозаводск',
		population: 234897,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '53.01667',
			lon: '158.65',
		},
		district: 'Дальневосточный',
		name: 'Петропавловск-Камчатский',
		population: 164900,
		subject: 'Камчатский край',
	},
	{
		coords: {
			lat: '55.06667',
			lon: '67.88333',
		},
		district: 'Уральский',
		name: 'Петухово',
		population: 8502,
		subject: 'Курганская область',
	},
	{
		coords: {
			lat: '55.93333',
			lon: '39.46667',
		},
		district: 'Центральный',
		name: 'Петушки',
		population: 13317,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '65.11667',
			lon: '57.11667',
		},
		district: 'Северо-Западный',
		name: 'Печора',
		population: 35254,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '57.81667',
			lon: '27.6',
		},
		district: 'Северо-Западный',
		name: 'Печоры',
		population: 10247,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '59.512684',
			lon: '34.177483',
		},
		district: 'Северо-Западный',
		name: 'Пикалёво',
		population: 20388,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '54.95',
			lon: '20.21667',
		},
		district: 'Северо-Западный',
		name: 'Пионерский',
		population: 12794,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '61.56667',
			lon: '31.48333',
		},
		district: 'Северо-Западный',
		name: 'Питкяранта',
		population: 8340,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '53.7',
			lon: '37.3',
		},
		district: 'Центральный',
		name: 'Плавск',
		population: 16893,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '54.36667',
			lon: '60.81667',
		},
		district: 'Уральский',
		name: 'Пласт',
		population: 18379,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '57.45',
			lon: '41.5',
		},
		district: 'Центральный',
		name: 'Плёс',
		population: 1896,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '51.2',
			lon: '42.25',
		},
		district: 'Центральный',
		name: 'Поворино',
		population: 16417,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '55.42972',
			lon: '37.54444',
		},
		district: 'Центральный',
		name: 'Подольск',
		population: 314934,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '60.912097',
			lon: '34.167952',
		},
		district: 'Северо-Западный',
		name: 'Подпорожье',
		population: 16123,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '61.75',
			lon: '75.58333',
		},
		district: 'Уральский',
		name: 'Покачи',
		population: 16040,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '55.91778',
			lon: '39.175',
		},
		district: 'Центральный',
		name: 'Покров',
		population: 17747,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '61.48333',
			lon: '129.15',
		},
		district: 'Дальневосточный',
		name: 'Покровск',
		population: 12021,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '56.45',
			lon: '60.18333',
		},
		district: 'Уральский',
		name: 'Полевской',
		population: 55182,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '54.86667',
			lon: '21.1',
		},
		district: 'Северо-Западный',
		name: 'Полесск',
		population: 6926,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '54.6',
			lon: '86.28333',
		},
		district: 'Сибирский',
		name: 'Полысаево',
		population: 25631,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '67.36583',
			lon: '32.49806',
		},
		district: 'Северо-Западный',
		name: 'Полярные Зори',
		population: 14146,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '69.19833',
			lon: '33.45611',
		},
		district: 'Северо-Западный',
		name: 'Полярный',
		population: 12293,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '49.21667',
			lon: '143.1',
		},
		district: 'Дальневосточный',
		name: 'Поронайск',
		population: 16026,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '57.76667',
			lon: '29.55',
		},
		district: 'Северо-Западный',
		name: 'Порхов',
		population: 7309,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '53.65',
			lon: '52.13333',
		},
		district: 'Приволжский',
		name: 'Похвистнево',
		population: 27333,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '52.93333',
			lon: '33.45',
		},
		district: 'Центральный',
		name: 'Почеп',
		population: 14991,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '54.4',
			lon: '32.45',
		},
		district: 'Центральный',
		name: 'Починок',
		population: 7575,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '58.5',
			lon: '39.11667',
		},
		district: 'Центральный',
		name: 'Пошехонье',
		population: 5150,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '54.45',
			lon: '21.01667',
		},
		district: 'Северо-Западный',
		name: 'Правдинск',
		population: 3986,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '57.38333',
			lon: '41.28333',
		},
		district: 'Центральный',
		name: 'Приволжск',
		population: 14332,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '54.73333',
			lon: '20',
		},
		district: 'Северо-Западный',
		name: 'Приморск',
		population: 1436,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '60.366014',
			lon: '28.613561',
		},
		district: 'Северо-Западный',
		name: 'Приморск',
		population: 6537,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '46.05',
			lon: '38.18333',
		},
		district: 'Южный',
		name: 'Приморско-Ахтарск',
		population: 31087,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '61.035979',
			lon: '30.115589',
		},
		district: 'Северо-Западный',
		name: 'Приозерск',
		population: 18777,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '53.88333',
			lon: '86.71667',
		},
		district: 'Сибирский',
		name: 'Прокопьевск',
		population: 177819,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '46.70306',
			lon: '41.71917',
		},
		district: 'Южный',
		name: 'Пролетарск',
		population: 18983,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '54.87944',
			lon: '37.21389',
		},
		district: 'Центральный',
		name: 'Протвино',
		population: 37735,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '43.750055',
			lon: '44.033333',
		},
		district: 'Северо-Кавказский',
		name: 'Прохладный',
		population: 59938,
		subject: 'Кабардино-Балкария',
	},
	{
		coords: {
			lat: '57.81667',
			lon: '28.33333',
		},
		district: 'Северо-Западный',
		name: 'Псков',
		population: 193082,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '52.01667',
			lon: '48.8',
		},
		district: 'Приволжский',
		name: 'Пугачёв',
		population: 40127,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '61.8',
			lon: '36.53333',
		},
		district: 'Северо-Западный',
		name: 'Пудож',
		population: 7356,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '56.33333',
			lon: '29.36667',
		},
		district: 'Северо-Западный',
		name: 'Пустошка',
		population: 4070,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '56.98333',
			lon: '43.16667',
		},
		district: 'Центральный',
		name: 'Пучеж',
		population: 6879,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '59.71667',
			lon: '30.41667',
		},
		district: 'Северо-Западный',
		name: 'Пушкин',
		population: 107223,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '56.01667',
			lon: '37.85',
		},
		district: 'Центральный',
		name: 'Пушкино',
		population: 110868,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '54.83333',
			lon: '37.61667',
		},
		district: 'Центральный',
		name: 'Пущино',
		population: 19578,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '57.066666666667',
			lon: '27.916666666667',
		},
		district: 'Северо-Западный',
		name: 'Пыталово',
		population: 5263,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '60.75',
			lon: '72.78333',
		},
		district: 'Уральский',
		name: 'Пыть-Ях',
		population: 40180,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '44.0499664',
			lon: '43.0600548',
		},
		district: 'Северо-Кавказский',
		name: 'Пятигорск',
		population: 146473,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '55.99778',
			lon: '40.32972',
		},
		district: 'Центральный',
		name: 'Радужный',
		population: 17569,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '62.13333',
			lon: '77.46667',
		},
		district: 'Уральский',
		name: 'Радужный',
		population: 43577,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '49.8',
			lon: '129.4',
		},
		district: 'Дальневосточный',
		name: 'Райчихинск',
		population: 15797,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '55.56667',
			lon: '38.21667',
		},
		district: 'Центральный',
		name: 'Раменское',
		population: 114537,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '52.66667',
			lon: '41.88333',
		},
		district: 'Центральный',
		name: 'Рассказово',
		population: 47644,
		subject: 'Тамбовская область',
	},
	{
		coords: {
			lat: '56.8',
			lon: '59.91667',
		},
		district: 'Уральский',
		name: 'Ревда',
		population: 60200,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '57.36667',
			lon: '61.4',
		},
		district: 'Уральский',
		name: 'Реж',
		population: 36585,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '55.760611',
			lon: '37.855194',
		},
		district: 'Центральный',
		name: 'Реутов',
		population: 113871,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '56.26556',
			lon: '34.3275',
		},
		district: 'Центральный',
		name: 'Ржев',
		population: 55757,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '57.1',
			lon: '41.73333',
		},
		district: 'Центральный',
		name: 'Родники',
		population: 24101,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '53.949166666667',
			lon: '32.856944444444',
		},
		district: 'Центральный',
		name: 'Рославль',
		population: 45416,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '50.2',
			lon: '39.58333',
		},
		district: 'Центральный',
		name: 'Россошь',
		population: 60879,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '47.24056',
			lon: '39.71056',
		},
		district: 'Южный',
		name: 'Ростов-на-Дону',
		population: 1142162,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '57.18333',
			lon: '39.41667',
		},
		district: 'Центральный',
		name: 'Ростов',
		population: 28122,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '55.66361',
			lon: '39.865',
		},
		district: 'Центральный',
		name: 'Рошаль',
		population: 21401,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '52.25',
			lon: '43.78333',
		},
		district: 'Приволжский',
		name: 'Ртищево',
		population: 37850,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '51.52722',
			lon: '81.218806',
		},
		district: 'Сибирский',
		name: 'Рубцовск',
		population: 126834,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '54.95',
			lon: '31.06667',
		},
		district: 'Центральный',
		name: 'Рудня',
		population: 8908,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '55.698888888889',
			lon: '36.195277777778',
		},
		district: 'Центральный',
		name: 'Руза',
		population: 16014,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '54.06667',
			lon: '44.95',
		},
		district: 'Приволжский',
		name: 'Рузаевка',
		population: 42989,
		subject: 'Мордовия',
	},
	{
		coords: {
			lat: '58.05',
			lon: '38.83333',
		},
		district: 'Центральный',
		name: 'Рыбинск',
		population: 177295,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '54.73333',
			lon: '39.51667',
		},
		district: 'Центральный',
		name: 'Рыбное',
		population: 21069,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '51.56667',
			lon: '34.68333',
		},
		district: 'Центральный',
		name: 'Рыльск',
		population: 15069,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '53.71667',
			lon: '40.06667',
		},
		district: 'Центральный',
		name: 'Ряжск',
		population: 20634,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '54.61667',
			lon: '39.71667',
		},
		district: 'Центральный',
		name: 'Рязань',
		population: 528599,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '45.13361',
			lon: '33.57722',
		},
		district: 'Южный',
		name: 'Саки',
		population: 24285,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '53.36667',
			lon: '55.93333',
		},
		district: 'Приволжский',
		name: 'Салават',
		population: 148575,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '54.23333',
			lon: '85.8',
		},
		district: 'Сибирский',
		name: 'Салаир',
		population: 7088,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '66.53333',
			lon: '66.63333',
		},
		district: 'Уральский',
		name: 'Салехард',
		population: 47910,
		subject: 'Ямало-Ненецкий АО',
	},
	{
		coords: {
			lat: '46.48333',
			lon: '41.53333',
		},
		district: 'Южный',
		name: 'Сальск',
		population: 57937,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '53.18333',
			lon: '50.11667',
		},
		district: 'Приволжский',
		name: 'Самара',
		population: 1173299,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '59.95',
			lon: '30.31667',
		},
		district: 'Северо-Западный',
		name: 'Санкт-Петербург',
		population: 5601911,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '54.18333',
			lon: '45.18333',
		},
		district: 'Приволжский',
		name: 'Саранск',
		population: 314871,
		subject: 'Мордовия',
	},
	{
		coords: {
			lat: '56.46667',
			lon: '53.8',
		},
		district: 'Приволжский',
		name: 'Сарапул',
		population: 91115,
		subject: 'Удмуртия',
	},
	{
		coords: {
			lat: '51.53333',
			lon: '46',
		},
		district: 'Приволжский',
		name: 'Саратов',
		population: 901361,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '54.93333',
			lon: '43.31667',
		},
		district: 'Приволжский',
		name: 'Саров',
		population: 93357,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '54.35',
			lon: '41.91667',
		},
		district: 'Центральный',
		name: 'Сасово',
		population: 21628,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '55.05',
			lon: '59.05',
		},
		district: 'Уральский',
		name: 'Сатка',
		population: 42597,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '55.1',
			lon: '33.25',
		},
		district: 'Центральный',
		name: 'Сафоново',
		population: 38403,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '53.1',
			lon: '91.4',
		},
		district: 'Сибирский',
		name: 'Саяногорск',
		population: 44872,
		subject: 'Хакасия',
	},
	{
		coords: {
			lat: '54.11667',
			lon: '102.16667',
		},
		district: 'Сибирский',
		name: 'Саянск',
		population: 35561,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '54.9394',
			lon: '20.1565',
		},
		district: 'Северо-Западный',
		name: 'Светлогорск',
		population: 16207,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '45.33083',
			lon: '42.85111',
		},
		district: 'Северо-Кавказский',
		name: 'Светлоград',
		population: 35703,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '54.68333',
			lon: '20.13333',
		},
		district: 'Северо-Западный',
		name: 'Светлый',
		population: 21114,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '61.10833',
			lon: '28.85833',
		},
		district: 'Северо-Западный',
		name: 'Светогорск',
		population: 13784,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '53.08333',
			lon: '103.33333',
		},
		district: 'Сибирский',
		name: 'Свирск',
		population: 15485,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '51.38333',
			lon: '128.13333',
		},
		district: 'Дальневосточный',
		name: 'Свободный',
		population: 48517,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '56.28333',
			lon: '28.48333',
		},
		district: 'Северо-Западный',
		name: 'Себеж',
		population: 6246,
		subject: 'Псковская область',
	},
	{
		coords: {
			lat: '44.6',
			lon: '33.53333',
		},
		district: 'Южный',
		name: 'Севастополь',
		population: 547820,
		subject: 'Севастополь',
	},
	{
		coords: {
			lat: '50.66667',
			lon: '156.11667',
		},
		district: 'Дальневосточный',
		name: 'Северо-Курильск',
		population: 2374,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '55.63333',
			lon: '109.31667',
		},
		district: 'Сибирский',
		name: 'Северобайкальск',
		population: 24233,
		subject: 'Бурятия',
	},
	{
		coords: {
			lat: '64.56667',
			lon: '39.85',
		},
		district: 'Северо-Западный',
		name: 'Северодвинск',
		population: 157213,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '69.06917',
			lon: '33.41667',
		},
		district: 'Северо-Западный',
		name: 'Североморск',
		population: 43327,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '60.15',
			lon: '59.93333',
		},
		district: 'Уральский',
		name: 'Североуральск',
		population: 24428,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '56.6',
			lon: '84.85',
		},
		district: 'Сибирский',
		name: 'Северск',
		population: 106648,
		subject: 'Томская область',
	},
	{
		coords: {
			lat: '52.15',
			lon: '34.49389',
		},
		district: 'Центральный',
		name: 'Севск',
		population: 6732,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '63.73333',
			lon: '34.31667',
		},
		district: 'Северо-Западный',
		name: 'Сегежа',
		population: 23543,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '53.36944',
			lon: '34.1',
		},
		district: 'Центральный',
		name: 'Сельцо',
		population: 15906,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '47.51667',
			lon: '40.8',
		},
		district: 'Южный',
		name: 'Семикаракорск',
		population: 21719,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '51.68333',
			lon: '39.03333',
		},
		district: 'Центральный',
		name: 'Семилуки',
		population: 27938,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '56.78944',
			lon: '44.49056',
		},
		district: 'Приволжский',
		name: 'Семёнов',
		population: 25075,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '53.96667',
			lon: '48.8',
		},
		district: 'Приволжский',
		name: 'Сенгилей',
		population: 6407,
		subject: 'Ульяновская область',
	},
	{
		coords: {
			lat: '49.58333',
			lon: '42.73333',
		},
		district: 'Южный',
		name: 'Серафимович',
		population: 8633,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '55.53333',
			lon: '45.46667',
		},
		district: 'Приволжский',
		name: 'Сергач',
		population: 20256,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '56.3',
			lon: '38.13333',
		},
		district: 'Центральный',
		name: 'Сергиев Посад',
		population: 101756,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '52.46667',
			lon: '44.21667',
		},
		district: 'Приволжский',
		name: 'Сердобск',
		population: 30220,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '59.58333',
			lon: '60.56667',
		},
		district: 'Уральский',
		name: 'Серов',
		population: 94211,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '54.91667',
			lon: '37.4',
		},
		district: 'Центральный',
		name: 'Серпухов',
		population: 133793,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '60.141613',
			lon: '30.211879',
		},
		district: 'Северо-Западный',
		name: 'Сертолово',
		population: 68241,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '60.1',
			lon: '29.96667',
		},
		district: 'Северо-Западный',
		name: 'Сестрорецк',
		population: 45192,
		subject: 'Санкт-Петербург',
	},
	{
		coords: {
			lat: '52.7',
			lon: '58.65',
		},
		district: 'Приволжский',
		name: 'Сибай',
		population: 56514,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '54.98333',
			lon: '57.68333',
		},
		district: 'Уральский',
		name: 'Сим',
		population: 12858,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '44.94806',
			lon: '34.10417',
		},
		district: 'Южный',
		name: 'Симферополь',
		population: 340540,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '53.98333',
			lon: '123.93333',
		},
		district: 'Дальневосточный',
		name: 'Сковородино',
		population: 7057,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '53.81667',
			lon: '39.55',
		},
		district: 'Центральный',
		name: 'Скопин',
		population: 25238,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '53',
			lon: '78.65',
		},
		district: 'Сибирский',
		name: 'Славгород',
		population: 27900,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '55.05',
			lon: '21.66667',
		},
		district: 'Северо-Западный',
		name: 'Славск',
		population: 4153,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '45.25861',
			lon: '38.12472',
		},
		district: 'Южный',
		name: 'Славянск-на-Кубани',
		population: 62985,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '59.11779',
			lon: '28.088145',
		},
		district: 'Северо-Западный',
		name: 'Сланцы',
		population: 34628,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '58.724167',
			lon: '50.161167',
		},
		district: 'Приволжский',
		name: 'Слободской',
		population: 29148,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '51.66667',
			lon: '103.7',
		},
		district: 'Сибирский',
		name: 'Слюдянка',
		population: 18058,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '54.78278',
			lon: '32.04528',
		},
		district: 'Центральный',
		name: 'Смоленск',
		population: 316570,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '56.08333',
			lon: '60.73333',
		},
		district: 'Уральский',
		name: 'Снежинск',
		population: 50619,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '69.19417',
			lon: '33.23306',
		},
		district: 'Северо-Западный',
		name: 'Снежногорск',
		population: 9942,
		subject: 'Мурманская область',
	},
	{
		coords: {
			lat: '55.99',
			lon: '40.01667',
		},
		district: 'Центральный',
		name: 'Собинка',
		population: 17444,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '55.08333',
			lon: '21.88333',
		},
		district: 'Северо-Западный',
		name: 'Советск',
		population: 38910,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '57.601306',
			lon: '48.938611',
		},
		district: 'Приволжский',
		name: 'Советск',
		population: 14626,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '53.93333',
			lon: '37.63333',
		},
		district: 'Центральный',
		name: 'Советск',
		population: 7889,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '48.966373',
			lon: '140.285189',
		},
		district: 'Дальневосточный',
		name: 'Советская Гавань',
		population: 24231,
		subject: 'Хабаровский край',
	},
	{
		coords: {
			lat: '61.36667',
			lon: '63.56667',
		},
		district: 'Уральский',
		name: 'Советский',
		population: 31138,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '59.46667',
			lon: '40.11667',
		},
		district: 'Северо-Западный',
		name: 'Сокол',
		population: 34742,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '59.08333',
			lon: '42.28333',
		},
		district: 'Центральный',
		name: 'Солигалич',
		population: 5534,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '59.63333',
			lon: '56.76667',
		},
		district: 'Приволжский',
		name: 'Соликамск',
		population: 89473,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '56.185114',
			lon: '36.977618',
		},
		district: 'Центральный',
		name: 'Солнечногорск',
		population: 48413,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '51.16667',
			lon: '54.98333',
		},
		district: 'Приволжский',
		name: 'Соль-Илецк',
		population: 26149,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '61.33333',
			lon: '46.91667',
		},
		district: 'Северо-Западный',
		name: 'Сольвычегодск',
		population: 1952,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '58.11667',
			lon: '30.31667',
		},
		district: 'Северо-Западный',
		name: 'Сольцы',
		population: 8449,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '52.43333',
			lon: '53.15',
		},
		district: 'Приволжский',
		name: 'Сорочинск',
		population: 28478,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '54',
			lon: '90.25',
		},
		district: 'Сибирский',
		name: 'Сорск',
		population: 10124,
		subject: 'Хакасия',
	},
	{
		coords: {
			lat: '61.7',
			lon: '30.66667',
		},
		district: 'Северо-Западный',
		name: 'Сортавала',
		population: 14867,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '54.05',
			lon: '35.96667',
		},
		district: 'Центральный',
		name: 'Сосенский',
		population: 11413,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '56.2543',
			lon: '51.2812',
		},
		district: 'Приволжский',
		name: 'Сосновка',
		population: 8428,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '56.13333',
			lon: '93.36667',
		},
		district: 'Сибирский',
		name: 'Сосновоборск',
		population: 40442,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '59.9',
			lon: '29.08611',
		},
		district: 'Северо-Западный',
		name: 'Сосновый Бор',
		population: 65367,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '63.58333',
			lon: '53.93333',
		},
		district: 'Северо-Западный',
		name: 'Сосногорск',
		population: 22189,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '43.58528',
			lon: '39.72028',
		},
		district: 'Южный',
		name: 'Сочи',
		population: 466078,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '54.409808',
			lon: '34.018992',
		},
		district: 'Центральный',
		name: 'Спас-Деменск',
		population: 4569,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '55.13333',
			lon: '40.16667',
		},
		district: 'Центральный',
		name: 'Спас-Клепики',
		population: 4743,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '44.6',
			lon: '132.81667',
		},
		district: 'Дальневосточный',
		name: 'Спасск-Дальний',
		population: 35732,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '54.4',
			lon: '40.38333',
		},
		district: 'Центральный',
		name: 'Спасск-Рязанский',
		population: 5796,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '53.93333',
			lon: '43.18333',
		},
		district: 'Приволжский',
		name: 'Спасск',
		population: 6936,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '67.458',
			lon: '153.706',
		},
		district: 'Дальневосточный',
		name: 'Среднеколымск',
		population: 3131,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '56.98333',
			lon: '60.46667',
		},
		district: 'Уральский',
		name: 'Среднеуральск',
		population: 23344,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '52.25',
			lon: '117.71667',
		},
		district: 'Сибирский',
		name: 'Сретенск',
		population: 6093,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '45.03333',
			lon: '41.96667',
		},
		district: 'Северо-Кавказский',
		name: 'Ставрополь',
		population: 547443,
		subject: 'Ставропольский край',
	},
	{
		coords: {
			lat: '55.8',
			lon: '38.18333',
		},
		district: 'Центральный',
		name: 'Старая Купавна',
		population: 22898,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '57.98333',
			lon: '31.35',
		},
		district: 'Северо-Западный',
		name: 'Старая Русса',
		population: 27487,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '56.51667',
			lon: '34.93333',
		},
		district: 'Центральный',
		name: 'Старица',
		population: 6938,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '52.58333',
			lon: '32.76667',
		},
		district: 'Центральный',
		name: 'Стародуб',
		population: 17687,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '45.02917',
			lon: '35.08861',
		},
		district: 'Южный',
		name: 'Старый Крым',
		population: 10470,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '51.29806',
			lon: '37.835',
		},
		district: 'Центральный',
		name: 'Старый Оскол',
		population: 221676,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '53.63333',
			lon: '55.95',
		},
		district: 'Приволжский',
		name: 'Стерлитамак',
		population: 277410,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '60.73333',
			lon: '77.58333',
		},
		district: 'Сибирский',
		name: 'Стрежевой',
		population: 39169,
		subject: 'Томская область',
	},
	{
		coords: {
			lat: '50.78333',
			lon: '36.48333',
		},
		district: 'Центральный',
		name: 'Строитель',
		population: 23780,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '56.37333',
			lon: '38.585',
		},
		district: 'Центральный',
		name: 'Струнино',
		population: 11774,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '54.88694',
			lon: '38.07722',
		},
		district: 'Центральный',
		name: 'Ступино',
		population: 64412,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '54.11667',
			lon: '36.5',
		},
		district: 'Центральный',
		name: 'Суворов',
		population: 17598,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '44.85139',
			lon: '34.9725',
		},
		district: 'Южный',
		name: 'Судак',
		population: 17834,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '51.190694',
			lon: '35.27083',
		},
		district: 'Центральный',
		name: 'Суджа',
		population: 5127,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '55.95',
			lon: '40.86667',
		},
		district: 'Центральный',
		name: 'Судогда',
		population: 10408,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '56.42111',
			lon: '40.44889',
		},
		district: 'Центральный',
		name: 'Суздаль',
		population: 9286,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '43.313475',
			lon: '45.051581',
		},
		district: 'Северо-Кавказский',
		name: 'Сунжа',
		population: 62078,
		subject: 'Ингушетия',
	},
	{
		coords: {
			lat: '62.08333',
			lon: '32.36667',
		},
		district: 'Северо-Западный',
		name: 'Суоярви',
		population: 7190,
		subject: 'Карелия',
	},
	{
		coords: {
			lat: '53.01667',
			lon: '32.4',
		},
		district: 'Центральный',
		name: 'Сураж',
		population: 11176,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '61.25',
			lon: '73.43333',
		},
		district: 'Уральский',
		name: 'Сургут',
		population: 396443,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '48.6',
			lon: '42.85',
		},
		district: 'Южный',
		name: 'Суровикино',
		population: 18227,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '53.08333',
			lon: '45.7',
		},
		district: 'Приволжский',
		name: 'Сурск',
		population: 6034,
		subject: 'Пензенская область',
	},
	{
		coords: {
			lat: '62.78333',
			lon: '148.15',
		},
		district: 'Дальневосточный',
		name: 'Сусуман',
		population: 4439,
		subject: 'Магаданская область',
	},
	{
		coords: {
			lat: '54.1',
			lon: '35.35',
		},
		district: 'Центральный',
		name: 'Сухиничи',
		population: 14806,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '56.90583',
			lon: '62.03417',
		},
		district: 'Уральский',
		name: 'Сухой Лог',
		population: 32748,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '53.16667',
			lon: '48.46667',
		},
		district: 'Приволжский',
		name: 'Сызрань',
		population: 165725,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '61.66667',
			lon: '50.81667',
		},
		district: 'Северо-Западный',
		name: 'Сыктывкар',
		population: 220580,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '56.5',
			lon: '60.81667',
		},
		district: 'Уральский',
		name: 'Сысерть',
		population: 20634,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '55.83333',
			lon: '34.28333',
		},
		district: 'Центральный',
		name: 'Сычёвка',
		population: 7544,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '60.137057',
			lon: '32.561279',
		},
		district: 'Северо-Западный',
		name: 'Сясьстрой',
		population: 12566,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '58.05',
			lon: '65.26667',
		},
		district: 'Уральский',
		name: 'Тавда',
		population: 32749,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '47.23917',
			lon: '38.88333',
		},
		district: 'Южный',
		name: 'Таганрог',
		population: 245120,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '56.06667',
			lon: '85.61667',
		},
		district: 'Сибирский',
		name: 'Тайга',
		population: 22375,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '55.93333',
			lon: '98.01667',
		},
		district: 'Сибирский',
		name: 'Тайшет',
		population: 34491,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '56.73333',
			lon: '37.53333',
		},
		district: 'Центральный',
		name: 'Талдом',
		population: 17317,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '57.0125',
			lon: '63.72917',
		},
		district: 'Уральский',
		name: 'Талица',
		population: 14808,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '52.71667',
			lon: '41.43333',
		},
		district: 'Центральный',
		name: 'Тамбов',
		population: 261803,
		subject: 'Тамбовская область',
	},
	{
		coords: {
			lat: '56.902383',
			lon: '74.37079',
		},
		district: 'Сибирский',
		name: 'Тара',
		population: 26878,
		subject: 'Омская область',
	},
	{
		coords: {
			lat: '64.91472',
			lon: '77.77278',
		},
		district: 'Уральский',
		name: 'Тарко-Сале',
		population: 19900,
		subject: 'Ямало-Ненецкий АО',
	},
	{
		coords: {
			lat: '54.71667',
			lon: '37.18333',
		},
		district: 'Центральный',
		name: 'Таруса',
		population: 9918,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '55.21667',
			lon: '75.96667',
		},
		district: 'Сибирский',
		name: 'Татарск',
		population: 23711,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '52.76667',
			lon: '87.86667',
		},
		district: 'Сибирский',
		name: 'Таштагол',
		population: 21980,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '56.8578278',
			lon: '35.9219278',
		},
		district: 'Центральный',
		name: 'Тверь',
		population: 416219,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '43.449437',
			lon: '41.74382',
		},
		district: 'Северо-Кавказский',
		name: 'Теберда',
		population: 9020,
		subject: 'Карачаево-Черкесия',
	},
	{
		coords: {
			lat: '56.85',
			lon: '40.55',
		},
		district: 'Центральный',
		name: 'Тейково',
		population: 31305,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '54.63333',
			lon: '43.21667',
		},
		district: 'Приволжский',
		name: 'Темников',
		population: 6451,
		subject: 'Мордовия',
	},
	{
		coords: {
			lat: '45.26667',
			lon: '37.38333',
		},
		district: 'Южный',
		name: 'Темрюк',
		population: 41608,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '43.483317',
			lon: '44.138871',
		},
		district: 'Северо-Кавказский',
		name: 'Терек',
		population: 19948,
		subject: 'Кабардино-Балкария',
	},
	{
		coords: {
			lat: '54.93333',
			lon: '48.83333',
		},
		district: 'Приволжский',
		name: 'Тетюши',
		population: 10535,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '45.61667',
			lon: '38.93333',
		},
		district: 'Южный',
		name: 'Тимашёвск',
		population: 51858,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '59.644213',
			lon: '33.542105',
		},
		district: 'Северо-Западный',
		name: 'Тихвин',
		population: 55415,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '45.85',
			lon: '40.11667',
		},
		district: 'Южный',
		name: 'Тихорецк',
		population: 55686,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '58.19528',
			lon: '68.25806',
		},
		district: 'Уральский',
		name: 'Тобольск',
		population: 100352,
		subject: 'Тюменская область',
	},
	{
		coords: {
			lat: '55.23333',
			lon: '84.38333',
		},
		district: 'Сибирский',
		name: 'Тогучин',
		population: 20766,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '53.516666666667',
			lon: '49.416666666667',
		},
		district: 'Приволжский',
		name: 'Тольятти',
		population: 684709,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '47.76667',
			lon: '142.06667',
		},
		district: 'Дальневосточный',
		name: 'Томари',
		population: 4313,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '58.96667',
			lon: '126.26667',
		},
		district: 'Дальневосточный',
		name: 'Томмот',
		population: 6440,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '56.48861',
			lon: '84.95222',
		},
		district: 'Сибирский',
		name: 'Томск',
		population: 556478,
		subject: 'Томская область',
	},
	{
		coords: {
			lat: '55.28333',
			lon: '85.61667',
		},
		district: 'Сибирский',
		name: 'Топки',
		population: 27158,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '57.03333',
			lon: '34.96667',
		},
		district: 'Центральный',
		name: 'Торжок',
		population: 41116,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '56.5',
			lon: '31.63333',
		},
		district: 'Центральный',
		name: 'Торопец',
		population: 11441,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '59.541179',
			lon: '30.875006',
		},
		district: 'Северо-Западный',
		name: 'Тосно',
		population: 34066,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '59.98333',
			lon: '42.76667',
		},
		district: 'Северо-Западный',
		name: 'Тотьма',
		population: 8669,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '55.467',
			lon: '37.3',
		},
		district: 'Центральный',
		name: 'Троицк',
		population: 65043,
		subject: 'Москва',
	},
	{
		coords: {
			lat: '54.08333',
			lon: '61.56667',
		},
		district: 'Уральский',
		name: 'Троицк',
		population: 70301,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '52.58333',
			lon: '33.76667',
		},
		district: 'Центральный',
		name: 'Трубчевск',
		population: 13287,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '54.8',
			lon: '58.45',
		},
		district: 'Уральский',
		name: 'Трёхгорный',
		population: 32463,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '44.100016',
			lon: '39.083223',
		},
		district: 'Южный',
		name: 'Туапсе',
		population: 61571,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '54.6',
			lon: '53.7',
		},
		district: 'Приволжский',
		name: 'Туймазы',
		population: 68349,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '54.2',
			lon: '37.61667',
		},
		district: 'Центральный',
		name: 'Тула',
		population: 473622,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '54.56667',
			lon: '100.56667',
		},
		district: 'Сибирский',
		name: 'Тулун',
		population: 38440,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '52.1446',
			lon: '93.9181',
		},
		district: 'Сибирский',
		name: 'Туран',
		population: 5044,
		subject: 'Тыва',
	},
	{
		coords: {
			lat: '58.03333',
			lon: '63.7',
		},
		district: 'Уральский',
		name: 'Туринск',
		population: 16561,
		subject: 'Свердловская область',
	},
	{
		coords: {
			lat: '57.88333',
			lon: '39.53333',
		},
		district: 'Центральный',
		name: 'Тутаев',
		population: 39643,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '55.15',
			lon: '124.71667',
		},
		district: 'Дальневосточный',
		name: 'Тында',
		population: 28625,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '43.3892665',
			lon: '42.9189065',
		},
		district: 'Северо-Кавказский',
		name: 'Тырныауз',
		population: 22056,
		subject: 'Кабардино-Балкария',
	},
	{
		coords: {
			lat: '55.86667',
			lon: '72.2',
		},
		district: 'Сибирский',
		name: 'Тюкалинск',
		population: 9894,
		subject: 'Омская область',
	},
	{
		coords: {
			lat: '57.15',
			lon: '65.53333',
		},
		district: 'Уральский',
		name: 'Тюмень',
		population: 847488,
		subject: 'Тюменская область',
	},
	{
		coords: {
			lat: '51.98333',
			lon: '42.26667',
		},
		district: 'Центральный',
		name: 'Уварово',
		population: 23584,
		subject: 'Тамбовская область',
	},
	{
		coords: {
			lat: '49.06667',
			lon: '142.03333',
		},
		district: 'Дальневосточный',
		name: 'Углегорск',
		population: 8041,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '57.53333',
			lon: '38.33333',
		},
		district: 'Центральный',
		name: 'Углич',
		population: 32719,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '66.4',
			lon: '112.3',
		},
		district: 'Дальневосточный',
		name: 'Удачный',
		population: 12930,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '57.88333',
			lon: '35.01667',
		},
		district: 'Центральный',
		name: 'Удомля',
		population: 25950,
		subject: 'Тверская область',
	},
	{
		coords: {
			lat: '55.31667',
			lon: '89.81667',
		},
		district: 'Сибирский',
		name: 'Ужур',
		population: 14134,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '53.9791417',
			lon: '38.1600833',
		},
		district: 'Центральный',
		name: 'Узловая',
		population: 49427,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '51.83333',
			lon: '107.61667',
		},
		district: 'Сибирский',
		name: 'Улан-Удэ',
		population: 437565,
		subject: 'Бурятия',
	},
	{
		coords: {
			lat: '54.316666666667',
			lon: '48.366666666667',
		},
		district: 'Приволжский',
		name: 'Ульяновск',
		population: 617352,
		subject: 'Ульяновская область',
	},
	{
		coords: {
			lat: '52.85',
			lon: '32.68333',
		},
		district: 'Центральный',
		name: 'Унеча',
		population: 24274,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '60.13333',
			lon: '64.78333',
		},
		district: 'Уральский',
		name: 'Урай',
		population: 41315,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '57.46667',
			lon: '45.78333',
		},
		district: 'Приволжский',
		name: 'Урень',
		population: 12450,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '57.11667',
			lon: '50',
		},
		district: 'Приволжский',
		name: 'Уржум',
		population: 8448,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '43.129123',
			lon: '45.54167',
		},
		district: 'Северо-Кавказский',
		name: 'Урус-Мартан',
		population: 63449,
		subject: 'Чечня',
	},
	{
		coords: {
			lat: '50.8',
			lon: '42.01667',
		},
		district: 'Южный',
		name: 'Урюпинск',
		population: 36669,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '65.995028',
			lon: '57.557139',
		},
		district: 'Северо-Западный',
		name: 'Усинск',
		population: 32182,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '52.05',
			lon: '39.73333',
		},
		district: 'Центральный',
		name: 'Усмань',
		population: 19662,
		subject: 'Липецкая область',
	},
	{
		coords: {
			lat: '52.75',
			lon: '103.65',
		},
		district: 'Сибирский',
		name: 'Усолье-Сибирское',
		population: 74762,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '59.41667',
			lon: '56.68333',
		},
		district: 'Приволжский',
		name: 'Усолье',
		population: 6619,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '43.8',
			lon: '131.95',
		},
		district: 'Дальневосточный',
		name: 'Уссурийск',
		population: 180393,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '44.08611',
			lon: '41.97194',
		},
		district: 'Северо-Кавказский',
		name: 'Усть-Джегута',
		population: 31137,
		subject: 'Карачаево-Черкесия',
	},
	{
		coords: {
			lat: '58',
			lon: '102.66667',
		},
		district: 'Сибирский',
		name: 'Усть-Илимск',
		population: 79570,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '54.93333',
			lon: '58.16667',
		},
		district: 'Уральский',
		name: 'Усть-Катав',
		population: 21439,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '56.8',
			lon: '105.83333',
		},
		district: 'Сибирский',
		name: 'Усть-Кут',
		population: 36918,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '45.21528',
			lon: '39.68944',
		},
		district: 'Южный',
		name: 'Усть-Лабинск',
		population: 40158,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '58.83333',
			lon: '36.43333',
		},
		district: 'Северо-Западный',
		name: 'Устюжна',
		population: 7843,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '54.73333',
			lon: '55.96667',
		},
		district: 'Приволжский',
		name: 'Уфа',
		population: 1144809,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '63.56667',
			lon: '53.7',
		},
		district: 'Северо-Западный',
		name: 'Ухта',
		population: 79899,
		subject: 'Коми',
	},
	{
		coords: {
			lat: '54.31667',
			lon: '59.38333',
		},
		district: 'Приволжский',
		name: 'Учалы',
		population: 36175,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '55.81667',
			lon: '94.31667',
		},
		district: 'Сибирский',
		name: 'Уяр',
		population: 12036,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '52.08944',
			lon: '35.85889',
		},
		district: 'Центральный',
		name: 'Фатеж',
		population: 4691,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '45.04889',
			lon: '35.37917',
		},
		district: 'Южный',
		name: 'Феодосия',
		population: 66293,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '53.45',
			lon: '34.41667',
		},
		district: 'Центральный',
		name: 'Фокино',
		population: 12538,
		subject: 'Брянская область',
	},
	{
		coords: {
			lat: '42.96667',
			lon: '132.4',
		},
		district: 'Дальневосточный',
		name: 'Фокино',
		population: 19711,
		subject: 'Приморский край',
	},
	{
		coords: {
			lat: '49.76667',
			lon: '43.65',
		},
		district: 'Южный',
		name: 'Фролово',
		population: 35661,
		subject: 'Волгоградская область',
	},
	{
		coords: {
			lat: '55.95',
			lon: '38.05',
		},
		district: 'Центральный',
		name: 'Фрязино',
		population: 60580,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '57.25',
			lon: '41.1',
		},
		district: 'Центральный',
		name: 'Фурманов',
		population: 29715,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '48.48333',
			lon: '135.06667',
		},
		district: 'Дальневосточный',
		name: 'Хабаровск',
		population: 617441,
		subject: 'Хабаровский край',
	},
	{
		coords: {
			lat: '44.42389',
			lon: '39.53722',
		},
		district: 'Южный',
		name: 'Хадыженск',
		population: 22094,
		subject: 'Краснодарский край',
	},
	{
		coords: {
			lat: '61',
			lon: '69',
		},
		district: 'Уральский',
		name: 'Ханты-Мансийск',
		population: 107473,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '47.4',
			lon: '47.25',
		},
		district: 'Южный',
		name: 'Харабали',
		population: 18514,
		subject: 'Астраханская область',
	},
	{
		coords: {
			lat: '59.95',
			lon: '40.2',
		},
		district: 'Северо-Западный',
		name: 'Харовск',
		population: 8389,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '43.249937',
			lon: '46.583247',
		},
		district: 'Северо-Кавказский',
		name: 'Хасавюрт',
		population: 155144,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '52.48333',
			lon: '48.1',
		},
		district: 'Приволжский',
		name: 'Хвалынск',
		population: 12042,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '51.35',
			lon: '110.45',
		},
		district: 'Сибирский',
		name: 'Хилок',
		population: 9948,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '55.88917',
			lon: '37.445',
		},
		district: 'Центральный',
		name: 'Химки',
		population: 257128,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '57.15',
			lon: '31.18333',
		},
		district: 'Северо-Западный',
		name: 'Холм',
		population: 3214,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '47.04028',
			lon: '142.04306',
		},
		district: 'Дальневосточный',
		name: 'Холмск',
		population: 25677,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '56.25',
			lon: '37.98333',
		},
		district: 'Центральный',
		name: 'Хотьково',
		population: 20466,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '55.86667',
			lon: '47.48333',
		},
		district: 'Приволжский',
		name: 'Цивильск',
		population: 12762,
		subject: 'Чувашия',
	},
	{
		coords: {
			lat: '47.64667',
			lon: '42.09472',
		},
		district: 'Южный',
		name: 'Цимлянск',
		population: 14731,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '51.7602528',
			lon: '128.121175',
		},
		district: 'Дальневосточный',
		name: 'Циолковский',
		population: 7194,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '51.28333',
			lon: '91.56667',
		},
		district: 'Сибирский',
		name: 'Чадан',
		population: 9732,
		subject: 'Тыва',
	},
	{
		coords: {
			lat: '56.773291',
			lon: '54.140386',
		},
		district: 'Приволжский',
		name: 'Чайковский',
		population: 75837,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '52.98333',
			lon: '49.71667',
		},
		district: 'Приволжский',
		name: 'Чапаевск',
		population: 70228,
		subject: 'Самарская область',
	},
	{
		coords: {
			lat: '53.24167',
			lon: '39.96667',
		},
		district: 'Центральный',
		name: 'Чаплыгин',
		population: 11579,
		subject: 'Липецкая область',
	},
	{
		coords: {
			lat: '54.97778',
			lon: '60.37',
		},
		district: 'Уральский',
		name: 'Чебаркуль',
		population: 44693,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '56.11667',
			lon: '47.23333',
		},
		district: 'Приволжский',
		name: 'Чебоксары',
		population: 497807,
		subject: 'Чувашия',
	},
	{
		coords: {
			lat: '43.566657',
			lon: '43.583325',
		},
		district: 'Северо-Кавказский',
		name: 'Чегем',
		population: 20736,
		subject: 'Кабардино-Балкария',
	},
	{
		coords: {
			lat: '54.1',
			lon: '36.25',
		},
		district: 'Центральный',
		name: 'Чекалин',
		population: 935,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '55.15',
			lon: '61.4',
		},
		district: 'Уральский',
		name: 'Челябинск',
		population: 1189525,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '60.4',
			lon: '56.48333',
		},
		district: 'Приволжский',
		name: 'Чердынь',
		population: 4590,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '53.15',
			lon: '103.06667',
		},
		district: 'Сибирский',
		name: 'Черемхово',
		population: 53958,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '54.21667',
			lon: '83.36667',
		},
		district: 'Сибирский',
		name: 'Черепаново',
		population: 19900,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '59.11667',
			lon: '37.9',
		},
		district: 'Северо-Западный',
		name: 'Череповец',
		population: 305185,
		subject: 'Вологодская область',
	},
	{
		coords: {
			lat: '44.213888',
			lon: '42.04431',
		},
		district: 'Северо-Кавказский',
		name: 'Черкесск',
		population: 113226,
		subject: 'Карачаево-Черкесия',
	},
	{
		coords: {
			lat: '56.01472',
			lon: '38.38972',
		},
		district: 'Центральный',
		name: 'Черноголовка',
		population: 19530,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '53.81667',
			lon: '91.28333',
		},
		district: 'Сибирский',
		name: 'Черногорск',
		population: 75745,
		subject: 'Хакасия',
	},
	{
		coords: {
			lat: '56.5',
			lon: '56.08333',
		},
		district: 'Приволжский',
		name: 'Чернушка',
		population: 32991,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '54.63333',
			lon: '21.81667',
		},
		district: 'Северо-Западный',
		name: 'Черняховск',
		population: 36128,
		subject: 'Калининградская область',
	},
	{
		coords: {
			lat: '55.145',
			lon: '37.45556',
		},
		district: 'Центральный',
		name: 'Чехов',
		population: 89025,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '55.36667',
			lon: '50.63333',
		},
		district: 'Приволжский',
		name: 'Чистополь',
		population: 58815,
		subject: 'Татарстан',
	},
	{
		coords: {
			lat: '52.03333',
			lon: '113.5',
		},
		district: 'Сибирский',
		name: 'Чита',
		population: 334427,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '56.76667',
			lon: '43.25',
		},
		district: 'Приволжский',
		name: 'Чкаловск',
		population: 11535,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '59.12806',
			lon: '31.65917',
		},
		district: 'Северо-Западный',
		name: 'Чудово',
		population: 14302,
		subject: 'Новгородская область',
	},
	{
		coords: {
			lat: '55.1',
			lon: '80.96667',
		},
		district: 'Сибирский',
		name: 'Чулым',
		population: 11034,
		subject: 'Новосибирская область',
	},
	{
		coords: {
			lat: '58.28333',
			lon: '57.81667',
		},
		district: 'Приволжский',
		name: 'Чусовой',
		population: 45471,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '58.75',
			lon: '42.7',
		},
		district: 'Центральный',
		name: 'Чухлома',
		population: 4252,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '58.78333',
			lon: '56.15',
		},
		district: 'Приволжский',
		name: 'Чёрмоз',
		population: 3044,
		subject: 'Пермский край',
	},
	{
		coords: {
			lat: '51.53333',
			lon: '92.9',
		},
		district: 'Сибирский',
		name: 'Шагонар',
		population: 11772,
		subject: 'Тыва',
	},
	{
		coords: {
			lat: '56.08333',
			lon: '63.63333',
		},
		district: 'Уральский',
		name: 'Шадринск',
		population: 68609,
		subject: 'Курганская область',
	},
	{
		coords: {
			lat: '43.145',
			lon: '45.903847',
		},
		district: 'Северо-Кавказский',
		name: 'Шали',
		population: 55054,
		subject: 'Чечня',
	},
	{
		coords: {
			lat: '55.525',
			lon: '89.2',
		},
		district: 'Сибирский',
		name: 'Шарыпово',
		population: 33961,
		subject: 'Красноярский край',
	},
	{
		coords: {
			lat: '58.36667',
			lon: '45.5',
		},
		district: 'Центральный',
		name: 'Шарья',
		population: 20439,
		subject: 'Костромская область',
	},
	{
		coords: {
			lat: '55.5776722',
			lon: '39.5446333',
		},
		district: 'Центральный',
		name: 'Шатура',
		population: 38230,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '47.7122111',
			lon: '40.2083694',
		},
		district: 'Южный',
		name: 'Шахты',
		population: 226452,
		subject: 'Ростовская область',
	},
	{
		coords: {
			lat: '57.67472',
			lon: '46.62083',
		},
		district: 'Приволжский',
		name: 'Шахунья',
		population: 17626,
		subject: 'Нижегородская область',
	},
	{
		coords: {
			lat: '54.03333',
			lon: '41.7',
		},
		district: 'Центральный',
		name: 'Шацк',
		population: 5927,
		subject: 'Рязанская область',
	},
	{
		coords: {
			lat: '50.40778',
			lon: '36.89694',
		},
		district: 'Центральный',
		name: 'Шебекино',
		population: 39680,
		subject: 'Белгородская область',
	},
	{
		coords: {
			lat: '52.2',
			lon: '104.1',
		},
		district: 'Сибирский',
		name: 'Шелехов',
		population: 41998,
		subject: 'Иркутская область',
	},
	{
		coords: {
			lat: '62.1',
			lon: '42.9',
		},
		district: 'Северо-Западный',
		name: 'Шенкурск',
		population: 4600,
		subject: 'Архангельская область',
	},
	{
		coords: {
			lat: '51.85',
			lon: '116.03333',
		},
		district: 'Сибирский',
		name: 'Шилка',
		population: 12046,
		subject: 'Забайкальский край',
	},
	{
		coords: {
			lat: '52',
			lon: '127.66667',
		},
		district: 'Дальневосточный',
		name: 'Шимановск',
		population: 16488,
		subject: 'Амурская область',
	},
	{
		coords: {
			lat: '52.1137809',
			lon: '47.199229',
		},
		district: 'Приволжский',
		name: 'Шиханы',
		population: 5155,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '59.944959',
			lon: '31.034754',
		},
		district: 'Северо-Западный',
		name: 'Шлиссельбург',
		population: 14131,
		subject: 'Ленинградская область',
	},
	{
		coords: {
			lat: '55.5',
			lon: '46.41667',
		},
		district: 'Приволжский',
		name: 'Шумерля',
		population: 26873,
		subject: 'Чувашия',
	},
	{
		coords: {
			lat: '55.23333',
			lon: '63.28333',
		},
		district: 'Уральский',
		name: 'Шумиха',
		population: 16264,
		subject: 'Курганская область',
	},
	{
		coords: {
			lat: '56.85',
			lon: '41.36667',
		},
		district: 'Центральный',
		name: 'Шуя',
		population: 55225,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '55.5',
			lon: '37.56667',
		},
		district: 'Центральный',
		name: 'Щербинка',
		population: 56531,
		subject: 'Москва',
	},
	{
		coords: {
			lat: '51.88111',
			lon: '36.90306',
		},
		district: 'Центральный',
		name: 'Щигры',
		population: 14927,
		subject: 'Курская область',
	},
	{
		coords: {
			lat: '55.21667',
			lon: '62.76667',
		},
		district: 'Уральский',
		name: 'Щучье',
		population: 8252,
		subject: 'Курганская область',
	},
	{
		coords: {
			lat: '54',
			lon: '37.51667',
		},
		district: 'Центральный',
		name: 'Щёкино',
		population: 55109,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '45.42361',
			lon: '35.81861',
		},
		district: 'Южный',
		name: 'Щёлкино',
		population: 10131,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '55.91667',
			lon: '38',
		},
		district: 'Центральный',
		name: 'Щёлково',
		population: 134211,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '55.88333',
			lon: '38.78333',
		},
		district: 'Центральный',
		name: 'Электрогорск',
		population: 29982,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '55.8',
			lon: '38.45',
		},
		district: 'Центральный',
		name: 'Электросталь',
		population: 146403,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '55.71667',
			lon: '38.21667',
		},
		district: 'Центральный',
		name: 'Электроугли',
		population: 17944,
		subject: 'Московская область',
	},
	{
		coords: {
			lat: '46.31667',
			lon: '44.26667',
		},
		district: 'Южный',
		name: 'Элиста',
		population: 102583,
		subject: 'Калмыкия',
	},
	{
		coords: {
			lat: '51.46667',
			lon: '46.11667',
		},
		district: 'Приволжский',
		name: 'Энгельс',
		population: 225428,
		subject: 'Саратовская область',
	},
	{
		coords: {
			lat: '51.83333',
			lon: '40.8',
		},
		district: 'Центральный',
		name: 'Эртиль',
		population: 10024,
		subject: 'Воронежская область',
	},
	{
		coords: {
			lat: '61.31667',
			lon: '63.35',
		},
		district: 'Уральский',
		name: 'Югорск',
		population: 38238,
		subject: 'Ханты-Мансийский АО',
	},
	{
		coords: {
			lat: '56.58333',
			lon: '42.01667',
		},
		district: 'Центральный',
		name: 'Южа',
		population: 12957,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '46.95',
			lon: '142.73333',
		},
		district: 'Дальневосточный',
		name: 'Южно-Сахалинск',
		population: 181587,
		subject: 'Сахалинская область',
	},
	{
		coords: {
			lat: '44.66667',
			lon: '45.65',
		},
		district: 'Северо-Кавказский',
		name: 'Южно-Сухокумск',
		population: 10503,
		subject: 'Дагестан',
	},
	{
		coords: {
			lat: '54.45',
			lon: '61.25',
		},
		district: 'Уральский',
		name: 'Южноуральск',
		population: 37478,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '55.73333',
			lon: '84.9',
		},
		district: 'Сибирский',
		name: 'Юрга',
		population: 79693,
		subject: 'Кемеровская область',
	},
	{
		coords: {
			lat: '56.5',
			lon: '39.68333',
		},
		district: 'Центральный',
		name: 'Юрьев-Польский',
		population: 17276,
		subject: 'Владимирская область',
	},
	{
		coords: {
			lat: '57.31667',
			lon: '43.1',
		},
		district: 'Центральный',
		name: 'Юрьевец',
		population: 7899,
		subject: 'Ивановская область',
	},
	{
		coords: {
			lat: '54.86667',
			lon: '58.43333',
		},
		district: 'Уральский',
		name: 'Юрюзань',
		population: 10284,
		subject: 'Челябинская область',
	},
	{
		coords: {
			lat: '54.75',
			lon: '35.23333',
		},
		district: 'Центральный',
		name: 'Юхнов',
		population: 6610,
		subject: 'Калужская область',
	},
	{
		coords: {
			lat: '55.95',
			lon: '46.2',
		},
		district: 'Приволжский',
		name: 'Ядрин',
		population: 7918,
		subject: 'Чувашия',
	},
	{
		coords: {
			lat: '62.027222222222',
			lon: '129.73194444444',
		},
		district: 'Дальневосточный',
		name: 'Якутск',
		population: 355443,
		subject: 'Якутия',
	},
	{
		coords: {
			lat: '44.49944',
			lon: '34.15528',
		},
		district: 'Южный',
		name: 'Ялта',
		population: 74652,
		subject: 'Крым',
	},
	{
		coords: {
			lat: '56.65',
			lon: '66.3',
		},
		district: 'Уральский',
		name: 'Ялуторовск',
		population: 38853,
		subject: 'Тюменская область',
	},
	{
		coords: {
			lat: '56.26667',
			lon: '54.93333',
		},
		district: 'Приволжский',
		name: 'Янаул',
		population: 25908,
		subject: 'Башкортостан',
	},
	{
		coords: {
			lat: '57.303306',
			lon: '47.868806',
		},
		district: 'Приволжский',
		name: 'Яранск',
		population: 14284,
		subject: 'Кировская область',
	},
	{
		coords: {
			lat: '52.93333',
			lon: '78.58333',
		},
		district: 'Сибирский',
		name: 'Яровое',
		population: 16424,
		subject: 'Алтайский край',
	},
	{
		coords: {
			lat: '57.61667',
			lon: '39.85',
		},
		district: 'Центральный',
		name: 'Ярославль',
		population: 577279,
		subject: 'Ярославская область',
	},
	{
		coords: {
			lat: '55.06667',
			lon: '32.68333',
		},
		district: 'Центральный',
		name: 'Ярцево',
		population: 41452,
		subject: 'Смоленская область',
	},
	{
		coords: {
			lat: '54.4793833',
			lon: '37.6933556',
		},
		district: 'Центральный',
		name: 'Ясногорск',
		population: 15269,
		subject: 'Тульская область',
	},
	{
		coords: {
			lat: '51.03333',
			lon: '59.86667',
		},
		district: 'Приволжский',
		name: 'Ясный',
		population: 15471,
		subject: 'Оренбургская область',
	},
	{
		coords: {
			lat: '56.28333',
			lon: '37.48333',
		},
		district: 'Центральный',
		name: 'Яхрома',
		population: 14011,
		subject: 'Московская область',
	},
];
export default cities;
=======
const citiesList = [
  {
    region: "Москва и Московская обл.",
    city: "Москва",
  },
  {
    region: "Москва и Московская обл.",
    city: "Абрамцево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Алабино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Апрелевка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Архангельское",
  },
  {
    region: "Москва и Московская обл.",
    city: "Ашитково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Байконур",
  },
  {
    region: "Москва и Московская обл.",
    city: "Бакшеево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Балашиха",
  },
  {
    region: "Москва и Московская обл.",
    city: "Барыбино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Белоомут",
  },
  {
    region: "Москва и Московская обл.",
    city: "Белые Столбы",
  },
  {
    region: "Москва и Московская обл.",
    city: "Бородино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Бронницы",
  },
  {
    region: "Москва и Московская обл.",
    city: "Быково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Валуево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Вербилки",
  },
  {
    region: "Москва и Московская обл.",
    city: "Верея",
  },
  {
    region: "Москва и Московская обл.",
    city: "Видное",
  },
  {
    region: "Москва и Московская обл.",
    city: "Внуково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Вождь Пролетариата",
  },
  {
    region: "Москва и Московская обл.",
    city: "Волоколамск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Вороново",
  },
  {
    region: "Москва и Московская обл.",
    city: "Воскресенск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Восточный",
  },
  {
    region: "Москва и Московская обл.",
    city: "Востряково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Высоковск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Голицино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Деденево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Дедовск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Джержинский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Дмитров",
  },
  {
    region: "Москва и Московская обл.",
    city: "Долгопрудный",
  },
  {
    region: "Москва и Московская обл.",
    city: "Домодедово",
  },
  {
    region: "Москва и Московская обл.",
    city: "Дорохово",
  },
  {
    region: "Москва и Московская обл.",
    city: "Дрезна",
  },
  {
    region: "Москва и Московская обл.",
    city: "Дубки",
  },
  {
    region: "Москва и Московская обл.",
    city: "Дубна",
  },
  {
    region: "Москва и Московская обл.",
    city: "Егорьевск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Железнодорожный",
  },
  {
    region: "Москва и Московская обл.",
    city: "Жилево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Жуковский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Загорск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Загорянский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Запрудная",
  },
  {
    region: "Москва и Московская обл.",
    city: "Зарайск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Звенигород",
  },
  {
    region: "Москва и Московская обл.",
    city: "Зеленоград",
  },
  {
    region: "Москва и Московская обл.",
    city: "Ивантеевка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Икша",
  },
  {
    region: "Москва и Московская обл.",
    city: "Ильинский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Истра",
  },
  {
    region: "Москва и Московская обл.",
    city: "Калининград",
  },
  {
    region: "Москва и Московская обл.",
    city: "Кашира",
  },
  {
    region: "Москва и Московская обл.",
    city: "Керва",
  },
  {
    region: "Москва и Московская обл.",
    city: "Климовск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Клин",
  },
  {
    region: "Москва и Московская обл.",
    city: "Клязьма",
  },
  {
    region: "Москва и Московская обл.",
    city: "Кожино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Кокошкино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Коломна",
  },
  {
    region: "Москва и Московская обл.",
    city: "Колюбакино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Королев",
  },
  {
    region: "Москва и Московская обл.",
    city: "Косино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Котельники",
  },
  {
    region: "Москва и Московская обл.",
    city: "Красково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Красноармейск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Красногорск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Краснозаводск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Краснознаменск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Красный Ткач",
  },
  {
    region: "Москва и Московская обл.",
    city: "Крюково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Кубинка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Купавна",
  },
  {
    region: "Москва и Московская обл.",
    city: "Куровское",
  },
  {
    region: "Москва и Московская обл.",
    city: "Лесной Городок",
  },
  {
    region: "Москва и Московская обл.",
    city: "Ликино-Дулево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Лобня",
  },
  {
    region: "Москва и Московская обл.",
    city: "Лопатинский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Лосино-Петровский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Лотошино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Лукино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Луховицы",
  },
  {
    region: "Москва и Московская обл.",
    city: "Лыткарино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Львовский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Люберцы",
  },
  {
    region: "Москва и Московская обл.",
    city: "Малаховка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Михайловское",
  },
  {
    region: "Москва и Московская обл.",
    city: "Михнево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Можайск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Монино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Муханово",
  },
  {
    region: "Москва и Московская обл.",
    city: "Мытищи",
  },
  {
    region: "Москва и Московская обл.",
    city: "Нарофоминск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Нахабино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Некрасовка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Немчиновка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Новобратцевский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Новоподрезково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Ногинск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Обухово",
  },
  {
    region: "Москва и Московская обл.",
    city: "Одинцово",
  },
  {
    region: "Москва и Московская обл.",
    city: "Ожерелье",
  },
  {
    region: "Москва и Московская обл.",
    city: "Озеры",
  },
  {
    region: "Москва и Московская обл.",
    city: "Октябрьский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Опалиха",
  },
  {
    region: "Москва и Московская обл.",
    city: "Орехово-Зуево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Павловский Посад",
  },
  {
    region: "Москва и Московская обл.",
    city: "Первомайский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Пески",
  },
  {
    region: "Москва и Московская обл.",
    city: "Пироговский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Подольск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Полушкино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Правдинский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Привокзальный",
  },
  {
    region: "Москва и Московская обл.",
    city: "Пролетарский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Протвино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Пушкино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Пущино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Радовицкий",
  },
  {
    region: "Москва и Московская обл.",
    city: "Раменское",
  },
  {
    region: "Москва и Московская обл.",
    city: "Реутов",
  },
  {
    region: "Москва и Московская обл.",
    city: "Решетниково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Родники",
  },
  {
    region: "Москва и Московская обл.",
    city: "Рошаль",
  },
  {
    region: "Москва и Московская обл.",
    city: "Рублево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Руза",
  },
  {
    region: "Москва и Московская обл.",
    city: "Салтыковка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Северный",
  },
  {
    region: "Москва и Московская обл.",
    city: "Сергиев Посад",
  },
  {
    region: "Москва и Московская обл.",
    city: "Серебряные Пруды",
  },
  {
    region: "Москва и Московская обл.",
    city: "Серпухов",
  },
  {
    region: "Москва и Московская обл.",
    city: "Солнечногорск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Солнцево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Софрино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Старая Купавна",
  },
  {
    region: "Москва и Московская обл.",
    city: "Старбеево",
  },
  {
    region: "Москва и Московская обл.",
    city: "Ступино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Сходня",
  },
  {
    region: "Москва и Московская обл.",
    city: "Талдом",
  },
  {
    region: "Москва и Московская обл.",
    city: "Текстильщик",
  },
  {
    region: "Москва и Московская обл.",
    city: "Темпы",
  },
  {
    region: "Москва и Московская обл.",
    city: "Тишково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Томилино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Троицк",
  },
  {
    region: "Москва и Московская обл.",
    city: "Туголесский Бор",
  },
  {
    region: "Москва и Московская обл.",
    city: "Тучково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Уваровка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Удельная",
  },
  {
    region: "Москва и Московская обл.",
    city: "Успенское",
  },
  {
    region: "Москва и Московская обл.",
    city: "Фирсановка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Фосфоритный",
  },
  {
    region: "Москва и Московская обл.",
    city: "Фрязино",
  },
  {
    region: "Москва и Московская обл.",
    city: "Фряново",
  },
  {
    region: "Москва и Московская обл.",
    city: "Химки",
  },
  {
    region: "Москва и Московская обл.",
    city: "Хорлово",
  },
  {
    region: "Москва и Московская обл.",
    city: "Хотьково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Черкизово",
  },
  {
    region: "Москва и Московская обл.",
    city: "Черноголовка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Черусти",
  },
  {
    region: "Москва и Московская обл.",
    city: "Чехов",
  },
  {
    region: "Москва и Московская обл.",
    city: "Шарапово",
  },
  {
    region: "Москва и Московская обл.",
    city: "Шатура",
  },
  {
    region: "Москва и Московская обл.",
    city: "Шатурторф",
  },
  {
    region: "Москва и Московская обл.",
    city: "Шаховская",
  },
  {
    region: "Москва и Московская обл.",
    city: "Шереметьевский",
  },
  {
    region: "Москва и Московская обл.",
    city: "Щелково",
  },
  {
    region: "Москва и Московская обл.",
    city: "Щербинка",
  },
  {
    region: "Москва и Московская обл.",
    city: "Электрогорск",
  },
  {
    region: "Москва и Московская обл.",
    city: "Электросталь",
  },
  {
    region: "Москва и Московская обл.",
    city: "Электроугли",
  },
  {
    region: "Москва и Московская обл.",
    city: "Яхрома",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Санкт-Петербург",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Александровская",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Бокситогорск",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Большая Ижора",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Будогощь",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Вознесенье",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Волосово",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Волхов",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Всеволожск",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Выборг",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Вырица",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Высоцк",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Гатчина",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Дружная Горка",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Дубровка",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Ефимовский",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Зеленогорск",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Ивангород",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Каменногорск",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Кикерино",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Кингисепп",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Кириши",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Кировск",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Кобринское",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Колпино",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Коммунар",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Кронштадт",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Лисий Нос",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Лодейное Поле",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Ломоносов",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Луга",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Павловск",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Парголово",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Петродворец",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Пикалёво",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Подпорожье",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Приозерск",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Пушкин",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Сестрорецк",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Сланцы",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Сосновый Бор",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Тихвин",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Тосно",
  },
  {
    region: "Санкт-Петербург и область",
    city: "Шлиссельбург",
  },
  {
    region: "Адыгея",
    city: "Адыгейск",
  },
  {
    region: "Адыгея",
    city: "Майкоп",
  },
  {
    region: "Алтайский край",
    city: "Акташ",
  },
  {
    region: "Алтайский край",
    city: "Акутиха",
  },
  {
    region: "Алтайский край",
    city: "Алейск",
  },
  {
    region: "Алтайский край",
    city: "Алтайский",
  },
  {
    region: "Алтайский край",
    city: "Баево",
  },
  {
    region: "Алтайский край",
    city: "Барнаул",
  },
  {
    region: "Алтайский край",
    city: "Белово",
  },
  {
    region: "Алтайский край",
    city: "Белокуриха",
  },
  {
    region: "Алтайский край",
    city: "Белоярск",
  },
  {
    region: "Алтайский край",
    city: "Бийск",
  },
  {
    region: "Алтайский край",
    city: "Благовещенск",
  },
  {
    region: "Алтайский край",
    city: "Боровлянка",
  },
  {
    region: "Алтайский край",
    city: "Бурла",
  },
  {
    region: "Алтайский край",
    city: "Бурсоль",
  },
  {
    region: "Алтайский край",
    city: "Волчиха",
  },
  {
    region: "Алтайский край",
    city: "Горно-Алтайск",
  },
  {
    region: "Алтайский край",
    city: "Горняк",
  },
  {
    region: "Алтайский край",
    city: "Ельцовка",
  },
  {
    region: "Алтайский край",
    city: "Залесово",
  },
  {
    region: "Алтайский край",
    city: "Заринск",
  },
  {
    region: "Алтайский край",
    city: "Заток",
  },
  {
    region: "Алтайский край",
    city: "Змеиногорск",
  },
  {
    region: "Алтайский край",
    city: "Камень-на-Оби",
  },
  {
    region: "Алтайский край",
    city: "Ключи",
  },
  {
    region: "Алтайский край",
    city: "Кош-Агач",
  },
  {
    region: "Алтайский край",
    city: "Красногорское",
  },
  {
    region: "Алтайский край",
    city: "Краснощеково",
  },
  {
    region: "Алтайский край",
    city: "Кулунда",
  },
  {
    region: "Алтайский край",
    city: "Кытманово",
  },
  {
    region: "Алтайский край",
    city: "Мамонтово",
  },
  {
    region: "Алтайский край",
    city: "Новичиха",
  },
  {
    region: "Алтайский край",
    city: "Новоалтайск",
  },
  {
    region: "Алтайский край",
    city: "Онгудай",
  },
  {
    region: "Алтайский край",
    city: "Павловск",
  },
  {
    region: "Алтайский край",
    city: "Петропавловское",
  },
  {
    region: "Алтайский край",
    city: "Поспелиха",
  },
  {
    region: "Алтайский край",
    city: "Ребриха",
  },
  {
    region: "Алтайский край",
    city: "Родино",
  },
  {
    region: "Алтайский край",
    city: "Рубцовск",
  },
  {
    region: "Алтайский край",
    city: "Славгород",
  },
  {
    region: "Алтайский край",
    city: "Смоленское",
  },
  {
    region: "Алтайский край",
    city: "Солонешное",
  },
  {
    region: "Алтайский край",
    city: "Солтон",
  },
  {
    region: "Алтайский край",
    city: "Староаллейское",
  },
  {
    region: "Алтайский край",
    city: "Табуны",
  },
  {
    region: "Алтайский край",
    city: "Тальменка",
  },
  {
    region: "Алтайский край",
    city: "Топчиха",
  },
  {
    region: "Алтайский край",
    city: "Троицкое",
  },
  {
    region: "Алтайский край",
    city: "Турочак",
  },
  {
    region: "Алтайский край",
    city: "Тюменцево",
  },
  {
    region: "Алтайский край",
    city: "Угловское",
  },
  {
    region: "Алтайский край",
    city: "Усть-Калманка",
  },
  {
    region: "Алтайский край",
    city: "Усть-Кан",
  },
  {
    region: "Алтайский край",
    city: "Усть-Кокса",
  },
  {
    region: "Алтайский край",
    city: "Усть-Улаган",
  },
  {
    region: "Алтайский край",
    city: "Усть-Чарышская Пристань",
  },
  {
    region: "Алтайский край",
    city: "Хабары",
  },
  {
    region: "Алтайский край",
    city: "Целинное",
  },
  {
    region: "Алтайский край",
    city: "Чарышское",
  },
  {
    region: "Алтайский край",
    city: "Шебалино",
  },
  {
    region: "Алтайский край",
    city: "Шелаболиха",
  },
  {
    region: "Алтайский край",
    city: "Шипуново",
  },
  {
    region: "Амурская обл.",
    city: "Айгунь",
  },
  {
    region: "Амурская обл.",
    city: "Архара",
  },
  {
    region: "Амурская обл.",
    city: "Белогорск",
  },
  {
    region: "Амурская обл.",
    city: "Благовещенск (Амурская обл.)",
  },
  {
    region: "Амурская обл.",
    city: "Бурея",
  },
  {
    region: "Амурская обл.",
    city: "Возжаевка",
  },
  {
    region: "Амурская обл.",
    city: "Екатеринославка",
  },
  {
    region: "Амурская обл.",
    city: "Ерофей Павлович",
  },
  {
    region: "Амурская обл.",
    city: "Завитинск",
  },
  {
    region: "Амурская обл.",
    city: "Зея",
  },
  {
    region: "Амурская обл.",
    city: "Златоустовск",
  },
  {
    region: "Амурская обл.",
    city: "Ивановка",
  },
  {
    region: "Амурская обл.",
    city: "Коболдо",
  },
  {
    region: "Амурская обл.",
    city: "Магдагачи",
  },
  {
    region: "Амурская обл.",
    city: "Новобурейский",
  },
  {
    region: "Амурская обл.",
    city: "Поярково",
  },
  {
    region: "Амурская обл.",
    city: "Райчихинск",
  },
  {
    region: "Амурская обл.",
    city: "Ромны",
  },
  {
    region: "Амурская обл.",
    city: "Свободный",
  },
  {
    region: "Амурская обл.",
    city: "Серышево",
  },
  {
    region: "Амурская обл.",
    city: "Сковородино",
  },
  {
    region: "Амурская обл.",
    city: "Стойба",
  },
  {
    region: "Амурская обл.",
    city: "Тамбовка",
  },
  {
    region: "Амурская обл.",
    city: "Тында",
  },
  {
    region: "Амурская обл.",
    city: "Шимановск",
  },
  {
    region: "Амурская обл.",
    city: "Экимчан",
  },
  {
    region: "Амурская обл.",
    city: "Ядрино",
  },
  {
    region: "Архангельская обл.",
    city: "Амдерма",
  },
  {
    region: "Архангельская обл.",
    city: "Архангельск",
  },
  {
    region: "Архангельская обл.",
    city: "Березник",
  },
  {
    region: "Архангельская обл.",
    city: "Вельск",
  },
  {
    region: "Архангельская обл.",
    city: "Верхняя Тойма",
  },
  {
    region: "Архангельская обл.",
    city: "Волошка",
  },
  {
    region: "Архангельская обл.",
    city: "Вычегодский",
  },
  {
    region: "Архангельская обл.",
    city: "Емца",
  },
  {
    region: "Архангельская обл.",
    city: "Илеза",
  },
  {
    region: "Архангельская обл.",
    city: "Ильинско-Подомское",
  },
  {
    region: "Архангельская обл.",
    city: "Каргополь",
  },
  {
    region: "Архангельская обл.",
    city: "Карпогоры",
  },
  {
    region: "Архангельская обл.",
    city: "Кодино",
  },
  {
    region: "Архангельская обл.",
    city: "Коноша",
  },
  {
    region: "Архангельская обл.",
    city: "Коряжма",
  },
  {
    region: "Архангельская обл.",
    city: "Котлас",
  },
  {
    region: "Архангельская обл.",
    city: "Красноборск",
  },
  {
    region: "Архангельская обл.",
    city: "Лешуконское",
  },
  {
    region: "Архангельская обл.",
    city: "Мезень",
  },
  {
    region: "Архангельская обл.",
    city: "Мирный",
  },
  {
    region: "Архангельская обл.",
    city: "Нарьян-Мар",
  },
  {
    region: "Архангельская обл.",
    city: "Новодвинск",
  },
  {
    region: "Архангельская обл.",
    city: "Няндома",
  },
  {
    region: "Архангельская обл.",
    city: "Онега",
  },
  {
    region: "Архангельская обл.",
    city: "Пинега",
  },
  {
    region: "Архангельская обл.",
    city: "Плесецк",
  },
  {
    region: "Архангельская обл.",
    city: "Северодвинск",
  },
  {
    region: "Архангельская обл.",
    city: "Сольвычегодск",
  },
  {
    region: "Архангельская обл.",
    city: "Холмогоры",
  },
  {
    region: "Архангельская обл.",
    city: "Шенкурск",
  },
  {
    region: "Архангельская обл.",
    city: "Яренск",
  },
  {
    region: "Астраханская обл.",
    city: "Астрахань",
  },
  {
    region: "Астраханская обл.",
    city: "Ахтубинск",
  },
  {
    region: "Астраханская обл.",
    city: "Верхний Баскунчак",
  },
  {
    region: "Астраханская обл.",
    city: "Володарский",
  },
  {
    region: "Астраханская обл.",
    city: "Енотаевка",
  },
  {
    region: "Астраханская обл.",
    city: "Икряное",
  },
  {
    region: "Астраханская обл.",
    city: "Камызяк",
  },
  {
    region: "Астраханская обл.",
    city: "Капустин Яр",
  },
  {
    region: "Астраханская обл.",
    city: "Красный Яр",
  },
  {
    region: "Астраханская обл.",
    city: "Лиман",
  },
  {
    region: "Астраханская обл.",
    city: "Началово",
  },
  {
    region: "Астраханская обл.",
    city: "Харабали",
  },
  {
    region: "Астраханская обл.",
    city: "Черный Яр",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Аксаково",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Амзя",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Аскино",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Баймак",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Бакалы",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Белебей",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Белорецк",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Бижбуляк",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Бирск",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Благовещенск",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Большеустьикинское",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Бураево",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Верхнеяркеево",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Верхние Киги",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Верхние Татышлы",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Верхний Авзян",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Давлеканово",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Дуван",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Дюртюли",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Ермекеево",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Ермолаево",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Зилаир",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Зирган",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Иглино",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Инзер",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Исянгулово",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Ишимбай",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Кананикольское",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Кандры",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Караидель",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Караидельский",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Киргиз-Мияки",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Красноусольский",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Кумертау",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Кушнаренково",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Малояз",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Мелеуз",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Месягутово",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Мраково",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Нефтекамск",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Октябрьский",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Раевский",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Салават",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Сибай",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Старобалтачево",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Старосубхангулово",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Стерлибашево",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Стерлитамак",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Туймазы",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Уфа",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Учалы",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Федоровка",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Чекмагуш",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Чишмы",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Шаран",
  },
  {
    region: "Башкортостан(Башкирия)",
    city: "Янаул",
  },
  {
    region: "Белгородская обл.",
    city: "Алексеевка",
  },
  {
    region: "Белгородская обл.",
    city: "Белгород",
  },
  {
    region: "Белгородская обл.",
    city: "Борисовка",
  },
  {
    region: "Белгородская обл.",
    city: "Валуйки",
  },
  {
    region: "Белгородская обл.",
    city: "Вейделевка",
  },
  {
    region: "Белгородская обл.",
    city: "Волоконовка",
  },
  {
    region: "Белгородская обл.",
    city: "Грайворон",
  },
  {
    region: "Белгородская обл.",
    city: "Губкин",
  },
  {
    region: "Белгородская обл.",
    city: "Ивня",
  },
  {
    region: "Белгородская обл.",
    city: "Короча",
  },
  {
    region: "Белгородская обл.",
    city: "Красногвардейское",
  },
  {
    region: "Белгородская обл.",
    city: "Новый Оскол",
  },
  {
    region: "Белгородская обл.",
    city: "Ракитное",
  },
  {
    region: "Белгородская обл.",
    city: "Ровеньки",
  },
  {
    region: "Белгородская обл.",
    city: "Старый Оскол",
  },
  {
    region: "Белгородская обл.",
    city: "Строитель",
  },
  {
    region: "Белгородская обл.",
    city: "Чернянка",
  },
  {
    region: "Белгородская обл.",
    city: "Шебекино",
  },
  {
    region: "Брянская обл.",
    city: "Алтухово",
  },
  {
    region: "Брянская обл.",
    city: "Белая Березка",
  },
  {
    region: "Брянская обл.",
    city: "Белые Берега",
  },
  {
    region: "Брянская обл.",
    city: "Большое Полпино",
  },
  {
    region: "Брянская обл.",
    city: "Брянск",
  },
  {
    region: "Брянская обл.",
    city: "Бытошь",
  },
  {
    region: "Брянская обл.",
    city: "Выгоничи",
  },
  {
    region: "Брянская обл.",
    city: "Вышков",
  },
  {
    region: "Брянская обл.",
    city: "Гордеевка",
  },
  {
    region: "Брянская обл.",
    city: "Дубровка",
  },
  {
    region: "Брянская обл.",
    city: "Дятьково",
  },
  {
    region: "Брянская обл.",
    city: "Жирятино",
  },
  {
    region: "Брянская обл.",
    city: "Жуковка",
  },
  {
    region: "Брянская обл.",
    city: "Злынка",
  },
  {
    region: "Брянская обл.",
    city: "Ивот",
  },
  {
    region: "Брянская обл.",
    city: "Карачев",
  },
  {
    region: "Брянская обл.",
    city: "Клетня",
  },
  {
    region: "Брянская обл.",
    city: "Климово",
  },
  {
    region: "Брянская обл.",
    city: "Клинцы",
  },
  {
    region: "Брянская обл.",
    city: "Кокаревка",
  },
  {
    region: "Брянская обл.",
    city: "Комаричи",
  },
  {
    region: "Брянская обл.",
    city: "Красная Гора",
  },
  {
    region: "Брянская обл.",
    city: "Локоть",
  },
  {
    region: "Брянская обл.",
    city: "Мглин",
  },
  {
    region: "Брянская обл.",
    city: "Навля",
  },
  {
    region: "Брянская обл.",
    city: "Новозыбков",
  },
  {
    region: "Брянская обл.",
    city: "Погар",
  },
  {
    region: "Брянская обл.",
    city: "Почеп",
  },
  {
    region: "Брянская обл.",
    city: "Ржаница",
  },
  {
    region: "Брянская обл.",
    city: "Рогнедино",
  },
  {
    region: "Брянская обл.",
    city: "Севск",
  },
  {
    region: "Брянская обл.",
    city: "Стародуб",
  },
  {
    region: "Брянская обл.",
    city: "Суземка",
  },
  {
    region: "Брянская обл.",
    city: "Сураж",
  },
  {
    region: "Брянская обл.",
    city: "Трубчевск",
  },
  {
    region: "Брянская обл.",
    city: "Унеча",
  },
  {
    region: "Бурятия",
    city: "Бабушкин",
  },
  {
    region: "Бурятия",
    city: "Багдарин",
  },
  {
    region: "Бурятия",
    city: "Баргузин",
  },
  {
    region: "Бурятия",
    city: "Баянгол",
  },
  {
    region: "Бурятия",
    city: "Бичура",
  },
  {
    region: "Бурятия",
    city: "Выдрино",
  },
  {
    region: "Бурятия",
    city: "Гусиное Озеро",
  },
  {
    region: "Бурятия",
    city: "Гусиноозерск",
  },
  {
    region: "Бурятия",
    city: "Заиграево",
  },
  {
    region: "Бурятия",
    city: "Закаменск",
  },
  {
    region: "Бурятия",
    city: "Иволгинск",
  },
  {
    region: "Бурятия",
    city: "Илька",
  },
  {
    region: "Бурятия",
    city: "Кабанск",
  },
  {
    region: "Бурятия",
    city: "Каменск",
  },
  {
    region: "Бурятия",
    city: "Кижинга",
  },
  {
    region: "Бурятия",
    city: "Курумкан",
  },
  {
    region: "Бурятия",
    city: "Кырен",
  },
  {
    region: "Бурятия",
    city: "Кяхта",
  },
  {
    region: "Бурятия",
    city: "Монды",
  },
  {
    region: "Бурятия",
    city: "Мухоршибирь",
  },
  {
    region: "Бурятия",
    city: "Нижнеангарск",
  },
  {
    region: "Бурятия",
    city: "Орлик",
  },
  {
    region: "Бурятия",
    city: "Петропавловка",
  },
  {
    region: "Бурятия",
    city: "Романовка",
  },
  {
    region: "Бурятия",
    city: "Северобайкальск",
  },
  {
    region: "Бурятия",
    city: "Селенгинск",
  },
  {
    region: "Бурятия",
    city: "Сосново-Озерское",
  },
  {
    region: "Бурятия",
    city: "Таксимо",
  },
  {
    region: "Бурятия",
    city: "Турунтаево",
  },
  {
    region: "Бурятия",
    city: "Улан-Удэ",
  },
  {
    region: "Бурятия",
    city: "Хоринск",
  },
  {
    region: "Владимирская обл.",
    city: "Александров",
  },
  {
    region: "Владимирская обл.",
    city: "Андреево",
  },
  {
    region: "Владимирская обл.",
    city: "Анопино",
  },
  {
    region: "Владимирская обл.",
    city: "Бавлены",
  },
  {
    region: "Владимирская обл.",
    city: "Балакирево",
  },
  {
    region: "Владимирская обл.",
    city: "Боголюбово",
  },
  {
    region: "Владимирская обл.",
    city: "Великодворский",
  },
  {
    region: "Владимирская обл.",
    city: "Вербовский",
  },
  {
    region: "Владимирская обл.",
    city: "Владимир",
  },
  {
    region: "Владимирская обл.",
    city: "Вязники",
  },
  {
    region: "Владимирская обл.",
    city: "Городищи",
  },
  {
    region: "Владимирская обл.",
    city: "Гороховец",
  },
  {
    region: "Владимирская обл.",
    city: "Гусевский",
  },
  {
    region: "Владимирская обл.",
    city: "Гусь Хрустальный",
  },
  {
    region: "Владимирская обл.",
    city: "Золотково",
  },
  {
    region: "Владимирская обл.",
    city: "Иванищи",
  },
  {
    region: "Владимирская обл.",
    city: "Камешково",
  },
  {
    region: "Владимирская обл.",
    city: "Карабаново",
  },
  {
    region: "Владимирская обл.",
    city: "Киржач",
  },
  {
    region: "Владимирская обл.",
    city: "Ковров",
  },
  {
    region: "Владимирская обл.",
    city: "Кольчугино",
  },
  {
    region: "Владимирская обл.",
    city: "Красная Горбатка",
  },
  {
    region: "Владимирская обл.",
    city: "Меленки",
  },
  {
    region: "Владимирская обл.",
    city: "Муром",
  },
  {
    region: "Владимирская обл.",
    city: "Петушки",
  },
  {
    region: "Владимирская обл.",
    city: "Покров",
  },
  {
    region: "Владимирская обл.",
    city: "Собинка",
  },
  {
    region: "Владимирская обл.",
    city: "Судогда",
  },
  {
    region: "Владимирская обл.",
    city: "Суздаль",
  },
  {
    region: "Владимирская обл.",
    city: "Юрьев-Польский",
  },
  {
    region: "Волгоградская обл.",
    city: "Алексеевская",
  },
  {
    region: "Волгоградская обл.",
    city: "Алущевск",
  },
  {
    region: "Волгоградская обл.",
    city: "Быково",
  },
  {
    region: "Волгоградская обл.",
    city: "Волгоград",
  },
  {
    region: "Волгоградская обл.",
    city: "Волжский",
  },
  {
    region: "Волгоградская обл.",
    city: "Городище",
  },
  {
    region: "Волгоградская обл.",
    city: "Дубовка",
  },
  {
    region: "Волгоградская обл.",
    city: "Елань",
  },
  {
    region: "Волгоградская обл.",
    city: "Жирновск",
  },
  {
    region: "Волгоградская обл.",
    city: "Иловля",
  },
  {
    region: "Волгоградская обл.",
    city: "Калач-на-Дону",
  },
  {
    region: "Волгоградская обл.",
    city: "Камышин",
  },
  {
    region: "Волгоградская обл.",
    city: "Кириллов",
  },
  {
    region: "Волгоградская обл.",
    city: "Клетский",
  },
  {
    region: "Волгоградская обл.",
    city: "Котельниково",
  },
  {
    region: "Волгоградская обл.",
    city: "Котово",
  },
  {
    region: "Волгоградская обл.",
    city: "Кумылженская",
  },
  {
    region: "Волгоградская обл.",
    city: "Ленинск",
  },
  {
    region: "Волгоградская обл.",
    city: "Михайловка",
  },
  {
    region: "Волгоградская обл.",
    city: "Нехаевский",
  },
  {
    region: "Волгоградская обл.",
    city: "Николаевск",
  },
  {
    region: "Волгоградская обл.",
    city: "Новоаннинский",
  },
  {
    region: "Волгоградская обл.",
    city: "Новониколаевский",
  },
  {
    region: "Волгоградская обл.",
    city: "Ольховка",
  },
  {
    region: "Волгоградская обл.",
    city: "Палласовка",
  },
  {
    region: "Волгоградская обл.",
    city: "Рудня",
  },
  {
    region: "Волгоградская обл.",
    city: "Светлый Яр",
  },
  {
    region: "Волгоградская обл.",
    city: "Серафимович",
  },
  {
    region: "Волгоградская обл.",
    city: "Средняя Ахтуба",
  },
  {
    region: "Волгоградская обл.",
    city: "Сталинград",
  },
  {
    region: "Волгоградская обл.",
    city: "Старая Полтавка",
  },
  {
    region: "Волгоградская обл.",
    city: "Суровикино",
  },
  {
    region: "Волгоградская обл.",
    city: "Урюпинск",
  },
  {
    region: "Волгоградская обл.",
    city: "Фролово",
  },
  {
    region: "Волгоградская обл.",
    city: "Чернышковский",
  },
  {
    region: "Вологодская обл.",
    city: "Бабаево",
  },
  {
    region: "Вологодская обл.",
    city: "Белозерск",
  },
  {
    region: "Вологодская обл.",
    city: "Великий Устюг",
  },
  {
    region: "Вологодская обл.",
    city: "Верховажье",
  },
  {
    region: "Вологодская обл.",
    city: "Вожега",
  },
  {
    region: "Вологодская обл.",
    city: "Вологда",
  },
  {
    region: "Вологодская обл.",
    city: "Вохтога",
  },
  {
    region: "Вологодская обл.",
    city: "Вытегра",
  },
  {
    region: "Вологодская обл.",
    city: "Грязовец",
  },
  {
    region: "Вологодская обл.",
    city: "Кадников",
  },
  {
    region: "Вологодская обл.",
    city: "Кадуй",
  },
  {
    region: "Вологодская обл.",
    city: "Кичменгский Городок",
  },
  {
    region: "Вологодская обл.",
    city: "Липин Бор",
  },
  {
    region: "Вологодская обл.",
    city: "Никольск",
  },
  {
    region: "Вологодская обл.",
    city: "Нюксеница",
  },
  {
    region: "Вологодская обл.",
    city: "Сокол",
  },
  {
    region: "Вологодская обл.",
    city: "Сямжа",
  },
  {
    region: "Вологодская обл.",
    city: "Тарногский Городок",
  },
  {
    region: "Вологодская обл.",
    city: "Тотьма",
  },
  {
    region: "Вологодская обл.",
    city: "Устюжна",
  },
  {
    region: "Вологодская обл.",
    city: "Харовск",
  },
  {
    region: "Вологодская обл.",
    city: "Чагода",
  },
  {
    region: "Вологодская обл.",
    city: "Череповец",
  },
  {
    region: "Вологодская обл.",
    city: "Шексна",
  },
  {
    region: "Вологодская обл.",
    city: "Шуйское",
  },
  {
    region: "Воронежская обл.",
    city: "Анна",
  },
  {
    region: "Воронежская обл.",
    city: "Бобров",
  },
  {
    region: "Воронежская обл.",
    city: "Богучар",
  },
  {
    region: "Воронежская обл.",
    city: "Борисоглебск",
  },
  {
    region: "Воронежская обл.",
    city: "Бутурлиновка",
  },
  {
    region: "Воронежская обл.",
    city: "Верхний Мамон",
  },
  {
    region: "Воронежская обл.",
    city: "Верхняя Хава",
  },
  {
    region: "Воронежская обл.",
    city: "Воробьевка",
  },
  {
    region: "Воронежская обл.",
    city: "Воронеж",
  },
  {
    region: "Воронежская обл.",
    city: "Грибановский",
  },
  {
    region: "Воронежская обл.",
    city: "Давыдовка",
  },
  {
    region: "Воронежская обл.",
    city: "Елань-Коленовский",
  },
  {
    region: "Воронежская обл.",
    city: "Калач",
  },
  {
    region: "Воронежская обл.",
    city: "Кантемировка",
  },
  {
    region: "Воронежская обл.",
    city: "Лиски",
  },
  {
    region: "Воронежская обл.",
    city: "Нижнедевицк",
  },
  {
    region: "Воронежская обл.",
    city: "Новая Усмань",
  },
  {
    region: "Воронежская обл.",
    city: "Новохоперск",
  },
  {
    region: "Воронежская обл.",
    city: "Ольховатка",
  },
  {
    region: "Воронежская обл.",
    city: "Острогожск",
  },
  {
    region: "Воронежская обл.",
    city: "Павловск",
  },
  {
    region: "Воронежская обл.",
    city: "Панино",
  },
  {
    region: "Воронежская обл.",
    city: "Петропавловка",
  },
  {
    region: "Воронежская обл.",
    city: "Поворино",
  },
  {
    region: "Воронежская обл.",
    city: "Подгоренский",
  },
  {
    region: "Воронежская обл.",
    city: "Рамонь",
  },
  {
    region: "Воронежская обл.",
    city: "Репьевка",
  },
  {
    region: "Воронежская обл.",
    city: "Россошь",
  },
  {
    region: "Воронежская обл.",
    city: "Семилуки",
  },
  {
    region: "Воронежская обл.",
    city: "Таловая",
  },
  {
    region: "Воронежская обл.",
    city: "Терновка",
  },
  {
    region: "Воронежская обл.",
    city: "Хохольский",
  },
  {
    region: "Воронежская обл.",
    city: "Эртиль",
  },
  {
    region: "Воронежская обл.",
    city: "нововоронеж",
  },
  {
    region: "Дагестан",
    city: "Агвали",
  },
  {
    region: "Дагестан",
    city: "Акуша",
  },
  {
    region: "Дагестан",
    city: "Ахты",
  },
  {
    region: "Дагестан",
    city: "Ачису",
  },
  {
    region: "Дагестан",
    city: "Бабаюрт",
  },
  {
    region: "Дагестан",
    city: "Бежта",
  },
  {
    region: "Дагестан",
    city: "Ботлих",
  },
  {
    region: "Дагестан",
    city: "Буйнакск",
  },
  {
    region: "Дагестан",
    city: "Вачи",
  },
  {
    region: "Дагестан",
    city: "Гергебиль",
  },
  {
    region: "Дагестан",
    city: "Гуниб",
  },
  {
    region: "Дагестан",
    city: "Дагестанские Огни",
  },
  {
    region: "Дагестан",
    city: "Дербент",
  },
  {
    region: "Дагестан",
    city: "Дылым",
  },
  {
    region: "Дагестан",
    city: "Ершовка",
  },
  {
    region: "Дагестан",
    city: "Избербаш",
  },
  {
    region: "Дагестан",
    city: "Карабудахкент",
  },
  {
    region: "Дагестан",
    city: "Карата",
  },
  {
    region: "Дагестан",
    city: "Каспийск",
  },
  {
    region: "Дагестан",
    city: "Касумкент",
  },
  {
    region: "Дагестан",
    city: "Кизилюрт",
  },
  {
    region: "Дагестан",
    city: "Кизляр",
  },
  {
    region: "Дагестан",
    city: "Кочубей",
  },
  {
    region: "Дагестан",
    city: "Кумух",
  },
  {
    region: "Дагестан",
    city: "Курах",
  },
  {
    region: "Дагестан",
    city: "Магарамкент",
  },
  {
    region: "Дагестан",
    city: "Маджалис",
  },
  {
    region: "Дагестан",
    city: "Махачкала",
  },
  {
    region: "Дагестан",
    city: "Мехельта",
  },
  {
    region: "Дагестан",
    city: "Новолакское",
  },
  {
    region: "Дагестан",
    city: "Рутул",
  },
  {
    region: "Дагестан",
    city: "Советское",
  },
  {
    region: "Дагестан",
    city: "Тарумовка",
  },
  {
    region: "Дагестан",
    city: "Терекли-Мектеб",
  },
  {
    region: "Дагестан",
    city: "Тлярата",
  },
  {
    region: "Дагестан",
    city: "Тпиг",
  },
  {
    region: "Дагестан",
    city: "Уркарах",
  },
  {
    region: "Дагестан",
    city: "Хасавюрт",
  },
  {
    region: "Дагестан",
    city: "Хив",
  },
  {
    region: "Дагестан",
    city: "Хунзах",
  },
  {
    region: "Дагестан",
    city: "Цуриб",
  },
  {
    region: "Дагестан",
    city: "Южно-Сухокумск",
  },
  {
    region: "Еврейская обл.",
    city: "Биробиджан",
  },
  {
    region: "Ивановская обл.",
    city: "Архиповка",
  },
  {
    region: "Ивановская обл.",
    city: "Верхний Ландех",
  },
  {
    region: "Ивановская обл.",
    city: "Вичуга",
  },
  {
    region: "Ивановская обл.",
    city: "Гаврилов Посад",
  },
  {
    region: "Ивановская обл.",
    city: "Долматовский",
  },
  {
    region: "Ивановская обл.",
    city: "Дуляпино",
  },
  {
    region: "Ивановская обл.",
    city: "Заволжск",
  },
  {
    region: "Ивановская обл.",
    city: "Заречный",
  },
  {
    region: "Ивановская обл.",
    city: "Иваново",
  },
  {
    region: "Ивановская обл.",
    city: "Иваньковский",
  },
  {
    region: "Ивановская обл.",
    city: "Ильинское-Хованское",
  },
  {
    region: "Ивановская обл.",
    city: "Каминский",
  },
  {
    region: "Ивановская обл.",
    city: "Кинешма",
  },
  {
    region: "Ивановская обл.",
    city: "Комсомольск",
  },
  {
    region: "Ивановская обл.",
    city: "Кохма",
  },
  {
    region: "Ивановская обл.",
    city: "Лух",
  },
  {
    region: "Ивановская обл.",
    city: "Палех",
  },
  {
    region: "Ивановская обл.",
    city: "Пестяки",
  },
  {
    region: "Ивановская обл.",
    city: "Приволжск",
  },
  {
    region: "Ивановская обл.",
    city: "Пучеж",
  },
  {
    region: "Ивановская обл.",
    city: "Родники",
  },
  {
    region: "Ивановская обл.",
    city: "Савино",
  },
  {
    region: "Ивановская обл.",
    city: "Сокольское",
  },
  {
    region: "Ивановская обл.",
    city: "Тейково",
  },
  {
    region: "Ивановская обл.",
    city: "Фурманов",
  },
  {
    region: "Ивановская обл.",
    city: "Шуя",
  },
  {
    region: "Ивановская обл.",
    city: "Южа",
  },
  {
    region: "Ивановская обл.",
    city: "Юрьевец",
  },
  {
    region: "Иркутская обл.",
    city: "Алексеевск",
  },
  {
    region: "Иркутская обл.",
    city: "Алзамай",
  },
  {
    region: "Иркутская обл.",
    city: "Алыгжер",
  },
  {
    region: "Иркутская обл.",
    city: "Ангарск",
  },
  {
    region: "Иркутская обл.",
    city: "Артемовский",
  },
  {
    region: "Иркутская обл.",
    city: "Атагай",
  },
  {
    region: "Иркутская обл.",
    city: "Байкал",
  },
  {
    region: "Иркутская обл.",
    city: "Байкальск",
  },
  {
    region: "Иркутская обл.",
    city: "Балаганск",
  },
  {
    region: "Иркутская обл.",
    city: "Баяндай",
  },
  {
    region: "Иркутская обл.",
    city: "Бирюсинск",
  },
  {
    region: "Иркутская обл.",
    city: "Бодайбо",
  },
  {
    region: "Иркутская обл.",
    city: "Большая Речка",
  },
  {
    region: "Иркутская обл.",
    city: "Большой Луг",
  },
  {
    region: "Иркутская обл.",
    city: "Бохан",
  },
  {
    region: "Иркутская обл.",
    city: "Братск",
  },
  {
    region: "Иркутская обл.",
    city: "Видим",
  },
  {
    region: "Иркутская обл.",
    city: "Витимский",
  },
  {
    region: "Иркутская обл.",
    city: "Вихоревка",
  },
  {
    region: "Иркутская обл.",
    city: "Еланцы",
  },
  {
    region: "Иркутская обл.",
    city: "Ербогачен",
  },
  {
    region: "Иркутская обл.",
    city: "Железногорск-Илимский",
  },
  {
    region: "Иркутская обл.",
    city: "Жигалово",
  },
  {
    region: "Иркутская обл.",
    city: "Забитуй",
  },
  {
    region: "Иркутская обл.",
    city: "Залари",
  },
  {
    region: "Иркутская обл.",
    city: "Звездный",
  },
  {
    region: "Иркутская обл.",
    city: "Зима",
  },
  {
    region: "Иркутская обл.",
    city: "Иркутск",
  },
  {
    region: "Иркутская обл.",
    city: "Казачинское",
  },
  {
    region: "Иркутская обл.",
    city: "Качуг",
  },
  {
    region: "Иркутская обл.",
    city: "Квиток",
  },
  {
    region: "Иркутская обл.",
    city: "Киренск",
  },
  {
    region: "Иркутская обл.",
    city: "Куйтун",
  },
  {
    region: "Иркутская обл.",
    city: "Култук",
  },
  {
    region: "Иркутская обл.",
    city: "Кутулик",
  },
  {
    region: "Иркутская обл.",
    city: "Мама",
  },
  {
    region: "Иркутская обл.",
    city: "Нижнеудинск",
  },
  {
    region: "Иркутская обл.",
    city: "Оса",
  },
  {
    region: "Иркутская обл.",
    city: "Саянск",
  },
  {
    region: "Иркутская обл.",
    city: "Слюдянка",
  },
  {
    region: "Иркутская обл.",
    city: "Тайшет",
  },
  {
    region: "Иркутская обл.",
    city: "Тулун",
  },
  {
    region: "Иркутская обл.",
    city: "Усолье-Сибирское",
  },
  {
    region: "Иркутская обл.",
    city: "Усть-Илимск",
  },
  {
    region: "Иркутская обл.",
    city: "Усть-Кут",
  },
  {
    region: "Иркутская обл.",
    city: "Усть-Ордынский",
  },
  {
    region: "Иркутская обл.",
    city: "Усть-Уда",
  },
  {
    region: "Иркутская обл.",
    city: "Черемхово",
  },
  {
    region: "Иркутская обл.",
    city: "Чунский",
  },
  {
    region: "Иркутская обл.",
    city: "Шелехов",
  },
  {
    region: "Кабардино-Балкария",
    city: "Баксан",
  },
  {
    region: "Кабардино-Балкария",
    city: "Майский",
  },
  {
    region: "Кабардино-Балкария",
    city: "Нальчик",
  },
  {
    region: "Кабардино-Балкария",
    city: "Нарткала",
  },
  {
    region: "Кабардино-Балкария",
    city: "Прохладный",
  },
  {
    region: "Кабардино-Балкария",
    city: "Советское",
  },
  {
    region: "Кабардино-Балкария",
    city: "Терек",
  },
  {
    region: "Кабардино-Балкария",
    city: "Тырныауз",
  },
  {
    region: "Кабардино-Балкария",
    city: "Чегем-Первый",
  },
  {
    region: "Калининградская обл.",
    city: "Багратионовск",
  },
  {
    region: "Калининградская обл.",
    city: "Балтийск",
  },
  {
    region: "Калининградская обл.",
    city: "Гвардейск",
  },
  {
    region: "Калининградская обл.",
    city: "Гурьевск",
  },
  {
    region: "Калининградская обл.",
    city: "Гусев",
  },
  {
    region: "Калининградская обл.",
    city: "Железнодорожный",
  },
  {
    region: "Калининградская обл.",
    city: "Зеленоградск",
  },
  {
    region: "Калининградская обл.",
    city: "Знаменск",
  },
  {
    region: "Калининградская обл.",
    city: "Кёнигсберг",
  },
  {
    region: "Калининградская обл.",
    city: "Калининград",
  },
  {
    region: "Калининградская обл.",
    city: "Кенисберг",
  },
  {
    region: "Калининградская обл.",
    city: "Краснознаменск",
  },
  {
    region: "Калининградская обл.",
    city: "Мамоново",
  },
  {
    region: "Калининградская обл.",
    city: "Неман",
  },
  {
    region: "Калининградская обл.",
    city: "Нестеров",
  },
  {
    region: "Калининградская обл.",
    city: "Озерск",
  },
  {
    region: "Калининградская обл.",
    city: "Полесск",
  },
  {
    region: "Калининградская обл.",
    city: "Правдинск",
  },
  {
    region: "Калининградская обл.",
    city: "Светлогорск",
  },
  {
    region: "Калининградская обл.",
    city: "Светлый",
  },
  {
    region: "Калининградская обл.",
    city: "Славск",
  },
  {
    region: "Калининградская обл.",
    city: "Советск",
  },
  {
    region: "Калининградская обл.",
    city: "Черняховск",
  },
  {
    region: "Калмыкия",
    city: "Аршань",
  },
  {
    region: "Калмыкия",
    city: "Каспийский",
  },
  {
    region: "Калмыкия",
    city: "Комсомольский",
  },
  {
    region: "Калмыкия",
    city: "Малые Дербеты",
  },
  {
    region: "Калмыкия",
    city: "Приютное",
  },
  {
    region: "Калмыкия",
    city: "Советское",
  },
  {
    region: "Калмыкия",
    city: "Троицкое",
  },
  {
    region: "Калмыкия",
    city: "Утта",
  },
  {
    region: "Калмыкия",
    city: "Цаган-Аман",
  },
  {
    region: "Калмыкия",
    city: "Элиста",
  },
  {
    region: "Калмыкия",
    city: "Юста",
  },
  {
    region: "Калмыкия",
    city: "Яшалта",
  },
  {
    region: "Калмыкия",
    city: "Яшкуль",
  },
  {
    region: "Калужская обл.",
    city: "Бабынино",
  },
  {
    region: "Калужская обл.",
    city: "Балабаново",
  },
  {
    region: "Калужская обл.",
    city: "Барятино",
  },
  {
    region: "Калужская обл.",
    city: "Белоусово",
  },
  {
    region: "Калужская обл.",
    city: "Бетлица",
  },
  {
    region: "Калужская обл.",
    city: "Боровск",
  },
  {
    region: "Калужская обл.",
    city: "Дугна",
  },
  {
    region: "Калужская обл.",
    city: "Дудоровский",
  },
  {
    region: "Калужская обл.",
    city: "Думиничи",
  },
  {
    region: "Калужская обл.",
    city: "Еленский",
  },
  {
    region: "Калужская обл.",
    city: "Жиздра",
  },
  {
    region: "Калужская обл.",
    city: "Износки",
  },
  {
    region: "Калужская обл.",
    city: "Калуга",
  },
  {
    region: "Калужская обл.",
    city: "Киров",
  },
  {
    region: "Калужская обл.",
    city: "Козельск",
  },
  {
    region: "Калужская обл.",
    city: "Кондрово",
  },
  {
    region: "Калужская обл.",
    city: "Людиново",
  },
  {
    region: "Калужская обл.",
    city: "Малоярославец",
  },
  {
    region: "Калужская обл.",
    city: "Медынь",
  },
  {
    region: "Калужская обл.",
    city: "Мещовск",
  },
  {
    region: "Калужская обл.",
    city: "Мосальск",
  },
  {
    region: "Калужская обл.",
    city: "Обнинск",
  },
  {
    region: "Калужская обл.",
    city: "Перемышль",
  },
  {
    region: "Калужская обл.",
    city: "Спас-Деменск",
  },
  {
    region: "Калужская обл.",
    city: "Сухиничи",
  },
  {
    region: "Калужская обл.",
    city: "Таруса",
  },
  {
    region: "Калужская обл.",
    city: "Ульяново",
  },
  {
    region: "Калужская обл.",
    city: "Ферзиково",
  },
  {
    region: "Калужская обл.",
    city: "Хвастовичи",
  },
  {
    region: "Калужская обл.",
    city: "Юхнов",
  },
  {
    region: "Камчатская обл.",
    city: "Атласово",
  },
  {
    region: "Камчатская обл.",
    city: "Аянка",
  },
  {
    region: "Камчатская обл.",
    city: "Большерецк",
  },
  {
    region: "Камчатская обл.",
    city: "Вилючинск",
  },
  {
    region: "Камчатская обл.",
    city: "Елизово",
  },
  {
    region: "Камчатская обл.",
    city: "Ильпырский",
  },
  {
    region: "Камчатская обл.",
    city: "Каменское",
  },
  {
    region: "Камчатская обл.",
    city: "Кировский",
  },
  {
    region: "Камчатская обл.",
    city: "Ключи",
  },
  {
    region: "Камчатская обл.",
    city: "Крапивная",
  },
  {
    region: "Камчатская обл.",
    city: "Мильково",
  },
  {
    region: "Камчатская обл.",
    city: "Никольское",
  },
  {
    region: "Камчатская обл.",
    city: "Озерновский",
  },
  {
    region: "Камчатская обл.",
    city: "Оссора",
  },
  {
    region: "Камчатская обл.",
    city: "Палана",
  },
  {
    region: "Камчатская обл.",
    city: "Парень",
  },
  {
    region: "Камчатская обл.",
    city: "Пахачи",
  },
  {
    region: "Камчатская обл.",
    city: "Петропавловск-Камчатский",
  },
  {
    region: "Камчатская обл.",
    city: "Тигиль",
  },
  {
    region: "Камчатская обл.",
    city: "Тиличики",
  },
  {
    region: "Камчатская обл.",
    city: "Усть-Большерецк",
  },
  {
    region: "Камчатская обл.",
    city: "Усть-Камчатск",
  },
  {
    region: "Карелия",
    city: "Амбарный",
  },
  {
    region: "Карелия",
    city: "Беломорск",
  },
  {
    region: "Карелия",
    city: "Валаам",
  },
  {
    region: "Карелия",
    city: "Вирандозеро",
  },
  {
    region: "Карелия",
    city: "Гирвас",
  },
  {
    region: "Карелия",
    city: "Деревянка",
  },
  {
    region: "Карелия",
    city: "Идель",
  },
  {
    region: "Карелия",
    city: "Ильинский",
  },
  {
    region: "Карелия",
    city: "Импалахти",
  },
  {
    region: "Карелия",
    city: "Калевала",
  },
  {
    region: "Карелия",
    city: "Кемь",
  },
  {
    region: "Карелия",
    city: "Кестеньга",
  },
  {
    region: "Карелия",
    city: "Кондопога",
  },
  {
    region: "Карелия",
    city: "Костомукша",
  },
  {
    region: "Карелия",
    city: "Лахденпохья",
  },
  {
    region: "Карелия",
    city: "Лоухи",
  },
  {
    region: "Карелия",
    city: "Медвежьегорск",
  },
  {
    region: "Карелия",
    city: "Муезерский",
  },
  {
    region: "Карелия",
    city: "Олонец",
  },
  {
    region: "Карелия",
    city: "Петрозаводск",
  },
  {
    region: "Карелия",
    city: "Питкяранта",
  },
  {
    region: "Карелия",
    city: "Повенец",
  },
  {
    region: "Карелия",
    city: "Пряжа",
  },
  {
    region: "Карелия",
    city: "Пудож",
  },
  {
    region: "Карелия",
    city: "Сегежа",
  },
  {
    region: "Карелия",
    city: "Сортавала",
  },
  {
    region: "Карелия",
    city: "Софпорог",
  },
  {
    region: "Карелия",
    city: "Суоярви",
  },
  {
    region: "Кемеровская обл.",
    city: "Анжеро-Судженск",
  },
  {
    region: "Кемеровская обл.",
    city: "Барзас",
  },
  {
    region: "Кемеровская обл.",
    city: "Белово",
  },
  {
    region: "Кемеровская обл.",
    city: "Белогорск",
  },
  {
    region: "Кемеровская обл.",
    city: "Березовский",
  },
  {
    region: "Кемеровская обл.",
    city: "Грамотеино",
  },
  {
    region: "Кемеровская обл.",
    city: "Гурьевск",
  },
  {
    region: "Кемеровская обл.",
    city: "Ижморский",
  },
  {
    region: "Кемеровская обл.",
    city: "Итатский",
  },
  {
    region: "Кемеровская обл.",
    city: "Калтан",
  },
  {
    region: "Кемеровская обл.",
    city: "Кедровка",
  },
  {
    region: "Кемеровская обл.",
    city: "Кемерово",
  },
  {
    region: "Кемеровская обл.",
    city: "Киселевск",
  },
  {
    region: "Кемеровская обл.",
    city: "Крапивинский",
  },
  {
    region: "Кемеровская обл.",
    city: "Ленинск-Кузнецкий",
  },
  {
    region: "Кемеровская обл.",
    city: "Мариинск",
  },
  {
    region: "Кемеровская обл.",
    city: "Междуреченск",
  },
  {
    region: "Кемеровская обл.",
    city: "Мыски",
  },
  {
    region: "Кемеровская обл.",
    city: "Новокузнецк",
  },
  {
    region: "Кемеровская обл.",
    city: "Осинники",
  },
  {
    region: "Кемеровская обл.",
    city: "Прокопьевск",
  },
  {
    region: "Кемеровская обл.",
    city: "Промышленная",
  },
  {
    region: "Кемеровская обл.",
    city: "Тайга",
  },
  {
    region: "Кемеровская обл.",
    city: "Таштагол",
  },
  {
    region: "Кемеровская обл.",
    city: "Тисуль",
  },
  {
    region: "Кемеровская обл.",
    city: "Топки",
  },
  {
    region: "Кемеровская обл.",
    city: "Тяжинский",
  },
  {
    region: "Кемеровская обл.",
    city: "Юрга",
  },
  {
    region: "Кемеровская обл.",
    city: "Яшкино",
  },
  {
    region: "Кемеровская обл.",
    city: "Яя",
  },
  {
    region: "Кировская обл.",
    city: "Арбаж",
  },
  {
    region: "Кировская обл.",
    city: "Аркуль",
  },
  {
    region: "Кировская обл.",
    city: "Белая Холуница",
  },
  {
    region: "Кировская обл.",
    city: "Богородское",
  },
  {
    region: "Кировская обл.",
    city: "Боровой",
  },
  {
    region: "Кировская обл.",
    city: "Верхошижемье",
  },
  {
    region: "Кировская обл.",
    city: "Вятские Поляны",
  },
  {
    region: "Кировская обл.",
    city: "Зуевка",
  },
  {
    region: "Кировская обл.",
    city: "Каринторф",
  },
  {
    region: "Кировская обл.",
    city: "Кикнур",
  },
  {
    region: "Кировская обл.",
    city: "Кильмезь",
  },
  {
    region: "Кировская обл.",
    city: "Киров",
  },
  {
    region: "Кировская обл.",
    city: "Кирово-Чепецк",
  },
  {
    region: "Кировская обл.",
    city: "Кирс",
  },
  {
    region: "Кировская обл.",
    city: "Кобра",
  },
  {
    region: "Кировская обл.",
    city: "Котельнич",
  },
  {
    region: "Кировская обл.",
    city: "Кумены",
  },
  {
    region: "Кировская обл.",
    city: "Ленинское",
  },
  {
    region: "Кировская обл.",
    city: "Луза",
  },
  {
    region: "Кировская обл.",
    city: "Малмыж",
  },
  {
    region: "Кировская обл.",
    city: "Мураши",
  },
  {
    region: "Кировская обл.",
    city: "Нагорск",
  },
  {
    region: "Кировская обл.",
    city: "Нема",
  },
  {
    region: "Кировская обл.",
    city: "Нововятск",
  },
  {
    region: "Кировская обл.",
    city: "Нолинск",
  },
  {
    region: "Кировская обл.",
    city: "Омутнинск",
  },
  {
    region: "Кировская обл.",
    city: "Опарино",
  },
  {
    region: "Кировская обл.",
    city: "Оричи",
  },
  {
    region: "Кировская обл.",
    city: "Пижанка",
  },
  {
    region: "Кировская обл.",
    city: "Подосиновец",
  },
  {
    region: "Кировская обл.",
    city: "Санчурск",
  },
  {
    region: "Кировская обл.",
    city: "Свеча",
  },
  {
    region: "Кировская обл.",
    city: "Слободской",
  },
  {
    region: "Кировская обл.",
    city: "Советск",
  },
  {
    region: "Кировская обл.",
    city: "Суна",
  },
  {
    region: "Кировская обл.",
    city: "Тужа",
  },
  {
    region: "Кировская обл.",
    city: "Уни",
  },
  {
    region: "Кировская обл.",
    city: "Уржум",
  },
  {
    region: "Кировская обл.",
    city: "Фаленки",
  },
  {
    region: "Кировская обл.",
    city: "Халтурин",
  },
  {
    region: "Кировская обл.",
    city: "Юрья",
  },
  {
    region: "Кировская обл.",
    city: "Яранск",
  },
  {
    region: "Коми",
    city: "Абезь",
  },
  {
    region: "Коми",
    city: "Айкино",
  },
  {
    region: "Коми",
    city: "Верхняя Инта",
  },
  {
    region: "Коми",
    city: "Визинга",
  },
  {
    region: "Коми",
    city: "Водный",
  },
  {
    region: "Коми",
    city: "Вожаель",
  },
  {
    region: "Коми",
    city: "Воркута",
  },
  {
    region: "Коми",
    city: "Вуктыл",
  },
  {
    region: "Коми",
    city: "Гешарт",
  },
  {
    region: "Коми",
    city: "Елецкий",
  },
  {
    region: "Коми",
    city: "Емва",
  },
  {
    region: "Коми",
    city: "Заполярный",
  },
  {
    region: "Коми",
    city: "Ижма",
  },
  {
    region: "Коми",
    city: "Инта",
  },
  {
    region: "Коми",
    city: "Ираель",
  },
  {
    region: "Коми",
    city: "Каджером",
  },
  {
    region: "Коми",
    city: "Кажым",
  },
  {
    region: "Коми",
    city: "Кожым",
  },
  {
    region: "Коми",
    city: "Койгородок",
  },
  {
    region: "Коми",
    city: "Корткерос",
  },
  {
    region: "Коми",
    city: "Кослан",
  },
  {
    region: "Коми",
    city: "Объячево",
  },
  {
    region: "Коми",
    city: "Печора",
  },
  {
    region: "Коми",
    city: "Сосногорск",
  },
  {
    region: "Коми",
    city: "Сыктывкар",
  },
  {
    region: "Коми",
    city: "Троицко-Печерск",
  },
  {
    region: "Коми",
    city: "Усинск",
  },
  {
    region: "Коми",
    city: "Усогорск",
  },
  {
    region: "Коми",
    city: "Усть-Кулом",
  },
  {
    region: "Коми",
    city: "Усть-Цильма",
  },
  {
    region: "Коми",
    city: "Ухта",
  },
  {
    region: "Костромская обл.",
    city: "Антропово",
  },
  {
    region: "Костромская обл.",
    city: "Боговарово",
  },
  {
    region: "Костромская обл.",
    city: "Буй",
  },
  {
    region: "Костромская обл.",
    city: "Волгореченск",
  },
  {
    region: "Костромская обл.",
    city: "Галич",
  },
  {
    region: "Костромская обл.",
    city: "Горчуха",
  },
  {
    region: "Костромская обл.",
    city: "Зебляки",
  },
  {
    region: "Костромская обл.",
    city: "Кадый",
  },
  {
    region: "Костромская обл.",
    city: "Кологрив",
  },
  {
    region: "Костромская обл.",
    city: "Кострома",
  },
  {
    region: "Костромская обл.",
    city: "Красное-на-Волге",
  },
  {
    region: "Костромская обл.",
    city: "Макарьев",
  },
  {
    region: "Костромская обл.",
    city: "Мантурово",
  },
  {
    region: "Костромская обл.",
    city: "Нерехта",
  },
  {
    region: "Костромская обл.",
    city: "Нея",
  },
  {
    region: "Костромская обл.",
    city: "Островское",
  },
  {
    region: "Костромская обл.",
    city: "Павино",
  },
  {
    region: "Костромская обл.",
    city: "Парфентьево",
  },
  {
    region: "Костромская обл.",
    city: "Поназырево",
  },
  {
    region: "Костромская обл.",
    city: "Солигалич",
  },
  {
    region: "Костромская обл.",
    city: "Судиславль",
  },
  {
    region: "Костромская обл.",
    city: "Сусанино",
  },
  {
    region: "Костромская обл.",
    city: "Чухлома",
  },
  {
    region: "Костромская обл.",
    city: "Шарья",
  },
  {
    region: "Костромская обл.",
    city: "Шемятино",
  },
  {
    region: "Краснодарский край",
    city: "Абинск",
  },
  {
    region: "Краснодарский край",
    city: "Абрау-Дюрсо",
  },
  {
    region: "Краснодарский край",
    city: "Анапа",
  },
  {
    region: "Краснодарский край",
    city: "Апшеронск",
  },
  {
    region: "Краснодарский край",
    city: "Армавир",
  },
  {
    region: "Краснодарский край",
    city: "Архипо-Осиповка",
  },
  {
    region: "Краснодарский край",
    city: "Афипский",
  },
  {
    region: "Краснодарский край",
    city: "Ахтырский",
  },
  {
    region: "Краснодарский край",
    city: "Ачуево",
  },
  {
    region: "Краснодарский край",
    city: "Белореченск",
  },
  {
    region: "Краснодарский край",
    city: "Верхнебаканский",
  },
  {
    region: "Краснодарский край",
    city: "Выселки",
  },
  {
    region: "Краснодарский край",
    city: "Геленджик",
  },
  {
    region: "Краснодарский край",
    city: "Гиагинская",
  },
  {
    region: "Краснодарский край",
    city: "Горячий Ключ",
  },
  {
    region: "Краснодарский край",
    city: "Джубга",
  },
  {
    region: "Краснодарский край",
    city: "Динская",
  },
  {
    region: "Краснодарский край",
    city: "Ейск",
  },
  {
    region: "Краснодарский край",
    city: "Ильский",
  },
  {
    region: "Краснодарский край",
    city: "Кабардинка",
  },
  {
    region: "Краснодарский край",
    city: "Калинино",
  },
  {
    region: "Краснодарский край",
    city: "Калининская",
  },
  {
    region: "Краснодарский край",
    city: "Каменномостский",
  },
  {
    region: "Краснодарский край",
    city: "Каневская",
  },
  {
    region: "Краснодарский край",
    city: "Кореновск",
  },
  {
    region: "Краснодарский край",
    city: "Красноармейская",
  },
  {
    region: "Краснодарский край",
    city: "Краснодар",
  },
  {
    region: "Краснодарский край",
    city: "Кропоткин",
  },
  {
    region: "Краснодарский край",
    city: "Крыловская",
  },
  {
    region: "Краснодарский край",
    city: "Крымск",
  },
  {
    region: "Краснодарский край",
    city: "Курганинск",
  },
  {
    region: "Краснодарский край",
    city: "Кущевская",
  },
  {
    region: "Краснодарский край",
    city: "Лабинск",
  },
  {
    region: "Краснодарский край",
    city: "Лениградская",
  },
  {
    region: "Краснодарский край",
    city: "Майкоп",
  },
  {
    region: "Краснодарский край",
    city: "Мостовской",
  },
  {
    region: "Краснодарский край",
    city: "Новороссийск",
  },
  {
    region: "Краснодарский край",
    city: "Отрадная",
  },
  {
    region: "Краснодарский край",
    city: "Павловская",
  },
  {
    region: "Краснодарский край",
    city: "Приморско-Ахтарск",
  },
  {
    region: "Краснодарский край",
    city: "Северская",
  },
  {
    region: "Краснодарский край",
    city: "Славянск-на-Кубани",
  },
  {
    region: "Краснодарский край",
    city: "Сочи",
  },
  {
    region: "Краснодарский край",
    city: "Староминская",
  },
  {
    region: "Краснодарский край",
    city: "Старощербиновская",
  },
  {
    region: "Краснодарский край",
    city: "Тбилисская",
  },
  {
    region: "Краснодарский край",
    city: "Темрюк",
  },
  {
    region: "Краснодарский край",
    city: "Тимашевск",
  },
  {
    region: "Краснодарский край",
    city: "Тихорецк",
  },
  {
    region: "Краснодарский край",
    city: "Туапсе",
  },
  {
    region: "Краснодарский край",
    city: "Тульский",
  },
  {
    region: "Краснодарский край",
    city: "Усть-Лабинск",
  },
  {
    region: "Краснодарский край",
    city: "Шовгеновский",
  },
  {
    region: "Красноярский край",
    city: " Железногорск",
  },
  {
    region: "Красноярский край",
    city: "Абаза",
  },
  {
    region: "Красноярский край",
    city: "Абакан",
  },
  {
    region: "Красноярский край",
    city: "Абан",
  },
  {
    region: "Красноярский край",
    city: "Агинское",
  },
  {
    region: "Красноярский край",
    city: "Артемовск",
  },
  {
    region: "Красноярский край",
    city: "Аскиз",
  },
  {
    region: "Красноярский край",
    city: "Ачинск",
  },
  {
    region: "Красноярский край",
    city: "Байкит",
  },
  {
    region: "Красноярский край",
    city: "Балахта",
  },
  {
    region: "Красноярский край",
    city: "Балыкса",
  },
  {
    region: "Красноярский край",
    city: "Белый Яр",
  },
  {
    region: "Красноярский край",
    city: "Бельтырский",
  },
  {
    region: "Красноярский край",
    city: "Бея",
  },
  {
    region: "Красноярский край",
    city: "Бискамжа",
  },
  {
    region: "Красноярский край",
    city: "Боготол",
  },
  {
    region: "Красноярский край",
    city: "Боград",
  },
  {
    region: "Красноярский край",
    city: "Богучаны",
  },
  {
    region: "Красноярский край",
    city: "Большая Мурта",
  },
  {
    region: "Красноярский край",
    city: "Большой Улуй",
  },
  {
    region: "Красноярский край",
    city: "Бородино",
  },
  {
    region: "Красноярский край",
    city: "Ванавара",
  },
  {
    region: "Красноярский край",
    city: "Верхнеимбатск",
  },
  {
    region: "Красноярский край",
    city: "Горячегорск",
  },
  {
    region: "Красноярский край",
    city: "Дзержинское",
  },
  {
    region: "Красноярский край",
    city: "Дивногорск",
  },
  {
    region: "Красноярский край",
    city: "Диксон",
  },
  {
    region: "Красноярский край",
    city: "Дудинка",
  },
  {
    region: "Красноярский край",
    city: "Емельяново",
  },
  {
    region: "Красноярский край",
    city: "Енисейск",
  },
  {
    region: "Красноярский край",
    city: "Ермаковское",
  },
  {
    region: "Красноярский край",
    city: "Заозерный",
  },
  {
    region: "Красноярский край",
    city: "Зеленогорск",
  },
  {
    region: "Красноярский край",
    city: "Игарка",
  },
  {
    region: "Красноярский край",
    city: "Идринское",
  },
  {
    region: "Красноярский край",
    city: "Иланский",
  },
  {
    region: "Красноярский край",
    city: "Ирбейское",
  },
  {
    region: "Красноярский край",
    city: "Казачинское",
  },
  {
    region: "Красноярский край",
    city: "Канск",
  },
  {
    region: "Красноярский край",
    city: "Каратузское",
  },
  {
    region: "Красноярский край",
    city: "Караул",
  },
  {
    region: "Красноярский край",
    city: "Кежма",
  },
  {
    region: "Красноярский край",
    city: "Кодинск",
  },
  {
    region: "Красноярский край",
    city: "Козулька",
  },
  {
    region: "Красноярский край",
    city: "Копьево",
  },
  {
    region: "Красноярский край",
    city: "Краснотуранск",
  },
  {
    region: "Красноярский край",
    city: "Красноярск",
  },
  {
    region: "Красноярский край",
    city: "Курагино",
  },
  {
    region: "Красноярский край",
    city: "Лесосибирск",
  },
  {
    region: "Красноярский край",
    city: "Минусинск",
  },
  {
    region: "Красноярский край",
    city: "Мотыгино",
  },
  {
    region: "Красноярский край",
    city: "Назарово",
  },
  {
    region: "Красноярский край",
    city: "Нижний Ингаш",
  },
  {
    region: "Красноярский край",
    city: "Новоселово",
  },
  {
    region: "Красноярский край",
    city: "Норильск",
  },
  {
    region: "Красноярский край",
    city: "Партизанское",
  },
  {
    region: "Красноярский край",
    city: "Пировское",
  },
  {
    region: "Красноярский край",
    city: "Саяногорск",
  },
  {
    region: "Красноярский край",
    city: "Северо-Енисейский",
  },
  {
    region: "Красноярский край",
    city: "Сосновоборск",
  },
  {
    region: "Красноярский край",
    city: "Тасеево",
  },
  {
    region: "Красноярский край",
    city: "Таштып",
  },
  {
    region: "Красноярский край",
    city: "Тура",
  },
  {
    region: "Красноярский край",
    city: "Туруханск",
  },
  {
    region: "Красноярский край",
    city: "Тюхтет",
  },
  {
    region: "Красноярский край",
    city: "Ужур",
  },
  {
    region: "Красноярский край",
    city: "Усть-Авам",
  },
  {
    region: "Красноярский край",
    city: "Уяр",
  },
  {
    region: "Красноярский край",
    city: "Хатанга",
  },
  {
    region: "Красноярский край",
    city: "Черемушки",
  },
  {
    region: "Красноярский край",
    city: "Черногорск",
  },
  {
    region: "Красноярский край",
    city: "Шалинское",
  },
  {
    region: "Красноярский край",
    city: "Шарыпово",
  },
  {
    region: "Красноярский край",
    city: "Шира",
  },
  {
    region: "Красноярский край",
    city: "Шушенское",
  },
  {
    region: "Курганская обл.",
    city: "Варгаши",
  },
  {
    region: "Курганская обл.",
    city: "Глядянское",
  },
  {
    region: "Курганская обл.",
    city: "Далматово",
  },
  {
    region: "Курганская обл.",
    city: "Каргаполье",
  },
  {
    region: "Курганская обл.",
    city: "Катайск",
  },
  {
    region: "Курганская обл.",
    city: "Кетово",
  },
  {
    region: "Курганская обл.",
    city: "Курган",
  },
  {
    region: "Курганская обл.",
    city: "Куртамыш",
  },
  {
    region: "Курганская обл.",
    city: "Лебяжье",
  },
  {
    region: "Курганская обл.",
    city: "Макушино",
  },
  {
    region: "Курганская обл.",
    city: "Мишкино",
  },
  {
    region: "Курганская обл.",
    city: "Мокроусово",
  },
  {
    region: "Курганская обл.",
    city: "Петухово",
  },
  {
    region: "Курганская обл.",
    city: "Половинное",
  },
  {
    region: "Курганская обл.",
    city: "Сафакулево",
  },
  {
    region: "Курганская обл.",
    city: "Целинное",
  },
  {
    region: "Курганская обл.",
    city: "Шадринск",
  },
  {
    region: "Курганская обл.",
    city: "Шатрово",
  },
  {
    region: "Курганская обл.",
    city: "Шумиха",
  },
  {
    region: "Курганская обл.",
    city: "Щучье",
  },
  {
    region: "Курганская обл.",
    city: "Юргамыш",
  },
  {
    region: "Курская обл.",
    city: "Альменево",
  },
  {
    region: "Курская обл.",
    city: "Белая",
  },
  {
    region: "Курская обл.",
    city: "Большое Солдатское",
  },
  {
    region: "Курская обл.",
    city: "Глушково",
  },
  {
    region: "Курская обл.",
    city: "Горшечное",
  },
  {
    region: "Курская обл.",
    city: "Дмитриев-Льговский",
  },
  {
    region: "Курская обл.",
    city: "Железногорск",
  },
  {
    region: "Курская обл.",
    city: "Золотухино",
  },
  {
    region: "Курская обл.",
    city: "Касторное",
  },
  {
    region: "Курская обл.",
    city: "Конышевка",
  },
  {
    region: "Курская обл.",
    city: "Коренево",
  },
  {
    region: "Курская обл.",
    city: "Курск",
  },
  {
    region: "Курская обл.",
    city: "Курчатов",
  },
  {
    region: "Курская обл.",
    city: "Кшенский",
  },
  {
    region: "Курская обл.",
    city: "Льгов",
  },
  {
    region: "Курская обл.",
    city: "Мантурово",
  },
  {
    region: "Курская обл.",
    city: "Медвенка",
  },
  {
    region: "Курская обл.",
    city: "Обоянь",
  },
  {
    region: "Курская обл.",
    city: "Поныри",
  },
  {
    region: "Курская обл.",
    city: "Пристень",
  },
  {
    region: "Курская обл.",
    city: "Прямицыно",
  },
  {
    region: "Курская обл.",
    city: "Рыльск",
  },
  {
    region: "Курская обл.",
    city: "Суджа",
  },
  {
    region: "Курская обл.",
    city: "Тим",
  },
  {
    region: "Курская обл.",
    city: "Фатеж",
  },
  {
    region: "Курская обл.",
    city: "Хомутовка",
  },
  {
    region: "Курская обл.",
    city: "Черемисиново",
  },
  {
    region: "Курская обл.",
    city: "Щигры",
  },
  {
    region: "Липецкая обл.",
    city: "Грязи",
  },
  {
    region: "Липецкая обл.",
    city: "Данхов",
  },
  {
    region: "Липецкая обл.",
    city: "Доброе",
  },
  {
    region: "Липецкая обл.",
    city: "Долгоруково",
  },
  {
    region: "Липецкая обл.",
    city: "Елец",
  },
  {
    region: "Липецкая обл.",
    city: "Задонск",
  },
  {
    region: "Липецкая обл.",
    city: "Измалково",
  },
  {
    region: "Липецкая обл.",
    city: "Казинка",
  },
  {
    region: "Липецкая обл.",
    city: "Лебедянь",
  },
  {
    region: "Липецкая обл.",
    city: "Лев Толстой",
  },
  {
    region: "Липецкая обл.",
    city: "Липецк",
  },
  {
    region: "Липецкая обл.",
    city: "Тербуны",
  },
  {
    region: "Липецкая обл.",
    city: "Усмань",
  },
  {
    region: "Липецкая обл.",
    city: "Хлевное",
  },
  {
    region: "Липецкая обл.",
    city: "Чаплыгин",
  },
  {
    region: "Магаданская обл.",
    city: "Анадырь",
  },
  {
    region: "Магаданская обл.",
    city: "Атка",
  },
  {
    region: "Магаданская обл.",
    city: "Балыгычан",
  },
  {
    region: "Магаданская обл.",
    city: "Беринговский",
  },
  {
    region: "Магаданская обл.",
    city: "Билибино",
  },
  {
    region: "Магаданская обл.",
    city: "Большевик",
  },
  {
    region: "Магаданская обл.",
    city: "Ванкарем",
  },
  {
    region: "Магаданская обл.",
    city: "Иульитин",
  },
  {
    region: "Магаданская обл.",
    city: "Кадыкчан",
  },
  {
    region: "Магаданская обл.",
    city: "Лаврентия",
  },
  {
    region: "Магаданская обл.",
    city: "Магадан",
  },
  {
    region: "Магаданская обл.",
    city: "Мыс Шмидта",
  },
  {
    region: "Магаданская обл.",
    city: "Ола",
  },
  {
    region: "Магаданская обл.",
    city: "Омонск",
  },
  {
    region: "Магаданская обл.",
    city: "Омсукчан",
  },
  {
    region: "Магаданская обл.",
    city: "Палатка",
  },
  {
    region: "Магаданская обл.",
    city: "Певек",
  },
  {
    region: "Магаданская обл.",
    city: "Провидения",
  },
  {
    region: "Магаданская обл.",
    city: "Сеймчан",
  },
  {
    region: "Магаданская обл.",
    city: "Синегорье",
  },
  {
    region: "Магаданская обл.",
    city: "Сусуман",
  },
  {
    region: "Магаданская обл.",
    city: "Усть-Белая",
  },
  {
    region: "Магаданская обл.",
    city: "Усть-Омчуг",
  },
  {
    region: "Магаданская обл.",
    city: "Эвенск",
  },
  {
    region: "Магаданская обл.",
    city: "Эгвекинот",
  },
  {
    region: "Магаданская обл.",
    city: "Ягодное",
  },
  {
    region: "Марий Эл",
    city: "Волжск",
  },
  {
    region: "Марий Эл",
    city: "Дубовский",
  },
  {
    region: "Марий Эл",
    city: "Звенигово",
  },
  {
    region: "Марий Эл",
    city: "Йошкар-Ола",
  },
  {
    region: "Марий Эл",
    city: "Килемары",
  },
  {
    region: "Марий Эл",
    city: "Козьмодемьянск",
  },
  {
    region: "Марий Эл",
    city: "Куженер",
  },
  {
    region: "Марий Эл",
    city: "Мари-Турек",
  },
  {
    region: "Марий Эл",
    city: "Медведево",
  },
  {
    region: "Марий Эл",
    city: "Морки",
  },
  {
    region: "Марий Эл",
    city: "Новый Торьял",
  },
  {
    region: "Марий Эл",
    city: "Оршанка",
  },
  {
    region: "Марий Эл",
    city: "Параньга",
  },
  {
    region: "Марий Эл",
    city: "Сернур",
  },
  {
    region: "Марий Эл",
    city: "Советский",
  },
  {
    region: "Марий Эл",
    city: "Юрино",
  },
  {
    region: "Мордовия",
    city: "Ардатов",
  },
  {
    region: "Мордовия",
    city: "Атюрьево",
  },
  {
    region: "Мордовия",
    city: "Атяшево",
  },
  {
    region: "Мордовия",
    city: "Большие Березники",
  },
  {
    region: "Мордовия",
    city: "Большое Игнатово",
  },
  {
    region: "Мордовия",
    city: "Выша",
  },
  {
    region: "Мордовия",
    city: "Ельники",
  },
  {
    region: "Мордовия",
    city: "Зубова Поляна",
  },
  {
    region: "Мордовия",
    city: "Инсар",
  },
  {
    region: "Мордовия",
    city: "Кадошкино",
  },
  {
    region: "Мордовия",
    city: "Кемля",
  },
  {
    region: "Мордовия",
    city: "Ковылкино",
  },
  {
    region: "Мордовия",
    city: "Комсомольский",
  },
  {
    region: "Мордовия",
    city: "Кочкурово",
  },
  {
    region: "Мордовия",
    city: "Краснослободск",
  },
  {
    region: "Мордовия",
    city: "Лямбирь",
  },
  {
    region: "Мордовия",
    city: "Ромоданово",
  },
  {
    region: "Мордовия",
    city: "Рузаевка",
  },
  {
    region: "Мордовия",
    city: "Саранск",
  },
  {
    region: "Мордовия",
    city: "Старое Шайгово",
  },
  {
    region: "Мордовия",
    city: "Темников",
  },
  {
    region: "Мордовия",
    city: "Теньгушево",
  },
  {
    region: "Мордовия",
    city: "Торбеево",
  },
  {
    region: "Мордовия",
    city: "Чамзинка",
  },
  {
    region: "Мурманская обл.",
    city: "Апатиты",
  },
  {
    region: "Мурманская обл.",
    city: "Африканда",
  },
  {
    region: "Мурманская обл.",
    city: "Верхнетуломский",
  },
  {
    region: "Мурманская обл.",
    city: "Заозерск",
  },
  {
    region: "Мурманская обл.",
    city: "Заполярный",
  },
  {
    region: "Мурманская обл.",
    city: "Зареченск",
  },
  {
    region: "Мурманская обл.",
    city: "Зашеек",
  },
  {
    region: "Мурманская обл.",
    city: "Зеленоборский",
  },
  {
    region: "Мурманская обл.",
    city: "Кандалакша",
  },
  {
    region: "Мурманская обл.",
    city: "Кильдинстрой",
  },
  {
    region: "Мурманская обл.",
    city: "Кировск",
  },
  {
    region: "Мурманская обл.",
    city: "Ковдор",
  },
  {
    region: "Мурманская обл.",
    city: "Кола",
  },
  {
    region: "Мурманская обл.",
    city: "Конда",
  },
  {
    region: "Мурманская обл.",
    city: "Мончегорск",
  },
  {
    region: "Мурманская обл.",
    city: "Мурманск",
  },
  {
    region: "Мурманская обл.",
    city: "Мурмаши",
  },
  {
    region: "Мурманская обл.",
    city: "Никель",
  },
  {
    region: "Мурманская обл.",
    city: "Оленегорск",
  },
  {
    region: "Мурманская обл.",
    city: "Полярные Зори",
  },
  {
    region: "Мурманская обл.",
    city: "Полярный",
  },
  {
    region: "Мурманская обл.",
    city: "Североморск",
  },
  {
    region: "Мурманская обл.",
    city: "Снежногорск",
  },
  {
    region: "Мурманская обл.",
    city: "Умба",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Ардатов",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Арзамас",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Арья",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Балахна",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Богородск",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Большереченск",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Большое Болдино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Большое Козино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Большое Мурашкино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Большое Пикино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Бор",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Бутурлино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Вад",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Варнавино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Васильсурск",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Вахтан",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Вача",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Велетьма",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Ветлуга",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Виля",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Вознесенское",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Володарск",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Воротынец",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Ворсма",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Воскресенское",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Выездное",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Выкса",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Гагино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Гидроторф",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Горбатов",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Горбатовка",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Городец",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Горький",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Дальнее Константиново",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Дзержинск",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Дивеево",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Досчатое",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Заволжье",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Катунки",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Керженец",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Княгинино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Ковернино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Красные Баки",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Кстово",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Кулебаки",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Лукоянов",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Лысково",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Навашино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Нижний Новгород",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Павлово",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Первомайск",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Перевоз",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Пильна",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Починки",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Саров",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Сергач",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Сеченово",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Сосновское",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Спасское",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Тонкино",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Тоншаево",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Уразовка",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Урень",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Чкаловск",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Шаранга",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Шатки",
  },
  {
    region: "Нижегородская (Горьковская)",
    city: "Шахунья",
  },
  {
    region: "Новгородская обл.",
    city: "Анциферово",
  },
  {
    region: "Новгородская обл.",
    city: "Батецкий",
  },
  {
    region: "Новгородская обл.",
    city: "Большая Вишера",
  },
  {
    region: "Новгородская обл.",
    city: "Боровичи",
  },
  {
    region: "Новгородская обл.",
    city: "Валдай",
  },
  {
    region: "Новгородская обл.",
    city: "Волот",
  },
  {
    region: "Новгородская обл.",
    city: "Деманск",
  },
  {
    region: "Новгородская обл.",
    city: "Зарубино",
  },
  {
    region: "Новгородская обл.",
    city: "Кресцы",
  },
  {
    region: "Новгородская обл.",
    city: "Любытино",
  },
  {
    region: "Новгородская обл.",
    city: "Малая Вишера",
  },
  {
    region: "Новгородская обл.",
    city: "Марево",
  },
  {
    region: "Новгородская обл.",
    city: "Мошенское",
  },
  {
    region: "Новгородская обл.",
    city: "Новгород",
  },
  {
    region: "Новгородская обл.",
    city: "Окуловка",
  },
  {
    region: "Новгородская обл.",
    city: "Парфино",
  },
  {
    region: "Новгородская обл.",
    city: "Пестово",
  },
  {
    region: "Новгородская обл.",
    city: "Поддорье",
  },
  {
    region: "Новгородская обл.",
    city: "Сольцы",
  },
  {
    region: "Новгородская обл.",
    city: "Старая Русса",
  },
  {
    region: "Новгородская обл.",
    city: "Хвойное",
  },
  {
    region: "Новгородская обл.",
    city: "Холм",
  },
  {
    region: "Новгородская обл.",
    city: "Чудово",
  },
  {
    region: "Новгородская обл.",
    city: "Шимск",
  },
  {
    region: "Новосибирская обл.",
    city: "Баган",
  },
  {
    region: "Новосибирская обл.",
    city: "Барабинск",
  },
  {
    region: "Новосибирская обл.",
    city: "Бердск",
  },
  {
    region: "Новосибирская обл.",
    city: "Биаза",
  },
  {
    region: "Новосибирская обл.",
    city: "Болотное",
  },
  {
    region: "Новосибирская обл.",
    city: "Венгерово",
  },
  {
    region: "Новосибирская обл.",
    city: "Довольное",
  },
  {
    region: "Новосибирская обл.",
    city: "Завьялово",
  },
  {
    region: "Новосибирская обл.",
    city: "Искитим",
  },
  {
    region: "Новосибирская обл.",
    city: "Карасук",
  },
  {
    region: "Новосибирская обл.",
    city: "Каргат",
  },
  {
    region: "Новосибирская обл.",
    city: "Колывань",
  },
  {
    region: "Новосибирская обл.",
    city: "Краснозерское",
  },
  {
    region: "Новосибирская обл.",
    city: "Крутиха",
  },
  {
    region: "Новосибирская обл.",
    city: "Куйбышев",
  },
  {
    region: "Новосибирская обл.",
    city: "Купино",
  },
  {
    region: "Новосибирская обл.",
    city: "Кыштовка",
  },
  {
    region: "Новосибирская обл.",
    city: "Маслянино",
  },
  {
    region: "Новосибирская обл.",
    city: "Михайловский",
  },
  {
    region: "Новосибирская обл.",
    city: "Мошково",
  },
  {
    region: "Новосибирская обл.",
    city: "Новосибирск",
  },
  {
    region: "Новосибирская обл.",
    city: "Ордынское",
  },
  {
    region: "Новосибирская обл.",
    city: "Северное",
  },
  {
    region: "Новосибирская обл.",
    city: "Сузун",
  },
  {
    region: "Новосибирская обл.",
    city: "Татарск",
  },
  {
    region: "Новосибирская обл.",
    city: "Тогучин",
  },
  {
    region: "Новосибирская обл.",
    city: "Убинское",
  },
  {
    region: "Новосибирская обл.",
    city: "Усть-Тарка",
  },
  {
    region: "Новосибирская обл.",
    city: "Чаны",
  },
  {
    region: "Новосибирская обл.",
    city: "Черепаново",
  },
  {
    region: "Новосибирская обл.",
    city: "Чистоозерное",
  },
  {
    region: "Новосибирская обл.",
    city: "Чулым",
  },
  {
    region: "Омская обл.",
    city: "Береговой",
  },
  {
    region: "Омская обл.",
    city: "Большеречье",
  },
  {
    region: "Омская обл.",
    city: "Большие Уки",
  },
  {
    region: "Омская обл.",
    city: "Горьковское",
  },
  {
    region: "Омская обл.",
    city: "Знаменское",
  },
  {
    region: "Омская обл.",
    city: "Исилькуль",
  },
  {
    region: "Омская обл.",
    city: "Калачинск",
  },
  {
    region: "Омская обл.",
    city: "Колосовка",
  },
  {
    region: "Омская обл.",
    city: "Кормиловка",
  },
  {
    region: "Омская обл.",
    city: "Крутинка",
  },
  {
    region: "Омская обл.",
    city: "Любинский",
  },
  {
    region: "Омская обл.",
    city: "Марьяновка",
  },
  {
    region: "Омская обл.",
    city: "Муромцево",
  },
  {
    region: "Омская обл.",
    city: "Называевск",
  },
  {
    region: "Омская обл.",
    city: "Нижняя Омка",
  },
  {
    region: "Омская обл.",
    city: "Нововаршавка",
  },
  {
    region: "Омская обл.",
    city: "Одесское",
  },
  {
    region: "Омская обл.",
    city: "Оконешниково",
  },
  {
    region: "Омская обл.",
    city: "Омск",
  },
  {
    region: "Омская обл.",
    city: "Павлоградка",
  },
  {
    region: "Омская обл.",
    city: "Полтавка",
  },
  {
    region: "Омская обл.",
    city: "Русская Поляна",
  },
  {
    region: "Омская обл.",
    city: "Саргатское",
  },
  {
    region: "Омская обл.",
    city: "Седельниково",
  },
  {
    region: "Омская обл.",
    city: "Таврическое",
  },
  {
    region: "Омская обл.",
    city: "Тара",
  },
  {
    region: "Омская обл.",
    city: "Тевриз",
  },
  {
    region: "Омская обл.",
    city: "Тюкалинск",
  },
  {
    region: "Омская обл.",
    city: "Усть-Ишим",
  },
  {
    region: "Омская обл.",
    city: "Черлак",
  },
  {
    region: "Омская обл.",
    city: "Шербакуль",
  },
  {
    region: "Оренбургская обл.",
    city: "Абдулино",
  },
  {
    region: "Оренбургская обл.",
    city: "Адамовка",
  },
  {
    region: "Оренбургская обл.",
    city: "Айдырлинский",
  },
  {
    region: "Оренбургская обл.",
    city: "Акбулак",
  },
  {
    region: "Оренбургская обл.",
    city: "Аккермановка",
  },
  {
    region: "Оренбургская обл.",
    city: "Асекеево",
  },
  {
    region: "Оренбургская обл.",
    city: "Беляевка",
  },
  {
    region: "Оренбургская обл.",
    city: "Бугуруслан",
  },
  {
    region: "Оренбургская обл.",
    city: "Бузулук",
  },
  {
    region: "Оренбургская обл.",
    city: "Гай",
  },
  {
    region: "Оренбургская обл.",
    city: "Грачевка",
  },
  {
    region: "Оренбургская обл.",
    city: "Домбаровский",
  },
  {
    region: "Оренбургская обл.",
    city: "Дубенский",
  },
  {
    region: "Оренбургская обл.",
    city: "Илек",
  },
  {
    region: "Оренбургская обл.",
    city: "Ириклинский",
  },
  {
    region: "Оренбургская обл.",
    city: "Кувандык",
  },
  {
    region: "Оренбургская обл.",
    city: "Курманаевка",
  },
  {
    region: "Оренбургская обл.",
    city: "Матвеевка",
  },
  {
    region: "Оренбургская обл.",
    city: "Медногорск",
  },
  {
    region: "Оренбургская обл.",
    city: "Новоорск",
  },
  {
    region: "Оренбургская обл.",
    city: "Новосергиевка",
  },
  {
    region: "Оренбургская обл.",
    city: "Новотроицк",
  },
  {
    region: "Оренбургская обл.",
    city: "Октябрьское",
  },
  {
    region: "Оренбургская обл.",
    city: "Оренбург",
  },
  {
    region: "Оренбургская обл.",
    city: "Орск",
  },
  {
    region: "Оренбургская обл.",
    city: "Первомайский",
  },
  {
    region: "Оренбургская обл.",
    city: "Переволоцкий",
  },
  {
    region: "Оренбургская обл.",
    city: "Пономаревка",
  },
  {
    region: "Оренбургская обл.",
    city: "Саракташ",
  },
  {
    region: "Оренбургская обл.",
    city: "Светлый",
  },
  {
    region: "Оренбургская обл.",
    city: "Северное",
  },
  {
    region: "Оренбургская обл.",
    city: "Соль-Илецк",
  },
  {
    region: "Оренбургская обл.",
    city: "Сорочинск",
  },
  {
    region: "Оренбургская обл.",
    city: "Ташла",
  },
  {
    region: "Оренбургская обл.",
    city: "Тоцкое",
  },
  {
    region: "Оренбургская обл.",
    city: "Тюльган",
  },
  {
    region: "Оренбургская обл.",
    city: "Шарлык",
  },
  {
    region: "Оренбургская обл.",
    city: "Энергетик",
  },
  {
    region: "Оренбургская обл.",
    city: "Ясный",
  },
  {
    region: "Орловская обл.",
    city: "Болхов",
  },
  {
    region: "Орловская обл.",
    city: "Верховье",
  },
  {
    region: "Орловская обл.",
    city: "Глазуновка",
  },
  {
    region: "Орловская обл.",
    city: "Дмитровск-Орловский",
  },
  {
    region: "Орловская обл.",
    city: "Долгое",
  },
  {
    region: "Орловская обл.",
    city: "Залегощь",
  },
  {
    region: "Орловская обл.",
    city: "Змиевка",
  },
  {
    region: "Орловская обл.",
    city: "Знаменское",
  },
  {
    region: "Орловская обл.",
    city: "Колпны",
  },
  {
    region: "Орловская обл.",
    city: "Красная Заря",
  },
  {
    region: "Орловская обл.",
    city: "Кромы",
  },
  {
    region: "Орловская обл.",
    city: "Ливны",
  },
  {
    region: "Орловская обл.",
    city: "Малоархангельск",
  },
  {
    region: "Орловская обл.",
    city: "Мценск",
  },
  {
    region: "Орловская обл.",
    city: "Нарышкино",
  },
  {
    region: "Орловская обл.",
    city: "Новосиль",
  },
  {
    region: "Орловская обл.",
    city: "Орел",
  },
  {
    region: "Орловская обл.",
    city: "Покровское",
  },
  {
    region: "Орловская обл.",
    city: "Сосково",
  },
  {
    region: "Орловская обл.",
    city: "Тросна",
  },
  {
    region: "Орловская обл.",
    city: "Хомутово",
  },
  {
    region: "Орловская обл.",
    city: "Хотынец",
  },
  {
    region: "Орловская обл.",
    city: "Шаблыкино",
  },
  {
    region: "Пензенская обл.",
    city: "Башмаково",
  },
  {
    region: "Пензенская обл.",
    city: "Беднодемьяновск",
  },
  {
    region: "Пензенская обл.",
    city: "Беково",
  },
  {
    region: "Пензенская обл.",
    city: "Белинский",
  },
  {
    region: "Пензенская обл.",
    city: "Бессоновка",
  },
  {
    region: "Пензенская обл.",
    city: "Вадинск",
  },
  {
    region: "Пензенская обл.",
    city: "Верхозим",
  },
  {
    region: "Пензенская обл.",
    city: "Городище",
  },
  {
    region: "Пензенская обл.",
    city: "Евлашево",
  },
  {
    region: "Пензенская обл.",
    city: "Земетчино",
  },
  {
    region: "Пензенская обл.",
    city: "Золотаревка",
  },
  {
    region: "Пензенская обл.",
    city: "Исса",
  },
  {
    region: "Пензенская обл.",
    city: "Каменка",
  },
  {
    region: "Пензенская обл.",
    city: "Колышлей",
  },
  {
    region: "Пензенская обл.",
    city: "Кондоль",
  },
  {
    region: "Пензенская обл.",
    city: "Кузнецк",
  },
  {
    region: "Пензенская обл.",
    city: "Лопатино",
  },
  {
    region: "Пензенская обл.",
    city: "Малая Сердоба",
  },
  {
    region: "Пензенская обл.",
    city: "Мокшан",
  },
  {
    region: "Пензенская обл.",
    city: "Наровчат",
  },
  {
    region: "Пензенская обл.",
    city: "Неверкино",
  },
  {
    region: "Пензенская обл.",
    city: "Нижний Ломов",
  },
  {
    region: "Пензенская обл.",
    city: "Никольск",
  },
  {
    region: "Пензенская обл.",
    city: "Пачелма",
  },
  {
    region: "Пензенская обл.",
    city: "Пенза",
  },
  {
    region: "Пензенская обл.",
    city: "Русский Камешкир",
  },
  {
    region: "Пензенская обл.",
    city: "Сердобск",
  },
  {
    region: "Пензенская обл.",
    city: "Сосновоборск",
  },
  {
    region: "Пензенская обл.",
    city: "Сура",
  },
  {
    region: "Пензенская обл.",
    city: "Тамала",
  },
  {
    region: "Пензенская обл.",
    city: "Шемышейка",
  },
  {
    region: "Пермская обл.",
    city: "Барда",
  },
  {
    region: "Пермская обл.",
    city: "Березники",
  },
  {
    region: "Пермская обл.",
    city: "Большая Соснова",
  },
  {
    region: "Пермская обл.",
    city: "Верещагино",
  },
  {
    region: "Пермская обл.",
    city: "Гайны",
  },
  {
    region: "Пермская обл.",
    city: "Горнозаводск",
  },
  {
    region: "Пермская обл.",
    city: "Гремячинск",
  },
  {
    region: "Пермская обл.",
    city: "Губаха",
  },
  {
    region: "Пермская обл.",
    city: "Добрянка",
  },
  {
    region: "Пермская обл.",
    city: "Елово",
  },
  {
    region: "Пермская обл.",
    city: "Зюкайка",
  },
  {
    region: "Пермская обл.",
    city: "Ильинский",
  },
  {
    region: "Пермская обл.",
    city: "Карагай",
  },
  {
    region: "Пермская обл.",
    city: "Керчевский",
  },
  {
    region: "Пермская обл.",
    city: "Кизел",
  },
  {
    region: "Пермская обл.",
    city: "Коса",
  },
  {
    region: "Пермская обл.",
    city: "Кочево",
  },
  {
    region: "Пермская обл.",
    city: "Красновишерск",
  },
  {
    region: "Пермская обл.",
    city: "Краснокамск",
  },
  {
    region: "Пермская обл.",
    city: "Кудымкар",
  },
  {
    region: "Пермская обл.",
    city: "Куеда",
  },
  {
    region: "Пермская обл.",
    city: "Кунгур",
  },
  {
    region: "Пермская обл.",
    city: "Лысьва",
  },
  {
    region: "Пермская обл.",
    city: "Ныроб",
  },
  {
    region: "Пермская обл.",
    city: "Нытва",
  },
  {
    region: "Пермская обл.",
    city: "Октябрьский",
  },
  {
    region: "Пермская обл.",
    city: "Орда",
  },
  {
    region: "Пермская обл.",
    city: "Оса",
  },
  {
    region: "Пермская обл.",
    city: "Оханск",
  },
  {
    region: "Пермская обл.",
    city: "Очер",
  },
  {
    region: "Пермская обл.",
    city: "Пермь",
  },
  {
    region: "Пермская обл.",
    city: "Соликамск",
  },
  {
    region: "Пермская обл.",
    city: "Суксун",
  },
  {
    region: "Пермская обл.",
    city: "Уинское",
  },
  {
    region: "Пермская обл.",
    city: "Усолье",
  },
  {
    region: "Пермская обл.",
    city: "Усть-Кишерть",
  },
  {
    region: "Пермская обл.",
    city: "Чайковский",
  },
  {
    region: "Пермская обл.",
    city: "Частые",
  },
  {
    region: "Пермская обл.",
    city: "Чердынь",
  },
  {
    region: "Пермская обл.",
    city: "Чернореченский",
  },
  {
    region: "Пермская обл.",
    city: "Чернушка",
  },
  {
    region: "Пермская обл.",
    city: "Чусовой",
  },
  {
    region: "Пермская обл.",
    city: "Юрла",
  },
  {
    region: "Пермская обл.",
    city: "Юсьва",
  },
  {
    region: "Приморский край",
    city: "Анучино",
  },
  {
    region: "Приморский край",
    city: "Арсеньев",
  },
  {
    region: "Приморский край",
    city: "Артем",
  },
  {
    region: "Приморский край",
    city: "Артемовский",
  },
  {
    region: "Приморский край",
    city: "Большой Камень",
  },
  {
    region: "Приморский край",
    city: "Валентин",
  },
  {
    region: "Приморский край",
    city: "Владивосток",
  },
  {
    region: "Приморский край",
    city: "Высокогорск",
  },
  {
    region: "Приморский край",
    city: "Горные Ключи",
  },
  {
    region: "Приморский край",
    city: "Горный",
  },
  {
    region: "Приморский край",
    city: "Дальнегорск",
  },
  {
    region: "Приморский край",
    city: "Дальнереченск",
  },
  {
    region: "Приморский край",
    city: "Зарубино",
  },
  {
    region: "Приморский край",
    city: "Кавалерово",
  },
  {
    region: "Приморский край",
    city: "Каменка",
  },
  {
    region: "Приморский край",
    city: "Камень-Рыболов",
  },
  {
    region: "Приморский край",
    city: "Кировский",
  },
  {
    region: "Приморский край",
    city: "Лазо",
  },
  {
    region: "Приморский край",
    city: "Лесозаводск",
  },
  {
    region: "Приморский край",
    city: "Лучегорск",
  },
  {
    region: "Приморский край",
    city: "Михайловка",
  },
  {
    region: "Приморский край",
    city: "Находка",
  },
  {
    region: "Приморский край",
    city: "Новопокровка",
  },
  {
    region: "Приморский край",
    city: "Ольга",
  },
  {
    region: "Приморский край",
    city: "Партизанск",
  },
  {
    region: "Приморский край",
    city: "Пограничный",
  },
  {
    region: "Приморский край",
    city: "Покровка",
  },
  {
    region: "Приморский край",
    city: "Русский",
  },
  {
    region: "Приморский край",
    city: "Самарга",
  },
  {
    region: "Приморский край",
    city: "Славянка",
  },
  {
    region: "Приморский край",
    city: "Спасск-Дальний",
  },
  {
    region: "Приморский край",
    city: "Терней",
  },
  {
    region: "Приморский край",
    city: "Уссурийск",
  },
  {
    region: "Приморский край",
    city: "Фокино",
  },
  {
    region: "Приморский край",
    city: "Хасан",
  },
  {
    region: "Приморский край",
    city: "Хороль",
  },
  {
    region: "Приморский край",
    city: "Черниговка",
  },
  {
    region: "Приморский край",
    city: "Чугуевка",
  },
  {
    region: "Приморский край",
    city: "Яковлевка",
  },
  {
    region: "Псковская обл.",
    city: "Бежаницы",
  },
  {
    region: "Псковская обл.",
    city: "Великие Луки",
  },
  {
    region: "Псковская обл.",
    city: "Гдов",
  },
  {
    region: "Псковская обл.",
    city: "Дедовичи",
  },
  {
    region: "Псковская обл.",
    city: "Дно",
  },
  {
    region: "Псковская обл.",
    city: "Заплюсье",
  },
  {
    region: "Псковская обл.",
    city: "Идрица",
  },
  {
    region: "Псковская обл.",
    city: "Красногородское",
  },
  {
    region: "Псковская обл.",
    city: "Кунья",
  },
  {
    region: "Псковская обл.",
    city: "Локня",
  },
  {
    region: "Псковская обл.",
    city: "Невель",
  },
  {
    region: "Псковская обл.",
    city: "Новоржев",
  },
  {
    region: "Псковская обл.",
    city: "Новосокольники",
  },
  {
    region: "Псковская обл.",
    city: "Опочка",
  },
  {
    region: "Псковская обл.",
    city: "Остров",
  },
  {
    region: "Псковская обл.",
    city: "Палкино",
  },
  {
    region: "Псковская обл.",
    city: "Печоры",
  },
  {
    region: "Псковская обл.",
    city: "Плюсса",
  },
  {
    region: "Псковская обл.",
    city: "Порхов",
  },
  {
    region: "Псковская обл.",
    city: "Псков",
  },
  {
    region: "Псковская обл.",
    city: "Пустошка",
  },
  {
    region: "Псковская обл.",
    city: "Пушкинские Горы",
  },
  {
    region: "Псковская обл.",
    city: "Пыталово",
  },
  {
    region: "Псковская обл.",
    city: "Себеж",
  },
  {
    region: "Псковская обл.",
    city: "Струги-Красные",
  },
  {
    region: "Псковская обл.",
    city: "Усвяты",
  },
  {
    region: "Ростовская обл.",
    city: "Азов",
  },
  {
    region: "Ростовская обл.",
    city: "Аксай",
  },
  {
    region: "Ростовская обл.",
    city: "Алмазный",
  },
  {
    region: "Ростовская обл.",
    city: "Аютинск",
  },
  {
    region: "Ростовская обл.",
    city: "Багаевский",
  },
  {
    region: "Ростовская обл.",
    city: "Батайск",
  },
  {
    region: "Ростовская обл.",
    city: "Белая Калитва",
  },
  {
    region: "Ростовская обл.",
    city: "Боковская",
  },
  {
    region: "Ростовская обл.",
    city: "Большая Мартыновка",
  },
  {
    region: "Ростовская обл.",
    city: "Вешенская",
  },
  {
    region: "Ростовская обл.",
    city: "Волгодонск",
  },
  {
    region: "Ростовская обл.",
    city: "Восход",
  },
  {
    region: "Ростовская обл.",
    city: "Гигант",
  },
  {
    region: "Ростовская обл.",
    city: "Горняцкий",
  },
  {
    region: "Ростовская обл.",
    city: "Гуково",
  },
  {
    region: "Ростовская обл.",
    city: "Донецк",
  },
  {
    region: "Ростовская обл.",
    city: "Донской",
  },
  {
    region: "Ростовская обл.",
    city: "Дубовское",
  },
  {
    region: "Ростовская обл.",
    city: "Егорлыкская",
  },
  {
    region: "Ростовская обл.",
    city: "Жирнов",
  },
  {
    region: "Ростовская обл.",
    city: "Заветное",
  },
  {
    region: "Ростовская обл.",
    city: "Заводской",
  },
  {
    region: "Ростовская обл.",
    city: "Зверево",
  },
  {
    region: "Ростовская обл.",
    city: "Зерноград",
  },
  {
    region: "Ростовская обл.",
    city: "Зимовники",
  },
  {
    region: "Ростовская обл.",
    city: "Кагальницкая",
  },
  {
    region: "Ростовская обл.",
    city: "Казанская",
  },
  {
    region: "Ростовская обл.",
    city: "Каменоломни",
  },
  {
    region: "Ростовская обл.",
    city: "Каменск-Шахтинский",
  },
  {
    region: "Ростовская обл.",
    city: "Кашары",
  },
  {
    region: "Ростовская обл.",
    city: "Коксовый",
  },
  {
    region: "Ростовская обл.",
    city: "Константиновск",
  },
  {
    region: "Ростовская обл.",
    city: "Красный Сулин",
  },
  {
    region: "Ростовская обл.",
    city: "Куйбышево",
  },
  {
    region: "Ростовская обл.",
    city: "Матвеев Курган",
  },
  {
    region: "Ростовская обл.",
    city: "Мигулинская",
  },
  {
    region: "Ростовская обл.",
    city: "Миллерово",
  },
  {
    region: "Ростовская обл.",
    city: "Милютинская",
  },
  {
    region: "Ростовская обл.",
    city: "Морозовск",
  },
  {
    region: "Ростовская обл.",
    city: "Новочеркасск",
  },
  {
    region: "Ростовская обл.",
    city: "Новошахтинск",
  },
  {
    region: "Ростовская обл.",
    city: "Обливская",
  },
  {
    region: "Ростовская обл.",
    city: "Орловский",
  },
  {
    region: "Ростовская обл.",
    city: "Песчанокопское",
  },
  {
    region: "Ростовская обл.",
    city: "Покровское",
  },
  {
    region: "Ростовская обл.",
    city: "Пролетарск",
  },
  {
    region: "Ростовская обл.",
    city: "Ремонтное",
  },
  {
    region: "Ростовская обл.",
    city: "Родионово-Несветайская",
  },
  {
    region: "Ростовская обл.",
    city: "Ростов-на-Дону",
  },
  {
    region: "Ростовская обл.",
    city: "Сальск",
  },
  {
    region: "Ростовская обл.",
    city: "Семикаракорск",
  },
  {
    region: "Ростовская обл.",
    city: "Таганрог",
  },
  {
    region: "Ростовская обл.",
    city: "Тарасовский",
  },
  {
    region: "Ростовская обл.",
    city: "Тацинский",
  },
  {
    region: "Ростовская обл.",
    city: "Усть-Донецкий",
  },
  {
    region: "Ростовская обл.",
    city: "Целина",
  },
  {
    region: "Ростовская обл.",
    city: "Цимлянск",
  },
  {
    region: "Ростовская обл.",
    city: "Чалтырь",
  },
  {
    region: "Ростовская обл.",
    city: "Чертково",
  },
  {
    region: "Ростовская обл.",
    city: "Шахты",
  },
  {
    region: "Ростовская обл.",
    city: "Шолоховский",
  },
  {
    region: "Рязанская обл.",
    city: "Александро-Невский",
  },
  {
    region: "Рязанская обл.",
    city: "Горняк",
  },
  {
    region: "Рязанская обл.",
    city: "Гусь Железный",
  },
  {
    region: "Рязанская обл.",
    city: "Елатьма",
  },
  {
    region: "Рязанская обл.",
    city: "Ермишь",
  },
  {
    region: "Рязанская обл.",
    city: "Заречный",
  },
  {
    region: "Рязанская обл.",
    city: "Захарово",
  },
  {
    region: "Рязанская обл.",
    city: "Кадом",
  },
  {
    region: "Рязанская обл.",
    city: "Касимов",
  },
  {
    region: "Рязанская обл.",
    city: "Кораблино",
  },
  {
    region: "Рязанская обл.",
    city: "Милославское",
  },
  {
    region: "Рязанская обл.",
    city: "Михайлов",
  },
  {
    region: "Рязанская обл.",
    city: "Пителино",
  },
  {
    region: "Рязанская обл.",
    city: "Пронск",
  },
  {
    region: "Рязанская обл.",
    city: "Путятино",
  },
  {
    region: "Рязанская обл.",
    city: "Рыбное",
  },
  {
    region: "Рязанская обл.",
    city: "Ряжск",
  },
  {
    region: "Рязанская обл.",
    city: "Рязань",
  },
  {
    region: "Рязанская обл.",
    city: "Сапожок",
  },
  {
    region: "Рязанская обл.",
    city: "Сараи",
  },
  {
    region: "Рязанская обл.",
    city: "Сасово",
  },
  {
    region: "Рязанская обл.",
    city: "Скопин",
  },
  {
    region: "Рязанская обл.",
    city: "Спас-Клепики",
  },
  {
    region: "Рязанская обл.",
    city: "Спасск-Рязанский",
  },
  {
    region: "Рязанская обл.",
    city: "Старожилово",
  },
  {
    region: "Рязанская обл.",
    city: "Ухолово",
  },
  {
    region: "Рязанская обл.",
    city: "Чучково",
  },
  {
    region: "Рязанская обл.",
    city: "Шацк",
  },
  {
    region: "Рязанская обл.",
    city: "Шилово",
  },
  {
    region: "Самарская обл.",
    city: "Алексеевка",
  },
  {
    region: "Самарская обл.",
    city: "Безенчук",
  },
  {
    region: "Самарская обл.",
    city: "Богатое",
  },
  {
    region: "Самарская обл.",
    city: "Богатырь",
  },
  {
    region: "Самарская обл.",
    city: "Большая Глущица",
  },
  {
    region: "Самарская обл.",
    city: "Большая Черниговка",
  },
  {
    region: "Самарская обл.",
    city: "Борское",
  },
  {
    region: "Самарская обл.",
    city: "Волжский",
  },
  {
    region: "Самарская обл.",
    city: "Жигулевск",
  },
  {
    region: "Самарская обл.",
    city: "Зольное",
  },
  {
    region: "Самарская обл.",
    city: "Исаклы",
  },
  {
    region: "Самарская обл.",
    city: "Камышла",
  },
  {
    region: "Самарская обл.",
    city: "Кинель",
  },
  {
    region: "Самарская обл.",
    city: "Кинель-Черкасы",
  },
  {
    region: "Самарская обл.",
    city: "Клявлино",
  },
  {
    region: "Самарская обл.",
    city: "Кошки",
  },
  {
    region: "Самарская обл.",
    city: "Красноармейское",
  },
  {
    region: "Самарская обл.",
    city: "Красный Яр",
  },
  {
    region: "Самарская обл.",
    city: "Куйбышев",
  },
  {
    region: "Самарская обл.",
    city: "Нефтегорск",
  },
  {
    region: "Самарская обл.",
    city: "Новокуйбышевск",
  },
  {
    region: "Самарская обл.",
    city: "Октябрьск",
  },
  {
    region: "Самарская обл.",
    city: "Отрадный",
  },
  {
    region: "Самарская обл.",
    city: "Пестравка",
  },
  {
    region: "Самарская обл.",
    city: "Похвистнево",
  },
  {
    region: "Самарская обл.",
    city: "Приволжье",
  },
  {
    region: "Самарская обл.",
    city: "Самара",
  },
  {
    region: "Самарская обл.",
    city: "Сургут (Самарская обл.)",
  },
  {
    region: "Самарская обл.",
    city: "Сызрань",
  },
  {
    region: "Самарская обл.",
    city: "Тольятти",
  },
  {
    region: "Самарская обл.",
    city: "Хворостянка",
  },
  {
    region: "Самарская обл.",
    city: "Чапаевск",
  },
  {
    region: "Самарская обл.",
    city: "Челно-Вершины",
  },
  {
    region: "Самарская обл.",
    city: "Шентала",
  },
  {
    region: "Самарская обл.",
    city: "Шигоны",
  },
  {
    region: "Саратовская обл.",
    city: "Александров Гай",
  },
  {
    region: "Саратовская обл.",
    city: "Аркадак",
  },
  {
    region: "Саратовская обл.",
    city: "Аткарск",
  },
  {
    region: "Саратовская обл.",
    city: "Базарный Карабулак",
  },
  {
    region: "Саратовская обл.",
    city: "Балаково",
  },
  {
    region: "Саратовская обл.",
    city: "Балашов",
  },
  {
    region: "Саратовская обл.",
    city: "Балтай",
  },
  {
    region: "Саратовская обл.",
    city: "Возрождение",
  },
  {
    region: "Саратовская обл.",
    city: "Вольск",
  },
  {
    region: "Саратовская обл.",
    city: "Воскресенское",
  },
  {
    region: "Саратовская обл.",
    city: "Горный",
  },
  {
    region: "Саратовская обл.",
    city: "Дергачи",
  },
  {
    region: "Саратовская обл.",
    city: "Духовницкое",
  },
  {
    region: "Саратовская обл.",
    city: "Екатериновка",
  },
  {
    region: "Саратовская обл.",
    city: "Ершов",
  },
  {
    region: "Саратовская обл.",
    city: "Заречный",
  },
  {
    region: "Саратовская обл.",
    city: "Ивантеевка",
  },
  {
    region: "Саратовская обл.",
    city: "Калининск",
  },
  {
    region: "Саратовская обл.",
    city: "Каменский",
  },
  {
    region: "Саратовская обл.",
    city: "Красноармейск",
  },
  {
    region: "Саратовская обл.",
    city: "Красный Кут",
  },
  {
    region: "Саратовская обл.",
    city: "Лысые Горы",
  },
  {
    region: "Саратовская обл.",
    city: "Маркс",
  },
  {
    region: "Саратовская обл.",
    city: "Мокроус",
  },
  {
    region: "Саратовская обл.",
    city: "Новоузенск",
  },
  {
    region: "Саратовская обл.",
    city: "Новые Бурасы",
  },
  {
    region: "Саратовская обл.",
    city: "Озинки",
  },
  {
    region: "Саратовская обл.",
    city: "Перелюб",
  },
  {
    region: "Саратовская обл.",
    city: "Петровск",
  },
  {
    region: "Саратовская обл.",
    city: "Питерка",
  },
  {
    region: "Саратовская обл.",
    city: "Пугачев",
  },
  {
    region: "Саратовская обл.",
    city: "Ровное",
  },
  {
    region: "Саратовская обл.",
    city: "Романовка",
  },
  {
    region: "Саратовская обл.",
    city: "Ртищево",
  },
  {
    region: "Саратовская обл.",
    city: "Самойловка",
  },
  {
    region: "Саратовская обл.",
    city: "Саратов",
  },
  {
    region: "Саратовская обл.",
    city: "Степное",
  },
  {
    region: "Саратовская обл.",
    city: "Татищево",
  },
  {
    region: "Саратовская обл.",
    city: "Турки",
  },
  {
    region: "Саратовская обл.",
    city: "Хвалынск",
  },
  {
    region: "Саратовская обл.",
    city: "Энгельс",
  },
  {
    region: "Саха (Якутия)",
    city: "Абый",
  },
  {
    region: "Саха (Якутия)",
    city: "Алдан",
  },
  {
    region: "Саха (Якутия)",
    city: "Амга",
  },
  {
    region: "Саха (Якутия)",
    city: "Батагай",
  },
  {
    region: "Саха (Якутия)",
    city: "Бердигестях",
  },
  {
    region: "Саха (Якутия)",
    city: "Беркакит",
  },
  {
    region: "Саха (Якутия)",
    city: "Бестях",
  },
  {
    region: "Саха (Якутия)",
    city: "Борогонцы",
  },
  {
    region: "Саха (Якутия)",
    city: "Верхневилюйск",
  },
  {
    region: "Саха (Якутия)",
    city: "Верхнеколымск",
  },
  {
    region: "Саха (Якутия)",
    city: "Верхоянск",
  },
  {
    region: "Саха (Якутия)",
    city: "Вилюйск",
  },
  {
    region: "Саха (Якутия)",
    city: "Витим",
  },
  {
    region: "Саха (Якутия)",
    city: "Власово",
  },
  {
    region: "Саха (Якутия)",
    city: "Жиганск",
  },
  {
    region: "Саха (Якутия)",
    city: "Зырянка",
  },
  {
    region: "Саха (Якутия)",
    city: "Кангалассы",
  },
  {
    region: "Саха (Якутия)",
    city: "Канкунский",
  },
  {
    region: "Саха (Якутия)",
    city: "Ленск",
  },
  {
    region: "Саха (Якутия)",
    city: "Майя",
  },
  {
    region: "Саха (Якутия)",
    city: "Менкеря",
  },
  {
    region: "Саха (Якутия)",
    city: "Мирный",
  },
  {
    region: "Саха (Якутия)",
    city: "Нерюнгри",
  },
  {
    region: "Саха (Якутия)",
    city: "Нычалах",
  },
  {
    region: "Саха (Якутия)",
    city: "Нюрба",
  },
  {
    region: "Саха (Якутия)",
    city: "Олекминск",
  },
  {
    region: "Саха (Якутия)",
    city: "Покровск",
  },
  {
    region: "Саха (Якутия)",
    city: "Сангар",
  },
  {
    region: "Саха (Якутия)",
    city: "Саскылах",
  },
  {
    region: "Саха (Якутия)",
    city: "Среднеколымск",
  },
  {
    region: "Саха (Якутия)",
    city: "Сунтар",
  },
  {
    region: "Саха (Якутия)",
    city: "Тикси",
  },
  {
    region: "Саха (Якутия)",
    city: "Усть-Мая",
  },
  {
    region: "Саха (Якутия)",
    city: "Усть-Нера",
  },
  {
    region: "Саха (Якутия)",
    city: "Хандыга",
  },
  {
    region: "Саха (Якутия)",
    city: "Хонуу",
  },
  {
    region: "Саха (Якутия)",
    city: "Черский",
  },
  {
    region: "Саха (Якутия)",
    city: "Чокурдах",
  },
  {
    region: "Саха (Якутия)",
    city: "Чурапча",
  },
  {
    region: "Саха (Якутия)",
    city: "Якутск",
  },
  {
    region: "Сахалин",
    city: "Александровск-Сахалинский",
  },
  {
    region: "Сахалин",
    city: "Анбэцу",
  },
  {
    region: "Сахалин",
    city: "Анива",
  },
  {
    region: "Сахалин",
    city: "Бошняково",
  },
  {
    region: "Сахалин",
    city: "Быков",
  },
  {
    region: "Сахалин",
    city: "Вахрушев",
  },
  {
    region: "Сахалин",
    city: "Взморье",
  },
  {
    region: "Сахалин",
    city: "Гастелло",
  },
  {
    region: "Сахалин",
    city: "Горнозаводск",
  },
  {
    region: "Сахалин",
    city: "Долинск",
  },
  {
    region: "Сахалин",
    city: "Ильинский",
  },
  {
    region: "Сахалин",
    city: "Катангли",
  },
  {
    region: "Сахалин",
    city: "Корсаков",
  },
  {
    region: "Сахалин",
    city: "Курильск",
  },
  {
    region: "Сахалин",
    city: "Макаров",
  },
  {
    region: "Сахалин",
    city: "Невельск",
  },
  {
    region: "Сахалин",
    city: "Ноглики",
  },
  {
    region: "Сахалин",
    city: "Оха",
  },
  {
    region: "Сахалин",
    city: "Поронайск",
  },
  {
    region: "Сахалин",
    city: "Северо-Курильск",
  },
  {
    region: "Сахалин",
    city: "Смирных",
  },
  {
    region: "Сахалин",
    city: "Томари",
  },
  {
    region: "Сахалин",
    city: "Тымовское",
  },
  {
    region: "Сахалин",
    city: "Углегорск",
  },
  {
    region: "Сахалин",
    city: "Холмск",
  },
  {
    region: "Сахалин",
    city: "Шахтерск",
  },
  {
    region: "Сахалин",
    city: "Южно-Курильск",
  },
  {
    region: "Сахалин",
    city: "Южно-Сахалинск",
  },
  {
    region: "Свердловская обл.",
    city: "Алапаевск",
  },
  {
    region: "Свердловская обл.",
    city: "Алтынай",
  },
  {
    region: "Свердловская обл.",
    city: "Арамиль",
  },
  {
    region: "Свердловская обл.",
    city: "Артемовский",
  },
  {
    region: "Свердловская обл.",
    city: "Арти",
  },
  {
    region: "Свердловская обл.",
    city: "Асбест",
  },
  {
    region: "Свердловская обл.",
    city: "Ачит",
  },
  {
    region: "Свердловская обл.",
    city: "Байкалово",
  },
  {
    region: "Свердловская обл.",
    city: "Басьяновский",
  },
  {
    region: "Свердловская обл.",
    city: "Белоярский",
  },
  {
    region: "Свердловская обл.",
    city: "Березовский",
  },
  {
    region: "Свердловская обл.",
    city: "Богданович",
  },
  {
    region: "Свердловская обл.",
    city: "Буланаш",
  },
  {
    region: "Свердловская обл.",
    city: "Верхний Тагил",
  },
  {
    region: "Свердловская обл.",
    city: "Верхняя Пышма",
  },
  {
    region: "Свердловская обл.",
    city: "Верхняя Салда",
  },
  {
    region: "Свердловская обл.",
    city: "Верхняя Синячиха",
  },
  {
    region: "Свердловская обл.",
    city: "Верхняя Сысерть",
  },
  {
    region: "Свердловская обл.",
    city: "Верхняя Тура",
  },
  {
    region: "Свердловская обл.",
    city: "Верхотурье",
  },
  {
    region: "Свердловская обл.",
    city: "Висим",
  },
  {
    region: "Свердловская обл.",
    city: "Волчанск",
  },
  {
    region: "Свердловская обл.",
    city: "Воронцовка",
  },
  {
    region: "Свердловская обл.",
    city: "Гари",
  },
  {
    region: "Свердловская обл.",
    city: "Дегтярск",
  },
  {
    region: "Свердловская обл.",
    city: "Екатеринбург",
  },
  {
    region: "Свердловская обл.",
    city: "Ертарский",
  },
  {
    region: "Свердловская обл.",
    city: "Заводоуспенское",
  },
  {
    region: "Свердловская обл.",
    city: "Зыряновский",
  },
  {
    region: "Свердловская обл.",
    city: "Зюзельский",
  },
  {
    region: "Свердловская обл.",
    city: "Ивдель",
  },
  {
    region: "Свердловская обл.",
    city: "Изумруд",
  },
  {
    region: "Свердловская обл.",
    city: "Ирбит",
  },
  {
    region: "Свердловская обл.",
    city: "Ис",
  },
  {
    region: "Свердловская обл.",
    city: "Каменск-Уральский",
  },
  {
    region: "Свердловская обл.",
    city: "Камышлов",
  },
  {
    region: "Свердловская обл.",
    city: "Карпинск",
  },
  {
    region: "Свердловская обл.",
    city: "Карпунинский",
  },
  {
    region: "Свердловская обл.",
    city: "Качканар",
  },
  {
    region: "Свердловская обл.",
    city: "Кировград",
  },
  {
    region: "Свердловская обл.",
    city: "Краснотурьинск",
  },
  {
    region: "Свердловская обл.",
    city: "Красноуральск",
  },
  {
    region: "Свердловская обл.",
    city: "Красноуфимск",
  },
  {
    region: "Свердловская обл.",
    city: "Кушва",
  },
  {
    region: "Свердловская обл.",
    city: "Лесной",
  },
  {
    region: "Свердловская обл.",
    city: "Михайловск",
  },
  {
    region: "Свердловская обл.",
    city: "Невьянск",
  },
  {
    region: "Свердловская обл.",
    city: "Нижние Серги",
  },
  {
    region: "Свердловская обл.",
    city: "Нижний Тагил",
  },
  {
    region: "Свердловская обл.",
    city: "Нижняя Салда",
  },
  {
    region: "Свердловская обл.",
    city: "Нижняя Тура",
  },
  {
    region: "Свердловская обл.",
    city: "Новая Ляля",
  },
  {
    region: "Свердловская обл.",
    city: "Новоуральск",
  },
  {
    region: "Свердловская обл.",
    city: "Оус",
  },
  {
    region: "Свердловская обл.",
    city: "Первоуральск",
  },
  {
    region: "Свердловская обл.",
    city: "Полевской",
  },
  {
    region: "Свердловская обл.",
    city: "Пышма",
  },
  {
    region: "Свердловская обл.",
    city: "Ревда",
  },
  {
    region: "Свердловская обл.",
    city: "Реж",
  },
  {
    region: "Свердловская обл.",
    city: "Свердловск",
  },
  {
    region: "Свердловская обл.",
    city: "Североуральск",
  },
  {
    region: "Свердловская обл.",
    city: "Серов",
  },
  {
    region: "Свердловская обл.",
    city: "Сосьва",
  },
  {
    region: "Свердловская обл.",
    city: "Среднеуральск",
  },
  {
    region: "Свердловская обл.",
    city: "Сухой Лог",
  },
  {
    region: "Свердловская обл.",
    city: "Сысерть",
  },
  {
    region: "Свердловская обл.",
    city: "Таборы",
  },
  {
    region: "Свердловская обл.",
    city: "Тавда",
  },
  {
    region: "Свердловская обл.",
    city: "Талица",
  },
  {
    region: "Свердловская обл.",
    city: "Тугулым",
  },
  {
    region: "Свердловская обл.",
    city: "Туринск",
  },
  {
    region: "Свердловская обл.",
    city: "Туринская Слобода",
  },
  {
    region: "Северная Осетия",
    city: "Алагир",
  },
  {
    region: "Северная Осетия",
    city: "Ардон",
  },
  {
    region: "Северная Осетия",
    city: "Беслан",
  },
  {
    region: "Северная Осетия",
    city: "Бурон",
  },
  {
    region: "Северная Осетия",
    city: "Владикавказ",
  },
  {
    region: "Северная Осетия",
    city: "Дигора",
  },
  {
    region: "Северная Осетия",
    city: "Моздок",
  },
  {
    region: "Северная Осетия",
    city: "Орджоникидзе",
  },
  {
    region: "Северная Осетия",
    city: "Чикола",
  },
  {
    region: "Смоленская обл.",
    city: "Велиж",
  },
  {
    region: "Смоленская обл.",
    city: "Верхнеднепровский",
  },
  {
    region: "Смоленская обл.",
    city: "Ворга",
  },
  {
    region: "Смоленская обл.",
    city: "Вязьма",
  },
  {
    region: "Смоленская обл.",
    city: "Гагарин",
  },
  {
    region: "Смоленская обл.",
    city: "Глинка",
  },
  {
    region: "Смоленская обл.",
    city: "Голынки",
  },
  {
    region: "Смоленская обл.",
    city: "Демидов",
  },
  {
    region: "Смоленская обл.",
    city: "Десногорск",
  },
  {
    region: "Смоленская обл.",
    city: "Дорогобуж",
  },
  {
    region: "Смоленская обл.",
    city: "Духовщина",
  },
  {
    region: "Смоленская обл.",
    city: "Екимовичи",
  },
  {
    region: "Смоленская обл.",
    city: "Ельня",
  },
  {
    region: "Смоленская обл.",
    city: "Ершичи",
  },
  {
    region: "Смоленская обл.",
    city: "Издешково",
  },
  {
    region: "Смоленская обл.",
    city: "Кардымово",
  },
  {
    region: "Смоленская обл.",
    city: "Красный",
  },
  {
    region: "Смоленская обл.",
    city: "Монастырщина",
  },
  {
    region: "Смоленская обл.",
    city: "Новодугино",
  },
  {
    region: "Смоленская обл.",
    city: "Починок",
  },
  {
    region: "Смоленская обл.",
    city: "Рославль",
  },
  {
    region: "Смоленская обл.",
    city: "Рудня",
  },
  {
    region: "Смоленская обл.",
    city: "Сафоново",
  },
  {
    region: "Смоленская обл.",
    city: "Смоленск",
  },
  {
    region: "Смоленская обл.",
    city: "Сычевка",
  },
  {
    region: "Смоленская обл.",
    city: "Угра",
  },
  {
    region: "Смоленская обл.",
    city: "Хиславичи",
  },
  {
    region: "Смоленская обл.",
    city: "Холм-Жирковский",
  },
  {
    region: "Смоленская обл.",
    city: "Шумячи",
  },
  {
    region: "Смоленская обл.",
    city: "Ярцево",
  },
  {
    region: "Ставропольский край",
    city: "Александровское",
  },
  {
    region: "Ставропольский край",
    city: "Арзгир",
  },
  {
    region: "Ставропольский край",
    city: "Благодарный",
  },
  {
    region: "Ставропольский край",
    city: "Буденновск",
  },
  {
    region: "Ставропольский край",
    city: "Георгиевск",
  },
  {
    region: "Ставропольский край",
    city: "Дивное",
  },
  {
    region: "Ставропольский край",
    city: "Домбай",
  },
  {
    region: "Ставропольский край",
    city: "Донское",
  },
  {
    region: "Ставропольский край",
    city: "Ессентуки",
  },
  {
    region: "Ставропольский край",
    city: "Железноводск",
  },
  {
    region: "Ставропольский край",
    city: "Зеленокумск",
  },
  {
    region: "Ставропольский край",
    city: "Изобильный",
  },
  {
    region: "Ставропольский край",
    city: "Иноземцево",
  },
  {
    region: "Ставропольский край",
    city: "Ипатово",
  },
  {
    region: "Ставропольский край",
    city: "Карачаевск",
  },
  {
    region: "Ставропольский край",
    city: "Кисловодск",
  },
  {
    region: "Ставропольский край",
    city: "Кочубеевское",
  },
  {
    region: "Ставропольский край",
    city: "Красногвардейское",
  },
  {
    region: "Ставропольский край",
    city: "Курсавка",
  },
  {
    region: "Ставропольский край",
    city: "Левокумское",
  },
  {
    region: "Ставропольский край",
    city: "Минеральные Воды",
  },
  {
    region: "Ставропольский край",
    city: "Невинномысск",
  },
  {
    region: "Ставропольский край",
    city: "Нефтекумск",
  },
  {
    region: "Ставропольский край",
    city: "Новоалександровск",
  },
  {
    region: "Ставропольский край",
    city: "Новоалександровская",
  },
  {
    region: "Ставропольский край",
    city: "Новопавловск",
  },
  {
    region: "Ставропольский край",
    city: "Новоселицкое",
  },
  {
    region: "Ставропольский край",
    city: "Преградная",
  },
  {
    region: "Ставропольский край",
    city: "Пятигорск",
  },
  {
    region: "Ставропольский край",
    city: "Светлоград",
  },
  {
    region: "Ставропольский край",
    city: "Солнечнодольск",
  },
  {
    region: "Ставропольский край",
    city: "Ставрополь",
  },
  {
    region: "Ставропольский край",
    city: "Степное",
  },
  {
    region: "Ставропольский край",
    city: "Теберда",
  },
  {
    region: "Ставропольский край",
    city: "Усть-Джегута",
  },
  {
    region: "Ставропольский край",
    city: "Хабез",
  },
  {
    region: "Ставропольский край",
    city: "Черкесск",
  },
  {
    region: "Тамбовская обл.",
    city: "Бондари",
  },
  {
    region: "Тамбовская обл.",
    city: "Гавриловка Вторая",
  },
  {
    region: "Тамбовская обл.",
    city: "Жердевка",
  },
  {
    region: "Тамбовская обл.",
    city: "Знаменка",
  },
  {
    region: "Тамбовская обл.",
    city: "Инжавино",
  },
  {
    region: "Тамбовская обл.",
    city: "Кирсанов",
  },
  {
    region: "Тамбовская обл.",
    city: "Котовск",
  },
  {
    region: "Тамбовская обл.",
    city: "Мичуринск",
  },
  {
    region: "Тамбовская обл.",
    city: "Мордово",
  },
  {
    region: "Тамбовская обл.",
    city: "Моршанск",
  },
  {
    region: "Тамбовская обл.",
    city: "Мучкапский",
  },
  {
    region: "Тамбовская обл.",
    city: "Первомайский",
  },
  {
    region: "Тамбовская обл.",
    city: "Петровское",
  },
  {
    region: "Тамбовская обл.",
    city: "Пичаево",
  },
  {
    region: "Тамбовская обл.",
    city: "Рассказово",
  },
  {
    region: "Тамбовская обл.",
    city: "Ржакса",
  },
  {
    region: "Тамбовская обл.",
    city: "Староюрьево",
  },
  {
    region: "Тамбовская обл.",
    city: "Тамбов",
  },
  {
    region: "Тамбовская обл.",
    city: "Токаревка",
  },
  {
    region: "Тамбовская обл.",
    city: "Уварово",
  },
  {
    region: "Тамбовская обл.",
    city: "Умет",
  },
  {
    region: "Татарстан",
    city: "Агрыз",
  },
  {
    region: "Татарстан",
    city: "Азнакаево",
  },
  {
    region: "Татарстан",
    city: "Аксубаево",
  },
  {
    region: "Татарстан",
    city: "Актюбинский",
  },
  {
    region: "Татарстан",
    city: "Алексеевское",
  },
  {
    region: "Татарстан",
    city: "Альметьевск",
  },
  {
    region: "Татарстан",
    city: "Альметьевск",
  },
  {
    region: "Татарстан",
    city: "Апастово",
  },
  {
    region: "Татарстан",
    city: "Арск",
  },
  {
    region: "Татарстан",
    city: "Бавлы",
  },
  {
    region: "Татарстан",
    city: "Базарные Матаки",
  },
  {
    region: "Татарстан",
    city: "Балтаси",
  },
  {
    region: "Татарстан",
    city: "Богатые Сабы",
  },
  {
    region: "Татарстан",
    city: "Брежнев",
  },
  {
    region: "Татарстан",
    city: "Бугульма",
  },
  {
    region: "Татарстан",
    city: "Буинск",
  },
  {
    region: "Татарстан",
    city: "Васильево",
  },
  {
    region: "Татарстан",
    city: "Верхний Услон",
  },
  {
    region: "Татарстан",
    city: "Высокая Гора",
  },
  {
    region: "Татарстан",
    city: "Дербешкинский",
  },
  {
    region: "Татарстан",
    city: "Елабуга",
  },
  {
    region: "Татарстан",
    city: "Заинск",
  },
  {
    region: "Татарстан",
    city: "Зеленодольск",
  },
  {
    region: "Татарстан",
    city: "Казань",
  },
  {
    region: "Татарстан",
    city: "Камское Устье",
  },
  {
    region: "Татарстан",
    city: "Карабаш",
  },
  {
    region: "Татарстан",
    city: "Куйбышев",
  },
  {
    region: "Татарстан",
    city: "Кукмод",
  },
  {
    region: "Татарстан",
    city: "Кукмор",
  },
  {
    region: "Татарстан",
    city: "Лаишево",
  },
  {
    region: "Татарстан",
    city: "Лениногорск",
  },
  {
    region: "Татарстан",
    city: "Мамадыш",
  },
  {
    region: "Татарстан",
    city: "Менделеевск",
  },
  {
    region: "Татарстан",
    city: "Мензелинск",
  },
  {
    region: "Татарстан",
    city: "Муслюмово",
  },
  {
    region: "Татарстан",
    city: "Набережные Челны",
  },
  {
    region: "Татарстан",
    city: "Нижнекамск",
  },
  {
    region: "Татарстан",
    city: "Новошешминск",
  },
  {
    region: "Татарстан",
    city: "Нурлат",
  },
  {
    region: "Татарстан",
    city: "Пестрецы",
  },
  {
    region: "Татарстан",
    city: "Рыбная Слобода",
  },
  {
    region: "Татарстан",
    city: "Сарманово",
  },
  {
    region: "Татарстан",
    city: "Старое Дрожжаное",
  },
  {
    region: "Татарстан",
    city: "Тетюши",
  },
  {
    region: "Татарстан",
    city: "Чистополь",
  },
  {
    region: "Тверская обл.",
    city: "Андреаполь",
  },
  {
    region: "Тверская обл.",
    city: "Бежецк",
  },
  {
    region: "Тверская обл.",
    city: "Белый",
  },
  {
    region: "Тверская обл.",
    city: "Белый Городок",
  },
  {
    region: "Тверская обл.",
    city: "Березайка",
  },
  {
    region: "Тверская обл.",
    city: "Бологое",
  },
  {
    region: "Тверская обл.",
    city: "Васильевский Мох",
  },
  {
    region: "Тверская обл.",
    city: "Выползово",
  },
  {
    region: "Тверская обл.",
    city: "Вышний Волочек",
  },
  {
    region: "Тверская обл.",
    city: "Жарковский",
  },
  {
    region: "Тверская обл.",
    city: "Западная Двина",
  },
  {
    region: "Тверская обл.",
    city: "Заречье",
  },
  {
    region: "Тверская обл.",
    city: "Зубцов",
  },
  {
    region: "Тверская обл.",
    city: "Изоплит",
  },
  {
    region: "Тверская обл.",
    city: "Калашниково",
  },
  {
    region: "Тверская обл.",
    city: "Калинин",
  },
  {
    region: "Тверская обл.",
    city: "Калязин",
  },
  {
    region: "Тверская обл.",
    city: "Кашин",
  },
  {
    region: "Тверская обл.",
    city: "Кесова Гора",
  },
  {
    region: "Тверская обл.",
    city: "Кимры",
  },
  {
    region: "Тверская обл.",
    city: "Конаково",
  },
  {
    region: "Тверская обл.",
    city: "Красный Холм",
  },
  {
    region: "Тверская обл.",
    city: "Кувшиново",
  },
  {
    region: "Тверская обл.",
    city: "Лесное",
  },
  {
    region: "Тверская обл.",
    city: "Лихославль",
  },
  {
    region: "Тверская обл.",
    city: "Максатиха",
  },
  {
    region: "Тверская обл.",
    city: "Молоково",
  },
  {
    region: "Тверская обл.",
    city: "Нелидово",
  },
  {
    region: "Тверская обл.",
    city: "Оленино",
  },
  {
    region: "Тверская обл.",
    city: "Осташков",
  },
  {
    region: "Тверская обл.",
    city: "Пено",
  },
  {
    region: "Тверская обл.",
    city: "Рамешки",
  },
  {
    region: "Тверская обл.",
    city: "Ржев",
  },
  {
    region: "Тверская обл.",
    city: "Сандово",
  },
  {
    region: "Тверская обл.",
    city: "Селижарово",
  },
  {
    region: "Тверская обл.",
    city: "Сонково",
  },
  {
    region: "Тверская обл.",
    city: "Спирово",
  },
  {
    region: "Тверская обл.",
    city: "Старица",
  },
  {
    region: "Тверская обл.",
    city: "Тверь",
  },
  {
    region: "Тверская обл.",
    city: "Торжок",
  },
  {
    region: "Тверская обл.",
    city: "Торопец",
  },
  {
    region: "Тверская обл.",
    city: "Удомля",
  },
  {
    region: "Тверская обл.",
    city: "Фирово",
  },
  {
    region: "Томская обл.",
    city: "Александровское",
  },
  {
    region: "Томская обл.",
    city: "Асино",
  },
  {
    region: "Томская обл.",
    city: "Бакчар",
  },
  {
    region: "Томская обл.",
    city: "Батурино",
  },
  {
    region: "Томская обл.",
    city: "Белый Яр",
  },
  {
    region: "Томская обл.",
    city: "Зырянское",
  },
  {
    region: "Томская обл.",
    city: "Итатка",
  },
  {
    region: "Томская обл.",
    city: "Каргасок",
  },
  {
    region: "Томская обл.",
    city: "Катайга",
  },
  {
    region: "Томская обл.",
    city: "Кожевниково",
  },
  {
    region: "Томская обл.",
    city: "Колпашево",
  },
  {
    region: "Томская обл.",
    city: "Кривошеино",
  },
  {
    region: "Томская обл.",
    city: "Мельниково",
  },
  {
    region: "Томская обл.",
    city: "Молчаново",
  },
  {
    region: "Томская обл.",
    city: "Парабель",
  },
  {
    region: "Томская обл.",
    city: "Первомайское",
  },
  {
    region: "Томская обл.",
    city: "Подгорное",
  },
  {
    region: "Томская обл.",
    city: "Северск",
  },
  {
    region: "Томская обл.",
    city: "Стрежевой",
  },
  {
    region: "Томская обл.",
    city: "Томск",
  },
  {
    region: "Томская обл.",
    city: "Тымск",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Ак-Довурак",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Бай Хаак",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Кызыл",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Самагалтай",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Сарыг-Сеп",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Суть-Холь",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Тоора-Хем",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Туран",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Тээли",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Хову-Аксы",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Чадан",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Шагонар",
  },
  {
    region: "Тува (Тувинская Респ.)",
    city: "Эрзин",
  },
  {
    region: "Тульская обл.",
    city: "Агеево",
  },
  {
    region: "Тульская обл.",
    city: "Алексин",
  },
  {
    region: "Тульская обл.",
    city: "Арсеньево",
  },
  {
    region: "Тульская обл.",
    city: "Барсуки",
  },
  {
    region: "Тульская обл.",
    city: "Бегичевский",
  },
  {
    region: "Тульская обл.",
    city: "Белев",
  },
  {
    region: "Тульская обл.",
    city: "Богородицк",
  },
  {
    region: "Тульская обл.",
    city: "Болохово",
  },
  {
    region: "Тульская обл.",
    city: "Велегож",
  },
  {
    region: "Тульская обл.",
    city: "Венев",
  },
  {
    region: "Тульская обл.",
    city: "Волово",
  },
  {
    region: "Тульская обл.",
    city: "Горелки",
  },
  {
    region: "Тульская обл.",
    city: "Донской",
  },
  {
    region: "Тульская обл.",
    city: "Дубна",
  },
  {
    region: "Тульская обл.",
    city: "Епифань",
  },
  {
    region: "Тульская обл.",
    city: "Ефремов",
  },
  {
    region: "Тульская обл.",
    city: "Заокский",
  },
  {
    region: "Тульская обл.",
    city: "Казановка",
  },
  {
    region: "Тульская обл.",
    city: "Кимовск",
  },
  {
    region: "Тульская обл.",
    city: "Киреевск",
  },
  {
    region: "Тульская обл.",
    city: "Куркино",
  },
  {
    region: "Тульская обл.",
    city: "Ленинский",
  },
  {
    region: "Тульская обл.",
    city: "Новомосковск",
  },
  {
    region: "Тульская обл.",
    city: "Одоев",
  },
  {
    region: "Тульская обл.",
    city: "Плавск",
  },
  {
    region: "Тульская обл.",
    city: "Суворов",
  },
  {
    region: "Тульская обл.",
    city: "Тула",
  },
  {
    region: "Тульская обл.",
    city: "Узловая",
  },
  {
    region: "Тульская обл.",
    city: "Щекино",
  },
  {
    region: "Тульская обл.",
    city: "Ясногорск",
  },
  {
    region: "Тюменская обл.",
    city: "Абатский",
  },
  {
    region: "Тюменская обл.",
    city: "Аксарка",
  },
  {
    region: "Тюменская обл.",
    city: "Армизонское",
  },
  {
    region: "Тюменская обл.",
    city: "Аромашево",
  },
  {
    region: "Тюменская обл.",
    city: "Белоярский",
  },
  {
    region: "Тюменская обл.",
    city: "Бердюжье",
  },
  {
    region: "Тюменская обл.",
    city: "Большое Сорокино",
  },
  {
    region: "Тюменская обл.",
    city: "Вагай",
  },
  {
    region: "Тюменская обл.",
    city: "Викулово",
  },
  {
    region: "Тюменская обл.",
    city: "Винзили",
  },
  {
    region: "Тюменская обл.",
    city: "Голышманово",
  },
  {
    region: "Тюменская обл.",
    city: "Губкинский",
  },
  {
    region: "Тюменская обл.",
    city: "Заводопетровский",
  },
  {
    region: "Тюменская обл.",
    city: "Заводоуковск",
  },
  {
    region: "Тюменская обл.",
    city: "Излучинск",
  },
  {
    region: "Тюменская обл.",
    city: "Исетское",
  },
  {
    region: "Тюменская обл.",
    city: "Ишим",
  },
  {
    region: "Тюменская обл.",
    city: "Казанское",
  },
  {
    region: "Тюменская обл.",
    city: "Казым-Мыс",
  },
  {
    region: "Тюменская обл.",
    city: "Когалым",
  },
  {
    region: "Тюменская обл.",
    city: "Кондинское",
  },
  {
    region: "Тюменская обл.",
    city: "Красноселькуп",
  },
  {
    region: "Тюменская обл.",
    city: "Лабытнанги",
  },
  {
    region: "Тюменская обл.",
    city: "Ларьяк",
  },
  {
    region: "Тюменская обл.",
    city: "Мегион",
  },
  {
    region: "Тюменская обл.",
    city: "Мужи",
  },
  {
    region: "Тюменская обл.",
    city: "Муравленко",
  },
  {
    region: "Тюменская обл.",
    city: "Надым",
  },
  {
    region: "Тюменская обл.",
    city: "Находка",
  },
  {
    region: "Тюменская обл.",
    city: "Нефтеюганск",
  },
  {
    region: "Тюменская обл.",
    city: "Нижневартовск",
  },
  {
    region: "Тюменская обл.",
    city: "Нижняя Тавда",
  },
  {
    region: "Тюменская обл.",
    city: "Новый Уренгой",
  },
  {
    region: "Тюменская обл.",
    city: "Ноябрьск",
  },
  {
    region: "Тюменская обл.",
    city: "Нягань",
  },
  {
    region: "Тюменская обл.",
    city: "Октябрьское",
  },
  {
    region: "Тюменская обл.",
    city: "Омутинский",
  },
  {
    region: "Тюменская обл.",
    city: "Радужный",
  },
  {
    region: "Тюменская обл.",
    city: "Салехард",
  },
  {
    region: "Тюменская обл.",
    city: "Сладково",
  },
  {
    region: "Тюменская обл.",
    city: "Советский",
  },
  {
    region: "Тюменская обл.",
    city: "Сургут",
  },
  {
    region: "Тюменская обл.",
    city: "Тазовский",
  },
  {
    region: "Тюменская обл.",
    city: "Тарко-Сале",
  },
  {
    region: "Тюменская обл.",
    city: "Тобольск",
  },
  {
    region: "Тюменская обл.",
    city: "Тюмень",
  },
  {
    region: "Тюменская обл.",
    city: "Уват",
  },
  {
    region: "Тюменская обл.",
    city: "Унъюган",
  },
  {
    region: "Тюменская обл.",
    city: "Упорово",
  },
  {
    region: "Тюменская обл.",
    city: "Урай",
  },
  {
    region: "Тюменская обл.",
    city: "Ханты-Мансийск",
  },
  {
    region: "Тюменская обл.",
    city: "Юрибей",
  },
  {
    region: "Тюменская обл.",
    city: "Ялуторовск",
  },
  {
    region: "Тюменская обл.",
    city: "Яр-Сале",
  },
  {
    region: "Тюменская обл.",
    city: "Ярково",
  },
  {
    region: "Удмуртия",
    city: "Алнаши",
  },
  {
    region: "Удмуртия",
    city: "Балезино",
  },
  {
    region: "Удмуртия",
    city: "Вавож",
  },
  {
    region: "Удмуртия",
    city: "Воткинск",
  },
  {
    region: "Удмуртия",
    city: "Глазов",
  },
  {
    region: "Удмуртия",
    city: "Грахово",
  },
  {
    region: "Удмуртия",
    city: "Дебесы",
  },
  {
    region: "Удмуртия",
    city: "Завьялово",
  },
  {
    region: "Удмуртия",
    city: "Игра",
  },
  {
    region: "Удмуртия",
    city: "Ижевск",
  },
  {
    region: "Удмуртия",
    city: "Кама",
  },
  {
    region: "Удмуртия",
    city: "Камбарка",
  },
  {
    region: "Удмуртия",
    city: "Каракулино",
  },
  {
    region: "Удмуртия",
    city: "Кез",
  },
  {
    region: "Удмуртия",
    city: "Кизнер",
  },
  {
    region: "Удмуртия",
    city: "Киясово",
  },
  {
    region: "Удмуртия",
    city: "Красногорское",
  },
  {
    region: "Удмуртия",
    city: "Можга",
  },
  {
    region: "Удмуртия",
    city: "Сарапул",
  },
  {
    region: "Удмуртия",
    city: "Селты",
  },
  {
    region: "Удмуртия",
    city: "Сюмси",
  },
  {
    region: "Удмуртия",
    city: "Ува",
  },
  {
    region: "Удмуртия",
    city: "Устинов",
  },
  {
    region: "Удмуртия",
    city: "Шаркан",
  },
  {
    region: "Удмуртия",
    city: "Юкаменское",
  },
  {
    region: "Удмуртия",
    city: "Якшур-Бодья",
  },
  {
    region: "Удмуртия",
    city: "Яр",
  },
  {
    region: "Ульяновская обл.",
    city: "Базарный Сызган",
  },
  {
    region: "Ульяновская обл.",
    city: "Барыш",
  },
  {
    region: "Ульяновская обл.",
    city: "Большое Нагаткино",
  },
  {
    region: "Ульяновская обл.",
    city: "Вешкайма",
  },
  {
    region: "Ульяновская обл.",
    city: "Глотовка",
  },
  {
    region: "Ульяновская обл.",
    city: "Димитровград",
  },
  {
    region: "Ульяновская обл.",
    city: "Игнатовка",
  },
  {
    region: "Ульяновская обл.",
    city: "Измайлово",
  },
  {
    region: "Ульяновская обл.",
    city: "Инза",
  },
  {
    region: "Ульяновская обл.",
    city: "Ишеевка",
  },
  {
    region: "Ульяновская обл.",
    city: "Канадей",
  },
  {
    region: "Ульяновская обл.",
    city: "Карсун",
  },
  {
    region: "Ульяновская обл.",
    city: "Кузоватово",
  },
  {
    region: "Ульяновская обл.",
    city: "Майна",
  },
  {
    region: "Ульяновская обл.",
    city: "Новая Малыкла",
  },
  {
    region: "Ульяновская обл.",
    city: "Новоспасское",
  },
  {
    region: "Ульяновская обл.",
    city: "Павловка",
  },
  {
    region: "Ульяновская обл.",
    city: "Радищево",
  },
  {
    region: "Ульяновская обл.",
    city: "Сенгилей",
  },
  {
    region: "Ульяновская обл.",
    city: "Старая Кулатка",
  },
  {
    region: "Ульяновская обл.",
    city: "Старая Майна",
  },
  {
    region: "Ульяновская обл.",
    city: "Сурское",
  },
  {
    region: "Ульяновская обл.",
    city: "Тереньга",
  },
  {
    region: "Ульяновская обл.",
    city: "Ульяновск",
  },
  {
    region: "Ульяновская обл.",
    city: "Чердаклы",
  },
  {
    region: "Уральская обл.",
    city: "Аксай",
  },
  {
    region: "Уральская обл.",
    city: "Дарьинское",
  },
  {
    region: "Уральская обл.",
    city: "Деркул",
  },
  {
    region: "Уральская обл.",
    city: "Джамбейты",
  },
  {
    region: "Уральская обл.",
    city: "Джаныбек",
  },
  {
    region: "Уральская обл.",
    city: "Казталовка",
  },
  {
    region: "Уральская обл.",
    city: "Калмыково",
  },
  {
    region: "Уральская обл.",
    city: "Каратобе",
  },
  {
    region: "Уральская обл.",
    city: "Переметное",
  },
  {
    region: "Уральская обл.",
    city: "Сайхин",
  },
  {
    region: "Уральская обл.",
    city: "Уральск",
  },
  {
    region: "Уральская обл.",
    city: "Федоровка",
  },
  {
    region: "Уральская обл.",
    city: "Фурманово",
  },
  {
    region: "Уральская обл.",
    city: "Чапаев",
  },
  {
    region: "Хабаровский край",
    city: "Амурск",
  },
  {
    region: "Хабаровский край",
    city: "Аян",
  },
  {
    region: "Хабаровский край",
    city: "Березовый",
  },
  {
    region: "Хабаровский край",
    city: "Бикин",
  },
  {
    region: "Хабаровский край",
    city: "Бира",
  },
  {
    region: "Хабаровский край",
    city: "Биракан",
  },
  {
    region: "Хабаровский край",
    city: "Богородское",
  },
  {
    region: "Хабаровский край",
    city: "Болонь",
  },
  {
    region: "Хабаровский край",
    city: "Ванино",
  },
  {
    region: "Хабаровский край",
    city: "Волочаевка Вторая",
  },
  {
    region: "Хабаровский край",
    city: "Высокогорный",
  },
  {
    region: "Хабаровский край",
    city: "Вяземский",
  },
  {
    region: "Хабаровский край",
    city: "Горный",
  },
  {
    region: "Хабаровский край",
    city: "Гурское",
  },
  {
    region: "Хабаровский край",
    city: "Дормидонтовка",
  },
  {
    region: "Хабаровский край",
    city: "Заветы Ильича",
  },
  {
    region: "Хабаровский край",
    city: "Известковый",
  },
  {
    region: "Хабаровский край",
    city: "Иннокентьевка",
  },
  {
    region: "Хабаровский край",
    city: "Комсомольск-на-Амуре",
  },
  {
    region: "Хабаровский край",
    city: "Ленинское",
  },
  {
    region: "Хабаровский край",
    city: "Нелькан",
  },
  {
    region: "Хабаровский край",
    city: "Николаевск-на-Амуре",
  },
  {
    region: "Хабаровский край",
    city: "Облучье",
  },
  {
    region: "Хабаровский край",
    city: "Охотск",
  },
  {
    region: "Хабаровский край",
    city: "Переяславка",
  },
  {
    region: "Хабаровский край",
    city: "Смидович",
  },
  {
    region: "Хабаровский край",
    city: "Советская Гавань",
  },
  {
    region: "Хабаровский край",
    city: "Софийск",
  },
  {
    region: "Хабаровский край",
    city: "Троицкое",
  },
  {
    region: "Хабаровский край",
    city: "Тугур",
  },
  {
    region: "Хабаровский край",
    city: "Хабаровск",
  },
  {
    region: "Хабаровский край",
    city: "Чегдомын",
  },
  {
    region: "Хабаровский край",
    city: "Чумикан",
  },
  {
    region: "Хакасия",
    city: "Абакан",
  },
  {
    region: "Хакасия",
    city: "Саяногорск",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Аган",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Игрим",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Излучинск",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Лангепас",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Лянтор",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Мегион",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Нефтеюганск",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Нижневартовск",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Нягань",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Покачи",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Приобье",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Пыть-Ях",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Радужный",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Сургут",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Урай",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Ханты-Мансийск",
  },
  {
    region: "Ханты-Мансийский АО",
    city: "Югорск",
  },
  {
    region: "Челябинская обл.",
    city: "Агаповка",
  },
  {
    region: "Челябинская обл.",
    city: "Аргаяш",
  },
  {
    region: "Челябинская обл.",
    city: "Аша",
  },
  {
    region: "Челябинская обл.",
    city: "Бакал",
  },
  {
    region: "Челябинская обл.",
    city: "Бреды",
  },
  {
    region: "Челябинская обл.",
    city: "Варна",
  },
  {
    region: "Челябинская обл.",
    city: "Верхнеуральск",
  },
  {
    region: "Челябинская обл.",
    city: "Верхний Уфалей",
  },
  {
    region: "Челябинская обл.",
    city: "Еманжелинск",
  },
  {
    region: "Челябинская обл.",
    city: "Златоуст",
  },
  {
    region: "Челябинская обл.",
    city: "Карабаш",
  },
  {
    region: "Челябинская обл.",
    city: "Карталы",
  },
  {
    region: "Челябинская обл.",
    city: "Касли",
  },
  {
    region: "Челябинская обл.",
    city: "Катав-Ивановск",
  },
  {
    region: "Челябинская обл.",
    city: "Копейск",
  },
  {
    region: "Челябинская обл.",
    city: "Коркино",
  },
  {
    region: "Челябинская обл.",
    city: "Кунашак",
  },
  {
    region: "Челябинская обл.",
    city: "Куса",
  },
  {
    region: "Челябинская обл.",
    city: "Кыштым",
  },
  {
    region: "Челябинская обл.",
    city: "Магнитогорск",
  },
  {
    region: "Челябинская обл.",
    city: "Миасс",
  },
  {
    region: "Челябинская обл.",
    city: "Озерск",
  },
  {
    region: "Челябинская обл.",
    city: "Октябрьское",
  },
  {
    region: "Челябинская обл.",
    city: "Пласт",
  },
  {
    region: "Челябинская обл.",
    city: "Сатка",
  },
  {
    region: "Челябинская обл.",
    city: "Сим",
  },
  {
    region: "Челябинская обл.",
    city: "Снежинск",
  },
  {
    region: "Челябинская обл.",
    city: "Трехгорный",
  },
  {
    region: "Челябинская обл.",
    city: "Троицк",
  },
  {
    region: "Челябинская обл.",
    city: "Увельский",
  },
  {
    region: "Челябинская обл.",
    city: "Уйское",
  },
  {
    region: "Челябинская обл.",
    city: "Усть-Катав",
  },
  {
    region: "Челябинская обл.",
    city: "Фершампенуаз",
  },
  {
    region: "Челябинская обл.",
    city: "Чебаркуль",
  },
  {
    region: "Челябинская обл.",
    city: "Челябинск",
  },
  {
    region: "Челябинская обл.",
    city: "Чесма",
  },
  {
    region: "Челябинская обл.",
    city: "Южно-Уральск",
  },
  {
    region: "Челябинская обл.",
    city: "Юрюзань",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Аргун",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Грозный",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Гудермез",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Малгобек",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Назрань",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Наурская",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Ножай-Юрт",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Орджоникидзевская",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Советское",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Урус-Мартан",
  },
  {
    region: "Чечено-Ингушетия",
    city: "Шали",
  },
  {
    region: "Читинская обл.",
    city: "Агинское",
  },
  {
    region: "Читинская обл.",
    city: "Аксеново-Зиловское",
  },
  {
    region: "Читинская обл.",
    city: "Акша",
  },
  {
    region: "Читинская обл.",
    city: "Александровский Завод",
  },
  {
    region: "Читинская обл.",
    city: "Амазар",
  },
  {
    region: "Читинская обл.",
    city: "Арбагар",
  },
  {
    region: "Читинская обл.",
    city: "Атамановка",
  },
  {
    region: "Читинская обл.",
    city: "Балей",
  },
  {
    region: "Читинская обл.",
    city: "Борзя",
  },
  {
    region: "Читинская обл.",
    city: "Букачача",
  },
  {
    region: "Читинская обл.",
    city: "Газимурский Завод",
  },
  {
    region: "Читинская обл.",
    city: "Давенда",
  },
  {
    region: "Читинская обл.",
    city: "Дарасун",
  },
  {
    region: "Читинская обл.",
    city: "Дровяная",
  },
  {
    region: "Читинская обл.",
    city: "Дульдурга",
  },
  {
    region: "Читинская обл.",
    city: "Жиндо",
  },
  {
    region: "Читинская обл.",
    city: "Забайкальск",
  },
  {
    region: "Читинская обл.",
    city: "Итака",
  },
  {
    region: "Читинская обл.",
    city: "Калга",
  },
  {
    region: "Читинская обл.",
    city: "Карымское",
  },
  {
    region: "Читинская обл.",
    city: "Кличка",
  },
  {
    region: "Читинская обл.",
    city: "Ключевский",
  },
  {
    region: "Читинская обл.",
    city: "Кокуй",
  },
  {
    region: "Читинская обл.",
    city: "Краснокаменск",
  },
  {
    region: "Читинская обл.",
    city: "Красный Чикой",
  },
  {
    region: "Читинская обл.",
    city: "Кыра",
  },
  {
    region: "Читинская обл.",
    city: "Моготуй",
  },
  {
    region: "Читинская обл.",
    city: "Могоча",
  },
  {
    region: "Читинская обл.",
    city: "Нерчинск",
  },
  {
    region: "Читинская обл.",
    city: "Нерчинский Завод",
  },
  {
    region: "Читинская обл.",
    city: "Нижний Часучей",
  },
  {
    region: "Читинская обл.",
    city: "Оловянная",
  },
  {
    region: "Читинская обл.",
    city: "Первомайский",
  },
  {
    region: "Читинская обл.",
    city: "Петровск-Забайкальский",
  },
  {
    region: "Читинская обл.",
    city: "Приаргунск",
  },
  {
    region: "Читинская обл.",
    city: "Сретенск",
  },
  {
    region: "Читинская обл.",
    city: "Тупик",
  },
  {
    region: "Читинская обл.",
    city: "Улеты",
  },
  {
    region: "Читинская обл.",
    city: "Хилок",
  },
  {
    region: "Читинская обл.",
    city: "Чара",
  },
  {
    region: "Читинская обл.",
    city: "Чернышевск",
  },
  {
    region: "Читинская обл.",
    city: "Чита",
  },
  {
    region: "Читинская обл.",
    city: "Шелопугино",
  },
  {
    region: "Читинская обл.",
    city: "Шилка",
  },
  {
    region: "Чувашия",
    city: "Алатырь",
  },
  {
    region: "Чувашия",
    city: "Аликово",
  },
  {
    region: "Чувашия",
    city: "Батырева",
  },
  {
    region: "Чувашия",
    city: "Буинск",
  },
  {
    region: "Чувашия",
    city: "Вурнары",
  },
  {
    region: "Чувашия",
    city: "Ибреси",
  },
  {
    region: "Чувашия",
    city: "Канаш",
  },
  {
    region: "Чувашия",
    city: "Киря",
  },
  {
    region: "Чувашия",
    city: "Комсомольское",
  },
  {
    region: "Чувашия",
    city: "Красноармейское",
  },
  {
    region: "Чувашия",
    city: "Красные Четаи",
  },
  {
    region: "Чувашия",
    city: "Кугеси",
  },
  {
    region: "Чувашия",
    city: "Мариинский Посад",
  },
  {
    region: "Чувашия",
    city: "Моргауши",
  },
  {
    region: "Чувашия",
    city: "Новочебоксарск",
  },
  {
    region: "Чувашия",
    city: "Порецкое",
  },
  {
    region: "Чувашия",
    city: "Урмары",
  },
  {
    region: "Чувашия",
    city: "Цивильск",
  },
  {
    region: "Чувашия",
    city: "Чебоксары",
  },
  {
    region: "Чувашия",
    city: "Шемурша",
  },
  {
    region: "Чувашия",
    city: "Шумерля",
  },
  {
    region: "Чувашия",
    city: "Ядрин",
  },
  {
    region: "Чувашия",
    city: "Яльчики",
  },
  {
    region: "Чувашия",
    city: "Янтиково",
  },
  {
    region: "Чукотский АО",
    city: "Анадырь",
  },
  {
    region: "Чукотский АО",
    city: "Билибино",
  },
  {
    region: "Ямало-Ненецкий АО",
    city: "Губкинский",
  },
  {
    region: "Ямало-Ненецкий АО",
    city: "Заполярный",
  },
  {
    region: "Ямало-Ненецкий АО",
    city: "Муравленко",
  },
  {
    region: "Ямало-Ненецкий АО",
    city: "Надым",
  },
  {
    region: "Ямало-Ненецкий АО",
    city: "Новый Уренгой",
  },
  {
    region: "Ямало-Ненецкий АО",
    city: "Ноябрьск",
  },
  {
    region: "Ямало-Ненецкий АО",
    city: "Пуровск",
  },
  {
    region: "Ямало-Ненецкий АО",
    city: "Салехард",
  },
  {
    region: "Ямало-Ненецкий АО",
    city: "Тарко",
  },
  {
    region: "Ярославская обл.",
    city: "Андропов",
  },
  {
    region: "Ярославская обл.",
    city: "Берендеево",
  },
  {
    region: "Ярославская обл.",
    city: "Большое Село",
  },
  {
    region: "Ярославская обл.",
    city: "Борисоглебский",
  },
  {
    region: "Ярославская обл.",
    city: "Брейтово",
  },
  {
    region: "Ярославская обл.",
    city: "Бурмакино",
  },
  {
    region: "Ярославская обл.",
    city: "Варегово",
  },
  {
    region: "Ярославская обл.",
    city: "Волга",
  },
  {
    region: "Ярославская обл.",
    city: "Гаврилов Ям",
  },
  {
    region: "Ярославская обл.",
    city: "Данилов",
  },
  {
    region: "Ярославская обл.",
    city: "Любим",
  },
  {
    region: "Ярославская обл.",
    city: "Мышкино",
  },
  {
    region: "Ярославская обл.",
    city: "Некрасовское",
  },
  {
    region: "Ярославская обл.",
    city: "Новый Некоуз",
  },
  {
    region: "Ярославская обл.",
    city: "Переславль-Залесский",
  },
  {
    region: "Ярославская обл.",
    city: "Пошехонье-Володарск",
  },
  {
    region: "Ярославская обл.",
    city: "Ростов",
  },
  {
    region: "Ярославская обл.",
    city: "Рыбинск",
  },
  {
    region: "Ярославская обл.",
    city: "Тутаев",
  },
  {
    region: "Ярославская обл.",
    city: "Углич",
  },
  {
    region: "Ярославская обл.",
    city: "Ярославль",
  },
];

export default citiesList;
>>>>>>> 024fd08d9a198ca31feded75fb3b76f80ec9f37b
