package controller;

import model.User;
import model.UserMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;

@WebServlet({"/login", ""})
public class LoginServlet extends HttpServlet {
    public LoginServlet() {
    }

    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("login.jsp").forward(req,resp);
    }

    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        String remember = req.getParameter("remember");
        User user = new User(username, password);
        if(UserMap.myUserMap.containsKey(username) && ((User)UserMap.myUserMap.get(username)).getPassword().equals(password)) {
            req.getSession().setAttribute("user_info", username);
            if("yes".equals(remember)){
                Cookie cookie = new Cookie("user", username);
                cookie.setMaxAge(108000); //in seconds
                resp.addCookie(cookie);
            }
            else{
                Cookie cookie = new Cookie("user", null);
                cookie.setMaxAge(0);
                resp.addCookie(cookie);
            }
            resp.sendRedirect("welcome.jsp");
        }
        else{
            req.getSession().setAttribute("err_msg", "Invalid username or password");
            resp.sendRedirect("login.jsp");
        }

    }
}
