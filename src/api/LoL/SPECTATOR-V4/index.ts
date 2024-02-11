import Fetcher from '@fetcher'

import { LeagueOfLegendsSpectatorCurrentGame, LeagueOfLegendsSpectatorFeaturedGames } from '@api/LoL/SPECTATOR-V4/types'

export default class LeagueOfLegendsSpectatorApi {
    constructor(private readonly fetcher: Fetcher) {}

    async getBySummonerId(summonerId: string) {
        return await this.fetcher.get<LeagueOfLegendsSpectatorCurrentGame>(
            `lol/spectator/v4/active-games/by-summoner/${summonerId}`
        )
    }

    async getFeaturedGames() {
        return await this.fetcher.get<LeagueOfLegendsSpectatorFeaturedGames>('lol/spectator/v4/featured-games')
    }
}
