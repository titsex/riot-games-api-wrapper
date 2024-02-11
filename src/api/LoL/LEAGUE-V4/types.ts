import { LeagueOfLegendsGameMode, LeagueOfLegendsLeagueEntry, LeagueOfLegendsRankType } from '@api/LoL/types'

export type LeagueOfLegendsLeagueGameMode = Omit<typeof LeagueOfLegendsGameMode, 'RANKED_TFT'>

export interface LeagueList {
    /**
     * The rank of the legends to be obtained.
     */
    tier: LeagueOfLegendsRankType

    /**
     * The ID of the legend.
     */
    leagueId: string
    queue: LeagueOfLegendsLeagueGameMode
    name: string
    entries: LeagueOfLegendsLeagueEntry[]
}
