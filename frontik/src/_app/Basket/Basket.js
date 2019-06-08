import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Basket.css';
import { removeComics, createBasket } from '../../_actions/basket.action';

class Basket extends Component {

    handleRemoveComics = (comics) => {
        const { removeComics } = this.props;
        removeComics(comics);
    }

    handleBuyComics = (orderStatus, massiv) => {
        const { createBasket } = this.props;
        let ma = []
        for(let i = 0; i < massiv.length; i++){
            ma.push(massiv[i].id);
        }
        createBasket(orderStatus, ma);
    }

    render() {

        const { basketData: {basketItems, orderDetail}, removeComics, createBasket} = this.props;

        return (
            <div>
                <div>
                    Basket Items:
                </div>
                {basketItems && basketItems.length ? (
                <div className="BasketItems">
                    {
                        basketItems.map((basketitemi, index) => (
                            <div
                                key={basketitemi.id}
                            >
                                <p>{basketitemi.id}</p>
                                <p>{basketitemi.name}</p>
                                <p>{basketitemi.price}</p>
                                <button onClick={()=>{this.handleRemoveComics(basketitemi)}}>Remove From Basket</button>
                            </div>
                        ))
                    }{
                        <button onClick={()=>{this.handleBuyComics('ok', basketItems)}}>Buy Comics</button>
                    }
                </div>
                
                
            ): (
                <div>Basket Is Empty</div>
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
    createBasket
})(Basket)
