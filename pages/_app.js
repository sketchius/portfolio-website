import '../src/App.css';
import '../src/Components/Components.css';
import '../src/blog/blog.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<link rel='icon' type='image/png' sizes='32x32' href='/assets/svg/favicon-32.png' />
				<title>Bryce Huhtala | Web Developer</title>
			</Head>
			<Component {...pageProps} />
		</div>
	);
}
