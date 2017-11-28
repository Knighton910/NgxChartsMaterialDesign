import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  single: any[] = [
    {
      "name": "Germany",
      "value": 1409050
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 6200000
    },
    {
      "name": "Denmark",
      "value": 3747473
    }
  ];
  multi: any[] =[
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#aae3f5', '#7A7A7A', '#7aa3e5', '#329999', '#AAAAAA']
  };

  onSelect(event) {
    console.log(event);
  }
}
