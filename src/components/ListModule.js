import { useMemo } from 'react';
import styled from 'styled-components';
import formatData from '../utils/formatData';

export default function ListModule(data){
	const formattedData = useMemo(() => formatData(data), [data]);
	return(
		<List>
			{formattedData.map(({ date, data }, i) => {
				return (
					<li key={i}>
						<h2>{date}</h2>
						{data.map((
						{ 
							hour, 
							air_temperature, 
							relative_humidity, 
							wind_speed
						}, i) => {
							return(
								<section key={i}>
									<h3>{hour}</h3>
									<p>{air_temperature} grader celsius</p>
									<p>{relative_humidity}% luftfuktighet</p>
									<p>{wind_speed} m/s</p>
								</section>
							)
						})}
					</li>
				);
			})}
		</List>
	)
}

const List = styled.ul`
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
`;