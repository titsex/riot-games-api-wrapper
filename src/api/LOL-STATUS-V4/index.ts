import Fetcher from '@fetcher'

export interface LeaguePlatformContent {
    locale: string
    content: string
}

export interface LeaguePlatformUpdate {
    id: number
    author: string
    publish: boolean
    publish_locations: string[]
    translations: LeaguePlatformContent[]
    created_at: string
    updated_at: string
}

export interface LeaguePlatformStatus {
    id: number
    maintenance_status: string
    incident_severity: string
    titles: LeaguePlatformContent[]
    updates: LeaguePlatformUpdate[]
    created_at: string
    archive_at: string
    updated_at: string
    platforms: string[]
}

export interface LeaguePlatformData {
    id: string
    name: string
    locales: string[]
    maintenances: LeaguePlatformStatus[]
    incidents: LeaguePlatformStatus[]
}

class LOLSTATUSV4 {
    constructor(private readonly fetcher: Fetcher) {}

    async get(): Promise<LeaguePlatformData> {
        return await this.fetcher.get<LeaguePlatformData>('lol/status/v4/platform-data')
    }
}

export default LOLSTATUSV4
