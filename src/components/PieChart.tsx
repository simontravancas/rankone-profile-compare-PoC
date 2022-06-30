import React, { Component } from 'react';
import RankOneService from '../services/RankOneService';
import TwitchClient from '../clients/TwitchClient';
import IgdbClient from '../clients/IgdbClient';

interface PieChartProps {
    name: string;
    compareText: string;
    primaryDataSet: any;
    secondaryDataSet: any;
    maxNumberOfFields: number;
}

export default class PieChart extends React.Component <PieChartProps> {
    
    async componentDidMount() {
        
    }

    render() {
        return <div />
    }
}
