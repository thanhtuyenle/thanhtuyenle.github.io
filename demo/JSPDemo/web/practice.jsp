<%--
  Created by IntelliJ IDEA.
  User: tuyentle
  Date: 2019-07-17
  Time: 10:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Tuyen pracitce JSP</title>
</head>
<body>
<%! int count1 = 0%>
<% int count2 = 0%>
Value of count1 now is:
<%= count1%>
Value of count2 now is:
<%= count2%>

<%
    count1 ++;
    count2 ++;
%>
Value of count1 now is:
<%= count1%>
Value of count2 now is:
<%= count2%>

<%--<%! int count3 = count1 + count2%>--%>

</body>
</html>
