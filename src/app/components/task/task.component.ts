import { Component } from '@angular/core';
import { taskData } from '../../../../data.json'; // import tasks from JSON file
import { Task } from '../../Task'; // import model ( or interface )
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
isChecked: boolean = false; // set false default
onChecked() {
  if (this.isChecked) {

  }
  
}

tasks: Task[] = taskData;

onClick() { // func for click event
  console.log("CLICKED!!"); // log
}


}
