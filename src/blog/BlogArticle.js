import React, { useEffect, useState } from 'react';
import avatar from './avatar.jpg';
import { useParams } from 'react-router-dom';
import Image from 'next/image';

const BlogArticleContent = props => {
	return (
		<main className='blog-content'>
			<Image src={props.mainImage} alt={props.mainImageAltz} className='medium-image header-image' />
			<h1>
				{props.title}
				<small>{props.subTitle}</small>
			</h1>
			<div className='publish-information'>
				<address>
					<Image src={avatar} alt='author avatar' />
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
			<div className="bottom-spacer"></div>
		</main>
	);
};

export const BlogArticle = props => {
	return (
		<div className='blog'>
			<BlogArticleContent
				mainImage={props.data.mainImage}
				mainImageAlt={props.data.mainImageAlt}
				title={props.data.title}
				subTitle={props.data.subTitle}
				author={props.data.author}
				authorLink={props.data.authorLink}
				publishDate={props.data.publishDate}
				body={props.data.body}
			/>
		</div>
	);
};
