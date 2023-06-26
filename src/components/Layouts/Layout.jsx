import React from 'react';
import { Outlet} from 'react-router-dom';

import Header from '../Header';
import Navbar from '../Navbar';
import Footer  from '../Footer';
import classes from './Layout.module.css';


export const Layout = () => {
	return (
		<div className={classes.layout}>
				<Header />

				<div className={classes.wrapper}>
					<Navbar />
					<div className={classes.content}>
						<Outlet />
					</div>
				</div>

				<Footer />

		</div>
	)
}
