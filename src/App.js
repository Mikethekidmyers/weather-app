import { useEffect } from 'react';
import { Wrapper } from './components/Visuals';
import Header from './components/Header';
import Head from './components/Head';

function App() {
	useEffect(() => {
		if("geolocation" in navigator)
			console.log(navigator);
	}, []);
	return (
		<div className="App">
			<Head />
			<Header />
			<Wrapper>

			</Wrapper>
		</div>
	);
}

export default App;
