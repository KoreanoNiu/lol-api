import axios from 'axios';

class API {

    constructor(server){
        this.baseUrl = 'https://' + obtainServer(server)  + '.api.riotgames.com/'
    }

    getSummonerByName (summonerName) {
        let URL = this.baseUrl +  'lol/summoner/v4/summoners/by-name/' + summonerName

        const response = axios.get(URL, {
            headers: {
                'X-Riot-Token': "RGAPI-a7d44656-dc0b-4d23-9c0f-5d7dc0cf05de"
            }
        });

        return response;

    };
}

function obtainServer(server) {
    if (server === 'LAN') {
        return 'la1'
    }else if (server === 'NA') {
        return 'na1'
    }
}

export default API;