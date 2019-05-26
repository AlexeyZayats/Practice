package com.bsu.task9;


import org.json.JSONArray;
import org.json.JSONObject;


import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.*;


@WebServlet("/photo-post")
public class PostServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws  IOException {

          String action=request.getParameter("action");

          if(action ==null){
              System.out.println("ERROR!");
          }
          if(action.equals("add")){
              String description="",author="",photoLink="";
              List<String> hashtags=new ArrayList<>();
              List<String> likes=new ArrayList<>();
              Long id=0l;
              BufferedReader br=request.getReader();
              StringBuilder sb=new StringBuilder();
              String line;
              while((line=br.readLine())!=null){
                  sb.append(line);
              }
              JSONObject json=new JSONObject(sb.toString());
              author=json.getString("author");
              description=json.getString("description");
              photoLink=json.getString("photoLink");
              id=Long.parseLong(json.getString("id"));
              JSONArray jsonArrayTags=json.getJSONArray("hashtags");
              JSONArray jsonArrayLikes=json.getJSONArray("likes");
              jsonArrayTags.forEach(a->hashtags.add(a.toString()));
              jsonArrayLikes.forEach(a->likes.add(a.toString()));
              PhotoPost post=new PhotoPost(id,description,new Date(),author,photoLink,hashtags,likes);
              if(Collection.posts.add(post)){
                  System.out.println("Succesfully added");
              }
              else{
                  System.out.println("Couldn't add post");
              }
          }
          if(action.equals("edit")){
              long id = Long.parseLong(request.getParameter("id").trim());
              if (Collection.posts.get(id) != null) {
                  String description="",photoLink="";
                  List<String> hashtags=new ArrayList<>();
                  BufferedReader br=request.getReader();
                  StringBuilder sb=new StringBuilder();
                  String line;
                  while((line=br.readLine())!=null){
                      sb.append(line);
                  }
                  JSONObject json=new JSONObject(sb.toString());
                  description=json.getString("description");
                  photoLink=json.getString("photoLink");
                  JSONArray jsonArrayTags=json.getJSONArray("hashtags");
                  jsonArrayTags.forEach(a->hashtags.add(a.toString()));
                  PhotoPost post=new PhotoPost(photoLink,description,hashtags);
                  if(Collection.posts.edit(id,post)){
                      response.getOutputStream().println("Succesfully edited");
                  }
                  else{
                      response.getOutputStream().println("Couldn't edit post");
                  }
              } else {
                  response.getOutputStream().println("No post with this id");
              }
          }

    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)  {
       try {
           response.setContentType("application/json");
           if (request.getParameter("id") == null) {
               response.getOutputStream().print("Please, input an id");
           }
           long id = Long.parseLong(request.getParameter("id").trim());
           if (Collection.posts.get(id) != null) {
               JSONObject jo=new JSONObject(Collection.posts.get(id));
               response.getWriter().print( jo);
               response.getWriter().flush();
           } else {
               response.getOutputStream().println("No post with this id");
           }
       }
       catch(NumberFormatException e){
           System.out.println("Incorrect id!");
       }
       catch (IOException e){
           System.out.println("Output error!");
       }
    }

    @Override
    protected void doDelete(HttpServletRequest request,HttpServletResponse response){
        try{
            if (request.getParameter("id") == null) {
                response.getOutputStream().print("Please, input an id");
            }
            Long id=Long.parseLong(request.getParameter("id"));
            if (Collection.posts.remove(id)) {
                response.getOutputStream().println( "Post succesfully deleted");
            } else {
                response.getOutputStream().println("No post with this id");
            }
        }
        catch(NumberFormatException e){
            System.out.println("Incorrect id!");
        }
        catch (IOException error){
            System.out.println("Output error!");
        }
    }
}
