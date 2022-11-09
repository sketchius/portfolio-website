import { useState } from 'react';
import './Components.css';

export const BlogCard = props => {
	const [content, setContent] = useState(<div>Loading...</div>);
	import(`../blog/article/${props.article}/index.js`).then(blog => {
		setContent(blog.Card);
	});
	return <div> {content}</div>;
};
