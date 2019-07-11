<%--
  Created by IntelliJ IDEA.
  User: tuyentle
  Date: 2019-07-10
  Time: 22:43
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login page</title>
</head>
<%--<%--%>
<%--    String check ="";--%>
<%--    for (Cookie cookie : request.getCookies()) {--%>
<%--        if (cookie.getName().equals("user")) {--%>
<%--            check = "checked";--%>
<%--            break;--%>
<%--        }--%>
<%--    }--%>
<%--%>--%>


<body>
<%
    String check = "";
    Cookie cookie = null;
    Cookie[] cookies = null;

    // Get an array of Cookies associated with the this domain
    cookies = request.getCookies();

    if (cookies != null) {

        for (int i = 0; i < cookies.length; i++) {
            cookie = cookies[i];
            if ("user".equals(cookie.getName()) && cookie.getValue() != null) {
                check = "checked";
                break;
            }
        }
    }
%>
<form action="login" method="post">
    Username: <input type="text" name="username" value="${cookie.user.value}"><br>
    Password: <input type="password" name="password"><br>
    Remember me: <input type="checkbox" value="yes" name="remember" <%= check%>><br>
    <input type="submit" value="Login">
</form>
<span style="color: red">${err_msg}</span>
</body>
</html>
