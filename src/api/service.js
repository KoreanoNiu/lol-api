import axios from 'axios';

class API {

    constructor(server){
        this.baseUrl = 'https://' + obtainServer(server)  + '.api.riotgames.com/'
    }

    getSummonerByName (summonerName) {
        let URL = this.baseUrl +  'lol/summoner/v4/summoners/by-name/' + summonerName
        const getData = async() => {
            try {
                const response = await axios.get(URL, {
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                        "X-Riot-Token": "RGAPI-a7d44656-dc0b-4d23-9c0f-5d7dc0cf05de"
                    },
                    mode: 'no-cors',
                    params: {
                        "api_key": "RGAPI-a7d44656-dc0b-4d23-9c0f-5d7dc0cf05de"
                    },
                });

                return response
            }catch{

            }
        }

        return getData()
    };

    getRankedPlayed(summonerNameID){
        let URL = this.baseUrl +  'lol/league/v4/entries/by-summoner/' + summonerNameID
        const getData = async() => {
            try {
                const response = await axios.get(URL, {
                    headers: {
                        'Access-Control-Allow-Origin' : '*',
                        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                        "X-Riot-Token": "RGAPI-a7d44656-dc0b-4d23-9c0f-5d7dc0cf05de"
                    },
                    mode: 'no-cors',
                    params: {
                        "api_key": "RGAPI-a7d44656-dc0b-4d23-9c0f-5d7dc0cf05de"
                    }
                });

                return response
            }catch{

            }
        }

        return getData()

    }
}

function obtainServer(server) {
    if (server === 'LAN') {
        return 'la1'
    }else if (server === 'NA') {
        return 'na1'
    }
}

export default API;