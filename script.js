//your code here
let list = document.getElementById("todoList");

function add(){
	let text = document.getElementById("newTodoInput").value;
	let li = document.createElement("li");
	li = text;
	list.innerHTML += li;
}