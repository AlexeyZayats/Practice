var m = (function () {
var photoPosts = [

  {
    id: '1',
    description: 'Clockwork Orange',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Kubrick',
    photoLink:' http://lightsup.ru/wp-content/uploads/2013/02/luchshie-postery-k-filmam-3.jpg',
    hashtags:['#ultraviolence','#milk'],
    likes:['Tarantino','Mr.A'],
   },

   {
    id: '2',
    description: 'Pulp Fiction',
    createdAt: new Date('2018-04-22T23:00:00'),
    author: 'Tarantino',
    photoLink:' http://lightsup.ru/wp-content/uploads/2013/02/luchshie-postery-k-filmam-14.jpg',
    hashtags:['#milkshake'],
    likes:[],
   },

   {
    id: '3',
    description: 'Fight Club',
    createdAt: new Date('2017-03-12T23:00:00'),
    author: 'Fincher',
    photoLink:' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTridq2FkTN8Q112GU2e24DwwY7S_Ked8iykGdv54eoEClAap17',
    hashtags:['#soap','#pandas'],
    likes:['Sebastian','Tyler Derden'],
   },

   {
    id: '4',
    description: 'One flew over ..',
    createdAt: new Date('2019-12-12T23:00:00'),
    author: 'Formann',
    photoLink:' https://www.buro247.kz/thumb/670x830_0/images/progression-of-best-picture-movie-posters-1.jpg',
    hashtags:['#asylum'],
    likes:[],
   },

   {
    id: '5',
    description: 'Kill Bill',
    createdAt: new Date('2005-10-12T23:10:00'),
    author: 'Tarantino',
    photoLink:' https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_2.jpg',
    hashtags:['#oneeye','#snake'],
    likes:['Uma Thurman'],
   },

   {
    id: '6',
    description: 'The Big Lebowski',
    createdAt: new Date('1998-11-30T12:10:00'),
    author: 'Cohan',
    photoLink:' https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_5.jpg',
    hashtags:['#carpet','#iamwalrus'],
    likes:[],
   },

    {
    id: '7',
    description: 'Scott Piligrim',
    createdAt: new Date('2014-11-30T12:10:00'),
    author: 'Edgar Wright',
    photoLink:' https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_8.jpg',
    hashtags:['#veganpower'],
    likes:['Mr.Pirate'],
   },

    {
    id: '8',
    description: 'The Thing',
    createdAt: new Date('2013-04-30T12:10:00'),
    author: 'John Carpenther',
    photoLink:'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_18.jpg',
    hashtags:['#iLoveNorway'],
    likes:['H.P.Lovecraft'],
   },

    {
    id: '9',
    description: 'Space Odyssey',
    createdAt: new Date('2014-11-01T12:10:00'),
    author: 'Kubrick',
    photoLink:'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_21.jpg',
    hashtags:['#redeye','#monkeysforever'],
    likes:['GLaDOS'],
   },

     {
    id: '10',
    description: 'Blade Runner',
    createdAt: new Date('2011-11-11T12:10:00'),
    author: 'Scott',
    photoLink:'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_22.jpg',
    hashtags:['#electrosheep'],
    likes:[],
   },

     {
    id: '11',
    description: 'Fullmetal Jacket',
    createdAt: new Date('1995-03-15T12:10:00'),
    author: 'Kubrick',
    photoLink:'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_26.jpg',
    hashtags:['#borntokill'],
    likes:[],
   },

    {
    id: '12',
    description: 'Drive',
    createdAt: new Date('2018-03-15T12:10:00'),
    author: 'Refn',
    photoLink:'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_44.jpg',
    hashtags:['#neon'],
    likes:[],
   },

    {
    id: '13',
    description: 'Watchmen',
    createdAt: new Date('1988-03-15T12:10:00'),
    author: 'Snyder',
    photoLink:'https://bugaga.ru/uploads/posts/2011-09/1316442332_1-14.jpg',
    hashtags:['#comedian'],
    likes:['Mr.A'],
   },

 {
    id: '14',
    description: 'Watchmen',
    createdAt: new Date('1988-03-15T12:10:00'),
    author: 'Snyder',
    photoLink:'https://bugaga.ru/uploads/posts/2011-09/1316442332_1-14.jpg',
    hashtags:['#comedian'],
    likes:['Mr.A'],
   },

    {
    id: '15',
    description: 'The Matrix',
    createdAt: new Date('1990-06-21T14:15:00'),
    author: 'Wachowski Br..Sisters',
    photoLink:'https://static.kulturologia.ru/files/u18046/thematrix.jpg',
    hashtags:['#simulacra'],
    likes:['Mr.A','Woman in_red'],
   },

   {
    id: '16',
    description: 'Reservoir Dogs',
    createdAt: new Date('1991-06-21T14:15:00'),
    author: 'Tarantino',
    photoLink:'https://static.kulturologia.ru/files/u18046/reservoirdogs.jpg',
    hashtags:[],
    likes:[],
   },

   {
    id: '17',
    description: 'Se7en',
    createdAt: new Date('1992-09-22T14:15:00'),
    author: 'Fincher',
    photoLink:'https://interesnoznat.com/wp-content/uploads/%D0%A1%D0%B5%D0%BC%D1%8C-1995-688x963.jpg',
    hashtags:['#whatsinthebox??'],
    likes:['Kevin Spacey'],
   },

 {
    id: '18',
    description: '1984',
    createdAt: new Date('1984-08-04T14:15:00'),
    author: 'Orwell',
    photoLink:'https://interesnoznat.com/wp-content/uploads/tumblr_oeeve4r9Uu1v3gtoxo1_1280.jpg',
    hashtags:['#2x2=5'],
    likes:[],
   },

   {
    id: '19',
    description: 'Memento',
    createdAt: new Date('1997-04-02T14:15:00'),
    author: 'Nolan',
    photoLink:'http://lamcdn.net/lookatme.ru/post_image-image/qxuA0KVSmKBJM94OnwtUkQ-article.jpg',
    hashtags:['#tatoo'],
    likes:[],
   },

   {
    id: '20',
    description: 'Twin Peaks',
    createdAt: new Date('1998-04-04T14:15:00'),
    author: 'Lynch',
    photoLink:'http://lamcdn.net/lookatme.ru/post_image-image/OnXcDXwK92bcPBf6U-1FKw-article.jpg',
    hashtags:['#coffee',"#cherrypie"],
    likes:['Lora Palmer'],
   },


];
var filterHelper={
  author: function(posts,author){
    return posts.filter(function (item){
      return item.author==author;
    });
  },
  createdAt: function(posts,createdAt){
    return posts.filter(function(item){
      return createdAt.getTime()<item.createdAt.getTime();
    });
  },
  hashtags: function(posts,hashtags){
    return posts.filter(function(item){
      var flag=false;
        hashtags.forEach(function (tag){
            item.hashtags.forEach(function (intag){
              flag=flag||(intag.toLowerCase().indexOf(tag.toLowerCase())>=0);
            })
       });
      return flag;
    });
  }
};
var validateHelper={
  author: function(posts){
    return typeof(posts.author)==='string'&&posts.author.length>0;
  },
  description: function(posts){
    return typeof(posts.description)==='string'&&posts.description.length>0&&posts.description.length<200;

  },
  photoLink: function(posts){
    return typeof(posts.photoLink)==='string'&&posts.photoLink.length>0;
  },
  createdAt: function(posts){
    return Object.prototype.toString.call(posts.createdAt)==='[object Date]';
  },
  id: function(posts){
    return typeof(posts.id)==='string'&&posts.id.length>0;
  },
  likes: function(posts){
    var flag=true;
    posts.likes.forEach(function(item){
      flag=flag&&typeof(item)==='string'&&item.length>0;
    })
    return flag;
  } ,
  hashtags: function(posts){
    if(posts.hashtags){
    var flag=true;
    posts.hashtags.forEach(function(item){
      flag=flag&&typeof(item)==='string'&&item.length>0&&item.charAt(0)==='#';
    })
    return flag;
  }
  else{
    return true;
  }
  } ,

}
return {

  getPhotoPosts :function(skip,top,filterConfig){
    var skip=skip||0;
    var top=top||10;
    var filteredPosts=photoPosts.slice();
    if(filterConfig){
    Object.keys(filterConfig).forEach(
      function (field){
        filteredPosts=filterHelper [field](filteredPosts,filterConfig[field])});
    }
    filteredPosts.sort(function compare(a,b){
      if (a.createdAt.getTime()<b.createdAt.getTime()) return 1;
      if (a.createdAt.getTime()>b.createdAt.getTime()) return -1;
    })
    return filteredPosts.slice(skip,top+skip);
      
  },
  
  getPhotoPost : function(id){
    if(photoPosts.length==0){
      console.log("No elements in array!");
      return null;
    }
    
    var result = photoPosts.find(function (item){
      return item.id==id;
    });
    if(!result){
      return null;
    }
    else {
      return result;
    }
  },

  removePhotoPost: function(id){
    var post=this.getPhotoPost(id);
    if(post){
      var index=photoPosts.indexOf(post);
      photoPosts.splice(index,1);
      return true;
    }
    else{
      return false;
    }
  },

  validatePhotoPost : function(photoPost){
    var res=true;
    Object.keys(validateHelper).forEach(
      function(field){
        res=res&&validateHelper[field](photoPost)
      });
    return res;
  },

  addPhotoPost: function(photoPost){
    if(m.validatePhotoPost(photoPost)&&!m.getPhotoPost(photoPost.id)){
      photoPosts.push(photoPost);
      return true;
    }
    else{
      return false;
    }
  },

  editPhotoPost: function(id,photoPost){
    var post=m.getPhotoPost(id);
    var change=false;
    if(!post){
      return false;
    }
    else{
      if(validateHelper['photoLink'](photoPost)){
         post.photoLink=photoPost.photoLink;
         change=true;
      }
      if(validateHelper['description'](photoPost)){
        post.description=photoPost.description;
        change=true;
      }
      if(validateHelper['hashtags'](photoPost)){
        post.hashtags=photoPost.hashtags;
        change=true;
      }
    }
    return change;

  },
  }
})();

