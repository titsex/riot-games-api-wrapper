import Fetcher from '@fetcher'

import LeagueOfLegendsPlatformStatusApi from '@api/LoL/LOL-STATUS-V4'
import LeagueOfLegendsLeagueExpApi from '@api/LoL/LEAGUE-EXP-V4'
import LeagueOfLegendsSpectatorApi from '@api/LoL/SPECTATOR-V4'
import LeagueOfLegendsChampionApi from '@api/LoL/CHAMPION-V3'
import LeagueOfLegendsSummonerApi from '@api/LoL/SUMMONER-V4'
import LeagueOfLegendsLeagueApi from '@api/LoL/LEAGUE-V4'
import LeagueOfLegendsClashApi from '@api/LoL/CLASH-V1'
import LeagueOfLegendsMatchApi from '@api/LoL/MATCH-V5'

export default class LeagueOfLegendsApi {
    public status: LeagueOfLegendsPlatformStatusApi
    public spectator: LeagueOfLegendsSpectatorApi
    public leagueExp: LeagueOfLegendsLeagueExpApi
    public champion: LeagueOfLegendsChampionApi
    public summoner: LeagueOfLegendsSummonerApi
    public league: LeagueOfLegendsLeagueApi
    public clash: LeagueOfLegendsClashApi
    public match: LeagueOfLegendsMatchApi

    constructor(private readonly fetcher: Fetcher) {
        this.status = new LeagueOfLegendsPlatformStatusApi(this.fetcher)
        this.spectator = new LeagueOfLegendsSpectatorApi(this.fetcher)
        this.leagueExp = new LeagueOfLegendsLeagueExpApi(this.fetcher)
        this.champion = new LeagueOfLegendsChampionApi(this.fetcher)
        this.summoner = new LeagueOfLegendsSummonerApi(this.fetcher)
        this.league = new LeagueOfLegendsLeagueApi(this.fetcher)
        this.clash = new LeagueOfLegendsClashApi(this.fetcher)
        this.match = new LeagueOfLegendsMatchApi(this.fetcher)
    }
}
