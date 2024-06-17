// console.log('running fine');

let todoList=[
  {
    item:'Buy me cup of Cofee:',
    dueDate:'23/05/2024'
  }, 
  {
    item:'enter your DOB:',
    dueDate:'23/05/2024'
  },
  {
    item:'Go to College:',
    dueDate:'23/05/2024'
  }
];
displayItems();


function addToDo(){
  let inputElement =document.querySelector('#todo-input');
  let dateElement =document.querySelector('#todo-date');
  let todoItem =inputElement.value;
  let todoDate=dateElement.value;
 // console.log(todoItem);
 todoList.push({item: todoItem, dueDate:todoDate});
 inputElement.value=' ';
 dateElement.value=' ';

 displayItems();
}


function displayItems(){
  let containerElement = document.querySelector('.todo-container');
   let newHtml='';
// displayElement.innerText = '';

for(let i =0; i<todoList.length; i++){
  // let item =todoList[i].item;
  // let dueDate =todoList[i].dueDate;
  let {item,dueDate}=todoList[i];
  newHtml += `<span>${item}</span>
              <span>${dueDate}</span>
              <button  class='btn-delete'onclick="todoList.splice(${i}, 1); displayItems(); ">Delete</button>`;
              // displayElement.innerText =  displayElement.innerText + "\n" +todoList[i];

  }
containerElement.innerHTML = newHtml;

}
