import React, {useEffect} from 'react';
import Chart from 'chart.js'

const BarsChart = () => {

  useEffect(()=>{

    fetch('https://private-afe609-testefront.apiary-mock.com/anual-result', { method: 'get' })
    .then(function(response){
      response.json().then(function(data){
        console.log('chart Bar', data);

        const Months = data.map((element) => element.label)
        const Values = data.map((element) => element.value)
        const Colors = data.map((element) => '#03A9F4');

        // Bar
        const ctxBar = document.getElementById('myChartBar').getContext('2d');
        const myChartBar = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: Months,
            datasets: [{
                label: 'Algum valor',
                data: Values,
                backgroundColor: Colors
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

        });
      })
    .catch(function(err){ 
      console.error('Failed retrieving information', err);
    });


  },[])
  
  return (
    <div className="card m-right-55">
        <h3>BARS CHART</h3>
        <canvas id="myChartBar" width="400" height="400"></canvas>
    </div>
  );
}

export default BarsChart;
