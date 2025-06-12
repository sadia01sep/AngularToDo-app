import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';
@Component({
    selector:'task-manangement',
    templateUrl: 'task-managment.html',
    imports:[FormsModule]
})
export class TaskManagment{
    addTask='';
 Todaytask = [{id:0,name:'morning walk',completed:false},{id:1,name:'Breakfast',completed:false},{id:0,name:'gp-to working desk',completed:false}]
 onClick(){
if(this.addTask.trim()!==''){
    const newTask = {
        id:this.Todaytask.length+1,
        name:this.addTask,
        completed: false
    };
    this.Todaytask.push(newTask);
    this.addTask='';
}
 }
  toggle(task:any){
    task.completed=!task.completed
 }

}