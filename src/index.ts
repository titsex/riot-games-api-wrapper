import Fetcher from '@fetcher'

import LOLSTATUSV4 from './api/LOL-STATUS-V4'
import LEAGUEEXPV4 from './api/LEAGUE-EXP-V4'
import CHAMPIONV3 from './api/CHAMPION-V3'
import SUMMONERV4 from './api/SUMMONER-V4'
import ACCOUNTV1 from './api/ACCOUNT-V1'
import LEAGUEV4 from './api/LEAGUE-V4'
import CLASHV1 from './api/CLASH-V1'

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

class RiotGamesAPI {
    private readonly fetcher: Fetcher

    public leagueExp: LEAGUEEXPV4
    public champion: CHAMPIONV3
    public summoner: SUMMONERV4
    public status: LOLSTATUSV4
    public account: ACCOUNTV1
    public league: LEAGUEV4
    public clash: CLASHV1

    constructor(options: RiotGamesAPIOptions) {
        this.fetcher = new Fetcher(options)

        this.leagueExp = new LEAGUEEXPV4(this.fetcher)
        this.champion = new CHAMPIONV3(this.fetcher)
        this.summoner = new SUMMONERV4(this.fetcher)
        this.status = new LOLSTATUSV4(this.fetcher)
        this.account = new ACCOUNTV1(this.fetcher)
        this.league = new LEAGUEV4(this.fetcher)
        this.clash = new CLASHV1(this.fetcher)
    }
}

export default RiotGamesAPI
