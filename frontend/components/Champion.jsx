// Attack, defence, magic and difficulty bars could be cool for each champ

const Champion = ({ champion }) => {

    if (!champion) {
        return <div>Loading...</div>
    }

    console.log('Champion', champion)

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
            <div style={{ flex: 1, padding: '0px 10px' }}>
                <h2>{`${champion.id} (${champion.tags})`}</h2>
                <h3>{champion.title}</h3>
                <p>{champion.blurb}</p>
                <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt={champion.id} />
            </div>
            <div style={{ flex: 1, padding: '0px 10px' }}>
                <h3>Stats</h3>
                HP: {champion.stats.hp}<br />
                HP per level: {champion.stats.hpperlevel}<br />
                MP: {champion.stats.mp}<br />
                MP per level: {champion.stats.mpperlevel}<br />
                Move speed: {champion.stats.movespeed}<br />
                Armor: {champion.stats.armor}<br />
                Armor per level: {champion.stats.armorperlevel}<br />
                Spell block: {champion.stats.spellblock}<br />
                Spell block per level: {champion.stats.spellblockperlevel}<br />
                Attack range: {champion.stats.attackrange}<br />
                HP regen: {champion.stats.hpregen}<br />
                HP regen per level: {champion.stats.hpregenperlevel}<br />
                MP regen: {champion.stats.mpregen}<br />
                MP regen per level: {champion.stats.mpregenperlevel}<br />
                Crit: {champion.stats.crit}<br />
                Crit per level: {champion.stats.critperlevel}<br />
                Attack damage: {champion.stats.attackdamage}<br />
                Attack damage per level: {champion.stats.attackdamageperlevel}<br />
                Attack speed per level: {champion.stats.attackspeedperlevel}<br />
                Attack speed: {champion.stats.attackspeed}<br />
            </div>
        </div>
    )
}

export default Champion;