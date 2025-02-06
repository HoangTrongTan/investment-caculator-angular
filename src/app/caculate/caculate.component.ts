import { Component, inject } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-caculate',
  templateUrl: './caculate.component.html',
  styleUrl: './caculate.component.css',
})
export class CaculateComponent {
  initialInvestment: number = 0;
  expectedReturn: number = 0;
  annualInvestment: number = 0;
  duration: number = 0;

  private appService = inject(AppService);

  onCaculatorInvestment() {
    console.log("vào vcaof ");
    
    this.appService.calculateInvestmentResults(
      this.initialInvestment,
      this.expectedReturn,
      this.annualInvestment,
      this.duration
    );
  }
}
