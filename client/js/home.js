const url = "http://localhost:3000/rest";
const corpo = document.querySelector("#corpo");
const modal = document.querySelector(".modal-body");
let query = document.querySelector("#query");

query.addEventListener("change", () => {
  let uri = "";

  query.value == "" ? (uri = "/read/home/all") : (uri = "/read/home?cat=");

  fetch(url + uri + query.value, { method: "GET" })
    .then((resp) => resp.json())
    .then((resp) => {
      corpo.innerHTML = "";
      montarTabela(resp);
    })
    .catch((err) => console.error(err));
});

fetch(url + "/read/home/info", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => {
    getRestInfo();
  })
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let col4 = document.createElement("td");
    let button = document.createElement("button");

    col1.innerHTML = e.nome;
    col2.innerHTML = e.nome_cat;
    col3.innerHTML = e.nota;
    button.innerHTML = "info";

    button.setAttribute("type", "button");
    button.setAttribute("data-mdb-toggle", "modal");
    button.setAttribute("data-mdb-target", "#myModal");

    button.className = "btn btn-primary";

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    linha.appendChild(col4);
    col4.appendChild(button);

    corpo.appendChild(linha);
  });
}

function getRestInfo() {}
