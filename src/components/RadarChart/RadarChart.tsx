// @ts-nocheck

import React, { Component } from 'react';
// import { Chart, RadarController } from 'chart.js'
import RankOneService from '../services/RankOneService';
import TwitchClient from '../clients/TwitchClient';
import IgdbClient from '../clients/IgdbClient';
import RadarChart_chart_js from './RadarChart_chart_js_impl';

export enum RadarChartImplementation {
    chart_js
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
        }
        return <div />
    }
}
