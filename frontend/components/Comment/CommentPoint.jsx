import React from 'react';
import styles from './Comment.module.css';

const CommentPoint = ({ point, editable = false }) => {
	const halfStarStyle = (num) => {
		return {
			background: `linear-gradient(to right, #ffd602 ${num * 100}%, #212528 ${
				(1 - num) * 100
			}%)`,
			WebkitTextFillColor: 'transparent',
			backgroundClip: 'text',
			WebkitBackgroundClip: 'text',
		};
	};

	const renderStars = () => {
		const stars = [];
		for (let i = 0; i < 5; i++) {
			if (point - i > 1) {
				stars.push(
					<span style={{ color: '#ffd602' }} key={i}>
						&#9733;
					</span>,
				);
			} else if (1 > point - i && point - i > 0) {
				stars.push(
					<span key={i} style={halfStarStyle(point - i)}>
						&#9733;
					</span>,
				);
			} else {
				stars.push(<span key={i}>&#9733;</span>);
			}
		}
		return stars;
	};
	return (
		<div className={styles.pointWrapper}>
			<span>{point}</span>
			{renderStars()}
		</div>
	);
};

export default CommentPoint;
