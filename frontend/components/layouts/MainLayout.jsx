import React, { useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

import styles from './MainLayout.module.css';
import { logout, getUserFromStorage } from '../../redux/actions/userActions';

const MainLayout = ({ children, description, title }) => {
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUserFromStorage());
	}, []);

	const handleLogout = () => {
		dispatch(logout());
	};

	const generateLogoutBtn = () => {
		if (!userInfo) {
			return (
				<NextLink href="/login" passHref>
					<Nav.Link>Log In</Nav.Link>
				</NextLink>
			);
		} else {
			return (
				<NavDropdown
					className="justify-content-end"
					title={userInfo.fullname}
					id="basic-nav-dropdown">
					<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
				</NavDropdown>
			);
		}
	};
	return (
		<>
			<Head>
				{description && <meta name="description" content={description} />}
				<title>
					{title ? `${title} - Video Annotator` : 'Video Annotator'}
				</title>
			</Head>
			<div className={styles.appWrapper}>
				<Navbar bg="light" expand="lg">
					<Container>
						<NextLink href="/">
							<Navbar.Brand>Video Annotator</Navbar.Brand>
						</NextLink>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<NextLink href="/" passHref>
									<Nav.Link>Home</Nav.Link>
								</NextLink>
								{userInfo &&
									(userInfo.isAdmin ? (
										<>
											<NextLink href="/users" passHref>
												<Nav.Link>Users</Nav.Link>
											</NextLink>
											<NextLink href="/setting" passHref>
												<Nav.Link>Setting</Nav.Link>
											</NextLink>
										</>
									) : (
										<NextLink href="/userSetting" passHref>
											<Nav.Link>Setting</Nav.Link>
										</NextLink>
									))}
							</Nav>
							{generateLogoutBtn()}
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<section className={styles.appBody}>{children}</section>
				<footer className={styles.footer}>
					<Container>
						<p className="text-center">
							&copy; Video Annotator. All rights reserved!
						</p>
					</Container>
				</footer>
			</div>
		</>
	);
};

export default MainLayout;
