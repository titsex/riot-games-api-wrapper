export interface LeagueOfLegendsSummoner {
    /**
     * The unique ID of the summoner.
     */
    id: string

    /**
     * The account ID of the summoner.
     */
    accountId: string

    /**
     * Player Universally Unique ID.
     */
    puuid: string

    /**
     * The name of the summoner.
     */
    name: string

    /**
     * The ID of the summoner's profile icon.
     */
    profileIconId: number

    /**
     * The date of the last change in the summoner's profile.
     * The following events will update this timestamp:
     * profile icon change, playing the tutorial or advanced tutorial,
     * finishing a game, summoner name change
     */
    revisionDate: number

    /**
     * The summoner's level.
     */
    summonerLevel: number
}
