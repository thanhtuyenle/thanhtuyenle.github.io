$(function () {

    $('#username').blur(function() {
            var user = {};
            user.userName = $("#username").val();
            user.password = $("#password").val();

            $.post("/login", {"user": JSON.stringify(user)})
                .done(function (data) {
                    var resp = JSON.parse(data);
                    if (resp.userName === "") {
                        $('#error').text('This username does not exist');
                        $("#password").val("");
                    } else {
                        $(location).attr("href", "/welcome");
                       // $('#ajaxGetUserServletResponse').text(resp.userName + " is created!");
                    }
                })
    });
    // $("#btnRegister").click(register);
    //
    // function register() {
    //     var user = {};
    //     user.userName = $("#username").val();
    //     user.password = $("#password").val();
    //     user.fullName = $("#fullname").val();
    //     user.email = $("#email").val();
    //     user.phone = $("#phone").val();
    //     user.address = $("#address").val();
    //
    //     $.post("", {"userNew": JSON.stringify(user)})
    //         .done(function (data) {
    //             var resp = JSON.parse(data);
    //             if (resp.userName === "") {
    //                 toastr["error"]("This username is exists.");
    //                 $("#password").val("");
    //             } else {
    //                 $(location).attr("href", "/profile");
    //                 toastr["success"](resp.userName + " is created!");
    //             }
    //         })
    // }
})