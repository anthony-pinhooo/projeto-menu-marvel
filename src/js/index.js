const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;

        // deixando o ultron como personagem selecionado e não podendo ser escolhido
        if(idSelecionado === 'ultron') return;


        // Trocando a marca de player selecionado 

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        // Trocando a imagem e o nome do jogador quando selecionado
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name')

        nomeJogador1.innerHTML = nomeSelecionado;
    })
})