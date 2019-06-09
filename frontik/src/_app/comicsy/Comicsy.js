import React, { Component } from 'react';
import Comments from '../comments/Comments';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';
import { getComicsy, setActiveComics, createComicss } from '../../_actions/comicsy.action';
import { getComments } from '../../_actions/comments.action';
import { addToBasket } from '../../_actions/basket.action';
import { addToFavorites, getFavorites, chooseFavorites } from '../../_actions/favorite.action';
import './Comicsy.css';

class Comicsy extends Component {

    state = {
        name: '',
        price: 0,
        image: null,
        // favoriteId: this.props.favoritesData.favorites.id
    }

    componentDidMount(){
        // this.props.getCatalogs();
        this.props.getFavorites()
        // console.log(this.props.favoritesData.favorites[0]);        
    }

    handleClickGoBack(){
        // console.log(this.props);
        this.props.catalogsData.currentCatalog = false;
        this.props.comicsyData.currentComics = false; 
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

    handleAddToFavorites = (favoriteId, massiv) => {
        const { addToFavorites } = this.props;
        let ma= []
        for(let i = 0; i < massiv.length; i++){
            ma.push(massiv[i]);
        }
        favoriteId = favoriteId["0"].id
        console.log(ma)
        addToFavorites(favoriteId, ma);
    }

    handleChooseMagazines = (comics) => {
        const { chooseFavorites } =this.props;
        chooseFavorites(comics);
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      };

    handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        })
      };
    
    handleSubmit = (e) => {
        e.preventDefault();
        const { createComicss } = this.props;
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('name', this.state.name);
        form_data.append('price', this.state.price);
        form_data.append('catalog',this.props.match.params.comics_id);
        createComicss(form_data, this.props.catalogsData.currentCatalog.id);
    }

    render() {
        const { catalogsData: {catalogs, currentCatalog}, setActiveCatalog, comicsyData: {currentCatalogComicsy}, getComicsy, setActiveComics, getComments, addToBasket, basketData:{ basketItems}, favoritesData: {favorites, chosenMagazines} } = this.props;
        
        return (
            <div>
                <div>
                    Comics List:
                    <NavLink to="/catalogs" onClick={()=>{this.handleClickGoBack()}}>Go Back</NavLink>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="name" placeholder="name" onChange={this.handleChange} value={this.state.name} required />
                        <input type="text" id="price" placeholder="Price" onChange={this.handleChange} value={this.state.price} required />
                        <input type="file" id="image" onChange={this.handleImageChange} required accept="image/png, image/jpeg" />
                        <input type="submit"/>
                    </form>
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
                                {/* <NavLink to={this.props.location.pathname + '/comments'} > */}
                                {/* {console.log(curcatcomics)} */}
                                <p>{curcatcomics.name}</p>
                                <br></br>
                                <img src={curcatcomics.image} alt={curcatcomics.image} width="200px" ></img>
                                <br></br>
                                <p className="price">₸{ curcatcomics.price}</p>
                                <p>Added: at {curcatcomics.date}</p>
                                <p>By {curcatcomics.owner.username}</p>
                                {/* </NavLink> */}
                                <button onClick={ () => {this.handleAddToBasket(curcatcomics)}}>Add to Basket</button><br></br>
                                <button onClick={()=>{this.handleChooseMagazines(curcatcomics)}}>Choose to add to Favorites</button>
                            </div>
                        ))
                    }                    
                </div>
                ): (
                <div>No Comics for this Catalog</div>
            )}
            <button onClick={()=>{this.handleAddToFavorites(this.props.favoritesData.favorites, chosenMagazines)}}>Move To Favorites</button>
            <Comments/>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        catalogsData: state.catalog,
        comicsyData: state.comics,
        basketData: state.basket,
        favoritesData: state.izbrannye,
    }
}

export default connect(mapStateToProps,
    {
        getCatalogs,
        setActiveCatalog,
        getComicsy,
        setActiveComics,
        getComments,
        addToBasket,
        createComicss,
        addToFavorites,
        getFavorites,
        chooseFavorites,
        addToFavorites
    })(Comicsy);