import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';
import { getComicsy, setActiveComics } from '../../_actions/comicsy.action';
import { getComments } from '../../_actions/comments.action';

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

    render() {

        const { catalogsData: {catalogs, currentCatalog}, setActiveCatalog, comicsyData: {currentCatalogComicsy}, getComicsy, setActiveComics, getComments } = this.props;

        return (
            <div>
                <div>
                    Comics List:
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
                                <p>{curcatcomics.name}</p>
                                <br></br>
                                <img src={curcatcomics.image}></img>
                                <br></br>
                                <p className="price">₸{ curcatcomics.price}</p>
                                <br></br>
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
    }
}

export default connect(mapStateToProps,
    {
        getCatalogs,
        setActiveCatalog,
        getComicsy,
        setActiveComics,
        getComments
    })(Comicsy);