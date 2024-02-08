import Fetcher from '@fetcher'

/**
 * The game mode from which you need to get the entries.
 */
export type LeagueExpQueue = 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'

/**
 * The rank that entities should have.
 */
export type LeagueExpTier =
    | 'IRON'
    | 'BRONZE'
    | 'SILVER'
    | 'GOLD'
    | 'PLATINUM'
    | 'EMERALD'
    | 'DIAMOND'
    | 'MASTER'
    | 'GRANDMASTER'
    | 'CHALLENGER'

/**
 * The division of the rank that entities should have.
 */
export type LeagueExpDivision = 'I' | 'II' | 'III' | 'IV'

export interface LeagueExpEntrySeries {
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

export interface LeagueExpEntry {
    leagueId: string
    summonerId: string
    summonerName: string
    queueType: LeagueExpQueue
    tier: LeagueExpTier
    rank: LeagueExpDivision
    leaguePoints: number
    wins: number
    losses: number
    hotStreak: boolean
    veteran: boolean
    freshBlood: boolean
    inactive: boolean
    miniSeries?: LeagueExpEntrySeries
}

class LEAGUEEXPV4 {
    constructor(private readonly fetcher: Fetcher) {}

    async getEntries(
        queue: LeagueExpQueue,
        tier: LeagueExpTier,
        division: LeagueExpDivision,
        page: number = 1
    ): Promise<LeagueExpEntry> {
        return await this.fetcher.get<LeagueExpEntry>(
            `lol/league-exp/v4/entries/${queue}/${tier}/${division}?page=${page}`
        )
    }
}

export default LEAGUEEXPV4
