const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      {
        texto: "Isso é assustador!",
        afirmacao: "Você tem uma visão mais cautelosa sobre a Inteligência Artificial.",
      },
      {
        texto: "Isso é maravilhoso!",
        afirmacao: "Você vê a Inteligência Artificial como uma tecnologia cheia de possibilidades.",
      },
    ],
  },
  {
    enunciado:
      "Com a descoberta desta tecnologia, chamada Inteligência Artificial, uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
    alternativas: [
      {
        texto:
          "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
        afirmacao:
          "Você entende que a IA pode ser utilizada como uma ferramenta de apoio aos estudos.",
      },
      {
        texto:
          "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        afirmacao:
          "Você prefere utilizar pesquisas próprias e seus conhecimentos para desenvolver o trabalho.",
      },
    ],
  },
  {
    enunciado:
      "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
    alternativas: [
      {
        texto:
          "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
        afirmacao:
          "Você acredita que a IA pode transformar o mercado de trabalho e criar novas oportunidades.",
      },
      {
        texto:
          "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
        afirmacao:
          "Você se preocupa com os impactos da IA sobre os trabalhadores e a substituição de empregos.",
      },
    ],
  },
  {
    enunciado:
      "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
    alternativas: [
      {
        texto:
          "Criar uma imagem utilizando uma plataforma de design como o Paint.",
        afirmacao:
          "Você prefere utilizar ferramentas tradicionais para expressar sua criatividade.",
      },
      {
        texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
        afirmacao:
          "Você está disposto a experimentar ferramentas de IA para estimular sua criatividade.",
      },
    ],
  },
  {
    enunciado:
      "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
    alternativas: [
      {
        texto:
          "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
        afirmacao:
          "Você considera que utilizar diretamente o conteúdo produzido pela IA pode ser uma forma válida de contribuição.",
      },
      {
        texto:
          "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
        afirmacao:
          "Você entende que a IA deve ser utilizada com responsabilidade, revisão e participação humana.",
      },
    ],
  },
];

let atual = 0;
let respostas = [];

// Mostra a pergunta atual
function mostraPergunta() {
  // Verifica se todas as perguntas já foram respondidas
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];

  caixaPerguntas.textContent = perguntaAtual.enunciado;

  // Limpa as alternativas anteriores
  caixaAlternativas.innerHTML = "";

  mostraAlternativas();
}

// Cria os botões das alternativas
function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");

    botaoAlternativas.textContent = alternativa.texto;

    botaoAlternativas.addEventListener("click", function () {
      respostaSelecionada(alternativa);
    });

    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

// Registra a resposta escolhida
function respostaSelecionada(opcaoSelecionada) {
  respostas.push(opcaoSelecionada);

  atual++;

  mostraPergunta();
}

// Mostra o resultado final
function mostraResultado() {
  caixaPerguntas.textContent = "Resultado";
  caixaAlternativas.innerHTML = "";

  let resultado = `
    <h2>Obrigado por responder!</h2>
    <p>
      Suas respostas mostram como você enxerga o uso da
      Inteligência Artificial no cotidiano, nos estudos e no futuro.
    </p>
  `;

  resultado += "<h3>Suas escolhas:</h3>";

  respostas.forEach((resposta, indice) => {
    resultado += `
      <p>
        <strong>Pergunta ${indice + 1}:</strong>
        ${resposta.texto}
      </p>
    `;
  });

  textoResultado.innerHTML = resultado;

  // Exibe a caixa de resultado
  caixaResultado.style.display = "block";
}

// Inicia o quiz
mostraPergunta();

O que eu corrigi

As alternativas agora realmente registram a escolha do usuário.

Corrigi o problema de afirmacoes/afirmacao.

As alternativas anteriores são apagadas antes de aparecerem as próximas.

Quando chega à última pergunta, o código não tenta acessar uma pergunta inexistente.

Criei uma função mostraResultado() para finalizar o quiz.

O resultado mostra todas as respostas escolhidas.

Mantive sua estrutura original para você conseguir entender e continuar editando.

Importante: seu HTML precisa ter estes elementos:

<div class="caixa-principal">
  <div class="caixa-perguntas"></div>

  <div class="caixa-alternativas"></div>

  <div class="caixa-resultado">
    <div class="texto-resultado"></div>
  </div>
</div>


E, se quiser que a caixa de resultado fique escondida até o final, no CSS coloque:

.caixa-resultado {
  display: none;
}


Se você quiser, também posso deixar esse quiz mais bonito e transformar o resultado em um “perfil de usuário de IA”, por exemplo: “Você é um usuário consciente de IA”, “Você é um explorador de novas tecnologias”, etc.