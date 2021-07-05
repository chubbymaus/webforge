import Head from 'next/head';
import Hero from '../components/Home/Hero';

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-full py-2">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/assets/webforge_icon.svg" />
			</Head>

			<Hero />
		</div>
	);
}
