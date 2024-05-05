import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Storage } from '@ionic/storage-angular';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements AfterViewInit {
  @ViewChild('barCanvas') barCanvas!: ElementRef;
  barChart: any;
  chartType = 'bar';
  dataForChart: number[] = [];
  labels = ["Week(1)", "Week(2)", "Week(3)", "Week(4)", "Week(5)"];
  
  backgroundColor = [
    "rgba(255,255,255,0.2)",
    "rgba(255,220, 55, 0.2)",
    "rgba(55, 25, 15, 0.2)",
    "rgba(255, 255, 255, 0.2)",
    "rgba(15, 220, 55, 0.2)",
    "rgba(55, 25, 15, 0.2)",
    "rgba(25, 255, 55, 0.2)",
    "rgba(155, 123, 33, 0.2)"
  ];

  // Border Bar colors
  borderColor = [
    "rgba(255,220, 55, 0.2)",
    "rgba(55, 25, 15, 0.2)",
    "rgba(255, 255, 255, 0.2)",
    "rgba(15, 220, 55, 0.2)",
    "rgba(55, 25, 15, 0.2)",
    "rgba(25, 255, 55, 0.2)",
    "rgba(155, 123, 33, 0.2)",
    "rgba(55, 25, 15, 0.2)"
  ];

  // Shows the configuration object chartConfig for a chart component
  // Used to define the type of chart, data, and options for the chart.
  chartConfig: any = {
    type: this.chartType,
    data: {
      labels: this.labels,
      datasets: [{
        label: 'Weight',
        data: this.dataForChart,
        backgroundColor: this.backgroundColor,
        borderColor: this.borderColor,
        borderWidth: 2
      }]
    },
    // Sets y-axis scale to begin at zero & suggests maximum value for y-axis based on data in this.dataForChart array.
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax: Math.max(...this.dataForChart) + 5 // Set the maximum value for the y-axis
        }
      }
    }
  };

  // Initializes variable and assigns default to 0.
  newWeight: number = 0;

  constructor(private storage: Storage) {
    this.newWeight = 0;
  }

  // This lifecycle hook is executed after the view has been initialized.
  async ngAfterViewInit() {
    await this.storage.create();
    this.createChart();
  }

  // Initializes and creates a new chart using the Chart.js library
  createChart() {
    const canvas = this.barCanvas.nativeElement;
    const context = canvas.getContext('2d');
    this.barChart = new Chart(context, this.chartConfig);

    this.retrieveChartData();
  }

  // Retrieves chart data from the storage using the storage.get() method. 
  // If the data exists, update component's labels, dataForChart, chartConfig properties 
  // and update chart using barChart.update() method.
  async retrieveChartData() {
    const chartData = await this.storage.get('chartData');
    if (chartData) {  
      this.labels = chartData.labels; // Assigns the labels from chartData to the component's labels property.
      this.dataForChart = chartData.dataForChart; // Assigns the chart data from chartData to the component's dataForChart property.
      this.chartConfig.data.labels = this.labels; 
      this.chartConfig.data.datasets[0].data = this.dataForChart;  // Updates data property of the first dataset in datasets array within chartConfig object with updated dataForChart property from component.
      this.barChart.update();
    }
  }

  // Changes the type of chart being displayed.
  changeChartType(type: string) {
    this.chartType = type;
    this.chartConfig.type = type;
    this.barChart.destroy(); // Needs to be destroyed before creating a new one
    this.createChart();
  }

  // Updates and saves chart data to storage using the storage.set() method.
  async updateChart() {
    this.barChart.update();
    await this.storage.set('chartData', {
      labels: this.labels,
      dataForChart: this.dataForChart
    });
  }
  
  // Adds a new weight entry to chart by updating the following arrays, 
  // updates chart using barChart.update() method, 
  // saves updated chart in storage using storage.set(),
  // logs updated arrays to console and resets input field newWeight.
  async addWeight() {
    if (this.newWeight) {
      const nextWeek = this.labels.length + 1;
      this.labels.push(`Week(${nextWeek})`);
      this.dataForChart.push(this.newWeight);
      this.backgroundColor.push(this.backgroundColor[nextWeek - 1]);
      this.borderColor.push(this.borderColor[nextWeek - 1]);
      this.barChart.update();

      await this.storage.set('chartData', {
        labels: this.labels,
        dataForChart: this.dataForChart
      });

      console.log(this.labels);
      console.log(this.dataForChart);

      this.newWeight = 0; // Reset the input field
    }
  }
}
