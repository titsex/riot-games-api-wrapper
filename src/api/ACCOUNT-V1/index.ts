import Fetcher from '@fetcher'

import { RiotGamesAccount, RiotGamesAccountRegion } from '@api/ACCOUNT-V1/types'

export default class RiotGamesAccountApi {
    constructor(private readonly fetcher: Fetcher) {}

    async getByNameAndTag(name: string, tag: string, region: RiotGamesAccountRegion) {
        return await this.fetcher.get<RiotGamesAccount>(`riot/account/v1/accounts/by-riot-id/${name}/${tag}`, region)
    }

    async getByPUUID(puuid: string, region: RiotGamesAccountRegion) {
        return await this.fetcher.get<RiotGamesAccount>(`riot/account/v1/accounts/by-puuid/${puuid}`, region)
    }
}
