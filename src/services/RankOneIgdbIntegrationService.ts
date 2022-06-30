import RankOneClient from '../clients/RankOneClient';
import IgdbClient from '../clients/IgdbClient';

interface HashCount {
    [s: string]: number;
}

interface PlayedByThemesAndGenresReturn {
    genresHashTable: HashCount;
    themesHashTable: HashCount;
}

export default class RankOneIgdbIntegrationService {
    static getPlayedByThemesAndGenres = async (profileName: string) => {
        let profilePromise = RankOneClient.profile(profileName)
        let pastPlayed = await profilePromise.then((res: any) => res.pastPlaying)

        // cast to string
        let igdbIdArray = pastPlayed.map((e: any) => '' + e?.gameData?.igdbId)
        // console.log("igdbIdArray", igdbIdArray)
        let gamesInfo = await IgdbClient.getGamesInfoByArray(igdbIdArray)
        // console.log("gamesInfo", gamesInfo)

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

        console.log(sortedThemes)
        return {
            genresHashTable: sortedGenres,
            themesHashTable: sortedThemes,
        }
    }
}
