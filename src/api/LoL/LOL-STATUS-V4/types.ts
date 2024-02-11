interface LeagueOfLegendsPlatformStatusContent {
    locale: string
    content: string
}

interface LeagueOfLegendsPlatformStatusUpdate {
    id: number
    author: string
    publish: boolean
    publish_locations: string[]
    translations: LeagueOfLegendsPlatformStatusContent[]
    created_at: string
    updated_at: string
}

interface LeagueOfLegendsPlatformStatus {
    id: number
    maintenance_status: string
    incident_severity: string
    titles: LeagueOfLegendsPlatformStatusContent[]
    updates: LeagueOfLegendsPlatformStatusUpdate[]
    created_at: string
    archive_at: string
    updated_at: string
    platforms: string[]
}

export interface LeagueOfLegendsPlatformStatusData {
    id: string
    name: string
    locales: string[]
    maintenances: LeagueOfLegendsPlatformStatus[]
    incidents: LeagueOfLegendsPlatformStatus[]
}
