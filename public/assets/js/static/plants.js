var plantNames = [
	{
		'name': 'oak',
		'latin': 'quercus calliprinos',
		'arabic': 'البلوط الفلسطيني',
		'1': 'med',
		'2': 'low',
		'3': 'high',
		'4': 'none',
		'soil': 'deep',
		'type': 'tree',
		'water': 'med',
		'temp': 'warm',
		'personality': 'wise',
		'speech': 'oo hi',
		'flowering': [0], // doesn't flower
		'symbol': 'ӂ',
		'color': '#009933',
		'flowercolor': '#009933',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["grapevine"],
	},

	{
		'name': 'qaiqab',
		'latin': 'arbutus andrachne',
		'arabic': 'قيقب',
		'1': 'low',
		'2': 'low',
		'3': 'med',
		'4': 'none',
		'soil': 'deep',
		'type': 'tree',
		'water': 'med',
		'temp': 'warm',
		'personality': 'wise',
		'speech': 'oo hi',
		'flowering': [0],
		'symbol': 'Ѭ',
		'color': '#b30000',
		'flowercolor':'#b30000',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'spiny broom',
		'latin': 'calicotome spinosa',
		'arabic': 'قنديل',
		'1': 'high',
		'2': 'high',
		'3': 'med',
		'4': 'low',
		'soil': 'shallow',
		'type': 'shrub',
		'water': 'dry',
		'temp': 'hot',
		'personality': 'mean',
		'speech': 'oo hi',
		'flowering': [1, 2, 3, 4], // jan-april
		'symbol': '⊰',
		'color': '#739900',
		'flowercolor': ' #ffff00',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'prickly pear',
		'latin': 'Opuntia ficus-indica',
		'arabic': 'تين شوكي',
		'1': 'high',
		'2': 'med',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'shrub',
		'water': 'dry',
		'temp': 'hot',
		'personality': 'spiky',
		'speech': 'oo hi',
		'flowering': [4, 3, 5, 6], // jan-april
		'symbol': 'ღ',
		'color': '#8cb319',
		'flowercolor': ' #ff3399',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'pink rock rose',
		'latin': 'cistus creticus',
		'arabic': 'لبّيد احمر',
		'1': 'high',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'mycorrhizal',
		'water': 'dry',
		'temp': 'hot',
		'personality': 'flighty',
		'speech': 'oo hi',
		'flowering': [3, 4, 5], 
		'symbol': 'ڗ',
		'color': '#33cc33',
		'flowercolor': '#ff99dd',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['gallipoli rose'],
	},

	{
		'name': 'gallipoli rose',
		'latin': 'cistus salviifolius',
		'arabic': 'لبّيد ابيض',
		'1': 'high',
		'2': 'med',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'mycorrhizal',
		'water': 'dry',
		'temp': 'hot',
		'personality': 'friendly',
		'speech': 'oo hi',
		'flowering': [3, 4, 5], 
		'symbol': 'ڗ',
		'color': '#339933',
		'flowercolor': '#ffffcc',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['pink rock rose'],
	},

	{
		'name': 'sage', 
		'latin': 'salvia fruticosa mill.',
		'arabic': 'مريمية',
		'1': 'high',
		'2': 'med',
		'3': 'med',
		'4': 'med',
		'soil': 'shallow',
		'type': 'herb',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'wise',
		'speech': 'oo hi',
		'flowering': [3, 4, 5, 6], 
		'symbol': 'ڌ',
		'color': '#339933',
		'flowercolor': '#dd99ff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["tomato"],
	},

	{
		'name': 'syrian pear',
		'latin': 'pyrus syriaca',
		'arabic': 'اجاص بري',
		'1': 'low',
		'2': 'low',
		'3': 'med',
		'4': 'low',
		'soil': 'med',
		'type': 'tree',
		'water': 'med',
		'temp': 'warm',
		'personality': 'wise',
		'speech': 'oo hi',
		'flowering': [3, 4], 
		'symbol': 'क',
		'color': '#339933',
		'flowercolor': '#ffffcc',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name':	'pistacia',
		'latin': 'pistacia palaestina',
		'arabic': 'البطم الفلسطيني',
		'1': 'low',
		'2': 'low',
		'3': 'med',
		'4': 'none',
		'soil': 'med',
		'type': 'tree',
		'water': 'moist',
		'temp': 'warm',
		'personality': 'pithy',
		'speech': 'oo hi',
		'flowering': [2, 3, 4], 
		'symbol': 'Ӵ',
		'color': '#33cc33',
		'flowercolor': '#ff4d4d',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'hawthorn',
		'latin': 'crataegus monogyna',
		'arabic': 'زعرور',
		'1': 'low',
		'2': 'med',
		'3': 'med',
		'4': 'none',
		'soil': 'med',
		'type': 'tree',
		'water': 'moist',
		'temp': 'warm',
		'personality': 'pithy',
		'speech': 'oo hi',
		'flowering': [2, 3, 4], 
		'symbol': 'څ',
		'color': '#33cc33',
		'flowercolor': '#ff4d4d',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'carob',
		'latin': 'ceratonia siliqua',
		'arabic': 'خروب',
		'1': 'low',
		'2': 'low',
		'3': 'med',
		'4': 'low',
		'soil': 'deep',
		'type': 'legume',
		'water': 'med',
		'temp': 'warm',
		'personality': 'sweet',
		'speech': 'oo hi',
		'flowering': [8, 9, 10, 11], 
		'symbol': 'Ӵ',
		'color': '#009933',
		'flowercolor': '#ffff66',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},


	{
		'name': 'olive',
		'latin': 'olea europaea',
		'arabic': 'زيتون بري',
		'1': 'med',
		'2': 'low',
		'3': 'high',
		'4': 'med',
		'soil': 'med',
		'type': 'tree',
		'water': 'dry',
		'temp': 'hot',
		'personality': 'sweet',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': '&',
		'color': '#809933',
		'flowercolor': '#809933',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},


	{
		'name': 'buckthorn',
		'latin': 'rhamnus lycioides',
		'arabic': 'س ّويد',
		'1': 'low',
		'2': 'med',
		'3': 'low',
		'4': 'none',
		'soil': 'shallow',
		'type': 'shrub',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'moody',
		'speech': 'oo hi',
		'flowering': [1, 2], 
		'symbol': 'څ',
		'color': '#33cc33',
		'flowercolor': '#ffff99',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'bougainvillea',
		'latin': 'bougainvillea glabra',
		'arabic': 'جهنمية',
		'1': 'none',
		'2': 'low',
		'3': 'low',
		'4': 'none',
		'soil': 'shallow',
		'type': 'vine',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'flighty',
		'speech': 'oo hi',
		'flowering': [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 
		'symbol': 'Ѫ',
		'color': '#009f3c',
		'flowercolor': '#e600e6',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'grapevine',
		'latin': 'vitis vinifera',
		'arabic': 'عنب',
		'1': 'none',
		'2': 'low',
		'3': 'med',
		'4': 'none',
		'soil': 'med',
		'type': 'vine',
		'water': 'med',
		'temp': 'warm',
		'personality': 'chatty',
		'speech': 'oo hi',
		'flowering': [4, 5], 
		'symbol': 'ୠ',
		'color': '#00e600',
		'flowercolor': '#ffffb3',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['palestinian vetch', 'sainfoin',  'purple broad bean', 'wild pea', 'medick', 'eastern star clover', 'helmet clover', 'arrowleaf clover', 'hairy yellow vetch', "oak"],
	},

	{
		'name': 'almond',
		'latin': 'prunus dulcis',
		'arabic': 'لوز',
		'1': 'low',
		'2': 'low',
		'3': 'med',
		'4': 'low',
		'soil': 'shallow',
		'type': 'tree',
		'water': 'med',
		'temp': 'warm',
		'personality': 'funny',
		'speech': 'oo hi',
		'flowering': [1, 2, 3], 
		'symbol': 'Ӵ',
		'color': '#29a329',
		'flowercolor': '#f5d6f5',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'cyclamen',
		'latin': 'cyclamen persicum',
		'arabic': 'سيكلامين',
		'1': 'high',
		'2': 'low',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'herb',
		'water': 'moist',
		'temp': 'cool',
		'personality': 'flighty',
		'speech': 'oo hi',
		'flowering': [12, 1, 2, 3, 4], 
		'symbol': '၈',
		'color': '#0d5959',
		'flowercolor': '#ffe6ff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'winter crocus',
		'latin': 'crocus hyemalis boiss. & blanche',
		'arabic': 'الزعفران الشتوي ابيض',
		'1': 'low',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'med',
		'type': 'herb',
		'water': 'moist',
		'temp': 'cool',
		'personality': 'friendly',
		'speech': 'oo hi',
		'flowering': [11, 12, 1, 2], 
		'symbol': '၈',
		'color': '#00cc6c',
		'flowercolor': '#ffffff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'orchid',
		'latin': 'anacamptis papilionacea (L.)',
		'arabic': 'سحلب فراشي',
		'1': 'low',
		'2': 'med',
		'3': 'low',
		'4': 'low',
		'soil': 'med',
		'type': 'herb',
		'water': 'moist',
		'temp': 'med',
		'personality': 'flighty',
		'speech': 'oo hi',
		'flowering': [4, 5], 
		'symbol': 'Գ',
		'color': '#99ff66',
		'flowercolor': ' #e6ccff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'spider orchid',
		'latin': 'ophrys sphegodes',
		'arabic': 'اوركيد عنكبوت',
		'1': 'low',
		'2': 'med',
		'3': 'low',
		'4': 'low',
		'soil': 'med',
		'type': 'herb',
		'water': 'med',
		'temp': 'med',
		'personality': 'shallow',
		'speech': 'oo hi',
		'flowering': [1, 2, 3, 4], 
		'symbol': 'Գ',
		'color': '#99ff66',
		'flowercolor': '#ffff99',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'anemone',
		'latin': 'anemone coronaria L.',
		'arabic': 'شقائق النعمان',
		'1': 'low',
		'2': 'med',
		'3': 'med',
		'4': 'low',
		'soil': 'shallow',
		'type': 'herb',
		'water': 'dry',
		'temp': 'med',
		'personality': 'sweet',
		'speech': 'oo hi',
		'flowering': [12, 1, 2, 3, 4], 
		'symbol': 'ث',
		'color': '#009999',
		'flowercolor': '#ff0000',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'palestinian vetch',
		'latin': 'vicia palaestina',
		'arabic': 'البيقية الفلسطينية',
		'1': 'low',
		'2': 'high',
		'3': 'med',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'spiky',
		'speech': 'oo hi',
		'flowering': [2, 3, 4, 5, 6], 
		'symbol': 'દ',
		'color': '#00cc66',
		'flowercolor': '#9933ff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['tomato', "walnut", "grapevine"],
	},

	{
		'name': 'hairy yellow vetch',
		'latin': 'vicia hybrida',
		'arabic': 'البيقية الهجينة',
		'1': 'low',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'spiky',
		'speech': 'oo hi',
		'flowering': [2, 3, 4, 5, 6], 
		'symbol': 'દ',
		'color': '#00cc66',
		'flowercolor': '#ffff66',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['tomato', "walnut", "grapevine"],
	},

	{
		'name': 'arrowleaf clover', 
		'latin': 'trifolium clusii godr. & gren.',
		'arabic': 'نفل',
		'1': 'med',
		'2': 'high',
		'3': 'med',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'med',
		'temp': 'med',
		'personality': 'friendly',
		'speech': 'oo hi',
		'flowering': [3, 4], 
		'symbol': '♣',
		'color': '#00cc00',
		'flowercolor': '#ff99ff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["grapevine", "peppers"],
	},

	{
		'name': 'helmet clover', 
		'latin': 'trifolium clypeatum',
		'arabic': 'النفل المدرع',
		'1': 'med',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'med',
		'temp': 'med',
		'personality': 'friendly',
		'speech': 'oo hi',
		'flowering': [3, 4], 
		'symbol': '♣',
		'color': '#339966',
		'flowercolor': '#ffe6ff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["grapevine", "peppers"],
	},

	{
		'name': 'eastern star clover', 
		'latin': 'trifolium dasyurum',
		'arabic': 'النفل الداسيوري',
		'1': 'med',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'med',
		'temp': 'med',
		'personality': 'moody',
		'speech': 'oo hi',
		'flowering': [3, 4, 5], 
		'symbol': '♣',
		'color': '#009900',
		'flowercolor': '#ffd480',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["grapevine", "peppers"],
	},

	{
		'name': 'medick', 
		'latin': 'medicago turbinata',
		'arabic': 'برسيم',
		'1': 'med',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'dry',
		'temp': 'hot',
		'personality': 'friendly',
		'speech': 'oo hi',
		'flowering': [3, 4], 
		'symbol': '♣',
		'color': '#00cc66',
		'flowercolor': '#ffff00',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["grapevine"],
	},

	{
		'name': 'sticky restharrow',
		'latin': 'ononis viscosa',
		'arabic': 'بسلة كهرمانية',
		'1': 'med',
		'2': 'high',
		'3': 'med',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'timid',
		'speech': 'oo hi',
		'flowering': [4, 5, 6, 7], 
		'symbol': 'ʬ',
		'color': '#99cc00',
		'flowercolor': '#ffff00',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'two-flowered restharrow',
		'latin': 'ononis biflora',
		'arabic': 'شبرق ثنائي الزهار',
		'1': 'med',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'grim',
		'speech': 'oo hi',
		'flowering': [4, 5, 6, 7, 8, 9, 10], 
		'symbol': 'ʬ',
		'color': '#669900',
		'flowercolor': '#ff99ff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'wild pea', 
		'latin': 'pisum fulvum',
		'arabic': 'نفل',
		'1': 'med',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'med',
		'temp': 'warm',
		'personality': 'chatty',
		'speech': 'oo hi',
		'flowering': [2, 3, 4], 
		'symbol': '♠',
		'color': '#33cc33',
		'flowercolor': '#ffcc99',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["cucumber", "watermelon", 'grapevine'],
	},

	{
		'name': 'purple broad bean', 
		'latin': 'vicia narbonensis',
		'arabic': 'البيقية النربونية',
		'1': 'med',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'med',
		'type': 'legume',
		'water': 'med',
		'temp': 'warm',
		'personality': 'friendly',
		'speech': 'oo hi',
		'flowering': [2, 3], 
		'symbol': '♠',
		'color': '#00cc00',
		'flowercolor': '#800080',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["peppers", "cucumber", "watermelon", "tomato", "sage", "aubergine", "grapevine"],
	},

	{
		'name': 'sainfoin', 
		'latin': 'onobrychis',
		'arabic': 'عنبريس',
		'1': 'med',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'legume',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'sulky',
		'speech': 'oo hi',
		'flowering': [6, 7, 8, 9], 
		'symbol': '෴',
		'color': '#00b386',
		'flowercolor': '#ffccff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["peppers", "cucumber", "watermelon", "tomato", "sage", "aubergine", "grapevine"],
	},


	{
		'name': 'prickly asparagus',
		'latin': 'asparagus aphyllus',
		'arabic': 'هليون',
		'1': 'low',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'med',
		'type': 'shrub',
		'water': 'med',
		'temp': 'warm',
		'personality': 'mean',
		'speech': 'oo hi',
		'flowering': [9, 10, 11], 
		'symbol': '҂',
		'color': '#b0c13a',
		'flowercolor': '#ffff99',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["tomato"],
	},

	{
		'name': 'hoary mustard',
		'latin': 'sinapis incana',
		'arabic': 'خزامي',
		'1': 'low',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'shrub',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'mean',
		'speech': 'oo hi',
		'flowering': [1, 2, 3, 4, 5], 
		'symbol': 'ץ',
		'color': '#669900',
		'flowercolor': '#ffff66',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['palestinian vetch', 'sainfoin',  'purple broad bean', 'wild pea', 'medick', 'eastern star clover', 'helmet clover', 'arrowleaf clover', 'hairy yellow vetch', 'grapevine'],
	},

	{
		'name': 'black mustard',
		'latin': 'brassica nigra',
		'arabic': 'خردل',
		'1': 'low',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'med',
		'type': 'herb',
		'water': 'med',
		'temp': 'warm',
		'personality': 'friendly',
		'speech': 'oo hi',
		'flowering': [4, 5, 6, 7], 
		'symbol': 'ץ',
		'color': '#80ff00',
		'flowercolor': '#d9ff66',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['palestinian vetch', 'sainfoin',  'purple broad bean', 'wild pea', 'medick', 'eastern star clover', 'helmet clover', 'arrowleaf clover', 'hairy yellow vetch', 'grapevine'],
	},

	{
		'name': 'milk thistle',
		'latin': 'silybum marianum',
		'arabic': 'خرفيش',
		'1': 'med',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'deep',
		'type': 'herb',
		'water': 'med',
		'temp': 'warm',
		'personality': 'spiky',
		'speech': 'oo hi',
		'flowering': [6, 7, 8], 
		'symbol': '⁕',
		'color': '#669999',
		'flowercolor': '#9966ff',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["watermelon"],
	},			

	{
		'name': 'spiny burnet',
		'latin': 'sarcopoterium spinosum',
		'arabic': 'النتش',
		'1': 'high',
		'2': 'high',
		'3': 'low',
		'4': 'low',
		'soil': 'shallow',
		'type': 'shrub',
		'water': 'dry',
		'temp': 'hot',
		'personality': 'chatty',
		'speech': 'oo hi',
		'flowering': [2, 3, 4], 
		'symbol': '෴',
		'color': '#cccc00',
		'flowercolor': '#ff9933',
		'notes': 'a hateful plant',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'aleppo pine',
		'latin': 'pinus halepensis',
		'arabic': 'صنوبر حلبي',
		'1': 'med',
		'2': 'low',
		'3': 'high',
		'4': 'low',
		'soil': 'shallow',
		'type': 'tree',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'chatty',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'Ŧ',
		'color': '#004d00',
		'flowercolor': '#004d00',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

		{
		'name': 'red river gum tree',
		'latin': 'eucalyptus camaldulensis',
		'arabic': 'كافور كينيا',
		'1': 'low',
		'2': 'low',
		'3': 'med',
		'4': 'low',
		'soil': 'med',
		'type': 'tree',
		'water': 'moist',
		'temp': 'warm',
		'personality': 'chatty',
		'speech': 'oo hi',
		'flowering': [4, 5, 6, 7, 8, 9, 10], 
		'symbol': 'Ŷ',
		'color': '#669999',
		'flowercolor': '#f0f5f5',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

		{
		'name': 'persian cypress',
		'latin': 'cupressus sempervirens',
		'arabic': 'سرو',
		'1': 'med',
		'2': 'low',
		'3': 'high',
		'4': 'low',
		'soil': 'med',
		'type': 'tree',
		'water': 'dry',
		'temp': 'hot',
		'personality': 'flighty',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'Ĭ',
		'color': '#334224',
		'flowercolor': '#334224',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'stone pine',
		'latin': 'pinus pinea',
		'arabic': 'صنوبر مثمر',
		'1': 'med',
		'2': 'low',
		'3': 'high',
		'4': 'low',
		'soil': 'shallow',
		'type': 'tree',
		'water': 'dry',
		'temp': 'hot',
		'personality': 'solemn',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'Ŧ',
		'color': '#334224',
		'flowercolor': '#334224',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'tomato',
		'latin': 'solanum lycopersicum',
		'arabic': 'بندورة',
		'1': 'none',
		'2': 'low',
		'3': 'low',
		'4': 'high',
		'soil': 'med',
		'type': 'crop',
		'water': 'moist',
		'temp': 'warm',
		'personality': 'funny',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'გ',
		'color': '#ff0000',
		'flowercolor': '#ffffcc',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['lemon verbena', 'prickly asparagus', "aubergine", 'palestinian vetch', 'sainfoin',  'purple broad bean', 'wild pea', 'medick', 'eastern star clover', 'helmet clover', 'arrowleaf clover', 'hairy yellow vetch', "cucumber", "grapevine", "peppers"],
	},

	{
		'name': 'peppers',
		'latin': 'capsicum annuum',
		'arabic': 'فلفل',
		'1': 'none',
		'2': 'low',
		'3': 'low',
		'4': 'high',
		'soil': 'med',
		'type': 'crop',
		'water': 'moist',
		'temp': 'warm',
		'personality': 'funny',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'გ',
		'color': '#ff0000',
		'flowercolor': '#ffffcc',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["tomato", "purple broad bean", "hoary mustard", 'black mustard'],
	},


	{
		'name': 'lemon verbena',
		'latin': 'aloysia citrodora',
		'arabic': 'لويزة ليمونية',
		'1': 'none',
		'2': 'low',
		'3': 'low',
		'4': 'high',
		'soil': 'med',
		'type': 'herb',
		'water': 'dry',
		'temp': 'warm',
		'personality': 'mean',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': '۳',
		'color': '#228B22',
		'flower-color': '#228B22',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['tomato'],
	},

	{
		'name': 'mallow',
		'latin': 'malva pusilla',
		'arabic': 'خبيزة',
		'1': 'none',
		'2': 'low',
		'3': 'med',
		'4': 'high',
		'soil': 'med',
		'type': 'crop',
		'water': 'moist',
		'temp': 'warm',
		'personality': 'funny',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'Ⴕ',
		'color': '#006600',
		'flowercolor': '#ffffcc',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'calabash gourd',
		'latin': 'lageneria siceraria',
		'arabic': 'كالاباش خياري',
		'1': 'none',
		'2': 'low',
		'3': 'low',
		'4': 'high',
		'soil': 'med',
		'type': 'crop',
		'water': 'moist',
		'temp': 'warm',
		'personality': 'sweet',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'ೡ',
		'color': '#99ff99',
		'flowercolor': '#99ff99',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': [],
	},

	{
		'name': 'cucumber',
		'latin': 'cucumis sativus',
		'arabic': 'خيار',
		'1': 'none',
		'2': 'low',
		'3': 'low',
		'4': 'high',
		'soil': 'med',
		'type': 'crop',
		'water': 'moist',
		'temp': 'warm',
		'personality': 'friendly',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'ல',
		'color': '#00e600',
		'flowercolor': '#00e600',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ['palestinian vetch', 'sainfoin',  'purple broad bean', 'wild pea', 'medick', 'eastern star clover', 'helmet clover', 'arrowleaf clover', 'hairy yellow vetch'],
	},

	{
		'name': 'aubergine',
		'latin': 'solanum melongena',
		'arabic': 'باذنجان',
		'1': 'none',
		'2': 'low',
		'3': 'low',
		'4': 'med',
		'soil': 'med',
		'type': 'crop',
		'water': 'moist',
		'temp': 'warm',
		'personality':'mean' ,
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'გ',
		'color': '#330066',
		'flowercolor': '#330066',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["purple broad bean", "tomato"],  //passion fruit
	},

	{
		'name': 'watermelon',
		'latin': 'citrullus lanatus',
		'arabic': 'بلدي بطيخ',
		'1': 'none',
		'2': 'low',
		'3': 'low',
		'4': 'high',
		'soil': 'med',
		'type': 'crop',
		'water': 'moist',
		'temp': 'warm',
		'personality': 'flighty',
		'speech': 'oo hi',
		'flowering': [0], 
		'symbol': 'ೡ',
		'color': '#00e600',
		'flowercolor': '#00e600',
		// 'flower-symbol': ,
		// 'fruiting': ,
		// 'fruit-color': ,
		// 'fruit-symbol': ,
		'companions': ["milk thistle"],
	},

]


export default plantNames;