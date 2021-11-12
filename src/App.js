import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Wrapper } from './components/Visuals';
import Header from './components/Header';
import Head from './components/Head';
import weatherDataFetcher from './utils/fetcher';
import ListModule from './components/ListModule';
import Geocode from 'react-geocode';

Geocode.setApiKey(process.env.REACT_APP_GEO_API_KEY);
Geocode.setLocationType("ROOFTOP");

function App() {
	const [weatherData, setWeatherData] = useState(null);
	const [userLocation, setUserLocation] = useState(null);
	useEffect(() => {
		if("geolocation" in navigator){
			//The 1st param is a successfunc and the 2nd is the error handler
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;

				weatherDataFetcher(latitude, longitude, setWeatherData);
				
				Geocode.fromLatLng(latitude, longitude).then(
					(response) => {
						const { long_name } = response.results[0].address_components.find(({ types }) => types.includes('postal_town'));
						setUserLocation(long_name);
					},
					(error) => {
						console.error(error);
					}
				);
			}, () => {
				alert('Using this app requires browser location services to be enabled.')
			});
		}
	}, []);

	if(!weatherData) return null;
	return (
		<HelmetProvider>
			<Head />
			<Header location={userLocation} />
			<Wrapper>
				<ListModule {...weatherData} />
			</Wrapper>
		</HelmetProvider>
	);
}

export default App;
