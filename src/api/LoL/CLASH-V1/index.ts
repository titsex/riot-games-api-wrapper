import Fetcher from '@fetcher'

import {
    LeagueOfLegendsClashPlayer,
    LeagueOfLegendsClashTeam,
    LeagueOfLegendsClashTournament,
} from '@api/LoL/CLASH-V1/types'

export default class LeagueOfLegendsClashApi {
    constructor(private readonly fetcher: Fetcher) {}

    async getPlayersBySummonerId(summonerId: string) {
        return await this.fetcher.get<LeagueOfLegendsClashPlayer[]>(`lol/clash/v1/players/by-summoner/${summonerId}`)
    }

    async getTeamById(teamId: string) {
        return await this.fetcher.get<LeagueOfLegendsClashTeam>(`lol/clash/v1/teams/${teamId}`)
    }

    async getTournaments() {
        return await this.fetcher.get<LeagueOfLegendsClashTournament[]>(`lol/clash/v1/tournaments`)
    }

    async getTournamentByTeamId(teamId: string) {
        return await this.fetcher.get<LeagueOfLegendsClashTournament>(`lol/clash/v1/tournaments/by-team/${teamId}`)
    }

    async getTournamentById(tournamentId: string) {
        return await this.fetcher.get<LeagueOfLegendsClashTournament>(`lol/clash/v1/tournaments/${tournamentId}`)
    }
}
