import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './LineChart.css';

const LineChart = (props) => {

	const d3Chart = useRef()

	useEffect(() => {

		//Clear existing svg data
		d3.select(d3Chart.current).selectAll('*').remove();

		//Set design
		const margin = { top: 20, right: 30, bottom: 30, left: 30 }
		const width = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
		const height = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom

		//Set svg
		const svg = d3.select(d3Chart.current)
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		// x axis 
		const xScale = d3.scaleTime()
			.domain(d3.extent(props.lineChartData, function (d) { return d.date }))
			.range([0, width])

		let xAxis = d3.axisBottom(xScale)
			.tickSize(-height);

		svg.append('g')
			.attr("class", "x-axis")
			.attr('transform', 'translate(0,' + height + ')')
			.call(xAxis)

		// Get the max value of counts
		const max = d3.max(props.lineChartData, function (d) { return d.count })

		// y axis 
		const yScale = d3.scaleLinear()
			.domain([0, max])
			.range([height, 0]);

		let yAxis = d3.axisLeft(yScale)
			.tickSize(-width);

		svg.append('g')
			.attr('class', 'y-axis')
			.call(yAxis);

		// Draw line
		svg.append('path')
			.datum(props.lineChartData)
			.attr('fill', 'none')
			.attr('stroke', '#FFAA48')
			.attr('stroke-width', 3)
			.attr('d', d3.line()
				.x(function (d) { return xScale(d.date) })
				.y(function (d) { return yScale(d.count) })
			)

		//Set points
		svg.append("g")
			.selectAll("dot")
			.data(props.lineChartData)
			.join("circle")
			.attr("cx", d => xScale(d.date))
			.attr("cy", d => yScale(d.count))
			.attr("r", 5)
			.attr("fill", "#FF6060");

		// Add title 
		svg.append('text')
			.attr('x', (width / 2))
			.attr('y', (margin.top / 3 - 10))
			.attr('text-anchor', 'middle')
			.attr('font-size', '16px')
			.attr('fill', '#49BFFF')
			.text('Line Chart')

	}, [props.lineChartData])

	return (
		<div id='d3demo'>
			<svg ref={d3Chart}></svg>
		</div>
	)
}

export default LineChart;