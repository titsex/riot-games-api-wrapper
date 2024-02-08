import Fetcher from '@fetcher'

export interface ChampionRotation {
    /**
     * List of ids of champions available for free.
     */
    freeChampionIds: number[]

    /**
     * List of ids of available champions for players whose level is equal to
     * or less than the value of the maxNewPlayerLevel field
     */
    freeChampionIdsForNewPlayers: number[]

    /**
     * The maximum account level at which more free champions are available
     * than in the freeChampionIds field.
     */
    maxNewPlayerLevel: number
}

class CHAMPIONV3 {
    constructor(private readonly fetcher: Fetcher) {}

    async getRotations(): Promise<ChampionRotation> {
        return await this.fetcher.get<ChampionRotation>(`lol/platform/v3/champion-rotations`)
    }
}

export default CHAMPIONV3
