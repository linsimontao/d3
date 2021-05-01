import React from 'react';
import ReactDOM from 'react-dom';
import { scaleBand, scaleLinear, max, format } from 'd3';
import { useData } from './useData';
import {AxisLeft} from './AxisLeft';
import {AxisBottom} from './AxisBottom';
import {Graph} from './Graph';

const width = 960;
const height = 500;
const margin = {
    top: 20,
    right: 30,
    bottom: 40,
    left: 220
}


const App = () => {
    const data = useData();

    if (!data) {
        return <pre>loading</pre>
    }

    const innerHeight = height - margin.top - margin.bottom;
    const innerWidth = width - margin.left - margin.right;
    const xScale = scaleLinear()
        .domain([0, max(data, (d) => d.population)])
        .range([0, innerWidth])

    const yScale = scaleBand()
        .domain(data.map(d => d.Country))
        .range([0, innerHeight])
        .paddingInner(0.15 )

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={format(".2s")} />
                <AxisLeft yScale={yScale} />
                <text x={innerWidth/2} y={innerHeight + 35} textAnchor="middle">Population</text>
                <Graph xScale={xScale} yScale={yScale} data={data} />
            </g>
        </svg>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)