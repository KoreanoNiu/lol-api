import React, { Component } from 'react'
import API from '../../api/service';

export default class UserData extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        let ApiObject = new API(this.props.region);

        console.log(ApiObject.getSummonerByName(this.props.name));
    }
    render() {
        return (
            <div className="uk-flex uk-flex-center uk-animation" data-tabindex="0">
                <div className="uk-card uk-card-default uk-width-1-2@m uk-margin-medium-top uk-box-shadow-small uk-animation-slide-top-small">
                    <div className="uk-card-header">
                        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                            <div>
                                <img className="uk-border-circle" width="100" height="100" src="http://ddragon.leagueoflegends.com/cdn/11.4.1/img/profileicon/588.png" alt=''/>
                            </div>
                            <div className="uk-width-expand">
                                <h2 className="uk-card-title uk-margin-remove-bottom">KoreanoNiu</h2>
                                <p className="uk-text-meta uk-margin-remove-top">#lan</p>
                            </div>
                            <div className="uk-card-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
