import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getFavorites, removeFromFavorites } from '../../_actions/favorite.action';

import './Favorites.css';

class Favorites extends Component {

    componentDidMount=()=>{
        this.props.getFavorites()
        console.log(this.props);
    }

    handleRemoveFromFavorites = (favoriteId, massiv, targetComicsId) => {
        const { removeFromFavorites } = this.props;
        let ma = [];
        for(let i = 0; i < massiv.length; i++){
            if(massiv[i].id === targetComicsId){
                continue;
            }
            else{
                ma.push(massiv[i].id)
            }
        }
        removeFromFavorites(favoriteId, ma);
        
        this.props.favoritesData.favorites.forEach(fav =>{
            this.props.favoritesData.favorites["0"].magazines= fav.magazines.filter(el =>{
                return el.id!==targetComicsId;
            })
        })
    }

    render() {
        const {favoritesData: {favorites}} = this.props;
        return (
            favorites && favorites.length ? (
                <div className="Favorites">
                    {
                        favorites.map((fav, index) => (
                            <div
                                key={fav.id}
                            >
                                {
                                    fav.magazines.map((mag,index) => (
                                        <div key={mag.id} >
                                            <h1>{mag.name}</h1><br></br>
                                            <button onClick={()=>{this.handleRemoveFromFavorites(fav.id, fav.magazines, mag.id)}}>Remove</button>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            ): (
                <div></div>
            )
        );
    }
}

function mapStateToProps(state){
    return {
        favoritesData: state.izbrannye,
    }
}

export default connect(mapStateToProps,
    {
        getFavorites,
        removeFromFavorites
    })(Favorites);