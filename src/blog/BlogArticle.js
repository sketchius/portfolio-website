import React from 'react';
import './blog.css';
import avatar from './avatar.jpg';

export const BlogArticle = props => {
	return (
		<main className='blog-content'>
			<h1>
				{props.title}
				<small>{props.subTitle}</small>
			</h1>

			<div className='publish-information'>
				<address>
					<img src={avatar} alt='author avatar' />
					<a href={props.authorLink} rel='author'>
						{props.author}
					</a>
				</address>
				<div className='publish-date'>
					Published
					<time>{props.publishDate}</time>
				</div>
			</div>
			<article>{props.body}</article>
		</main>
	);
};
