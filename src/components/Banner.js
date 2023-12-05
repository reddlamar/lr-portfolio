import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/lamar.jpg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='aligh-items-center'>
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							<div>
								<span className='tagline'>Welcome to my Portfolio</span>
								<h2>{`Hi, My name is Lamar Redd`}</h2>
								<p class='about-wrapper__info-text'>
									I have 10 years of on-the-job coding experience. The last two
									years have been transformative where my coding skills and
									performance have been put to the test, proven, and honed.
									Advanced front-end developer with intermediate back-end
									experience, ready for the next web-based challenge.
								</p>
								<div class='about-wrapper__info-text fs-3'>
									<p>
										<span class='fw-bold'>Education:</span> Bachelor of Science
										degree in Computer Science from California State University
										Dominguez Hills.
									</p>
									<p>
										<span class='fw-bold'>Location:</span> Based in San Diego,
										California, with a strong connection to the Sacramento area
									</p>
									<p>
										<span class='fw-bold'>Interests and Hobbies:</span>
										<ul class='fs-5'>
											<li>
												Passionate about continuous learning and improvement in
												software engineering, I dedicate my free time to reading
												books that enhance my skills, with Robert C. Martin
												being one of my favorite authors.
											</li>
											<li>
												As an avid sports enthusiast, I enjoy watching various
												sports, with basketball being my favorite. I also find
												enjoyment in participating in fantasy sports leagues for
												recreational purposes.
											</li>
										</ul>
										By leveraging my extensive experience, education, and
										passion for software development, I am dedicated to
										delivering professional, high-quality solutions to meet the
										demands of the ever-evolving software development landscape.
									</p>
								</div>
								{/* <button onClick={() => console.log('connect')}>
									Let’s Connect <ArrowRightCircle size={25} />
								</button> */}
							</div>
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							<div className={'animate__animated animate__fadeInRight'}>
								<img src={headerImg} alt='Header Img' />
							</div>
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
