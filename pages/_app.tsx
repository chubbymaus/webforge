import 'tailwindcss/tailwind.css';
import './global.css';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
const Webforge = ({ Component, pageProps }) => {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
};

export default Webforge;
