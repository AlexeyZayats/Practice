class PostList {
  _posts

  constructor(initialPosts) {
    this._posts = (initialPosts || []);
  }

  get(id) {
    if (this._posts.length === 0) {
      return null;
    }

    const result = this._posts.find(item => item.id === id);
    if (!result) {
      return null;
    }

    return result;
  }

  getPage(skip = 0, top = 10, filterConfig = {}) {
    const filterHelper = {
      _author(posts, author) {
        return posts.filter(item => item.author === author);
      },
      _createdAt(posts, createdAt) {
        return posts.filter(item => createdAt.getTime() < item.createdAt.getTime());
      },
      _hashtags(posts, hashtags) {
        return posts.filter((item) => {
          let flag = false;
          hashtags.forEach((tag) => {
            if (item.hashtags) {
              item.hashtags.forEach((intag) => {
                flag = flag || (intag.toLowerCase().indexOf(tag.toLowerCase()) >= 0);
              });
            }
          });
          return flag;
        });
      },
    };
    let filteredPosts = this._posts.slice();
    if (filterConfig) {
      Object.keys(filterConfig).forEach(
        (field) => {
          const _field = '_'.concat(field);
          filteredPosts = filterHelper[_field](filteredPosts, filterConfig[field]);
        },
      );
    }
    filteredPosts.sort((a, b) => {
      if (a.createdAt.getTime() < b.createdAt.getTime()) return 1;
      if (a.createdAt.getTime() > b.createdAt.getTime()) return -1;
    });
    return filteredPosts.slice(skip, top + skip);
  }

  remove(id) {
    const post = this.get(id);
    if (post) {
      const index = this._posts.indexOf(post);
      this._posts.splice(index, 1);
      return true;
    }

    return false;
  }


  static validate(photoPost) {
    let res = true;
    const validateHelper = {
      _author(posts) {
        return typeof (posts.author) === 'string' && posts.author.length > 0;
      },
      _description(posts) {
        return typeof (posts.description) === 'string' && posts.description.length > 0 && posts.description.length < 200;
      },
      _photoLink(posts) {
        return typeof (posts.photoLink) === 'string' && posts.photoLink.length > 0;
      },
      _createdAt(posts) {
        return Object.prototype.toString.call(posts.createdAt) === '[object Date]';
      },
      _id(posts) {
        return typeof (posts.id) === 'string' && posts.id.length > 0;
      },
      _likes(posts) {
        let flag = true;
        if (posts.likes) {
          posts.likes.forEach((item) => {
            flag = flag && typeof (item) === 'string' && item.length > 0;
          });
        }
        return flag;
      },
      _hashtags(posts) {
        if (posts.hashtags) {
          let flag = true;
          posts.hashtags.forEach((item) => {
            flag = flag && typeof (item) === 'string' && item.length > 0 && item.charAt(0) === '#';
          });
          return flag;
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
            flag = flag && typeof (item) === 'string' && item.length > 0 && item.charAt(0) === '#';
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
      post.hashtags = photoPost.hashtags;
      change = true;
    }

    return change;
  }
}
