import Fetcher from '@fetcher'

import { LeagueOfLegendsBaseRankType, LeagueOfLegendsLeagueEntry, LeagueOfLegendsRankDivision } from '@api/LoL/types'
import { LeagueList, LeagueOfLegendsLeagueGameMode } from '@api/LoL/LEAGUE-V4/types'

export default class LeagueOfLegendsLeagueApi {
    constructor(private readonly fetcher: Fetcher) {}

    async getChallengers(queue: LeagueOfLegendsLeagueGameMode) {
        return await this.fetcher.get<LeagueList>(`lol/league/v4/challengerleagues/by-queue/${queue}`)
    }

    async getGrandMasters(queue: LeagueOfLegendsLeagueGameMode) {
        return await this.fetcher.get<LeagueList>(`lol/league/v4/grandmasterleagues/by-queue/${queue}`)
    }

    async getMasters(queue: LeagueOfLegendsLeagueGameMode) {
        return await this.fetcher.get<LeagueList>(`lol/league/v4/masterleagues/by-queue/${queue}`)
    }

    async getBySummonerId(summonerId: string) {
        return await this.fetcher.get<LeagueOfLegendsLeagueEntry[]>(`lol/league/v4/entries/by-summoner/${summonerId}`)
    }

    async getById(leagueId: string) {
        return await this.fetcher.get<LeagueList>(`lol/league/v4/leagues/${leagueId}`)
    }

    async getEntries(
        queue: LeagueOfLegendsLeagueGameMode,
        tier: LeagueOfLegendsBaseRankType,
        division: LeagueOfLegendsRankDivision,
        page: number = 1
    ) {
        return await this.fetcher.get<LeagueOfLegendsLeagueEntry[]>(
            `lol/league/v4/entries/${queue}/${tier}/${division}?page=${page}`
        )
    }
}
