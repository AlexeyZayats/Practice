package com.bsu.task9;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class PostList {
    private List<PhotoPost>  posts;

    public PostList(){
        this.posts=new ArrayList<>();
    }
    public PostList(List<PhotoPost> posts){
        this.posts=new ArrayList<>(posts);
    }
    public List<PhotoPost> getPosts() {
        return posts;
    }

    public PhotoPost get(long id){
        for(PhotoPost item:posts){
            if(item.getId()==id && !item.isDeleted()){
                return item;
            }
        }
        return null;
    }

    public boolean remove(long id){
        if(this.get(id)!=null) {
            this.posts.remove(this.get(id));
            return true;
        }
        return false;
    }

    public boolean add(PhotoPost post){
        if(post.validate()){
            this.posts.add(post);
            return true;
        }
        return false;
    }

    public void clear(){
        this.posts.clear();
    }

    private void filterByAuthor(String author){
        posts=posts.stream()
                .filter(item-> item.getAuthor().toLowerCase().contains(author.toLowerCase()))
                .collect(Collectors.toList());
    }
    private void filterByDate(Date date){
        posts=posts.stream()
                .filter(item->date.after(item.getCreatedAt()))
                .collect(Collectors.toList());
    }

    private void filterByTags(List<String> tags){
        for(String tag:tags){
            posts=posts.stream()
                    .filter(item->item.hasTag(tag))
                    .collect(Collectors.toList());
        }
    }

    private void sortByDate(){
        posts.sort((a,b)->(int)(b.getCreatedAt().getTime()-a.getCreatedAt().getTime()));
    }
    public List<PhotoPost> getPage(int skip,int top,Filter filterConfig){
        PostList result=new PostList(this.getPosts());
        if(!filterConfig.getAuthor().isEmpty()){
            result.filterByAuthor(filterConfig.getAuthor());
        }
        if(filterConfig.getCreatedAt().getTime()>0){
            result.filterByDate(filterConfig.getCreatedAt());
        }
        if(!filterConfig.getHashtags().isEmpty()){
            result.filterByTags(filterConfig.getHashtags());
        }
        result.sortByDate();
        return  result.getPosts().subList(skip,skip+Math.min(top,result.getPosts().size()));
    }

    public boolean edit(long id,PhotoPost post){
        PhotoPost p;
        if(this.get(id)!=null) {
            p = this.get(id);
        }
        else {
            return false;
        }
        boolean change=false;
        if(post.validateDescription()){
            p.setDescription(post.getDescription());
            change=true;
        }
        if(post.validateLink()){
            p.setPhotoLink(post.getPhotoLink());
            change=true;
        }
        if(post.getHashtags()!=null){
            p.setHashtags(post.getHashtags());
        }
        return change;
    }
}
