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

onCheckboxChange(event: any) {
  if (event.target.checked) {
    console.log("Checkbox is checked");
  } else {
    console.log("Checkbox is unchecked");
  }
}

tasks: Task[] = taskData;

onClick() { // func for click event
  console.log("CLICKED!!"); // log
}


}
