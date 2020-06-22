var dados = {
  noticia: [
    {
      id: 0,
      titulo: "O que é o Antivírus? Entenda mais",
      categoria: "iniciante",
      url: "https://blog-br.softwareone.com/o-que-e-antivirus",
      img: "img/informacao/iniciante/antivirus.png",
      resumo: `Entenda como funciona um antivírus e como ele pode te auxiliar no cotidiano`,
    },
    {
      id: 1,
      titulo: "Aplicativo para Gerenciar suas senhas",
      categoria: "iniciante",
      url:
        "https://canaltech.com.br/apps/Aplicativos-para-gerenciar-suas-senhas/",
      img: "img/informacao/iniciante/gerente.jpeg",
      resumo: `Aplicativos que podem te auxiliar a guardar senhas e logins facilitando assim sua proteção`,
    },
    {
      id: 2,
      titulo: "Como organizar documentos para fazer backup?",
      categoria: "iniciante",
      url:
        "https://canaltech.com.br/seguranca/Como-organizar-documentos-para-fazer-backup/",
      img: "img/informacao/iniciante/backup.png",
      resumo:
        "Dicas para organização na hora de fazer backups em seu computador",
    },
    {
      id: 3,
      titulo: "Tudo sobre Phishing",
      categoria: "iniciante",
      url: "https://br.malwarebytes.com/phishing/",
      img: "img/informacao/iniciante/Phishing.jpg",
      resumo: `O que é phishing? Tipos de phising..Como me proteger? Leia para entender um pouco mais sobre essa técnica de roubo de informações tao utilizadas no dia a dia`,
    },
    {
      id: 4,
      titulo: "10 práticas para garantir a segurança na internet",
      categoria: "iniciante",
      url:
        "https://canaltech.com.br/seguranca/10-praticas-definitivas-para-garantir-a-seguranca-na-internet/",
      img: "img/informacao/iniciante/praticas.jpg",
      resumo: `Dicas que te guiarão a se manter mais seguro nesse ambiente cada vez mais movimentado que é a web`,
    },
    {
      id: 5,
      titulo: "Saiba tudo sobre botnet",
      categoria: "intermediario",
      url:
        "https://www.kaspersky.com.br/resource-center/threats/botnet-attacks",
      img: "img/informacao/intermediario/botnet.jpg",
      resumo:
        "Saiba o que são as botnets e como elas podem afetar seu dia a dia.",
    },
    {
      id: 6,
      titulo: "Cavalo de Troia",
      categoria: "intermediario",
      url: "https://www.kaspersky.com.br/resource-center/threats/trojans",
      img: "img/informacao/intermediario/troia.jpg",
      resumo:
        "Saiba o que é, e mais importante como se proteger desse destruidor vírus.",
    },
    {
      id: 7,
      titulo: "Como corrigir os erros java que aparecem no seu computador.",
      categoria: "intermediario",
      url:
        "https://canaltech.com.br/software/Como-corrigir-os-erros-Java-que-aparecem-no-seu-computador/",
      img: "img/informacao/intermediario/java.png",
      resumo: `A linguagem Java é essêncial para nosso cotidiano mas as vezes leva a aparecer alguns erros, saiba aqui como resolvê-los. `,
    },
    {
      id: 8,
      titulo: "O que é OWASP e sua importância para segurança em aplicações",
      categoria: "intermediario",
      url: "https://blog.convisoappsec.com/owasp-e-sua-importancia/",
      img: "img/informacao/intermediario/owasp.png",
      resumo: `conheça um pouco mais sobre essa entidade muito presente no fortalecimento da segurança de software.`,
    },
    {
      id: 9,
      titulo: "Como recuperar Pendrive corrompido",
      categoria: "intermediario",
      url: "https://hackersec.com/como-recuperar-pendrive-corrompido/",
      img: "img/informacao/intermediario/pendrive.jpg",
      resumo:
        "Vamos lhe ensinar como recuperar um pendrive corrompido de forma simples usando apenas o CMD com suporte ao formato USB para NTFS e FAT32.",
    },
    {
      id: 10,
      titulo: "O que são vírus de computador e worm de computador?",
      categoria: "intermediario",
      url:
        "https://www.kaspersky.com.br/resource-center/threats/computer-viruses-vs-worms",
      img: "img/informacao/intermediario/virusWorm.jpg",
      resumo:
        "Saiba as diferenças entre esses dois tipos de programas maliciosos",
    },
    {
      id: 11,
      titulo: "As certificações de cibersegurança mais renomadas",
      categoria: "avancado",
      url:
        "https://hackersec.com/as-certificacoes-de-ciberseguranca-mais-renomadas/",
      img: "img/informacao/avancado/certificacoes.png",
      resumo: `Conhecer e procurar investir nas certificações de segurança cibernética mais renomadas é essencial para uma carreira de segurança da informação.
      Listamos as certificações mais renomadas e conhecidas do mercado nacional e internacional.`,
    },
    {
      id: 12,
      titulo: "Como configurar uma rede sem fio",
      categoria: "avancado",
      url:
        "https://canaltech.com.br/internet/Como-configurar-uma-rede-sem-fio/",
      img: "img/informacao/avancado/rede.png",
      resumo: `Comprou um roteador novo e não quer que ninguém acesso a sua rede sem fio? Confira todos os passos simples para proteger a sua internet e as configurações presentes na maioria dos modelos que são encontrados à venda para proteger o seu sinal.`,
    },
    {
      id: 13,
      titulo: "Desafio Hacker: o que são os CTF",
      categoria: "avancado",
      url: "https://hackersec.com/desafios-hacker-o-que-sao-os-ctf/",
      img: "img/informacao/avancado/CTF.jpeg",
      resumo: `Conhecidos como Capture The Flag e chamados de CTF, é basicamente uma competição hacker que apresenta diversos desafios de cibersegurança, onde o objetivo é concluir e pegar a “FLAG“, para poder pontuar. E podem ser jogados individualmente ou em equipe.
      Cada vez mais populares os CTFs são promovidos tanto na Internet como em eventos hacker e tecnologia em todo mundo. São sempre muito disputados geralmente por jovens que estão começando na área.`,
    },
    {
      id: 14,
      titulo: "Criptografia",
      categoria: "avancado",
      url: "https://hackersec.com/introducao-a-criptografia/",
      img: "img/informacao/avancado/criptografia.jpg",
      resumo:
        "É quase impossível falar de segurança da informação e não vir à cabeça assuntos relacionados a criptografia, isso se deve ao fato da importância em possuir sistemas com criptografia na confidencialidade das informações, e é por este motivo, que preparamos esta matéria abordando os principais conceitos e fundamentos da criptografia.",
    },
    {
      id: 15,
      titulo: "O que é Pentest?",
      categoria: "avancado",
      url: "https://hackersec.com/o-que-e-pentest/",
      img: "img/informacao/avancado/pentest.jpg",
      resumo:
        "Cada dia mais ouvimos falar em Pentest, porque o mundo conectado é uma realidade consolidada e irreversível, e a cada dia surgem novas soluções que visam promover um maior conforto, facilidade e agilidade no dia-a-dia das pessoas e empresas, especialmente serviços financeiros.",
    },
  ],
};

