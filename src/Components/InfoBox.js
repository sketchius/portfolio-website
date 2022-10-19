import './Components.css';
import { SvgImage } from './SvgImage';

export const InfoBox = props => {
	return (
		<div className='info-box'>
			<div className='icon-placeholder'></div>
			<div className='title'>
				{props.showTitleIcon && <SvgImage name={'checkmark'} className={'title-icon'}></SvgImage>}
				{props.title}
			</div>
			<p>{props.text}</p>
		</div>
	);
};
