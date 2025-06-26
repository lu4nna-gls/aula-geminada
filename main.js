    // Seleciona elementos
    const entrada = document.getElementById("entrada");
    const botao = document.getElementById("verificar");
    const resultado = document.getElementById("resultado");

    function verificarParOuImpar() {
      const valor = parseInt(entrada.value, 10);

      // Validação simples
      if (isNaN(valor)) {
        resultado.textContent = "Por favor, digite um número válido.";
        return;
      }

      // Checagem de paridade
      if (valor % 2 === 0) {
        resultado.textContent = `O número ${valor} é PAR.`;
      } else {
        resultado.textContent = `O número ${valor} é ÍMPAR.`;
      }
    }

    // Clique no botão
    botao.addEventListener("click", verificarParOuImpar);

    // Permite apertar Enter dentro do input
    entrada.addEventListener("keyup", (evt) => {
      if (evt.key === "Enter") verificarParOuImpar();
    });