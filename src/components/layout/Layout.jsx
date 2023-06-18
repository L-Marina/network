import { Outlet} from 'react-router-dom';

import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import classes from './Layout.module.css';


const Layout = () => {
	return (
		<div className={classes.layout}>
				<Header />

				<div className={classes.wrapper}>
					<Navbar />
					<div className={classes.content}>
						<Outlet />
					</div>
				</div>
		</div>
	)
}

export default Layout;