interface LeagueOfLegendsSpectatorObserver {
    encryptionKey: string
}

interface LeagueOfLegendsSpectatorBannedChampion {
    pickTurn: number
    championId: number
    teamId: number
}

interface LeagueOfLegendsSpectatorParticipantPerks {
    perkIds: number[]
    perkStyle: number
    perkSubStyle: number
}

interface LeagueOfLegendsSpectatorCustomizationObject {
    category: string
    content: string
}

interface LeagueOfLegendsSpectatorParticipant {
    championId: number
    perks: LeagueOfLegendsSpectatorParticipantPerks
    profileIconId: string
    bot: boolean
    teamId: number
    summonerName: string
    summonerId: string
    puuid: string
    spell1Id: number
    spell2Id: number
    gameCustomizationObjects: LeagueOfLegendsSpectatorCustomizationObject[]
}

export interface LeagueOfLegendsSpectatorCurrentGame {
    gameId: number
    gameType: string
    gameStartTime: number
    mapId: number
    gameLength: number
    platformId: string
    gameMode: string
    bannedChampions: LeagueOfLegendsSpectatorBannedChampion[]
    gameQueueConfigId: number
    observers: LeagueOfLegendsSpectatorObserver
    participants: LeagueOfLegendsSpectatorParticipant[]
}

export interface LeagueOfLegendsSpectatorFeaturedGames {
    gameList: LeagueOfLegendsSpectatorCurrentGame[]
    clientRefreshInterval: number
}
