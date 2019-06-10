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
		console.log(comicsId)
	}

	render() {

		const { catalogsData: {currentCatalog}, comicsyData: {currentComics}, commentsData: { currentComicsComments } } = this.props;

		return (
			<div>
				<div className="comments__title">
					<p>Comments Section:</p>
				</div>
				<div className="Comments__header">
					{currentComics && currentCatalog?(<div>
						<label className="please__choose">You can share your opinion and feelings about this comics with others. Just leave a review!</label><br></br>
						<form onSubmit={this.handleSubmit}>		
							<div className="submit__wrapper">
								<textarea className="comment__text" placeholder="Leave review" id="text" onChange={this.handleOnChange} value={this.state.text}></textarea>
								<div className="rating__wrapper">
									<label>Raiting </label>
									<select className="raiting" id="rating" onChange={this.handleOnChange} value={this.state.rating}><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select>
								</div>
								<button className="CommentAdd__button btn btn-primary" onClick={()=>{this.handleAddComment(currentCatalog.id,currentComics.id)}}>Add Comment</button>
							</div>		
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
								<div className="response__wrapper">
									<h2 className="response__message">{curcomcomments.text}</h2>
									<p className="response__raiting">Raiting: {curcomcomments.rating}</p>
								</div>
							</div>
						))
					}
				</div>
			): (
				<div>{currentComics && currentCatalog? (
					<div className="downward" style={{marginLeft: 5 + '%'}}>No Comments</div>
				):(
					<div className="downward" style={{marginLeft: 5 + '%'}}>Please choose appropriate comics to see comments</div>
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