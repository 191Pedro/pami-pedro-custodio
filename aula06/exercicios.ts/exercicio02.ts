let cidades: string[] = ['Sao Paulo', 'Salvador', 'Gramado', 'Natal', 'Olimpia'];

function listarCidades(cidades: string[]): void {
    cidades.forEach(cidade => {
        console.log(cidade);
    });
}

listarCidades(cidades);