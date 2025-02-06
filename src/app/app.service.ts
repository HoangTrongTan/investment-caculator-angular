import { Injectable } from '@angular/core';
import { type TInvestment } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private annualData: TInvestment[] = [];
  getData(): TInvestment[] {
    return this.annualData;
  }
  calculateInvestmentResults(
    initialInvestment: number,
    expectedReturn: number,
    annualInvestment: number,
    duration: number
  ) {
    let investmentValue = initialInvestment;
    const annualData_tmp: TInvestment[] = [];
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData_tmp.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.annualData = annualData_tmp;
  }
}
