import React from 'react';
import Layout from './Layout';
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing';
// import './nav.css'

const ConditionalLayout = ({ children, ...rest }) => (
	<ModalRoutingContext.Consumer>
		{({ modal, closeTo }) =>
			modal ? (
				<React.Fragment>
					<Link to={closeTo} className='close-button'>
						Close
					</Link>
					{children}
				</React.Fragment>
			) : (
				<Layout {...rest}>{children}</Layout>
			)}
	</ModalRoutingContext.Consumer>
);

export default ConditionalLayout;
