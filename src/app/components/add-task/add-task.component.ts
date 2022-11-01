import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Subscription} from 'rxjs';
import { UiServiceService } from 'src/app/service/ui.service.service';
import {Task} from '../../Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  id:number=0;
  text:string="";
  day: string="";
  reminder:boolean=false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private uiServiceService: UiServiceService
  ) {
    this.subscription = this.uiServiceService.onToggle().subscribe(value=>this.showAddTask=value)//Con esto al clickear el boton cambiar de estado de true a false y vicebersa
    
   }

  ngOnInit(): void {
  }
  onSubmit(){
    
    if(this.text.length === 0){
      alert("Please add a task!");
      return
    }
    const {id,text,day,reminder} = this
    const newTask = {id,text,day,reminder}



    this.onAddTask.emit(newTask);  
  }

}
