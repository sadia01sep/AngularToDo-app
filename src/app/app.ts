import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`
  <div class='container'>
  <h2>My Todays Challanges</h2>
  </div>
  <div class='task-card'>
  @for(task of Tasks; track task.id){
   <h3 [style.color]="task.completed === 'True' ? 'green' : 'red' ">{{task.name}}  
   <button (click)="onClick(task)">Complete</button></h3><br><br>
  
        @if (task.completed === 'True') {
          <p [style.color]="'green'">✅ Task Completed</p>
        }
   }</div>
   `,
  styleUrl: './app.css'
})
export class App {
  Tasks = [{id:1, name:'Morning walk', completed:'False'}
    ,{id:2, name:'Take Break fast',  completed:'False'},
    {id:3, name:'Morning walk'},
    {id:4, name:'Clean your home'},
    {id:5, name:'Go to work desk',  completed:'False'}];
    onClick(task:any){
      task.completed = 'True'
    }
}
