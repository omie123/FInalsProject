if (
  localStorage.getItem("login").length <= 2 &&
  window.location.pathname.includes("/HiFriend.html")
) {
  window.location.href = "FinalProject.html";
}
