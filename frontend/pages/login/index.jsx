import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFromStorage, login } from '../../redux/actions/userActions';
import { useRouter } from 'next/router';

const LoginScreen = ({ location, history }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();
	// const redirect = location.search ? location.search.split('=')[1] : '/';
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { loading, error, userInfo } = userLogin;

	useEffect(() => {
		// dispatch(getUserFromStorage());
		console.log(history);
		console.log(location);
		console.log(userInfo);
		if (userInfo) {
			router.push('/');
		}
	}, [userInfo]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(login(email, password));
		console.log(localStorage.getItem('userInfo'));
		// const { data } = await axiosPost('/api/users/login', {
		// 	email,
		// 	password,
		// });
	};

	return (
		<Container>
			<Row>
				<Col>
					<div
						style={{
							height: '100vh',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<Form
							onSubmit={handleSubmit}
							style={{
								flexBasis: '350px',
								border: 'solid 1px #aaa',
								padding: '20px',
								borderRadius: '5px',
							}}>
							<h2>Login</h2>
							<Form.Group controlId="email">
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</Form.Group>
							<Form.Group controlId="password" className="mt-3">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Enter Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>
							<Button className="mt-3" type="submit" variant="primary">
								Sign In
							</Button>
						</Form>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginScreen;
