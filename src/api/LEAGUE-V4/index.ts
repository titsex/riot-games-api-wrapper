import Fetcher from '@fetcher'

/**
 * The game mode in which you need to get the legends.
 */
export type LeagueQueue = 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'

/**
 * The division of the rank of legends to be obtained.
 */
export type LeagueDivision = 'I' | 'II' | 'III' | 'IV'

/**
 * The high rank of the legends to be obtained.
 */
export type LeagueHighTier = 'MASTER' | 'GRANDMASTER' | 'CHALLENGER'

/**
 * The rank of the legends to be obtained.
 */
export type LeagueTier = 'IRON' | 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'EMERALD' | 'DIAMOND'

export interface LeagueEntrySeries {
    /**
     * The number of losses.
     */
    losses: number

    progress: string
    target: number

    /**
     * The number of wins.
     */
    wins: number
}

export interface LeagueEntry {
    /**
     * The ID of the legend.
     */
    leagueId: string

    /**
     * The summoner's ID.
     */
    summonerId: string

    /**
     * The name of the summoner.
     */
    summonerName: string

    /**
     * The game mode in which you need to get the legends.
     */
    queueType: LeagueQueue

    /**
     * The rank of the legends to be obtained.
     */
    tier: LeagueTier & LeagueHighTier

    /**
     * The division of the rank of legends to be obtained.
     */
    rank: LeagueDivision
    leaguePoints: number
    wins: number
    losses: number
    hotStreak: boolean
    veteran: boolean
    freshBlood: boolean
    inactive: boolean
    miniSeries?: LeagueEntrySeries
}

export interface LeagueList {
    /**
     * The rank of the legends to be obtained.
     */
    tier: LeagueTier & LeagueHighTier

    /**
     * The ID of the legend.
     */
    leagueId: string
    queue: LeagueQueue
    name: string
    entries: LeagueEntry[]
}

class LEAGUEV4 {
    constructor(private readonly fetcher: Fetcher) {}

    async getChallengers(queue: LeagueQueue): Promise<LeagueList> {
        return await this.fetcher.get<LeagueList>(`lol/league/v4/challengerleagues/by-queue/${queue}`)
    }

    async getGrandMasters(queue: LeagueQueue): Promise<LeagueList> {
        return await this.fetcher.get<LeagueList>(`lol/league/v4/grandmasterleagues/by-queue/${queue}`)
    }

    async getMasters(queue: LeagueQueue): Promise<LeagueList> {
        return await this.fetcher.get<LeagueList>(`lol/league/v4/masterleagues/by-queue/${queue}`)
    }

    async getBySummonerId(summonerId: string): Promise<LeagueEntry[]> {
        return await this.fetcher.get<LeagueEntry[]>(`lol/league/v4/entries/by-summoner/${summonerId}`)
    }

    async getById(leagueId: string): Promise<LeagueList> {
        return await this.fetcher.get<LeagueList>(`lol/league/v4/leagues/${leagueId}`)
    }

    async getEntries(
        queue: LeagueQueue,
        tier: LeagueTier,
        division: LeagueDivision,
        page: number = 1
    ): Promise<LeagueEntry[]> {
        return await this.fetcher.get<LeagueEntry[]>(`lol/league/v4/entries/${queue}/${tier}/${division}?page=${page}`)
    }
}

export default LEAGUEV4
