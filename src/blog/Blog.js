import React from 'react';
import { BlogArticle } from './BlogArticle';
import './blog.css';

import { data, Body } from './article/deconstructed-blueprint/index';

function Blog() {
	return (
		<div className='blog'>
			<BlogArticle
				title={data.title}
				subTitle={data.subTitle}
				author={data.author}
				authorLink={data.authorLink}
				publishDate={data.publishDate}
				body={<Body />}
			/>
		</div>
	);
}

export default Blog;
