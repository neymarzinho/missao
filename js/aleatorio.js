const nomes = ["Alisson", "Nicole", "Paola", "Marcelo", "Ana","Gustavo", "Neymar"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
