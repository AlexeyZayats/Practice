package com.bsu.task9;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class PhotoPost {
    private long id;
    private String description;
    private Date createdAt;
    private String author;
    private String photoLink;
    private List<String> hashtags;
    private List<String> likes;
    private boolean deleted;

    public PhotoPost(long id,String description,Date createdAt,String author, String photoLink,
                     List<String> hashtags,List<String> likes ){
        this.id=id;
        this.description=description;
        this.createdAt=createdAt;
        this.author=author;
        this.photoLink=photoLink;
        this.hashtags=new ArrayList<String>(hashtags);
        this.likes=new ArrayList<String>(likes);
    }
    public PhotoPost(String photoLink,String description,List<String> hashtags){
        this.id=0;
        this.description=description;
        this.createdAt=new Date();
        this.author="";
        this.photoLink=photoLink;
        this.hashtags=new ArrayList<String>(hashtags);
        this.likes=new ArrayList<String>();
    }
    public long getId(){
        return id;
    }
    public boolean isDeleted(){
        return  deleted;
    }
    public String getAuthor(){
        return author;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public String getDescription() {
        return description;
    }
    public String getPhotoLink(){
        return photoLink;
    }
    public List<String> getHashtags() {
        return hashtags;
    }

    public List<String> getLikes() {
        return likes;
    }

    public void setAuthor(String author){
        this.author=author;
    }
    public void setDescription(String description){
        this.description=description;
    }
    public void setPhotoLink(String link){
        this.photoLink=link;
    }

    public void setHashtags(List<String> hashtags) {
        this.hashtags = hashtags;
    }

    public void delete(){
        deleted=true;
    }
    public boolean validateAuthor(){
        return this.author.length()>0;
    }
    public boolean validateDescription(){
        return this.description.length()>0&&this.description.length()<200;
    }
    public boolean validateLink(){
        return this.photoLink.length()>0;
    }
    public boolean validate(){
        boolean result=true;
        result&=this.validateAuthor();
        result&=this.validateDescription();
        result&=this.validateLink();
        return  result;
    }
    public boolean hasTag(String tag){
        for(String item:hashtags){
            if(item.toLowerCase().contains(tag.toLowerCase())){
                return true;
            }
        }
        return false;
    }
}

