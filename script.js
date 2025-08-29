document.addEventListener('DOMContentLoaded', function () {
    // Botão para mostrar/esconder as dicas da M1014
    const botaoDicasM1014 = document.getElementById('botao-dicas-m1014');
    const listaDicasM1014 = document.getElementById('lista-dicas-m1014');

    botaoDicasM1014.addEventListener('click', function () {
        botaoDicasM1014.classList.toggle('rotacao-botao');
        listaDicasM1014.classList.toggle('mostrar-dicas');
    });

    // Botões para ajustar o tamanho da fonte do guia M1014
    const botaoAumentarFonte = document.getElementById('aumentar-fonte-m1014');
    const botaoDiminuirFonte = document.getElementById('diminuir-fonte-m1014');

    let tamanhoFonteAtual = 1;

    botaoAumentarFonte.addEventListener('click', function () {
        tamanhoFonteAtual += 0.1;
        document.getElementById('conteudo-guia-m1014').style.fontSize = `${tamanhoFonteAtual}rem`;
    });

    botaoDiminuirFonte.addEventListener('click', function () {
        if (tamanhoFonteAtual > 0.5) {  // evita fonte muito pequena
            tamanhoFonteAtual -= 0.1;
            document.getElementById('conteudo-guia-m1014').style.fontSize = `${tamanhoFonteAtual}rem`;
        }
    });
});
