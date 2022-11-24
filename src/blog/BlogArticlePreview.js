import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export const BlogArticlePreview = props => {
	return (
		<div className='blog-card'>
			<div className='left-curly-bracket' />
			<a className='content' href={`/blog/${props.data.reference}`}>
				<div className='left'>
					<div className='image-holder'>
						<Image src={props.data.mainImage} alt={props.data.mainImageAltz} />
					</div>
				</div>
				<div className='details'>
					<h2>{props.data.title}</h2>
					<p>{props.data.caption}</p>
					<time>{props.data.publishDate}</time>
				</div>
			</a>
			<div className='right-curly-bracket' />
		</div>
	);
};
