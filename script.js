var x=0;
var addbutton=document.getElementById("add-button");
var complete=document.getElementById("clear-completed-button");
var save=document.getElementById("save-button");
var empty=document.getElementById("empty-button");
addbutton.addEventListener("click",addtodoitem);
function addtodoitem(){
  x=x+1;
  if(x==10){
    newtodoitem("Maximum Text Exceeds! Now Clear All For New Text",false);
    return
  }
  var entryvalue=document.getElementById("entry").value;
  newtodoitem(entryvalue,false);

}
var todolist=document.getElementById("todo-list");
function newtodoitem(text,completed){
  var todoitem=document.createElement("li");
  var todotext=document.createTextNode(text);
  todoitem.appendChild(todotext);
  if(completed){
    todoitem.classList.add("completed");

  }
  todolist.appendChild(todoitem);
  todoitem.addEventListener("dblclick",completingitems);
}
complete.addEventListener("click",clearcompleted)
function clearcompleted(){
  var completeitem=todolist.getElementsByClassName("completed");
  while(completeitem.length>0){
    completeitem.item(0).remove();
  }
};
empty.addEventListener("click",emptyall)
function emptyall(){
  var emptyitems=todolist.children;
  while(emptyitems.length>0){
   emptyitems.item(0).remove();
  }

};
function completingitems(){
  if(this.classList.contains("completed")){
    this.classList.remove("completed");
  }
  else{
    this.classList.add("completed");
  }
};
var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);
var toDoInfo = {
    "task": "Thing I need to do",
    "completed": false
};
save.addEventListener("click",savelist)
function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo);

    }

    localStorage.setItem("toDos", JSON.stringify(toDos));
}
function loadList() {
    if (localStorage.getItem("toDos") != null) {
        var toDos = JSON.parse(localStorage.getItem("toDos"));

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newtodoitem(toDo.task, toDo.completed);
        }
    }
}
loadList();
