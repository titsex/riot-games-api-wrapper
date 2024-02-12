export const LeagueOfLegendsMatchQueue = {
    RANKED: 'ranked',
    NORMAL: 'normal',
    TOURNEY: 'tourney',
    TUTORIAL: 'tutorial',
} as const

export type LeagueOfLegendsMatchQueueType = (typeof LeagueOfLegendsMatchQueue)[keyof typeof LeagueOfLegendsMatchQueue]

interface LeagueOfLegendsMatchMetadata {
    dataVersion: string
    matchId: string
    participants: string[]
}

interface LeagueOfLegendsMatchParticipantPerkStyleSelection {
    perk: number
    var1: number
    var2: number
    var3: number
}

interface LeagueOfLegendsMatchParticipantPerkStyle {
    description: string
    selections: LeagueOfLegendsMatchParticipantPerkStyleSelection[]
    style: number
}

interface LeagueOfLegendsMatchParticipantPerkStats {
    defense: number
    flex: number
    offense: number
}

interface LeagueOfLegendsMatchParticipantPerks {
    statPerks: LeagueOfLegendsMatchParticipantPerkStats
    styles: LeagueOfLegendsMatchParticipantPerkStyle[]
}

interface LeagueOfLegendsMatchParticipant {
    assists: number
    baronKills: number
    bountyLevel: number
    champExperience: number
    champLevel: number
    championId: number
    championName: string
    championTransform: number
    consumablesPurchased: number
    damageDealtToBuildings: number
    damageDealtToObjectives: number
    damageDealtToTurrets: number
    damageSelfMitigated: number
    deaths: number
    detectorWardsPlaced: number
    doubleKills: number
    dragonKills: number
    firstBloodAssist: boolean
    firstBloodKill: boolean
    firstTowerAssist: boolean
    firstTowerKill: boolean
    gameEndedInEarlySurrender: boolean
    gameEndedInSurrender: boolean
    goldEarned: number
    goldSpent: number
    individualPosition: string
    inhibitorKills: number
    inhibitorTakedowns: number
    inhibitorsLost: number
    item0: number
    item1: number
    item2: number
    item3: number
    item4: number
    item5: number
    item6: number
    itemsPurchased: number
    killingSprees: number
    kills: number
    lane: string
    largestCriticalStrike: number
    largestKillingSpree: number
    largestMultiKill: number
    longestTimeSpentLiving: number
    magicDamageDealt: number
    magicDamageDealtToChampions: number
    magicDamageTaken: number
    neutralMinionsKilled: number
    nexusKills: number
    nexusTakedowns: number
    nexusLost: number
    objectivesStolen: number
    objectivesStolenAssists: number
    participantId: number
    pentaKills: number
    perks: LeagueOfLegendsMatchParticipantPerks
    physicalDamageDealt: number
    physicalDamageDealtToChampions: number
    physicalDamageTaken: number
    profileIcon: number
    puuid: string
    quadraKills: number
    riotIdName: string
    riotIdTagline: string
    role: string
    sightWardsBoughtInGame: number
    spell1Casts: number
    spell2Casts: number
    spell3Casts: number
    spell4Casts: number
    summoner1Casts: number
    summoner1Id: number
    summoner2Casts: number
    summoner2Id: number
    summonerId: string
    summonerLevel: number
    summonerName: string
    teamEarlySurrendered: boolean
    teamId: number
    teamPosition: string
    timeCCingOthers: number
    timePlayed: number
    totalDamageDealt: number
    totalDamageDealtToChampions: number
    totalDamageShieldedOnTeammates: number
    totalDamageTaken: number
    totalHeal: number
    totalHealsOnTeammates: number
    totalMinionsKilled: number
    totalTimeCCDealt: number
    totalTimeSpentDead: number
    totalUnitsHealed: number
    tripleKills: number
    trueDamageDealt: number
    trueDamageDealtToChampions: number
    trueDamageTaken: number
    turretKills: number
    turretTakedowns: number
    turretsLost: number
    unrealKills: number
    visionScore: number
    visionWardsBoughtInGame: number
    wardsKilled: number
    wardsPlaced: number
    win: boolean
}

interface LeagueOfLegendsMatchTeamBan {
    championId: number
    pickTurn: number
}

interface LeagueOfLegendsMatchTeamObjective {
    first: boolean
    kills: number
}

interface LeagueOfLegendsMatchTeamObjectives {
    baron: LeagueOfLegendsMatchTeamObjective
    champion: LeagueOfLegendsMatchTeamObjective
    dragon: LeagueOfLegendsMatchTeamObjective
    inhibitor: LeagueOfLegendsMatchTeamObjective
    riftHerald: LeagueOfLegendsMatchTeamObjective
    tower: LeagueOfLegendsMatchTeamObjective
}

