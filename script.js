var todos  = [
    {   
        id:1,
        color: 'red',
        task:'Create index.html, script.js, style.css',
        complete: false
    },
    {
        id: 2,
        color: 'green',
        task: 'Add bootstrap and some content',
        complete: false
    },
    {   
        id:3,
        color: 'pink',
        task: 'Add mechanism for create todo...',
        complete: false
    }
 ]


 function createHtmlCard(item){


    let li = document.createElement("li")
    li.innerHTML += 
    `<li id="${item.id}">
            <div class="checkBox defaultCheck" style="background-color:${item.color}">
                <input  class="check"  onclick="checkFluency(${item.id})" type="checkbox" >
            </div>
            <div class="textBox defaultText" style="background-color:${item.color}"> <div class="text"> ${item.task} </div>
            </div>
        </li>` 
    document.getElementById("container").appendChild(li)
    return false;
 }

 function getTodos(){
     todos.forEach((task) => {
        createHtmlCard(task)
     })
     return false;
 }

 function randomColor(){
    let allowed = "ABCDEF0123456789",
    color = '#'

    while(color.length < 7){
        color += allowed.charAt(Math.floor((Math.random()*16)+1));
    }
    return color;
 }

 function createTodo(text, color){
     console.log(text)
     var checkColor = color
     if(checkColor == "#ffffff"){
        checkColor = randomColor();
     }
    let newTodo ={
        id: todos.length+1,
        color: checkColor,
        task: text,
        complete: false,
        date: new Date().toDateString()
    }
    todos.push(newTodo)
    console.log(newTodo)
    createHtmlCard(newTodo)
    return false;
 
}


function saveChanges(id,complete){
    let newColor
    let checked = ''
    if(complete == true){
        newColor = randomColor()
    }else{
        newColor = 'grey'
        checked += 'checked=""'
    }
    document.getElementById(id).innerHTML = `<li id="${todos[id-1].id}">
    <div class="checkBox defaultCheck" style="background-color:${newColor}">
        <input  class="check"  onclick="checkFluency(${todos[id-1].id})" type="checkbox" value="${complete}" ${checked}>
    </div>
    <div class="textBox defaultText" style="background-color: ${newColor}"> <div class="text"> ${todos[id-1].task} </div>
    </div>
</li>` 
}