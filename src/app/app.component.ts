import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';

  constructor(private appService: AppService) {        
  }

  addToTodoList() {
    this.appService.addToTodoList({title: 'I m testing.',desc: 'I m testing desc.'});
  }

}