interface LeagueOfLegendsMatchTeam {
    bans: LeagueOfLegendsMatchTeamBan[]
    objectives: LeagueOfLegendsMatchTeamObjectives
    teamId: number
    win: boolean
}

interface LeagueOfLegendsMatchInfo {
    gameCreation: bigint
    gameDuration: number
    gameEndTimestamp: bigint
    gameId: number
    gameMode: string
    gameName: string
    gameStartTimestamp: bigint
    gameType: string
    gameVersion: string
    mapId: number
    participants: LeagueOfLegendsMatchParticipant[]
    platformId: string
    queueId: number
    teams: LeagueOfLegendsMatchTeam[]
    tournamentCode: string
}

interface LeagueOfLegendsMatchTimelineFrameParticipantChampionStats {
    abilityHaste: number
    abilityPower: number
    armor: number
    armorPen: number
    armorPenPercent: number
    attackDamage: number
    attackSpeed: number
    bonusArmorPenPercent: number
    bonusMagicPenPercent: number
    ccReduction: number
    cooldownReduction: number
    health: number
    healthMax: number
    healthRegen: number
    lifesteal: number
    magicPen: number
    magicPenPercent: number
    magicResist: number
    movementSpeed: number
    omnivamp: number
    physicalVamp: number
    power: number
    powerMax: number
    powerRegen: number
    spellVamp: number
}

interface LeagueOfLegendsMatchTimelineFrameParticipantDamageStats {
    magicDamageDone: number
    magicDamageDoneToChampions: number
    magicDamageTaken: number
    physicalDamageDone: number
    physicalDamageDoneToChampions: number
    physicalDamageTaken: number
    totalDamageDone: number
    totalDamageDoneToChampions: number
    totalDamageTaken: number
    trueDamageDone: number
    trueDamageDoneToChampions: number
    trueDamageTaken: number
}

interface LeagueOfLegendsMatchTimelineFrameParticipantPosition {
    x: number
    y: number
}

interface LeagueOfLegendsMatchTimelineFrameParticipant {
    championStats: LeagueOfLegendsMatchTimelineFrameParticipantChampionStats
    currentGold: number
    damageStats: LeagueOfLegendsMatchTimelineFrameParticipantDamageStats
    goldPerSecond: number
    jungleMinionsKilled: number
    level: number
    minionsKilled: number
    participantId: number
    position: LeagueOfLegendsMatchTimelineFrameParticipantPosition
    timeEnemySpentControlled: number
    totalGold: number
    xp: number
}

interface LeagueOfLegendsMatchTimelineEventVictimDamageReceived {
    basic: boolean
    magicDamage: number
    name: string
    participantId: number
    physicalDamage: number
    spellName: string
    spellSlot: number
    trueDamage: number
    type: string
}

interface LeagueOfLegendsMatchTimelineEventVictimDamageDealt {
    basic: boolean
    magicDamage: number
    name: string
    participantId: number
    physicalDamage: number
    spellName: string
    spellSlot: number
    trueDamage: number
    type: string
}

interface LeagueOfLegendsMatchTimelineEvent {
    realTimestamp: bigint
    timestamp: number
    type: string
    itemId: number
    participantId: number
    afterId: number
    beforeId: number
    goldGain: number
    levelUpType: string
    skillSlot: number
    creatorId: number
    wardType: string
    level: number
    assistingParticipantIds: number[]
    bounty: number
    killStreakLength: number
    killerId: number
    position: LeagueOfLegendsMatchTimelineFrameParticipantPosition
    victimDamageDealt: LeagueOfLegendsMatchTimelineEventVictimDamageDealt[]
    victimDamageReceived: LeagueOfLegendsMatchTimelineEventVictimDamageReceived[]
    victimId: number
    killType: string
    laneType: string
    teamId: number
    killerTeamId: number
    monsterSubType: string
    monsterType: string
    multiKillLength: number
    buildingType: string
    towerType: string
    gameId: number
    winningTeam: number
}

interface LeagueOfLegendsMatchTimelineParticipant {
    participantId: number
    puuid: string
}

interface LeagueOfLegendsMatchTimelineFrame {
    events: LeagueOfLegendsMatchTimelineEvent[]
    participantFrames: {
        [key in string]: LeagueOfLegendsMatchTimelineFrameParticipant
    }
    timestamp: number
}

interface LeagueOfLegendsMatchTimelineInfo {
    frameInterval: number
    frames: LeagueOfLegendsMatchTimelineFrame[]
    gameId: number
    participants: LeagueOfLegendsMatchTimelineParticipant[]
}

export interface LeagueOfLegendsMatch {
    metadata: LeagueOfLegendsMatchMetadata
    info: LeagueOfLegendsMatchInfo
}

export interface LeagueOfLegendsMatchTimeline {
    metadata: LeagueOfLegendsMatchMetadata
    info: LeagueOfLegendsMatchTimelineInfo
}
