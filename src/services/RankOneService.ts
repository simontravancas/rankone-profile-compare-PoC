import RankOneClient from '../clients/RankOneClient';

export default class RankOneService {
    static getPastPlayedGames = async (profileName: string) => {
        let profilePromise: any = RankOneClient.profile(profileName)
        return profilePromise.then((res: any) => res.pastPlaying)
    }
}
