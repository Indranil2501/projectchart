import React, { useEffect, useState } from 'react';
import LineChart from '../LineChart/LineChart';
//import StackedBarChart from '../StackedBarChart/StackedBarChart';

const MainDashboard = () => {
	const [stackBarChartData, setStackBarChartData] = useState([]);
	const [lineChartData, setLineChartData] = useState([]);

	useEffect(() => {
		generateStackBarChartData();
		generateLineChartData();
	  }, []);
	
	function generateStackBarChartData() {
		const chartData = [];
		const group = ["Apple", "Banana", "Orange", "Lychee"];
		for (let i = 0; i < 4; i++) {
			const value = Math.floor(Math.random() * i + 3);
			chartData.push({
				group: group[i],
				USA: (Math.random() * i).toString(),
				India: (Math.random() * i).toString(),
				Australia: (Math.random() * i).toString()
			});
		}
		setStackBarChartData(chartData);
	}

	function generateLineChartData() {
		const chartData = [];
		const group = ["Apple", "Banana", "Orange", "Lychee"];
		for (let i = 0; i < 10; i++) {
			const value = Math.floor(Math.random() * i + 3);
			chartData.push({
				date: new Date(new Date() - Math.random()*(1e+12)),
				count: Math.floor(Math.random() * i + 3)
			});
		}
		setLineChartData(chartData);
	}

	return (
		<div>
			<div>
				<LineChart/>
			</div>
			{/* <div>
				<StackedBarChart stackBarChartData={stackBarChartData}/>
			</div> */}
		</div>
	)
}

export default MainDashboard;