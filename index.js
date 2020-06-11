onload = () => {
  let usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  console.log(usuarioCorrente);
  if (usuarioCorrente != null) {
    logado();
  } else {
    login();
  }
};

let logado = () => {
  let usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  nome = usuarioCorrente.nome;
  console.log(usuarioCorrente.nome);
  let logins = document.querySelectorAll(".login");

  for (i = 0; i < logins.length; i++) {
    logins[i].innerHTML = `Olá ${nome}`;
    logins[i].setAttribute("href", "usuario.html");
  }
};

let login = () => {
  let logins = document.querySelectorAll(".login");

  for (i = 0; i < logins.length; i++) {
    logins[i].setAttribute("href", "login.html");
  }
};
