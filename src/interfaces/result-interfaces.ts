import { ApexOptions } from "apexcharts";

export interface series {
  name?: string;
  data: Array<number>;
}

export interface optionsResponsiveObject {
  chart: {
    width: string;
    height: string;
    type: string;
    foreColor: string;
  };
}

export interface responsive {
  breakpoint: number;
  options: optionsResponsiveObject;
}

export interface Ichart {
  series: Array<series>;
  options: ApexOptions;
}