onload = () => {
  let usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  console.log(usuarioCorrente);
  if (usuarioCorrente != null) {
    logado();
  } else {
    login();
  }
  atualizaTela();
  document.getElementById("logout").addEventListener("click", logout);
  document.getElementById("favoritos").addEventListener("click", favoritos);
};

let logado = () => {
  let usuarioCorrente = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
  nome = usuarioCorrente.nome;
  console.log(usuarioCorrente.nome);
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
                <a class="dropdown-item" href="#">Minha Conta</a>
                <a class="dropdown-item" href="#" id = "logout">Sair</a>
              </div>
    `;
    logins[i].innerHTML = `Olá, ${nome}`;
    logins[i].setAttribute("href", "usuario.html");
  }
};

let login = () => {
  let logins = document.querySelectorAll(".login");

  for (i = 0; i < logins.length; i++) {
    logins[i].setAttribute("href", "login.html");
  }
};

let atualizaTela = () => {
  let tela = document.querySelector(".cards-main");
  let texto = "";
  for (i = 0; i < dados.noticia.length; i++) {
    let noticia = dados.noticia[i];

    texto += `<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 cards" id="${noticia.id}">
    <div class="card" style="width: 18rem;">
    <a href="${noticia.url}" target = "_blank"
      ><img src="${noticia.img}" class="card-img-top padrao" alt="..."
    /></a>
    <div class="card-body">
    <h5 class="card-title">${noticia.titulo}</h5>
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

let logout = () => {
  sessionStorage.removeItem("usuarioCorrente");
  document.location.reload();
};

//let favoritos = () => {
//document.

//};
