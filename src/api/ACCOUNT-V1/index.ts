import Fetcher from '@fetcher'

export interface AccountInfo {
    /**
     * Player Universally Unique ID.
     */
    puuid: string

    /**
     * The name of the user in the game.
     */
    gameName: string

    /**
     * The user's tag in the game.
     */
    tagLine: string
}

/**
 * AMERICAS - NA, BR, LAN, LAS
 *
 * ASIA - KR, JP
 *
 * EUROPE - EUNE, EUW, TR, RU
 *
 * ESPORTS - Other...
 */
export type AccountRegion = 'AMERICAS' | 'ASIA' | 'ESPORTS' | 'EUROPE'

class ACCOUNTV1 {
    constructor(private readonly fetcher: Fetcher) {}

    async getByNameAndTag(name: string, tag: string, region: AccountRegion): Promise<AccountInfo> {
        return await this.fetcher.get<AccountInfo>(`riot/account/v1/accounts/by-riot-id/${name}/${tag}`, region)
    }

    async getByPUUID(puuid: string, region: AccountRegion): Promise<AccountInfo> {
        return await this.fetcher.get<AccountInfo>(`riot/account/v1/accounts/by-puuid/${puuid}`, region)
    }
}

export default ACCOUNTV1
