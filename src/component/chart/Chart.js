import React, { useEffect, useState } from 'react';

let chart;

const Chart = props => {
  // const [ labels, setLabels ] = useState([]);
  // const [ datas, setDatas ] = useState([]);
  const { data } = props;

  const chartInit = () => {
    var ctx = document.getElementById('chart');

    const labels = data.list.map(item => item.dong);
    const datas = data.list.map(item => item.price.toFixed(0));

    chart = new window.Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: '평당가격 ( 단위 : 만원 ) ',
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
          display: true,
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
          x: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          },
          y: {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }
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
      <canvas id="chart"></canvas>
    </div>
  )
}

export default Chart;