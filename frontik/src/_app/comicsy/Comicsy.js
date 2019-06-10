import React, { Component } from 'react';
import Comments from '../comments/Comments';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';
import { getComicsy, setActiveComics, createComicss, search } from '../../_actions/comicsy.action';
import { getComments } from '../../_actions/comments.action';
import { addToBasket } from '../../_actions/basket.action';
import { addToFavorites, getFavorites, chooseFavorites } from '../../_actions/favorite.action';
import './Comicsy.css';

class Comicsy extends Component {

    state = {
        name: '',
        price: 0,
        image: null,
        search: '',
        orderby: 'name',
        asc: false,
        min_price: '',
        max_price: '',
        favoriteIds: []// this.props.favoritesData.favorites["0"].magazines.
        // favoriteId: this.props.favoritesData.favorites.id
    }

    componentDidMount(){
        this.props.getFavorites()
        // let arr = []
        // console.log(this.props);
        // this.props.favoritesData.favorites["0"].magazines.forEach(m =>{
            // arr.push(m.id);
        // })
        // this.setState({
            // favoriteIds: arr
        // })
        // console.log(this.state);
        // this.props.favoritesData.chosenMagazines = [1,2,3];
        // console.log(this.props);
        const {getComicsy} = this.props;
        getComicsy(this.props.match.params.comics_id);
        // let arr = [];
        // this.props.favoritesData.favorites["0"].magazines.forEach(el =>{
            // arr.push(el.id);
        // })
        // this.props.favoritesData.chosenMagazines = arr;
        // let a = JSON.parse(this.props.favoritesData.favorites);
        // console.log(this.props.favoritesData.favorites[""+ "0" ]);
    }

    handleClickGoBack(){
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
        favoriteId["0"].magazines.forEach(element => {
            ma.push(element.id);
        });
        favoriteId = favoriteId["0"].id
        // console.log(ma)
        addToFavorites(favoriteId, ma);
        // console.log(this.props);
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

    handleSearch = (e) => {
        if(this.state.min_price > this.state.max_price){
            let a = this.state.min_price;
            this.setState({
                min_price: this.state.max_price,
                max_price: a
            })
        }
        e.preventDefault();
        const {search} = this.props;
        let ser = [
            this.state.search,this.state.orderby,Math.min(this.state.min_price,this.state.max_price),Math.max(this.state.min_price,this.state.max_price)
        ]
        if(this.state.asc) ser[1] = '-' + ser[1];
        search(ser,this.props.catalogsData.currentCatalog.id );
    }

    handleChangeAsc = (e) => {
        this.setState({
            asc : !this.state.asc
        })
    }

    render() {
        const { comicsyData: {currentCatalogComicsy}, favoritesData: { chosenMagazines} } = this.props;
        
        return (
            <div>
                <div>
                    <div className="zzzz">
                        <p >Comics List: <NavLink to="/catalogs" className="back__catalog" onClick={()=>{this.handleClickGoBack()}}>Go Back</NavLink></p>
                    </div>
                    
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="comics__create__wrapper">
                            <h1 className="comics__title__add">Add Your Comics</h1>
                            <input className="comics__name" style={{marginBottom: 1 + '%'}} type="text" id="name" placeholder="name" onChange={this.handleChange} value={this.state.name} required />
                            <input className="comics__price" style={{marginBottom: 1 + '%'}} type="text" id="price" placeholder="Price" onChange={this.handleChange} value={this.state.price} required />
                            <input className="comics__image" type="file" id="image" onChange={this.handleImageChange} required accept="image/png, image/jpeg" />
                            <input className="comics__button btn btn-success" type="submit"/>
                        </div>
                    </form>
                </div>
                <form onSubmit={this.handleSearch} >
                    <div className="search__notation"><p >Note: You can enter name of the comics inside Search input area to find appropriate comics. Options fields offers you possibility to order comics list by name, date, price(ascending order by default). You can tick checkbox which will allow you to order comics list in descending order. And finaly sort comics my minimum and maximum prices together or separetely</p></div>
                    <div className="search__form__wrapper">
                        <input className="search__name" type="text" id="search" placeholder="Search by name" onChange={this.handleChange} value={this.state.search} />
                        <select className="search__order__options" id="orderby" onChange={this.handleChange} value={this.setState.orderby} >
                            <option value="name">name</option>
                            <option value="date">date</option>
                            <option value="price">price</option>
                        </select>
                        <input className="search__reverse__ordering" type="checkbox" checked={this.state.asc} onChange={this.handleChangeAsc}/>
                        <input className="search__name" type="text" id="min_price" placeholder="minimum price" onChange={this.handleChange} value={this.state.min_price}/>
                        <input className="search__name" type="text" id="max_price" placeholder="maximum price" onChange={this.handleChange} value={this.state.max_price}/>
                        <input className="btn btn-warning" type="submit" />
                    </div>    
                </form>
                { currentCatalogComicsy && currentCatalogComicsy.length ? (
                <div className="CurrentCatalogComics">
                    
                        {
                        currentCatalogComicsy.map((curcatcomics, index) => (
                            <div
                                key={curcatcomics.id}
                                className={`CurrentCatalogComics__comics `}
                                onClick={()=>{this.handleComicsyClick(curcatcomics.catalog, curcatcomics, index)}}
                            >
                                {/* <NavLink to={this.props.location.pathname + '/comments'} > */}
                                {/* {console.log(curcatcomics)} */}
                                <div className="col">
                                    <p className="response__comics__title">{curcatcomics.name}</p>
                                    <br></br>
                                    <img className="response__comics__image" src={curcatcomics.image} alt={curcatcomics.image} width="500px" height="500px" ></img>
                                    <br></br>
                                    <p className="response__comics__price">₸ { curcatcomics.price}</p>
                                    <p className="response__comics__date">Added at: {curcatcomics.date}</p>
                                    <p className="response__comics__owner">By {curcatcomics.owner.username}</p>
                                    {/* </NavLink> */}
                                    <div className="row">
                                        <div className="col"><button className="add__basket btn btn-primary" onClick={ () => {this.handleAddToBasket(curcatcomics)}}>Add to Basket</button><br></br></div>
                                        <div className="col"><button className="add__basket btn btn-success" onClick={()=>{this.handleChooseMagazines(curcatcomics.id)}}>Choose to add to Favorites</button></div>
                                    </div>
                                    
                                </div>
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
        search
    })(Comicsy);