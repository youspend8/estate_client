import React, { useEffect, useState } from 'react';

let chart;

// const id = `chart-${(Math.random() * 1000000000).toFixed(0)}`;
const id = `chart-line`;

const LineChart = props => {
  const { data } = props;

  const chartInit = () => {
    const ctx = document.getElementById(id);

    const labels = data.list.map(item => Object.entries(item)[0][0]);
    const datas = data.list.map(item => Object.entries(item)[0][1]);

    chart = new window.Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: '거래량 ( 단위 : 건 ) ',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: datas,
          fill: false,
        }, 
        // {
        // 	label: 'My Second dataset',
        // 	fill: false,
        // 	backgroundColor: 'rgb(54, 162, 235)',
        // 	borderColor: 'rgb(54, 162, 235)',
        // 	data: [
        // 		1,2,3,4,5,6,7
        // 	],
        // }
      ]
      },
      options: {
        responsive: true,
        title: {
          display: false,
          text: '지역별 평당가격'
        },
        legend: {
          position: 'bottom'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
            },
            ticks: {
              beginAtZero: true,
            }
          }]
        }
      }
    });
  }

  useEffect(() => {
    if (data.list != null && data.list.length != 0) {
      if (chart != null) {
        chart.destroy();
      }
      chartInit();
      chart.resize();
    }
  }, [ data ])

  return (
    <div style={{width: '100%'}}>
      <canvas id={id}></canvas>
    </div>
  )
}

export default LineChart;