     var btnAdd=document.getElementById('btnAdd');
      var item=document.getElementById('item');
      let todoList=document.getElementById('todoList');
     



      btnAdd.addEventListener('click',addItem);


      function addItem(e) {
      	e.preventDefault()
			const todoDiv=document.createElement('div');
			todoDiv.classList.add("box-element");
			const newTodo=document.createElement('li');
			newTodo.innerText=item.value;
			newTodo.classList.add("todo-item");
			todoDiv.append(newTodo)
		

		    todoList.prepend(todoDiv);
		   	item.value=''

		   	newTodo.addEventListener('click',function () {
			newTodo.style.textDecoration="line-through"
		    newTodo.classList.add('paragraph-styling');
			});

			todoDiv.addEventListener('dblclick',function (e) {
				      	e.preventDefault()
				todoList.removeChild(todoDiv);
			});
      }