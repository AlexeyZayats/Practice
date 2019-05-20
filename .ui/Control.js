
class Controller {
  constructor() {
    const posts = JSON.parse(localStorage.getItem('posts'));
    this._photoList = new PostList();
    this._photoList.addAll(posts);
    this._id = posts.length + 1;
    const user = JSON.parse(localStorage.getItem('user'));
    this._view = new TapeView(user);
    this._mainArticle = document.querySelector('.mainArticle');
    this._mainNav = document.querySelector('.mainNav');
    this._postOnScreen = 0;
  }

  _showTape(skip = 0, top = 10, filterconfig = {}) {
    cont._view._clearTape();
    cont._mainArticle.style.display = 'initial';
    cont._mainNav.style.display = 'initial';
    document.querySelector('.hidden').textContent = '';
    document.querySelector('.loadmore').style.display = 'initial';
    cont._view._showHeader();
    const posts = cont._photoList.getPage(skip, top, filterconfig);
    cont._view.showTape(posts);
    cont._postOnScreen = posts.length;
  }

  static _getHome() {
    cont._view._clearTape();
    cont._view._clearFilter();
    cont._view._showHeader();
    cont._showTape();
  }

  static _showSigninForm() {
    cont._mainArticle.style.display = 'none';
    cont._mainNav.style.display = 'none';
    document.querySelector('.signin').style.display = 'none';
    document.querySelector('.loadmore').style.display = 'none';
    const signinForm = document.querySelector('.signin-form');
    signinForm.style.display = 'grid';
  }

  static _submitSignin(e) {
    const signinForm = document.querySelector('.signin-form');
    const name = signinForm[0];
    const password = signinForm[1];
    if (name.value.length > 0 && password.value.length > 0) {
      cont._view._user = name.value;
      localStorage.setItem('user', JSON.stringify(name.value));
      signinForm.style.display = 'none';
      name.value = '';
      password.value = '';
      cont._showTape();
      cont._view._clearFilter();
      e.preventDefault();
    }
  }

  static _signOut() {
    cont._view._clearTape();
    cont._view._clearFilter();
    cont._view._user = 'guest';
    cont._view._showHeader();
    cont._showTape();
  }

  static _showAddForm() {
    cont._mainArticle.style.display = 'none';
    cont._mainNav.style.display = 'none';
    document.querySelector('.signin').style.display = 'none';
    document.querySelector('.loadmore').style.display = 'none';
    const addForm = document.querySelector('.addPost');
    addForm.style.display = 'grid';
    addForm.querySelector('.iauthor').textContent = `Author: ${cont._view._user}`;
    const d = new Date();
    const fd = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    addForm.querySelector('.idate').textContent = `Created at: ${fd}`;
  }

  static _addPost(e) {
    const form = document.querySelector('.addPost');
    const post = {};
    post.description = form.desc.value;
    post.createdAt = new Date(form.querySelector('.idate').textContent.slice(12));
    post.author = form.querySelector('.iauthor').textContent.slice(8);
    post.photoLink = form.querySelector('.imageURL').value;
    post.deleted = false;
    const tags = form.querySelector('.itags').value.split(' ');
    post.hashtags = tags.splice();
    let flag;
    const id = form.querySelector('.hidden').textContent;
    if (id > 0) {
      flag = cont._photoList.edit(id, post);
    } else {
      post.id = `${cont._id}`;
      flag = cont._photoList.add(post);
    }
    if (flag) {
      e.preventDefault();
      if (!(id > 0)) {
        cont._id++;
      }
      form.style.display = 'none';
      form.desc.value = '';
      form.querySelector('.preimage').src = 'http://placehold.it/270';
      form.querySelector('.imageURL').value = '';
      form.querySelector('.inputfile').value = '';
      cont._view._clearFilter();
      localStorage.setItem('posts', JSON.stringify(cont._photoList._posts));
      cont._showTape();
    }
  }

  _removePost(id) {
    cont._photoList.get(id).deleted = true;
    localStorage.setItem('posts', JSON.stringify(cont._photoList._posts));
    cont._showTape();
  }

  _editPost(id) {
    const post = cont._photoList.get(`${id}`);
    Controller._showAddForm();
    const form = document.querySelector('.addPost');
    form.querySelector('.idescription').value = post.description;
    form.querySelector('.itags').value = post.hashtags;
    form.querySelector('.imageURL').value = post.photoLink;
    form.querySelector('.preimage').src = post.photoLink;
    const d = new Date(post.createdAt);
    const fd = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    form.querySelector('.idate').textContent = `Created at: ${fd}`;
    form.querySelector('.hidden').textContent = post.id;
  }

  static _filterPosts(e) {
    e.preventDefault();
    const filterconfig = {};
    filterconfig.hashtags = [];
    const form = document.querySelector('.filter');
    const name = form.querySelector('.filterName').value;
    if (name.length > 0) {
      filterconfig.author = name;
    }
    const date = new Date(form.querySelector('.filterDate').value);
    if (date > 0) {
      filterconfig.createdAt = date;
    }
    const tagsString = form.querySelector('.filterTags').value;
    if (tagsString.length > 0) {
      if (tagsString[0] != '#') {
        alert('Please,use # for hashtags');
      } else {
        const tags = tagsString.split('#');
        filterconfig.hashtags = tags.slice();
      }
    }
    cont._showTape(0, 10, filterconfig);
  }

  static _loadMore() {
    const top = cont._postOnScreen;
    const posts = cont._photoList.getPage(top, 10, {});
    cont._view.showTape(posts);
    cont._postOnScreen += posts.length;
    if (cont._postOnScreen >= cont._photoList._posts.length) {
      document.querySelector('.loadmore').style.display = 'none';
    }
  }

  static _postChange(event) {
    switch (event.target.className) {
      case 'fas fa-trash': {
        const { id } = event.target.parentElement.parentElement;
        cont._removePost(id);
        break;
      }
      case 'fas fa-cog': {
        const { id } = event.target.parentElement.parentElement;
        cont._editPost(id);
        break;
      }
    }
  }
}


const cont = new Controller();
cont._showTape();
(function foo() {
  const signin = document.querySelector('.signin');
  signin.addEventListener('click', Controller._showSigninForm);

  const submitSignin = document.querySelector('.Submit_Signin');
  submitSignin.addEventListener('click', Controller._submitSignin);

  const signout = document.querySelector('.signout');
  signout.addEventListener('click', Controller._signOut);

  const filter = document.querySelector('.filterSubmit');
  filter.addEventListener('click', Controller._filterPosts);

  const loadmore = document.querySelector('.loadmore');
  loadmore.addEventListener('click', Controller._loadMore);

  const home = document.querySelector('.logo');
  home.addEventListener('click', Controller._getHome);

  const addForm = document.querySelector('.add');
  addForm.addEventListener('click', Controller._showAddForm);

  const savePost = document.querySelector('.submitPost');
  savePost.addEventListener('click', Controller._addPost);

  const mainArticle = document.querySelector('.mainArticle');
  mainArticle.addEventListener('click', Controller._postChange);
  const deletePost = document.querySelectorAll('.delete');
  deletePost.forEach(item => item.addEventListener('click', Controller._removePost));
}());

function readURL(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = document.querySelector('.preimage');

      image.src = e.target.result;
      image.style.height = '270px';
      const url = document.querySelector('.imageURL');
      url.value = e.target.result;
    };

    reader.readAsDataURL(input.files[0]);
  }
}
