/**
 * Information about the Riot Games account.
 */
export interface RiotGamesAccount {
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
