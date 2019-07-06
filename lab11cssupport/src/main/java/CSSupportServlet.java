import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class CSSupportServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>CS Tech Support</title></head><body>");
        out.print("<form method='post'>");
        out.print("<p>Please input your problem: </p>");
        out.print("Name: <input type='text' name='name'><br>");
        out.print("Email Address: <input type='text' name='email'><br>");
        out.print("Problem: <input type='text' name='problem'><br>");
        out.print("Problem description: <textarea name='details' cols='20' rows ='10'></textarea> <br>");
        out.print("<input type='submit' value='Help'/>");
        out.print("</form>");
        out.print("</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<p>Postback received</p>");
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        int requestId =  (int)(Math.random() * ((1000 - 1) + 1)) + 1;
        String support_ticket_id =  String.valueOf(requestId);
        out.print("<p>Thank you! " + name + " for contacting us. We should receive reply from us with in 24 hrs in your email address " + email +
                ". Let us know in our support email cstech@mum.edu if you don’t receive reply within 24 hrs. " +
                "Please be sure to attach your reference " + support_ticket_id + " in your email.");
        out.print("</body></html>");
    }

}
