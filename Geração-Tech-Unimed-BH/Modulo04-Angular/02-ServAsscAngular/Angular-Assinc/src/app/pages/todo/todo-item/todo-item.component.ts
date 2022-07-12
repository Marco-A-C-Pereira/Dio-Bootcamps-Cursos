import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/todo';

@Component({
  selector: 'ass-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() task: Task = {
    id:0,
    title: '',
    done: false,
  }
  @Output() remove = new EventEmitter ;

  done = false;

  constructor() { 
  }

  ngOnInit(): void {
  }

  removeTask(): void {
    this.remove.emit(this.task);
  }

  doneTask(): void {
    this.done = true;
  }
}
