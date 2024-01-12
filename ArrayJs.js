const todoList = [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  }, {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];
  

listUpdate();

function listUpdate() {
    let todo = '';
    //use of forEach() loop instead of for loop
    todoList.forEach((todoObject,index)=>
    {
      const { name, dueDate } = todoObject;
      const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="js-button-class">Delete</button> `;
        todo = todo + html;
    });

    //this is the use of for loop instead of forEach() loop
    /*
    for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    // const name = todoList[i].name;
    // const dueDate = todoList[i].dueDate;

    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        listUpdate();
        " class="js-button-class js-button-delete">Delete</button> `;
      todo = todo + html;
    } 
    */

    document.querySelector('.js-list')
      .innerHTML = todo;

    //with the use of addEventListenerAll instead of onclick event
    document.querySelectorAll('.js-button-class')
      .forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
          todoList.splice(index, 1);
          listUpdate();
        });
      });
} 

// .addEventListener is used instead of onclick
document.querySelector('.js-button').addEventListener('click',()=>
  addTodo()
);

function addTodo()
{
   const inputEle = document.querySelector('.js-name');
   const name= inputEle.value;

   const inputDate = document.querySelector('.js-date');
   const dueDate = inputDate.value

   todoList.push({
    // name:name,
    // dueDate:dueDate,
    name,dueDate
    });

   inputEle.value = '';
  
   listUpdate();
}