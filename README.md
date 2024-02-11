# riot-games-api-wrapper
>The purest wrapper over the riot games api
# Feature
| product           | api           | ☑️ |
|-------------------|---------------|----|
| Riot Games        | ACCOUNT-V1    | ✅  |
| League of Legends | CHAMPION-V3   | ✅  |
| League of Legends | CLASH-V1      | ✅  |
| League of Legends | LEAGUE-EXP-V4 | ✅  |
| League of Legends | LEAGUE-V4     | ✅  |
| League of Legends | LOL-STATUS-V4 | ✅  |
| League of Legends | MATCH-V5      | ❌  |
| League of Legends | SPECTATOR-V4  | ✅  |
| League of Legends | SUMMONER-V4   | ✅  |
# Using
```typescript
import RiotGamesAPI, { RiotGamesAccountRegion } from 'riot-games-api-wrapper'

const riot = new RiotGamesAPI({
    token: 'riot games api token',
    region: 'kr'
})

riot.account.getByNameAndTag(
    'titseх',
    'snake',
    RiotGamesAccountRegion.EUROPE
)
    .then(console.log)
    .catch(console.error)

riot.lol.status.get()
    .then(console.log)
    .catch(console.error)
```
# Documentation
### RiotGamesAPI[RiotGamesAPIOptions]
* ```token``` is required, to get it, follow the [Riot Developer Portal](https://developer.riotgames.com)
* ```region``` is required, available: 'br1', 'eun1', 'euw1', 'jp1', 'kr', 'la1', 'la2', 'na1', 'oc1', 'ph1', 'ru', 'sg2', 'th2', 'tr1', 'tw2', 'vn2'