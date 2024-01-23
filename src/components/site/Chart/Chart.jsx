import React, { useState } from 'react';
import styles from './Chart.module.scss';
import ReactApexChart from 'react-apexcharts';
import GridLayout from 'react-grid-layout';

const Chart = () => {
  const [opt, setOpt] = useState({
    series: [
      {
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        redrawOnParentResize: true,
        height: 250,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    },
  });

  const [opt2, setOpt2] = useState({
    series: [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: { redrawOnParentResize: true, height: 250, type: 'area' },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z'],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  const [opt3, setOpt3] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: { redrawOnParentResize: true, type: 'bar', height: 250 },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    },
  });

  const [opt4, setOpt4] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 1 },
    { i: 'b', x: 2, y: 0, w: 1, h: 1 },
    { i: 'c', x: 3, y: 0, w: 1, h: 1 },
    { i: 'd', x: 4, y: 0, w: 1, h: 1 },
  ];
  return (
    <>
      <GridLayout className="layout" layout={layout} cols={2} rowHeight={300} width={750}>
        <div style={{ padding: '10px' }} key="a">
          <ReactApexChart options={opt.options} series={opt.series} type="line" height={250} width={400} />
        </div>
        <div style={{ padding: '10px' }} key="b">
          <ReactApexChart options={opt2.options} series={opt2.series} type="area" height={250} width={400} />
        </div>
        <div style={{ padding: '10px' }} key="c">
          <ReactApexChart options={opt3.options} series={opt3.series} type="bar" height={250} width={400} />
        </div>
        <div style={{ padding: '10px' }} key="d">
          <ReactApexChart options={opt4.options} series={opt4.series} type="pie" width={400} height={250} />
        </div>
      </GridLayout>
    </>
  );
};

export default Chart;
