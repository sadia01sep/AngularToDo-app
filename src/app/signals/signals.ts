import { Component, computed, effect, signal, WritableSignal, Signal} from '@angular/core';
interface Studentinterface {
id:number;
name:string;
subject:string
}
@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css'
})
export class Signals {
  userList = ['Ron','john','harry','luna','lixa'];
//userList = []
  EffectSignal = signal('lixa')
  constructor(){
    effect(()=>{
if(this.count()==2){
  this.displayHeading.set(true)
  setTimeout(()=>{
    this.displayHeading.set(false)
  },2000)
}
else{
  this.displayHeading.set(false)
}
    }
    )
  }
count = signal(0)
  displayHeading = signal(true)
  Toggle(){
    this.count.set(this.count()+1)
  }
  /*------------------------------------------------------------------------*/
  id=signal<number>(0);
  name = signal<string>('');
  subject = signal<string>('')
studentsList: WritableSignal<Studentinterface[]>= signal<Studentinterface[]>([]);
  addName(event:Event){
    const input = event.target as HTMLInputElement;
     this.name.set(input.value)
  }
   addRoll(event:Event){
        const input = event.target as HTMLInputElement;
    this.id.set(Number(input.value))
  }
   addSubject(event:Event){
   const input = event.target as HTMLInputElement;
    this.subject.set(input.value)
  }
  addStudent(id:number,name:string,subject:string){
    const newStudent : Studentinterface={
id:this.id(),
name:this.name(),
subject:this.subject()

    }
  this.studentsList.set([...this.studentsList(),newStudent])
   // Reset fields (optional)
  this.id.set(Number())
  this.name.set('')
  this.subject.set('')
  }
  DeleteStudent(id:number){
const updatedList=this.studentsList().filter(student=>
  student.id!==id
)
this.studentsList.set(updatedList)
  }
}