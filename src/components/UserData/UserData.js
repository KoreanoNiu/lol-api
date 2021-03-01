import React, { Component } from 'react'
import API from '../../api/service';

function char_to_int(character) {
    switch(character){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}

function romanToArabic(roman){
    if(roman == null)
        return -1;
    var totalValue = 0, 
        value = 0, // Initialise!
        prev = 0;
        
    for(var i=0;i<roman.length;i++){
        var current = char_to_int(roman.charAt(i));
        if (current > prev) {
            // Undo the addition that was done, turn it into subtraction
            totalValue -= 2 * value;
        }
        if (current !== prev) { // Different symbol?
            value = 0; // reset the sum for the new symbol
        }
        value += current; // keep adding same symbols
        totalValue += current;
        prev = current;
    }
    return totalValue;
}

export default class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            profile: [],
            rankedData: []
        }
    }

    back = () => {
        this.props.parentCallback(false);
    }

    componentDidMount() {
        let ApiObject = new API(this.props.region);

        ApiObject.getSummonerByName(this.props.name).then((res) => {
            this.setState({
                profile: res.data,
                loading: false
            })

            ApiObject.getRankedPlayed(this.state.profile.id).then((res) => {
                console.log(res.data)
            })

            ApiObject.getRankedPlayed(this.state.profile.id).then((res) => {
                this.setState({
                    rankedData: res.data,
                })
            })
        });
    }

    render() {
        const { profile, rankedData, loading } = this.state;
        return (
            <div className="uk-flex uk-flex-center uk-animation" data-tabindex="0">
                {
                    loading ? <span data-uk-spinner="ratio: 8.5" className="custom-color uk-margin-large-top"></span> 
                    :
                    <div className="uk-card uk-card-default uk-width-1-2@m uk-margin-medium-top uk-box-shadow-small uk-animation-slide-top-small">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                <div>
                                    <img className="uk-border-circle" width="100" height="100" src={'http://ddragon.leagueoflegends.com/cdn/11.4.1/img/profileicon/' + profile.profileIconId + '.png'} alt=''/>
                                </div>
                                <div className="uk-width-expand">
                                    <h2 className="uk-card-title uk-margin-remove-bottom">{profile.name}</h2>
                                    <p className="uk-text-meta uk-margin-remove-top uk-margin-remove-bottom">#{this.props.region}</p>
                                    <p className="uk-text-meta uk-margin-remove-top">Level: {profile.summonerLevel}</p>
                                </div>
                            </div>
                        </div>
                        <div className="uk-card-body uk-column-1-2@s uk-text-center uk-column-divider" >
                            { 
                                rankedData.map((ranked) => {
                                    return(
                                        <div key={ranked.leagueId}>
                                            <h3 className="uk-margin-remove-bottom">{ranked.queueType}</h3>
                                            <h4 className="uk-margin-remove-bottom">{ranked.tier + ' ' +ranked.rank}</h4>
                                            <img className="uk-margin-remove-bottom" src={'https://opgg-static.akamaized.net/images/medals/' + (ranked.tier).toLowerCase() + '_' + romanToArabic(ranked.rank) +'.png'} width='170' alt=""/>
                                            <p className="uk-margin-remove-bottom uk-margin-remove-top">Victorias: {ranked.wins}</p>
                                            <p className="uk-margin-remove-bottom uk-margin-remove-top">Derrotas: {ranked.losses}</p>
                                            <p className="uk-margin-remove-top">PL: {ranked.leaguePoints}</p>
                                            <span className="uk-badge uk-padding-small">{ ranked.hotStreak ? 'En racha de victorias' : 'Sin racha de victorias'}</span>
                                        </div>
                                    )
                                })
                            } 
                        </div>
                        <div className="uk-card-footer">
                            <button className='uk-button uk-button-primary uk-button-default' onClick={this.back}><span data-uk-icon="icon:arrow-left"></span></button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
