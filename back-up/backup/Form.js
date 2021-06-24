document.querySelector("#signUp").addEventListener("click", (e) => {
  e.preventDefault();
  let firstName = $("#firstName").val();
  let lastName = $("#lastName").val();
  const fullName = `${firstName} ${lastName}`;
  let emailUser = $("#emailUser").val();
  let passwordUser = $("#passwordUser").val();
  let month = $("#month").val();
  let day = $("#day").val();
  let year = $("#year").val();
  const birthday = `${month}-${day}-${year}`;
  let gender = $("input[type='radio'][name='gender-user']:checked").val();

  const accounts = JSON.parse(localStorage.getItem("accounts"));

  let picture = gender === "male" ? "./img/male.png" : "./img/female.png";

  const newAccount = {
    fullName: fullName,
    email: emailUser,
    password: passwordUser,
    birthday: birthday,
    gender: gender,
    picture: picture,
  };

  accounts.push(newAccount);

  localStorage.setItem("accounts", JSON.stringify(accounts));

  const login = {
    email: emailUser,
    password: passwordUser,
  };

  localStorage.setItem("login", JSON.stringify(login));

  if (
    localStorage.getItem("login").length > 2 &&
    window.location.pathname.includes("/FinalProject.html")
  ) {
    window.location.href = "HiFriend.html";
  }
});

document.querySelector("#logIn").addEventListener("click", (e) => {
  e.preventDefault();
  let email = $("#email").val();
  let password = $("#password").val();

  const login = {
    email,
    password,
  };

  const listOfAccounts = JSON.parse(localStorage.getItem("accounts"));

  const listOfAccountsEmail = listOfAccounts.map(({ email }) => email);
  const loggedInAccountInfoNumber = listOfAccountsEmail.indexOf(email);

/*error checking*/
  if (loggedInAccountInfoNumber < 0) {
    console.log("email cannot find");
  } else {
    const loginAccount = listOfAccounts[loggedInAccountInfoNumber];
    if (loginAccount.email === email && loginAccount.password === password) {
      localStorage.setItem("login", JSON.stringify(login));
    } else {
      console.log("wrong password");
    }
  }

  if (
    localStorage.getItem("login").length > 2 &&
    window.location.pathname.includes("/FinalProject.html")
  ) {
    window.location.href = "HiFriend.html";
  }
});
