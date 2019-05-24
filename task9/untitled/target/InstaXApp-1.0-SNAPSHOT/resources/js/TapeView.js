class TapeView {
  constructor(user = 'guest') {
    this._user = user;
    this._showHeader(user);
  }

  _showHeader() {
    if (this._user === 'guest') {
      const addButton = document.querySelector('.add');
      addButton.style.visibility = 'hidden';
      const name = document.querySelector('.name');
      name.style.visibility = 'hidden';
      const logout = document.querySelector('.signout');
      logout.style.display = 'none';
      const login = document.querySelector('.signin');
      login.style.display = 'initial';
    } else {
      const addButton = document.querySelector('.add');
      addButton.style.visibility = 'initial';
      const name = document.querySelector('.name');
      name.textContent = this._user;
      name.style.visibility = 'initial';
      const login = document.querySelector('.signin');
      login.style.display = 'none';
      const logout = document.querySelector('.signout');
      logout.style.display = 'initial';
    }
  }

  showTape(posts) {
    const container = document.querySelector('.mainArticle');
    posts.forEach((post) => {
      container.insertBefore(this._showPost(post), container.querySelector('.loadmore'));
    });
  }

  _showPost(post) {
    let like='';
    if(post.likes.includes(this._user)){
       like='fas fa-heart';
    }
    else{
       like='far fa-heart';
    }
    const sPost = document.createElement('div');
    sPost.setAttribute('id', post.id);
    sPost.classList.add('photoPost');
    sPost.innerHTML = `<div class="delete" >
	<i class="fas fa-trash"> </i>
	</div>
    <div class="edit" > 
    <i class="fas fa-cog"></i>
    </div>
    <div class="like">
    <i  class="${like}"></i>
    </div>
    <p class="author">${post.author} </p>
    <p class="date">${post.createdAt}</p>
    <div class="tags">${post.hashtags}</div>
    <div class="description">${post.description} </div>
  	<img class="photo" src=${post.photoLink}></img>'`;
    const deleteButton = sPost.querySelector('.delete');
    const editButton = sPost.querySelector('.edit');
    if (post.author !== this._user) {
      deleteButton.style.display = 'none';
      editButton.style.display = 'none';
    } else {
      deleteButton.style.display = 'initial';
      editButton.style.display = 'initial';
    }
  	return sPost;
  }

  _clearTape() {
    const posts = document.querySelectorAll('.photoPost');
    if (posts.length > 0) {
      posts.forEach(item => item.remove());
    }
    document.querySelector('.addPost').style.display = 'none';
    document.querySelector('.signin-form').style.display = 'none';
  }

  _clearFilter() {
    const form = document.querySelector('.filter');
    form.querySelector('.filterName').value = '';
    form.querySelector('.filterDate').value = '';
    form.querySelector('.filterTags').value = '';
  }

  static addPost(post) {
    document.querySelector('.mainArticle').prepend(TapeView._showPost(post));
  }

  static editPost(id, post) {
    const ePost = document.getElementById(id);
    if (post.photoLink) {
      ePost.querySelector('img').setAttribute('src', `${post.photoLink}`);
    }
    if (post.description) {
      ePost.querySelector('.description').innerHTML = `${post.description}`;
    }
    if (post.hashtags) {
      ePost.querySelector('.tags').innerHTML = `${post.hashtags}`;
    }
  }
}
