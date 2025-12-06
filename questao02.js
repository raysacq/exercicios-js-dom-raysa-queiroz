function mudarForma() {
    const forma = document.getElementById('forma');
    const botao = document.getElementById('btn-forma');

    if (forma.style.borderRadius === '50%') {
        forma.style.borderRadius = '0%';
        botao.innerText = 'Retornar forma original';
    } else {
        forma.style.borderRadius = '50%';
        botao.innerText = 'Mudar forma';
    }
}
