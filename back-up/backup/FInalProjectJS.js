if (localStorage.getItem("accounts") === null) {
  localStorage.setItem("accounts", JSON.stringify([]));
}

if (localStorage.getItem("login") === null) {
  localStorage.setItem("login", JSON.stringify({}));
} else if (
  localStorage.getItem("login").length > 2 &&
  window.location.pathname.includes("/FinalProject.html")
) {
  window.location.href = "HiFriend.html";
}

$(document).ready(function () {
  $(".create-account").click(function () {
    $(".background-modal").css("display", "flex");
  });
  $(".close").click(function () {
    $(".background-modal").css("display", "none");
  });
});

$(document).ready(function () {
  let password = $("#passwordUser");
  $("#unhide").click(function () {
    if (password.prop("type") == "password") {
      $(this).addClass("fa-eye-slash");
      password.attr("type", "text");
    } else {
      $(this).removeClass("fa-eye-slash");
      password.attr("type", "password");
    }
  });
});
