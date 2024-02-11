import Fetcher from '@fetcher'

import {
    LeagueOfLegendsGameModeType,
    LeagueOfLegendsLeagueEntry,
    LeagueOfLegendsRankType,
    LeagueOfLegendsRankDivision,
} from '@api/LoL/types'

export default class LeagueOfLegendsLeagueExpApi {
    constructor(private readonly fetcher: Fetcher) {}

    async getEntries(
        queue: LeagueOfLegendsGameModeType,
        tier: LeagueOfLegendsRankType,
        division: LeagueOfLegendsRankDivision,
        page: number = 1
    ) {
        return await this.fetcher.get<LeagueOfLegendsLeagueEntry>(
            `lol/league-exp/v4/entries/${queue}/${tier}/${division}?page=${page}`
        )
    }
}
