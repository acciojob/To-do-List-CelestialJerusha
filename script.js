//your code here
let list = document.getElementById("todoList");

function add(){
	let text = document.getElementById("newTodoInput").value;
	let l = document.createElement("li");
	if(text !== ""){
		l.innerHTML = text;
		list.appendChild(l);
	}
	
}