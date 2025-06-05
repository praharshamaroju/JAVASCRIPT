const todoList =JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  duedate:'2025-06-04',
  name: 'wash dishes',
duedate: '2025-06-04'}];
renderTodoList();
function renderTodoList() {
let todoListHTML = '';

for (let i = 0; i < todoList.length; i++){
  const todoObject = todoList[i];
  const{name,duedate} = todoObject;
   const html = `
  <div>
  ${name} </div>
  <div> ${duedate} </div>
<button onclick ="
todoList.splice(${i},1);
renderTodoList();
" class = "delete-button"
> delete</button>
   `;
  todoListHTML += html;

}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}
function addTodo() {
 const inputElement = document.querySelector('.js-name-input');
const name =  inputElement.value;
const dateinputelement = document.querySelector('.js-date-input');
const duedate = dateinputelement.value;


todoList.push({
  name,
duedate
});



inputElement.value = '';
renderTodoList();
savetoStorage();
}


function savetoStorage(){
  localStorage.setItem('todoList',JSON.stringify(todoList));
}