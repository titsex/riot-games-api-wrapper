import Fetcher from '@fetcher'

import {
    LeagueOfLegendsMatch,
    LeagueOfLegendsMatchQueueType,
    LeagueOfLegendsMatchTimeline,
} from '@api/LoL/MATCH-V5/types'

import { RiotGamesRegionDataType } from '@types'

export default class LeagueOfLegendsMatchApi {
    constructor(private readonly fetcher: Fetcher) {}

    async getById(matchId: string, region: RiotGamesRegionDataType) {
        return await this.fetcher.get<LeagueOfLegendsMatch>(`lol/match/v5/matches/${matchId}`, region)
    }

    async getTimelineById(matchId: string, region: RiotGamesRegionDataType) {
        return await this.fetcher.get<LeagueOfLegendsMatchTimeline>(`lol/match/v5/matches/${matchId}/timeline`, region)
    }

    async getIdsByPUUID(
        puuid: string,
        region: RiotGamesRegionDataType,
        params?: {
            startTime?: number
            endTime?: number
            queue?: number
            type?: LeagueOfLegendsMatchQueueType
            start?: number
            count?: number
        }
    ) {
        const query = new URLSearchParams()

        for (const key in params) {
            const param = params[key as keyof typeof params]
            if (param) query.append(`${key}`, `${param}`)
        }

        return await this.fetcher.get<string[]>(`lol/match/v5/matches/by-puuid/${puuid}/ids?${query}`, region)
    }
}
