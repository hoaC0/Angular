import { Component } from '@angular/core';
import { TASKS } from '../../mock-tasks'; // import mock tasks
import { Task } from '../../Task'; // import model ( or interface )

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

onClick() { // func for click event
  console.log("CLICKED!!"); // log
  
}

}
