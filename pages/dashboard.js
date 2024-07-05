import React from 'react';
import DashboardLayout from '../components/dashboardLayout';
import Title from '../components/title';
import Image from 'next/image';
import Carousel from '../public/images/Carousel.jpg';
import Illus from '../public/images/productIlustr.svg'

export default function Dashboard() {
	return (
		<div className=''>
			<Title />
		</div>
	);
}

Dashboard.Layout = DashboardLayout;
