import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  private appService = inject(AppService);

  get CaculatedResultOfInvestment(){
    return this.appService.getData();
  }
}