var correctPost= {
    id: '123',
    description: 'Driverrrrr',
    createdAt: new Date('2020-03-15T12:10:00'),
    author: 'Refnnnnnn',
    photoLink:'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_44.jpg',
    hashtags:['#neon'],
    likes:[],
   };

var wrongIDPost= {
    id: '12',
    description: 'Driverrrrr',
    createdAt: new Date('2018-03-15T12:10:00'),
    author: 'Refnnnnnn',
    photoLink:'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_44.jpg',
    hashtags:['#neon'],
    likes:[],
   };

var noDescriptionPost={
  id: '124',
    createdAt: new Date('2018-03-15T12:10:00'),
    author: 'Refnnnnnn',
    photoLink:'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_44.jpg',
    hashtags:['#neon'],
    likes:[],
};

var noPhotoLinkPost={
    id: '126',
    description: 'Driverrrrr',
    createdAt: new Date('2018-03-15T12:10:00'),
    author: 'Refnnnnnn',
    hashtags:['#neon'],
    likes:[],
   };

var noTagsPost={
    id: '125',
    description: 'Driverrrrr',
    createdAt: new Date('2018-03-15T12:10:00'),
    author: 'Refnnnnnn',
    photoLink:'https://xage.ru/media/posts/2012/12/3/52-minimalisticheskih-postera-k-filmam_44.jpg',
    likes:[],
   };

