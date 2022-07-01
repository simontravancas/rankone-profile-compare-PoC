// @ts-nocheck

import React, { Component } from "react";
// import { Chart, RadarController } from 'chart.js'

import RadarChartPropsI from "./interfaces/RadarChartPropsI";

import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

export default class RadarChart_chart_react_svg_radar_chart extends React.Component<RadarChartPropsI> {
    
    getDataAndCaptions() {
        // let
    }
    
    render() {
        const data = [
            {
                data: {
                    battery: 0.7,
                    design: 0.8,
                    useful: 0.9,
                    speed: 0.67,
                    weight: 0.8,
                },
                meta: { color: "blue" },
            },
            {
                data: {
                    battery: 0.6,
                    design: 0.85,
                    useful: 0.5,
                    speed: 0.6,
                    weight: 0.7,
                },
                meta: { color: "red" },
            },
        ];

        const captions = {
            // columns
            battery: "Battery Capacity",
            design: "Design",
            useful: "Usefulness",
            speed: "Speed",
            weight: "Weight",
        };

        const options = {
            dots: true
        }

        return (
            <div
              style={{ height: "600px", width: "600px", backgroundColor: "white" }}
            >
                <RadarChart
                    captions={captions}
                    data={data}
                    size={600}
                    options={options}
                />
            </div>
        );
    }
}
