// pegar as perguntas
const questao = document.querySelectorAll('.questao');

// clicar na pergunta
questao.forEach(questao => {
  const title = questao.querySelector('.questao-titulo');
  const resposta = questao.querySelector('.resposta');

  title.addEventListener('click', () => {
    resposta.classList.toggle('show');
  });
});
