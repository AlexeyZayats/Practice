package com.bsu.task9;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Filter {
    private String author;
    private Date createdAt;
    private List<String> hashtags;
    public Filter(){
        this.author="";
        this.hashtags=new ArrayList<>();
    }
    public Filter(String author,Date createdAt,List<String> hashtags){
        this.author=author;
        this.createdAt=createdAt;
        this.hashtags=new ArrayList<>(hashtags);
    }
    public String getAuthor() {
        return author;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public List<String> getHashtags() {
        return hashtags;
    }
}
