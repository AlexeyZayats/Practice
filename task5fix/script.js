class PostList {
  _posts;

  filterHelper;

  constructor(initialPosts) {
    this._posts = (initialPosts || []);
    this.filterHelper = {
      _author(posts, author) {
        return posts.filter(item => item.author.toLowerCase().indexOf(author.toLowerCase()) >= 0);
      },
      _createdAt(posts, createdAt) {
        return posts.filter(item => createdAt >= item.createdAt);
      },
      _hashtags(posts, hashtags) {
        return posts.filter(item => hashtags.every(tag => 
          item.hashtags.some(intag => 
            (intag.toLowerCase().indexOf(tag.toLowerCase()) >= 0))));
      },
    };
  }

  get(id) {
    if (this._posts.length === 0) {
      return null;
    }
    return this._posts.find(item => item.id === id);
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    let filteredPosts = this._posts.slice();
    if (filterConfig) {
      Object.keys(filterConfig).forEach(
        (field) => {
          const _field = '_'.concat(field);
          filteredPosts = this.filterHelper[_field](filteredPosts, filterConfig[field]);
        },
      );
    }
    filteredPosts.sort((a, b) => b.createdAt - a.createdAt);
    return filteredPosts.slice(skip, top + skip);
  }

  remove(id) {
    const index = this._posts.findIndex(item => item.id == id);
    this._posts.splice(index, 1);
    return (index >= 0);
  }


  static validate(photoPost) {
    let res = true;
    const validateHelper = {
      _author(posts) {
        return !!posts.author && posts.author.length > 0;
      },
      _description(posts) {
        return !!posts.description && posts.description.length > 0 && posts.description.length < 200;
      },
      _photoLink(posts) {
        return !!posts.photoLink && posts.photoLink.length > 0;
      },
      _hashtags(posts) {
        if (posts.hashtags) {
          return posts.hashtags.every(item => !!item && item.length > 0 && item.charAt(0) === '#');
        }

        return true;
      },
    };
    Object.keys(validateHelper).forEach(
      (field) => {
        res = res && validateHelper[field](photoPost);
      },
    );
    return res;
  }


  add(photoPost) {
    if (PostList.validate(photoPost) && !this.get(photoPost.id)) {
      this._posts.push(photoPost);
      return true;
    }
    return false;
  }

  addAll(posts = {}) {
    const res = [];
    const p = this;
    posts.forEach((post) => {
      if (!p.add(post)) {
        res.push(post);
      }
    });
    return res;
  }

  clear() {
    this._posts = [];
  }

  edit(id, photoPost) {
    const post = this.get(id);
    let change = false;
    const validateHelper = {
      _description(posts) {
        return typeof (posts.description) === 'string' && posts.description.length > 0 && posts.description.length < 200;
      },
      _photoLink(posts) {
        return typeof (posts.photoLink) === 'string' && posts.photoLink.length > 0;
      },
      _hashtags(posts) {
        if (posts.hashtags) {
          let flag = true;
          posts.hashtags.forEach((item) => {
            flag = flag && typeof (item) === 'string' && item.length > 1 && item.charAt(0) === '#';
          });
          return flag;
        }

        return true;
      },
    };
    if (!post) {
      return false;
    }

    if (validateHelper._photoLink(photoPost)) {
      post.photoLink = photoPost.photoLink;
      change = true;
    }
    if (validateHelper._description(photoPost)) {
      post.description = photoPost.description;
      change = true;
    }
    if (validateHelper._hashtags(photoPost)) {
      if (photoPost.hashtags) {
        post.hashtags = photoPost.hashtags;
        change = true;
      }
    }

    return change;
  }
}

