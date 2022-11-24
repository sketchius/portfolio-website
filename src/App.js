import Image from 'next/image';

import { SectionHeader } from './Components/SectionHeader';
import { IconList } from './Components/IconList';
import { BlogCard } from './Components/BlogCard';
import PortraitSVG from '../public/assets/svg/portrait.svg';
import BackgroundSVG from '../public/assets/svg/landing-page-background.svg';
import { ProjectInfo } from './Components/ProjectInfo';
import { InfoBox } from './Components/InfoBox';
import { SvgImage } from './Components/SvgImage';
import Arrow from '../public/assets/svg/arrow-down.svg';
import profilePicture from '../public/assets/jpg/profile.jpg';

import React from 'react';

// import resume from '../public/assets/doc/Bryce Huhtala Resume.pdf';

import websiteScreenshot from '../public/assets/jpg/PorfolioWebsiteScreenshot.jpg';
import ttcScreenshot from '../public/assets/jpg/TTCScreenshot.jpg';
import rsgScreenshot from './blog/article/robot-alien-game/media/screenshot2.jpg';
import { BlogArticle } from './blog/BlogArticle';
import { BlogArticlePreview } from './blog/BlogArticlePreview';
import { BlogList } from './blog/BlogList';
import { getBlogData } from './blog/Blog';

import frontEndIcon from '../public/assets/png/front-end-icon.png';
import backEndIcon from '../public/assets/png/back-end-icon.png';
import designIcon from '../public/assets/png/design-icon.png';
import { useState, useEffect, useRef } from 'react';

