package com.bsu;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;



public class TimeMeasurementFilter implements Filter {
    @Override
    public void destroy() {
    }
     @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        long start=System.currentTimeMillis();
        chain.doFilter(request,response);
        long end=System.currentTimeMillis();
        HttpServletRequest httpRequest =(HttpServletRequest) request;
        String path=httpRequest.getRequestURI();
        String method=httpRequest.getMethod();
        String host=httpRequest.getHeader("host");
        System.out.println(String.format("%s -%s%s -  %d ms",method,host, path,end-start));
    }

    @Override
    public void init(FilterConfig config)  {

    }

}
