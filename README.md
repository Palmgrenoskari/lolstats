# LoLStats
This will be a learning fullstack project that shows information about League of Legends. Very excited!

League of Legends has a great API: https://developer.riotgames.com/apis

------------------------

<b>EDIT 03/01/2024:</b> Apparently the API is not that great after all ([Riot's developer API have been completely broken for years](https://www.reddit.com/r/leagueoflegends/comments/18wq2q2/riots_developer_api_have_been_completely_broken/)). Many suggested looking into 3rd party solutions like [CommunityDragon](https://www.communitydragon.org/documentation) but that will make things significantly more complex as you need to work with raw game data apparently. I guess I'll just continue using the RIOT API and skip any features where the API is "broken" or try to find some workarounds.

Already bumping into some weird stuff for example item descriptions are embedded as HTML within JSON objects?

![image](https://github.com/Palmgrenoskari/lolstats/assets/62388905/1f3db5cc-64ee-495a-8ea3-4ce5008380d3)

Oh well let's see how this goes :D

------------------------

A few great already existing LoL information sites
* https://u.gg/
* https://www.op.gg/
* https://mobalytics.gg/lol

## Dev Roadmap

Some kind of rough roadmap of the top of my head. Truth is its definitely not going to be this organized heh:</br>
<b>Bolded</b> = currently working on

1. <b>Front: Achieve some basic look, have a navbar with a few different routes that each show some kind of information about league</b>
2. <b>Front & Back: Implement ability to fetch league of legends account information by name and region. Figure out the Riot dev API and achieve decent integration between front and back. Implement leaderboards? </b>
3. Back: Add in DB, most likely mongoDB
4. Front and back: Authentication, ability to create account, login -> store credentials encrypted to mongoDB
5. Figure out whether we need some better state management, perhaps change to typescript if I feel confident about it, stylings++ bootstrap/tailwind, more functionalities, ... <b>I mean let's first get this far ^</b>
