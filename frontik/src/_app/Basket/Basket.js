import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Basket.css'

class Basket extends Component {
    render() {

        const { basketData: {basketItems}} = this.props;

        return (
            <div>
                <div>
                    Basket Items:
                </div>
                {console.log(basketItems)}
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
                            </div>
                        ))
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
        basketData: state.basket
    }
}

export default connect(mapStateToProps)(Basket)
