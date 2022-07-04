import RankOneClient from '../clients/RankOneClient'
import IgdbClient from '../clients/IgdbClient'

interface HashCount {
  [s: string]: number
}

interface PlayedByThemesAndGenresReturn {
  genresHashTable: HashCount
  themesHashTable: HashCount
  totalOfPlayedGames: number
}

export default class RankOneIgdbIntegrationService {
  static getPlayedByThemesAndGenres = async (profileName: string) => {
    const profilePromise = RankOneClient.profile(profileName)
    const pastPlayed = await profilePromise.then((res: any) => res.pastPlaying)

    // cast to string
    const igdbIdArray = pastPlayed.map((e: any) => '' + e?.gameData?.igdbId)
    // console.log("igdbIdArray", igdbIdArray)
    const gamesInfo = await IgdbClient.getGamesInfoByArray(igdbIdArray)
    // console.log("gamesInfo", gamesInfo)

    const themesHashTable: any = {}
    const genresHashTable: any = {}

    gamesInfo.forEach((game: any) => {
      if (game.genres) {
        game.genres.forEach((genre: any) => {
          const name = genre.name
          genresHashTable[name] = genresHashTable[name]
            ? genresHashTable[name] + 1
            : 1
        })
      }
      if (game.themes) {
        game.themes.forEach((theme: any) => {
          const name = theme.name
          themesHashTable[name] = themesHashTable[name]
            ? themesHashTable[name] + 1
            : 1
        })
      }
    })

    const sortedGenres = Object.entries(genresHashTable)
      // @ts-ignore
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

    const sortedThemes = Object.entries(themesHashTable)
      // @ts-ignore
      .sort(([, a], [, b]) => b - a)
      .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})

    console.log(sortedThemes)
    return {
      genresHashTable: sortedGenres,
      themesHashTable: sortedThemes,
      numberOfPlayedGames: pastPlayed.length
    }
  }

  static getPlayedByThemesAndGenresPercentage = async (profileName: string) => {
    const absoluteValues =
      await RankOneIgdbIntegrationService.getPlayedByThemesAndGenres(
        profileName
      )
    const numberOfGamesPlayed = absoluteValues.numberOfPlayedGames

    const percentageGenresHashTable: any = {}
    Object.entries(absoluteValues.genresHashTable).forEach((e: any) => {
      percentageGenresHashTable[e[0]] = (e[1] / numberOfGamesPlayed) * 100
    })

    const percentageThemesHashTable: any = {}
    Object.entries(absoluteValues.themesHashTable).forEach((e: any) => {
      percentageThemesHashTable[e[0]] = (e[1] / numberOfGamesPlayed) * 100
    })

    return {
      genresHashTable: percentageGenresHashTable,
      themesHashTable: percentageThemesHashTable,
      numberOfPlayedGames: absoluteValues.numberOfPlayedGames
    }
  }
}
