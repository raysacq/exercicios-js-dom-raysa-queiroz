function inserirTitulo() {
  const input = document.getElementById('txt-titulo');
  const titulo = document.getElementById('titulo');
  const valor = input.value.trim();

  if (valor !== '') {
    titulo.innerText = valor;
  } else {
    titulo.innerText = 'Título padrão';
  }

  titulo.style.color = 'blue';
  input.value = '';
  input.focus();
}
