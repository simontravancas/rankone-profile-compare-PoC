import twitch_client_id from '../credentials/client_id'
import twitch_app_code from '../credentials/client_secret'

import axios from 'axios'
import TwitchClient from './TwitchClient';

export default class IgdbClient {
    private static async request(endpoint: string, query: string) {
        let accessToken = await TwitchClient.getAccessToken()
        console.log("query:", query)
        // query = "fields name; where id = 11208;"
        // Using cors-anywhere to bypass CORS restriction
        let gameInfo: any = axios.post(`http://127.0.0.1:8080/https://api.igdb.com/v4/${endpoint}/`,
            query,
            {
                headers: {
                    "Client-ID": twitch_client_id,
                    "Authorization": `Bearer ${accessToken}`
                }
            }
        ).then(res => res.data)

        console.log("response", gameInfo)

        return gameInfo
    }

    static async getGameInfo(gameId: string) {
        return this.request("games", `fields: *;where: id = ${gameId};`,)
    }

    static async getGamesInfoByArray(gameIdArray: Array<string>) {
        let igdbIdCommaSeparatedString = gameIdArray.reduce((prev: string, next: string) => {
            return prev + "," + next
        })
        console.log("igdbIdCommaSeparatedString", igdbIdCommaSeparatedString, "gameIdArray.length + 1", gameIdArray.length + 1)
        let query = `fields name,genres.name,themes.name; where id = (${igdbIdCommaSeparatedString}); limit ${gameIdArray.length + 1};`
        return IgdbClient.request("games", query)
    }
}