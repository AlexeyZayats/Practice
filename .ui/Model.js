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
        return posts.filter(item => createdAt >= new Date(item.createdAt));
      },
      _hashtags(posts, hashtags) {
        return posts.filter(item => hashtags.every(tag => item.hashtags.some(intag => (intag.toLowerCase().indexOf(tag.toLowerCase()) >= 0))));
      },
    };
  }

  get(id) {
    if (this._posts.length === 0) {
      return null;
    }
    return this._posts.find(item => item.id === id && item.deleted == false);
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    let filteredPosts = this._posts.slice();
    filteredPosts = filteredPosts.filter(item => !item.deleted);
    if (filterConfig) {
      Object.keys(filterConfig).forEach(
        (field) => {
          const _field = '_'.concat(field);
          filteredPosts = this.filterHelper[_field](filteredPosts, filterConfig[field]);
        },
      );
    }
    filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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
    if (photoPost.hashtags) {
        post.hashtags = photoPost.hashtags;
        change = true;
    }
    

    return change;
  }
}
