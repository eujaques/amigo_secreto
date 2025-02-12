let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já está na lista.");
        return;
    }

    amigos.push(nomeAmigo);

    atualizarLista();

    amigoInput.value = "";

    amigoInput.focus();
}

function verificarEnter(event) {
    if (event.key === "Enter") {
        adicionarAmigo();
    }
}

document.getElementById('amigo').addEventListener('keydown', verificarEnter);

function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const listaAdicionando = document.createElement('li');
        listaAdicionando.textContent = amigo;
        listaAmigos.appendChild(listaAdicionando);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Sem amigos na lista, digite ao menos 2 nomes.");
        return;
    }

    if (amigos.length === 1) {
        alert("O sorteio só pode ser realizado com pelo menos 2 nomes.");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo sorteado foi: ${sorteado}`;
}