import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';
import { getComicsy, setActiveComics } from '../../_actions/comicsy.action';
import { getComments } from '../../_actions/comments.action';

import './Catalogs.css';

class Catalogs extends Component {

    componentDidMount = () => {
        this.props.getCatalogs();
    }

    handleCatalogClick = (catalog, index) => {
        const { setActiveCatalog, getComicsy } = this.props;
        setActiveCatalog(index);
        getComicsy(catalog.id);
    }

    render() {
        const { catalogsData: {catalogs, currentCatalog}, setActiveCatalog, comicsyData: {currentCatalogComicsy, currentComics}, getComicsy, setActiveComics, commentsData: { currentComicsComments }, getComments } = this.props;

        return (

            catalogs && catalogs.length ? (
                <div className="Catalogs" >
                    {
                        catalogs.map((catalog, index) => (
                            <div
                                key={catalog.id}
                                className={`Catalogs__catalog ${ currentCatalog && catalog.id === currentCatalog.id ? 'Catalog__catalog--active': ''}`}
                                onClick={()=> {this.handleCatalogClick(catalog, index)}}
                            >
                                {catalog.name}
                                <img className="Catalog__picture" src={catalog.image} alt="here shoul be img" />
                            </div>
                        ))
                    }
                </div>
            ):(
                <div>No Catalogs</div>
            )
        );
    }
}

function mapStateToProps(state){
    return {
        catalogsData: state.catalog,
        comicsyData: state.comics,
        commentsData: state.comments,
    }
}

export default connect(mapStateToProps,
    {
        getCatalogs,
        setActiveCatalog,
        getComicsy,
        setActiveComics,
        getComments
    })(Catalogs);