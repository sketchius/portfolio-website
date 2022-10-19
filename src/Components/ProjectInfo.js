import './Components.css';

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
				return <a href={link.url}>{link.text}</a>;
			})}
		</div>
	);
};

export const ProjectInfo = props => {
	return (
		<div className='project-info'>
			<div className='curly-bracket-left' />
			<div className='content'>
				<div className='left'>
					<div className='image-holder'>
						{props.screenshot ? (
							<img src={props.screenshot} className='image' />
						) : (
							<div className='image' />
						)}
					</div>
					{getLinkContent(props.links)}
				</div>
				<div className='right'>
					<p className='title'>{props.title}</p>
					<p className='desc'>{props.description}</p>
					{getTagContent(props.tags)}
				</div>
			</div>
			<div className='curly-bracket-right' />
		</div>
	);
};
