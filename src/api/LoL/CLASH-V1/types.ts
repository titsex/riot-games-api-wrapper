export const LeagueOfLegendsClashPlayerPosition = {
    UNSELECTED: 'UNSELECTED',
    FILL: 'FILL',
    TOP: 'TOP',
    JUNGLE: 'JUNGLE',
    MIDDLE: 'MIDDLE',
    BOTTOM: 'BOTTOM',
    UTILITY: 'UTILITY',
} as const

type LeagueOfLegendsClashPlayerPositionType =
    (typeof LeagueOfLegendsClashPlayerPosition)[keyof typeof LeagueOfLegendsClashPlayerPosition]

export const LeagueOfLegendsClashPlayerRole = {
    CAPTAIN: 'CAPTAIN',
    MEMBER: 'MEMBER',
} as const

type LeagueOfLegendsClashPlayerRoleType =
    (typeof LeagueOfLegendsClashPlayerRole)[keyof typeof LeagueOfLegendsClashPlayerRole]

export interface LeagueOfLegendsClashPlayer {
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
    position: LeagueOfLegendsClashPlayerPositionType

    /**
     * The role of the player in the team.
     */
    role: LeagueOfLegendsClashPlayerRoleType
}

export interface LeagueOfLegendsClashTeam {
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
    players: LeagueOfLegendsClashPlayer[]
}

export interface LeagueOfLegendsClashTournament {
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
    schedule: LeagueOfLegendsClashTournamentSchedule[]
}

interface LeagueOfLegendsClashTournamentSchedule {
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
