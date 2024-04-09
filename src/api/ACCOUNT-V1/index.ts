import Fetcher from '@fetcher'

import { RiotGamesRegionDataType } from '@types'
import { RiotGamesAccount } from './types.js'

export default class RiotGamesAccountApi {
    constructor(private readonly fetcher: Fetcher) {}

    async getByNameAndTag(name: string, tag: string, region: RiotGamesRegionDataType) {
        return await this.fetcher.get<RiotGamesAccount>(`riot/account/v1/accounts/by-riot-id/${name}/${tag}`, region)
    }

    async getByPUUID(puuid: string, region: RiotGamesRegionDataType) {
        return await this.fetcher.get<RiotGamesAccount>(`riot/account/v1/accounts/by-puuid/${puuid}`, region)
    }
}
