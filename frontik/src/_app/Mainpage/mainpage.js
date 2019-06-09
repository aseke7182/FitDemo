import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getFavorites} from '../../_actions/favorite.action';
// import {}
import './mainpage.css'

export class mainpage extends Component {
    
    componentDidMount=()=>{
        if(localStorage.getItem('token')!==null){
            this.props.getFavorites()
            // const { favoritesData: { chosenMagazines} } = this.props;
            // console.log(chosenMagazines);
            // this.props.favoritesData.chosenMagazines = chosenMagazines; 
            // console.log(this.props);
        }
    }

    render() {
        const {favoritesData: {favorites}} = this.props;
        return (
            <div>
                <h1> MAIN PAGE</h1>
                <p> SOME INFORMATION</p>
            </div>
        )
    }
}


function mapStateToProps(state){
    // console.log(state);
    return{
        // chosenMagazines: state.izbrannye,
        favoritesData: state.izbrannye,
    }
}

export default connect(mapStateToProps,
    {
        getFavorites
    })(mainpage)
