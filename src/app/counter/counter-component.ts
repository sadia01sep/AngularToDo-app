import { Component} from "@angular/core";
@Component({
selector: "counter-app",
templateUrl: './counter-component.html',
styleUrl: './counter-component.css'
})
export class Counter{
    a:number = 0;
 increment(){
     this.a++;
 }
 decrement(){
    if(this.a>0){
     this.a--;
    }
 }
 reset(){
     this.a = 0;
 }
}