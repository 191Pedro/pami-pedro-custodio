//Funções que retorna tipos
function saudacao(nome: string): string {
    return `olá, ${nome}!`;
}

console.log(saudacao('Leandro'));

//Interface para objeto Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //Opcional
}

//Utilizando a interface usuario fica assim:
function exibirUsuario(usuario: Usuario): void {
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Marcos', idade: 22});

//Exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes: string[]): void {
    nome.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos']);