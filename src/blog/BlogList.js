import { useState, useEffect } from 'react';
import { BlogArticlePreview } from './BlogArticlePreview';

export const BlogList = props => {
	const blogList = ['deconstructed-blueprint', 'robot-alien-game'];
	const [blogData, setBlogData] = useState(undefined);
	useEffect(() => {
		const loadData = async () => {
			let data = [];
			data = await Promise.all(
				blogList.map(async blogReference => {
					let data;
					await import(`../blog/article/${blogReference}/index.js`).then(blog => {
						data = blog.data;
						data.reference = blogReference;
					});
					return data;
				})
			);
			setBlogData(data);
		};
		loadData();
	}, []);

	const getBlogListElements = () => {
		if (blogData) {
			// console.log(blogData);
			return blogData
				.sort((a, b) => a.title > b.title)
				.map((blog, i) => {
					return <BlogArticlePreview data={blog} />;
				});
		}
	};

	return <div className='blog-list'>{getBlogListElements()}</div>;
};
