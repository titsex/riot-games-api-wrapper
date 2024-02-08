import Fetcher from '@fetcher'

export interface SummonerInfo {
    /**
     * The unique ID of the summoner.
     */
    id: string

    /**
     * The account ID of the summoner.
     */
    accountId: string

    /**
     * Player Universally Unique ID.
     */
    puuid: string

    /**
     * The name of the summoner.
     */
    name: string

    /**
     * The ID of the summoner's profile icon.
     */
    profileIconId: number

    /**
     * The date of the last change in the summoner's profile.
     * The following events will update this timestamp:
     * profile icon change, playing the tutorial or advanced tutorial,
     * finishing a game, summoner name change
     */
    revisionDate: number

    /**
     * The summoner's level.
     */
    summonerLevel: number
}

class SUMMONERV4 {
    constructor(private readonly fetcher: Fetcher) {}

    async getByAccountId(accountId: string): Promise<SummonerInfo> {
        return await this.fetcher.get<SummonerInfo>(`lol/summoner/v4/summoners/by-account/${accountId}`)
    }

    async getByName(summonerName: string): Promise<SummonerInfo> {
        return await this.fetcher.get<SummonerInfo>(`lol/summoner/v4/summoners/by-name/${summonerName}`)
    }

    async getByPUUID(puuid: string): Promise<SummonerInfo> {
        return await this.fetcher.get<SummonerInfo>(`lol/summoner/v4/summoners/by-puuid/${puuid}`)
    }

    async getById(summonerId: string): Promise<SummonerInfo> {
        return await this.fetcher.get<SummonerInfo>(`lol/summoner/v4/summoners/${summonerId}`)
    }
}

export default SUMMONERV4
