const todoList = ['js','bee'];
rendertodo();
function rendertodo(){


let todoListHTML = '';

for(let i = 0;i < todoList.length;i++){
const tasks = todoList[i];
const HTML = `<p> ${tasks}</p>`;
todoListHTML+= HTML;

}
console.log(todoListHTML);



document.querySelector('.js-list')
  .innerHTML = todoListHTML;
}
function addtodo(){
 const input = document.querySelector('.js-input');
const name = input.value;
console.log(name);


todoList.push(name);
console.log(todoList);

input.value = '';

}