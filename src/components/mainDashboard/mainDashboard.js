import React, { useEffect, useState } from 'react';
import LineChart from '../LineChartComponent/LineChart';
import StackedBarChart from '../StackedBarChartComponent/StackedBarChart';

const MainDashboard = () => {
	const [stackBarChartData, setStackBarChartData] = useState([]);

	useEffect(() => {
		regenerateData();
	  }, []);
	
	function regenerateData() {
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

	return (
		<div>
			{/* <div>
				<LineChart data={data}/>
			</div> */}
			<div>
				<StackedBarChart stackBarChartData={stackBarChartData}/>
			</div>
		</div>
	)
}

export default MainDashboard;