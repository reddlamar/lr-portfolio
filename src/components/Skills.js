import reactlogo from '../assets/img/reactlogo.webp';
import jslogo from '../assets/img/jslogo.png';
import tailwindlogo from '../assets/img/tailwind-css-logo.jpg';
import gitlogo from '../assets/img/git-logo.png';
import htmllogo from '../assets/img/html5-logo.png';
import Carousel from 'react-multi-carousel';
import csslogo from '../assets/img/css3-logo.png';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className='skill' id='skills'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<div className='skill-bx wow zoomIn'>
							<h2>About Skills</h2>
							<p>
								I have learned different programming languages, frameworks and
								libraries. Checkout my skills below.<br></br>
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className='owl-carousel owl-theme skill-slider'>
								<div className='item'>
									<img src={reactlogo} alt='ReactJS' />
									<h5>ReactJS</h5>
								</div>
								<div className='item'>
									<img src={jslogo} alt='JavaScript' />
									<h5>JavaScript</h5>
								</div>
								<div className='item'>
									<img src={gitlogo} alt='Git' />
									<h5>Git</h5>
								</div>
								<div className='item'>
									<img src={tailwindlogo} alt='Tailwind CSS' />
									<h5>TailwindCSS</h5>
								</div>
								<div className='item'>
									<img src={htmllogo} alt='HTML' />
									<h5>HTML</h5>
								</div>
								<div className='item'>
									<img src={csslogo} alt='HTML' />
									<h5>CSS</h5>
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img
				className='background-image-left'
				src={colorSharp}
				alt='background-img'
			/>
		</section>
	);
};
