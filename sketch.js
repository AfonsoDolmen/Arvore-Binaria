/*
    Criado por Afonso!
    Para inserir um novo nó, digite no console: arvore.inserir(e o valor que deseja).
*/

let arvore;
let no;

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);

    arvore = new ArvoreBinaria(undefined);

    arvore.inserir(20);
    arvore.inserir(30);
    arvore.inserir(10);
    arvore.inserir(40);
    arvore.inserir(5);
    arvore.inserir(7);
    arvore.inserir(6);
    arvore.inserir(8);
    arvore.inserir(50);
    arvore.inserir(3);
}