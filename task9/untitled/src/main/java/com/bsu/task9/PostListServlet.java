package com.bsu.task9;

import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@WebServlet("/photoposts")
public class PostListServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {
       try{
           String author="";
           List<String> hashtags=new ArrayList<>();
           SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd");
           Date date;
           int skip=0,top=10;
           BufferedReader br=request.getReader();
           StringBuilder sb=new StringBuilder();
           String line;
           while((line=br.readLine())!=null){
               sb.append(line);
           }
           JSONObject json=new JSONObject(sb.toString());
           skip=Integer.parseInt(json.getString("skip"));
           top=Integer.parseInt(json.getString("top"));
           author=json.getString("author");
           date=ft.parse(json.getString("date"));
           JSONArray jsonArrayTags=json.getJSONArray("hashtags");
           jsonArrayTags.forEach(a->hashtags.add(a.toString()));
           Filter filter=new Filter(author,date,hashtags);
           if (!Collection.posts.getPage(skip,top,filter).isEmpty()) {
               response.setContentType("application/json");
               JSONArray ja=new JSONArray();
               JSONObject jo;
               for(PhotoPost post:Collection.posts.getPage(skip,top,filter)){
                    jo=new JSONObject(post);
                    ja.put(jo);

               }
               response.getWriter().print(ja);
               response.getWriter().flush();
           } else {
               response.getOutputStream().println("No posts for this filter");
           }
       }
       catch (IOException e){
           System.out.println("IO error!");
       }
       catch (ParseException e){
           System.out.println("Date parse error!");
       }
    }
}
