// @ts-nocheck

import React, { Component } from "react";
// import { Chart, RadarController } from 'chart.js'

import RadarChartPropsI from "./interfaces/RadarChartPropsI";

import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import TargetHighestStrategy from '../../services/profileComparisonLabelResolverStrategy/TargetHighestStrategy';
import ProfileComparisonLabelResolverStrategy from '../../services/profileComparisonLabelResolverStrategy/ProfileComparisonLabelResolverStrategy';
import ProfileComparisonLabelResolver from '../../services/profileComparisonLabelResolverStrategy/ProfileComparisonLabelResolver';
export default class RadarChart_chart_react_svg_radar_chart extends React.Component<RadarChartPropsI> {
    
    getLabelsAndValues() {
        let targetHighestStrategy: ProfileComparisonLabelResolverStrategy = new TargetHighestStrategy(this.props.secondaryDataSet, this.props.secondaryDataSet)
        let profileComparisonResolver: ProfileComparisonLabelResolver = new ProfileComparisonLabelResolver(targetHighestStrategy)

        return profileComparisonResolver.getLabelsAndValues(this.props.primaryDataSet, this.props.secondaryDataSet, this.props.maxNumberOfFields)
    }
    
    render() {
        let labelsAndValues = this.getLabelsAndValues(this.props.primaryDataSet, this.props.secondaryDataSet, this.props.maxNumberOfFields)
        console.log("AAAAAAA 4", labelsAndValues)
        let data1: any = {}
        let data2: any = {}
        let captions: any = {}
        labelsAndValues.labels.forEach((label, idx) => {
            data1[label] = labelsAndValues.mainValues[idx]/100
            data2[label] = labelsAndValues.selfValues[idx]/100
            captions[label] = label
        })
        if (Object.entries(data1).length === 0) {
            return <RadarChart
                    captions={{}}
                    data={[]}
                    size={550}
                />
        }
        console.log("AAAAAAA 5", data1)
        const data = [
            {
                data: data1,
                meta: { color: "blue" },
            },
            {
                data: data2,
                meta: { color: "red" },
            },
        ];

        const options = {
            dots: true,
            captionMargin: 100,
            captionProps: () => ({
                className: 'caption',
                textAnchor: 'middle',
                fontSize: 30,
                fontFamily: 'sans-serif'
            }),

        }

        return (
            <div
              style={{ height: "600px", width: "600px", backgroundColor: "white" }}
            >
                <RadarChart
                    captions={captions}
                    data={data}
                    size={550}
                    options={options}
                />
            </div>
        );
    }
}
