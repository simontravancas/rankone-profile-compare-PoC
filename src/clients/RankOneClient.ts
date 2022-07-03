import axios from 'axios'

export default class RankOneClient {
  static profile = async (name: string) => {
    const axiosResponse: any = axios.get(
      `https://p1.api.rankone.global/public/profile/${name}`
    )
    return axiosResponse.then((res: any) => res.data)
  }
}
