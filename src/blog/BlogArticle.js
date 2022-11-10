import React, { useEffect, useState } from 'react';
import './blog.css';
import avatar from './avatar.jpg';

const BlogArticleContent = props => {
	return (
		<main className='blog-content'>
			<img src={props.mainImage} alt={props.mainImageAltz} className='medium-image header-image' />;
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

export const BlogArticle = props => {
	const [data, setData] = useState(undefined);

	useEffect(() => {
		import(`../blog/article/${props.reference}/index.js`).then(blog => {
			if (blog) setData(blog.data);
		});
	}, []);
	return (
		<div className='blog'>
			{data && (
				<BlogArticleContent
					mainImage={data.mainImage}
					mainImageAlt={data.mainImageAlt}
					title={data.title}
					subTitle={data.subTitle}
					author={data.author}
					authorLink={data.authorLink}
					publishDate={data.publishDate}
					body={data.body}
				/>
			)}
		</div>
	);
};
