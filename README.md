# riot-games-api-wrapper
 The purest wrapper over the riot games api.

# Feature
| game              | api           | status          | ☑️ |
|-------------------|---------------|-----------------|----|
| league of legends | ACCOUNT-V1    | implemented     | ✅  |
| league of legends | CHAMPION-V3   | implemented     | ✅  |
| league of legends | CLASH-V1      | implemented     | ✅  |
| league of legends | LEAGUE-EXP-V4 | implemented     | ✅  |
| league of legends | LEAGUE-V4     | implemented     | ✅  |
| league of legends | LOL-STATUS-V4 | implemented     | ✅  |
| league of legends | MATCH-V5      | not implemented | ❌  |
| league of legends | SPECTATOR-V4  | not implemented | ❌  |
| league of legends | SUMMONER-V4   | implemented     | ✅  |

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
