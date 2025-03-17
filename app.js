let inputAmigo = document.getElementById('amigo');
let listaAmigos = [];
let ulListaAmigos = document.getElementById('listaAmigos');
let ulResultado = document.getElementById('resultado');

function adicionarAmigo() {
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    listaAmigos.push(nome);
    let li = document.createElement("li");
    li.textContent = nome;
    ulListaAmigos.appendChild(li);
    
    inputAmigo.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let ganhador = listaAmigos[indiceSorteado];

    
    ulResultado.innerHTML = `<li>🎉 O ganhador do sorteio foi: <strong>${ganhador}</strong>! 🎉</li>`;

    
    listaAmigos = [];
    ulListaAmigos.innerHTML = "";
}





