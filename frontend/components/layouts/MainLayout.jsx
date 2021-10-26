import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import styles from './MainLayout.module.css';

const MainLayout = ({ children, description, title }) => {
	const loggedInAs = 'admin';
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
						<NextLink href="/" passHref>
							<Navbar.Brand>Video Annotator</Navbar.Brand>
						</NextLink>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<NextLink href="/" passHref>
									<Nav.Link>Home</Nav.Link>
								</NextLink>
								<NextLink href="/users" passHref>
									<Nav.Link>Users</Nav.Link>
								</NextLink>
							</Nav>
							{loggedInAs === 'admin' ? (
								<NavDropdown
									className="justify-content-end"
									title="Admin"
									id="basic-nav-dropdown">
									<NavDropdown.Item>Setting</NavDropdown.Item>
									<NavDropdown.Item>Logout</NavDropdown.Item>
								</NavDropdown>
							) : loggedInAs === 'user' ? (
								<Nav.Link>Log Out</Nav.Link>
							) : (
								<Nav.Link>Log In</Nav.Link>
							)}
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
