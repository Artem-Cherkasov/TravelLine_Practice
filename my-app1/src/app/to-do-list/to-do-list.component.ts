import { Component, OnInit } from '@angular/core';

class ToDo {
  constructor(public readonly name: string, public readonly done: boolean) {}
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos = [];
  newToDo = '';

  addToDO() {
    this.todos.push(new ToDo(this.newToDo, false));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
