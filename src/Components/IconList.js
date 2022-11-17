import './Components.css';
import { SvgImage } from './SvgImage';

import { ReactComponent as LeftCurlyBracket } from './../svg/left-bracket.svg';
import { ReactComponent as RightCurlyBracket } from './../svg/right-bracket.svg';

const getListChildren = list => {
	return list.map((listItem, i) => {
		return (
			<div className='bracket-layout'>
				<div className='left-curly-bracket' />
				<div key={i} className={'list-element'}>
					{listItem.icon && (
						<div className='icon'>
							<SvgImage name={listItem.icon}></SvgImage>
						</div>
					)}
					<div className='compound-text'>
						<div className='text'>{listItem.text}</div>
						<div className='subtext'>{listItem.subtext}</div>
					</div>
				</div>
				<div className='right-curly-bracket' />
				<div className='comma'>{i + 1 == list.length ? ' ' : ','}</div>
			</div>
		);
	});
};

export const IconList = props => {
	return (
		<div className='icon-list'>
			{props.image && <img src={props.image} alt={props.imageAlt} />}
			<div className='title'>
				<span className='const'>const </span>
				<span className='name'>{props.title}</span>
				<span className='punctuation'> =</span>
			</div>
			<div className='bracket-group'>
				{props.brackets && <view className='bracket-left'></view>}
				<div className='container'>{props.list && getListChildren(props.list)}</div>
				{props.brackets && <view className='bracket-right'></view>}
				<div className='semicolon'>;</div>
			</div>
		</div>
	);
};
