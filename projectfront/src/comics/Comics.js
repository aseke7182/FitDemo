import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllCatalogs, setActiveCatalog, getAllComicsOfCatalog } from '../actions/comics.action';
import './Comics.css';

class Comics extends Component {

    componentDidMount(){
        this.props.getAllCatalogs();
    }

    handleCatalogClick = (catalog, index) => {
        const { setActiveCatalog, getAllComicsOfCatalog } = this.props;
        setActiveCatalog(index);
        getAllComicsOfCatalog(catalog.id)
        console.log(this.props);
    }

    render() {
        
        const { comicsData: { catalogs, currentCatalog, currentCatalogComics}, setActiveCatalog } = this.props;

        return (

            catalogs && catalogs.length ? (
                <div className="Catalogs">
                    {
                        catalogs.map((catalog, index) => (
                            <div
                                
                                key={catalog.id}
                                className={`Catalogs__catalog ${ currentCatalog && catalog.id === currentCatalog.id ? 'Catalogs__catalog--active': ''}`}
                                onClick={()=> {this.handleCatalogClick(catalog, index)}}
                            >
                                {catalog.name}
                                <img className="Catalog__picture" src={catalog.image}/>
                            </div>
                        ))
                    }
                </div>

            ):(
                <div>
                    Calalogs are unavailable!
                </div>
            )
        );
    }
}

function mapStateToProps(state){
    return {
        comicsData: state.comics
    }
}

export default connect(mapStateToProps,
    {
        getAllCatalogs,
        getAllComicsOfCatalog,
        setActiveCatalog,
    })(Comics);