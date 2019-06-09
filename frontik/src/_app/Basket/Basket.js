import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Basket.css';
import { removeComics, createBasket, message } from '../../_actions/basket.action';

class Basket extends Component {

    handleRemoveComics = (comics) => {
        const { removeComics } = this.props;
        removeComics(comics);
    }

    handleBuyComics = (orderStatus, massiv) => {
        const { createBasket, message } = this.props;
        let ma = [];
        let totalcost = 0;
        let username = localStorage.getItem('username');
        username = username.charAt(0).toUpperCase() + username.substring(1).toLowerCase();
        let text = username + ', magazines, that you bought:\n\n';
        for(let i = 0; i < massiv.length; i++){
            ma.push(massiv[i].id);
            text += i+1 + '. ' + massiv[i].name + '\n';
            totalcost += massiv[i].price;
        }
        text += '\n Total Price: ' + totalcost;
        createBasket(orderStatus, ma);
        message( text, localStorage.getItem('email'));
        this.props.history.push('');
        console.log(text);
    }

    render() {

        const { basketData: {basketItems}} = this.props;

        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet"></link>
                
                {basketItems && basketItems.length ? (
                <div className="BasketItems">
                {
                    <div className="title">
                        <p>Items in Basket</p>
                    </div>
                }
                    {
                        basketItems.map((basketitemi, index) => (
                            <div
                                key={basketitemi.id}
                            >
                                <div className="BasketItems__params">
                                    <div className="Basket__items__insides">
                                        <label><p className="move">Comics Name</p> <p className="insides move">{basketitemi.name}</p></label>
                                        <label><p className="move">Price</p><p className="insides move">₸ {basketitemi.price}</p></label>
                                        <button className="remove__button" onClick={()=>{this.handleRemoveComics(basketitemi)}}>Remove From Basket</button>
                                    </div> 
                                </div>
                                
                            </div>
                        ))
                    }{
                        <button className="buy__button" onClick={()=>{this.handleBuyComics('ok', basketItems)}}>Buy Comics</button>
                    }
                </div>
                
                
            ): (
                <div className="EmptyBasket">Basket Is Empty</div>
            )}
            </div>
        );
    }
}

function mapStateToProps(state){
    return { 
        basketData: state.basket,
    }
}

export default connect(mapStateToProps,{
    removeComics,
    createBasket,
    message
})(Basket)
