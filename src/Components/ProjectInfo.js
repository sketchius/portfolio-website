import { SvgImage } from './SvgImage';
import Image from 'next/image';

const getTagContent = tags => {
	return (
		<div className='bracket-group'>
			<div className='square-bracket-left' />
			<ul className='tags'>
				{tags.map(tag => {
					return <li>{tag}</li>;
				})}
			</ul>
			<div className='square-bracket-right' />
		</div>
	);
};

const getLinkContent = links => {
	return (
		<div className='buttons'>
			{links.map(link => {
				return (
					<a href={link.url}>
						<SvgImage name={link.text.toLowerCase()} small={true} />
						{link.text}
					</a>
				);
			})}
		</div>
	);
};

export const ProjectInfo = props => {
	return (
		<div className='project-info'>
			<div className='curly-bracket-left' />
			<div className='content'>
				{props.screenshot ? <Image src={props.screenshot} className='image' /> : <div className='image' />}
				<div className='right'>
					<p className='title'>{props.title}</p>
					<p className='desc'>{props.description}</p>
					{getLinkContent(props.links)}
					{getTagContent(props.tags)}
				</div>
			</div>
			<div className='curly-bracket-right' />
		</div>
	);
};
