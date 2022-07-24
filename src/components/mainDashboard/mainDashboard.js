import React, { useEffect, useState } from 'react';
import LineChart from '../LineChartComponent/LineChart';
import StackedBarChart from '../StackedBarChartComponent/StackedBarChart';

const MainDashboard = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		regenerateData();
	  }, []);
	
	function regenerateData() {
		const chartData = [];
		for (let i = 0; i < 20; i++) {
			const value = Math.floor(Math.random() * i + 3);
			chartData.push({
			label: i,
			value,
			tooltipContent: `<b>x: </b>${i}<br><b>y: </b>${value}`
			});
		}
		setData(chartData);
	}

	return (
		<div>
			{/* <div>
				<LineChart data={data}/>
			</div> */}
			<div>
				<StackedBarChart/>
			</div>
		</div>
	)
}

export default MainDashboard;