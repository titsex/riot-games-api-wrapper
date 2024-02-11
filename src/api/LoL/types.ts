export const LeagueOfLegendsGameMode = {
    RANKED_SOLO_5x5: 'RANKED_SOLO_5x5',
    RANKED_TFT: 'RANKED_TFT',
    RANKED_FLEX_SR: 'RANKED_FLEX_SR',
    RANKED_FLEX_TT: 'RANKED_FLEX_TT',
} as const

/**
 * League of Legends game modes.
 */
export type LeagueOfLegendsGameModeType = (typeof LeagueOfLegendsGameMode)[keyof typeof LeagueOfLegendsGameMode]

export const LeagueOfLegendsBaseRank = {
    IRON: 'IRON',
    BRONZE: 'BRONZE',
    SILVER: 'SILVER',
    GOLD: 'GOLD',
    PLATINUM: 'PLATINUM',
    EMERALD: 'EMERALD',
    DIAMOND: 'DIAMOND',
} as const

/**
 * A list of the basic ranks of the League of Legends.
 */
export type LeagueOfLegendsBaseRankType = (typeof LeagueOfLegendsBaseRank)[keyof typeof LeagueOfLegendsBaseRank]

export const LeagueOfLegendsHighRank = {
    MASTER: 'MASTER',
    GRANDMASTER: 'GRANDMASTER',
    CHALLENGER: 'CHALLENGER',
} as const

/**
 * A list of the highest ranks of the League of Legends.
 */
export type LeagueOfLegendsHighRankType = (typeof LeagueOfLegendsHighRank)[keyof typeof LeagueOfLegendsHighRank]

export const LeagueOfLegendsRank = {
    ...LeagueOfLegendsBaseRank,
    ...LeagueOfLegendsHighRank,
} as const

/**
 * List of League of Legends ranks.
 */
export type LeagueOfLegendsRankType = (typeof LeagueOfLegendsRank)[keyof typeof LeagueOfLegendsRank]

/**
 * Divisions of ranks in the League of Legends.
 *
 * The {@link LeagueOfLegendsHighRankType} do not have divisions.
 */
export type LeagueOfLegendsRankDivision = 'I' | 'II' | 'III' | 'IV'

export interface LeagueOfLegendsLeagueEntrySeries {
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

export interface LeagueOfLegendsLeagueEntry {
    leagueId: string
    summonerId: string
    summonerName: string
    queueType: LeagueOfLegendsGameModeType
    tier: LeagueOfLegendsRankType
    rank: LeagueOfLegendsRankDivision
    leaguePoints: number
    wins: number
    losses: number
    hotStreak: boolean
    veteran: boolean
    freshBlood: boolean
    inactive: boolean
    miniSeries?: LeagueOfLegendsLeagueEntrySeries
}
