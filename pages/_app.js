import '../styles/globals.css';
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
	const Layout = Component.Layout || EmptyLayout;
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;