const photoPosts = [

  {
    id: '1',
    description: 'Clockwork Orange',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Kubrick',
    photoLink: ' http://lightsup.ru/wp-content/uploads/2013/02/luchshie-postery-k-filmam-3.jpg',
    hashtags: ['#ultraviolence', '#milk'],
    likes: ['Tarantino', 'Mr.A'],
  },

  {
    id: '2',
    description: 'Pulp Fiction',
    createdAt: new Date('2018-04-22T23:00:00'),
    author: 'Tarantino',
    photoLink: ' http://lightsup.ru/wp-content/uploads/2013/02/luchshie-postery-k-filmam-14.jpg',
    hashtags: ['#milkshake'],
    likes: [],
  },

  {
    id: '3',
    description: 'Fight Club',
    createdAt: new Date('2017-03-12T23:00:00'),
    author: 'Fincher',
    photoLink: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTridq2FkTN8Q112GU2e24DwwY7S_Ked8iykGdv54eoEClAap17',
    hashtags: ['#soap', '#pandas'],
    likes: ['Sebastian', 'Tyler Derden'],
  },

  {
    id: '4',
    description: 'One flew over ..',
    createdAt: new Date('2019-12-12T23:00:00'),
    author: 'Formann',
    photoLink: ' https://www.buro247.kz/thumb/670x830_0/images/progression-of-best-picture-movie-posters-1.jpg',
    hashtags: ['#asylum'],
    likes: [],
  },

  {
    id: '5',
    description: 'Kill Bill',
    createdAt: new Date('2005-10-12T23:10:00'),
    author: 'Tarantino',
    photoLink: ' https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_2.jpg',
    hashtags: ['#oneeye', '#snake'],
    likes: ['Uma Thurman'],
  },

  {
    id: '6',
    description: 'The Big Lebowski',
    createdAt: new Date('1998-11-30T12:10:00'),
    author: 'Cohan',
    photoLink: ' https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_5.jpg',
    hashtags: ['#carpet', '#iamwalrus'],
    likes: [],
  },

  {
    id: '7',
    description: 'Scott Piligrim',
    createdAt: new Date('2014-11-30T12:10:00'),
    author: 'Edgar Wright',
    photoLink: ' https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_8.jpg',
    hashtags: ['#veganpower'],
    likes: ['Mr.Pirate'],
  },

  {
    id: '8',
    description: 'The Thing',
    createdAt: new Date('2013-04-30T12:10:00'),
    author: 'John Carpenther',
    photoLink: 'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_18.jpg',
    hashtags: ['#iLoveNorway'],
    likes: ['H.P.Lovecraft'],
  },

  {
    id: '9',
    description: 'Space Odyssey',
    createdAt: new Date('2014-11-01T12:10:00'),
    author: 'Kubrick',
    photoLink: 'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_21.jpg',
    hashtags: ['#redeye', '#monkeysforever'],
    likes: ['GLaDOS'],
  },

  {
    id: '10',
    // description: 'Blade Runner',
    createdAt: new Date('2011-11-11T12:10:00'),
    author: 'Scott',
    photoLink: 'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_22.jpg',
    hashtags: ['#electrosheep'],
    likes: [],
  },

  {
    id: '13',
    description: 'Watchmen',
    createdAt: new Date('1988-03-15T12:10:00'),
    author: 'Snyder',
    // photoLink: 'https://bugaga.ru/uploads/posts/2011-09/1316442332_1-14.jpg',
    hashtags: ['#comedian'],
    likes: ['Mr.A'],
  },

  {
    id: '14',
    description: 'Watchmen',
    createdAt: new Date('1988-03-15T12:10:00'),
    author: 'Snyder',
    photoLink: 'https://bugaga.ru/uploads/posts/2011-09/1316442332_1-14.jpg',
    hashtags: [],
    likes: ['Mr.A'],
  },

  {
    id: '15',
    description: 'The Matrix',
    createdAt: new Date('1990-06-21T14:15:00'),
    author: 'Wachowski Br..Sisters',
    photoLink: 'https://static.kulturologia.ru/files/u18046/thematrix.jpg',
    hashtags: ['#simulacra'],
    likes: ['Mr.A', 'Woman in_red'],
  },

  {
    id: '16',
    description: 'Reservoir Dogs',
    createdAt: new Date('1991-06-21T14:15:00'),
    // author: 'Tarantino',
    photoLink: 'https://static.kulturologia.ru/files/u18046/reservoirdogs.jpg',
    hashtags: [],
    likes: [],
  },

  {
    id: '1',
    description: 'Se7en',
    createdAt: new Date('1992-09-22T14:15:00'),
    author: 'Fincher',
    photoLink: 'https://interesnoznat.com/wp-content/uploads/%D0%A1%D0%B5%D0%BC%D1%8C-1995-688x963.jpg',
    hashtags: ['#whatsinthebox??'],
    likes: ['Kevin Spacey'],
  },

  {
    id: '18',
    description: '1984',
    createdAt: new Date('1984-08-04T14:15:00'),
    author: 'Orwell',
    photoLink: 'https://interesnoznat.com/wp-content/uploads/tumblr_oeeve4r9Uu1v3gtoxo1_1280.jpg',
    hashtags: ['#2x2=5'],
    likes: [],
  },

  {
    id: '19',
    description: 'Memento',
    createdAt: new Date('1997-04-02T14:15:00'),
    author: 'Nolan',
    photoLink: 'http://lamcdn.net/lookatme.ru/post_image-image/qxuA0KVSmKBJM94OnwtUkQ-article.jpg',
    hashtags: ['#tatoo'],
    likes: [],
  },

  {
    id: '20',
    description: 'Twin Peaks',
    createdAt: new Date('1998-04-04T14:15:00'),
    author: 'Lynch',
    photoLink: 'http://lamcdn.net/lookatme.ru/post_image-image/OnXcDXwK92bcPBf6U-1FKw-article.jpg',
    hashtags: ['#coffee', '#cherrypie'],
    likes: ['Lora Palmer'],
  },


];


