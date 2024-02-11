import Fetcher from '@fetcher'

import { LeagueOfLegendsSummoner } from '@api/LoL/SUMMONER-V4/types'

export default class LeagueOfLegendsSummonerApi {
    constructor(private readonly fetcher: Fetcher) {}

    async getByAccountId(accountId: string) {
        return await this.fetcher.get<LeagueOfLegendsSummoner>(`lol/summoner/v4/summoners/by-account/${accountId}`)
    }

    async getByName(summonerName: string) {
        return await this.fetcher.get<LeagueOfLegendsSummoner>(`lol/summoner/v4/summoners/by-name/${summonerName}`)
    }

    async getByPUUID(puuid: string) {
        return await this.fetcher.get<LeagueOfLegendsSummoner>(`lol/summoner/v4/summoners/by-puuid/${puuid}`)
    }

    async getById(summonerId: string) {
        return await this.fetcher.get<LeagueOfLegendsSummoner>(`lol/summoner/v4/summoners/${summonerId}`)
    }
}
