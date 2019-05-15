class TapeView {
  static showTape(posts) {
    const container = document.querySelector('.mainArticle');
    posts.forEach((post) => {
      container.prepend(TapeView._showPost(post));
    });
  }

  static removePost(id) {
    document.getElementById(id).remove();
  }

  static _showPost(post) {
    const sPost = document.createElement('div');
    sPost.setAttribute('id', post.id);
    sPost.classList.add('photoPost');
    sPost.innerHTML = `<a class="delete" href="index.html">
	<i class="fas fa-trash"> </i>
	</a>
    <a class="edit" href="index.html"> 
    <i class="fas fa-cog"></i>
    </a>
    <button class="like">
    <i  class="far fa-heart"></i>
    </button>
    <p class="author">${post.author} </p>
    <p class="date">${post.createdAt}</p>
    <div class="tags">${post.hashtags}</div>
    <div class="description">${post.description} </div>
  	<img class="photo" src=${post.photoLink}></img>'`;
  	return sPost;
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
    if(post.hashtags){
      ePost.querySelector('.tags').innerHTML=`${post.hashtags}`;
    }
  }
}
