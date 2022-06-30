import React, { Component } from 'react';
import RankOneService from '../services/RankOneService';
import TwitchClient from '../clients/TwitchClient';
import IgdbClient from '../clients/IgdbClient';
import PieChart from './PieChart';
import RankOneIgdbIntegrationService from '../services/RankOneIgdbIntegrationService';

const MAX_NUMBER_OF_FIELDS = 8

export default class GamesDigest extends React.Component {

    state = {
        visitedProfileGenresChartData: {},
        visitedProfileThemesChartData: {},
        selfGenresChartData: {},
        selfThemesChartData: {},
        loading: true,
    }


    
    async componentDidMount() {
        const data = await RankOneIgdbIntegrationService.getPlayedByThemesAndGenres("altripp")
        this.setState({
            visitedProfileGenresChartData: data.genresHashTable,
            visitedProfileThemesChartData: data.genresHashTable,
        })

        // const pastPlayed = await RankOneService.getPastPlayedGames()
        // console.log("pastPlayed", pastPlayed)
        // // cast to string
        // let igdbIdArray = pastPlayed.map((e: any) => '' + e?.gameData?.igdbId)
        // console.log("igdbIdArray", igdbIdArray)
        // let gamesInfo = await IgdbClient.getGamesInfoByArray(igdbIdArray)
        // console.log("gamesInfo", gamesInfo)

        // let themesHashTable: any = {}
        // let genresHashTable: any = {}

        // gamesInfo.forEach((game: any) => {
        //     if (game.genres) {
        //         game.genres.forEach((genre: any) => {
        //             let name = genre.name
        //             genresHashTable[name] = genresHashTable[name] ? genresHashTable[name] + 1 : 1
        //         })
        //     }
        //     if (game.themes) {
        //         game.themes.forEach((theme: any) => {
        //             let name = theme.name
        //             themesHashTable[name] = themesHashTable[name] ? themesHashTable[name] + 1 : 1
        //         })
        //     }
        // })

        // const sortedGenres = Object.entries(genresHashTable)
        //     // @ts-ignore
        //     .sort(([,a],[,b]) => b-a)
        //     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

        // const sortedThemes = Object.entries(themesHashTable)
        //     // @ts-ignore
        //     .sort(([,a],[,b]) => b-a)
        //     .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

        // this.setState()

        // console.log("THEMES:")
        // console.table(sortedThemes)
        // console.log("GENRES:")
        // console.table(sortedGenres)
    }

    render() {
    return <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <div style={{
                    width: "100%",
                    maxWidth: "1000px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "30px",
                }}>
                    <div style={{
                        flex: 1,
                        height: "30vh",
                        backgroundColor: "#1f1e33",
                        display:"flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <PieChart 
                            name={"Games by genre"}
                            compareText={"compare!"}
                            primaryDataSet={this.state.visitedProfileGenresChartData}
                            secondaryDataSet={this.state.selfGenresChartData}
                            maxNumberOfFields={MAX_NUMBER_OF_FIELDS}
                        />
                    </div>
                    <div style={{
                        flex: 1,
                        height: "30vh",
                        backgroundColor: "#1f1e33",
                        display:"flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <PieChart 
                            name={"Games by theme"}
                            compareText={"compare!"}
                            primaryDataSet={this.state.visitedProfileThemesChartData}
                            secondaryDataSet={this.state.selfThemesChartData}
                            maxNumberOfFields={MAX_NUMBER_OF_FIELDS}
                        />
                    </div>
                </div>
            </div>
    }
}