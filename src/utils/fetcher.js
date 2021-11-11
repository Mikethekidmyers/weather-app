export default async function weatherDataFetcher(lat, long, setWeatherData){
	const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${long}`;
	const res = await fetch(url).then(data => data.json());
	
	setWeatherData(res);
}