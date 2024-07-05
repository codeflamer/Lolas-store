import React from 'react';
import Image from 'next/image';
import Dashboard from '../../public/images/Dashboard.png';

const SidePageLogin = () => {
	return (
		<div className='hidden sm:flex py-4 md:w-6/12 w-full h-screen lg:py-16 md:py-8 md:h-auto bg-input-border flex-col items-center text-white relative overflow-hidden'>
			<div className='lg:w-9/12 w-full px-2 mx-auto mb-12 flex flex-col items-center'>
				<div className='flex items-center justify-center mb-3'>
					<h2 className='font-semi-bold z-10 text-lg'>Create your own website store</h2>
					<div className='bg-pink h-5 w-5 rounded-full -ml-2 -mt-2 z-0'></div>
				</div>
				<p className='text-center text-xs font-light'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
					obcaecati? Dolore perspiciatis magnam, sapiente asperiores fuga quae
					sit et natus officia saepe voluptatibus dignissimos iure eligendi
					magni repellat quia omnis.
				</p>
			</div>
			<figure>
				<div className='absolute left-10 bottom-15 md:bottom-30 md:left-14 md:-right-20 -right-20 lg:left-20 lg:-right-20 lg:top-1/3'>
					<Image
						src={Dashboard}
						alt='Dashboard Image'
						width={855}
						height={520}
						objectFit='contain'
					/>
				</div>
				<div className='bg-pink h-20 w-20 rounded-full absolute bottom-24 md:bottom-34 lg:bottom-44 -left-10'></div>
			</figure>
		</div>
	);
};

export default SidePageLogin
