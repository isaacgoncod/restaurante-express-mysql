const uri = "http://localhost:3000/";
const corpo = document.querySelector("#corpo");

fetch(uri + "rest/read/home", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => montarTabela(resp))
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    col1.innerHTML = e.nome;
    col2.innerHTML = e.nome_cat;
    col3.innerHTML = e.nota;

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);

    corpo.appendChild(linha);
  });
}