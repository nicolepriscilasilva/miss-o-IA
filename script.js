const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A evolução da IA pode ajudar a sociedade, assim como pode afeta-la. Para você, a IA pode gerar mais riscos ou benefícios  a sociedade?",
        alternativas: [
            {
                texto: "Beneficios",
                afirmacao: "Mercado de trabalho, saúde, segurança, educação, políticas públicas, energia, biodiversidade e atendimento ao cliente."
            },
            {
                texto: "Maleficios",
                afirmacao: "Violação de privacidade, perpetuação de preconceitos, desemprego, falta de empatia, desigualdade de acesso, riscos a saúde e pornografia infantil."
            }
        ]
    },
    {
        enunciado: "Um possível colapso social causado por IA te assusta?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "a probabilidade de um colapso global realmente é assustadora, podendo assim destruir a sociedade como um todo."
            },
            {
                texto: "não",
                afirmacao: "Acreditar na prevenção de um colapso é a forma de não temer o próprio."
            }
        ]
    },
    {
        enunciado: "Você acredita que os humanos estão se prevenindo de uma possível evolução exponencial das IAs?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "com a evolução da mente humana podemos sim nos prevenir do colapso."
            },
            {
                texto: "não",
                afirmacao: "Com a evolução exponencial seria de extrema dificuldade para nós humanos nos prevenirmos de um provável colapso social"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();