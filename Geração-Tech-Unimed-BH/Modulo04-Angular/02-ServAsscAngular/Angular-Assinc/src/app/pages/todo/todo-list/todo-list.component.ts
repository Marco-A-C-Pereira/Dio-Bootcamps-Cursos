import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/todo';

@Component({
  selector: 'ass-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: Array<Task> = [];
  task : Task = {
    id:0,
    title: '',
    done: false,
  }

  constructor() { }

  ngOnInit(): void {
    let localItens:any = localStorage.getItem('tasks');
    let tasks = JSON.parse(localItens);

    if (!tasks) {
      this.tasks = [];
    } else {
      this.tasks = tasks;
    }
  }

  addTask(title: string){
    const id = this.tasks.length + 1;

    this.tasks.push ({
      id: id,
      title: title,
      done: false,
    });
    
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  removeTask(task:any) {
    console.log('ELEMENTO RECEBIDO:', task);
    
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1)

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
