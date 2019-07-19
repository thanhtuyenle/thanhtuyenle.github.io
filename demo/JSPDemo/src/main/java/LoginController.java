import com.example.dao.UserDao;
import com.example.model.User;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.util.List;

@WebServlet("/login")
public class LoginController extends HttpServlet {

    String uName = "admin";
    String pWord = "admin123";
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");

        if(username.equals(uName) && password.equals(pWord)){
            HttpSession session = req.getSession();
            session.setAttribute("username", username);

        }
    }
}
