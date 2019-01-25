$(document).ready(function(){
  apiService($('apiSelect'));
  // $.getJSON('  /api/todos')
  // .then(addTodos);
  //
  // $('#todoInput').keypress(function(event){
  //   if(event.which == 13){
  //     createTodo()
  //   }
  // })
  //
  // $('.list').on('click', 'li', function(){
  //   console.log(this)
  //   updateTodo($(this));
  // })
  // $('.list').on('click', 'span', function(e){
  //   e.stopPropagation();
  //   deleteTodo($(this).parent())
  // })



})
function apiService(){
  $('#settingsForm').on("change", '#apiSelect', function(){
    var serviceItem = $("#apiSelect").val();
    console.log(serviceItem);

  })

}

function addTodos(items){
  items.forEach(function(item){
    addTodo(item);
  })
}

function addTodo(item){
  var newItem = $('<li class="task">'+item.name+'<span>X</span></li>');
  newItem.data({'id': item._id, 'completed': item.completed});
  if(item.completed){
    newItem.addClass('done');
  }
  $('.list').append(newItem);
}

function createTodo(){
  $.post('/api/todos', {name: $('#todoInput').val()})
  .then(function(newTodo){
    addTodo(newTodo)
    $('#todoInput').val('');
  })
  .catch(function(err){
    console.log(err)
  })
};

function deleteTodo(item){
  todoItem(item);
  $.ajax({
    method: "DELETE",
    url: todoUrl
  })
  .then(function(){
    item.remove();
  })
}

function updateTodo(item){
  todoItem(item);
  if(item.data('completed') == true){
    var status = 'false';
  }else{
    var status = 'true';
  }
  $.ajax({
    method: "Put",
    url: todoUrl,
    data:{
      'completed': status
    }
  })
  .then(function(updatedTodo){
    console.log(updatedTodo);
    item.toggleClass('done');
  })
}


function todoItem(item){
  var id = item.data('id');
  return todoUrl = '/api/todos/'+id;
}
