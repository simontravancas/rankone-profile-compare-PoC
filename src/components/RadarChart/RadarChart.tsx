// @ts-nocheck

import React, { Component } from 'react';
// import { Chart, RadarController } from 'chart.js'
import RankOneService from '../services/RankOneService';
import TwitchClient from '../clients/TwitchClient';
import IgdbClient from '../clients/IgdbClient';
import RadarChart_chart_js from './RadarChart_chart_js_impl';
import RadarChart_chart_react_svg_radar_chart from './RadarChart_react_svg_radar_chart_impl';

export enum RadarChartImplementation {
    chart_js,
    react_svg_radar_chart,
}

interface RadarChartProps {
    name: string;
    compareText: string;
    primaryDataSet: any;
    secondaryDataSet: any;
    maxNumberOfFields: number;
    mainName: string;
    selfName: string;
    width: string;
    height: string;
    implementation: RadarChartImplementation;
}

export default class RadarChart extends React.Component <RadarChartProps> {
    render() {
        if (this.props.implementation === RadarChartImplementation.chart_js) {
            return <RadarChart_chart_js
                    name={this.props.name}
                    compareText={this.props.compareText}
                    primaryDataSet={this.props.primaryDataSet}
                    secondaryDataSet={this.props.secondaryDataSet}
                    maxNumberOfFields={this.props.maxNumberOfFields}
                    mainName={this.props.mainName}
                    selfName={this.props.selfName}
                    width={this.props.width}
                    height={this.props.height}
            />
        } else if (this.props.implementation === RadarChartImplementation.react_svg_radar_chart) {
            return <RadarChart_chart_react_svg_radar_chart
                    name={this.props.name}
                    compareText={this.props.compareText}
                    primaryDataSet={this.props.primaryDataSet}
                    secondaryDataSet={this.props.secondaryDataSet}
                    maxNumberOfFields={this.props.maxNumberOfFields}
                    mainName={this.props.mainName}
                    selfName={this.props.selfName}
                    selfName={this.props.selfName}
                    width={this.props.width}
            />
        }
        return <div />
    }
}
