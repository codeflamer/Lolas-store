import Image from 'next/image';
import ArrowRight from '../public/images/ArrowRight.svg';
import BeautifulLady from '../public/images/BeautifulLady.svg';
import Burger from '../public/images/Burger.svg';
import Logo from '../public/images/Logo.svg'

const Navbar = ({ handleClose }) => {
	return (
		<div className='bg-white w-full flex items-center font-Roboto px-5 justify-between py-3 shadow-md'>
			<section>
				<div className='sm:hidden flex justify-between item-center'>
					<div>
						<Image src={Burger} alt='Profile picture' />
					</div>
					<div className='relative w-[91px] h-[39px]'>
						<Image src={Logo} alt='webStore' layout='fill' />
					</div>
				</div>
				<div className='md:flex space-x-[20px] hidden'>
					<Image
						src={ArrowRight}
						alt='Arrowleft'
						className='cursor-pointer'
						onClick={handleClose}
					/>
					<div className=''>
						<h3 className='text-[#9CA3AF] text-xs md:text-sm font-medium'>
							Keep track of your store
						</h3>
						<h2 className='text-lg md:text-xl font-Roboto font-semibold'>
							September, 2020
						</h2>
					</div>
				</div>
			</section>
			<section className='flex space-x-[12px] items-center'>
				<div className='hidden sm:flex'>
					<Image src={BeautifulLady} alt='Profile picture' />
				</div>
				<div className='hidden sm:block'>
					<h4 className='text-[14px] md:text-[18px]  font-medium'>
						Adam Smith
					</h4>
					<span className='text-[12px] font-medium text-[#9CA3AF]'>
						Kingjamesegun@gmail.com
					</span>
				</div>
			</section>
		</div>
	);
};

export default Navbar;
