import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';
import { getComicsy, setActiveComics } from '../../_actions/comicsy.action';
import { getComments, addComment } from '../../_actions/comments.action';

import './Comments.css';

class Comments extends Component {

	state = {
		text: '',
		rating: 0,
	}

	handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
	}
	
	componentDidMoint(){
		// this.props.getCatalogs();
	}

	handleAddComment = (catalogId, comicsId)=>{
		const{ addComment } = this.props;
		addComment( this.state.text,  this.state.rating, catalogId, comicsId)
	}

	render() {

		const { catalogsData: {currentCatalog}, comicsyData: {currentComics}, commentsData: { currentComicsComments } } = this.props;

		return (
			<div>
				<div>
					Comments:
				</div>
				<div className="Comments__header">
					{currentComics && currentCatalog?(<div>
						<label>You can share your opinion and feeling about this comics with others. Just leave a review!</label><br></br>
						<form onSubmit={this.handleSubmit}>
							<input type="text" placeholder="Leave review" id="text" onChange={this.handleOnChange} value={this.state.text}></input><br/>
							<input type="text" placeholder="Raiting" id="rating" onChange={this.handleOnChange} value={this.state.rating}></input>
							<button className="CommentAdd__button" onClick={()=>{this.handleAddComment(currentCatalog.id,currentComics.id)}}>Add Comment</button>
						</form>
					</div>):(
						<div></div>
					)}
					
				</div>
				{ currentCatalog&& currentComics&& currentComicsComments && currentComicsComments.length ? (
				<div className="currentComicsComments">
					{
						currentComicsComments.map((curcomcomments, index) => (
							<div
								key={curcomcomments.id}
							>
								<h2>{curcomcomments.text}</h2>
								<p>{curcomcomments.rating}</p>
							</div>
						))
					}
				</div>
			): (
				<div>{currentComics && currentCatalog? (
					<div>No Comments</div>
				):(
					<div>Choose comics to see comments</div>
				)}
				</div>
			)} 
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		catalogsData: state.catalog,
		comicsyData: state.comics,
		commentsData: state.comments
	}
}

export default connect(mapStateToProps,
{
	getCatalogs,
    setActiveCatalog,
    getComicsy,
    setActiveComics,
	getComments,
	addComment
})(Comments);