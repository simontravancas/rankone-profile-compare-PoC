import axios from 'axios'

// Of course, something like this should not go to production (security)
import twitch_client_id from '../credentials/client_id'
import twitch_client_secret from '../credentials/client_secret'

export default class TwitchClient {
  static getAccessToken = async () => {
    const authInfo = axios.post(
      `https://id.twitch.tv/oauth2/token?client_id=${twitch_client_id}&client_secret=${twitch_client_secret}&grant_type=client_credentials`
    )
    return authInfo.then((res: any) => res.data.access_token)
  }
}
