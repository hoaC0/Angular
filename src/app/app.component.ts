import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TaskComponent } from "./components/task/task.component";

// Komponenten muessen importiert werden um verwenden werden zu koennen ( wie React )

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, TaskComponent]
})

export class AppComponent {
  title = 'Task Tracker';
}
