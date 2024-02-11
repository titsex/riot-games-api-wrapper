import Fetcher from '@fetcher'

import { LeagueOfLegendsChampionRotation } from '@api/LoL/CHAMPION-V3/types'

export default class LeagueOfLegendsChampionApi {
    constructor(private readonly fetcher: Fetcher) {}

    async getRotations() {
        return await this.fetcher.get<LeagueOfLegendsChampionRotation>(`lol/platform/v3/champion-rotations`)
    }
}
