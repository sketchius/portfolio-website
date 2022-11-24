import React from 'react';

export const getBlogData = blogIdentifier => {
	let blogData;
	import(`../blog/article/${blogIdentifier}/index.js`).then(blog => {
		blogData = blog.data;
		console.log('Got blog.data');
		console.log(blog);
		console.log(blog.data);
	});
	return blogData;
};
