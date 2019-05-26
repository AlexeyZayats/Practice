class PostList {
  _posts;

 async get(id) {
  const response=await fetch('/instax/photo-post?id='+id,{method: 'GET'})
    if (!response.ok){ 
      throw res.error();
    }
  const result =await response.json();
  return result;
  }

 async getPage(skip = 0, top = 10, filterConfig = {}) {
    const headers = {
      'Content-Type': 'application/json'
    };
    filterConfig.skip=skip+'';
    filterConfig.top=top+'';
    filterConfig.author=filterConfig.author||"";
    filterConfig.date=filterConfig.createdAt||'3000-12-31';
    filterConfig.hashtags=filterConfig.hashtags||[""];
    const myInit={
      method: 'POST',
      headers:headers,
      body: JSON.stringify(filterConfig),
    };
   const response= await fetch('/instax/photoposts',myInit);
   if(!response.ok){
    throw res.error();
  }
  const result=await response.json();
  return result;
  }

  async remove(id) {
   const response = await fetch('/instax/photo-post?id='+id,{method: 'DELETE'});
   if (!response.ok){
    throw res.error();
   }
   
  }

  add(photoPost) {
    const headers = {
      'Content-Type': 'application/json'
    };
    const myInit={
      method: 'POST',
      headers:headers,
      body: JSON.stringify(photoPost),
    };
    fetch('/instax/photo-post?action=add',myInit)
  .then(res=>{
    if (res.ok){
      return res.text();
    }
    throw res.error();
  })
  .then(text=>console.log(text))
  .catch(error=>console.log(error));
   
  }

  addAll(posts = {}) {
    if (posts!==null){
    const res = [];
    const p = this;
    posts.forEach((post) => {
      if (!p.add(post)) {
        res.push(post);
      }
    });
    return res;
   }
  }

  clear() {
    this._posts = [];
  }

  async edit(id, photoPost) {
    const headers = {
      'Content-Type': 'application/json'
    };
    photoPost.hashtags=photoPost.hashtags||[""];
    const myInit={
      method: 'POST',
      headers:headers,
      body: JSON.stringify(photoPost),
    };
   const response= await fetch('/instax/photo-post?action=edit&id='+id,myInit);
   if(!response.ok){
    throw res.error();
  }
  const result=await response.text();
  return result;
  }
   
  
  
}


const test = new PostList();
