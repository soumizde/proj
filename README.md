```
import React from 'react';
import { Choropleth } from 'react-chartjs-2';
import { Chart as ChartJS, ChoroplethController, GeoFeature } from 'chartjs-chart-geo';
import 'chartjs-chart-geo/build/Chart.Geo.min.js';
import usGeoJson from './usGeoJson'; // Assuming you have the US GeoJSON file

ChartJS.register(ChoroplethController, GeoFeature);

const StatewiseHeatmap = () => {
    // Hardcoded data for the number of products bought in each state
    const data = [
        { id: '01', state: 'Alabama', value: 150 },
        { id: '02', state: 'Alaska', value: 50 },
        { id: '04', state: 'Arizona', value: 300 },
        { id: '05', state: 'Arkansas', value: 100 },
        // Add all other states here
        { id: '48', state: 'Texas', value: 500 },
        { id: '49', state: 'Utah', value: 200 },
        { id: '50', state: 'Vermont', value: 80 },
        { id: '51', state: 'Virginia', value: 250 },
        { id: '53', state: 'Washington', value: 400 },
        { id: '54', state: 'West Virginia', value: 60 },
        { id: '55', state: 'Wisconsin', value: 350 },
        { id: '56', state: 'Wyoming', value: 40 }
    ];

    // Preparing the data for the heatmap
    const chartData = {
        labels: data.map(d => d.state),
        datasets: [{
            label: 'Number of Products Bought',
            data: data.map(d => ({ feature: usGeoJson.features.find(f => f.id === d.id), value: d.value }))
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
            <Choropleth data={chartData} options={options} />
        </div>
    );
};

export default StatewiseHeatmap;



```
