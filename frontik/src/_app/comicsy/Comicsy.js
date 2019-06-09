import React, { Component } from 'react';
import Comments from '../comments/Comments';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';
import { getComicsy, setActiveComics, createComicss, search } from '../../_actions/comicsy.action';
import { getComments } from '../../_actions/comments.action';
import { addToBasket } from '../../_actions/basket.action';
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
        max_price: ''
    }

    componentDidMount(){
        const {getComicsy} = this.props;
        getComicsy(this.props.match.params.comics_id);
    }

    handleClickGoBack(){
        console.log(this.props);
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
        const { comicsyData: {currentCatalogComicsy} } = this.props;
        
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
                <form onSubmit={this.handleSearch} >
                    <input type="text" id="search" placeholder="search by name" onChange={this.handleChange} value={this.state.search} />
                    <select id="orderby" onChange={this.handleChange} value={this.setState.orderby} >
                        <option value="name">name</option>
                        <option value="date">date</option>
                        <option value="price">price</option>
                    </select>
                    <input type="checkbox" checked={this.state.asc} onChange={this.handleChangeAsc}/>
                    <input type="text" id="min_price" placeholder="minimum price" onChange={this.handleChange} value={this.state.min_price}/>
                    <input type="text" id="max_price" placeholder="maximum price" onChange={this.handleChange} value={this.state.max_price}/>
                    <input type="submit" />
                </form>
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
                                <button onClick={ () => {this.handleAddToBasket(curcatcomics)}}>Add to Basket</button>
                            </div>
                        ))
                    }                    
                </div>
                ): (
                <div>No Comics for this Catalog</div>
            )}
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
        search,
    })(Comicsy);