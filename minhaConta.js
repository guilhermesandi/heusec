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

let salvas = []; // Array senhas salvas
let salvarSenha = () => {
  let endereco, login, senha, tela, texto;

  if (localStorage.senhasSalvas == undefined) {
    endereco = document.getElementById("txtEndereco").value;
    login = document.getElementById("txtLogin").value;
    senha = document.getElementById("txtSenha").value;

    localStorage.setItem('senhasSalvas', JSON.stringify({ senhasSalvas: [{ endereco, login, senha }] }));
  } else {
    endereco = document.getElementById("txtEndereco").value;
    login = document.getElementById("txtLogin").value;
    senha = document.getElementById("txtSenha").value;

    salvas = JSON.parse(localStorage.getItem('senhasSalvas'));

<<<<<<< HEAD
  texto = `<!-- Button trigger modal -->
  <button type="button" class="btn btn-primary align-middle" data-toggle="modal" data-target="#exampleModal1">
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
=======
    salvas.senhasSalvas.push({ endereco, login, senha });

    localStorage.setItem('senhasSalvas', JSON.stringify(salvas));
  }
}

let exibeSenhasSalvas = () => {
  let tela = document.querySelector("#listaSenhas");
  let texto = "";
  let telaQt = document.querySelector("#qtSenhas");
  let textoQt = "";
  
  salvas = JSON.parse(localStorage.getItem('senhasSalvas'));
  
  if (salvas.senhasSalvas.length === 0) {
    localStorage.removeItem('pesquisasSalvas');
  }
  
  let qtSenhas = salvas["senhasSalvas"].length;
  textoQt = `
    <p>${qtSenhas} senha(s)</p>
  `;
  telaQt.innerHTML = textoQt;
  
  for (i = 0; i < salvas.senhasSalvas.length; i++) {
    let endereco = salvas.senhasSalvas[i].endereco;
    let login = salvas.senhasSalvas[i].login;
    let senha = salvas.senhasSalvas[i].senha;


    texto = texto + `
    <li class="list-group-item list-group-item-action" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
      <section>${endereco}</section>
    </li>
    <div class="collapse" id="collapse${i}">
      <div class="card-informacoes card card-body">
        <h5><strong>Login:</strong> ${login}</h5>
        <h5><strong>Senha:</strong> ${senha}</h5>
        <button type="button" value="${i}" class="btn btn-danger" data-dismiss="modal" onclick="apagaSenha(${i})">Apagar senha</button>
>>>>>>> master
      </div>
    </div>`;
  };

  tela.innerHTML = texto;
};

let pesquisaSenhas = () => {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('txtBusca');
  filter = input.value.toUpperCase();
  ul = document.getElementById("listaSenhas");
  li = ul.getElementsByTagName('li');

  for (i = 0; i < li.length; i++) {
    tag = li[i].getElementsByTagName("section")[0];
    txtValue = tag.textContent || tag.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

let apagaSenha = (id) => {
  salvas = JSON.parse(localStorage.getItem('senhasSalvas'));
  salvas.senhasSalvas.splice(id, 1);
  localStorage.setItem('senhasSalvas', JSON.stringify(salvas));
  exibeSenhasSalvas();
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
};
onload = exibeSenhasSalvas();