function cadastrarUsuario() {
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("dataNasc").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("uf").value;

    const frase = `${nome} nasceu no dia ${data} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;

    const resultado = document.getElementById("resultado");
    resultado.innerText = frase;

    resultado.style.color = "green";
    resultado.style.fontSize = "24px";
}
