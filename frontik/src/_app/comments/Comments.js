import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCatalogs, setActiveCatalog } from '../../_actions/catalog.action';
import { getComicsy, setActiveComics } from '../../_actions/comicsy.action';
import { getComments } from '../../_actions/comments.action';

import './Comments.css';

class Comments extends Component {

	componentDidMoint(){
		// this.props.getCatalogs();
	}

	render() {

		const { catalogsData: {catalogs, currentCatalog}, setActiveCatalog, comicsyData: {currentCatalogComicsy, currentComics}, getComicsy, setActiveComics, commentsData: { currentComicsComments }, getComments } = this.props;

		return (
			<div>
				<div>
					Comments:
				</div>
				{ currentComicsComments && currentComicsComments.length ? (
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
				<div>No Comments</div>
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
    getComments
})(Comments);