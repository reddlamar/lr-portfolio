import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import faceDetectApp from '../assets/img/face-detect-logo.png';
import rcLogo from '../assets/img/RC_logo.jpg';
import monstersRolodexApp from '../assets/img/monster-rolodex-logo.png';
import lrclothinglogo from '../assets/img/lr-clothing-logo.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
	const projects = [
		{
			description: 'Robot Cache',
			imgUrl: rcLogo,
			appUrl: 'https://store.robotcache.com/',
		},
		{
			description: 'Face Recognition',
			imgUrl: faceDetectApp,
			appUrl: 'https://face-detection-app-6l1i.onrender.com/',
		},
		{
			description: 'Monsters Rolodex',
			imgUrl: monstersRolodexApp,
			appUrl: 'https://reddlamar.github.io/monster-rolodex/',
		},
		{
			description: 'LR Colthing',
			imgUrl: lrclothinglogo,
			appUrl: 'https://courageous-strudel-ecd3ae.netlify.app/',
		},
	];

	return (
		<section className='project' id='project'>
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							<div id='projects'>
								<h2>Projects</h2>
								<p>Below are the projects I have developed</p>
								<Tab.Container id='projects-tabs' defaultActiveKey='first'>
									<Nav
										variant='pills'
										className='nav-pills mb-5 justify-content-center align-items-center'
										id='pills-tab'></Nav>
									<Tab.Content id='slideInUp'>
										<Tab.Pane eventKey='first'>
											<Row>
												{projects.map((project, index) => {
													return <ProjectCard key={index} {...project} />;
												})}
											</Row>
										</Tab.Pane>
									</Tab.Content>
								</Tab.Container>
							</div>
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			{/* <img className="background-image-right" src={colorSharp2}></img> */}
		</section>
	);
};
