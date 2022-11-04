import React from 'react';

export const BlogArticle = props => {
	return (
		<main className='blog-article'>
			<h1>{props.title}</h1>
			<strong>{props.subTitle}</strong>
			<div className='publish-information'>
				<address>
					<a href={props.authorLink} rel='author'>
						{props.author}
					</a>
				</address>
				<time>{props.publishDate}</time>
			</div>
			<article>{props.body}</article>
		</main>
	);
};
