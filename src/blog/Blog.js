import React from 'react';
import { BlogArticle } from './BlogArticle';
import './blog.css';

import sampleData from './article/sample-data.json';

function Blog() {
	return (
		<div className='blog'>
			<BlogArticle
				title={sampleData.title}
				subTitle={sampleData.subTitle}
				author={sampleData.author}
				authorLink={sampleData.authorLink}
				publishDate={sampleData.publishDate}
				body={sampleData.body}
			/>
		</div>
	);
}

export default Blog;
