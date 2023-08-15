import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-six-years',
  templateUrl: './recent-six-years.component.html',
  styleUrls: ['./recent-six-years.component.less'],
})
export class RecentSixYearsComponent implements OnInit {
  dates: string[] = [];

  constructor() {}

  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 6; i++) {
      const year = currentYear - i;
      const isLeapYear =
        (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      const lastDayOfMonth = isLeapYear ? '29' : '28';
      this.dates.push(`${year}-2-${lastDayOfMonth}`);
    }
  }
}
