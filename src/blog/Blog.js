import React from 'react';
import { BlogArticle } from './BlogArticle';

import sampleData from './article/sample-data.json';

function Blog() {
	return (
		<BlogArticle
			title={sampleData.title}
			subTitle={sampleData.subTitle}
			author={sampleData.author}
			authorLink={sampleData.authorLink}
			publicationDate={sampleData.publicationDate}
			body={sampleData.body}
		/>
	);
}

export default Blog;
