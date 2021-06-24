if (localStorage.getItem("login") === null) {
  localStorage.setItem("login", JSON.stringify({}));
}

if (localStorage.getItem("accounts") === null) {
  localStorage.setItem("accounts", JSON.stringify([]));
}
