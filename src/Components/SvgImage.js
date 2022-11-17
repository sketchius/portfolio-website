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
import { ReactComponent as Code } from './../svg/code.svg';
import { ReactComponent as Live } from './../svg/live.svg';
import { ReactComponent as About } from './../svg/about.svg';

export const SvgImage = props => {
	let className = 'svg-icon';

	if (props.small) {
		className = 'svg-icon small';
	}

	switch (props.name) {
		case 'html':
			return <HtmlIcon className={className} />;
		case 'css':
			return <CssIcon className={className} />;
		case 'javascript':
			return <JavascriptIcon className={className} />;
		case 'react':
			return <ReactIcon className={className} />;
		case 'checkmark':
			return <Checkmark className={className} />;
		case 'plus':
			return <Plus className={className} />;
		case 'chart':
			return <Chart className={className} />;
		case 'github':
			return <Github className={className} />;
		case 'linkedin':
			return <Linkedin className={className} />;
		case 'resume':
			return <Resume className={className} />;
		case 'node':
			return <Node className={className} />;
		case 'express':
			return <Express className={className} />;
		case 'mongo':
			return <Mongo className={className} />;
		case 'java':
			return <Java className={className} />;
		case 'illustrator':
			return <Illustrator className={className} />;
		case 'photoshop':
			return <Photoshop className={className} />;
		case 'resolve':
			return <Resolve className={className} />;
		case 'api':
			return <Api className={className} />;
		case 'code':
			return <Code className={className + ' no-fill'} />;
		case 'live':
			return <Live className={className + ' no-fill'} />;
		case 'about':
			return <About className={className + ' no-fill'} />;
		default:
			return <div>?</div>;
	}
};
