import Fetcher from '@fetcher'

import LeagueOfLegendsAPI from 'league-of-legends-api-wrapper'
import RiotGamesAccountApi from '@api/ACCOUNT-V1'

import { RiotGamesAPIOptions, RiotGamesProduct } from '@types'

class RiotGamesAPI {
    private readonly url = 'api.riotgames.com'

    public account!: RiotGamesAccountApi

    public lol!: LeagueOfLegendsAPI

    constructor(options: RiotGamesAPIOptions | RiotGamesAPIOptions[]) {
        const fetcher = new Fetcher(Array.isArray(options) ? options[0] : options, this.url)

        this.account = new RiotGamesAccountApi(fetcher)

        if (Array.isArray(options)) {
            for (const option of options) {
                switch (option.product) {
                    case RiotGamesProduct.LeagueOfLegends: {
                        this.lol = new LeagueOfLegendsAPI(option)
                        break
                    }
                    default: {
                        throw new Error('Specify the correct Riot Games product')
                    }
                }
            }
        }
    }
}

const riot = new RiotGamesAPI({
    region: 'ru',
    token: 'RGAPI-db35f3c2-582f-4fa9-b2a4-975c8cf4f82e',
})

export { RiotGamesDataRegion } from '@types'

export default RiotGamesAPI
