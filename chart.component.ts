import { Component } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent {
  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep1', 7],
      ['Sleep2', 7],
      ['Sleep3', 7],
      ['Sleep4', 7],
      ['Sleep5', 7]
    ],
    //firstRowIsData: true,
    options: {
      title: 'Tasks',
      colors: this.generateChartColors(9)
    },
  };
  private generateChartColors(count: number): string[] {
    const colors: string[] = ['red', 'green', 'blue', 'yellow', 'purple'];
    const generatedColors: string[] = [];
  
    for (let i = 0; i < count; i++) {
      const colorIndex = i % colors.length;
      generatedColors.push(colors[colorIndex]);
    }
  
    return generatedColors;
  }
}
  
  
  
  
  
  
