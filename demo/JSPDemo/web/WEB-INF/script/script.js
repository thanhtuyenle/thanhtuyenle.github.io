$("#btnRegister").click(register);

function register() {
    var user = {};
    user.username = $("#username").val();
    user.password = $("#password").val();

    $('#login').click(function()
    {
        var user=$('#username').val();
        var pwd=$('#password').val();
        $.ajax({
            type: "POST",
            url:"LoginServlet",   // this is my servlet
            data:{"user":user,"password":pwd},
            success: function (data) {
                $(location).attr("href", "/welcome");
                //toastr["success"](resp.userName + " is created!");
            }
        });
    });
}