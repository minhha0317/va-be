import React, { useState } from 'react';
import { Image, FormControl, Button } from 'react-bootstrap';

import { userReviews } from '../../data/users';
import styles from './Comment.module.css';
import CommentItem from './CommentItem';

const CommentList = ({ videoId }) => {
	const [newComment, setNewComment] = useState('');
	const videoReviews = userReviews.filter((u) => u.videoId === videoId);

	const handleSubmitComment = () => {
		console.log(newComment);
	};

	return (
		<>
			<div className={styles.newComment}>
				<div className={styles.commentAvatar}>
					<Image
						src="/images/avatar-default.jpg"
						alt="user_avatar"
						roundedCircle
						width="40"
					/>
				</div>
				<div className={styles.commentMain}>
					<div className={styles.inputNewComment}>
						<FormControl
							as="textarea"
							value={newComment}
							rows="1"
							placeholder="New comment"
							onChange={(e) => setNewComment(e.target.value)}
						/>
					</div>
					<div className={styles.newCommentButtons}>
						<Button
							variant="dark"
							style={{ marginRight: '5px' }}
							onClick={() => setNewComment('')}>
							Cancel
						</Button>
						<Button variant="primary" onChange={handleSubmitComment}>
							Comment
						</Button>
					</div>
				</div>
			</div>
			<ul className={styles.commentList}>
				{videoReviews.map((re) => (
					<CommentItem review={re} key={re._id} />
				))}
			</ul>
		</>
	);
};

export default CommentList;
