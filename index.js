function addtask() {
    var gettingTodos = document.getElementById("typetodo").value;

    if(gettingTodos){
        console.log(gettingTodos, "gettingTodos");
        var mytodosfromLS = JSON.parse(localStorage.getItem("Todos")) || [];
        mytodosfromLS.push(gettingTodos);
        localStorage.setItem("Todos", JSON.stringify(mytodosfromLS));
        document.getElementById("typetodo").value ="";
        alert("Task added succesfully !");
    }
    else{
        alert('Add todo first');
    }
}