console.log("TESTS :");
console.log("getPhotoPost(1) :");
console.log(m.getPhotoPost(1));
console.log('getPhotoPost(-100)');
console.log(m.getPhotoPost(-100));
console.log('getPhotoPost()');
console.log(m.getPhotoPost());
console.log('\n');
console.log('getPhotoPosts()');
console.log(m.getPhotoPosts());
console.log('getPhotoPosts(0,10)');
console.log(m.getPhotoPosts(0,10));
console.log('getPhotoPosts(10,10)');
console.log(m.getPhotoPosts(10,10));
console.log('getPhotoPosts(0,10,{author:Lynch })');
console.log(m.getPhotoPosts(0,10,{author:'Lynch'}));
console.log('getPhotoPosts(0,10,{hashtags:#milk })');
console.log(m.getPhotoPosts(0,10,{hashtags:['#milk'] }));
console.log('getPhotoPosts(0,10,{createdAt:new Date(2015) })');
console.log(m.getPhotoPosts(0,10,{createdAt:new Date('2015') }));
console.log('\n');
console.log('removePhotoPost(-100)');
console.log(m.removePhotoPost(-100));
console.log('removePhotoPost(1)');
console.log(m.removePhotoPost(1));
console.log("getPhotoPost(1) :");
console.log(m.getPhotoPost(1));
console.log('\n');
console.log('validatePhotoPost(correctPost)');
console.log(m.validatePhotoPost(correctPost));
console.log('validatePhotoPost(noDescriptionPost)');
console.log(m.validatePhotoPost(noDescriptionPost));
console.log('validatePhotoPost(noTagsPost)');
console.log(m.validatePhotoPost(noTagsPost));
console.log('validatePhotoPost(noPhotoLinkPost)');
console.log(m.validatePhotoPost(noPhotoLinkPost));
console.log('\n');
console.log('addPhotoPost(correctPost)');
console.log(m.addPhotoPost(correctPost));
console.log(m.getPhotoPosts());
console.log('addPhotoPost(wrongIDPost)');
console.log(m.addPhotoPost(wrongIDPost));
console.log('addPhotoPost(noDescriptionPost)');
console.log(m.addPhotoPost(noDescriptionPost));
console.log('\n');
console.log('editPhotoPost(-100)');
console.log(m.editPhotoPost(-100));
console.log('editPhotoPost(123,{description:qwerty,id:100,a:400})');
console.log(m.editPhotoPost(123,{description:'qwerty',id:100,a:400}));
console.log(m.getPhotoPosts());
