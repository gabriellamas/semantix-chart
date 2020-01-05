import React, {useEffect} from 'react';
import Chart from 'chart.js'

const BarsChart = () => {
  const chartRefBar = React.createRef();
  
  useEffect(()=>{

    fetch('https://private-afe609-testefront.apiary-mock.com/anual-result', { method: 'get' })
    .then(function(response){
      response.json().then(function(data){
        constructChart(data)

        });
      })
    .catch(function(err){ 
      console.error('Failed retrieving information', err);
    });

    const constructChart = (data)=>{
      const Months = data.map((element) => element.label)
      const Values = data.map((element) => element.value)
      const Colors = data.map((element) => '#03A9F4');

      // Bar
      const ctxBar = chartRefBar.current.getContext('2d');
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
    }


  },[])
  
  return (
    <div className="card m-right-55">
        <h3>BARS CHART</h3>
        <canvas id="myChartBar" width="400" height="400" ref={chartRefBar}></canvas>
    </div>
  );
}

export default BarsChart;
