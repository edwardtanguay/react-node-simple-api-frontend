import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageInfo = () => {
	const { appTitle } = useContext(AppContext);

	return (
		<div className="pageInfo">
			<Helmet>
				<title>{appTitle} - Info</title>
			</Helmet>
			<p>this is a test</p>
		</div>
	);
};