import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getFavorites} from '../../_actions/favorite.action';
import './mainpage.css'

export class mainpage extends Component {
    
    componentDidMount=()=>{
        if(localStorage.getItem('token')!==null){
            this.props.getFavorites()
        }
    }

    render() {
        return (
            <div className="aboutus" >
                <div className="down">
                    <p>Buy Your Favorite Magazines</p>
                    <p>Or Sell It To Someone</p>
                    <p>In In a Few Clicks</p>    
                </div>
                <br/><br/><br/>
                <ol>
                    <br/>
                    <li>Facts:</li>
                    <li>1. Over 2 000 000 Customers</li>
                    <li> All The World Every Year</li>
                    <li>2. 10 Years On the Global Market</li>
                    <li>3. Quality Assurance</li>
                    <li>4. Fast Delivery </li>
                </ol>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gmail</th>
                            <th>Github</th>
                            <th>PhoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aseke</td>
                            <td>askar_pvl_kz@mail.com</td>
                            <td><a href="https://github.com/aseke7182">Aseke7182</a></td>
                            <td>87086813341</td>
                        </tr>
                        
                        <tr>
                            <td>Arman</td>
                            <td>kizatov.armashka.05@gmail.com</td>
                            <td><a href="https://github.com/KizatovArman">KizatovArman</a></td>
                            <td>87087665785</td>
                        </tr>
                    </tbody>
                </table>
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
