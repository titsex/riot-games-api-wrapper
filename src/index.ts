import Fetcher from '@fetcher'

import RiotGamesAccountApi from '@api/ACCOUNT-V1'

import LeagueOfLegendsApi from '@api/LoL'

import { RiotGamesAPIOptions } from './types'

class RiotGamesAPI {
    private readonly url = 'api.riotgames.com'

    public account: RiotGamesAccountApi

    public lol: LeagueOfLegendsApi

    constructor(options: RiotGamesAPIOptions) {
        const fetcher = new Fetcher(options, this.url)

        this.account = new RiotGamesAccountApi(fetcher)

        this.lol = new LeagueOfLegendsApi(fetcher)
    }
}

export { RiotGamesAccountRegion } from './api/ACCOUNT-V1/types'

export {
    LeagueOfLegendsGameMode,
    LeagueOfLegendsBaseRank,
    LeagueOfLegendsHighRank,
    LeagueOfLegendsRank,
} from './api/LoL/types'

export { LeagueOfLegendsClashPlayerRole, LeagueOfLegendsClashPlayerPosition } from './api/LoL/CLASH-V1/types'

export default RiotGamesAPI
