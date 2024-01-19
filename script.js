const btn = document.querySelector('#gerar')
const grupoA = document.querySelector('.resultado1')
const grupoB = document.querySelector('.resultado2')
const grupoC = document.querySelector('.resultado3')
const grupoD = document.querySelector('.resultado4')
const grupoE = document.querySelector('.resultado5')
const grupoF = document.querySelector('.resultado6')

btn.addEventListener('click', gerarListaAleatoria)

function gerarListaAleatoria() {
    let array1 = Array.from(new Set(Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5).slice(0, 8)));
    let array2 = Array.from(new Set(Array.from({ length: 25 }, (_, i) => i + 1).filter((x) => !array1.includes(x)).sort(() => Math.random() - 0.5).slice(0, 8)));
    let array3 = Array.from(new Set(Array.from({ length: 25 }, (_, i) => i + 1).filter((x) => !array1.includes(x) && !array2.includes(x)).sort(() => Math.random() - 0.5).slice(0, 8)));
  
    let juncao1 = array1 + ',' + array2
    let juncao2 = array1 + ',' + array3
    let juncao3 = array2 + ',' + array3
  
    console.log("conjunto 1:", juncao1);
    console.log("conjunto 2:", juncao2);
    console.log("conjunto 3:", juncao3);

    grupoA.innerText = array1
    grupoB.innerText = array2
    grupoC.innerText = array3
    grupoD.innerText = juncao1
    grupoE.innerText = juncao2
    grupoF.innerText = juncao3
  }

