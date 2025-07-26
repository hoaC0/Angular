import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { TaskComponent } from "./components/task/task.component";

import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent'; // cookie consent modul

// Komponenten muessen importiert werden um verwenden werden zu koennen ( wie React )

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, TaskComponent] // !!! imports hier ( header etc )
})



export class AppComponent {
  title = 'Task Tracker';


}


