import { Component } from '@angular/core';
import { taskData } from '../../../../data.json'; // import tasks from JSON file
import { Task } from '../../Task'; // import model ( or interface )
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule for two-way data binding
import * as fs from 'fs';
@Component({
  selector: 'app-task',
  imports: [NgFor, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

inputTitle: string = '';
inputText: string = '';

add() {
  if(this.inputTitle, this.inputText) {
    this.tasks.push({
      title: this.inputTitle,
      text: this.inputText,
      date: Date.now().toString(), // converts current date to string ELSE wont work!!!
    })
  }
}
onClick() { // func for click event
  this.add();
}


tasks: Task[] = taskData;

onCheckboxChange(event: any) {
  if (event.target.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is unchecked");
  }
}

}
