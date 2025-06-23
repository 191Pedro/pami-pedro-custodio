interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
}


const meuLivro: Livro = {
    titulo: 'O pequeno principe',
    autor: 'Joao Siles',
    anoPublicacao: 2028
};


function exibirLivro(livro: Livro): void {
    console.log(`Título: ${livro.titulo}`);
    console.log(`Autor: ${livro.autor}`);
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}


exibirLivro(meuLivro);