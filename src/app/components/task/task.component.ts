import { Component } from '@angular/core';
import { TASKS } from '../../mock-tasks'; // import mock tasks
import { Task } from '../../Task'; // import model ( or interface )
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

tasks: Task[] = TASKS;

onClick() { // func for click event
  console.log("CLICKED!!"); // log
}

}
