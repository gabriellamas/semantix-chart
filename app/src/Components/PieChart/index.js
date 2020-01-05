import React, {useState ,useEffect} from 'react';
import Chart from 'chart.js'

const PieChart = () => {
  const chartRefPie = React.createRef();
  
  useEffect(()=>{

    fetch('https://private-afe609-testefront.apiary-mock.com/anual-percentage', { method: 'get' })
    .then(function(response){
      response.json().then(function(data){
        constructChart(data)

        });
      })
    .catch(function(err){ 
      console.error('Failed retrieving information', err);
    });


  },[])


  const constructChart = (data)=>{

    const Months = data.map((element) => element.label)
    const Values = data.map((element) => element.value)

    // Bar
    const ctxPie = chartRefPie.current.getContext('2d');
    const myChartPie = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: Months,
        datasets: [{
            label: 'Algum valor',
            data: Values,
            backgroundColor: ['#DBECF8','#2C82BE','#32B88B']
        }]
    },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
        }
    });
  }
  
  return (
    <div className="card">
        <h3>PIE CHART</h3>
        <canvas id="myChartPie" width="400" height="400" ref={chartRefPie}></canvas>
    </div>
  );
}

export default PieChart;
