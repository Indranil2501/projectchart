import React from 'react';
import LineChart from '../LineChartComponent/LineChart';
import './LineChart.css';

const MainDashboard = () => {
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
		<>
			<LineChart />
		</>
	)
}

export default MainDashboard;