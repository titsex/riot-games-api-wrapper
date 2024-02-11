export const RiotGamesAccountRegion = {
    AMERICAS: 'AMERICAS',
    ASIA: 'ASIA',
    EUROPE: 'EUROPE',
    ESPORTS: 'ESPORTS',
} as const

/**
 * The region of the Riot Games accounts.
 */
export type RiotGamesAccountRegion = (typeof RiotGamesAccountRegion)[keyof typeof RiotGamesAccountRegion]

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
