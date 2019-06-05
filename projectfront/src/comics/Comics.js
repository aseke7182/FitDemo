import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllCatalogs, setActiveCatalog } from '../actions/catalogs.action';
import { getAllComicsOfCatalog } from '../actions/comics.action';

import './Comics.css';

class Comics extends Component {

    componentDidMount(){
        this.props.getAllCatalogs();
    }

    render(){

        const { catalogsData: {catalogs, currentCatalog}, setActiveCatalog, comicsData: {currentCatalogComics} } = this.props;
        console.log(this.props);

        return (
            <div>
                <div>
                    Comics:<br/>
                </div>
                { currentCatalogComics && currentCatalogComics.length ? (
                <div className="CurrentCatalogComics">
                    {
                        currentCatalogComics.map((curcatcomics, index) => (
                            <div
                                key={curcatcomics.id}
                                className={`AllComics__catalogcomics`}
                            >
                                {curcatcomics.name}
                                {curcatcomics.price}
                            </div>
                        ))
                    }
                </div>
            ): (
                <div>No Comics</div>
            )}
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        catalogsData: state.catalog,
        comicsData: state.comics,
    }
}

export default connect(mapStateToProps,
    {
        getAllCatalogs,
        setActiveCatalog,
        getAllComicsOfCatalog,
    })(Comics)