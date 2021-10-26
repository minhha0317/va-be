import { Container, Card, Button, Row } from 'react-bootstrap';
import NextLink from 'next/link';

import MainLayout from '../components/layouts/MainLayout';
import styles from '../styles/Home.module.css';
import { videos } from '../data/videos';

export default function Home() {
	return (
		<MainLayout>
			<Container>
				<Row>
					<div className={styles.videoList}>
						{videos.map((video) => (
							<Card className={styles.videoCard} key={video._id}>
								<Card.Img variant="top" src="/images/avatar-default.jpg" />
								<Card.Body>
									<Card.Title>{video.name}</Card.Title>
									<Card.Text>{video.description}</Card.Text>
									<NextLink href={`/videos/${video._id}`}>
										<Button variant="primary">See now</Button>
									</NextLink>
								</Card.Body>
							</Card>
						))}
					</div>
				</Row>
			</Container>
		</MainLayout>
	);
}
