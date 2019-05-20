select NAME, photos.photo_post.USER_ID FROM photos.photo_post
inner join photos.user on photos.user.USER_ID = photos.photo_post.USER_ID
group by photos.photo_post.USER_ID having count(photos.photo_post.USER_ID)>3;