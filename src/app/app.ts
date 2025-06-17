import { Component } from '@angular/core';
import { Counter } from './counter/counter-component';
import { TaskManagment } from './task-managment/task-managment';
import { Signals } from './signals/signals';

@Component({
  selector: 'app-root',
  standalone: true,                 // <-- mandatory for standalone
  imports: [TaskManagment, Counter,Signals],         // <-- import child standalone component
  templateUrl: './app.html',
  styleUrls: ['./app.css']           // <-- plural and correct spelling
})
export class App {
  title = 'My Angular App';
}
