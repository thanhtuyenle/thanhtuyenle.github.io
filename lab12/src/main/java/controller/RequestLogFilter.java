package controller;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.time.Duration;
import java.time.Instant;

public class RequestLogFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        Instant start = Instant.now();
        HttpServletRequest req = (HttpServletRequest) request;
        HttpSession session = req.getSession(false);
        HttpServletResponse resp = (HttpServletResponse) response;
        try {
            if(session.getAttribute("user_info") == null){
                ((HttpServletResponse) response).sendRedirect("/login");
            }else{
                chain.doFilter(request,response);
            }
        } finally {
            Instant end = Instant.now();
            Duration timeElapsed = Duration.between(start, end);
            HttpServletRequest in = (HttpServletRequest) request;
            HttpServletResponse out = (HttpServletResponse) response;
            String length = out.getHeader("Content-Length");
            if (length == null || length.length() == 0)
                length = "-";
            System.out.println(in.getRemoteAddr() + " - - [" + start + "]" + " \"" + in.getMethod() + " "
                    + in.getRequestURI() + " " + in.getProtocol() + "\" " + out.getStatus() + " " + length + " "
                    + timeElapsed.toNanos() + " nano-seconds");
        }
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void destroy() {
    }
}