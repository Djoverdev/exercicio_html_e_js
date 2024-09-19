function validarFormulario(event) {
    event.preventDefault(); // Evita o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        alert('Formulário válido! O número B é maior que o número A.');
    } else {
        alert('Formulário inválido! O número B deve ser maior que o número A.');
    }
}