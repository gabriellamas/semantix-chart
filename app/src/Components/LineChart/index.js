import React, {useEffect} from 'react';
import Chart from 'chart.js'

const LineChart = () => {
  const chartRefLine = React.createRef();

    useEffect(()=>{

        fetch('https://private-afe609-testefront.apiary-mock.com/time-data', { 
            method: 'get'
          })
          .then(function(response){
            response.json().then(function(data){
              console.log('chart line', data);

              const Hours = Object.entries(data)[0][1].map(element => element.label)
              const positionsLineOne = Object.entries(data)[0][1].map(element => element.value)
              const positionsLineTwo = Object.entries(data)[1][1].map(element => element.value)

              
              // Line
              const ctxLine = chartRefLine.current.getContext('2d');
              const myChartLine = new Chart(ctxLine, {
                type: 'line',
                data: {
                    labels: Hours,
                    datasets: [{
                        data: positionsLineOne,
                        label: 'Today',
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: '#303F9F'
                    }, {
                        data: positionsLineTwo,
                        label: 'Yesterday',
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: '#BF3FFF'
                    }
                  ]
                }
              });
              
              });
            })
          .catch(function(err){ 
            console.error('Failed retrieving information', err);
          });
    

    })
  
  return (
    <div className="card">
        <h3>LINE CHART 2 DATA</h3>
        <canvas id="myChartLine" width="800px" height="400" ref={chartRefLine}></canvas>
    </div>
  );
}

export default LineChart;
