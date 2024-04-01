# riot-games-api-wrapper

> The purest wrapper over the riot games api

# Feature

| product           | api                                                                 | ☑️  |
| ----------------- | ------------------------------------------------------------------- | --- |
| Riot Games        | ACCOUNT-V1                                                          | ✅  |
| League of Legends | [See here](https://github.com/titsex/league-of-legends-api-wrapper) | ✅  |

# Using

```typescript
import RiotGamesAPI, { RiotGamesAccountRegion } from 'riot-games-api-wrapper'

const riot = new RiotGamesAPI([
    {
        token: 'RGAPI-b7957835-f168-41d2-82e8-fe75337713af',
        region: 'ru',
        product: 'LeagueOfLegends',
    },
])

riot.account.getByNameAndTag('titseх', 'snake', RiotGamesAccountRegion.EUROPE).then(console.log).catch(console.error)

riot.lol.status.get().then(console.log).catch(console.error)
```

# Documentation

### RiotGamesAPI[RiotGamesAPIOptions | RiotGamesAPIOptions[]]

-   `token` is required, to get it, follow the [Riot Developer Portal](https://developer.riotgames.com)
-   `region` is required, available: 'br1', 'eun1', 'euw1', 'jp1', 'kr', 'la1', 'la2', 'na1', 'oc1', 'ph1', 'ru', 'sg2', 'th2', 'tr1', 'tw2', 'vn2'
-   `product` is not required, available: 'LeagueOfLegends'

# Disclaimer

It so happened that riot games has its own token for each product (game).

This forced us to make separate packages for each game: [league-of-legends-api-wrapper](https://github.com/titsex/league-of-legends-api-wrapper)

It also forced us to make non-intuitive options in the constructor of the RiotGamesAPI class.

If you need a wrapper over the API of a specific product (game), use the appropriate package.
