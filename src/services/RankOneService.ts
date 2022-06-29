import RankOneClient from '../clients/RankOneClient';

export default class RankOneService {
    static getPastPlayedGames = async () => {
        let profilePromise: any = RankOneClient.profile("altripp")
        return profilePromise.then((res: any) => res.pastPlaying)
    }
}
