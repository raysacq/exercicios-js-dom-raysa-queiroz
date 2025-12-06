function validarFormulario() {
  const nome = document.getElementById('nome').value.trim();
  const cpf = document.getElementById('cpf').value.trim();
  const mensagemEl = document.getElementById('mensagem');
  const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  if (nome === '' || cpf === '') {
    mensagemEl.innerText = 'Os campos Nome e CPF são obrigatórios.';
    mensagemEl.style.color = 'red';
    mensagemEl.style.fontWeight = '600';
    return;
  }

  if (!cpfValido.test(cpf)) {
    mensagemEl.innerText = 'CPF inválido! Use o formato 000.000.000-00.';
    mensagemEl.style.color = 'red';
    mensagemEl.style.fontWeight = '600';
    return;
  }

  mensagemEl.innerText = 'Cadastro validado com sucesso!';
  mensagemEl.style.color = 'green';
  mensagemEl.style.fontWeight = '600';
}
