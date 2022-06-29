import twitch_client_id from '../credentials/client_id'
import twitch_app_code from '../credentials/client_secret'

import axios from 'axios'
import TwitchClient from './TwitchClient';

export default class IgdbClient {
    static async getGameInfo(gameId: string) {
        let accessToken = await TwitchClient.getAccessToken()
        
        // Using cors-anywhere to bypass CORS restriction
        let gameInfo = await axios.post(`http://127.0.0.1:8080/https://api.igdb.com/v4/games/`,
            `fields: *;where: id = ${gameId};`,
            {
                headers: {
                    "Client-ID": twitch_client_id,
                    "Authorization": `Bearer ${accessToken}`
                }
            }
        )

        console.log("gameInfo.data", gameInfo.data)
        return gameInfo.data
    }
}