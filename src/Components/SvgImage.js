import './Components.css';
import { ReactComponent as HtmlIcon } from './../svg/html5.svg';
import { ReactComponent as CssIcon } from './../svg/css3.svg';
import { ReactComponent as JavascriptIcon } from './../svg/javascript.svg';
import { ReactComponent as ReactIcon } from './../svg/react.svg';
import { ReactComponent as Checkmark } from './../svg/checkmark.svg';
import { ReactComponent as Plus } from './../svg/plus.svg';
import { ReactComponent as Chart } from './../svg/chart.svg';
import { ReactComponent as Github } from './../svg/github.svg';
import { ReactComponent as Linkedin } from './../svg/linkedin.svg';
import { ReactComponent as Resume } from './../svg/attach.svg';
import { ReactComponent as Node } from './../svg/node.svg';
import { ReactComponent as Express } from './../svg/express.svg';
import { ReactComponent as Mongo } from './../svg/mongo.svg';
import { ReactComponent as Java } from './../svg/java.svg';
import { ReactComponent as Illustrator } from './../svg/illustrator.svg';
import { ReactComponent as Photoshop } from './../svg/photoshop.svg';
import { ReactComponent as Resolve } from './../svg/resolve.svg';
import { ReactComponent as Api } from './../svg/api.svg';

export const SvgImage = props => {
	switch (props.name) {
		case 'html':
			return <HtmlIcon className={'svg-icon'} />;
		case 'css':
			return <CssIcon className={'svg-icon'} />;
		case 'javascript':
			return <JavascriptIcon className={'svg-icon'} />;
		case 'react':
			return <ReactIcon className={'svg-icon'} />;
		case 'checkmark':
			return <Checkmark className={'svg-icon'} />;
		case 'plus':
			return <Plus className={'svg-icon'} />;
		case 'chart':
			return <Chart className={'svg-icon'} />;
		case 'github':
			return <Github className={'svg-icon'} />;
		case 'linkedin':
			return <Linkedin className={'svg-icon'} />;
		case 'resume':
			return <Resume className={'svg-icon'} />;
		case 'node':
			return <Node className={'svg-icon'} />;
		case 'express':
			return <Express className={'svg-icon'} />;
		case 'mongo':
			return <Mongo className={'svg-icon'} />;
		case 'java':
			return <Java className={'svg-icon'} />;
		case 'illustrator':
			return <Illustrator className={'svg-icon'} />;
		case 'photoshop':
			return <Photoshop className={'svg-icon'} />;
		case 'resolve':
			return <Resolve className={'svg-icon'} />;
		case 'api':
			return <Api className={'svg-icon'} />;
		default:
			return <div>?</div>;
	}
};
