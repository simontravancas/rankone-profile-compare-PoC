import React, { Component } from 'react';
import RankOneService from '../services/RankOneService';
import TwitchClient from '../clients/TwitchClient';
import IgdbClient from '../clients/IgdbClient';

export default class PieChart extends React.Component {
    
    async componentDidMount() {
        const pastPlayed = await RankOneService.getPastPlayedGames()
        let gameInfo = await IgdbClient.getGameInfo("11208")
        console.log("pastPlayed", pastPlayed)
        console.log("gameInfo", gameInfo)
    }

    render() {
        return <div />
    }
}
