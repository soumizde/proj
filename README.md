```
import React from 'react';
import { Chart as ChartJS, GeoFeature, ChoroplethController } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import 'chartjs-chart-geo';
import usGeoJson from './usGeoJson';

ChartJS.register(GeoFeature, ChoroplethController);

const StatewiseHeatmap = () => {
  const data = [
    { id: '01', state: 'Alabama', value: 150 },
    { id: '02', state: 'Alaska', value: 50 },
    { id: '04', state: 'Arizona', value: 300 },
    // Add data for all other states
  ];

  const chartData = {
    labels: data.map(d => d.state),
    datasets: [{
      label: 'Number of Products Bought',
      data: data.map(d => ({
        feature: usGeoJson.features.find(f => f.id === d.id),
        value: d.value
      })),
      backgroundColor: (context) => {
        const value = context.dataset.data[context.dataIndex].value;
        return value > 200 ? '#08519c' :
               value > 100 ? '#3182bd' :
               value > 50 ? '#6baed6' :
               value > 10 ? '#bdd7e7' :
                            '#eff3ff';
      }
    }]
  };

  const options = {
    showOutline: true,
    showGraticule: false,
    geo: {
      colorScale: {
        display: true,
        position: 'bottom',
        quantize: 5,
        colors: ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c']
      }
    },
    scales: {
      xy: {
        projection: 'albersUsa'
      }
    }
  };

  return (
    <div>
      <h2>Statewise Product Analytics</h2>
      <Chart type='choropleth' data={chartData} options={options} />
    </div>
  );
};

export default StatewiseHeatmap;

```
