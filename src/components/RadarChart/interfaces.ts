export interface series {
    name: string;
    data: Array<number>;
  }

  interface optionsResponsiveObject {
    chart: {
      width: string;
      height: string;
      type: string;
      foreColor: string;
    };
  }

 export  interface responsive {
    breakpoint: number;
    options: optionsResponsiveObject;
  }

 export interface Ichart {
    series: Array<series>;
    options: {
      chart: {
        height: number;
        type: string;
        foreColor: string;
      };
      title: {
        text: string;
      };
      xaxis: {
        categories: Array<string>;
        labels: {
          show: boolean;
          style: {
            colors: Array<string>;
            fontSize?: string;
            fontFamily?: string;
          };
        };
      };
      responsive: Array<responsive>;
      colors: Array<string>;
      dataLabels: {
        style: {};
      };
      theme: {
        mode: string;
        palette: string;
        monochrome: {
          enabled: boolean;
          color: string;
          shadeTo: string;
          shadeIntensity: number;
        };
      };
    };
  }