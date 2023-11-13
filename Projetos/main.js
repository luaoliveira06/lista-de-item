// conexão com elementos HTML
// Encapsulando os elementos em uma variável

// Filtro de de pequisa
const filter = document.getElementById('filter');

// Formulário para add item
const form = document.getElementById(addForm);

// lista para reber novos itens adicionado
const list = document.getElementById('items');

filter.addEventListener('keyup',filtrarItem);

form.addEventListener('submit', addItem);

list.addEventListener('click, removeItem');
    
function filtrarItem(){
// Funçao para adicionar um novo item
};
function addItem(evento){}
evento.preventDefault();
/* passo a passo
1- criar li
2-Atribir classes
3-Inserir valor
4-criar btn e colar classe
5-inserir texto 'x'
*/
if()
const li = document.createElement('li');
li.className = 'list-grup-item';
// Receber o valor do campo input
const textoItem = document.getElementById('item').value
//Inserindo texto no li
li.appendChild(document.createTextNode(textoItem));

//criar elemento button
const btn = document.createElement('button');
//Atribuir classes
btn.className = 'btn btn-danger btn-sm float-end delete';
btn.appendChild(document.createTextNode('x'));
// Unido botao ao li
li.appendChild(btn);

// Adicionar a li a lista
list.appendChild(li)

;
function removeItem(evento){
/* alert('Você clicou em mim') */
if(evento.target.classlist.contains(delete)){;
    // selecionando o pai do elemento clicado
let li = evento.target.parentElemrnt;
list.removeChild(li); // remove o elemento da lista
}


};


