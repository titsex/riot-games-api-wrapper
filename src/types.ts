export interface RiotGamesAPIOptions {
    /**
     * Riot Games API token which can be obtained by following the link: https://developer.riotgames.com
     */
    token: string

    /**
     * The API region where the requests will be sent.
     */
    region: RiotGamesAPIRegion
}

export type RiotGamesAPIRegion =
    | 'br1'
    | 'eun1'
    | 'euw1'
    | 'jp1'
    | 'kr'
    | 'la1'
    | 'la2'
    | 'na1'
    | 'oc1'
    | 'ph1'
    | 'ru'
    | 'sg2'
    | 'th2'
    | 'tr1'
    | 'tw2'
    | 'vn2'
