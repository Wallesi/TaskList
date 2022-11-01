import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/service/ui.service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'My Task List';
  showAddTask:boolean = true;
  subscription?: Subscription; //la wea fome rara aca 

  constructor(
    private uiServiceService: UiServiceService
  ) { 
    this.subscription = this.uiServiceService.onToggle().subscribe(value=>this.showAddTask=value)//Con esto al clickear el boton cambiar de estado de true a false y vicebersa
  }

  ngOnInit(): void {
  }

  toggleAddTask(){
    this.uiServiceService.toggleAddTask();
  }
}
