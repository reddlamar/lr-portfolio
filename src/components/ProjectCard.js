import { Col } from 'react-bootstrap';

export const ProjectCard = ({ description, imgUrl, appUrl }) => {
	return (
		<Col size={12} sm={6} md={4}>
			<div className='proj-imgbx'>
				<a href={appUrl} target='__blank'>
					<img src={imgUrl} alt={description} />
					<div className='proj-txtx'>
						<h4>{description}</h4>
					</div>
				</a>
			</div>
		</Col>
	);
};
