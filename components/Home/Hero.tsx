import { Fragment } from 'react';

const Hero = () => {
	return (
		<main className="mt- mx-auto max-w-7xl px-4 py-32  md:py-48 sm:mt-1">
			<div className="text-center">
				<h1 className="text-8xl tracking-tight text-gray-900 sm:text-5xl md:text-8xl">
					<span className="block xl:inline">Modernize Your</span>{' '}
					<span className="block text-red-600 xl:inline">Web Presence</span>
				</h1>
				<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
					cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
					aliqua.
				</p>
				<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
					<div className="rounded-md shadow">
						<a
							href="#"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
						>
							Get started
						</a>
					</div>
					<div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
						<a
							href="#"
							className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
						>
							Live demo
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
