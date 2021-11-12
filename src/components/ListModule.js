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
						<table>
							<thead>
								<tr>
									<th>{date}</th>
									<th>℃</th>
									<th>Humidity</th>
									<th>Wind speed</th>
								</tr>
							</thead>
							{data.map(({ 
								hour, 
								air_temperature, 
								relative_humidity, 
								wind_speed
							}, i) => {
								return(
									<tbody key={i}>
										<tr>
											<td>{hour}</td>
											<td>{air_temperature}℃</td>
											<td>{relative_humidity}%</td>
											<td>{wind_speed}m/s</td>
										</tr>
									</tbody>
								)
							})}
						</table>
					</li>
				);
			})}
		</List>
	)
}

const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
    list-style-type: none;
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
	width: 100%;
	font-size: 14px;
	li{
		padding-bottom: 2rem;
	}
	table{
		border-collapse: collapse;
		tr{
			border-bottom: 1px solid gray;
			td, th{
				padding: .5rem;
			}
		}
	}
`;