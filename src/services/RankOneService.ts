import RankOneClient from '../clients/RankOneClient';

export default class RankOneService {
    static getPastPlayedGames = async () => {
        let profilePromise: any = RankOneClient.profile("altripp")
        // console.log("aaaaa profile", await profile)
        return profilePromise.then((res: any) => res.pastPlaying)
    }
}
