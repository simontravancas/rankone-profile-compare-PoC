// @ts-nocheck

import React, { Component } from 'react';

import RadarChartPropsI from './interfaces/RadarChartPropsI';

import TargetHighestStrategy from '../../services/profileComparisonLabelResolverStrategy/TargetHighestStrategy';
import ProfileComparisonLabelResolver from '../../services/profileComparisonLabelResolverStrategy/ProfileComparisonLabelResolver';

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export default class RadarChart_chart_js extends React.Component <RadarChartPropsI> {
    
    state={
        chartCreated: false
    }

    truncateInteger(input: any) {
        return JSON.stringify(parseInt(input))
    }

    tryToCreateChart() {
        let ctx;
        try {
            ctx = document.getElementById(this.getChartId()).getContext('2d');
        } catch (e) {
            //silence error
        }
        if (!this.props.primaryDataSet) {
            return
        }
        if (this.state.chartCreated) {
            return
        }
        // This creates a race condition. It is not ready for production, should be fixed
        this.setState({
            chartCreated: true
        })

        let {labels, mainValues, selfValues} = this.getLabelsAndValues()
        const chart = new Chart(ctx, {
            type: "radar",
            data: {
                labels: labels,
                datasets: [{
                    label: this.props.mainName,
                    data: mainValues,
                    fill: true,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointBackgroundColor: 'rgb(255, 99, 132)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(255, 99, 132)'
                },
                {
                    label: this.props.selfName,
                    data: selfValues,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgb(54, 162, 235)',
                    pointBackgroundColor: 'rgb(54, 162, 235)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgb(54, 162, 235)'
                }]
            },
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                // responsive: true,
                // backgroundColor: "rgba(0,0,0,1)",

                scales: {
                    myScale: {
                        axis: 'r',
                        min: 0,
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 16
                            }
                        }
                    }
                }
            }
        })
    }

    async componentDidMount() {
        // this.tryToCreateChart()
    }

    async componentDidUpdate() {
        this.tryToCreateChart()
    }

    getLabelsAndValues() {
        let targetHighestStrategy: ProfileComparisonLabelResolverStrategy = new TargetHighestStrategy(this.props.secondaryDataSet, this.props.secondaryDataSet)
        let profileComparisonResolver: ProfileComparisonLabelResolver = new ProfileComparisonLabelResolver(targetHighestStrategy)

        return profileComparisonResolver.getLabelsAndValues(this.props.primaryDataSet, this.props.secondaryDataSet, this.props.maxNumberOfFields)
    }

    getChartId() {
        return `Chart ${this.props.name}`
    }

    render() {
        return (
            <div style={{height: "600px", width: "600px", backgroundColor:"white"}}>
                <canvas id={this.getChartId()} />
            </div>
        )
    }
}
