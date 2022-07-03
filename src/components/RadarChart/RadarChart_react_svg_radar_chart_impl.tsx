// @ts-nocheck

import React, { Component } from 'react'
// import { Chart, RadarController } from 'chart.js'

import RadarChartPropsI from './interfaces/RadarChartPropsI'

import RadarChart from 'react-svg-radar-chart'
import 'react-svg-radar-chart/build/css/index.css'
import TargetHighestStrategy from '../../services/profileComparisonLabelResolverStrategy/TargetHighestStrategy'
import ProfileComparisonLabelResolverStrategy from '../../services/profileComparisonLabelResolverStrategy/ProfileComparisonLabelResolverStrategy'
import ProfileComparisonLabelResolver from '../../services/profileComparisonLabelResolverStrategy/ProfileComparisonLabelResolver'
export default class RadarChart_chart_react_svg_radar_chart extends React.Component<RadarChartPropsI> {
  getLabelsAndValues() {
    const targetHighestStrategy: ProfileComparisonLabelResolverStrategy =
      new TargetHighestStrategy(
        this.props.secondaryDataSet,
        this.props.secondaryDataSet
      )
    const profileComparisonResolver: ProfileComparisonLabelResolver =
      new ProfileComparisonLabelResolver(targetHighestStrategy)

    return profileComparisonResolver.getLabelsAndValues(
      this.props.primaryDataSet,
      this.props.secondaryDataSet,
      this.props.maxNumberOfFields
    )
  }

  render() {
    const labelsAndValues = this.getLabelsAndValues(
      this.props.primaryDataSet,
      this.props.secondaryDataSet,
      this.props.maxNumberOfFields
    )
    const data1: any = {}
    const data2: any = {}
    const captions: any = {}
    // TODO: It is not good to assume that this is always true, this just works for one strategy. but for now that will do
    const maxValue: number = labelsAndValues.mainValues[0]
    const multiplicationConstant = 1 / (maxValue / 100)

    labelsAndValues.labels.forEach((label, idx) => {
      data1[label] =
        (labelsAndValues.mainValues[idx] / 100) * multiplicationConstant
      data2[label] =
        (labelsAndValues.selfValues[idx] / 100) * multiplicationConstant
      captions[label] = label
    })

    console.log('AAAAAA 5', data1, data2)

    if (Object.entries(data1).length === 0) {
      return <RadarChart captions={{}} data={[]} size={550} />
    }
    const data = [
      {
        data: data1,
        meta: { color: 'blue' }
      },
      {
        data: data2,
        meta: { color: 'red' }
      }
    ]

    const options = {
      dots: true,
      captionMargin: 100,
      captionProps: () => ({
        className: 'caption',
        textAnchor: 'middle',
        fontSize: 30,
        fontFamily: 'sans-serif'
      }),
      scales: 4
    }

    return (
      <div
        style={{ height: '600px', width: '600px', backgroundColor: 'white' }}
      >
        <RadarChart
          captions={captions}
          data={data}
          size={550}
          options={options}
        />
      </div>
    )
  }
}
