import dateFormatter from '../utils/dateFormat';

export default function formatData(data){
	if (!data) return;
	let formatted = [];
	data.properties?.timeseries?.forEach(({ time, data }) => {
		const { date, hour } = dateFormatter(time);
		formatted.push({ 'date': date, data: { ...data.instant.details, hour } });
	});

	const arr = Object.values(formatted.reduce((obj, curr) => {
		if (!obj[curr.date]) obj[curr.date] = { date: curr.date, data: [] };

		obj[curr.date]['data'].push(curr.data);
		return obj;
	}, {}));

	return arr;
}