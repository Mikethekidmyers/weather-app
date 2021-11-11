import { format, isToday } from 'date-fns';

export default function dateFormatter(time){
	const dateObj = new Date(time);
	const date = format(dateObj, 'do LLLL');
	const today = isToday(dateObj);
	const hour = format(dateObj, 'HH:mm');

	return { today, date, hour };
}