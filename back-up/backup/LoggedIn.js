const loggedInAccount = JSON.parse(localStorage.getItem("login"));
const listOfAccounts = JSON.parse(localStorage.getItem("accounts")).map((e) => {
  return {
    email: e.email,
    fullName: e.fullName,
    birthday: e.birthday,
    gender: e.gender,
    picture: e.picture,
  };
});

const listOfAccountsEmail = listOfAccounts.map(({ email }) => email);
const loggedInAccountInfoNumber = listOfAccountsEmail.indexOf(
  loggedInAccount.email
);

const loggedInAccountInfo = listOfAccounts[loggedInAccountInfoNumber]; // MAIN

// Profile Show
document.querySelector("#profilePicture").src = loggedInAccountInfo.picture;
document.querySelector("#fullName").textContent = loggedInAccountInfo.fullName;
document.querySelector("#profilePictureNav").src = loggedInAccountInfo.picture;
document.querySelector("#firstNameNav").textContent =
  loggedInAccountInfo.fullName.split(" ")[0];

// SignOut
const signOutIcon = document.querySelector("#signOut");
signOutIcon.addEventListener("click", () => {
  if (localStorage.getItem("login").length > 2) {
    localStorage.setItem("login", JSON.stringify({}));
  } else {
    console.log("No logged in account");
  }

  if (
    localStorage.getItem("login").length <= 2 &&
    window.location.pathname.includes("/HiFriend.html")
  ) {
    window.location.href = "FinalProject.html";
  }
});
