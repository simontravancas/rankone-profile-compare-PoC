import React, { Component } from 'react';
import RankOneService from '../services/RankOneService';
import TwitchClient from '../clients/TwitchClient';
import IgdbClient from '../clients/IgdbClient';

export default class PieChart extends React.Component {
    
    async componentDidMount() {
        const pastPlayed = await RankOneService.getPastPlayedGames()
        //let gameInfo = await IgdbClient.getGameInfo("11208")
        console.log("pastPlayed", pastPlayed)
        // cast to string
        let igdbIdArray = pastPlayed.map((e: any) => '' + e?.gameData?.igdbId)
        console.log("igdbIdArray", igdbIdArray)
        let gamesInfo = await IgdbClient.getGamesInfoByArray(igdbIdArray)
        console.log("gamesInfo", gamesInfo)

        let themesHashTable: any = {}
        let genresHashTable: any = {}

        gamesInfo.forEach((game: any) => {
            if (game.genres) {
                game.genres.forEach((genre: any) => {
                    let name = genre.name
                    genresHashTable[name] = genresHashTable[name] ? genresHashTable[name] + 1 : 1
                })
            }
            if (game.themes) {
                game.themes.forEach((theme: any) => {
                    let name = theme.name
                    themesHashTable[name] = themesHashTable[name] ? themesHashTable[name] + 1 : 1
                })
            }
        })


        const sortedGenres = Object.entries(genresHashTable)
            // @ts-ignore
            .sort(([,a],[,b]) => b-a)
            .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

        const sortedThemes = Object.entries(themesHashTable)
            // @ts-ignore
            .sort(([,a],[,b]) => b-a)
            .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

        console.log("THEMES:")
        console.table(sortedThemes)
        console.log("GENRES:")
        console.table(sortedGenres)
    }

    render() {
        return <div />
    }
}
