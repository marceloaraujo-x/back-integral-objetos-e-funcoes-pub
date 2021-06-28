function corrigirProva(prova) {
    let acertos = 0;
    const valorDaQuestao = 2;
    for (let item of prova.questoes) {
        if (item.resposta === item.correta) {
            acertos++;
        }
    }
    const nota = valorDaQuestao * acertos;
    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${nota}`);
}

const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

corrigirProva(prova);