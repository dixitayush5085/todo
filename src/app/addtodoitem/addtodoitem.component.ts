import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-addtodoitem',
  templateUrl: './addtodoitem.component.html',
  styleUrls: ['./addtodoitem.component.scss']
})
export class AddtodoitemComponent implements OnInit {

  todoForm!: FormGroup;

  constructor(private appService: AppService,private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.initTodoForm();
  }

  initTodoForm() {
    this.todoForm = this.formBuilder.group({
      'todoTitle': this.formBuilder.control('', Validators.required),
      'todoDescription': this.formBuilder.control(''),
      'currentTime': this.formBuilder.control(Date.now())
    })
  }
  
  addToTodoList(todo: any) {
    this.appService.addToTodoList(todo);
  }

  submitForm() {
    console.log(this.todoForm.value);
    if(this.todoForm.valid){
      this.addToTodoList(this.todoForm.value);
      this.todoForm.reset();
    }

  }
}
