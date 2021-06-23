$(document).ready(function () {
    $(".create-account").click(function () {
        $(".background-modal").css("display", "block");
    });
    $(".close").click(function () {
        $(".background-modal").css("display", "none");
    });
});

$(document).ready(function () {
    let password = $("#passwordUser");
    $("#unhide").click(function () {
        if(password.prop("type") == "password") {
            $(this).addClass('fa-eye-slash');
            password.attr('type', 'text');
        }
        else {
            $(this).removeClass('fa-eye-slash');
            password.attr('type','password');
        }
    });
});

/*$(function () {
    $("signUp").click(function () {
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
       

        localStorage.setItem("getvalue", username);
    });
});*/