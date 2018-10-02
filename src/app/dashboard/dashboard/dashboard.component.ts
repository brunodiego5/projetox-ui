import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pieChartData: any;
  lineChartData = {
    labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    datasets: [
      {
        label: 'Receitas',
        data: [4, 10, 18, 5, 1, 20, 3],
        borderColor: '#3366CC'
      }, {
        label: 'Despesas',
        data: [10, 15, 8, 5, 1, 7, 9],
        borderColor: '#D62B00'
      }
    ]
  };

  constructor(private dashboradService: DashboardService) {
    this.dashboradService.lancamentosPorCategoria()
      .subscribe(
        dados => {
      this.pieChartData = {
        // labels: dados.,
        datasets: [
          {
            data: [2500, 2700, 550, 235],
            backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC']
          }
        ]
      };
    });
  }

  ngOnInit() {

  }

}
