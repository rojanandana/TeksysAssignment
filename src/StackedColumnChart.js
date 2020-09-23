import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StackedColumnChart extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e) {
		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Timeline Details",
				fontFamily: "verdana"
			},
			axisY: {
				title: "No of Occurences",
				suffix: "k",
				includeZero: true,
						},
			toolTip: {
		    		shared: true,
				reversed: true,
			},
			legend: {
				verticalAlign: "center",
				horizontalAlign: "right",
				reversed: true,
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [
				{
					type: "stackedColumn",
					name: "Compromised Users",
					showInLegend: true,
					yValueFormatString: "#,###k",			
					dataPoints: [
						{ label: "12/1", y: 3 },
						{ label: "12/2", y: 4 },
						{ label: "12/3", y: 6},
						{ label: "12/4", y: 2 },
						{ label: "12/5", y: 3 },
						{ label: "12/6", y: 3.5 },
						{ label: "12/4", y: 3.5 },
						{ label: "12/5", y: 3 },
						{ label: "12/6", y: 2.5 },
						{ label: "12/6", y: 0 },

					]
				},
				{
					type: "stackedColumn",
					name: "Compromised Endpoints",
					showInLegend: true,
					yValueFormatString: "#,###k",
					dataPoints: [
						{ label: "12/1", y: 14 },
						{ label: "12/2", y: 8 },
						{ label: "12/3", y: 6 },
						{ label: "12/4", y: 6 },
						{ label: "12/5", y: 5 },
						{ label: "12/6", y: 5 },
						{ label: "12/4", y: 6 },
						{ label: "12/5", y: 3 },
						{ label: "12/6", y: 9 },
						{ label: "12/6", y: 5 }
					]
				},
				{
					type: "stackedColumn",
					name: "Insider Threats",
					showInLegend: true,
					yValueFormatString: "#,###k",
					dataPoints: [
						{ label: "12/1", y: 14 },
						{ label: "12/2", y: 8 },
						{ label: "12/3", y: 6 },
						{ label: "12/4", y: 6 },
						{ label: "12/5", y: 5 },
						{ label: "12/6", y: 5 },
						{ label: "12/4", y: 6 },
						{ label: "12/5", y: 3 },
						{ label: "12/6", y: 9 },
						{ label: "12/6", y: 5 }
					]
				},
			
				{
					type: "stackedColumn",
					name: "Data Exfiltration",
					showInLegend: true,
					yValueFormatString: "#,###k",
					dataPoints: [
						{ label: "12/1", y: 14 },
						{ label: "12/2", y: 8 },
						{ label: "12/3", y: 6 },
						{ label: "12/4", y: 6 },
						{ label: "12/5", y: 5 },
						{ label: "12/6", y: 5 },
						{ label: "12/4", y: 6 },
						{ label: "12/5", y: 3 },
						{ label: "12/6", y: 9 },
						{ label: "12/6", y: 2 }
			
					]
				}]
		}

		return (
			<div>

				<CanvasJSChart options={options}
					onRef={ref => this.chart = ref}
				/>
							</div>
		);
	}
}

export default StackedColumnChart;