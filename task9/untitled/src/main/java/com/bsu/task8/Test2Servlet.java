package com.bsu;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class Test2Servlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws  IOException {
     String path=request.getContextPath()+"/page";
     response.sendRedirect(path);
    }
}
