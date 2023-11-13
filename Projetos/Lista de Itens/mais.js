// conexão com elementos html
// Encapsulando os elementos em uma variavel

// Filtro de pesquisa
const filter = document.getElementById('filter');

//Formulario para add item
const form = document.getElementById('addForm');

// Lista para receber novos itens adcionados
const list = document.getElementById('items');

filter.addEventListener('keyup', filtrarItem);

form.addEventListener('submit', addItem);

list.addEventListener('click', removeItem);

function filtrarItem(evento){
    //Recebendo valores digitados
let txt = evento.target.value.toLowerCase(); // converte para minusculo
// Buscar todos os itens(li)
let itens = document.getElementsByTagName('li');

// conveter para uma Array o objeto itens
Array.from(itens).forEach(function (item){
    let itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(txt) != -1){
        item.style.display = 'block'

    } else {
        item.style.display = 'none';
    }
});
  };
/* função para adicionar um novo item */
function addItem(evento){
    evento.preventDefault();
    /* Passo a passo */

    const li = document.createElement('li');
    li.className =  'list-group-item';
    /*  receber o valor do campo input */

    const textoItem = document.getElementById('item').value;
    /* inserindo texto no li */

    if(textoItem != ''){
    li.appendChild(document.createTextNode(textoItem));

    /* Botão */

    const btn = document.createElement('button');
    /* atribuir classes */

    btn.className = 'btn btn-danger btn-sm float-end delete';
    btn.appendChild(document.createTextNode('X'));
    /* unindo */

    li.appendChild(btn);
    list.appendChild(li);
    console.log(li)

    /* resetar */
    form.reset();

    } else {
        alert('digita porra')
    }
};
function removeItem(evento){
     /* alert('vc tocou em mim') */ 
    if(evento.target.classList.contains('delete')){
        /* selecionando o pai do elemento clicado */
        let li = evento.target.parentElement;
        list.removeChild(li); /* remove o elemento da */
    }
};

