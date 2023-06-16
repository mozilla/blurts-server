/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

 "use client";

 import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions, Chart } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import styles from "./Chart.module.scss"

export type Props = {
  labels: string[];
  data: number[];
  backgroundColors: string[];
  totalExposures: number;
};
export const DoughnutChart = (props: Props) => {
  const sumOfFixedExposures = props.data.reduce((total, num) => total + num, 0);

  // Draw stats in the center of doughnut chart
  const textCenter = {
    id: 'textCenter',
    beforeDatasetsDraw(chart: any) {
      const { ctx } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.save();

      ctx.font = '700 28px / 40px var(--font-metropolis), sans-serif';
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.fillText(`${sumOfFixedExposures}`, xCoor, yCoor);

      ctx.font = '400 14px / 21px var(--font-inter), sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText("fixed", xCoor, yCoor + 20);
    }
  };

  const addPaddingBetweenChartandLegend = {
    id: 'addPaddingBetweenChartandLegend',
    afterInit(chart: any) {
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
         const width = this.width += 200;
         return width;
      }
    }
    
  }

  ChartJS.register(ArcElement, Tooltip, Legend, textCenter);

  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: props.backgroundColors,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'rectRounded'
        },
      },
      [textCenter.id]: textCenter,
      [addPaddingBetweenChartandLegend.id]: addPaddingBetweenChartandLegend,
    },
  };
  
  return (
  <div className={styles.chartContainer}>
    <Doughnut className={styles.doughnutChart} data={data} options={options} />
    <p>This chart shows the total number of exposures that are fixed ({sumOfFixedExposures} out of {props.totalExposures}).</p>
  </div>
  );
};
