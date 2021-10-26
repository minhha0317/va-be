import React from 'react';
import { useRouter } from 'next/dist/client/router';
import NextLink from 'next/link';
import { Container, Ratio, Button } from 'react-bootstrap';

import MainLayout from '../../components/layouts/MainLayout';
import { videos } from '../../data/videos';
import CommentList from '../../components/Comment/CommentList';

const VideoPage = () => {
	const router = useRouter();
	const { id } = router.query;
	const video = videos.find((v) => v._id === id);
	if (!video) return <div>Video not found!</div>;

	return (
		<MainLayout>
			<Container>
				<NextLink href="/">
					<Button variant="primary" className="mb-3">
						Back to Home
					</Button>
				</NextLink>
				<Ratio aspectRatio="16x9">
					<iframe width="100%" src={video.url}></iframe>
				</Ratio>
				<h1>{video.name}</h1>
				<p>{video.description}</p>
				<CommentList videoId={id} />
			</Container>
		</MainLayout>
	);
};

export default VideoPage;
