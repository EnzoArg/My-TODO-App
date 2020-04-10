const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  // inpux box
  var person = prompt("Please enter item into todo-list:");
  
  // if person is not empty add to list
  if(person !== "" || person !== null ){
  	//Make a list item
  	var item = document.createElement("li");
  	// Assigning the attributes 
  	item.classList  = classNames.TODO_ITEM
  	item.id = classNames.TODO_ITEM

  	// Make a checkbox
  	var checkbox = document.createElement('input'); 
  	// Assigning the attributes 
    checkbox.type = "checkbox" 
    checkbox.classList = classNames.TODO_CHECKBOX
    checkbox.checked = false
    checkbox.onclick = function (){
    	refreshCounter()
    }

    // Make button to remove from todo
    var remove = document.createElement('button'); 
    remove.classList = classNames.TODO_DELETE
    remove.innerText = 'remove'
    remove.onclick = function (){
    	var nodocontent= this.parentNode
		list.removeChild(nodocontent)
		refreshCounter()
    }

    // Make text
  	var nodo = document.createTextNode(person)
  	nodo.classList = classNames.TODO_TEXT

  	// add checkbox and text to item
  	item.appendChild(checkbox)
  	item.appendChild(nodo)
  	item.appendChild(remove)
  	// add item to list
  	list.appendChild(item)
  	refreshCounter()
  }
}

function refreshCounter(){
	var counter = document.getElementsByClassName(classNames.TODO_ITEM)
	itemCountSpan.innerText = counter.length

	var checkbox_counter = document.getElementsByClassName(classNames.TODO_CHECKBOX)
	var counter = 0
	for( var i = 0 ; i < checkbox_counter.length ; i++){
		if(!checkbox_counter[i].checked)
			counter++
	}
	uncheckedCountSpan.innerText = counter
}

