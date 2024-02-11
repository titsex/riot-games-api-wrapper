export interface LeagueOfLegendsChampionRotation {
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
