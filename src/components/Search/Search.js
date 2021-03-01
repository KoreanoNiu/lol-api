import React, { Component } from 'react'
import UserData from '../UserData/UserData'
import './search.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            region: 'LAN',
            status: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();

        if (this.state.name !== '' && this.state.region !== '') {
            this.setState({
                status: true
            });
        }
    }
    
    handleCallback = (childData) =>{
        this.setState({status: childData})
    }

    render() {
        const { name, status, region } = this.state;
        return (
            <div>
                { status ?
                    <UserData name={name} region={region} parentCallback={this.handleCallback}></UserData> 
                    : 
                    <form className="uk-grid-small uk-animation" data-tabindex="0" data-uk-grid onSubmit={this.handleSubmit}>
                        <div className="uk-width-1-2@s uk-search uk-search-default uk-margin-top uk-animation-slide-top-small">
                            <button data-uk-search-icon className="uk-margin-left"></button>
                            <input className="uk-search-input" type="search" placeholder="Nombre de Invocador" value={name} onChange={this.handleChange} name='name'/>
                        </div>
                        <div className="uk-width-1-6@s uk-margin-top uk-animation-slide-top-small">
                            <select className="uk-select" name='region' onChange={this.handleChange}>
                                <option>LAN</option>
                                <option>NA</option>
                            </select>
                        </div>
                        <div className="uk-width-1-3@s uk-margin-top uk-animation-slide-top-small">
                            <button className="uk-button uk-button-primary uk-width-1-1">Buscar
                                <span data-uk-icon="icon:search" className='uk-margin-small-left'></span>
                            </button>
                        </div>
                    </form>
                }
            </div>  
        )
    }
}
