import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  todoList:any[] = [];

  constructor(private appSerive: AppService) { }

  ngOnInit(): void {
    this.appSerive.getTodoList().forEach((item) => {
        console.log(item);
        this.todoList = item;
    });
  }

  deleteTodo(id: string) {
      this.appSerive.deleteTodoItem(id);
  }

}
