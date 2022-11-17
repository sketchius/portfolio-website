import MainImage from './media/main-image.jpg';
import SketchImage from './media/sketch.png';
import Step1Image from './media/step1.png';
import Step2Image from './media/step2.png';
import Step3Image from './media/step3.png';

const Body = () => {
	return (
		<article>
			<p>
				Wireframes are an excellent tool for web design. They allow you to brainstorm layout ideas, help
				communicate designs, and act as a blueprint for your code. In this article, I'm going to focus on that
				last one. Let's say you're making a forum post component and have sketched out a wireframe design like
				the image below.
			</p>
			<img src={SketchImage} alt='sketch design for forum post component' className='large-image' />
			<p>
				At this point, you could jump in and start coding. Do you ever find yourself getting mixed up about
				which elements belong to which containers? How about what classname you used for a particular element? I
				know I do from time to time. A simple wireframe sketch doesn't help so much with these issues. Instead,
				I find myself scrolling through a sea of HTML tags and selectors trying to keep everything straight.
			</p>
			<h2>
				Introducting: the <strong>deconstructed wireframe</strong>.
			</h2>
			<p>
				What is a deconstructed wireframe? It's basically an{' '}
				<a href='https://www.google.com/search?q=exploded+view+illustration&tbm=isch'>
					{'exploded view illustration'}
				</a>{' '}
				of your component, so you can see the containers individually. All you need is a pencil and paper!{' '}
				<small>
					Note: I've used Illustrator for these Illustrations, but that was just to make them look pretty.
				</small>
			</p>
			<img src={Step1Image} alt='step 1 illutration' className='large-image' />
			<p>
				Start by drawing the outermost container. Label it with what you expect to use as a semantic tag or
				class name. Next, draw in all of its <em>direct</em> children. For this container, there are two direct
				children: the <code>user</code> section on left and the <code>post</code> section on the right. Draw a
				thin line to show the seperation between child containers.
			</p>
			<img src={Step2Image} alt='step 2 illutration' className='large-image' />
			<p>
				Next, redraw each of the child containers below the original, again providing a label at the top and
				drawing in their direct children. Draw arrows from the first container to the redrawn children. Note
				that some of the children of our <code>post</code> section don’t have any of their own children. For
				these we’ll give them a clear and concise label.
			</p>
			<p>
				Continue this process until we’ve iterated through all of the layers, making sure to draw each step
				below the previous. Out example just needs one more step:
			</p>
			<img src={Step3Image} alt='step 3 illutration' className='large-image' />
			<p>That’s it! Now we have a simple reference that shows us at a glance:</p>
			<ul>
				<li>The hierarchy of elements from top to bottom.</li>
				<li>The class name or semantic tag for each container.</li>
				<li>A label for each childless component.</li>
			</ul>
			<h2>Other techniques</h2>
		</article>
	);
};

export const data = {
	title: 'Explode your wireframe',
	mainImage: MainImage,
	mainImageAlt: 'exploded view illustration',
	caption: 'A technique to help streamline your layout and styling workflow.',
	subTitle: 'Deconstructing a design to make a blueprint',
	author: 'Bryce Huhtala',
	authorLink: '/',
	publishDate: '11/5/2022',
	body: <Body />,
};

// export const Card = props => {
// 	return (
// 		<div className='blog'>
// 			<BlogCard
// 				mainImage={MainImage}
// 				caption={data.caption}
// 				title={data.title}
// 				subTitle={data.subTitle}
// 				author={data.author}
// 				authorLink={data.authorLink}
// 				publishDate={data.publishDate}
// 				body={<Body />}
// 			/>
// 		</div>
// 	);
// };
