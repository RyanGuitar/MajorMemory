const images = [{
    name: 'ball',
    num: '0',
    type: '0',
    search: 'ball 0',
    desc: 'Think of the shape of the number zero',
  },
  {
    name: 'tie',
    num: '1',
    type: '0',
    search: 'tie 1',
    desc: 'A tie.'
  },
  {
    name: 'noah',
    num: '2',
    type: '0',
    search: 'trevor noah 2 mike',
    desc: 'Trevor Noah. The microphone is his prop'
  },
  {
    name: "me",
    num: '3',
    type: '0',
    search: 'me 3 computer',
    desc: 'I use a computer as my prop because I am a programmer'
  },
  {
    name: "rye",
    num: '4',
    type: '0',
    search: 'rye 4 beer',
    desc: 'Rye is a type of bread and it reminds me of beer for some reason'
  },
  {
    name: "lee",
    num: '5',
    type: '0',
    search: 'bruce lee 5',
    desc: 'Bruce Lee'
  },
  {
    name: "chew",
    num: '6',
    type: '0',
    search: 'chew sweet 6',
    desc: 'Chew is a type of sweet.'
  },
  {
    name: "cow",
    num: '7',
    type: '0',
    search: 'cow 7',
    desc: 'A cow'
  },
  {
    name: "ivy",
    num: '8',
    type: '0',
    search: 'ivy 8 plant',
    desc: 'Ivy is a type of plant.'
  },
  {
    name: "bee",
    num: '9',
    type: '0',
    search: 'bee 9 honey',
    desc: 'The actual word is bee. A bee makes me think of honey.'
  },
  {
    name: "dice",
    num: '10',
    type: '1',
    search: 'dice 10',
    desc: 'A dice.'
  },
  {
    name: "tot",
    num: '11',
    type: '1',
    search: 'tot 11',
    desc: 'A tot is another word for a toddler (a baby).'
  },
  {
    name: "tin",
    num: '12',
    type: '1',
    search: 'tin 12',
    desc: 'A tin'
  },
  {
    name: "time",
    num: '13',
    type: '1',
    search: 'time watch 13',
    desc: 'The word his time. We tell the time with a watch.'
  },
  {
    name: "tyre",
    num: '14',
    type: '1',
    search: 'tyre 14',
    desc: 'A tyre'
  },
  {
    name: "doll",
    num: '15',
    type: '1',
    search: 'doll 15',
    desc: 'A doll'
  },
  {
    name: "dish",
    num: '16',
    type: '1',
    search: 'dish 16',
    desc: 'A satellite dish.'
  },
  {
    name: "dog",
    num: '17',
    type: '1',
    search: 'dog 17',
    desc: 'A dog'
  },
  {
    name: "dive",
    num: '18',
    type: '1',
    search: 'dive 18 mask',
    desc: 'A diving mask'
  },
  {
    name: "tub",
    num: '19',
    type: '1',
    search: '19 tub bath',
    desc: 'A bath tub'
  },
  {
    name: "noose",
    num: '20',
    type: '2',
    search: 'noose 20 cowboy hat',
    desc: 'A noose reminds me of cowboys. So the image is a cowboy hat.'
  },
  {
    name: "net",
    num: '21',
    type: '2',
    search: 'net 21 fish',
    desc: 'A fishing net.'
  },
  {
    name: "nun",
    num: '22',
    type: '2',
    search: 'nun 2 bible',
    desc: 'A nun reads her Bible a lot. So the image is Bible.'
  },
  {
    name: "nam",
    num: '23',
    type: '2',
    search: 'nam 23 vietnam',
    desc: 'Nam is short for Vietnam. So the image is a machine gun.'
  },
  {
    name: "nerd",
    num: '24',
    type: '2',
    search: 'nerd 24 glasses',
    desc: 'The word is nerd. It let\'s me think of reading glasses.'
  },
  {
    name: "nail",
    num: '25',
    type: '2',
    search: 'nail 25',
    desc: 'The nail used with a hammer'
  },
  {
    name: "nosh",
    num: '26',
    type: '2',
    search: 'nosh 26 chocolate',
    desc: 'A Nosh is a type of chocolate. So the image is chocolate.'
  },
  {
    name: "nik",
    num: '27',
    type: '2',
    search: 'nik 27 chips',
    desc: 'Think of Nik Naks. The image is chips.'
  },
  {
    name: "knife",
    num: '28',
    type: '2',
    search: 'knife 28',
    desc: 'A knife.'
  },
  {
    name: "nob",
    num: '29',
    type: '2',
    search: 'knob 29',
    desc: 'A door knob.'
  },
  {
    name: "moose",
    num: '30',
    type: '3',
    search: 'moose 30 chocolate',
    desc: 'Chocolate moose.'
  },
  {
    name: "mat",
    num: '31',
    type: '3',
    search: 'mat 31',
    desc: 'A mat'
  },
  {
    name: "moon",
    num: '32',
    type: '3',
    search: 'moon 32 space shuttle',
    desc: 'The moon makes me think of the moonlanding. So the image is a space shuttle.'
  },
  {
    name: "mummy",
    num: '33',
    type: '3',
    search: 'mummy 33',
    desc: 'A mummy.'
  },
  {
    name: "mower",
    num: '34',
    type: '3',
    search: 'lawn mower 34', 
    desc: 'A lawnmower for mower.'
  },
  {
    name: "meal",
    num: '35',
    type: '3',
    search: 'meal 35 hamburger',
    desc: 'A meal makes me think of a happy meal. So the image is a hamburger.'
  },
  {
    name: "match",
    num: '36',
    type: '3',
    search: 'match stick 36',
    desc: 'A match stick for match.'
  },
  {
    name: "mug",
    num: '37',
    type: '3',
    search: 'mug 37 coffee',
    desc: 'A coffee mug',
  },
  {
    name: "movie",
    num: '38',
    type: '3',
    search: 'movie reel 38',
    desc: 'A movie reel'
  },
  {
    name: "mop",
    num: '39',
    type: '3',
    search: 'mop 39',
    desc: 'A mop'
  },
  {
    name: "rose",
    num: '40',
    type: '4',
    search: 'rose 40',
    desc: 'A rose.'
  },
  {
    name: "rat",
    num: '41',
    type: '4',
    search: 'rat 41',
    desc: 'A rat.'
  },
  {
    name: "rain",
    num: '42',
    type: '4',
    search: 'rain cloud 42',
    desc: 'A Rain cloud.'
  },
  {
    name: "ram",
    num: '43',
    type: '4',
    search: 'ram 43',
    desc: 'A ram.'
  },
  {
    name: "rower",
    num: '44',
    type: '4',
    search: 'rower life preserve jacket 44',
    desc: 'A rowers life jacket.'
  },
  {
    name: "roll",
    num: '45',
    type: '4',
    search: 'roll 45',
    desc: 'A rolling pin for the word roll'
  },
  {
    name: "roach",
    num: '46',
    type: '4',
    search: 'roach 46',
    desc: 'A cockroach for the word roach.'
  },
  {
    name: "rock",
    num: '47',
    type: '4',
    search: 'rock guitar 47',
    desc: 'A rock guitar for the word rock'
  },
  {
    name: "ref",
    num: '48',
    type: '4',
    search: 'ref 48 whistle',
    desc: 'A refferee\s whistle from the word ref.'
  },
  {
    name: "rope",
    num: '49',
    type: '4',
    search: 'rope 49',
    desc: 'A rope.'
  },
  {
    name: "lace",
    num: '50',
    type: '5',
    search: 'lace 50',
    desc: 'A bikini bottom from lace wear.'
  },
  {
    name: "light",
    num: '51',
    type: '5',
    search: 'light bulb 51',
    desc: 'A light bulb.'
  },
  {
    name: "lion",
    num: '52',
    type: '5',
    search: 'lion 52',
    desc: 'A lion.'
  },
  {
    name: "lamb",
    num: '53',
    type: '5',
    search: 'lamb 53',
    desc: 'A lamb.'
  },
  {
    name: "lure",
    num: '54',
    type: '5',
    search: 'fishing lure 54',
    desc: 'A fising lure from the word lure.'
  },
  {
    name: "lilo",
    num: '55',
    type: '5',
    search: 'lilo 55',
    desc: 'Stitch in "Lilo and Stitch" from the word lilo.'
  },
  {
    name: "leash",
    num: '56',
    type: '5',
    search: 'dog leash 56',
    desc: 'A dog leash.'
  },
  {
    name: "log",
    num: '57',
    type: '5',
    search: 'wooden log 57',
    desc: 'A wooden log'
  },
  {
    name: "leaf",
    num: '58',
    type: '5',
    search: 'leaf rake 58',
    desc: 'A leaf rake from the word leaf.'
  },
  {
    name: "lip",
    num: '59',
    type: '5',
    search: 'lips 59',
    desc: 'A pair of lips from the word lip.'
  },
  {
    name: "chess",
    num: '60',
    type: '6',
    search: 'chess pieces 60',
    desc: 'Chess pieces from the word chess (the game).'
  },
  {
    name: "jet",
    num: '61',
    type: '6',
    search: 'jet 61',
    desc: 'A fighter jet.'
  },
  {
    name: "chain",
    num: '62',
    type: '6',
    search: 'chain 62',
    desc: 'A metal chain from the word chain.'
  },
  {
    name: "gym",
    num: '63',
    type: '6',
    search: 'gym weights 63',
    desc: 'A pair of dumbells from the word gym.'
  },
  {
    name: "chair",
    num: '64',
    type: '6',
    search: 'chair 64',
    desc: 'A chair'
  },
  {
    name: "shell",
    num: '65',
    type: '6',
    search: 'shell 65',
    desc: 'A sea shell from the word shell.'
  },
  {
    name: "choo-choo",
    num: '66',
    type: '6',
    search: 'choo-choo train 66',
    desc: 'A choo-choo train from the word train.'
  },
  {
    name: "jug",
    num: '67',
    type: '6',
    search: 'jug 67',
    desc: 'A jug.'
  },
  {
    name: "chef",
    num: '68',
    type: '6',
    search: 'chef spatula 68',
    desc: 'A spatula. A prop used by a chef.'
  },
  {
    name: "ship",
    num: '69',
    type: '6',
    search: 'ship 69',
    desc: 'A luxury liner from the word ship.'
  },
  {
    name: "case",
    num: '70',
    type: '7',
    search: 'case 70',
    desc: 'A computer case from the word case.'
  },
  {
    name: "cat",
    num: '71',
    type: '7',
    search: 'cat 71',
    desc: 'A cat.'
  },
  {
    name: "coin",
    num: '72',
    type: '7',
    search: 'coin 72',
    desc: 'A coin.'
  },
  {
    name: "comb",
    num: '73',
    type: '7',
    search: 'comb 73',
    desc: 'A comb'
  },
  {
    name: "car",
    num: '74',
    type: '7',
    search: 'car 74',
    desc: 'A car.'
  },
  {
    name: "coal",
    num: '75',
    type: '7',
    search: 'coal 75',
    desc: 'charcoal from the word coal.'
  },
  {
    name: "cash",
    num: '76',
    type: '7',
    search: 'cash 76',
    desc: 'Paper money from the word cash.'
  },
  {
    name: "coke",
    num: '77',
    type: '7',
    search: 'coke 77',
    desc: 'A tin of Coke.'
  },
  {
    name: "coffee",
    num: '78',
    type: '7',
    search: 'coffee 78',
    desc: 'coffee beans from the word coffee.'
  },
  {
    name: "cop",
    num: '79',
    type: '7',
    search: 'cop gun 79.',
    desc: 'A cop gun. A prop used by a cop.'
  },
  {
    name: "face",
    num: '80',
    type: '8',
    search: 'face mask 80',
    desc: 'A face mask from the word face.'
  },
  {
    name: "fat",
    num: '81',
    type: '8',
    search: 'fat 81',
    desc: 'Butter. It contains animal fats from the word fat.'
  },
  {
    name: "phone",
    num: '82',
    type: '8',
    search: 'mobile phone 82',
    desc: 'A mobile phone from the word phone.'
  },
  {
    name: "foam",
    num: '83',
    type: '8',
    search: 'shaving foam 83',
    desc: 'A tin of shaving foam from the word foam.'
  },
  {
    name: "fire",
    num: '84',
    type: '8',
    search: 'fire 84',
    desc: 'A fire.'
  },
  {
    name: "file",
    num: '85',
    type: '8',
    search: 'file 85',
    desc: 'A wooden file from the word file.'
  },
  {
    name: "fish",
    num: '86',
    type: '8',
    search: 'fish 86',
    desc: 'A fish.'
  },
  {
    name: "fog",
    num: '87',
    type: '8',
    search: 'dragon fog 87',
    desc: 'From the word fog it reminds me of a book "the fog". There was a dragon in the fog. So the image is fog.'
  },
  {
    name: "five",
    num: '88',
    type: '8',
    search: 'five 88',
    desc: 'We have five fingers on each hand. So think of a glove for the word five.'
  },
  {
    name: "fib",
    num: '89',
    type: '8',
    search: 'fib 89',
    desc: 'To fib is to lie. Makes me think of Pinnochio.'
  },
  {
    name: "bus",
    num: '90',
    type: '9',
    search: 'bus 90',
    desc: 'A bus.'
  },
  {
    name: "bat",
    num: '91',
    type: '9',
    search: 'fruit bat 91',
    desc: 'A fruit bat from the word bat.'
  },
  {
    name: "pen",
    num: '92',
    type: '9',
    search: 'pen 92',
    desc: 'A pen.'
  },
  {
    name: "bomb",
    num: '93',
    type: '9',
    search: 'bomb 93',
    desc: 'A ticking bomb from the word bomb.'
  },
  {
    name: "bear",
    num: '94',
    type: '9',
    search: 'bear 94',
    desc: 'A bear.'
  },
  {
    name: "bell",
    num: '95',
    type: '9',
    search: 'bell 95',
    desc: 'A bell.'
  },
  {
    name: "peach",
    num: '96',
    type: '9',
    search: 'peach 96',
    desc: 'A peach.'
  },
  {
    name: "pick",
    num: '97',
    type: '9',
    search: 'pick 97',
    desc: 'A pick.'
  },
  {
    name: "puff",
    num: '98',
    type: '9',
    search: 'cigarette puff 98',
    desc: 'A cigarette from the word puff (to puff on a cigarette).'
  },
  {
    name: "pop",
    num: '99',
    type: '9',
    search: 'pop 99',
    desc: 'A balloon from the word pop (to pop a balloon).'
  },
]

export {
  images
}