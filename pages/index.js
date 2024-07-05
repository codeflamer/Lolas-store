import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Lolas Store</title>
				<meta
					name='description'
					content='Lolas store is a web store which allows you to create your own store on the site and sell your goods and services.'
				/>
				<link rel='icon' href='images/LogoFavicon.png' />
			</Head>

			<main className='flex flex-col items-center pt-4'>
				<Link href='/login' as='/login'>
					<a>Login Page</a>
				</Link>
				<Link href='/signup' as='/signup'>
					<a>Sign up Page</a>
				</Link>
				<Link href='/toast'>
					<a>Toast </a>
				</Link>
        		<Link href='/dashboard'>
					<a>Dashboard </a>
				</Link>
			</main>
		</div>
	);
}
