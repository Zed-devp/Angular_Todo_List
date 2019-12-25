import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  author = 'by Zheng Zheng'
  todos = [
    {
    item: 'Learn Angular', 
    done: false, 
    priority: 4
    },
    {
    item: 'Study Java Stream', 
    done: false, 
    priority: 5
    },
    {
    item: 'Study Algorithm', 
    done: true, 
    priority: 3
    },
    {
    item: 'Have Dinner', 
    done: false, 
    priority: 1
    },
  ];


  addTodo(newTodoItem){
    var newTodo = {
      item: newTodoItem,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.item !== todo.item);
  }
}