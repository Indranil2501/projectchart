// import React, { useEffect, useRef, useState } from 'react';
// import * as d3 from 'd3';
// import './StackedBarChart.css';

// const StackedBarChart = (props) => {
// 	const d3Chart = useRef();
// 	const [data, setData] = useState();
// 	useEffect(() => {
// 		setData(props.stackBarChartData);
// 		// set the dimensions and margins of the graph
// 		const margin = {top: 20, right: 30, bottom: 30, left: 30}
// 		const width = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
// 		const height = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom

// 		// append the svg object to the body of the page
// 		var svg = d3.select(d3Chart.current)
// 			.append("svg")
// 			.attr("width", width + margin.left + margin.right)
// 			.attr("height", height + margin.top + margin.bottom)
// 			.append("g")
// 			.attr("transform",
// 				"translate(" + margin.left + "," + margin.top + ")");

// 		// List of subgroups = header of the csv files = soil condition here
// 		var subgroups = data.columns?.slice(1)

// 		// List of groups = species here = value of the first column called group -> I show them on the X axis
// 		var groups = d3.map(data, function (d) { return (d.group) }).keys()

// 		// Add X axis
// 		var x = d3.scaleBand()
// 			.domain(groups)
// 			.range([0, width])
// 			.padding([0.2])
// 		svg.append("g")
// 			.attr("transform", "translate(0," + height + ")")
// 			.call(d3.axisBottom(x).tickSizeOuter(0));

// 		// Add Y axis
// 		var y = d3.scaleLinear()
// 			.domain([0, 60])
// 			.range([height, 0]);
// 		svg.append("g")
// 			.call(d3.axisLeft(y));

// 		// color palette = one color per subgroup
// 		var color = d3.scaleOrdinal()
// 			.domain(subgroups)
// 			.range(['#e41a1c', '#377eb8', '#4daf4a'])

// 		// stack the data? --> stack per subgroup
// 		var stackedData = d3.stack()
// 			.keys(subgroups)
// 			(data)

// 		// Show the bars
// 		svg.append("g")
// 			.selectAll("g")
// 			// Enter in the stack data = loop key per key = group per group
// 			.data(stackedData)
// 			.enter().append("g")
// 			.attr("fill", function (d) { return color(d.key); })
// 			.selectAll("rect")
// 			// enter a second time = loop subgroup per subgroup to add all rectangles
// 			.data(function (d) { return d; })
// 			.enter().append("rect")
// 			.attr("x", function (d) { return x(d.data.group); })
// 			.attr("y", function (d) { return y(d[1]); })
// 			.attr("height", function (d) {
// 				return y(d[0]) - y(d[1]);
// 			})
// 	}, [])

// 	return (
// 		<div id="d3demo">
// 			<svg ref={d3Chart}></svg>
// 		</div>
// 	)
// }
// export default StackedBarChart;