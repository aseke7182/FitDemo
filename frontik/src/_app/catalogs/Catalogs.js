import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';

import './Catalogs.css';

class Catalogs extends Component {

    componentDidMount = () => {
        this.props.getCatalogs();
    }

    handleCatalogClick = (user, index) => {
        const { setActiveCatalog, } = this.props;
        setActiveCatalog(index);
    }

    render() {
        const { catalogsData: { catalogs, currentCatalog} } = this.props;

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
                                <img src={catalog.image} alt="sorry, no img" />
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

    }
}

export default connect(mapStateToProps,
    {
        getCatalogs,
        setActiveCatalog,
    })(Catalogs);