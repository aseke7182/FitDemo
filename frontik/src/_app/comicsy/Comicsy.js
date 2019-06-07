import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';
import { getComicsy } from '../../_actions/comicsy.action';

import './Comicsy.css';

class Comicsy extends Component {

    componentDidMount(){
        this.props.getCatalogs();
    }

    render() {

        const { catalogsData: {catalogs, currentCatalog}, setActiveCatalog, comicsyData: {currentCatalogComicsy}, getComicsy } = this.props;

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
        comicsyData: state.comics
    }
}

export default connect(mapStateToProps,
    {
        getCatalogs,
        setActiveCatalog,
        getComicsy
    })(Comicsy);