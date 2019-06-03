import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAllCategories, getCategoryById, setActiveCategory } from '../actions/comics.action';

import './Comics.css';

class Comics extends Component {

    componentDidMount(){
        this.props.getAllCategories();
    }

    handleCategoryClick = (category, index) => {
        const { setActiveCategory, getCategoryById } = this.props;
        setActiveCategory(index);
        getCategoryById(category.id);
    }

    render(){

        const { categoryData: {currentCategory, allCategories}, setActiveCategory, getAllCategories, getCategoryById} = this.props;
        console.log(this.props);

        return (
            allCategories && allCategories.length ? (
                <div className="categories">
                    {
                        allCategories.map((category, index) => (
                            <div
                            key={category.id}
                            className={`Categories__category ${ currentCategory && category.id === currentCategroy.id ? 'Categories__category--active': '' }`}
                            onClick={()=> {this.handleCategoryClick(category, index)}}
                            >
                                {category.name}
                            </div>
                        ))
                    }
                </div>
            ): (
                <div>Error</div>
            )
        );
    }
}

function mapStateToProps(state){
    return {
        categoryData: state.comics
    }
}

export default connect(mapStateToProps,{
    setActiveCategory,
    getAllCategories,
    getCategoryById,
})(Comics);