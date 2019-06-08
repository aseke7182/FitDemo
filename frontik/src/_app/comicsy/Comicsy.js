import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';
import { getComicsy, setActiveComics } from '../../_actions/comicsy.action';
import { getComments } from '../../_actions/comments.action';
import { addToBasket } from '../../_actions/basket.action';

import './Comicsy.css';

class Comicsy extends Component {

    componentDidMount(){
        // this.props.getCatalogs();
    }

    handleComicsyClick = (catalogId, comics, index) => {
        const { setActiveComics, getComments } = this.props;
        setActiveComics(index);
        getComments(catalogId, comics.id);
    }

    handleAddToBasket = (comics) => {
        const { addToBasket } = this.props;
        addToBasket(comics);
    }

    render() {

        const { catalogsData: {catalogs, currentCatalog}, setActiveCatalog, comicsyData: {currentCatalogComicsy}, getComicsy, setActiveComics, getComments, addToBasket, basketData:{ basketItems} } = this.props;
        
        return (
            <div>
                <div>
                    Comics List:
                    <NavLink to="/catalogs">Go Back</NavLink>
                </div>
                { currentCatalogComicsy && currentCatalogComicsy.length ? (
                <div className="CurrentCatalogComics">
                    {
                        currentCatalogComicsy.map((curcatcomics, index) => (
                            <div
                                key={curcatcomics.id}
                                className={`CurrentCatalogComics__comics`}
                                onClick={()=>{this.handleComicsyClick(curcatcomics.catalog, curcatcomics, index)}}
                            >
                                <NavLink to={this.props.location.pathname + '/comments'} >
                                <p>{curcatcomics.name}</p>
                                <br></br>
                                <img src={curcatcomics.image}></img>
                                <br></br>
                                <p className="price">₸{ curcatcomics.price}</p>
                                <br></br>
                                </NavLink>
                                <button onClick={ () => {this.handleAddToBasket(curcatcomics)}}>Add to Basket</button>
                            </div>
                        ))
                    }
                </div>
            ): (
                <div>No Comics for this Catalog</div>
            )}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        catalogsData: state.catalog,
        comicsyData: state.comics,
        basketData: state.basket,
    }
}

export default connect(mapStateToProps,
    {
        getCatalogs,
        setActiveCatalog,
        getComicsy,
        setActiveComics,
        getComments,
        addToBasket
    })(Comicsy);