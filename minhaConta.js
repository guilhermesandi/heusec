let logado = () => {
  let usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  nome = usuarioCorrente.nome;

  let logins = document.querySelectorAll(".login");
  let usuario = document.querySelectorAll(".usuario");

  for (i = 0; i < logins.length; i++) {
    usuario[i].innerHTML = `
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Olá, ${nome}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#" id = "favoritos">Favoritos</a>
                  <a class="dropdown-item" href="minhaConta.html">Minha Conta</a>
                  <a class="dropdown-item" href="#" id = "logout">Sair</a>
                </div>
      `;
    logins[i].innerHTML = `Olá, ${nome}`;
  }
};
let login = () => {
  let logins = document.querySelectorAll(".login");

  for (i = 0; i < logins.length; i++) {
    logins[i].setAttribute("href", "login.html");
  }
};

let encontraFavoritos = () => {
  let favoritos = localStorage.getItem("favoritos");
  atualizaTela(favoritos);
};

let atualizaTela = (conteudo) => {
  let tela = document.querySelector(".cards-main");
  let texto = "";
  for (i = 0; i < conteudo.length; i++) {
    let noticia = conteudo[i];

    texto += `<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 cards" id="${noticia.id}">
      <div class="card" style="width: 18rem;">
      <a href="${noticia.url}" target = "_blank"
        ><img src="${noticia.img}" class="card-img-top padrao" alt="..."
      /></a>
      <div class="card-body">
      <a href="${noticia.url}"><h5 class="card-title">${noticia.titulo}</h5></a>
        <p class="card-text">
          ${noticia.resumo}
        </p>
        <p class="more">
          <a href="${noticia.url}"><small> Saber mais -></small></a>
        </p>
      </div>
    </div>
    </div>
    `;
  }
  tela.innerHTML = texto;
};

let adicionaSenha = () => {
  let endereco = document.getElementById("txtEndereco").value;
  let senha = document.getElementById("txtSenha").value;
  let tela = document.querySelector(".cofre");
  let texto = "";

  texto = `<!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
    ${endereco}
  </button>
  <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Senha para o site Requisitado</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h5>Endereço do site: ${endereco}</h5>
          <h5>Senha: ${senha}</h5>
          <button onclick = "apagaSenha()">Apagar senha</button>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Fechar</button>
        </div>
      </div>
    </div>
  </div>`;

  tela.innerHTML += texto;
};

let apagaSenha = (e) => {
  console.log("entrou apagar");
  console.log(e);
};

let logout = () => {
  sessionStorage.removeItem("usuarioCorrente");
  document.location.reload();
};

onload = () => {
  let usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  if (usuarioCorrente != null) {
    logado();

    document.getElementById("logout").addEventListener("click", logout);
  } else {
    login();
  }
  document.getElementById("btnSalvar").addEventListener("click", adicionaSenha);
};
