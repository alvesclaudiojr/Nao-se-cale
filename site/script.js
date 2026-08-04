const botaoContraste = document.querySelector(".botao-contraste");

botaoContraste.addEventListener("click", () => {
    const contrasteAtivo = document.body.classList.toggle("alto-contraste");

    botaoContraste.setAttribute("aria-pressed", String(contrasteAtivo));
    botaoContraste.textContent = contrasteAtivo ? "Modo discreto ativo" : "Modo discreto";
});
