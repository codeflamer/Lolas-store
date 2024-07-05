import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
	const [closed, setClosed] = React.useState(true);
	return (
		<div className='h-screen bg-[#E5E7EB] flex mx-auto max-w-screen-2xl'>
			{closed && (
				<section className='mr-1 hidden transform duration-150 ease-in-out lg:flex'>
					<Sidebar />
				</section>
			)}
			<section className='flex-grow'>
				<Navbar handleClose={() => setClosed(!closed)} />
				<main className='p-5'>
					{/* main content comes here */}
					{children}
				</main>
			</section>
		</div>
	);
};

export default Layout;
