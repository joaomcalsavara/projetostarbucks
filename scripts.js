let circulo = document.querySelector(".circulo");

let imagemCopo = document.querySelector(".imagem-copo"); 

function trocarCor(cor) {
    circulo.style.background = cor;
}

function trocaImagem(imagemSrc) {
    
    imagemCopo.src = imagemSrc;
}