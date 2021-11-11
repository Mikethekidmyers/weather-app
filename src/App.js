import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Wrapper } from './components/Visuals';
import Header from './components/Header';
import Head from './components/Head';
import weatherDataFetcher from './utils/fetcher';
import ListModule from './components/ListModule';

function App() {
	const [weatherData, setWeatherData] = useState();
	useEffect(() => {
		if("geolocation" in navigator){
			//The 1st param is a successfunc and the 2nd is the error handler
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;
				weatherDataFetcher(latitude, longitude, setWeatherData);
			}, () => {
				alert('Using this app requires browser location services to be enabled.')
			});
		}
	}, []);

	if(!weatherData) return null;
	return (
		<HelmetProvider>
			<Head />
			<Header />
			<Wrapper>
				<ListModule {...weatherData} />
			</Wrapper>
		</HelmetProvider>
	);
}

export default App;
