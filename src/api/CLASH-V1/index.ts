import Fetcher from '@fetcher'

/**
 * The position of the player that he has selected on the Clash tab.
 */
export type ClashPlayerPosition = 'UNSELECTED' | 'FILL' | 'TOP' | 'JUNGLE' | 'MIDDLE' | 'BOTTOM' | 'UTILITY'

/**
 * The role of the player in the Clash team. He either created this team and is the captain,
 * or he was invited and is a simple member of the team.
 */
export type ClashPlayerRole = 'CAPTAIN' | 'MEMBER'

export interface ClashPlayer {
    /**
     * The unique ID of the summoner.
     */
    summonerId: string

    /**
     * The ID of the Clash team.
     */
    teamId: string

    /**
     * The position of the player in the Clash.
     */
    position: ClashPlayerPosition

    /**
     * The role of the player in the team.
     */
    role: ClashPlayerRole
}

export interface ClashTeam {
    /**
     * The ID of the Clash team.
     */
    id: string

    /**
     * Tournament ID.
     */
    tournamentId: number

    /**
     * The name of the Clash team.
     */
    name: string

    /**
     * The ID of the Clash team icon.
     */
    iconId: number

    /**
     * The tier of the Clash team.
     */
    tier: number

    /**
     * The unique ID of the summoner, the captain of the Clash team.
     */
    captain: string

    /**
     * The abbreviation of the Clash command.
     */
    abbreviation: string

    /**
     * The players of the Clash team.
     */
    players: ClashPlayer[]
}

export interface ClashTournament {
    /**
     * Tournament ID.
     */
    id: number

    /**
     * The ID of the Clash tournament theme.
     */
    themeId: string

    /**
     * The first part of the Clash tournament name, for example "Freljord".
     */
    nameKey: string

    /**
     * The second part of the name of the Clash tournament, where the day is usually indicated.
     */
    nameKeySecondary: string

    /**
     * The schedule of the Clash tournament.
     */
    schedule: ClashTournamentSchedule[]
}

export interface ClashTournamentSchedule {
    /**
     * The ID of the Clash tournament schedule.
     */
    id: number

    /**
     * Time of registration for the Clash tournament.
     */
    registrationTime: number

    /**
     * The start time of the Clash tournament.
     */
    startTime: number

    /**
     * The cancellation status of the Clash tournament.
     */
    cancelled: boolean
}

class CLASHV1 {
    constructor(private readonly fetcher: Fetcher) {}

    async getPlayersBySummonerId(summonerId: string): Promise<ClashPlayer[]> {
        return await this.fetcher.get<ClashPlayer[]>(`lol/clash/v1/players/by-summoner/${summonerId}`)
    }

    async getTeamById(teamId: string): Promise<ClashTeam> {
        return await this.fetcher.get<ClashTeam>(`lol/clash/v1/teams/${teamId}`)
    }

    async getTournaments(): Promise<ClashTournament[]> {
        return await this.fetcher.get<ClashTournament[]>(`lol/clash/v1/tournaments`)
    }

    async getTournamentByTeamId(teamId: string): Promise<ClashTournament> {
        return await this.fetcher.get<ClashTournament>(`lol/clash/v1/tournaments/by-team/${teamId}`)
    }

    async getTournamentById(tournamentId: string): Promise<ClashTournament> {
        return await this.fetcher.get<ClashTournament>(`lol/clash/v1/tournaments/${tournamentId}`)
    }
}

export default CLASHV1