const correctPost = {
  id: '123',
  description: 'Driverrrrr',
  createdAt: new Date('2020-03-15T12:10:00'),
  author: 'Refnnnnnn',
  photoLink: 'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_44.jpg',
  hashtags: ['#neon'],
  likes: [],
};

const test = new PostList();

console.log('TESTS:\n');
console.log('test._posts (empty at this moment)');
console.log(test._posts);
console.log('test.add(correctPost)');
console.log(test.add(correctPost));
console.log('test.addAll(photoPosts) (returns 4 incorrect posts)');
console.log(test.addAll(photoPosts));
console.log('test.get(10) (no post with that id)');
console.log(test.get(10));
console.log('test.get(2)');
console.log(test.get('2'));
console.log('test.getPage(0,10,{createdAt:new Date(2000)');
console.log(test.getPage(0, 10, { createdAt: new Date('2000') }));
console.log('test.getPage(0,10,{author: tara})');
console.log(test.getPage(0, 10, { author: 'tara' }));
console.log('test.getPage(0,10,{hashtags:[#milk]})');
console.log(test.getPage(0, 10, { hashtags: ['#milk'] }));

console.log('test.remove(200)');
console.log(test.remove(200));

console.log('test.remove(2)');
console.log(test.remove('2'));

console.log('test.get(2)');
console.log(test.get('2'));

console.log('test.get(4)');
console.log(test.get('4'));
console.log('test.edit(4,{description:qwerty,id:100,a:400})');
console.log(test.edit('4', { description: 'qwerty', id: '100', a: '400' }));
console.log('test.get(4)');
console.log(test.get('4'));

console.log('PostList.validate(photoPosts[1])  (correct post)');
console.log(PostList.validate(photoPosts[1]));
console.log('PostList.validate(photoPosts[10])  (incorrect post)');
console.log(PostList.validate(photoPosts[10]));

console.log('test.edit(1,{hashtags:["#aa"]})');
console.log(test.edit('1', { hashtags: ['#aa'] }));
console.log('test.edit(1,{hashtags:["aa"]})');
console.log(test.edit('1', { hashtags: ['aa'] }));
console.log('test.get(1)');
console.log(test.get('1'));
console.log('test.clear()');
test.clear();
console.log(test.getPage());
