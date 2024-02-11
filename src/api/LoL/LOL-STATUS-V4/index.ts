import Fetcher from '@fetcher'

import { LeagueOfLegendsPlatformStatusData } from '@api/LoL/LOL-STATUS-V4/types'

export default class LeagueOfLegendsPlatformStatusApi {
    constructor(private readonly fetcher: Fetcher) {}

    async get() {
        return await this.fetcher.get<LeagueOfLegendsPlatformStatusData>('lol/status/v4/platform-data')
    }
}
