//запускать 1 раз,чтобы заполнить localStorage начальными постами 
const posts=[{
    
    id: '1',
    description: 'Clockwork Orange',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Kubrick',
    photoLink: ' http://lightsup.ru/wp-content/uploads/2013/02/luchshie-postery-k-filmam-3.jpg',
    hashtags: ['#ultraviolence', '#milk'],
    likes: ['Tarantino', 'Mr.A'],
    deleted: false,
  },

  {
    id: '2',
    description: 'Pulp Fiction',
    createdAt: new Date('2018-04-22T23:00:00'),
    author: 'Tarantino',
    photoLink: ' http://lightsup.ru/wp-content/uploads/2013/02/luchshie-postery-k-filmam-14.jpg',
    hashtags: ['#milkshake'],
    likes: ['Tarantino'],
    deleted: false,
  },

  {
    id: '3',
    description: 'Fight Club',
    createdAt: new Date('2017-03-12T23:00:00'),
    author: 'Fincher',
    photoLink: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTridq2FkTN8Q112GU2e24DwwY7S_Ked8iykGdv54eoEClAap17',
    hashtags: ['#soap', '#pandas'],
    likes: ['Sebastian', 'Tyler Derden'],
    deleted: false,
  },

  {
    id: '4',
    description: 'One flew over ..',
    createdAt: new Date('2019-12-12T23:00:00'),
    author: 'Formann',
    photoLink: ' https://www.buro247.kz/thumb/670x830_0/images/progression-of-best-picture-movie-posters-1.jpg',
    hashtags: ['#asylum'],
    likes: [],
    deleted: false,
  },

  {
    id: '5',
    description: 'Kill Bill',
    createdAt: new Date('2005-10-12T23:10:00'),
    author: 'Tarantino',
    photoLink: ' https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_2.jpg',
    hashtags: ['#oneeye', '#snake'],
    likes: ['Uma Thurman'],
    deleted: false,
  },

  {
    id: '6',
    description: 'The Big Lebowski',
    createdAt: new Date('1998-11-30T12:10:00'),
    author: 'Cohan',
    photoLink: ' https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_5.jpg',
    hashtags: ['#carpet', '#iamwalrus'],
    likes: [],
    deleted: false,
  },

  {
    id: '7',
    description: 'Scott Piligrim',
    createdAt: new Date('2014-11-30T12:10:00'),
    author: 'Edgar Wright',
    photoLink: ' https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_8.jpg',
    hashtags: ['#veganpower'],
    likes: ['Mr.Pirate'],
    deleted: false,
  },

  {
    id: '8',
    description: 'The Thing',
    createdAt: new Date('2013-04-30T12:10:00'),
    author: 'John Carpenther',
    photoLink: 'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_18.jpg',
    hashtags: ['#iLoveNorway'],
    likes: ['H.P.Lovecraft'],
    deleted: false,
  },

  {
    id: '9',
    description: 'Space Odyssey',
    createdAt: new Date('2014-11-01T12:10:00'),
    author: 'Kubrick',
    photoLink: 'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_21.jpg',
    hashtags: ['#redeye', '#monkeysforever'],
    likes: ['GLaDOS'],
    deleted: false,
  },

  {
    id: '10',
    description: 'Blade Runner',
    createdAt: new Date('2011-11-11T12:10:00'),
    author: 'Scott',
    photoLink: 'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_22.jpg',
    hashtags: ['#electrosheep'],
    likes: [],
    deleted: false,
  },

  {
    id: '11',
    description: 'Fullmetal Jacket',
    createdAt: new Date('1995-03-15T12:10:00'),
    author: 'Kubrick',
    photoLink: 'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_26.jpg',
    hashtags: ['#borntokill'],
    likes: [],
    deleted: false,
  },

  {
    id: '12',
    description: 'Drive',
    createdAt: new Date('2018-03-15T12:10:00'),
    author: 'Refn',
    photoLink: 'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_44.jpg',
    hashtags: ['#neon'],
    likes: [],
    deleted: false,
  },

  {
    id: '13',
    description: 'Watchmen',
    createdAt: new Date('1988-03-15T12:10:00'),
    author: 'Snyder',
    photoLink: 'https://bugaga.ru/uploads/posts/2011-09/1316442332_1-14.jpg',
    hashtags: ['#comedian'],
    likes: ['Mr.A'],
    deleted: false,
  },


  {
    id: '14',
    description: 'Reservoir Dogs',
    createdAt: new Date('1991-06-21T14:15:00'),
    author: 'Tarantino',
    photoLink: 'https://static.kulturologia.ru/files/u18046/reservoirdogs.jpg',
    hashtags: [],
    likes: [],
    deleted: false,
  },


  {
    id: '15',
    description: '1984',
    createdAt: new Date('1984-08-04T14:15:00'),
    author: 'Orwell',
    photoLink: 'https://interesnoznat.com/wp-content/uploads/tumblr_oeeve4r9Uu1v3gtoxo1_1280.jpg',
    hashtags: ['#2x2=5'],
    likes: [],
    deleted: false,
  },

  {
    id: '16',
    description: 'Memento',
    createdAt: new Date('1997-04-02T14:15:00'),
    author: 'Nolan',
    photoLink: 'http://lamcdn.net/lookatme.ru/post_image-image/qxuA0KVSmKBJM94OnwtUkQ-article.jpg',
    hashtags: ['#tatoo'],
    likes: [],
    deleted: false,
  },

  {
    id: '17',
    description: 'Twin Peaks',
    createdAt: new Date('1998-04-04T14:15:00'),
    author: 'Lynch',
    photoLink: 'http://lamcdn.net/lookatme.ru/post_image-image/OnXcDXwK92bcPBf6U-1FKw-article.jpg',
    hashtags: ['#coffee', '#cherrypie'],
    likes: ['Lora Palmer'],
    deleted: false,
  },


];
localStorage.setItem('posts',JSON.stringify(posts));
localStorage.setItem('user',JSON.stringify('guest'));
