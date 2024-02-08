import { RIOT_GAMES_API_URL } from '@constant'
import { RiotGamesAPIOptions } from './index'

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
    constructor(private readonly options: RiotGamesAPIOptions) {}

    async get<T>(url: string, region?: string) {
        const response = await fetch(`https://${region || this.options.region}.${RIOT_GAMES_API_URL}/${url}`, {
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
