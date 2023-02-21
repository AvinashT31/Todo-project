function addtask() {
    var gettingTodos = document.getElementById("typetodo").value;

    if(gettingTodos){
        console.log(gettingTodos, "gettingTodos");
        var mytodosfromLS = JSON.parse(localStorage.getItem("Todos")) || [];
        mytodosfromLS.push(gettingTodos);
        localStorage.setItem("Todos", JSON.stringify(mytodosfromLS));
        document.getElementById("typetodo").value ="";
        submit();
        alert("Task added succesfully !");
    }
    else{
        alert('Add todo first');
    }
}

function submit(){
    
    var divFromhtml = document.getElementById("displayTodos");

    var gettingTodosFromLS = JSON.parse(localStorage.getItem("Todos"));
    console.log(gettingTodosFromLS, "gettingTodosFromLS");

    var finalstructure = [`<div id="row">
    <p>task</p><p>Completed</p>
    </div>`]

    for(var i=0; i < gettingTodosFromLS.length; i++ ){
        finalstructure += `<div id="content">
        <p>${gettingTodosFromLS[i]}</p>
        <i onclick="deleteTodo()" class="fa-solid fa-trash"></i>
        </div>`
    }
    divFromhtml.innerHTML = finalstructure;
}
submit()


function deleteTodo(todoIndex){
    var todosFromLS = JSON.parse(localStorage.getItem("Todos"));
    todosFromLS.splice(todoIndex, 1)
    localStorage.setItem("Todos", JSON.stringify(todosFromLS));  
    submit(); 
    alert("Delete Successfully");

}

