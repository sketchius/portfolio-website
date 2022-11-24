import React from 'react';

export const BlogCard = props => {
	return (
		<div className='blog-card'>
			<img src={props.mainImage} alt={props.mainImageAltz} />
			<h2>{props.title}</h2>
			<p>{props.caption}</p>
			<time>{props.publishDate}</time>
		</div>
	);
};
