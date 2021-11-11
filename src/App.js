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
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;
				weatherDataFetcher(latitude, longitude, setWeatherData);
			});
		} else {
			//Do something if user has disabled location services
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