function App() {
	const aboutSectionRef = useRef(null);
	const skillSectionRef = useRef(null);
	const projectSectionRef = useRef(null);
	const blogSectionRef = useRef(null);
	const [currentSection, setCurrentSection] = useState(0);

	const handleScroll = event => {
		const aboutSectionStart = aboutSectionRef.current.offsetTop - window.innerHeight / 2;
		const skillSectionStart = skillSectionRef.current.offsetTop - window.innerHeight / 2;
		const projectSectionStart = projectSectionRef.current.offsetTop - window.innerHeight / 2;
		const blogSectionStart = blogSectionRef.current.offsetTop - window.innerHeight / 2;

		if (event.target.documentElement.scrollTop > blogSectionStart) setCurrentSection(4);
		else if (event.target.documentElement.scrollTop > projectSectionStart) setCurrentSection(3);
		else if (event.target.documentElement.scrollTop > skillSectionStart) setCurrentSection(2);
		else if (event.target.documentElement.scrollTop > aboutSectionStart) setCurrentSection(1);
		else setCurrentSection(0);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className='app'>
			<section className='landing-page'>
				<div className='background'>
					<BackgroundSVG className='svg' />
				</div>
				<div className='flex-spacer' />
				<div className='content'>
					<h1>
						Hi, I'm <strong>Bryce</strong>.
					</h1>
					<div className='code-section'>
						<code className='line-numbers'>
							<p>1</p>
							<p>3</p>
							<p>3</p>
							<p>4</p>
							<p>5</p>
							<p>6</p>
						</code>
						<code>
							<p>
								<span className='keyword'>const</span> <span className='variable'>bryceHuhtala</span>
								<span className='punctuation'> =</span>
							</p>
							<p className='square-bracket'>[</p>
							<p>
								<span className='string'>'Web Developer'</span>
								<span className='punctuation'>,</span>
							</p>
							<p>
								<span className='string'>'Designer'</span>
								<span className='punctuation'>,</span>
							</p>
							<p>
								<span className='string'>'Artist'</span>
								<span className='punctuation'>,</span>
							</p>
							<p>
								<span className='square-bracket'>]</span>
								<span className='punctuation'>;</span>
							</p>
						</code>
					</div>
				</div>
				<div className='portrait'>
					<PortraitSVG></PortraitSVG>
				</div>
				<div className='arrow-down'>
					<Arrow className='arrow-down-svg' />
					<p>SCROLL DOWN</p>
				</div>
			</section>
			<div className='main'>
				<nav>
					<div className='margin'></div>

					<menu>
						<li>
							<a href='#about' className={currentSection == 1 ? 'active' : ''}>
								<span className='number'>01</span>
								About
							</a>
						</li>
						<li>
							<a href='#skills' className={currentSection == 2 ? 'active' : ''}>
								<span className='number'>02</span>
								Skills
							</a>
						</li>
						<li>
							<a href='#projects' className={currentSection == 3 ? 'active' : ''}>
								<span className='number'>03</span>
								Projects
							</a>
						</li>
						<li>
							<a href='#blog' className={currentSection == 4 ? 'active' : ''}>
								<span className='number'>04</span>
								Blog
							</a>
						</li>
					</menu>
					<div className='margin'></div>
				</nav>
				<div className='flex-container'>
					<div className='margin'></div>
					<div className='main-content'>
						<section id='about-section' ref={aboutSectionRef}>
							<a name='about' className='anchor' />
							<SectionHeader number={'01'} title={'About Me'}></SectionHeader>
							<article>
								<div className='left'>
									<figure>
										<Image
											src={profilePicture}
											className='jpg'
											alt='photo of Bryce with his cat Mochi'
										/>
										<figcaption>Figure 1: Mochi the cat.</figcaption>
									</figure>
									<div className='socials'>
										<a href='https://github.com/sketchius' alt='Github Link'>
											<SvgImage name='github' />
											<label className='testt'>GitHub</label>
										</a>
										<a href='https://www.linkedin.com/in/bryce-huhtala/' alt='LinkedIn Link'>
											<SvgImage name='linkedin' />
											<label className='testt'>LinkedIn</label>
										</a>
										<a href={''} alt='Resume Link'>
											<SvgImage name='resume' />
											<label className='testt'>Resume</label>
										</a>
									</div>
								</div>
								<div className='right'>
									<p>
										Hello! My name is Bryce Huhtala. I currently reside in Cincinnati, Ohio with my
										partner and our cat, Mochi. I was born and raised in Wyoming, and I went to
										school at University of Wyoming, where I earned a Bachelor’s degree in art.
										Since school, I’ve put my abilities to use as a freelance graphic designer,
										illustrator, and portrait artist, but ultimately decided I’d like to move into
										coding as a career.
									</p>
									<p>
										I’ve been programming on and off as a hobby since 1999. It’s something I’ve
										always loved to do and over the last year I’ve dedicated myself to expanding my
										technical knowledge and putting my programming skills specifically toward web
										development. My focus is on the MERN stack (Mongo, Express, React, Node), and I
										find myself enjoying both front end and back end development.
									</p>
									<h2>My Strengths</h2>
									<p>
										<strong>Quality:</strong> If I’m putting my time into something, I want to do a
										good job. I think it’s important to take pride in one’s work. I try to set a
										high standard of quality, and then look for ways to streamline my process.
									</p>
									<p>
										<strong>Curiosity:</strong> To me, It’s satisfying to deconstruct things so as
										to understand the mechanics and principles that make them work. I also enjoy
										finding different approaches to solving a problem and finding different ways to
										present an idea. My background in art and design allows me to approach projects
										with a broad perspective, considering function as well as look and feel.
									</p>
									<p>
										<strong>Positivity:</strong> I look for the good in people and try to contribute
										to a harmonious and collaborative work environment. I’d rather help someone else
										succeed than try and prove that I’m better than them. I find that there’s
										something to learn from everyone I meet, if I just take the time to look for it.
									</p>
								</div>
							</article>
						</section>
						<section id='skills-section' ref={skillSectionRef}>
							<a name='skills' className='anchor' />
							<SectionHeader
								className={'section-header'}
								number={'02'}
								title={'Skills and Technologies'}></SectionHeader>
							<article>
								<IconList
									image={frontEndIcon}
									imageAlt={'Front-end Icon'}
									className={'bullet-list'}
									title={'frontEndTech'}
									brackets={true}
									list={[
										{
											icon: 'html',
											text: 'HTML',
											subtext: 'HTML5, Semantic',
										},
										{
											icon: 'css',
											text: 'CSS',
											subtext: 'CSS3, Flex/Grid, Mobile-First Design',
										},
										{
											icon: 'javascript',
											text: 'Javascript',
											subtext: 'ES6, Typescript, Async, TDD/Jest',
										},
										{
											icon: 'react',
											text: 'React',
											subtext: 'Hooks, Redux, React Native',
										},
										{
											icon: 'next',
											text: 'Next.js',
											subtext: 'SSG, Routing',
										},
									]}
								/>
								<IconList
									image={backEndIcon}
									imageAlt={'Back-end Icon'}
									className={'bullet-list'}
									title={'backEndTech'}
									brackets={true}
									list={[
										{
											icon: 'node',
											text: 'NodeJS',
											subtext: 'JWT, bcrypt, Express',
										},
										{
											icon: 'api',
											text: 'HTTP / api',
											subtext: 'HTTP Requests, Status Codes',
										},
										{
											icon: 'mongo',
											text: 'MongoDB',
											subtext: 'CRUD, Atlas, Mongoose',
										},
										{
											icon: 'java',
											text: 'Java',
											subtext: 'Familiarity',
										},
									]}
								/>
								<IconList
									image={designIcon}
									imageAlt={'Design Icon'}
									className={'bullet-list'}
									title={'designTech'}
									brackets={true}
									list={[
										{
											icon: 'illustrator',
											text: 'Illustrator',
											subtext: 'SVG, Print Design, Layout Mock-ups',
										},
										{
											icon: 'photoshop',
											text: 'Photoshop',
											subtext: 'Image Editing, Digital Painting',
										},
										{
											icon: 'resolve',
											text: 'DaVinci Resolve',
											subtext: 'Video Editing',
										},
									]}
								/>
							</article>
						</section>
						<section id='projects-section' ref={projectSectionRef}>
							<a name='projects' className='anchor' />

							<SectionHeader number={'03'} title={'Projects'}></SectionHeader>
							<article>
								<ProjectInfo
									title={'Task Traffic Control'}
									description={`A productivity app for capturing and keeping track of things that need to be done. Features optional server-side data backup.`}
									screenshot={ttcScreenshot}
									tags={['Android App', 'React Native', 'Redux', 'Node', 'Express', 'Mongo']}
									links={[
										{
											text: 'Code',
											url: 'https://github.com/sketchius/task-traffic-control',
										},
									]}
								/>
								<ProjectInfo
									title={'Personal Website'}
									description={`The very website you're viewing now! It serves as a portfolio for my work and a space for me to write blog articles.`}
									screenshot={websiteScreenshot}
									tags={['React', 'HTML', 'CSS', 'Mobile-First']}
									links={[
										{
											text: 'Code',
											url: 'https://github.com/sketchius/portfolio-website',
										},
										{
											text: 'Live',
											url: '/',
										},
									]}
								/>
								<ProjectInfo
									title={'Robosector Gamma'}
									description={`An arcade-strategy game where you play as a roboticist who must defend a space station from mysterious invaders.`}
									screenshot={rsgScreenshot}
									tags={['Java', 'LibGdx']}
									links={[
										{
											text: 'About',
											url: '/blog/robot-alien-game',
										},
									]}
								/>
							</article>
						</section>
						<section id='blog-section' ref={blogSectionRef}>
							<a name='blog' className='anchor' />

							<SectionHeader number={'04'} title={'Blog'}></SectionHeader>
							<article>
								<BlogList />
							</article>
						</section>
					</div>
					<div className='margin'></div>
				</div>
			</div>
		</div>
	);
}

export default App;
