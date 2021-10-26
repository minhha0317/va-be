import React from 'react';
import { Image } from 'react-bootstrap';
import { users } from '../../data/users';

import styles from './Comment.module.css';
import CommentPoint from './CommentPoint';

const CommentItem = ({ review }) => {
	const user = users.find((u) => u._id === review.userId);

	const dateFormat = (dateString) => {
		const year = new Date(dateString).getFullYear();
		const month = new Date(dateString).getMonth() + 1;
		const date = new Date(dateString).getDate();
		return `${date}/${month}/${year}`;
	};

	return (
		<li className={styles.commentWrapper}>
			<div className={styles.commentAvatar}>
				<Image src={user.avatar} alt="user_avatar" roundedCircle width="40" />
			</div>
			<div className={styles.commentMain}>
				<div className={styles.commentHeader}>
					<span className={styles.commenter}>{user.fullname}</span>&nbsp;
					<span className={styles.ago}>{dateFormat(review.createdAt)}</span>
				</div>
				<div className={styles.commentText}>{review.content}</div>
			</div>
			<CommentPoint point={review.point} />
		</li>
	);
};

export default CommentItem;
