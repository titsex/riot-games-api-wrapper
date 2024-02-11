import { RiotGamesAPIOptions } from './types'

export class RiotGamesAPIBadResponseException extends Error {
    constructor(
        readonly message: string,
        readonly cause: unknown
    ) {
        super(message, {
            cause,
        })
    }
}

class Fetcher {
    constructor(
        private readonly options: RiotGamesAPIOptions,
        private readonly apiUrl: string
    ) {}

    async get<T>(url: string, region?: string) {
        const response = await fetch(`https://${region || this.options.region}.${this.apiUrl}/${url}`, {
            headers: {
                'X-Riot-Token': this.options.token,
            },
        })

        const json = await response.json()

        if (!response.ok) throw new RiotGamesAPIBadResponseException(json?.status?.message || 'Unknown error.', json)

        return json as T
    }
}

export default Fetcher
