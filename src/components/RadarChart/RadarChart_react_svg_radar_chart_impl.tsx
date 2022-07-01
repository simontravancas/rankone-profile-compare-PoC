// @ts-nocheck

import React, { Component } from 'react';
// import { Chart, RadarController } from 'chart.js'
import RankOneService from '../services/RankOneService';
import TwitchClient from '../clients/TwitchClient';
import IgdbClient from '../clients/IgdbClient';

import RadarChartPropsI from './interfaces/RadarChartPropsI';

export default class RadarChart_chart_react_svg_radar_chart extends React.Component <RadarChartPropsI> {
    render() {
        return (
            <div style={{height: "600px", width: "600px", backgroundColor:"white"}}>
                <h1> react-svg-radar-chart mock </h1>
            </div>
        )
    }
}
