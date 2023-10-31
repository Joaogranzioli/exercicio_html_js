function validarFormulario() {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);
    var mensagemElement = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagemElement.innerHTML = 'Formulário válido. B é maior que A.';
        mensagemElement.classList.remove('invalido');
        mensagemElement.classList.add('valido');
    } else {
        mensagemElement.innerHTML = 'Formulário inválido. B deve ser maior que A.';
        mensagemElement.classList.remove('valido');
        mensagemElement.classList.add('invalido');
    }
}
